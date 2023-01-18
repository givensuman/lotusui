import React from "react"
import clsx from "clsx"

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  apply?: string
}> = ({
  className,
  apply,
  ...props
}) => (
  <button 
    {...props}
    className={clsx("btn", className, apply)}
  >
    Hi Mom
  </button>
)

export default {
  "Button Variants": () => (<>
    <Button />
    <Button apply="ghost" />
    <Button apply="outline" />
  </>)
};
