function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">✓</div>

        <div>
          <h2>TaskFlow</h2>
          <p>Plan. Focus. Complete.</p>
        </div>
      </div>

      <div className="greeting">
        <span>Good day 👋</span>
        <small>Let's get things done!</small>
      </div>
    </header>
  );
}

export default Header;