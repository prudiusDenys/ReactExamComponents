import React, {useState} from "react";
import classes from "./Counter.module.css";
import {CounterNumber} from "./CounterNumber/CounterNumber";
import {Button} from "../../common/Button/Button";
import {SetCounter} from "../SetCounter/SetCounter";

export const Counter = () => {

	const [number, setNumber] = useState<number>(0)
	const [maxNumber, setMaxNumber] = useState<number>(0)
	const [startNumber, setStartNumber] = useState<number>(0);
	const [correctValue, setCorrectValue] = useState<boolean>(true)
	const [showCounter, setShowCounter] = useState<boolean>(true)

	let onClickHandler = () => {
		setNumber(number + 1)
	}
	let onRestClickHandler = () => {
		setNumber(startNumber)
	}

	let setValue = () => {
		setShowCounter(true)
	}

	let getMaxValue = (inputValue: number) => {
		setMaxNumber(inputValue)
		setShowCounter(false)
	}
	let getStartValue = (inputValue: number) => {
		setStartNumber(inputValue)
		setNumber(inputValue)
		setShowCounter(false)
	}

	let getCorrectValue = (value: boolean) => {
		setCorrectValue(value)
	}

	return (
		<div className={classes.wrapper}>
			<SetCounter setValue={setValue} getMaxValue={getMaxValue} getStartValue={getStartValue} startNumber={startNumber}
									maxNumber={maxNumber} getCorrectValue={getCorrectValue}/>
			<div className={classes.counter}>
				<CounterNumber startNumber={startNumber} maxNumber={maxNumber} correctValue={correctValue}
											 showCounter={showCounter} number={number}/>
				<div className={classes.btnWrapper}>
					<Button onClickHandler={onClickHandler} title={'INC'} disabledCondition={maxNumber}
									number={number}/>
					<Button onClickHandler={onRestClickHandler} title={'RESET'}
									disabledCondition={startNumber} number={number}/>
				</div>
			</div>
		</div>

	)
}