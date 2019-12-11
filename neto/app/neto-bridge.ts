// The bridge to communicate between parent and children windows.

const codes = {
	DONE: 1,
	CLOSED: -1,
	// The target window may be closed incidentally.
	PARTIAL: -2,
	TIMED_OUT: -3,
};

export interface INetoCallBackResult {
	// Code > 0 is successful; <= 0 is failures.
	code: number;
	// Readable result message.
	message: string;
	error?: any;
}

export const KeyNetoBridgeName = '_bzNetoClient';

export interface INetoBridge {
	callback: (res: INetoCallBackResult) => any;
	partial: (res: INetoCallBackResult) => any;
}

export const NetoBridge = {
	codes,
	newErrorTimedOutResult: (): INetoCallBackResult => ({code: codes.TIMED_OUT, message: 'timed out'}),
	newErrorPartialResult: (): INetoCallBackResult => ({code: codes.PARTIAL, message: 'partial result and closed'}),
	newErrorClosedResult: (): INetoCallBackResult => ({code: codes.CLOSED, message: 'closed directly'}),
	newSuccessiveResult: (result: object): INetoCallBackResult => ({code: codes.DONE, message: 'done', ...result}),
};
