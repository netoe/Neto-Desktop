// The loader to load dynamical applications into the real dom.

import React from 'react';
import {useDerivedStateFromProps} from '../graphic/mui-lib/hooks/useDerivedStateFromProps';
import {IDynamicalApp, INavApp} from './TypedAppsLoader';

interface IProps {
	pages: IDynamicalApp[];
	page?: INavApp;
}

export const DynamicalApplicationsLoader = React.memo(({pages, page}: IProps) => {
	const [code, doRefresh] = React.useState(1);
	const [_loader] = useDerivedStateFromProps((): Map<string, IDynamicalApp> => {
		const _loader = new Map<string, IDynamicalApp>();
		pages.map(app => _loader.set(app.id, app));
		return _loader;
	}, [pages]);
	const app = page ? _loader.get(page.id) || pages[0] : pages[0];
	console.log('DynamicalApplicationsLoader#refreshed:', code);
	if (!app) {return (<div>Error, Unexpected App ID.</div>);}
	const fetcher = app.status;
	if (fetcher.isInitialState()) {
		// Trigger to fetch the remote component.
		app.doImport().then(module => {
			// Notice the component the target module is loaded and available.
			// FIX-ME What about a slow loading, or fast switches between pages.
			doRefresh(code + 1);
		});
	}
	if (app.status.isFetching()) {return (<div>Loading the App.</div>);}
	if (app.status.isError() || app.status.isFailed()) {return (<div>Error, Error Encountered Loading the App</div>);}
	const Module = fetcher.getData();
	if (!Module) {return <div>Error, Expected App is not Loaded</div>;}
	return (
		<div style={{height: '100%'}}>
			<Module.default/>
		</div>
	);
});
