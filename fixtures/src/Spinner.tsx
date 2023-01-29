export default function Spinner() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="space-x-2 space-y-2">
                <span className="spinner is-slate" />
                <span className="spinner is-gray" />
                <span className="spinner is-zinc" />
                <span className="spinner is-neutral" />
                <span className="spinner is-stone" />
                <span className="spinner is-red" />
                <span className="spinner is-orange" />
                <span className="spinner is-amber" />
                <span className="spinner is-yellow" />
                <span className="spinner is-lime" />
                <span className="spinner is-green" />
                <span className="spinner is-emerald" />
                <span className="spinner is-teal" />
                <span className="spinner is-cyan" />
                <span className="spinner is-sky" />
                <span className="spinner is-blue" />
                <span className="spinner is-indigo" />
                <span className="spinner is-violet" />
                <span className="spinner is-purple" />
                <span className="spinner is-fuchsia" />
                <span className="spinner is-pink" />
                <span className="spinner is-rose" />
            </div>
            <div>
                <h1>Size Variants</h1>
                <div className="space-x-4">
                    <span className="spinner is-xs" />
                    <span className="spinner is-sm" />
                    <span className="spinner" />
                    <span className="spinner is-lg" />
                    <span className="spinner is-xl" />
                </div>
            </div>
        </div>
    )
}