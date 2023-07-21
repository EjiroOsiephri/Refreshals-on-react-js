import React from "react";
import Classes from "../../Sass/Movies.module.scss";

const MovieData = (props) => {
  return (
    <>
      {props?.movies?.map((item) => {
        return (
          <div className={Classes.movie} key={item.id}>
            <h2>{item.title}</h2>
            <h3>{item.openingText}</h3>
          </div>
        );
      })}
    </>
  );
};

export default MovieData;
