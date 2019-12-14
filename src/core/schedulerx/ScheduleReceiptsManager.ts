// The receipts of schedules manager.

import {_conf} from '../app/configures';
import {IScheduleReceipt} from '../scheduler/typed/receipts';
import {withMockAsyncPromise} from '../services/async-storage';

const mock = withMockAsyncPromise;

const receipts: IScheduleReceipt[] = [];

const getScheduleReceipts = (scheduleKey: string): Promise<IScheduleReceipt[]> => mock(() => receipts);

const postScheduleReceipts = (receipt: IScheduleReceipt): Promise<void> => mock(() => {
	console.log('Recording receipt:', receipt);
	receipts.push(receipt);
	return;
});

export const ScheduleReceiptsManager = {
	receipts,
	getScheduleReceipts,
	postScheduleReceipts,
};

if (_conf.isDebuggingMode() && window) {window['_NetoScheduleReceiptsManager'] = ScheduleReceiptsManager;}
