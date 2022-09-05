import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [usernames, setUserNames] = useState(["Johannes", "Torben", "Benny"]);
    const [textField, setTextField] = useState("")


    const handleChange = (event) => {
          setTextField(event.target.value)
    }

    const handleSubmit = () => {
          setUserNames(prevState => [...prevState, textField.toString()])
        setTextField("")
    }

    const deleteGreeting = (event) => {
         setUserNames(prevState => {
             const arr = [...prevState]
             arr.splice(event.target.id, 1)
             return arr
         })
    }

    let greetings = usernames.map((name, index) => {
        return(<h1 key={index} id={index} onClick={deleteGreeting}>Hello, {name}</h1>)
    })

    return (
    <div>
        {greetings}
        <input onChange={handleChange} type="text" id="newInput" value={textField}/>
        <button onClick={handleSubmit}>Submit name</button>
    </div>
  );
}

export default App;
