import { forwardRef } from "react";

export const Button = forwardRef((props, ref) => {
    return (
        <input ref={ref} type="color" />
    );
});
