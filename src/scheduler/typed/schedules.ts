//

export interface ISchedule {
	name: string;
	// Whether matched the given(current) time.
	isMatched: (time: Date) => boolean;
	// Executing the corresponding task.
	doStart: Function;
}

export interface IRange {
	isActive: (now: Date) => boolean;
}

export interface ITimer {
	isMatched: (values: number[]) => boolean;
}

type RepeaterFuncCallback = (ith: number, total: number) => boolean;

export interface IRepeater {
	doStart: (callback: RepeaterFuncCallback) => boolean;
}
