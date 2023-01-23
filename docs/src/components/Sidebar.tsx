import type { FC, HTMLAttributes } from "react"
import clsx from "clsx"
import { useStore, currentComponent } from "../store"

const routes = [
    {
        name: "Getting Started",
        path: "getting-started"
    },
    {
        name: "App",
        path: "components/app"
    },
    {
        name: "Badge",
        path: "components/badge"
    },
    {
        name: "Button",
        path: "components/button"
    },
    {
        name: "Card",
        path: "components/card"
    },
    {
        name: "Divider",
        path: "components/divider"
    },
    {
        name: "Input",
        path: "components/input"
    },
    {
        name: "Kbd",
        path: "components/kbd"
    },
    {
        name: "Spinner",
        path: "components/spinner"
    },
    {
        name: "Switch",
        path: "components/switch"
    },
    {
        name: "Table",
        path: "components/table"
    },
    {
        name: "Tag",
        path: "components/tag"
    }
]

const Sidebar: FC<HTMLAttributes<HTMLElement>> = (props) => {

    const $currentComponent = useStore(currentComponent)

    return (
        <nav 
            className="h-full absolute left-0 flex flex-col"
            {...props}
        >
            {routes.map(route => (
                <a 
                    href={`/${route.path}`}
                    onClick={() => currentComponent.set(route.name)}
                    className={clsx("btn", {
                        "btn-orange": route.name === $currentComponent
                    })}
                >
                    {route.name}
                </a>
            ))}
            <h1>{$currentComponent}</h1>
        </nav>
    )
}

export default Sidebar