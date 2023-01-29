import { FaAddressBook, FaDatabase, FaHandHolding } from "react-icons/fa"

export default function Button() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex">
                <button className="btn">Default</button>
                <button className="btn is-ghost">Ghost</button>
                <button className="btn is-outline">Outline</button>
            </div>
            <h1>.is-loading</h1>
            <button className="btn is-loading">Loading</button>
            <h1>Static</h1>
            <div className="flex">
            <button className="btn is-static">Static</button>
            <button className="btn is-ghost is-static">Static</button>
            <button className="btn is-outline is-static">Static</button>
            </div>
            <h1>
            Button Group
            </h1>
            <div className="btn-group">
            <button className="btn is-sky">Click</button>
            <button className="btn is-pink">Stuff</button>
            <button className="btn is-amber">Here</button>
            </div>
            <h1>Icon Button</h1>
            <div>
            <button className="icon-btn">
                <FaAddressBook />
            </button>
            <button className="icon-btn is-ghost">
                <FaDatabase />
            </button>
            <button className="icon-btn is-outline">
                <FaHandHolding />
            </button>
            </div>
            <h1>Size Variants</h1>
            <div className="flex space-x-4">
            <button className="btn is-xs">.is-xs</button>
            <button className="btn is-small">.is-sm</button>
            <button className="btn">Default</button>
            <button className="btn is-lg">.is-lg</button>
            </div>
            <h1>Color Variants</h1>
            <div className="space-x-2 space-y-2">
                <button className="btn is-slate">Slate</button>
                <button className="btn is-gray">Gray</button>
                <button className="btn is-zinc">Zinc</button>
                <button className="btn is-neutral">Neutral</button>
                <button className="btn is-stone">Stone</button>
                <button className="btn is-red">Red</button>
                <button className="btn is-orange">Orange</button>
                <button className="btn is-amber">Amber</button>
                <button className="btn is-yellow">Yellow</button>
                <button className="btn is-lime">Lime</button>
                <button className="btn is-green">Green</button>
                <button className="btn is-emerald">Emerald</button>
                <button className="btn is-teal">Teal</button>
                <button className="btn is-cyan">Cyan</button>
                <button className="btn is-sky">Sky</button>
                <button className="btn is-blue">Blue</button>
                <button className="btn is-indigo">Indigo</button>
                <button className="btn is-violet">Violet</button>
                <button className="btn is-purple">Purple</button>
                <button className="btn is-fuchsia">Fuchsia</button>
                <button className="btn is-pink">Pink</button>
                <button className="btn is-rose">Rose</button>
            </div>
            <div className="space-x-2 space-y-2">
                <button className="btn is-outline is-slate">Slate</button>
                <button className="btn is-outline is-gray">Gray</button>
                <button className="btn is-outline is-zinc">Zinc</button>
                <button className="btn is-outline is-neutral">Neutral</button>
                <button className="btn is-outline is-stone">Stone</button>
                <button className="btn is-outline is-red">Red</button>
                <button className="btn is-outline is-orange">Orange</button>
                <button className="btn is-outline is-amber">Amber</button>
                <button className="btn is-outline is-yellow">Yellow</button>
                <button className="btn is-outline is-lime">Lime</button>
                <button className="btn is-outline is-green">Green</button>
                <button className="btn is-outline is-emerald">Emerald</button>
                <button className="btn is-outline is-teal">Teal</button>
                <button className="btn is-outline is-cyan">Cyan</button>
                <button className="btn is-outline is-sky">Sky</button>
                <button className="btn is-outline is-blue">Blue</button>
                <button className="btn is-outline is-indigo">Indigo</button>
                <button className="btn is-outline is-violet">Violet</button>
                <button className="btn is-outline is-purple">Purple</button>
                <button className="btn is-outline is-fuchsia">Fuchsia</button>
                <button className="btn is-outline btnis-pink">Pink</button>
                <button className="btn is-outline is-rose">Rose</button>
            </div>
            <div className="space-x-2 space-y-2">
                <button className="btn is-ghost is-slate">Slate</button>
                <button className="btn is-ghost is-gray">Gray</button>
                <button className="btn is-ghost is-zinc">Zinc</button>
                <button className="btn is-ghost is-neutral">Neutral</button>
                <button className="btn is-ghost is-stone">Stone</button>
                <button className="btn is-ghost is-red">Red</button>
                <button className="btn is-ghost is-orange">Orange</button>
                <button className="btn is-ghost is-amber">Amber</button>
                <button className="btn is-ghost is-yellow">Yellow</button>
                <button className="btn is-ghost is-lime">Lime</button>
                <button className="btn is-ghost is-green">Green</button>
                <button className="btn is-ghost is-emerald">Emerald</button>
                <button className="btn is-ghost is-teal">Teal</button>
                <button className="btn is-ghost is-cyan">Cyan</button>
                <button className="btn is-ghost is-sky">Sky</button>
                <button className="btn is-ghost is-blue">Blue</button>
                <button className="btn is-ghost is-indigo">Indigo</button>
                <button className="btn is-ghost is-violet">Violet</button>
                <button className="btn is-ghost is-purple">Purple</button>
                <button className="btn is-ghost is-fuchsia">Fuchsia</button>
                <button className="btn is-ghost is-pink">Pink</button>
                <button className="btn is-ghost is-rose">Rose</button>
            </div>
            <h1>Kitchen Sink</h1>
            <div className="flex">
            <button className="btn is-static bg-[#385398] text-white">Facebook</button>
            </div>
        </div>
    )
}