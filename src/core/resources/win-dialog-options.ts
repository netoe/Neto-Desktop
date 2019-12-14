//

import {GRD, GRS} from './configures';
import {AppIcons} from './resources';

const radio = 2.5;
const minRadio = 3;
const maxRadio = 1.75;

const width = (radio: number) => Math.floor(GRD.width / radio);
const height = (radio: number) => Math.floor(GRD.height / radio);

const getOptions = (title: string, icon: string = AppIcons.app) => ({
	title: GRS.getTitle(title),
	width: width(radio), height: height(radio),
	min_width: width(minRadio), min_height: height(minRadio),
	max_width: width(maxRadio), max_height: height(maxRadio),
	icon: icon,
	position: 'center',
});

export const getAppDialogWindowOptions = getOptions;
