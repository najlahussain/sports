import {defineField, defineType} from 'sanity'
export const about = defineType({
    name: 'about',
    type: 'document',
    title: 'About Page',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            title: 'Main Image'    
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description'
        }),
        defineField({
            name: 'sideImage',
            type: 'image',
            title: 'Side Image'    
        }),
        defineField({
            name: 'reviews',
            type: 'text',
            title: 'Reviews Text',
        }),
        defineField({
            name: 'customer',
            type: 'string',
            title: 'Customer Name',
        }),
    ]
})