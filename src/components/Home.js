import specs from "../spec";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home" className="HomeContainer">
      <h2>Exploring Use Cases for Unsplash and Rick & Morty APIs </h2>
      <p>
        Welcome to this Developer Documentation which documents howw the
        Unsplash and Rick & Morty APIs UseCases for Developers and Business
        Owners
      </p>
      <p>
        The Tools,Packages, Libraries and Frameworks used in these
        implementation are:
        <p> </p>
        <li>RapiDoc : To document the UnSplash Rest API </li>
        <li>React Library: To display components and UI of this app</li>
        <li></li>
      </p>
      <h3>Another header</h3>

      <div className="buttons">
        <button>
          <Link to="/rick-and-morty-graphql/reference">
            Rick and Morty GraphQL API/
          </Link>
        </button>
        <button>
          <Link to="/rick-and-morty/reference">Rick and Morty REST API</Link>
        </button>
        <button>
          <Link to="/unsplash/reference">Unsplash REST API</Link>
        </button>
      </div>

      {/* <div className="HomeWrapper">
        {specs.map((spec) => (
          <div key={spec.apiName} className="Card">
            <h3>{spec.name}</h3>
            <p>Description of Rick And Morty API</p>
            <Link to={`/${spec.apiName}/tutorial`}>Tutorial</Link>
            <Link to={`/${spec.apiName}/reference`}>API Reference</Link>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
