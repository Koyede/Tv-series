import React from "react";
import loaderSrc from "../../src/gif/loading-arrow.gif";

const loader = props => (
  <div>
    <img style={{ width: 75 }} alt="Loader icon" src={loaderSrc} />
  </div>
);
export default loader;
