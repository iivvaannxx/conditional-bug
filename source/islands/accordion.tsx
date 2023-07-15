import { ComponentChildren, JSX } from 'preact'
import { useToggle } from '@app/hooks'
import { If } from '@common/components'

type Props = JSX.HTMLAttributes<HTMLDivElement> & {

  text?: string
  open?: boolean

  children?: ComponentChildren
}

export default function Accordion ({ children, text, open, class: clazz, ...otherProps }: Props) {

  const [isOpen, toggle] = useToggle(open)

  return (

    <div class={`bg-red-300 p-4 ${clazz}`}>

      <div class='flex justify-between items-center'>
        <span>{text}</span>
        <button type='button' class='p-2 bg-black text-white' onClick={toggle}>Open</button>
      </div>

      <If condition={isOpen.value}>

        <div class='mt-4 w-full'>
          {children}
        </div>

      </If>

    </div>
  )
}
