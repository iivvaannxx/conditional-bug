import { ComponentChildren, JSX } from 'preact'

type Props = JSX.HTMLAttributes<HTMLDivElement> & {

  children?: ComponentChildren
  vertical?: boolean
  horizontal?: boolean
}

export default function CenterContent({ children, vertical = true, horizontal = true, class: clazz, ...otherProps }: Props) {

  let alignment = clazz ? `${clazz} flex` : `flex`
  alignment += vertical ? ' items-center' : ''
  alignment += horizontal ? ' justify-center' : ''

  return (

    <div class={alignment} {...otherProps}>
      {children}
    </div>
  )
}
