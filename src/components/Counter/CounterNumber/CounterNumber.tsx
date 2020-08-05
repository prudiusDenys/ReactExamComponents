import React from "react";
import classes from "./CounterNumber.module.css";

type PropsType = {
	maxNumber: number
	correctValue: boolean
	showCounter: boolean
	number: number
}

export const CounterNumber = (props: PropsType) => {
	return (
		<div className={classes.counterNumber}>
			{
				props.showCounter &&
        <div className={props.number === props.maxNumber ? `${classes.number} ${classes.maxValue}` : classes.number}>
					{props.number}
        </div>
			}
			{
				!props.showCounter && <div>
					{
						!props.correctValue ?
							<div className={classes.enterValues}>
								enter values and press 'set'
							</div> :
							<div className={classes.errorValue}>
								Incorrect value!
							</div>
					}
        </div>
			}
		</div>
	)
}