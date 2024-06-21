import specs from "../spec";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home" className="HomeContainer">
      <h2>Exploring Use Cases for Unsplash and Rick & Morty APIs </h2>
      <p>
        Welcome to this Developer Documentation which documents how the Unsplash
        and Rick & Morty APIs UseCases for Developers and Business Owners.

        <p> Different UseCases for each of the APis have been included in the tutorial section of each of the APIs</p>
      
      </p>
      <p>
        The Tools, Packages, Libraries and Frameworks used in these
        implementation are: <br />
        <p></p>
        <li>
          <b>RapiDoc :</b> To document the UnSplash Rest API{" "}
        </li>
        <li>
          <b> React: </b>For Front-end developemnt
        </li>
        <li>
          <b> Vercel: </b>For deployment of this app{" "}
        </li>
      </p>
      
      <h3>Explore the APIs</h3>

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
