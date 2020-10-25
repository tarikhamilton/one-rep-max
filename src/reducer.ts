export enum ACTIONS {
  SET_EXERCISE_MAX = 'SET_EXERCISE_MAX',
  SET_PERCENT_MAX = 'SET_PERCENT_MAX',
  START_EDITING = 'START_EDITING',
  SAVE_EDIT = 'SAVE_EDIT',
  CANCEL_EDIT = 'CANCEL_EDIT',
  UPDATE_INPUT = 'UPDATE_INPUT',
  UPDATE_EXERCISES = 'UPDATE_EXERCISES',
}

export interface IReducerState {
  editing: boolean
  percentMax: number
  exercises: IExercise[]
  editingExercises: IExercise[]
}

export interface IExercise {
  id: number
  name: string
  max: number
}

export type IReducerAction =
  | {
      type: ACTIONS.SET_EXERCISE_MAX
      payload: { id: number; weight: number }
    }
  | {
      type: ACTIONS.SET_PERCENT_MAX
      payload: { value: number }
    }
  | {
      type: ACTIONS.START_EDITING
    }
  | {
      type: ACTIONS.SAVE_EDIT
    }
  | {
      type: ACTIONS.CANCEL_EDIT
    }
  | {
      type: ACTIONS.UPDATE_INPUT
      payload: { id: number; property: 'name' | 'max'; value: string }
    }
  | {
      type: ACTIONS.UPDATE_EXERCISES
      payload: { value: any }
      // payload: { value: IExercise[] }
    }

export function reducer(state: IReducerState, action: IReducerAction) {
  switch (action.type) {
    case ACTIONS.START_EDITING: {
      return {
        ...state,
        editing: true,
        editingExercises: JSON.parse(JSON.stringify(state.exercises)),
      }
    }
    case ACTIONS.SAVE_EDIT: {
      return {
        ...state,
        editing: false,
        exercises: JSON.parse(JSON.stringify(state.editingExercises)),
      }
    }
    case ACTIONS.CANCEL_EDIT: {
      return { ...state, editing: false }
    }
    case ACTIONS.UPDATE_EXERCISES: {
      const { value } = action.payload
      return { ...state, exercises: value, editing: false }
    }
    case ACTIONS.UPDATE_INPUT: {
      const { id, property, value } = action.payload

      return {
        ...state,
        editingExercises: state.editingExercises.map((exercise) =>
          exercise.id === id ? { ...exercise, [property]: value } : exercise
        ),
      }
    }
    case ACTIONS.SET_EXERCISE_MAX: {
      const { id, weight } = action.payload

      return {
        ...state,
        exercises: state.exercises.map((exercise) =>
          exercise.id === id ? { ...exercise, max: weight } : exercise
        ),
      }
    }
    case ACTIONS.SET_PERCENT_MAX: {
      const { value: percentMax } = action.payload

      return { ...state, percentMax }
    }
    default:
      return state
  }
}

export default reducer

export const defaultExercises = [
  {
    name: 'Conventional Deadlift',
    max: 385,
  },
  {
    name: 'Bench Press',
    max: 225,
  },
  {
    name: 'Back Squat',
    max: 255,
  },
].map((exercise, id) => ({ id, ...exercise }))
