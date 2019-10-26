import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { searchAction } from "../../store/actions/search";

const Header = ({ fetchSearch, history }) => {
  const [input, setInput] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    fetchSearch({ searchQuery: input });
  };
  if (history.location.pathname !== "/collections") {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <a href="https://pixabay.com/" className="mb-4 text-sm text-green-400">
          visit pixabay
        </a>

        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center justify-center mb-10"
        >
          <input
            type="text"
            value={input}
            className="border mr-4 w-1/3 py-1 rounded pl-2 shadow-md"
            onChange={e => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-300 px-2 py-1 rounded hover:text-white font-medium hover:bg-blue-500 shadow-md"
          >
            Submit
          </button>
        </form>
        <Link
          className="bg-green-300 px-3 py-1 hover:text-white rounded hover:bg-green-500 font-medium shadow-md"
          to="/collections"
        >
          View Likes
        </Link>
      </div>
    );
  }
  return (
    <div className="">
      <Link
        className="bg-blue-300 px-2 py-1 rounded hover:text-white font-medium hover:bg-blue-500 shadow-md"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: ({ searchQuery }) => dispatch(searchAction({ searchQuery })),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);
