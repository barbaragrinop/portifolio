import cnames from "classnames";
import { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ children, className, ...props}: ContainerProps) {
    return (
        <div className={cnames("w-full max-w-6xl mx-auto px-4", className)} {...props}>
            {children}
        </div>
    )
}