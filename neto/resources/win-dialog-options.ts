//

import {GRD, GRS} from './configures.js';
import {AppIcons} from './resources.js';

const radio = 3;

const getOptions = (title: string, icon: string = AppIcons.app) => ({
	title: GRS.getTitle(title),
	width: GRD.width / radio, height: GRD.height / radio,
	icon: icon,
	position: 'center',
});

export const getAppDialogWindowOptions = getOptions;
