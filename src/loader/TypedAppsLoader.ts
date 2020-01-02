//

import {IBuiltinApplication} from './BuiltinApplications';
import {ExtendedFetcherManager} from '../graphic/helpers/ExtendedFetcherManager';
import {IUnLanguages} from '../graphic/mui-lib/resources/languages';

// The definition for sidebar navigator applications.
export interface INavApp extends IUnLanguages {
	id: string;
	text: string;
	icon: string;
}

export interface IDynamicalApp extends INavApp {
	doImport: () => Promise<IBuiltinApplication>;
	status: ExtendedFetcherManager<IBuiltinApplication>;
}
