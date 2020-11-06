import React, { FC, useEffect, useReducer } from 'react'
import { useLocalStorage } from 'react-use'
import reducer, { defaultExercises, ACTIONS, IExercise } from './reducer'
import Cell from './components/Cell'
import CircleBtn from './components/CircleBtn'
import HeaderCell from './components/HeaderCell'
import SetMaxButtonGroup from './components/SetMaxButtonGroup'
import TextInput from './components/Inputs/TextInput'
import { toPercent } from './helpers'
import './tailwind.css'
import NumberInput from './components/Inputs/NumberInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    percentMax: 0.9,
    exercises: defaultExercises,
    editingExercises: JSON.parse(JSON.stringify(defaultExercises)),
  })

  useEffect(() => {
    dispatch({
      type: ACTIONS.UPDATE_EXERCISES,
      payload: { value },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <section className="fixed bottom-0 right-0 m-6">
        {editing ? (
          <>
            <CircleBtn
              title="Save"
              onClick={() => {
                dispatch({ type: ACTIONS.SAVE_EDIT })
                setValue(editingExercises)
              }}
            >
              <FontAwesomeIcon icon={faSave} size="2x" />
            </CircleBtn>
            <CircleBtn
              title="Undo"
              onClick={() => dispatch({ type: ACTIONS.CANCEL_EDIT })}
            >
              <FontAwesomeIcon icon={faUndoAlt} size="2x" />
            </CircleBtn>
          </>
        ) : (
          <CircleBtn
            title="Edit"
            onClick={() => dispatch({ type: ACTIONS.START_EDITING })}
          >
            <FontAwesomeIcon icon={faPencilAlt} size="2x" />
          </CircleBtn>
        )}
      </section>
      <section className="my-2 text-center">
        <SetMaxButtonGroup
          {...{
            dispatch,
            percentMax,
            setPercentMax: (value: any) =>
              dispatch({ type: ACTIONS.SET_PERCENT_MAX, payload: { value } }),
          }}
        />
      </section>
      <section className="p-2">
        <table className="w-full bg-gray-100 rounded-lg overflow-hidden">
          <thead className="bg-blue-400 text-white">
            {editing ? (
              <tr>
                <HeaderCell className="w-1/2 align-left">Exercise</HeaderCell>
                <HeaderCell className="w-1/2 align-left">Max</HeaderCell>
              </tr>
            ) : (
              <tr>
                <HeaderCell className="w-1/2 align-left">Exercise</HeaderCell>
                <HeaderCell className="w-1/4 align-left">Max</HeaderCell>
                <HeaderCell>{toPercent(percentMax)}</HeaderCell>
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
                  <Cell className="w-1/2 text-left">
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
                  <Cell className="w-1/2 text-center">
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
                  <Cell className="p-4 text-left">{name}</Cell>
                  <Cell className="p-4 text-center">{max}</Cell>
                  <Cell className="p-4 text-center">
                    {(percentMax * max).toFixed()}
                  </Cell>
                </tr>
              )
            )}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App
