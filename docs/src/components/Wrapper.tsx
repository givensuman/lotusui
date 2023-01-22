import { useEffect } from "react"
import type { FC, HTMLAttributes } from "react"
import clsx from "clsx"
import { useStore } from "@nanostores/react"
import { isDarkMode } from "../store"

const Wrapper: FC<HTMLAttributes<HTMLDivElement>> = (props) => {

    const $isDarkMode = useStore(isDarkMode)

    useEffect(() => {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches 
            ? "dark"
            : "light"

        switch (systemTheme) {
            case "dark":
                isDarkMode.set(true)
            case "light":
                isDarkMode.set(false)
            default:
                isDarkMode.set(true)
        }
    }, [])

    return (
        <div className={clsx({
            "dark": $isDarkMode
        })}>
            <div
                className="app relative"
                {...props}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper