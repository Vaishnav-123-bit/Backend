import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import {Provider} from 'react-redux'
import store from './redux/todo/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className='flex h-screen items-center justify-center bg-indigo-700'>
        <div className='bg-white rounded shadow text-center pt-8 font-medium text-lg'>
          <h2 className='px-4'>Redux counter</h2> 
          <Counter/> 
        </div>
        
      </div> */}
      <Provider store={store}>
        <h1>wannakam</h1>

      </Provider>

    </>
  )
}

export default App
