import * as React from "react";
import { cn } from "../../lib/utils"; 


import "./btn.css"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "btn position-relative overflow-hidden border-0 fw-bold text-white px-4 py-2 my-5",
          "",
          "className"
        )}
        {...props}
      >
        <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient"></span>
        {props.children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
