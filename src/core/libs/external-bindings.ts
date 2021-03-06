// Binding with External Libraries(Modules).
//
// Like node modules or nwjs libraries.
//
// No direct access to the lower system modules for decoupling.

export const $bind = window['require'] || ((name: string) => {
	console.error('Failed to bind the module(%s): no background supporters.', name);
	return {};
});

const process = window['process'];
export const isDevelopmentSdkMode = () => (process && process['versions'] && process['versions']['nw-flavor'] === 'sdk') || false;

