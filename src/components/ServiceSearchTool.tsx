import type { Dispatch, SetStateAction } from "react";

interface Props {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>
}

export function ServiceSearchTool({query, setQuery}: Readonly<Props>) {
    return (
        <div>
            <label className="input" htmlFor="search">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" id="search" placeholder="Busqueda" value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>
        </div>
    )
}