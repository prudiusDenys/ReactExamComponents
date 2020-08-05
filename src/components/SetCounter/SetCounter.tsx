import React, {useState} from "react";
import classes from "./SetCounter.module.css";
import {Button} from "../../common/Button/Button";
import {CounterValue} from "./CounterValue/CounterValue";

type PropsType = {
	setValue: () => void
	getMaxValue: (value: number) => void
	getStartValue: (value: number) => void
	getCorrectValue: (value: boolean) => void
	correctValue: boolean
	setDisabled: (disabled: boolean) => void
}

export const SetCounter = (props: PropsType) => {

	let onClickSetValue = () => {
		props.setValue()
		props.setDisabled(false)
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