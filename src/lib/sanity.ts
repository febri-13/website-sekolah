import { createClient } from '@sanity/client'
import type { ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
}

export const client = createClient(config)

export async function getDocuments<T>(query:string): Promise<T[]>{
  return await client.fetch<T[]>(query)
}

export async function getDocument<T>(query:string): Promise<T>{
  return await client.fetch<T>(query)
}
