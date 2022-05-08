import { TextField } from "@mui/material"
import { InputProps } from "@mui/material/Input"
import React from "react"
import InputMask, { Props as InputMaskProps } from 'react-input-mask'

export type FieldMaskProps = InputProps &
  InputMaskProps & {
    name: string
    label?: string
  }

const FieldMaskBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FieldMaskProps
> = ({
  name,
  label,
  ...rest
}: FieldMaskProps, ref): JSX.Element => {
  return (
    <InputMask
      {...rest}
    >
      {() => <TextField name={name} label={label} fullWidth />}
    </InputMask>
  )
}

export const FieldMask = React.forwardRef(FieldMaskBase)
