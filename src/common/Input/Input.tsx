import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";

type PropsType = {
	label: string
	positiveValue: boolean
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: PropsType) => {

	return (
		<div>
			<TextField style={{marginBottom: '20px'}} onChange={props.onChange}
								 error={!props.positiveValue}
								 helperText={!props.positiveValue ? 'incorrect value': ''}
								 type="number"
								 variant={"outlined"}
								 label={props.label}/>
		</div>
	)
}