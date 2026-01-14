import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Cliente de Sanity para hacer queries
export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '1uibrbgc',
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: true, // CDN para mejor performance en producción
    apiVersion: '2024-01-14', // Usa la fecha de hoy o una fecha fija
})

// Builder para URLs de imágenes
const builder = imageUrlBuilder(client)

/**
 * Genera URL optimizada para una imagen de Sanity
 * @param {object} source - Referencia de imagen de Sanity
 * @returns {object} Builder para encadenar opciones (.width(), .height(), etc.)
 */
export function urlFor(source) {
    return builder.image(source)
}

// Query para obtener todos los productos
export const PRODUCTS_QUERY = `*[_type == "product"] | order(order asc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  price,
  colors,
  images,
  description,
  featured
}`

/**
 * Obtiene todos los productos de Sanity
 * @returns {Promise<Array>} Lista de productos
 */
export async function getProducts() {
    return client.fetch(PRODUCTS_QUERY)
}
