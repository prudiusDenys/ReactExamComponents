import React from "react";
import classes from "./SetCounter.module.css";
import {Button} from "../../common/Button/Button";
import {CounterValue} from "./CounterValue/CounterValue";
import {saveState} from "../../localStorage/localStorageFunctions";

type PropsType = {
	getMaxValue: (value: number) => void
	getStartValue: (value: number) => void
	getCorrectValue:(value: boolean)=>void
	correctValue: boolean
	setDisabled:(disabled: boolean)=>void
	maxNumber: number
	startNumber: number
	setShowCounter:(showCounter: boolean)=>void
}

export const SetCounter = (props:  PropsType) => {

let onClickSetValue = () => {
	props.setShowCounter(true)
	props.setDisabled(false)
	saveState('maxNumber', props.maxNumber);
	saveState('startNumber', props.startNumber);
}
	return (
		<div className={classes.setCounter}>
			<CounterValue getMaxValue={props.getMaxValue}
										getStartValue={props.getStartValue}
										getCorrectValue={props.getCorrectValue}
										maxNumber={props.maxNumber}
										startNumber={props.startNumber}/>
			<div className={classes.btnWrapper}>
				<Button onClickHandler={onClickSetValue}
								title={'SET'}
								disabledCondition={0}
								correctValue={props.correctValue}/>
			</div>
		</div>
	)
}