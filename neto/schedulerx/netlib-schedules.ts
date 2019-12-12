// The receipts of schedules.

import {mDemoSchedules} from './demo-schedules.js';
import {ISchedule} from '../scheduler/typed/schedules.js';
import {withMockAsyncPromise} from '../services/async-storage.js';

const mock = withMockAsyncPromise;

const getSchedules = (type?: string): Promise<ISchedule[]> => mock(() => mDemoSchedules);

export const NetLibSchedules = {
	getSchedules,
};

