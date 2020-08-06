import React, {useState} from "react";
import classes from "./Counter.module.css";
import {CounterNumber} from "./CounterNumber/CounterNumber";
import {SetCounter} from "../SetCounter/SetCounter";
import {Button} from "../../common/Button/Button";

export const Counter = () => {

	const [number, setNumber] = useState<number>(0)
	const [maxNumber, setMaxNumber] = useState(0)
	const [startNumber, setStartNumber] = useState<number>(0);
	const [correctValue, setCorrectValue] = useState<boolean>(false)
	const [showCounter, setShowCounter] = useState<boolean>(true)
	const [disabled, setDisabled] = useState<boolean>(true)

	const onClickHandler = () => {
		setNumber(number + 1)
	}
	const onRestClickHandler = () => {
		setNumber(startNumber)
	}
	const setValue = () => {
		setShowCounter(true)
	}
	const getMaxValue = (inputValue: number) => {
		setMaxNumber(inputValue)
		setShowCounter(false)
		setDisabled(true)
	}
	const getStartValue = (inputValue: number) => {
		setStartNumber(inputValue)
		setNumber(inputValue)
		setShowCounter(false)
		setDisabled(true)
	}
	const getCorrectValue = (value: boolean) => {
		setCorrectValue(value)
		setShowCounter(false)
	}

	return (
		<div className={classes.wrapper}>
			<SetCounter setValue={setValue}
									getMaxValue={getMaxValue}
									getStartValue={getStartValue}
									getCorrectValue={getCorrectValue}
									correctValue={correctValue}
									setDisabled={setDisabled}
									maxNumber={maxNumber}
									startNumber={startNumber}/>
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