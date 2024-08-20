import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { getChores } from "../supabase/getters";
import { useSelector } from "react-redux";
import { setPoints } from "../supabase/setters";

function ChoreTable() {
  const users = useSelector((state) => state.users.value);
  const [chores, setChores] = useState([]);

  useEffect(() => {
    async function fetchChores() {
      const Chores = await getChores();
      setChores(Chores);
    }
    fetchChores();
  }, []);

  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState([]);
  const [version, setVersion] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let totalPoints = 0;
    checked.map((task) => {
      totalPoints += chores[task].point_amount;
    });
    setScore(score + totalPoints);
    const activeUser = users.find((user) => user.active);
    setPoints(totalPoints, activeUser);
    setVersion(version + 1);
    setChecked([]);
  };

  const handleCheckbox = (index) => {
    const checkIndex = checked.indexOf(index);
    if (checkIndex > -1) {
      const filltered = [...checked];
      filltered.splice(checkIndex, 1);
      setChecked(filltered);
    } else {
      const newChecked = [...checked, index];
      const unique = [...new Set(newChecked)];
      setChecked(unique);
    }
  };

  return (
    <>
      <div className="flex flex-col px-6 py-6 border border-black rounded-3xl gap-2 max-w-96">
        <p>Score</p>
        <p className="text-5xl">{score}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        key={version}
        className="flex flex-col px-6 py-6 border border-black rounded-3xl gap-4 max-w-96"
      >
        <label className="text-2xl font-semibold">Add done chores</label>
        <Button onClick={undefined}>Add chore</Button>
        <ul className="flex flex-col gap-2">
          {chores.map((chore, index) => (
            <li>
              <Checkbox
                key={chore.chore_name}
                label={chore.chore_name}
                points={chore.point_amount}
                onChange={() => handleCheckbox(index)}
              />
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default ChoreTable;
