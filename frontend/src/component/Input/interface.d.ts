// style type
export type InputType = "typing" | "completed" | "warning" | "help" | "disabled"

export interface ITitleWrapProps {
    type?: InputType
    isShown: boolean
}

export interface IInputWrap {
    type?: InputType
}

export interface IShowButtonProps {
    type?: InputType
    isShown: boolean
}

export interface IHelperWrapProps {
    type?: InputType
    isShown: boolean
}

// component
export interface IInputProps {
    type?: InputType
    title?: string
    placeHolder: string
    isVisibleHelperButton?: boolean
    isVisibleShowButton?: boolean
    helperText?: string
    registerProps: UseFormRegisterReturn<string>
}
