//

import {ITimer} from '../typed/schedules';
import {CronField, isCronFieldMatched, newCronField} from './cron-field';

export class CronTimer implements ITimer {
	rule: string;
	fields: CronField[];

	constructor(rule: string) {
		this.rule = rule;
		this.fields = rule.trim().split(' ').map(field => newCronField(field));
	}

	isMatched = (values: number[]): boolean =>
		this.fields.find(
			// If one single field does not match, stop right as unmatched.
			(field, i) => !isCronFieldMatched(field, values[i]),
		) === undefined;
}


