import { useEffect, useState } from 'react';
import Airtable from 'airtable';
import config from './config';
import Goal from './components/Goal';
import styled from 'styled-components';
import { GlobalStyle } from './styles/Global.style';

// API KEY IS IN A CONFIG.JS FILE. IF NEEDED, GO TO AIRTABLE TO GENERATE A NEW ONE.
const base = new Airtable({ apiKey: config.API_KEY }).base('appaenaYANSzpFc6F');

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin: 1rem 0;
`;

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
      <GlobalStyle />
      <StyledH1>MY GOALS</StyledH1>
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
