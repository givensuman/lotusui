const Badge = () => {
    return (
        <div className="mx-auto flex flex-col items-center justify-center">
            <div className="flex space-x-2">
                <span className="badge">
                    Default
                </span>
                <span className="badge badge-green">
                    Success
                </span>
                <span className="badge badge-red">
                    Removed
                </span>
                <span className="badge badge-purple">
                    New
                </span>
            </div>
            <div className="flex flex-row">
                <h1 className="text-lg mr-2">
                    lotusui
                    <span className="badge badge-teal relative bottom-1 left-1">
                        New
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default Badge