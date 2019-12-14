//

import {isDevelopmentSdkMode} from '../libs/external-bindings';

const conf = {
	debugging: isDevelopmentSdkMode(),
	// There is always a tray for the application to show and exit.
	// While close the window will make it hidden.
	showInTaskbar: true,
	// In the tray only mode, the primary window will not be shown in the task bar.
	// Should configure the window `"show_in_taskbar": false` in the package.json if being set true.
	// useTrayOnly: true,
};

const isDebuggingMode = () => conf.debugging;
const showInTaskbar = () => conf.showInTaskbar;

interface IAppConfigureOptions {
	debugging?: boolean;
	showInTaskbar?: boolean;
}

const setAppConfigureOptions = ({debugging, showInTaskbar}: IAppConfigureOptions) => {
	if (debugging !== undefined) {conf.debugging = debugging;}
	if (showInTaskbar !== undefined) {conf.showInTaskbar = showInTaskbar;}
};

export const _conf = {
	setAppConfigureOptions,
	isDebuggingMode,
	showInTaskbar,
};

export type IAppConfigures = typeof _conf;
