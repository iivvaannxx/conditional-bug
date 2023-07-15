import { JSX } from 'preact'
import { Signal, useSignal } from '@preact/signals'

/**  @brief The props of the form input component. */
type Props = JSX.HTMLAttributes<HTMLInputElement> & {

  label: string,
  value?: string,

  wrapperClass?: string,
  inputValue?: Signal<string>
}

/** @brief Represents a styled form input. */
export default function FormInput ({ id, name, label, value, inputValue, wrapperClass, ...props }: Props) {

  const labelID = id ?? name ?? ''
  const currentValue = inputValue ?? useSignal<string>(value ?? '')

  function updateValue (event: Event) {

    const { value: text } = event.target as HTMLInputElement
    currentValue.value = text
  }

  return (

    <div class={wrapperClass}>
      
      <label for={labelID} class='block mb-2 text-sm font-medium text-gray-900'>{label}</label>
      <input 
      
        {...props}

        id={labelID} 
        name={name ?? ''}
        value={currentValue.value}
        
        onInput={updateValue}
        onPaste={updateValue}

        autocomplete='off'
        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5' 
      />

    </div>
  )
}