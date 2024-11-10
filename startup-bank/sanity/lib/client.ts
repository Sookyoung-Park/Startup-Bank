import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // setting for always users get a new data(contents)
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
