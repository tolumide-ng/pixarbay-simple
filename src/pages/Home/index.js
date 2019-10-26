/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { searchAction } from "../../store/actions/search";
import SpecificImage from "../../components/SpecificImage";
import "./index.css";

const Home = ({ fetchSearch, status, result, error }) => {
  useEffect(() => {
    fetchSearch({ searchQuery: undefined });
  }, []);

  return (
    <div className="flex w-10/12 flex-col justify-center items-center mt-10 mx-auto">
      <Header />
      <div className="flex flex-col w-full">
        <h4 className="text-center text-sm text-gray-800">
          Please do not refresh this page or you might lose all your saved
          collections
        </h4>
        <div className="w-full flex flex-wrap items-center justify-center mt-10 overflow-auto">
          {status === "pending" && <div> L O A D I N G . . . </div>}
          {status === "success" && result.length < 1 && (
            <div className="tracking-wide">
              We do not have any result for this search
            </div>
          )}
          {status === "success" &&
            result.map(picture => {
              return (
                <SpecificImage
                  key={picture.id}
                  img={picture.largeImageURL}
                  tag={picture.tags}
                  views={picture.views}
                  likes={picture.likes}
                  owner={picture.user}
                  id={picture.id}
                  image={picture.largeImageURL}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    status: state.searchReducer.searchStatus,
    result: state.searchReducer.searchResult,
    error: state.searchReducer.searchResult,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: ({ searchQuery }) => dispatch(searchAction({ searchQuery })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
