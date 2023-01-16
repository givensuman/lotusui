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
        </div>
    )
}

export default Badge