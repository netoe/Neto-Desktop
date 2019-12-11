// Show dialog to review the past hour and plan for the future hour.

import {doNotifyAbout} from './app-notifier.js';
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
		console.log('Started a new page, and will be timed out in %d seconds!', Math.floor(timeout / 1000));
		const code = setTimeout(() => {
			win.close();
		}, timeout);
		win.on('closed', function () {
			clearTimeout(code);
			doNotifyAbout(GRS.pageReviewingAndPlanning, 'Awesome, see you later then!');
			resolve(result);
		});
	});
	// resolve(result);
});

export const doShowDialogToReviewAndPlan = showDialog;
