import { AppProps } from "$fresh/server.ts";
import { CenterContent } from '@common/components'

/** @brief Defines the default app wrapper. */
export default function App ({ Component }: AppProps) {

  return (

    <body class='h-full overflow-hidden bg-white'>

      <main class='h-[90%] bg-gradient-to-b from-sky-300 to-blue-500 pb-[200px]'>

        <CenterContent class='container mx-auto w-full h-full'>
          <Component />
        </CenterContent>

      </main>

      <footer class='w-full h-[10%] bg-white -mb-2'>

        <CenterContent class='w-full h-full'>
          Footer
        </CenterContent>

      </footer>

    </body>
  )
}
