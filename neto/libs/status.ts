// The status of the application.

export class WindowStatus {
	static STATUS_HIDDEN = -1;
	static STATUS_MINIMIZED = 1;
	static STATUS_NORMAL = 2;
	static STATUS_MAXIMIZED = 3;

	status: number;

	constructor(status: number = WindowStatus.STATUS_NORMAL) {
		this.status = status;
	}

	setStatus = (status: number): boolean => {
		const isWorked = this.status !== status;
		this.status = status;
		return isWorked;
	};

	isHidden = (): boolean => {
		return this.status === WindowStatus.STATUS_HIDDEN;
	};

	isMinimized = (): boolean => {
		return this.status === WindowStatus.STATUS_MINIMIZED;
	};
}
