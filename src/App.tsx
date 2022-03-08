import React from 'react'
import * as Popover from './components/Popover'
import { Button } from './components/Button'

function App() {
  return (
    <div className="App">
      <Button>button</Button>
      <Popover.PopoverRoot>
        <Popover.PopoverTrigger>trigger</Popover.PopoverTrigger>
        <Popover.PopoverContent>content</Popover.PopoverContent>
      </Popover.PopoverRoot>
    </div>
  )
}

export default App
