import React, {useState} from "react";
import classes from "./Counter.module.css";
import {CounterNumber} from "./CounterNumber/CounterNumber";
import {Button} from "../../common/Button/Button";
import {SetCounter} from "../SetCounter/SetCounter";

export const Counter = () => {

	const [number, setNumber] = useState<number>(0)
	const [maxNumber, setMaxNumber] = useState<number>(0)
	const [startNumber, setStartNumber] = useState<number>(0);
	const [correctValue, setCorrectValue] = useState<boolean>(false)
	const [showCounter, setShowCounter] = useState<boolean>(true)
	const [disabled, setDisabled] = useState<boolean>(true)

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
		setDisabled(true)
	}
	let getStartValue = (inputValue: number) => {
		setStartNumber(inputValue)
		setNumber(inputValue)
		setShowCounter(false)
		setDisabled(true)
	}

	let getCorrectValue = (value: boolean) => {
		setCorrectValue(value)
	}

	return (
		<div className={classes.wrapper}>
			<SetCounter setValue={setValue}
									getMaxValue={getMaxValue}
									getStartValue={getStartValue}
									getCorrectValue={getCorrectValue}
									correctValue={correctValue}
									setDisabled={setDisabled}/>
			<div className={classes.counter}>
				<CounterNumber maxNumber={maxNumber}
											 correctValue={correctValue}
											 showCounter={showCounter}
											 number={number}/>
				<div className={classes.btnWrapper}>
					<Button onClickHandler={onClickHandler}
									title={'INC'}
									disabledCondition={maxNumber}
									number={number}
									correctValue={correctValue}
									disabled={disabled}/>
					<Button onClickHandler={onRestClickHandler}
									title={'RESET'}
									disabledCondition={startNumber}
									number={number}/>
				</div>
			</div>
		</div>

	)
}