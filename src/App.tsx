'use strict';

import React from 'react';
import {AppHome} from './graphic/AppHome/AppHome';

// App entrance: a single page without router.
export const App = React.memo(() => {
	return (
		<AppHome/>
	);
});
