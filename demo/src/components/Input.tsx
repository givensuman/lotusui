const Input = () => {
    return (
        <div className="mx-auto flex flex-col ml-12 mr-12 mt-12 space-y-4 items-start">

            <input
                className="input input-xs"
                placeholder="This is an input"
            />
            <input
                className="input input-sm"
                placeholder="This is an input"
            />            
            <input
                className="input"
                placeholder="This is an input"
            />
            <input
                className="input input-lg"
                placeholder="This is an input"
                type="datetime-local"
            />
            <input
                className="input input-filled input-lg"
                placeholder="This is an input"
            />
            <input
                className="input input-flushed"
                placeholder="This is an input"
            />
            <input
                className="input input-unstyled"
                placeholder="This is an input"
            />
        </div>
    )
}

export default Input