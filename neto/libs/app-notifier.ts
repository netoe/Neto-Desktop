//

import {AppIcons} from '../resources/resources.js';

const notifier = require('node-notifier');
const path = require('path');

// @see https://github.com/mikaelbr/node-notifier
export const doNotifyAbout = (title: string, content: string) => {
	console.log('[%s] Showing notification:', new Date().toString(), title, content);
	notifier.notify({
		title: title, message: content,
		icon: path.resolve(AppIcons.app), // Absolute path (doesn't work on balloons)
		sound: true, // Only Notification Center or Windows Toasters
		wait: true, // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
	}, function (err: any, response: any) {
		// Response is response from notification
		console.log('err, response', err, response);
	});

	notifier.on('click', function (notifierObject: any, options: any, event: any) {
		// Triggers if `wait: true` and user clicks notification
		console.log('clicked', notifierObject, options);
	});

	notifier.on('timeout', function (notifierObject: any, options: any) {
		// Triggers if `wait: true` and notification closes
		console.log('clicked', notifierObject, options);
	});
};
