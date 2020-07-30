import React from "react";
import classes from "./Button.module.css";

type PropsType = {
	startNumber?: number
	onClickHandler: () => void
	title: string
	disabledCondition?: number
	number?: number
}

export const Button = (props: PropsType) => {
	return (
		<div className={classes.wrapper}>
			<button disabled={props.number === props.disabledCondition}
							className={classes.btn}
							onClick={(e) => props.onClickHandler()}>{props.title}
			</button>
		</div>
	)
}