'use strict';

import React from 'react';
import {ContextLanguageProvider, DEFAULT_LANGUAGE_CONTEXT_VALUE} from 'src/graphic/mui-lib/hooks/useLanguage';
import {AppHome} from './graphic/AppHome/AppHome';

// App entrance: a single page without router.
export const App = React.memo(() => {
	const [language, setLanguage] = React.useState(DEFAULT_LANGUAGE_CONTEXT_VALUE.language as string);
	return (
		<ContextLanguageProvider value={{language, languages: DEFAULT_LANGUAGE_CONTEXT_VALUE.languages}}>
			<AppHome onSetLanguage={setLanguage}/>
		</ContextLanguageProvider>
	);
});
