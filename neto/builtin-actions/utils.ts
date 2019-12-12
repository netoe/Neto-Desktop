//

export const newActionIdNameKey = (name: string) => ({
	_id: name.toLowerCase().replace(/\s+/g, '-'),
	key: name.toLowerCase().replace(/\s+/g, '-'),
	name: name,
});
