import './App.css'
import Counter from './Components/Counter'


function App() {

  return (
    <>
      <h1 className='text-center my-5 fw-bolder'>
        COUNTER APP
      </h1>
<div className='d-flex justify-content-center align-items-center w-100' style={{height:"70vh"}}>
  <Counter/>
  </div>
    </>
  )
}

export default App
