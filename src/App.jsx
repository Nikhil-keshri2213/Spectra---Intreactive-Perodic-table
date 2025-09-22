import { useState } from 'react'
import PeriodicTable from './components/Table'
import data from './data/data.json'

function App() {
  return (
    <>
      <PeriodicTable jsonData={data}/>
    </>
  )
}

export default App