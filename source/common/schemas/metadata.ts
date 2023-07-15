import { z } from '@app/deps'

/** @brief Validation schema for the metadata of pages. */
const MetadataSchema = z.object({

  title: z.string().min(1),
  description: z.string().min(1),
})

/** @brief Defines all the metadata included in pages. */
export type Metadata = z.infer<typeof MetadataSchema>

/** @brief Tries to parse the given metadata object using the validation schema. */
export function parseMetadata(metadata: unknown): Metadata {

  return MetadataSchema.parse(metadata)
}