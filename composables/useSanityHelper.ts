import { useSanity } from '#imports'
import type { QueryParams, SanityClient } from '@sanity/client'

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
      const result = await sanityClient.fetch<T>(query, params)
      return result
    } catch (error) {
      console.error('Error fetching data from Sanity:', error)
      return null
    }
  }

  return {
    fetchData
  }
}

