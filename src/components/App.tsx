import Header from './Header'

import { useState } from 'react'

const App = () => {
  const [selectedSection, setSelectedSection] = useState('about')
  
  const handleSelectedSection = (section: string) => {
    setSelectedSection(section)
  }
  return (
    <>
      <Header selectedSection={selectedSection} handleSeclectedSection={handleSelectedSection}/>
    </>
  )
}

export default App
