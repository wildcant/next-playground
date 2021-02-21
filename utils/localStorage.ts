import { State } from '../interfaces'

export const loadValues = (): State | null => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return null
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return null
  }
}

export const saveValues = (values: State): void => {
  try {
    const serializedValues = JSON.stringify(values)
    localStorage.setItem('state', serializedValues)
  } catch (err) {
    console.error(err)
  }
}
