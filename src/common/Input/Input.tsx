import React, {ChangeEvent} from "react";
import classes from "../../components/SetCounter/CounterValue/CounterValue.module.css";

type PropsType = {
	value: string
	positiveValue: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: PropsType) => {

	return (
		<div>
			{props.value}: <input onChange={props.onChange}
														className={!props.positiveValue ?
															`${classes.error} ${classes.valueInput}` : classes.valueInput}
														type="number"/>
		</div>
	)
}