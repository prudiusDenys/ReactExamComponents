import React from "react";
import classes from "./Counter.module.css";
import {CounterNumber} from "./CounterNumber/CounterNumber";
import {SetCounter} from "../SetCounter/SetCounter";
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getCorrectInputValue, getMaxNumber, getStartNumber, restStartNumber, setNumber} from "../state/counterReduce";
import {AppRootState} from "../state/store";

export const CounterWithRedux = () => {

	const dispatch = useDispatch()
	const number = useSelector<AppRootState, number>(state => state.counter.number)
	const startNumber = useSelector<AppRootState, number>(state => state.counter.startNumber)
	const maxNumber = useSelector<AppRootState, number>(state => state.counter.maxNumber)
	const correctValue = useSelector<AppRootState, boolean>(state => state.counter.correctValue)
	const disabled = useSelector<AppRootState, boolean>(state => state.counter.disabled)

	const onClickHandler = () => {
		dispatch(setNumber(number + 1))
	}
	const onRestClickHandler = () => {
		dispatch(restStartNumber(startNumber))
	}
	const getMaxValue = (inputValue: number) => {
		dispatch(getMaxNumber(inputValue))
	}
	const getStartValue = (inputValue: number) => {
		dispatch(getStartNumber(inputValue))
	}
	const getCorrectValue = (value: boolean) => {
		dispatch(getCorrectInputValue(value))
	}

	return (
		<div className={classes.wrapper}>
			<SetCounter getMaxValue={getMaxValue}
									getStartValue={getStartValue}
									getCorrectValue={getCorrectValue}
									startNumber={startNumber}/>
			<div className={classes.counter}>
				<CounterNumber number={number}/>
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