import React, { memo } from "react";

const Header = ({ content }) => {
  console.log("head rendered");
  return <h1>{content}</h1>;
};

export default memo(Header); 
//pure components because state or props is not change 
// (memo looks if props or state change if does not change it does ot rerender component)
