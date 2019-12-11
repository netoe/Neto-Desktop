//

import {AppIcons} from './resources.js';

const appName = 'Neto Desktop';

// Global Resources > Strings
export const GRS = {
	name: appName, icon: AppIcons.app,
	getTitle: (title: string): string => title + ' - ' + appName,

	pageReviewingAndPlanning: 'Reviewing and Planning',
};

// Global Resources > Dimensions
export const GRD = {
	// Default width and height of the primary window.
	width: 1080, height: 720,
};
