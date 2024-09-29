import { useState } from "react";

const Search = ({ setNameSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setNameSearch(searchValue);
    };

    const handleClear = () => {
        setSearchValue("");
        setNameSearch(""); // Clear the search filter as well
    };

    return (
        <form onSubmit={handleSearch} className="flex flex-col relative">
            <label htmlFor="searchInput" className="font-bold">
                Search:
            </label>
            <div className="flex items-center">
                <input
                    id="searchInput"
                    type="text"
                    className="rounded-md bg-neutral-600 py-1 px-2 sm:w-3/4 transition duration-200 focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Search for name"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="ml-2 p-1 rounded-md bg-red-600 hover:bg-red-500 transition duration-200 text-white"
                    >
                        X
                    </button>
                )}
                <button
                    type="submit"
                    className="ml-2 p-1 rounded-md bg-blue-600 hover:bg-blue-500 transition duration-200 text-white"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default Search;
