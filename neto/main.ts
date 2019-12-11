'use strict';

console.log('Loaded main.js', +new Date());

import {mAppMenu} from './app/menu.js';
import {doShowDialogToReviewAndPlan} from './libs/review-and-plan.js';
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

const main = () => {
	const button = document.getElementById('btn-dialog');
	button ? button.onclick = () => {
		doShowDialogToReviewAndPlan().then((res) => {
			console.log('Finished with', res);
		}).catch(ex => console.error('Failed with', ex));
	} : undefined;
};
main();
