import { defineField, defineType } from 'sanity'

export const productType = defineType({
    name: 'product',
    title: 'Producto',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Nombre del Producto',
            type: 'string',
            validation: (Rule) => Rule.required().error('El nombre es obligatorio'),
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Precio (Gs.)',
            type: 'number',
            validation: (Rule) => Rule.required().positive().error('El precio debe ser mayor a 0'),
        }),
        defineField({
            name: 'colors',
            title: 'Colores Disponibles',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'images',
            title: 'Imágenes del Producto',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
            validation: (Rule) => Rule.required().min(1).error('Debe tener al menos 1 imagen'),
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'featured',
            title: 'Producto Destacado',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'order',
            title: 'Orden de visualización',
            type: 'number',
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            price: 'price',
            media: 'images.0',
        },
        prepare({ title, price, media }) {
            return {
                title,
                subtitle: price ? `Gs. ${price.toLocaleString('es-PY')}` : 'Sin precio',
                media,
            }
        },
    },
})
