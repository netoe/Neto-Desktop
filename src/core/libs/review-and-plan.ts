// Show dialog to review the past hour and plan for the future hour.

import {INetoBridge, INetoCallBackResult, NetoBridge} from '../app/neto-bridge';
import {doNotifyAbout} from './app-notifier';
import {GRS} from '../resources/configures';
import {AppPages} from '../resources/resources';
import {getAppDialogWindowOptions} from '../resources/win-dialog-options';

interface IDialogReviewAndPlanResult extends INetoCallBackResult {
	reviews?: string;
	plans?: string;
	// The time of inputs.
	// time: number;
	// timeReviewed: number;
	// timePlanned: number;
}


const showDialog = (timeout: number = 5 * 60 * 1000): Promise<IDialogReviewAndPlanResult> => new Promise<IDialogReviewAndPlanResult>((resolve) => {
	let result: IDialogReviewAndPlanResult = NetoBridge.newErrorClosedResult();
	// Start a window for message.
	nw.Window.open(AppPages.pageReviewingAndPlaning, getAppDialogWindowOptions(GRS.pageReviewingAndPlanning), (win: any) => {
		console.log('Started a new page, and will be timed out in %d seconds!', Math.floor(timeout / 1000));
		const code = setTimeout(() => {
			result = NetoBridge.newErrorTimedOutResult();
			win.close();
		}, timeout);
		win.on('closed', function () {
			clearTimeout(code);
			if (result && result.code && result.code > 0) {
				// Successful callback.
				doNotifyAbout(GRS.pageReviewingAndPlanning, 'Awesome, see you later then!');
			}
			resolve(result);
		});
		win.window ? win.window._bzNetoClient = {
			// Callback Mode: One way communication back with result.
			callback: (res: IDialogReviewAndPlanResult) => {
				result = res;
				win.close();
			},
			// Pass the partial values back.
			partial: (res: IDialogReviewAndPlanResult) => {
				result = res;
				// Set the code as incidentally closed.
				if (result && result.code && result.code > 0) {result.code = NetoBridge.codes.PARTIAL;}
			},
		} as INetoBridge : undefined;
	});
});

export const doShowDialogToReviewAndPlan = showDialog;
