export default function Radio() {
    return (
        <div className="flex flex-col space-y-4">
            <div>
                <h1>Default</h1>
                <input type="radio" className="radio" />
            </div>
            <div>
                <h1>Static</h1>
                <input type="radio" className="radio is-static" />
            </div>
            <div>
                <h1>Color Variants</h1>
                <div className="flex space-x-2">
                    <input type="radio" className="radio is-slate" />
                    <input type="radio" className="radio is-gray" />
                    <input type="radio" className="radio is-zinc" />
                    <input type="radio" className="radio is-neutral" />
                    <input type="radio" className="radio is-stone" />
                    <input type="radio" className="radio is-red" />
                    <input type="radio" className="radio is-orange" />
                    <input type="radio" className="radio is-amber" />
                    <input type="radio" className="radio is-yellow" />
                    <input type="radio" className="radio is-lime" />
                    <input type="radio" className="radio is-green" />
                    <input type="radio" className="radio is-emerald" />
                    <input type="radio" className="radio is-teal" />
                    <input type="radio" className="radio is-cyan" />
                    <input type="radio" className="radio is-sky" />
                    <input type="radio" className="radio is-blue" />
                    <input type="radio" className="radio is-indigo" />
                    <input type="radio" className="radio is-violet" />
                    <input type="radio" className="radio is-purple" />
                    <input type="radio" className="radio is-fuchsia" />
                    <input type="radio" className="radio is-pink" />
                    <input type="radio" className="radio is-rose" />
                </div>
            </div>
            <div>
                <h1>Size Variants</h1>
                <div className="flex space-x-2">
                    <input type="radio" className="radio is-sm" />
                    <input type="radio" className="radio" />
                    <input type="radio" className="radio is-lg" />
                </div>
            </div>
            <div>
                <h1>Disabled Radio</h1>
                <input type="radio" className="radio" disabled />
            </div>
        </div>
    )
}