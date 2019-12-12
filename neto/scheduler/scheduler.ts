//

import {ISchedule} from './typed/schedules.js';

interface IScheduler {
	schedules?: any[];
}

export class Scheduler implements IScheduler {
	schedules?: ISchedule[];
	running: boolean;
	verbose: boolean;

	constructor(schedules?: ISchedule[]) {
		this.schedules = schedules;
		this.running = false;
	}

	doSetSchedulesAndStart = (schedules: ISchedule[]) => {
		this.schedules = schedules;
		this.doStartSchedules();
	};

	doStartSchedules = () => {
		this.running = true;
		if (!this.schedules) {return console.log('[%s] Not starting the scheduler because of null schedules.');}
		console.log('[%s] Started loop checking and executing.', new Date().toString());
		this.checkAndExecuteSchedules();
	};

	checkAndExecuteSchedules = () => {
		const now = new Date();
		if (!this.running) {
			console.log('[%s] Stopped loop checking and executing.', now.toString());
			return;
		}
		if (!this.schedules) {return console.log('[%s] Stopped the scheduler(loop checking and executing) because of null schedules.');}
		// Check schedules and execute corresponding tasks if timer matched.
		this.schedules.map(schedule => {
			if (!schedule.isMatched(now)) {return;}
			schedule.doStart();
			console.log('Executed schedule(%s) at %s.', schedule.name, now.toString());
		});

		let left = 61 - now.getSeconds();
		if (left <= 2) {left = 20;}

		if (this.verbose) {console.log('[%s] Sleeping for %d seconds.', now.toString(), left);}
		setTimeout(this.checkAndExecuteSchedules, left * 1000);
	};
}
