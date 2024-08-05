import "./App.css";
import "./index.css";
import PointsCard from "./components/PointsCard";
import ChoreTable from "./components/ChoreTable";

function App() {
  return (
    <>
      <div className="flex flex-col space-y-4 my-4 mx-6">
        <ChoreTable />
      </div>
    </>
  );
}

export default App;
