import {defineField, defineType} from 'sanity'
export const eventshome = defineType({
    name: 'eventshome',
    type: 'document',
    title: 'Events section in Home',
    fields: [
        defineField({
            name: 'description',
            type: 'text',
            title: 'Events Description'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Events Image'    
        })    
    ]
})