import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen bg-secondary">
        <img
          src={logo}
          style={{ height: '40vmin' }}
          className="animate-spin-slow"
          alt="logo"
        />
        <p className="text-white">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
