import { Metadata } from '@common/schemas'
import { PageHead, ModalBase } from '@common/components'

import FormInput from '@app/islands/form-input.tsx'
import Accordion from '@app/islands/accordion.tsx'


/** @brief The default page of the application. */
export default function Home () {

  /** @brief The metadata of this page. */
  const metadata: Metadata = {

    title: 'Quick Link',
    description: 'A simple URL shortener.'
  }

  return (

    <>
      <PageHead {...metadata} />

      <ModalBase>

        <form action='/some/route' method='post'>

          <div class='grid gap-4 mb-6 sm:grid-cols-2'>

            <div class='grid gap-4 grid-cols-4 col-span-2'>
              <FormInput wrapperClass='col-span-1' label='Auth' type='number' minLength={6} maxLength={6} placeholder='Enter the auth code' required />
              <FormInput wrapperClass='col-span-3' label='Secret' type='password' placeholder='Enter the secret' required />
            </div>

            <FormInput wrapperClass='col-span-2 pb-4' label='URL' placeholder='https://your.long.url' required />
            <hr class='col-span-2 w-5/6 justify-self-center pt-4' />

            <Accordion text='Advanced Options' class='col-span-2' open={false}>

              <div class='grid gap-4 grid-cols-4 col-span-2'>

                <div class='col-span-1'>
                  <label for='category' class='block mb-2 text-sm font-medium text-gray-900'>Link Type</label>
                  <select id='category' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      <option value='random' selected>Random</option>
                      <option value='alias'>Alias</option>
                  </select>
                </div>

                <FormInput wrapperClass='col-span-3' label='Alias' placeholder='my-link-alias' required />

                </div>

                <div class='grid gap-4 grid-cols-4 col-span-2'>

                <div class='col-span-1'>
                  <label for='category' class='block mb-2 text-sm font-medium text-gray-900'>Lifespan</label>
                  <select id='category' class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      <option value='permanent'>Permanent</option>
                      <option value='temporary' selected>Temporary</option>
                  </select>
                </div>

                <FormInput wrapperClass='col-span-3' type='date' label='Expires On' required />

              </div>

            </Accordion>

          </div>

          <button type='submit' class='text-white w-full justify-center inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
              <svg class='mr-1 -ml-1 w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z' clip-rule='evenodd'></path></svg>
              Create
          </button>

        </form>

      </ModalBase>
    </>
  )
}
