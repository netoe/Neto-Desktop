'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {appMuiTheme} from './graphic/resources/AppTheme';
import {App} from './App';

// The Webpack entrance.
ReactDOM.render((
		<MuiThemeProvider theme={appMuiTheme}>
			<App/>
		</MuiThemeProvider>
	), document.getElementById('root-react-mount-point'),
);
