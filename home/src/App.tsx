// @ts-expect-error We need to define the types for this imports.
import Button from 'shell/Button'

function App() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Button page="Home" />
    </div>
  )
}

export default App
