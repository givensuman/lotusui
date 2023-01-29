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
                    <input type="radio" className="radio radio-slate" />
                    <input type="radio" className="radio radio-gray" />
                    <input type="radio" className="radio radio-zinc" />
                    <input type="radio" className="radio radio-neutral" />
                    <input type="radio" className="radio radio-stone" />
                    <input type="radio" className="radio radio-red" />
                    <input type="radio" className="radio radio-orange" />
                    <input type="radio" className="radio radio-amber" />
                    <input type="radio" className="radio radio-yellow" />
                    <input type="radio" className="radio radio-lime" />
                    <input type="radio" className="radio radio-green" />
                    <input type="radio" className="radio radio-emerald" />
                    <input type="radio" className="radio radio-teal" />
                    <input type="radio" className="radio radio-cyan" />
                    <input type="radio" className="radio radio-sky" />
                    <input type="radio" className="radio radio-blue" />
                    <input type="radio" className="radio radio-indigo" />
                    <input type="radio" className="radio radio-violet" />
                    <input type="radio" className="radio radio-purple" />
                    <input type="radio" className="radio radio-fuchsia" />
                    <input type="radio" className="radio radio-pink" />
                    <input type="radio" className="radio radio-rose" />
                </div>
            </div>
            <div>
                <h1>Size Variants</h1>
                <div className="flex space-x-2">
                    <input type="radio" className="radio radio-sm" />
                    <input type="radio" className="radio" />
                    <input type="radio" className="radio radio-lg" />
                </div>
            </div>
            <div>
                <h1>Disabled Radio</h1>
                <input type="radio" className="radio" disabled />
            </div>
        </div>
    )
}