// Async Storage

export const withMockAsyncPromise = <T>(func: () => T): Promise<T> => new Promise<T>((resolve) => {
	setTimeout(() => {
		resolve(func());
	}, 1200);
});

