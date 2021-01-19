import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen font-sans bg-secondary">
        <img
          src={logo}
          style={{ height: '40vmin' }}
          className="animate-spin-slow"
          alt="logo"
        />
        <p className="text-white">
          Edit{' '}
          <code className="font-monospace p-1 bg-gray-700 rounded">
            src/App.js
          </code>{' '}
          and save to reload.
        </p>
        <div className="flex items-center mt-2 space-x-8">
          <a
            className="text-primary cursor-pointer"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn ReactJS
          </a>
          <a
            className="text-primary cursor-pointer"
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Tailwind CSS
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
