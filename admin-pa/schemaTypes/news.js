export default {
    name:'news',
    title:"News",
    type:"document",
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'content',
                maxLength:120,
            },
        },
        {
            name:'date',
            title:'Date',
            type:'date',
        },
        {
            name:'author',
            title:'Author',
            type:'string',
            default: 'Netagro Team',
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image'
        }, 
        {
            name:'content',
            title:'Content',
            type:'array',
            of:[
                {type:'block'},
                {type:'image'},
            ]
        }
    ]
}