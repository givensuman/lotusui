import { FaAddressBook, FaDatabase, FaHandHolding } from "react-icons/fa"

export default function Button() {
    return (
        <div className="flex flex-col space-y-4">
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
            <button className="btn btn-sky">Click</button>
            <button className="btn btn-pink">Stuff</button>
            <button className="btn btn-amber">Here</button>
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
            <button className="btn btn-gray btn-outline">Gray</button>
            <button className="btn btn-zinc btn-outline">Zinc</button>
            <button className="btn btn-neutral btn-ghost">Neutral</button>
            <button className="btn btn-stone btn-ghost">Stone</button>
            <button className="btn btn-red">Red</button>
            <button className="btn btn-orange btn-ghost">Orange</button>
            <button className="btn btn-amber btn-ghost">Amber</button>
            <button className="btn btn-yellow btn-ghost">Yellow</button>
            <button className="btn btn-lime btn-ghost">Lime</button>
            <button className="btn btn-green btn-ghost">Green</button>
            <button className="btn btn-emerald btn-ghost">Emerald</button>
            <button className="btn btn-teal btn-outline">Teal</button>
            <button className="btn btn-cyan btn-outline">Cyan</button>
            <button className="btn btn-sky btn-outline">Sky</button>
            <button className="btn btn-blue btn-outline">Blue</button>
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