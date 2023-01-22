const Switch = () => {
    return (
        <div className="flex">
            <input
                type="checkbox"
                className="switch switch-sm"
                disabled
            />
                        <input
                type="checkbox"
                className="switch switch-teal"
            />
                        <input
                type="checkbox"
                className="switch switch-yellow switch-lg"
            />
                        <input
                type="checkbox"
                className="switch switch-emerald"
            />
                        <input
                type="checkbox"
                className="switch switch-fuchsia"
            />
        </div>
    )
}

export default Switch