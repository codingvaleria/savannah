import specs from "../spec";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="HomeContainer">
      <h2>Available APIs</h2>
      <div className="HomeWrapper">
        {specs.map((spec) => (
          <div key={spec.apiName} className="Card">
            <h3>{spec.name}</h3>
            <p>Description of Rick And Morty API</p>
            <Link to={`/${spec.apiName}/tutorial`}>Tutorial</Link>
            <Link to={`/${spec.apiName}/reference`}>API Reference</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
