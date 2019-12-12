// The receipts of schedules.

import {ReceiptCodes} from './receipt-codes.js';

export interface IScheduleReceipt extends IActionReceipt {
	status?: number;
	actionIds: string[];
	// [CACHE]
	actions: IActionReceipt[];
}

export const newScheduleReceipt = (scheduleId: string, code: number, actions: IActionReceipt[], started: number, finished: number, result?: object): IScheduleReceipt => ({
	...newActionReceipt(scheduleId, code, started, finished, result),
	actions, actionIds: actions.map(action => action._id),
});

let _id = 1;
export const newActionReceipt = (actionId: string, code: number, started: number, finished: number, result?: object): IActionReceipt => ({
	_id: `${_id++}`, taskId: actionId, code, time: started, duration: finished - started, finished,
	result,
});
export const newSucceededActionReceipt = (actionId: string, started: number, finished: number, result?: object) => newActionReceipt(actionId, ReceiptCodes.SUCCEEDED, started, finished, result);
export const newFailedActionReceipt = (actionId: string, started: number, finished: number, result?: object) => newActionReceipt(actionId, ReceiptCodes.FAILED, started, finished, result);

export interface IActionReceipt {
	_id: string;
	// [ #ActionId or #ScheduleId ]
	taskId: string;
	// Result Code.
	// Code > 0 is successful; <= 0 is failures.
	code: number;
	// The description is generated.
	// FIX-ME Consider other elegant way to render description.
	// description: string;
	// The real result in any format.
	result?: object;

	// [Optional Cache] Not needed to be stored in database.
	// [ finished | end | terminated ]
	finished?: number;
	duration: number;
	// No record of the end time.
	time: number;
}

// interface ITimestamp {
// 	started: number;
// 	duration: number;
// 	ended: number;
// }
