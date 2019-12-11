// Show dialog to review the past hour and plan for the future hour.

import {GRS} from '../resources/configures.js';
import {AppPages} from '../resources/resources.js';
import {getAppDialogWindowOptions} from '../resources/win-dialog-options.js';

interface IDialogReviewAndPlanResult {
	error: any;
	reviews: string;
	plans: string;
	// The time of inputs.
	// time: number;
	// timeReviewed: number;
	// timePlanned: number;
}


const showDialog = (timeout: number = 5 * 60 * 1000): Promise<IDialogReviewAndPlanResult> => new Promise<IDialogReviewAndPlanResult>((resolve) => {
	const result = {
		error: null,
		reviews: '',
		plans: '',
	};
	// Start a window for message.
	nw.Window.open(AppPages.pageReviewingAndPlaning, getAppDialogWindowOptions(GRS.pageReviewingAndPlanning), (win: any) => {
		win.on('closed', function () {
			resolve(result);
		});
		console.log('Started a new page, and will be timed out in %d seconds!', Math.floor(timeout / 1000));
		setTimeout(() => {
			win.close();
		}, timeout);
	});
	// resolve(result);
});

export const doShowDialogToReviewAndPlan = showDialog;
