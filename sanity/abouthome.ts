import {defineField, defineType} from 'sanity'
export const abouthome = defineType({
    name: 'abouthome',
    type: 'document',
    title: 'About section in Home',
    fields: [
        defineField({
            name: 'description',
            type: 'text',
            title: 'About Description'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'About Image'    
        })    
    ]
})