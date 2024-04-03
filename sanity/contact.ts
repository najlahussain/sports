import {defineField, defineType} from 'sanity'
export const contact = defineType({
    name: 'contact',
    type: 'document',
    title: 'Contacts Page',
    fields: [
        defineField({
            name: 'email',
            type: 'string',
            title: 'Email'
        }),
        defineField({
            name: 'phone',
            type: 'string',
            title: 'Phone'
        }),
        defineField({
            name: 'sideImage',
            type: 'image',
            title: 'Side Image'    
        }),
        defineField({
            name: 'bg',
            type: 'image',
            title: 'Contact Background'
        }),   
    ]
})