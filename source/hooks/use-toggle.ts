import { useSignal, Signal } from '@preact/signals'

type ToggleData = [Signal<boolean>, () => void]

export default function useToggle(open: boolean = true): ToggleData {

  const isOn = useSignal(open)
  const toggle = () => { isOn.value = !(isOn.value) }

  return [isOn, toggle]
}
