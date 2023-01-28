// __previewjs__/Wrapper.tsx

import React, { useState } from 'react';
import clsx from "clsx"

import "./index.css";

export const Wrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {

    const [ isDarkMode, setIsDarkMode ] = useState(false)
    const toggleDarkMode = () => setIsDarkMode(state => !state)

    return (
        <div className={clsx("flex flex-col", {
            "dark": isDarkMode
        })}>
            <div className="app p-4">
                <div className="flex items-center p-2">
                    <input 
                        type="checkbox" 
                        className="switch"
                        onInput={toggleDarkMode}
                    />
                    <h1 className="ml-2 text-lg">
                        {isDarkMode 
                        ? "Turn on light mode" 
                        : "Turn on dark mode"
                        }
                    </h1>
                </div>
                <hr className="divider" />
                {children}
            </div>
        </div>
    )
};