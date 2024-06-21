import "rapidoc";
import specs from "../spec";
import { useParams } from "react-router-dom";
import APINavigation from "./APINavigation";
import RickAndMortyGraphQL from "./GraphQL";

function APIDocumentation() {
  const { apiName } = useParams();
  const spec = specs.find((s) => s.apiName === apiName);

  return (
    <>
      <APINavigation apiName={apiName} />
      {
        spec.apiName === 'rick-and-morty-graphql' ?
          <RickAndMortyGraphQL />
        :
          <rapi-doc
            spec-url={spec.specPath}
            render-style="read"
            layout="row"
            show-header={false}
            style={{ height: "100vh", width: "100%" }}
            allow-try={spec.shouldAllowTry}
          ></rapi-doc>
      }
    </>
  );
}

export default APIDocumentation;
