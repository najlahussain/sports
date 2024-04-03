import {defineField, defineType} from 'sanity'
export const pictures = defineType({
    name: 'pictures',
    type: 'document',
    title: 'Event Pictures',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'    
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'    
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 20
            }    
        })    
    ]
})