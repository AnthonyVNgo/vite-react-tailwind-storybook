import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
  }
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className='space-y-5'>
          <div className='flex justify-between'>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <button onClick={handleClick}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
