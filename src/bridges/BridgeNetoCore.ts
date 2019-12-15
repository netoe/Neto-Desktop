//

import {IAppConfigures} from '../core/app/configures';
import {IScheduleReceiptsManager} from '../core/schedulerx/ScheduleReceiptsManager';

const keyBridgeNetoCore = '_$bzBridgeNetoCore';

export interface IBridgeNetoCore {
	AppConfigures: IAppConfigures;
	BackgroundService: IBackgroundService;
	DemoAndDevelopment: IDemoAndDevelopment;
	ScheduleReceiptsManager: IScheduleReceiptsManager;
}

export interface IBackgroundService {
	doStart: Function;
}

// For demonstration or development usage.
export interface IDemoAndDevelopment {
	showReviewAndPlanDialog: () => Promise<any>;
}

export const setNetoCoreBridge = (bridge: IBridgeNetoCore, theTargetGlobalWindow?: any) => {
	if (theTargetGlobalWindow) {theTargetGlobalWindow[keyBridgeNetoCore] = bridge;}
	return window[keyBridgeNetoCore] = bridge;
};

export const getNetoCoreBridge = (): IBridgeNetoCore | undefined => {
	return window[keyBridgeNetoCore];
};

