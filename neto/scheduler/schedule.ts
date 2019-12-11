//

import {IRange, IRepeater, ISchedule, ITimer} from './typed/schedules.js';

export class Schedule implements ISchedule {
	name: string;
	enabled: boolean;
	range: IRange;
	timer: ITimer;
	funcAction: Function;
	repeater: IRepeater;
	funcRepeaterAction: Function;

	constructor(name: string, timer: any, funcAction: Function) {
		this.enabled = true;
		this.name = name;
		this.timer = timer;
		this.funcAction = funcAction;
	}

	isMatched = (d: Date): boolean => {
		if (!this.enabled) {return false;}
		if (this.range && !this.range.isActive(d)) {return false;}
		// const d = new Date(time);
		const values = [
			d.getMinutes(), d.getHours(), d.getDate(),
			d.getMonth() + 1, d.getDay(), d.getFullYear(),
			d.getSeconds(),
		];
		return this.timer.isMatched(values);
	};

	doStart = () => {
		this.funcAction();
		if (!this.repeater || !this.funcRepeaterAction) {return;}
		this.repeater.doStart((ith: number, total: number): boolean => {
			console.log('Executed the %d(/%d)th post repeated tasks.', ith, total);
			this.funcRepeaterAction();
			return true;
		});
	};
}

