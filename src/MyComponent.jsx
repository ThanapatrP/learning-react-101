import React, {useState} from 'react'; // import only useState function from React using '{}' to destructuring

function MyComponent(){
    
    // use '[]' for array destructuring getting only name variable and setName() function
    // use useState() for creating variable that trigger rerender the DOM
    // const [name, setName] = useState();
    const [name, setName] = useState("Gabe"); // put default value inside useState(<DefVal>) const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        // name = "JokeIScream"; <- this wouldnt work
        setName("Joke iScream");
    }

    const IncrementAge = () => {
        setAge(age + 67);
    }

    const toggleEmployed = () => {
        setIsEmployed(!isEmployed);
    }

    return <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Is Employed: {isEmployed ? "YEAH" : "NAH"}</p>
        <button onClick={updateName}>Set name</button>
        <button onClick={IncrementAge}>Increase Age</button>
        <button onClick={toggleEmployed}>Toggle Employed</button>
    </div>

}

export default MyComponent;