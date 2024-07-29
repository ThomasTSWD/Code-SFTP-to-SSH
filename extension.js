const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.sshConnect', async function () {
		const fileUri = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.document.uri : null;
		if (fileUri) {
			const filePath = fileUri.fsPath;

			if (path.basename(filePath) === 'sftp.json') {
				fs.readFile(filePath, 'utf8', async (err, data) => {
					if (err) {
						vscode.window.showErrorMessage('Unable to read sftp.json file');
						return;
					}

					try {
						const config = JSON.parse(data);
						if (Array.isArray(config) && config.length > 0) {
							const { username, host, password } = config[0];
							if (username && host) {
								try {
									// Copier le mot de passe dans le presse-papiers
									await vscode.env.clipboard.writeText(password);

									// Ouvrir le terminal SSH
									const terminal = vscode.window.createTerminal('SSH Terminal');
									terminal.sendText(`ssh ${username}@${host}`);
									terminal.show();

									// Notification de réussite
									vscode.window.showInformationMessage('Password copied to clipboard. Please paste it in the terminal when prompted.');
								} catch (clipboardError) {
									vscode.window.showErrorMessage('Failed to copy password to clipboard');
								}
							} else {
								vscode.window.showErrorMessage('Invalid sftp.json format');
							}
						} else {
							vscode.window.showErrorMessage('Invalid sftp.json format');
						}
					} catch (e) {
						vscode.window.showErrorMessage('Invalid JSON format');
					}
				});
			} else {
				vscode.window.showErrorMessage('Not an sftp.json file');
			}
		} else {
			vscode.window.showErrorMessage('No active editor or file selected');
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
};
