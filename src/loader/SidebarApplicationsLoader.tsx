// The loader to load sidebar applications into the real dom.

import React from 'react';
import {useDerivedStateFromProps} from 'src/mui-lib/hooks/useDerivedStateFromProps';
import {ISidebarApp, INavApp} from './TypedSidebarApps';

interface IProps {
	pages: ISidebarApp[];
	page?: INavApp;
}

export const SidebarApplicationsLoader = React.memo(({pages, page}: IProps) => {
	const [code, doRefresh] = React.useState(1);
	const [_loader] = useDerivedStateFromProps((): Map<string, ISidebarApp> => {
		const _loader = new Map<string, ISidebarApp>();
		pages.map(app => _loader.set(app.id, app));
		return _loader;
	}, [pages]);
	const app = page ? _loader.get(page.id) || pages[0] : pages[0];
	console.log('SidebarApplicationsLoader#refreshed:', code);
	if (!app) {return (<div>Error, Unexpected App ID.</div>);}
	if ('FunCom' in app) {
		// Render a builtin application.
		const BuiltinComponent = app.FunCom;
		return (
			<div style={{height: '100%'}}>
				<BuiltinComponent/>
			</div>
		);
	}
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
