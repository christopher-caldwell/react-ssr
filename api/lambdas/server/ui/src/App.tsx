import styled from 'styled-components'

function App({ message }: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <GreenText>
          Edit <code>src/App.tsx</code> and save to reload.
        </GreenText>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {message}
        </a>
      </header>
    </div>
  )
}

const GreenText = styled.p`color: green;`

interface Props {
  message: string
}

export default App
