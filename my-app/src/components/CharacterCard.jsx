const CharacterCard = ({ charData }) => {
    const { image, name, gender, status, species } = charData;

    return (
        <div className="relative p-4 bg-neutral-800 rounded-md shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-neutral-700">
            <img className="rounded-md w-full h-64 object-cover" src={image} alt={`Image of ${name}`} />
            <h2 className="mt-2 text-lg font-semibold text-white">{name}</h2>
            <p className="text-sm text-gray-300">Gender: <span className="font-medium text-white">{gender}</span></p>
            <p className="text-sm text-gray-300">Species: <span className="font-medium text-white">{species}</span></p>
            <p className="text-sm text-gray-300">Status: <span className="font-medium text-white">{status}</span></p>
        </div>
    );
};

export default CharacterCard;
