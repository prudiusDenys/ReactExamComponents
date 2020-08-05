import React, {ChangeEvent, useState} from "react";
import classes from "./CounterValue.module.css";
import {Input} from "../../../common/Input/Input";
import {restoreState} from "../../../localStorage/localStorageFunctions";

type PropsType = {
	getMaxValue: (value: number) => void
	getStartValue: (value: number) => void
	setValue: (maxNumber: number, startNumber: number) => void
	getCorrectValue: (value: boolean) => void
}

export const CounterValue = (props: PropsType) => {

	const [maxPositiveValue, setMaxPositiveValue] = useState<boolean>(true);
	const [startPositiveValue, setStartPositiveValue] = useState<boolean>(true);
	const [maxValue, setMaxValue] = useState(restoreState('maxNumber', 0))
	const [startValue, setStartValue] = useState(restoreState('startNumber', 0))

	let onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxValue((Number(e.currentTarget.value)));
		if (Number(e.currentTarget.value) > 0 && Number(e.currentTarget.value) > startValue) {
			setMaxPositiveValue(true)
			if (startValue >= 0) {
				setStartPositiveValue(true)
				props.getStartValue(startValue)
				props.getMaxValue(Number(e.currentTarget.value))
				props.getCorrectValue(false)
			}
		} else {
			setMaxPositiveValue(false)
			props.getCorrectValue(true)
		}
	}
	let onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setStartValue((Number(e.currentTarget.value)))
		if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) ! < maxValue) {
			setStartPositiveValue(true)
			setMaxPositiveValue(true)
			props.getStartValue(Number(e.currentTarget.value))
			props.getMaxValue(maxValue)
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
								 onChange={onChangeMaxHandler} label={'max value'}/>

					<Input key={2}
								 positiveValue={startPositiveValue}
								 onChange={onChangeStartHandler} label={'start value'}/>
			</div>
		</div>
	)
}