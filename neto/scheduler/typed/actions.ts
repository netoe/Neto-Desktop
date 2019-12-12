//

import {IActionReceipt} from './receipts.js';

export interface IAction<T extends object = object> {
	_id: string;
	name: string;
	key: string;
	params: T;
	doExecute: (started: number, action: IAction<T>) => Promise<IActionReceipt>;
	// Generate the description string, based on the action itself and the executed receipt.
	getDescriptionString: (action: IAction<T>, receipt: IActionReceipt) => string;
}
