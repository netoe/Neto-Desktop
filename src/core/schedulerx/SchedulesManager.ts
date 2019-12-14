// The schedules manager.

import {NetLibSchedules} from './netlib-schedules';

const getSchedules = (type?: string) => NetLibSchedules.getSchedules(type);

// Global Schedules
const getGlobalSchedules = () => getSchedules('Global');
// Team Schedules
const getOrganizationalSchedules = () => getSchedules('Organizational');
// Keep users' resources private except the shared ones.
const getIndividualSchedules = () => getSchedules('Individual');

// Accessed by the background services.
export const SchedulesManager = {
	getSchedules,
	getGlobalSchedules,
	getOrganizationalSchedules,
	getIndividualSchedules,
};
