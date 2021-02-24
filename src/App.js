import { useEffect, useState } from 'react';
import Airtable from 'airtable';
import config from './config';
import Goal from './components/Goal';
const base = new Airtable({ apiKey: config.API_KEY }).base('appaenaYANSzpFc6F');

function App() {
  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    base('goals')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setGoals(records);
        fetchNextPage();
      });
    base('updates')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setUpdates(records);
        fetchNextPage();
      });
  }, []);

  return (
    <>
      <h1>MY GOALS</h1>
      {goals.map((goal) => (
        <Goal
          key={goal.id}
          goal={goal}
          updates={updates.filter(
            (update) => update.fields.goalid[0] === goal.id
          )}
        />
      ))}
    </>
  );
}

export default App;
