import { Head, asset } from '$fresh/runtime.ts'
import { Metadata, parseMetadata } from '@common/schemas'

/** @brief Defines the <head> tag for every page. */
export default function PageHead (props: Metadata) {

  const { title, description } = parseMetadata(props)
  return (

    <Head>

      <title>{title}</title>
      <meta name='description' content={description} />

      <link rel='stylesheet' href={ asset('/app.css') } />
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css" />

    </Head>
  )
}