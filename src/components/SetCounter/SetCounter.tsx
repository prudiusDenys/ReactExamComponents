import React from "react";
import classes from "./SetCounter.module.css";
import {Button} from "../../common/Button/Button";
import {CounterValue} from "./CounterValue/CounterValue";
import {saveState} from "../../localStorage/localStorageFunctions";
import {useDispatch, useSelector} from "react-redux";
import {setValue} from "../state/counterReduce";
import {AppRootState} from "../state/store";

type PropsType = {
	getMaxValue: (value: number) => void
	getStartValue: (value: number) => void
	getCorrectValue:(value: boolean)=>void
	startNumber: number

}

export const SetCounter = (props:  PropsType) => {

	const maxNumber = useSelector<AppRootState, number>(state => state.counter.maxNumber)
	const correctValue = useSelector<AppRootState, boolean>(state => state.counter.correctValue)
	const dispatch = useDispatch()

let onClickSetValue = () => {
	dispatch(setValue())
	saveState('maxNumber', maxNumber);
	saveState('startNumber', props.startNumber);
}
	return (
		<div className={classes.setCounter}>
			<CounterValue getMaxValue={props.getMaxValue}
										getStartValue={props.getStartValue}
										getCorrectValue={props.getCorrectValue}
										maxNumber={maxNumber}
										startNumber={props.startNumber}/>
			<div className={classes.btnWrapper}>
				<Button onClickHandler={onClickSetValue}
								title={'SET'}
								disabledCondition={0}
								correctValue={correctValue}/>
			</div>
		</div>
	)
}