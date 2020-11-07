import React, { FC, useEffect, useReducer } from 'react'
import { useLocalStorage } from 'react-use'
import reducer, { defaultExercises, ACTIONS, IExercise } from './reducer'
import Cell from './components/Cell'
import CircleButton from './components/CircleButton'
import HeaderCell from './components/HeaderCell'
import SetMaxButtons from './components/SetMaxButtonGroup'
import TextInput from './components/Inputs/TextInput'
import { addSuffix, toPercentMarkup } from './helpers'
import './tailwind.css'
import NumberInput from './components/Inputs/NumberInput'
import {
  faPencilAlt,
  faSave,
  faUndoAlt,
} from '@fortawesome/free-solid-svg-icons'

const App: FC<any> = () => {
  const [value, setValue] = useLocalStorage('one-rep-max', defaultExercises)
  const [
    { editing, editingExercises, exercises, percentMax },
    dispatch,
  ] = useReducer(reducer, {
    editing: false,
    percentMax: 0.7,
    exercises: defaultExercises,
    editingExercises: JSON.parse(JSON.stringify(defaultExercises)),
  })

  const total = exercises
    .map(({ max }: any) => +max)
    .reduce((acc: number, n: number) => acc + n)

  useEffect(() => {
    dispatch({
      type: ACTIONS.UPDATE_EXERCISES,
      payload: { value },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App font-medium text-gray-700">
      <section className="fixed bottom-0 right-0 m-6">
        {editing ? (
          <>
            <CircleButton
              icon={faSave}
              title="Save"
              variant="success"
              onClick={() => {
                dispatch({ type: ACTIONS.SAVE_EDIT })
                setValue(editingExercises)
              }}
            />
            <CircleButton
              icon={faUndoAlt}
              title="Undo"
              variant="cancel"
              onClick={() => dispatch({ type: ACTIONS.CANCEL_EDIT })}
            />
          </>
        ) : (
          <CircleButton
            icon={faPencilAlt}
            title="Edit"
            onClick={() => dispatch({ type: ACTIONS.START_EDITING })}
          />
        )}
      </section>
      <section className="my-2 text-center">
        <SetMaxButtons
          {...{
            percents: [0.5, 0.6, 0.7, 0.8, 0.9],
            percentMax,
            setPercentMax: (value: any) =>
              dispatch({ type: ACTIONS.SET_PERCENT_MAX, payload: { value } }),
          }}
        />
      </section>
      <section className="p-2">
        <table className="w-full bg-blue-400 shadow-lg rounded-lg overflow-hidden">
          <thead className="text-white">
            {editing ? (
              <tr>
                <HeaderCell className="w-1/2">Exercise</HeaderCell>
                <HeaderCell className="w-1/2">Max (lbs)</HeaderCell>
              </tr>
            ) : (
              <tr>
                <HeaderCell className="w-1/2">Exercise</HeaderCell>
                <HeaderCell className="w-1/4 bg-blue-500 rounded-tl-lg rounded-tr-lg">
                  {toPercentMarkup(percentMax)}
                </HeaderCell>
                <HeaderCell className="w-1/4">Max</HeaderCell>
              </tr>
            )}
          </thead>
          <tbody>
            {exercises.map(({ id, name, max }: IExercise) =>
              editing ? (
                <tr
                  key={id}
                  onClick={() => dispatch({ type: ACTIONS.START_EDITING })}
                >
                  <Cell editing={editing} className="w-1/2 text-left">
                    <TextInput
                      onChange={({ target: { value } }: any) =>
                        dispatch({
                          type: ACTIONS.UPDATE_INPUT,
                          payload: { id, property: 'name', value },
                        })
                      }
                      value={
                        editingExercises.find(
                          (exercise: IExercise) => id === exercise.id
                        ).name
                      }
                    />
                  </Cell>
                  <Cell editing={editing} className="w-1/2 text-center">
                    <NumberInput
                      className="text-center"
                      onChange={({ target: { value } }: any) =>
                        dispatch({
                          type: ACTIONS.UPDATE_INPUT,
                          payload: { id, property: 'max', value },
                        })
                      }
                      value={
                        editingExercises.find(
                          (exercise: IExercise) => id === exercise.id
                        ).max
                      }
                    />
                  </Cell>
                </tr>
              ) : (
                <tr key={id}>
                  <Cell className="text-left">{name}</Cell>
                  <Cell className="text-center bg-gray-100 font-bold">
                    {addSuffix((percentMax * max).toFixed(), 'lbs')}
                  </Cell>
                  <Cell className="text-center">{addSuffix(max, 'lbs')}</Cell>
                </tr>
              )
            )}
            {!editing && (
              <tr className="font-bold text-blue-700">
                <Cell className="bg-blue-100">
                  <span className="mr-1">Total</span>
                  <span aria-label="" role="img">
                    💪
                  </span>
                </Cell>
                <Cell className="bg-blue-100"></Cell>
                <Cell className="bg-blue-100 text-center">
                  {addSuffix(total, 'lbs')}
                </Cell>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App
