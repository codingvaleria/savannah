import "rapidoc";
import specs from "../spec";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import APINavigation from "./APINavigation";

function APITutorial() {
  const { apiName } = useParams();
  const spec = specs.find((s) => s.apiName === apiName);

  return (
    <>
      <APINavigation apiName={apiName} />
      <div className="TutorialContainer">
        <Markdown>{spec.tutorialMarkdown}</Markdown>
      </div>
    </>
  );
}

export default APITutorial;
