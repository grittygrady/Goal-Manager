import StyledGoal from '../styles/StyledGoal';
import StyledCheckbox from '../styles/StyledCheckbox';
import StyledGoalDetails from '../styles/StyledGoalDetails';
const Goal = ({ goal, updates }) => {
  return (
    <StyledGoal>
      <StyledCheckbox>
        {' '}
        <input type='checkbox' disabled defaultChecked={goal.fields.complete} />
        <span />
      </StyledCheckbox>
      <h2>{goal.fields.title}</h2>
      <StyledGoalDetails>
        <h3>DETAILS</h3>
        <p>{goal.fields.details}</p>
        <h3>UPDATES</h3>
        {updates.map((update, i) => (
          <p key={i}>{update.fields.update}</p>
        ))}
      </StyledGoalDetails>
    </StyledGoal>
  );
};

export default Goal;
