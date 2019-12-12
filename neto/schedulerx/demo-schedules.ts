//

import {ActionDialogToReviewAndPlan} from '../builtin-actions/dialog-to-review-and-plan.js';
import {newActionPlayNotificationSound} from '../builtin-actions/notification-sound.js';
import {SOUNDS_TYPE} from '../libs/audio-player.js';
import {Schedule} from '../scheduler/schedule.js';
import {CronTimer} from '../scheduler/timer/cron-timer.js';


const schedules = [
	new Schedule('Hourly Timer', new CronTimer('0'), [
		newActionPlayNotificationSound({type: SOUNDS_TYPE.ERROR, times: 2}),
		ActionDialogToReviewAndPlan,
	]),
	new Schedule('Half-Hour Timer', new CronTimer('30'), [
		newActionPlayNotificationSound({type: SOUNDS_TYPE.WARNING}),
	]),
	new Schedule('25/55-Minute Timer', new CronTimer('25,55'), [
		newActionPlayNotificationSound({type: SOUNDS_TYPE.IMPORTANT, times: 2}),
		// doNotifyAbout('Half-hourly Timer', 'Hi there, what\'s up? It is time to have a rest!');
	]),
	new Schedule('A5-Minute Timer', new CronTimer('5,15,35,45'), [
		newActionPlayNotificationSound({type: SOUNDS_TYPE.REGULAR}),
	]),
	new Schedule('B5-Minute Timer', new CronTimer('10,20,40,50'), [
		newActionPlayNotificationSound({type: SOUNDS_TYPE.GENERAL}),
	]),
];

export const mDemoSchedules = schedules;

// setTimeout(() => {
// 	scheduler.running = false;
// }, 5 * 60 * 1000);
