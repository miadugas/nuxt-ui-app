import { useSanity } from '#imports'
import type { QueryParams, SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const useSanityHelper = () => {
  const { client } = useSanity()

  const fetchData = async <T>(
    query: string,
    params?: QueryParams
  ): Promise<T | null> => {
    try {
      if (!client) {
        throw new Error('Sanity client is not initialized')
      }
      const sanityClient = client as SanityClient
      const result = await sanityClient.fetch<T>(query, params || {})
      return result
    } catch (error) {
      console.error('Error fetching data from Sanity:', error)
      return null
    }
  }

  // Initialize the image URL builder using the Sanity client
  const urlFor = (source: any) => {
    if (!client) {
      throw new Error('Sanity client is not initialized')
    }
    const builder = imageUrlBuilder(client as SanityClient)
    return builder.image(source)
  }

  return {
    fetchData,
    urlFor // Expose urlFor function for generating image URLs
  }
}
