import {nanoid} from 'nanoid';
import moment from 'moment';

export const todos = [
    {
        id: nanoid(5),
        name: 'Book flights to Seattle',
        label: 'travel',
        timestamp: moment().set({date: 17, month: 3, year: 2022, hour: 12, minute: 20}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: nanoid(5),
        name: 'Finish appointment',
        label: 'work',
        timestamp: moment().set({date: 21, month: 3, year: 2022, hour: 14, minute: 11}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: nanoid(5),
        name: 'Visit Global Gym',
        label: 'other',
        timestamp: moment().set({date: 8, month: 4, year: 2022, hour: 8, minute: 43}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: nanoid(5),
        name: 'Medical conference',
        label: 'work',
        timestamp: moment().set({date: 19, month: 4, year: 2022, hour: 12, minute: 50}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: nanoid(5),
        name: 'Buy toy for Aron',
        label: 'family',
        timestamp: moment().set({date: 1, month: 5, year: 2022, hour: 11, minute: 18}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: nanoid(5),
        name: 'Regular dentist checkup',
        label: 'other',
        timestamp: moment().set({date: 17, month: 5, year: 2022, hour: 19, minute: 21}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: nanoid(5),
        name: 'Prepare for presentation',
        label: 'work',
        timestamp: moment().set({date: 28, month: 6, year: 2022, hour: 10, minute: 53}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: nanoid(5),
        name: 'Move to new apartment',
        label: 'travel',
        timestamp: moment().set({date: 30, month: 7, year: 2022, hour: 15, minute: 20}).valueOf(),
        complete: false,
        expanded: true
    },
    {
        id: nanoid(5),
        name: 'Meeting with Mr. Johnson',
        label: 'work',
        timestamp: moment().set({date: 1, month: 8, year: 2022, hour: 8, minute: 30}).valueOf(),
        complete: false,
        expanded: true
    }
];