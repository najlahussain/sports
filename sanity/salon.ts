import {defineField, defineType} from 'sanity'
export const salon = defineType({
    name: 'salon',
    type: 'document',
    title: 'Salon Page',
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
            name: 'services',
            type: 'text',
            title: 'Services Text',
        }),
        defineField({
            name: 'spaText',
            type: 'text',
            title: 'Beauty and Spa text',
        }),
        defineField({
            name: 'spaImage1',
            type: 'image',
            title: 'Beauty and Spa Image 1'    
        }),
        defineField({
            name: 'spaImage2',
            type: 'image',
            title: 'Beauty and Spa Image 2'
        }),
        defineField({
            name: 'spaImage3',
            type: 'image',
            title: 'Beauty and Spa Image 3'    
        }),
    ]
})