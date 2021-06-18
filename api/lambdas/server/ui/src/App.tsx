function App({ message }: Props) {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </header>
    </div>
  );
}

interface Props {
  message: string
}

export default App;
