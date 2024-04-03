import {defineField, defineType} from 'sanity'
export const facilities = defineType({
    name: 'facilities',
    type: 'document',
    title: 'Facilities section in Home',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Facilities Title',
            validation: Rule=> Rule.max(20).error("Title should be less than 20 characters")
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Background Image'    
        })    
    ]
})