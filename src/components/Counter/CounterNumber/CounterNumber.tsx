import React from "react";
import classes from "./CounterNumber.module.css";
import {useSelector} from "react-redux";
import {AppRootState} from "../../state/store";

type PropsType = {
	number: number
}

export const CounterNumber = (props: PropsType) => {

	const maxNumber = useSelector<AppRootState, number>(state => state.counter.maxNumber)
	const correctValue = useSelector<AppRootState, boolean>(state => state.counter.correctValue)
	const showCounter = useSelector<AppRootState, boolean>(state => state.counter.showCounter)

	return (
		<div className={classes.counterNumber}>
			{
				showCounter &&
        <div
          className={props.number === maxNumber && maxNumber !== 0 ? `${classes.number} ${classes.maxValue}` : classes.number}>
					{props.number}
        </div>
			}
			{
				!showCounter && <div>
					{
						!correctValue ?
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