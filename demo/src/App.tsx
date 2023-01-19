import { useState } from "react"
import clsx from "clsx"

import Button from "./components/Button"
import Card from "./components/Card"
import Badge from "./components/Badge"

function App() {

  const [ isDarkMode, setIsDarkMode ] = useState(true)
  const toggleDarkMode = () => setIsDarkMode(state => !state)

  return (
    <div className={clsx({
      "dark": isDarkMode
    })}>
    <div className="app dark:text-white">
      <button
        onClick={toggleDarkMode}
        className="btn"
      >
        Toggle Dark Mode
      </button>
      <Badge />
      <Card />
      <Button />
    </div>
    </div>
  )
}

export default App
