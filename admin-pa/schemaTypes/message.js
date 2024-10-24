import { name } from "../dist/vendor/react/package.json-4bea9951.mjs";

export default {
    name : 'message',
    title : 'Message',
    type : 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'number',
            title: 'Number',
            type: 'string',
        },
        {
            name: 'subject',
            title: 'Subject',
            type: 'string',
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text',
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today'
            }
        }
    ]
}