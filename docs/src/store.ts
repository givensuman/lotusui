import { atom } from "nanostores"
export { useStore } from "@nanostores/react"

export const isDarkMode = atom(true)

export const currentComponent = atom<string | undefined>()