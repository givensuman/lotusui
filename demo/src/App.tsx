import { FaAddressBook, FaDatabase, FaHandHolding } from "react-icons/fa"

function App() {
  return (
    <div className="mx-auto flex flex-col items-center mt-12">
      <h1>
        Buttons
      </h1>
      <div className="flex">
        <button className="btn">Default</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-outline">Outline</button>
      </div>
      <h1>Static</h1>
      <div className="flex">
        <button className="btn btn-static">Static</button>
        <button className="btn btn-ghost btn-static">Static</button>
        <button className="btn btn-outline btn-static">Static</button>
      </div>
      <h1>
        Button Group
      </h1>
      <div className="btn-group">
        <button className="btn btn-green">The</button>
        <button className="btn btn-orange">U!</button>
      </div>
      <h1>Icon Button</h1>
      <div>
        <button className="btn btn-icon">
          <FaAddressBook />
        </button>
        <button className="btn btn-icon btn-ghost">
          <FaDatabase />
        </button>
        <button className="btn btn-icon btn-outline">
          <FaHandHolding />
        </button>
      </div>
      <h1>Size Variants</h1>
      <div className="flex">
        <button className="btn btn-xs">.btn-xs</button>
        <button className="btn btn-sm">.btn-sm</button>
        <button className="btn">Default</button>
        <button className="btn btn-lg">.btn-lg</button>
      </div>
      <h1>Color Variants</h1>
      <div className="flex flex-wrap">
        <button className="btn btn-slate">Slate</button>
        <button className="btn btn-gray">Gray</button>
        <button className="btn btn-zinc">Zinc</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-stone">Stone</button>
        <button className="btn btn-red">Red</button>
        <button className="btn btn-orange">Orange</button>
        <button className="btn btn-amber">Amber</button>
        <button className="btn btn-yellow">Yellow</button>
        <button className="btn btn-lime">Lime</button>
        <button className="btn btn-green">Green</button>
        <button className="btn btn-emerald">Emerald</button>
        <button className="btn btn-teal">Teal</button>
        <button className="btn btn-cyan">Cyan</button>
        <button className="btn btn-sky">Sky</button>
        <button className="btn btn-blue">Blue</button>
        <button className="btn btn-indigo">Indigo</button>
        <button className="btn btn-violet">Violet</button>
        <button className="btn btn-purple">Purple</button>
        <button className="btn btn-fuchsia">Fuchsia</button>
        <button className="btn btn-pink">Pink</button>
        <button className="btn btn-rose">Rose</button>
      </div>
      <h1>Kitchen Sink</h1>
      <div className="flex">
        <button className="btn btn-static bg-[#385398] text-white">Facebook</button>
      </div>
    </div>
  )
}

export default App
