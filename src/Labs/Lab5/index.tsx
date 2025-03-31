import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import Calculator from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpClient";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div><hr />
      <EnvironmentVariables />
      <PathParameters/>
      <Calculator />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArraysAsynchronously/>
    </div>

  );
}

  