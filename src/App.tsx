import React from 'react'
import * as Popover from './components/Popover'

function App() {
  return (
    <div className="App">
      <Popover.PopoverRoot>
        <Popover.PopoverTrigger>trigger</Popover.PopoverTrigger>
        <Popover.PopoverContent>content</Popover.PopoverContent>
      </Popover.PopoverRoot>
    </div>
  )
}

export default App
