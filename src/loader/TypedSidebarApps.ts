//

import React from 'react';
import {IUnLanguages} from 'src/mui-lib/resources/languages';
import {ExtendedFetcherManager} from 'src/graphic/helpers/ExtendedFetcherManager';

// The definition for sidebar navigator applications.
export interface INavApp extends IUnLanguages {
	id: string;
	text: string;
	icon: string;
}

// The sidebar builtin app.
export interface IBuiltinApp extends INavApp {
	FunCom: React.FC
}

export interface IAsyncModule {
	default: React.FC;
	ApplicationHome?: React.FC;
}

// The sidebar dynamical app.
export interface IDynamicalApp extends INavApp {
	doImport: () => Promise<IAsyncModule>;
	status: ExtendedFetcherManager<IAsyncModule>;
}

// The sidebar builtin or dynamical app.
export type ISidebarApp = IDynamicalApp | IBuiltinApp
