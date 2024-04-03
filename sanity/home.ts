import {defineField, defineType} from 'sanity'
export const home = defineType({
    name: 'home',
    type: 'document',
    title: 'Home Background',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'    
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Background Image'    
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