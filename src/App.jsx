import Header from './Components/Header/Header.jsx'
import UserInput from './Components/UserInput/UserInput.jsx'
import Results from './Components/Results/Results.jsx';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    initialInvestment: '',
    annualInvestment: '',
    expectedReturn: '',
    duration: ''
  });

  const inputValidData = values.duration >= 1 ? true : false;


  function updateValues(value, key) {
    setValues((prev) => {
      const deepCopy = { ...prev };
      deepCopy[key] = Number(value);
      return deepCopy;
    })
  }
  return (
    <>
      <Header />
      <UserInput values={values} onChange={updateValues} />
      {
        !inputValidData && <p>Please enter duration value more than zero</p> }
        {
        inputValidData && 
      <Results input={values} />
      }

    </>
  )
}

export default App
