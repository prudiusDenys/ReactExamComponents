import {counterReduce, getCorrectValue, getMaxValue, getStartNumber, restStartNumber, setNumber} from "./counterReduce";

test('number should be equal 1', () => {

	const startState = {
		number: 0,
		maxNumber: 0,
		startNumber: 0,
		correctValue: false,
		showCounter: true,
		disabled: true
	}
	const number = 1;

	const endState = counterReduce(startState, setNumber(number))
	expect(endState.number).toBe(1)
})
test('start number should be equal 4', () => {

	const startState = {
		number: 0,
		maxNumber: 0,
		startNumber: 0,
		correctValue: false,
		showCounter: true,
		disabled: true
	}

	const startNumber = 4;

	const endState = counterReduce(startState, restStartNumber(startNumber))
	expect(endState.number).toBe(4)
})
test('maxNumber should be equal 5. showCounter should be equal false', () => {

	const startState = {
		number: 0,
		maxNumber: 0,
		startNumber: 0,
		correctValue: false,
		showCounter: true,
		disabled: true
	}

	const maxNumber = 5;

	const endState = counterReduce(startState, getMaxValue(maxNumber))

	expect(endState.number).toBe(0)
	expect(endState.startNumber).toBe(0)
	expect(endState.maxNumber).toBe(5)
	expect(endState.showCounter).toBe(false)
	expect(endState.disabled).toBe(true)
})
test('startNumber should be equal 5. showCounter should be equal false. number should be equal 5', () => {

	const startState = {
		number: 0,
		maxNumber: 0,
		startNumber: 0,
		correctValue: false,
		showCounter: true,
		disabled: true
	}

	const startNumber = 5;

	const endState = counterReduce(startState, getStartNumber(startNumber))

	expect(endState.number).toBe(5)
	expect(endState.startNumber).toBe(5)
	expect(endState.maxNumber).toBe(0)
	expect(endState.showCounter).toBe(false)
	expect(endState.disabled).toBe(true)
})
test('correctValue should be equal true', () => {

	const startState = {
		number: 0,
		maxNumber: 0,
		startNumber: 0,
		correctValue: false,
		showCounter: true,
		disabled: true
	}

	const setCorrectValue = true;

	const endState = counterReduce(startState, getCorrectValue(setCorrectValue))

	expect(endState.correctValue).toBe(true)
	expect(endState.showCounter).toBe(false)
})

