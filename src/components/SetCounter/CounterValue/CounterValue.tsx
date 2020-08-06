import React, {ChangeEvent, useState} from "react";
import classes from "./CounterValue.module.css";
import {Input} from "../../../common/Input/Input";
import {restoreState} from "../../../localStorage/localStorageFunctions";

type PropsType = {
	getMaxValue: (value: number) => void
	getStartValue: (value: number) => void
	getCorrectValue: (value: boolean) => void
	maxNumber: number
	startNumber: number
}

export const CounterValue = (props: PropsType) => {

	const [maxPositiveValue, setMaxPositiveValue] = useState<boolean>(true);
	const [startPositiveValue, setStartPositiveValue] = useState<boolean>(true);

	let onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.getMaxValue((Number(e.currentTarget.value)));
		if (Number(e.currentTarget.value) > 0 && Number(e.currentTarget.value) > props.startNumber) {
			setMaxPositiveValue(true)
			if (props.startNumber >= 0) {
				setStartPositiveValue(true)
				props.getStartValue(props.startNumber)
				props.getMaxValue(Number(e.currentTarget.value))
				props.getCorrectValue(false)
			}
		} else {
			setMaxPositiveValue(false)
			props.getCorrectValue(true)
		}
	}
	let onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.getStartValue((Number(e.currentTarget.value)))
		if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) ! < props.maxNumber) {
			setStartPositiveValue(true)
			setMaxPositiveValue(true)
			props.getStartValue(Number(e.currentTarget.value))
			props.getMaxValue(props.maxNumber)
			props.getCorrectValue(false)
		} else {
			setStartPositiveValue(false)
			props.getCorrectValue(true)
		}
	}

	return (
		<div className={classes.counterValue}>
			<div className={classes.numbers}>
					<Input key={1}
								 positiveValue={maxPositiveValue}
								 onChange={onChangeMaxHandler}
								 value={'max value'}
								 valueNumber={props.maxNumber}/>

					<Input key={2}
								 positiveValue={startPositiveValue}
								 onChange={onChangeStartHandler}
								 value={'start value'}
								 valueNumber={props.startNumber}/>
			</div>
		</div>
	)
}