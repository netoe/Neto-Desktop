//

import {doPlayAllAvailableSound} from '../libs/audio-player';
import {Scheduler} from '../scheduler/scheduler';
import {SchedulesManager} from '../schedulerx/SchedulesManager';

const scheduler = new Scheduler();
scheduler.verbose = true;

export const doStartBackgroundService = () => {
	SchedulesManager.getSchedules().then(schedules => {
		console.log('[%s] Got schedules and started scheduler:', new Date().toString(), schedules);
		scheduler.doSetSchedulesAndStart(schedules);
	});
	doPlayAllAvailableSound().then(() => {
		console.log('[%s] Tested all available sounds.', new Date().toString());
	});
	console.log('[%s] Started background service.', new Date().toString());
};
