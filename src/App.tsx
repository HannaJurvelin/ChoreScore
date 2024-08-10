import "./App.css";
import "./index.css";
import ChoreTable from "./components/ChoreTable";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col space-y-4 my-4 mx-6">
          <ChoreTable />
        </div>
        <div>
          <Users />
        </div>
      </div>
    </div>
  );
}

export default App;
