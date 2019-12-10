//

const CronFieldValueAll = 9999999;

export type CronField = number[];

// FIX-ME Do try/catch the potential exceptions.
export const newCronField = (rule: string): number[] => {
	rule = rule.trim();
	if (rule === '*') {return [CronFieldValueAll];}
	if (rule.startsWith('*/')) {return [-(+(rule.substr(2)))];}
	if (rule.includes(',')) {return rule.split(',').map(n => +n);}
	if (rule.includes('-')) {
		const fields = rule.split('-');
		if (fields.length < 2) {return [0];}
		const start = +fields[0];
		const end = +fields[1];
		if (start >= end) {return [end, start];}
		// const results = [];
		// for (let i = start; i <= end; i++) {results.push(i);}
		// return results;
		return new Array(end - start + 1).fill(start).map((n, i) => n + i);
	}
	return [+rule];
};

export const isCronFieldMatched = (cronField: CronField, value: number): boolean => {
	if (cronField.length < 1) {return false;}
	if (cronField.length === 1) {
		const node = cronField[0];
		if (node === CronFieldValueAll) {return true;}
		if (node === value) {return true;}
		if (node < 0) {return value % (-node) == 0;}
		return false;
	}
	return cronField.find(node => node === value) !== undefined;
};
