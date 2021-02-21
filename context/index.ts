import { createReducerContext } from 'react-use'
import { State } from '../interfaces'
import { UserState } from '../interfaces/enums'
import { saveValues } from '../utils/localStorage'

export const defaultValues: State = {
  user: {
    id: '',
    name: '',
    photo: '',
    status: UserState.NotLogged
  }
}

const reducer = (previousValues: State, newValues: State) => {
  const newState = { ...previousValues, ...newValues }
  saveValues(newState)
  return newState
}

const [useSharedState, SharedStateProvider] = createReducerContext(
  reducer,
  defaultValues
)

export { useSharedState, SharedStateProvider }
