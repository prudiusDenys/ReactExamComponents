import React from "react";
import classes from "./SetCounter.module.css";
import {Button} from "../../common/Button/Button";
import {CounterValue} from "./CounterValue/CounterValue";
import {saveState} from "../../localStorage/localStorageFunctions";

type PropsType = {
	setValue: ()=>void
	getMaxValue: (value: number) => void
	getStartValue: (value: number) => void
	getCorrectValue:(value: boolean)=>void
	correctValue: boolean
	setDisabled:(disabled: boolean)=>void
	maxNumber: number
	startNumber: number
}

export const SetCounter = (props:  PropsType) => {

let onClickSetValue = () => {
	props.setValue()
	props.setDisabled(false)
	saveState('maxNumber', props.maxNumber);
	saveState('startNumber', props.startNumber);
}
	return (
		<div className={classes.setCounter}>
			<CounterValue getMaxValue={props.getMaxValue}
										getStartValue={props.getStartValue}
										setValue={props.setValue}
										getCorrectValue={props.getCorrectValue}/>
			<div className={classes.btnWrapper}>
				<Button onClickHandler={onClickSetValue}
								title={'SET'}
								disabledCondition={0}
								correctValue={props.correctValue}/>
			</div>
		</div>
	)
}