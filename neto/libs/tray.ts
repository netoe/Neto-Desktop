// Minimize to system tray.
// @see https://github.com/nwjs/nw.js/wiki/Minimize-to-tray

import {_conf} from './configures.js';
import {WindowStatus} from './status.js';

const gui = require('nw.gui');

// Reference to window and tray
const win: any = gui.Window.get();
let tray: any;
let status = new WindowStatus();

const newTray = () => {
	tray = new gui.Tray({icon: 'assets/images/icon.png'});
	return tray;
};

if (_conf.useTrayOnly()) {
	const tray = newTray();
	console.log('Setting up a permanent tray, to toggle(hide and show) the primary window later!');
	tray.on('click', function () {
		console.log('Clicked tray, will toggle the primary window:', status.isHidden());
		if (status.isHidden()) {
			win.show();
			status.setStatus(WindowStatus.STATUS_NORMAL);
		} else {
			win.hide();
			status.setStatus(WindowStatus.STATUS_HIDDEN);
		}
	});
}

// Get the minimize event
if (_conf.isDebuggingMode()) {win.showDevTools();}
win.on('minimize', function () {
	console.log('On minimized: hide window.', win);
	win.hide();
	status.setStatus(WindowStatus.STATUS_HIDDEN);
	if (!_conf.useTrayOnly()) {
		console.log('Setting up a temporary tray, to show primary window later!');
		// In the normal mode, tray are removed automatically.
		tray = newTray();
		// Show window and remove tray when clicked
		tray.on('click', function () {
			win.show();
			status.setStatus(WindowStatus.STATUS_NORMAL);
			tray.remove();
			tray = null;
		});
	}
});

// The tray may change.
export const getAppTray = () => tray;
