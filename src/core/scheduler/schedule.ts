//

import {ScheduleReceiptsManager} from '../schedulerx/ScheduleReceiptsManager';
import {IAction} from './typed/actions';
import {IActionReceipt, IScheduleReceipt, newScheduleReceipt} from './typed/receipts';
import {IRange, IRepeater, ISchedule, ITimer} from './typed/schedules';

export class Schedule implements ISchedule {
	name: string;
	enabled: boolean;
	range: IRange;
	timer: ITimer;
	actions: IAction[];
	repeater: IRepeater;
	funcRepeaterAction: Function;

	constructor(name: string, timer: any, actions: IAction[]) {
		this.enabled = true;
		this.name = name;
		this.timer = timer;
		this.actions = actions;
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
		const started = +new Date();
		this.doAsyncStart().then((receipts: IActionReceipt[]): IScheduleReceipt => {
			console.log('[SUCCESS] Executed the actions of schedule(%s) at %s.', this.name, new Date().toString());
			return newScheduleReceipt(this.name, 1, receipts, started, +new Date());
		}).catch((ex) => {
			console.log('[FAILURE] Executed the actions of schedule(%s) at %s.', this.name, new Date().toString());
			return newScheduleReceipt(this.name, -1, [], started, +new Date());
		}).then((receipt: IScheduleReceipt) => {
			console.log('Stashing the final schedule receipt:', receipt);
			ScheduleReceiptsManager.postScheduleReceipts(receipt).then(() => {
				console.log('Recorded schedule receipt:', receipt);
			}).catch((ex: any) => {
				console.error('Failed to record schedule receipt:', ex);
			});
		});
	};

	doAsyncStart = async (): Promise<IActionReceipt[]> => {
		const receipts: IActionReceipt[] = [];
		// FIX-ME Execute the actions async or sync and records the receipts.
		for (let i = 0; i < this.actions.length; i++) {
			const action = this.actions[i];
			const receipt = await action.doExecute(+new Date(), action);
			console.log('[SUCCESS] Executed the action(%s) of schedule(%s) at %s.', action.getDescriptionString(action, receipt), this.name, new Date().toString());
			receipts.push(receipt);
		}
		if (!this.repeater || !this.funcRepeaterAction) {return receipts;}
		this.repeater.doStart((ith: number, total: number): boolean => {
			console.log('Executed the %d(/%d)th post repeated tasks.', ith, total);
			this.funcRepeaterAction();
			return true;
		});
		return receipts;
	};
}

