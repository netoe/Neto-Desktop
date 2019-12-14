//

import {doPlayBackgroundAudio} from '../libs/audio-player';
import {IAction} from '../scheduler/typed/actions';
import {IActionReceipt, newFailedActionReceipt, newSucceededActionReceipt} from '../scheduler/typed/receipts';
import {newActionIdNameKey} from './utils';

interface INotificationSoundPlayerParams {
	type: string;
	times?: number;
}

const actionPlayNotificationSound = (params: INotificationSoundPlayerParams): IAction<INotificationSoundPlayerParams> => ({
	// _id: 'play-notification-sound', name: 'Play Notification Sound', key: 'play-notification-sound',
	...newActionIdNameKey('Play Notification Sound'),
	params,
	doExecute: (started: number, action: IAction<INotificationSoundPlayerParams>): Promise<IActionReceipt> => doPlayBackgroundAudio(action.params.type, action.params.times).then((res) => {
		return newSucceededActionReceipt(action._id, started, +new Date());
	}).catch((ex) => {
		return newFailedActionReceipt(action._id, started, +new Date(), {message: ex.message});
	}),
	getDescriptionString: (action: IAction<INotificationSoundPlayerParams>, receipt: IActionReceipt) => {
		if (receipt.code > 0) {
			return `Finished play the notification sound in ${(receipt.duration / 1000).toFixed(2)} seconds.`;
		} else {
			return 'Playing notification sound failed.';
		}
	},
});

export const newActionPlayNotificationSound = actionPlayNotificationSound;
