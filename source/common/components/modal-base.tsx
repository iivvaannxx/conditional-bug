import { ComponentChildren } from 'preact'

type Props = {

  children?: ComponentChildren
  extraClasses?: string
}

export default function ModalBase({ children, extraClasses }: Props) {

  return (

    <div class={`relative p-6 rounded-lg shadow-2xl bg-white ${extraClasses ?? ''}`}>
      {children}
    </div>
  )
}
