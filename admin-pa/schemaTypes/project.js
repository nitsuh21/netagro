export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'projectName',
            title: 'Project Name',
            type: 'string',
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
        },
    ],
};