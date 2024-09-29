import { toUpperCaseStr } from "../utility/helpers";

const DropDown = ({ optionsObj, setSelectedValue }) => {
    const { filter, options } = optionsObj;

    const handleFilter = (e) => {
        let selectedOption = e.target.value;
        setSelectedValue(selectedOption === "All" ? "" : selectedOption);
    };

    return (
        <div className="flex flex-col">
            <label className="font-bold" htmlFor={`filterBy${filter}`}>
                {toUpperCaseStr(filter)}:
            </label>
            <select
                id={`filterBy${filter}`}
                className="rounded-md bg-neutral-600 py-1 px-2 sm:w-3/4"
                onChange={handleFilter}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;
