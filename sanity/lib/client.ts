import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'14r04k7o',
  dataset:'production',
  apiVersion: '2023-01-01', // Use latest API version
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})
