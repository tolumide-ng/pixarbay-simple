import React from "react";
import { withRouter } from "react-router-dom";
import { dataStorage } from "../../utils";

const handleMe = e => {
  const { id, img, image, likes, tag, views, owner } = e.target.dataset;

  let present = dataStorage.find(data => data.id === id);

  if (present) {
    return;
  }
  dataStorage.push({ id, img, image, likes, tag, views, owner });
};

const SpecificImage = ({
  img,
  tag,
  views,
  likes,
  owner,
  id,
  image,
  history,
}) => {
  return (
    <div className="w-9/12 md:w-2/5 mr-1 lg:w-3/12 bg-gray-300 hover:bg-gray-400 image-container mb-6  flex flex-col transition-bg transition-500 transition-ease">
      <figure className="w-full hover:h-screen">
        <img
          src={img}
          alt={tag}
          className="object-cover h-56 w-full mx-auto md:w-full"
        />
        <figcaption className="text-sm flex flex-col mx-4 justify-end mt-2">
          <div className="flex flex-row justify-between w-full">
            <p>By: {owner}</p>
            <p
              id={id}
              data-image={image}
              data-tag={tag}
              data-img={img}
              data-likes={likes}
              data-views={views}
              data-owner={owner}
              data-id={id}
              className={`${
                history.location.pathname === "/collections"
                  ? "bg-transparent"
                  : "bg-blue-200 px-2 py-1 rounded cursor-pointer hover:bg-blue-400 hover:text-white shadow-md"
              }`}
              onClick={handleMe}
            >
              {history.location.pathname === "/collections"
                ? `views: ${views}`
                : "Like"}
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default withRouter(SpecificImage);
