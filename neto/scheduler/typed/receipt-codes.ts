// The receipt codes and statuses of async or sync tasks.

// Code > 0 is successful; code <= 0 is failures.
// Use the simplified codes as needed.
const codes = {
	SUCCEEDED: 1,
	FAILED: -1,
};

export const ReceiptCodes = codes;

// The larger the status is, the more important the receipt message are.
const statuses = {
	// Successful codes with enum status.
	VERBOSE: 2,
	DEBUG: 3,
	INFO: 4,
	DONE_WARNING: 5,
	SUCCESSFUL: 6,
	// Failed codes with enum status.
	// Compatible with the logger level.
	// const level = status < 0 ? status + 10 : status;
	FAIL_WARNING: -4,
	ERROR: -3,
	FATAL: -2,
};

export const ReceiptStatuses = statuses;
