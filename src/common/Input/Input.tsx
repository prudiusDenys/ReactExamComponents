import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";

type PropsType = {
	value: string
	valueNumber: number
	positiveValue: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: PropsType) => {
	return (
		<div>
			{props.value}: <TextField style={{marginBottom: '20px'}}
																value={props.valueNumber}
																onChange={props.onChange}
																error={!props.positiveValue}
																helperText={!props.positiveValue ? 'incorrect value' : ''}
																type="number"
																variant={"outlined"}/>
		</div>
	)
}