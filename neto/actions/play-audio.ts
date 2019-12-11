//

export const SOUNDS_TYPE = {
	REGULAR: 'regular',
	GENERAL: 'general',
	IMPORTANT: 'important',
	WARNING: 'warning',
	ERROR: 'error',
};

export const doPlayBackgroundAudio = (type: string = SOUNDS_TYPE.REGULAR): Promise<void> => {
	const audio = new Audio('assets/sounds/noti-' + type + '.mp3');
	return audio.play();
};

export const doPlayAllAvailableSound = async () => {
	const values: string[] = Object.values(SOUNDS_TYPE);
	for (let i = 0; i < values.length; i++) {
		await doPlayBackgroundAudio(values[i]);
	}
	return null;
};

export const doAsyncPlayBackgroundAudio = (type: string = SOUNDS_TYPE.REGULAR) => {
	doPlayBackgroundAudio(type).then(
		() => null,
	).catch(
		(ex) => console.error('failed to play audio(%s):', type, ex),
	);
};
