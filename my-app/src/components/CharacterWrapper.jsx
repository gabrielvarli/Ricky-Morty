import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";

const CharacterWrapper = ({ data, setPage, currentPage }) => {
    const numPages = data.info?.pages;

    return (
        <div>
            {data.results.length === 0 ? (
                <p className="my-2">Oops... No characters match your search</p>
            ) : (
                <>
                    <p className="text-center mb-4 text-sm md:text-base">
                        <span className="uppercase font-bold">Characters:</span>{" "}
                        {data.info.count}
                    </p>
                    {/* Use CSS Grid for the character display with 3 items per row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {data.results.map((char) => (
                            <div key={char.id}>
                                <CharacterCard charData={char} />
                            </div>
                        ))}
                    </div>
                    <Pagination
                        setPage={setPage}
                        numPages={numPages}
                        currentPage={currentPage}
                    />
                </>
            )}
        </div>
    );
};

export default CharacterWrapper;
