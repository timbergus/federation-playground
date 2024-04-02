// @ts-expect-error We need to define the types for this imports.
import Button from 'shell/Button'

function App() {
  return (
    <div>
      <h1>This is the profile page</h1>
      <Button page="Profile" />
    </div>
  )
}

export default App
