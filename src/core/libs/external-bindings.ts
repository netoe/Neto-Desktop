// Binding with External Libraries(Modules).
//
// Like node modules or nwjs libraries.
//
// No direct access to the lower system modules for decoupling.

export const $bind = window['require'];

const process = window['process'];
export const isDevelopmentSdkMode = () => (process && process['versions'] && process['versions']['nw-flavor'] === 'sdk') || false;

