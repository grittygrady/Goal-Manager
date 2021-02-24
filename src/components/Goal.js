const Goal = ({ goal, updates }) => {
  return (
    <div>
      <label>
        <input type='checkbox' disabled defaultChecked={goal.fields.complete} />
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
    </div>
  );
};

export default Goal;
