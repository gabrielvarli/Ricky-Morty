const Pagination = ({ setPage, numPages, currentPage }) => {
    const maxVisiblePages = 5;
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = currentPage - halfMaxVisiblePages;
    if (startPage < 1) startPage = 1;

    let endPage = startPage + maxVisiblePages - 1;
    if (endPage > numPages) {
        endPage = numPages;
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center mt-10 space-x-2">
            <button
                className={`p-2 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-neutral-700 hover:bg-neutral-600"} transition duration-200`}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            
            <ul className="flex items-center space-x-1">
                {startPage > 1 && (
                    <>
                        <li
                            className="p-2 rounded-md hover:bg-neutral-600 cursor-pointer"
                            onClick={() => setPage(1)}
                        >
                            1
                        </li>
                        {startPage > 2 && <li className="p-2">...</li>}
                    </>
                )}
                {pageNumbers.map((pageNumber) => (
                    <li
                        key={pageNumber}
                        className={`p-2 rounded-md hover:bg-neutral-600 cursor-pointer ${
                            currentPage === pageNumber ? "bg-neutral-600" : ""
                        }`}
                        onClick={() => setPage(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                ))}
                {endPage < numPages && (
                    <>
                        {endPage < numPages - 1 && <li className="p-2">...</li>}
                        <li
                            className="p-2 rounded-md hover:bg-neutral-600 cursor-pointer"
                            onClick={() => setPage(numPages)}
                        >
                            {numPages}
                        </li>
                    </>
                )}
            </ul>

            <button
                className={`p-2 rounded-md ${currentPage === numPages ? "opacity-50 cursor-not-allowed" : "bg-neutral-700 hover:bg-neutral-600"} transition duration-200`}
                onClick={() => setPage((prev) => Math.min(prev + 1, numPages))}
                disabled={currentPage === numPages}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
