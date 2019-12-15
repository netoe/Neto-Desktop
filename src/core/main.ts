// The entry point of the neto core.
//
// 1. Import all necessary modules and load the corresponding features into the combat-ready production;
// 2. Start the background service explicitly;
// 3. Export the necessary ones as bridge.

console.log('Loaded main.js', +new Date());

import {IBridgeNetoCore, setNetoCoreBridge} from '../bridges/BridgeNetoCore';
import {_conf} from './app/configures';
import {mAppMenu} from './app/menu';
import {getAppTray} from './app/tray';
import {doShowDialogToReviewAndPlan} from './libs/review-and-plan';
import {ScheduleReceiptsManager} from './schedulerx/ScheduleReceiptsManager';
import {doStartBackgroundService} from './services/background-schedules';

console.log('main.js', mAppMenu, +new Date());
console.log('_conf, getAppTray:', _conf, getAppTray);

// Hooks the "contextmenu" event
document.body.addEventListener('contextmenu', function (ev) {
	// Prevent showing default context menu
	ev.preventDefault();
	// Popup the native context menu at place you click
	mAppMenu.popup(ev.x, ev.y);
	return false;
}, false);

// Set up the bridge.
const bridge: IBridgeNetoCore = {
	AppConfigures: _conf,
	BackgroundService: {
		doStart: doStartBackgroundService,
	},
	// The test dialog.
	DemoAndDevelopment: {
		showReviewAndPlanDialog: doShowDialogToReviewAndPlan,
	},
	ScheduleReceiptsManager,
};
setNetoCoreBridge(bridge);
if (_conf.isDebuggingMode()) {console.log('Set up the neto core bridge:', bridge);}

doStartBackgroundService();
