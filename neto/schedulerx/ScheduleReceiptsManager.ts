// The receipts of schedules manager.

import {_conf} from '../app/configures.js';
import {IActionReceipt, IScheduleReceipt} from '../scheduler/typed/receipts.js';
import {withMockAsyncPromise} from '../services/async-storage.js';

const mock = withMockAsyncPromise;

const receipts: IScheduleReceipt[] = [];

const getScheduleReceipts = (scheduleKey: string): Promise<IScheduleReceipt[]> => mock(() => receipts);

const postScheduleReceipts = (receipt: IActionReceipt): Promise<void> => mock(() => {
	console.log('Recording receipt:', receipt);
	return;
});

export const ScheduleReceiptsManager = {
	receipts,
	getScheduleReceipts,
	postScheduleReceipts,
};

if (_conf.isDebuggingMode() && window) {window['_NetoScheduleReceiptsManager'] = ScheduleReceiptsManager;}
