import React, {useState} from 'react';
import {Button} from "../../common/Button/Button";
import classes from "./Counter.module.css";
import {CounterNumber} from "./CounterNumber/CounterNumber";
import {action} from "@storybook/addon-actions";
import {Counter} from "./Counter";



export default {
	title: 'Counter',
	component: Counter,
};


export const CounterDefault = () =>{
	const [number, setNumber] = useState<number>(0)
	const [maxNumber, setMaxNumber] = useState<number>(0)
	const [startNumber, setStartNumber] = useState<number>(0);
	const [correctValue, setCorrectValue] = useState<boolean>(true)
	const[showCounter, setShowCounter] = useState<boolean>(true)
	const[disabled, setDisabled]= useState(true)
	return(
		<div className={classes.counter}>
			<CounterNumber maxNumber={maxNumber} correctValue={correctValue} showCounter={showCounter} number={number}/>
			<div className={classes.btnWrapper}>
				<Button onClickHandler={action('Value increase +1 till 5')}  title={'INC'} disabledCondition={maxNumber} number={number}/>
				<Button onClickHandler={()=> 0}  title={'RESET'} disabledCondition={startNumber} number={number}/>
			</div>
		</div>
	)
}
export const CounterMaxValue = () =>{
	const [number, setNumber] = useState<number>(0)
	const [maxNumber, setMaxNumber] = useState<number>(0)
	const [startNumber, setStartNumber] = useState<number>(0);
	const [correctValue, setCorrectValue] = useState<boolean>(true)
	const[showCounter, setShowCounter] = useState<boolean>(true)
	const[disabled, setDisabled]= useState(true)
	return(
		<div className={classes.counter}>
			<CounterNumber maxNumber={maxNumber} correctValue={correctValue} showCounter={showCounter} number={number}/>
			<div className={classes.btnWrapper}>
				<Button onClickHandler={()=>0}  title={'INC'} disabledCondition={maxNumber} number={number}/>
				<Button onClickHandler={action('Value narrow till 0')} title={'RESET'} disabledCondition={startNumber} number={number}/>
			</div>
		</div>
	)
}
export const CounterModeChanging = () => <Counter/>