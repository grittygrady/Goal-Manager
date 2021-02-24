import StyledGoal from '../styles/StyledGoal';

const Goal = ({ goal, updates }) => {
  return (
    <StyledGoal>
      <label>
        {' '}
        <input type='checkbox' disabled defaultChecked={goal.fields.complete} />
        <span />
      </label>
      <h2>{goal.fields.title}</h2>
      <div>
        <h3>DETAILS</h3>
        <p>{goal.fields.details}</p>
        <h3>UPDATES</h3>
        {updates.map((update, i) => (
          <p key={i}>{update.fields.update}</p>
        ))}
      </div>
    </StyledGoal>
  );
};

export default Goal;
