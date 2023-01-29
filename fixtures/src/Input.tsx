export default function Input() {
    return (
        <div className="flex flex-col space-y-4">
            <input 
                className="input" 
                placeholder="Hi mom"
            />
            <div>
                <h1>Size Variants</h1>
                <div className="space-y-2">
                    <input 
                        className="input is-xs" 
                        placeholder="Hi mom"
                    />
                    <input 
                        className="input is-sm" 
                        placeholder="Hi mom"
                    />
                    <input 
                        className="input" 
                        placeholder="Hi mom"
                    />
                    <input 
                        className="input is-lg" 
                        placeholder="Hi mom"
                    />
                </div>
            </div>
            <div>
                <h1>Style Variants</h1>
                <div className="space-y-2">
                    <input 
                        className="input" 
                        placeholder="Hi mom"
                    />
                    <input 
                        className="input is-filled" 
                        placeholder="is-filled"
                    />
                    <input 
                        className="input is-flushed" 
                        placeholder="is-flushed"
                    />
                    <input
                        className="input is-unstyled"
                        placeholder="is-unstyled"
                    />
                </div>
            </div>
        </div>
    )
}