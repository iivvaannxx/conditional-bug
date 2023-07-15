import { type ComponentChildren, Fragment } from 'preact';

type Props = {

  condition: boolean
  children: ComponentChildren
}

export default function If ({ condition, children }: Props) {

  return (

    <Fragment>
      {condition === true && children}
    </Fragment>
  )
}
