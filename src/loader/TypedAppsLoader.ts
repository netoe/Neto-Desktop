//

import React from 'react';
import {IUnLanguages} from 'src/mui-lib/resources/languages';
import {ExtendedFetcherManager} from 'src/graphic/helpers/ExtendedFetcherManager';
import {IBuiltinApplication} from './BuiltinApplications';

// The definition for sidebar navigator applications.
export interface INavApp extends IUnLanguages {
	id: string;
	text: string;
	icon: string;
}

// The sidebar dynamical app.
export interface IDynamicalApp extends INavApp {
	doImport: () => Promise<IBuiltinApplication>;
	status: ExtendedFetcherManager<IBuiltinApplication>;
}

// The sidebar builtin app.
export interface IBuiltinApp extends INavApp {
	FunCom: React.FC
}

// The sidebar builtin or dynamical app.
export type ISidebarApp = IDynamicalApp | IBuiltinApp
