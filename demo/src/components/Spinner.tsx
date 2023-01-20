const Spinner = () => {
    return (
        <div className="mx-auto flex flex-col items-center justify-center my-12">
            <h1>Spinner</h1>
            <span className="spinner" />
            <div className="flex flex-wrap space-x-2 mt-2">
                <span className="spinner spinner-slate" />
                <span className="spinner spinner-gray" />
                <span className="spinner spinner-red" />
                <span className="spinner spinner-yellow" />
                <span className="spinner spinner-lime" />
                <span className="spinner spinner-emerald spinner-xl" />
                <span className="spinner spinner-purple spinner-lg" />
                <span className="spinner spinner-rose" />
                <span className="spinner spinner-fuchsia spinner-sm" />
                <span className="spinner spinner-cyan spinner-xs" />
            </div>
        </div>
    )
}

export default Spinner