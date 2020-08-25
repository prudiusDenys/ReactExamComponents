import React from "react";
import classes from "./Button.module.css";

type PropsType = {
	onClickHandler: () => void
	title: string
	disabledCondition?: number
	number?: number
	correctValue?: boolean
	disabled?: boolean
}

export const Button = (props: PropsType) => {
	debugger
	return (
		<div className={classes.wrapper}>
			<button disabled={ props.disabled || props.correctValue ||  props.number === props.disabledCondition}
							className={classes.btn}
							onClick={(e) => props.onClickHandler()}>{props.title}
			</button>
		</div>
	)
}