import { forwardRef } from "react"

export const Select = forwardRef(({children, error,...rest}, ref) => {
    return(
        <div>
            <select ref={ref} {...rest}>
                {children}
            </select>
            {error ? <p>{error.message}</p> : null}
         </div>
    )
})