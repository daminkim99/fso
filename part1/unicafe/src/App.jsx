import { useState } from 'react'

const Button = (props) => {
  const {onClick , text} = props
  return(
  <>
  <button onClick = {onClick}>{text}</button>
  </>
  )}

  const Statistics = (props) => {
    const {good,neutral,bad,all} = props
    if (!all == 0){

      const avg = (good - bad) / all
      const positive = good/all *100

      return(
      <>
      <table>
        <tbody>
      <StatisticLine text = "good" value = {good} />
      <StatisticLine text = "neutral" value = {neutral} />
      <StatisticLine text = "bad" value = {bad} />
      <StatisticLine text = "all" value = {all} />
      <StatisticLine text = "average" value = {avg} />
      <StatisticLine text = "positive" value = {positive} />
        </tbody>
      </table>
    
      </>
      )
    } else {
      return(
        <>
        <p>No feedback given</p>
        </>
      )
    }
  }

  const StatisticLine = (props) => {
    const {text, value} = props

    if (text =="positive"){
      return( 
      <>
      <tr>
        <td>{text}</td>
        <td>{value}%</td>
      </tr>
        </>)
    } else{
      return (
        <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
        </>)
    }
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const increaseGood = () => {
    setGood(good+1)
    setAll(all+1)

  }
  const increaseNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }
  const increaseBad = () => {
    setBad(bad+1)
    setAll(all+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button type={good} text = "good" onClick= {increaseGood} />
      <Button type = {neutral} text = "neutral" onClick= {increaseNeutral} />
      <Button type = {bad} text = "bad"  onClick= {increaseBad} />
      <h2>statistics</h2>

      <Statistics good = {good} neutral = {neutral} bad = {bad} all={all} />

    


      
    </div>
  )
}

export default App