//

export const SOUNDS_TYPE = {
	REGULAR: 'regular',
	GENERAL: 'general',
	IMPORTANT: 'important',
	WARNING: 'warning',
	ERROR: 'error',
};

export const doPlayBackgroundAudio = (type: string = SOUNDS_TYPE.REGULAR, times: number = 1): Promise<void> => new Promise((resolve: () => any) => {
	const audio = new Audio('assets/sounds/noti-' + type + '.mp3');
	if (times <= 1) {
		audio.onended = resolve;
		audio.play();
		return;
	}
	// Play the audio continuous multiple times.
	let overflow = 1;
	audio.onended = () => {
		times--;
		if (times <= 0) {return resolve();}
		// Prevent the potential infinite loop.
		if (overflow++ > 20) {return resolve();}
		audio.play();
	};
	audio.play();
});

export const doPlayAllAvailableSound = async () => {
	const values: string[] = Object.values(SOUNDS_TYPE);
	for (let i = 0; i < values.length; i++) {
		await doPlayBackgroundAudio(values[i]);
	}
	return null;
};

export const doAsyncPlayBackgroundAudio = (type: string = SOUNDS_TYPE.REGULAR, times: number = 1) => {
	doPlayBackgroundAudio(type, times).then(
		() => null,
	).catch(
		(ex) => console.error('failed to play audio(%s):', type, ex),
	);
};
