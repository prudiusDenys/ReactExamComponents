import React, {ChangeEvent, useState} from "react";
import classes from "./CounterValue.module.css";

type PropsType = {
	getMaxValue: (value: number) => void
	getStartValue: (value: number) => void
	setValue: (maxNumber: number, startNumber: number)=>void
	getCorrectValue:(value: boolean)=>void
}

export const CounterValue = (props: PropsType) => {

	const [maxPositiveValue, setMaxPositiveValue] = useState<boolean>(true);
	const [startPositiveValue, setStartPositiveValue] = useState<boolean>(true);
	const [maxValue, setMaxValue] = useState(0)
	const [startValue, setStartValue] = useState(0)

	let onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxValue((Number(e.currentTarget.value)));
		if (Number(e.currentTarget.value) > 0 && Number(e.currentTarget.value) > startValue && Number(e.currentTarget.value) !== null) {
			setMaxPositiveValue(true)
			setStartPositiveValue(true)
			props.getMaxValue(Number(e.currentTarget.value))
			props.getCorrectValue(true)

		} else {
			setMaxPositiveValue(false)
			props.getCorrectValue(false)
		}
	}

	let onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setStartValue((Number(e.currentTarget.value)))
		if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) ! < maxValue && Number(e.currentTarget.value) !== null) {
			setStartPositiveValue(true)
			setMaxPositiveValue(true)
			props.getStartValue(Number(e.currentTarget.value))
			props.getCorrectValue(true)
		} else {
			setStartPositiveValue(false)
			props.getCorrectValue(false)
		}
	}


	return (
		<div className={classes.counterValue}>
			<div className={classes.numbers}>
				<div className={classes.value}>
					max value: <input onChange={onChangeMaxHandler}
														className={!maxPositiveValue ? `${classes.error} ${classes.valueInput}` : classes.valueInput}
														type="number"/>
				</div>
				<div className={classes.value}>
					start value: <input onChange={onChangeStartHandler}
															className={!startPositiveValue ? `${classes.error} ${classes.valueInput}` : classes.valueInput}
															type="number"/>
				</div>
			</div>
		</div>
	)
}