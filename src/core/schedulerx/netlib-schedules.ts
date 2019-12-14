// The receipts of schedules.

import {mDemoSchedules} from './demo-schedules';
import {ISchedule} from '../scheduler/typed/schedules';
import {withMockAsyncPromise} from '../services/async-storage';

const mock = withMockAsyncPromise;

const getSchedules = (type?: string): Promise<ISchedule[]> => mock(() => mDemoSchedules);

export const NetLibSchedules = {
	getSchedules,
};

