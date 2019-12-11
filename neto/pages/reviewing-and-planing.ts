//

import {KeyNetoBridgeName, NetoBridge} from '../app/neto-bridge.js';

const getValue = (id: string): string => {
	const dom = document.getElementById(id);
	// @ts-ignore
	return dom ? dom.value || '' : '';
};

const main = () => {
	const button = document.getElementById('id-btn-submit');
	button ? button.onclick = () => {
		const bridge = window[KeyNetoBridgeName];
		if (!bridge) {return;}
		const reviews = getValue('id-input-reviews');
		const plans = getValue('id-input-plans');
		bridge.callback(NetoBridge.newSuccessiveResult({reviews, plans}));
	} : undefined;
};
main();
