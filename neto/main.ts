'use strict';

console.log('Loaded main.js', +new Date());

import {mAppMenu} from './libs/menu.js';
import {doStartBackgroundService} from './services/background-schedules.js';

console.log('main.js', mAppMenu, +new Date());

// Hooks the "contextmenu" event
document.body.addEventListener('contextmenu', function (ev) {
	// Prevent showing default context menu
	ev.preventDefault();
	// Popup the native context menu at place you click
	mAppMenu.popup(ev.x, ev.y);
	return false;
}, false);

doStartBackgroundService();
