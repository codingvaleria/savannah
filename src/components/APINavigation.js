import { NavLink } from "react-router-dom";

const APINavigation = ({ apiName }) => {
  return (
    <div className="APINavigation">
      <NavLink to={`/${apiName}/reference`}>Reference</NavLink>
      <NavLink to={`/${apiName}/tutorial`}>Tutorial</NavLink>
    </div>
  );
};

export default APINavigation;
