//

import {ISchedule} from './typed/schedules';

interface IScheduler {
	schedules: any[];
}

export class Scheduler implements IScheduler {
	schedules: ISchedule[];
	running: boolean;
	verbose: boolean;

	constructor(schedules: ISchedule[]) {
		this.schedules = schedules;
		this.running = false;
	}

	doStartSchedules = () => {
		this.running = true;
		console.log('[%s] Started loop checking and executing.', new Date().toString());
		this.checkAndExecuteSchedules();
	};

	checkAndExecuteSchedules = () => {
		const now = new Date();
		if (!this.running) {
			console.log('[%s] Stopped loop checking and executing.', now.toString());
			return;
		}
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
