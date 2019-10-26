import React from "react";
import Header from "../../components/Header";
import SpecificImage from "../../components/SpecificImage";
import { dataStorage } from "../../utils";

const Collections = () => {
  return (
    <div className="flex w-10/12 flex-col justify-center items-center mt-10 mx-auto">
      <Header />
      <div className="flex flex-col w-full">
        <h4 className="text-center text-sm text-gray-800">
          Please do not refresh this page or you might lose all your saved
          collections
        </h4>
        <div className="w-full flex flex-wrap items-center justify-center mt-10 overflow-auto">
          <br />

          {dataStorage.length > 1 &&
            dataStorage.map(picture => {
              return (
                <SpecificImage
                  img={picture.image}
                  key={picture.id}
                  tag={picture.tags}
                  views={picture.views}
                  likes={picture.likes}
                  owner={picture.owner}
                />
              );
            })}

          {!dataStorage.length && (
            <div className="bg-blue-300 p-4 rounded">
              You currently do not have any favourite images in your collection
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
