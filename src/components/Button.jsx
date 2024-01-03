import { forwardRef } from "react";

export const Button = forwardRef(function Button(props, ref) {
    return <input ref={ref} type="color" />
});
