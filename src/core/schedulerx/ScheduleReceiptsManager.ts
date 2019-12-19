// The receipts of schedules manager.

import {IScheduleReceipt} from '../scheduler/typed/receipts';
import {withMockAsyncPromise} from '../services/async-storage';

const mock = withMockAsyncPromise;

const receipts: IScheduleReceipt[] = [];

const getScheduleReceipts = (scheduleKey?: string): Promise<IScheduleReceipt[]> => mock(() => (
	scheduleKey ? receipts.filter(receipt => receipt.taskId === scheduleKey) : receipts
));

const postScheduleReceipts = (receipt: IScheduleReceipt): Promise<void> => mock(() => {
	console.log('Recording receipt:', receipt);
	receipts.push(receipt);
	return;
});

export type IScheduleReceiptsManager = typeof ScheduleReceiptsManager

export const ScheduleReceiptsManager = {
	getScheduleReceipts,
	postScheduleReceipts,
};
