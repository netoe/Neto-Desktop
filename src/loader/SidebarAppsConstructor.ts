//

import React from 'react';
import {ExtendedFetcherManager} from '../graphic/helpers/ExtendedFetcherManager';
import {IAsyncModule, IBuiltinApp, IDynamicalApp} from './TypedSidebarApps';

// Load dynamical applications and cache.
//
// Strategy I:
// - Load the bunch of the builtin applications.
// - Load the bunch of the remote applications.
//
// Strategy II:
// - Load dynamical applications separately.
//
// The definitions and importers of dynamical applications.
export const newDynamicalApp = (app: { icon: string, en: string, zh: string }, importer: () => Promise<IAsyncModule>): IDynamicalApp => {
	const text = app.en;
	const status = new ExtendedFetcherManager<IAsyncModule>();
	const doImport = () => importer().then(module => {
		status.fetched(module);
		console.log('Loaded module(%s):', text, module);
		return module;
	}).catch(ex => {
		status.failedToFetch(ex);
		throw ex;
	});
	return {
		id: `app-${text.trim().toLowerCase()}`,
		...app, text: app.en,
		doImport, status,
	};
};

export const newBuiltinApp = (app: { icon: string, en: string, zh: string }, mFunCom: React.FC): IBuiltinApp => {
	const text = app.en;
	return {
		id: `app-${text.trim().toLowerCase()}`,
		...app, text,
		FunCom: mFunCom,
	};
};
