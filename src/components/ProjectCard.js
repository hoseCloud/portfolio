import { PropTypes } from "prop-types";

const ProjectCard = ({ title, description, skills, imgUrl, projectUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mx-4 my-2 md:mx-0 w-96">
      <img
        className="w-96 h-64 object-cover object-center"
        src={imgUrl}
        alt={title}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex justify-end items-center p-4">
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="text-green-500 hover:text-green-700 flex items-center"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.element.isRequired,
  imgUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
