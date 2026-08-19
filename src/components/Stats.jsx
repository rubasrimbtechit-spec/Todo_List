function Stats({ todos }) {

  const total = todos.length;

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const pending = total - completed;

  const progress =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (
    <div className="stats-section">

      <div className="stat-card">
        <div className="stat-icon total-icon">📋</div>

        <div>
          <span>Total Tasks</span>
          <strong>{total}</strong>
        </div>
      </div>


      <div className="stat-card">
        <div className="stat-icon completed-icon">✓</div>

        <div>
          <span>Completed</span>
          <strong>{completed}</strong>
        </div>
      </div>


      <div className="stat-card">
        <div className="stat-icon pending-icon">⏳</div>

        <div>
          <span>Pending</span>
          <strong>{pending}</strong>
        </div>
      </div>


      <div className="progress-card">

        <div className="progress-header">
          <span>Today's Progress</span>
          <strong>{progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>

    </div>
  );
}

export default Stats;