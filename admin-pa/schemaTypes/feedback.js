export default{
    name: 'feedback',
    title: 'Feedback',
    type: 'document',
    fields : [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'stars',
            title: 'Stars',
            type: 'number',
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
        },
        {
            name: 'authorRole',
            title: 'Author Role',
            type: 'string',
        },
        {
            name: 'gender',
            title : 'Gender',
            type: 'string',
        }
    ]
}