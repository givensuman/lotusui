import { useState } from "react"
import clsx from "clsx"

import Button from "./components/Button"
import Card from "./components/Card"
import Badge from "./components/Badge"
import Tag from "./components/Tag"
import Spinner from "./components/Spinner"
import Kbd from "./components/Kbd"
import Table from "./components/Table"

function App() {

  const [ isDarkMode, setIsDarkMode ] = useState(false)
  const toggleDarkMode = () => setIsDarkMode(state => !state)

  return (
    <div className={clsx({
      "dark": isDarkMode
    })}>
    <div className="app pb-12">
      <button
        onClick={toggleDarkMode}
        className="btn"
      >
        Toggle Dark Mode
      </button>
      <Kbd />
      <Badge />
      <Card />
      <Button />
      <Tag />
      <Spinner />
      <Table />
    </div>
    </div>
  )
}

export default App
