//

const conf = {
	debugging: true,
	// In the tray only mode, the primary window will not be shown in the task bar.
	useTrayOnly: true,
};

const isDebuggingMode = () => conf.debugging;
const useTrayOnly = () => conf.useTrayOnly;

interface IAppConfigureOptions {
	debugging: boolean;
	useTrayOnly: boolean;
}

const setAppConfigureOptions = ({debugging, useTrayOnly}: IAppConfigureOptions) => {
	if (debugging !== undefined) {conf.debugging = debugging;}
	if (useTrayOnly !== undefined) {conf.useTrayOnly = useTrayOnly;}
};

export const _conf = {
	setAppConfigureOptions,
	isDebuggingMode,
	useTrayOnly,
};
