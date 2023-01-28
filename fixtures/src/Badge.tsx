export default function Badge() {
    return (
        <div className="flex flex-col space-y-4">
            <div>
                <h1>Default</h1>
                <span className="badge">Hi Mom</span>
            </div>
            <div>
                <h1>Color Variants</h1>
                <div className="flex space-x-2 space-y-2 flex-wrap">
                    <span className="badge is-slate">Hi Mom</span>
                    <span className="badge is-gray">Hi Mom</span>
                    <span className="badge is-zinc">Hi Mom</span>
                    <span className="badge is-neutral">Hi Mom</span>
                    <span className="badge is-stone">Hi Mom</span>
                    <span className="badge is-red">Hi Mom</span>
                    <span className="badge is-orange">Hi Mom</span>
                    <span className="badge is-amber">Hi Mom</span>
                    <span className="badge is-yellow">Hi Mom</span>
                    <span className="badge is-lime">Hi Mom</span>
                    <span className="badge is-green">Hi Mom</span>
                    <span className="badge is-emerald" >Hi Mom</span>
                    <span className="badge is-teal">Hi Mom</span>
                    <span className="badge is-cyan">Hi Mom</span>
                    <span className="badge is-sky">Hi Mom</span>
                    <span className="badge is-blue">Hi Mom</span>
                    <span className="badge is-indigo">Hi Mom</span>
                    <span className="badge is-violet">Hi Mom</span>
                    <span className="badge is-purple">Hi Mom</span>
                    <span className="badge is-fuchsia" >Hi Mom</span>
                    <span className="badge is-pink">Hi Mom</span>
                    <span className="badge is-rose">Hi Mom</span>
                </div>
            </div> 
        </div>
    )
}