// The builtin actions with description builder.

import {doShowDialogToReviewAndPlan} from '../libs/review-and-plan.js';
import {IActionReceipt, newActionReceipt, newFailedActionReceipt} from '../scheduler/typed/receipts.js';
import {IAction} from '../scheduler/typed/actions.js';
import {newActionIdNameKey} from './utils.js';

const dialogToReviewAndPlan = (started: number, action: IAction): Promise<IActionReceipt> => doShowDialogToReviewAndPlan().then((res) => {
	// Not saving receipt right here.
	return newActionReceipt(action._id, res.code, started, +new Date(), {reviews: res.reviews, plans: res.plans});
}).catch(ex => {
	console.error('fatal error executing the dialog to review and plan:', ex);
	return newFailedActionReceipt(action._id, started, +new Date());
});

const action: IAction = {
	// _id: 'dialog-to-review-and-plan', name: 'Dialog to Review and Plan', key: 'dialog-to-review-and-plan',
	...newActionIdNameKey('Dialog to Review and Plan'),
	params: {},
	doExecute: dialogToReviewAndPlan,
	getDescriptionString: (action: IAction, receipt: IActionReceipt) => {
		if (receipt.code > 0) {
			return `Finished dialog with (${JSON.stringify(receipt.result)}) in ${(receipt.duration / 1000).toFixed(2)} seconds.`;
		} else {
			return `Dialog closed without result(${JSON.stringify(receipt.result)}).`;
		}
	},
};

export const ActionDialogToReviewAndPlan = action;

