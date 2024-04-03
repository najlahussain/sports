import {defineField, defineType} from 'sanity'
export const eventspage = defineType({
    name: 'eventspage',
    type: 'document',
    title: 'Events Page',
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
            name: 'galleryImage',
            type: 'image',
            title: 'Gallery Image'    
        }),
        defineField({
            name: 'test1Image',
            type: 'image',
            title: 'Testimonial1 Image'    
        }),
        defineField({
            name: 'test1Name',
            type: 'string',
            title: 'Testimonial1 Name',
        }),
        defineField({
            name: 'test1desc',
            type: 'text',
            title: 'Testimonial1 Text',
        }),
        defineField({
            name: 'test2Image',
            type: 'image',
            title: 'Testimonial2 Image'    
        }),
        defineField({
            name: 'test2Name',
            type: 'string',
            title: 'Testimonial2 Name',
        }),
        defineField({
            name: 'test2desc',
            type: 'text',
            title: 'Testimonial2 Text',
        }),
        defineField({
            name: 'test3Image',
            type: 'image',
            title: 'Testimonial3 Image'    
        }),
        defineField({
            name: 'test3Name',
            type: 'string',
            title: 'Testimonial3 Name',
        }),
        defineField({
            name: 'test3desc',
            type: 'text',
            title: 'Testimonial3 Text',
        }),
    ]
})