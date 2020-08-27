import {restoreState} from "../../localStorage/localStorageFunctions";

const SET_NUMBER = 'SET_NUMBER'
const GET_MAX_NUMBER = 'GET_MAX_NUMBER'
const GET_START_NUMBER = 'GET_START_NUMBER'
const GET_CORRECT_VALUE = 'GET_CORRECT_VALUE'
const START_NUMBER = 'START_NUMBER'
const SET_VALUE = 'SET_VALUE'

type StateType = {
	number: number,
	maxNumber: number,
	startNumber: number,
	correctValue: boolean,
	showCounter: boolean,
	disabled: boolean
}

type SetNumberType = {
	type: typeof SET_NUMBER
	number: number
}
type RestNumberType = {
	type: typeof START_NUMBER
	startNumber: number
}
type GetMaxValueType = {
	type: typeof GET_MAX_NUMBER
	inputValue: number
}
type GetStartValueType = {
	type: typeof GET_START_NUMBER
	startNumber: number
}
type GetCorrectValueType = {
	type: typeof GET_CORRECT_VALUE
	value: boolean
}
type SetValueType = {
	type: typeof SET_VALUE

}


const initialState: StateType = {
	number: restoreState('startNumber', 0),
	maxNumber: restoreState('maxNumber', 0),
	startNumber: restoreState('startNumber', 0),
	correctValue: false,
	showCounter: true,
	disabled: true
}

type ActionsType =
	SetNumberType
	| GetMaxValueType
	| GetStartValueType
	| GetCorrectValueType
	| RestNumberType
	| SetValueType

export const counterReduce = (state: StateType = initialState, action: ActionsType) => {

	switch (action.type) {
		case SET_NUMBER: {
			return {
				...state,
				number: action.number
			}
		}
		case START_NUMBER: {
			return {
				...state,
				number: action.startNumber
			}
		}
		case GET_MAX_NUMBER: {
			return {
				...state,
				maxNumber: action.inputValue,
				showCounter: false,
				disabled: true,
			}
		}
		case GET_START_NUMBER: {
			return {
				...state,
				startNumber: action.startNumber,
				number: action.startNumber,
				showCounter: false,
				disabled: true,
			}
		}
		case GET_CORRECT_VALUE: {
			return {
				...state,
				correctValue: action.value,
				showCounter: false
			}
		}
		case SET_VALUE: {
			return {
				...state,
				showCounter: true,
				disabled: false
			}
		}
		default: {
			return state
		}
	}
}

export const setNumber = (number: number): SetNumberType => {
	return {type: SET_NUMBER, number}
}

export const restStartNumber = (startNumber: number): RestNumberType => {
	return {type: START_NUMBER, startNumber}
}

export const getMaxNumber = (inputValue: number): GetMaxValueType => {
	return {type: GET_MAX_NUMBER, inputValue}
}

export const getStartNumber = (startNumber: number): GetStartValueType => {
	return {type: GET_START_NUMBER, startNumber}
}
export const getCorrectInputValue = (value: boolean): GetCorrectValueType => {
	return {type: GET_CORRECT_VALUE, value}
}
export const setValue = (): SetValueType => {
	return {type: SET_VALUE}
}