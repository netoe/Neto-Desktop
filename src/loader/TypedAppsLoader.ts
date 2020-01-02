//

import {IUnLanguages} from 'src/mui-lib/resources/languages';
import {ExtendedFetcherManager} from 'src/graphic/helpers/ExtendedFetcherManager';
import {IBuiltinApplication} from './BuiltinApplications';

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
