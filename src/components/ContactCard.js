import { PropTypes } from "prop-types";

function ContactCard({ where, image, name, url }) {
  return (
    <div className="flex items-center bg-white rounded-md shadow-md p-6">
      <img
        src={image}
        alt={`${where} profile`}
        className="w-20 h-20 rounded-full"
      />
      <div className="ml-6">
        <h2 className="text-gray-800 font-bold text-xl mb-2">{name}</h2>
        <div className="mt-4">
          <a
            href={url}
            className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Visit {where}
          </a>
        </div>
      </div>
    </div>
  );
}

ContactCard.prototype = {
  where: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export { ContactCard };

function ContactCopyCard({ where, image, name, text }) {
  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  return (
    <div className="flex items-center bg-white rounded-md shadow-md p-6">
      <img
        src={image}
        alt={`${where} profile`}
        className="w-20 h-20 rounded-full"
      />
      <div className="ml-6">
        <h2 className="text-gray-800 font-bold text-xl mb-2">{name}</h2>
        <div className="mt-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
            onClick={handleClick}
          >
            Copy {where} Email
          </button>
        </div>
      </div>
    </div>
  );
}

ContactCopyCard.prototype = {
  where: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export { ContactCopyCard };
