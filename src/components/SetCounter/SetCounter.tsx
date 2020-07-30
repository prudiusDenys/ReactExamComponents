import React from "react";
import classes from "./SetCounter.module.css";
import {Button} from "../../common/Button/Button";
import {CounterValue} from "./CounterValue/CounterValue";

type PropsType = {
	setValue: ()=>void
	getMaxValue: (value: number) => void
	getStartValue: (value: number) => void
	startNumber: number
	maxNumber: number
	getCorrectValue:(value: boolean)=>void

}

export const SetCounter = (props:  PropsType) => {

let onClickSetValue = () => {
	props.setValue()
}

// let setDisabled = () => {
// 		if(props.startNumber === undefined || )
// }
	return (
		<div className={classes.setCounter}>
			<CounterValue getMaxValue={props.getMaxValue}
										getStartValue={props.getStartValue} setValue={props.setValue} getCorrectValue={props.getCorrectValue}/>
			<div className={classes.btnWrapper}>
				<Button onClickHandler={onClickSetValue}  title={'SET'} disabledCondition={100} />
			</div>
		</div>
	)
}