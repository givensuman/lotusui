import type { FC, HTMLAttributes } from "react"
import { useStore } from "@nanostores/react"
import { isDarkMode } from "../store"
import { HiSun, HiMoon } from "react-icons/hi"
import { FaGithub } from "react-icons/fa"

const Navbar: FC<HTMLAttributes<HTMLDivElement>> = (props) => {

    const $isDarkMode = useStore(isDarkMode)

    return (
        <div className="w-full flex items-center justify-end space-x-4 py-2 px-4">
            <div className="mr-auto flex items-center">
                <img 
                    className="max-h-12"
                    src="logo.png"
                    alt="lotusui logo"
                />
                <h1 className="text-3xl font-bold ml-2">
                    lotusui
                </h1>
            </div>
            <button
                className="btn btn-icon btn-ghost btn-lg"
                onClick={() => isDarkMode.set(!$isDarkMode)}
            >
                {$isDarkMode 
                ? <HiSun />
                : <HiMoon />}
            </button>
            <a
                href="https://www.github.com/givensuman/lotusui"
                className="btn btn-icon btn-ghost btn-lg"
            >
                <FaGithub />
            </a>
            {props.children}
        </div>
    )
}

export default Navbar