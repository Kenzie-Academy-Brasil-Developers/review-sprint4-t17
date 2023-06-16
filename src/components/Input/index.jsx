import { forwardRef } from "react";

export const Input = forwardRef(({ error, ...rest }, ref) => {
   return (
      <div>
         <input ref={ref} {...rest} />
         {error ? <p>{error.message}</p> : null}
      </div>
   );
});