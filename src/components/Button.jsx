import { forwardRef } from "react"

export const Button = forwardRef(function Button (props, ref) {
    return (
        <input type="color" ref={ref} ></input>
    )
}) 