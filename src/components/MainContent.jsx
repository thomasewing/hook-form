import React, {useState, useEffect} from 'react';

const MainContent = ()=>{
    const [number, setNumber]= useState(0);
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const counterClickHandler = event => {
        // event.preventDefault();
        const newNumber = number + 1;
        setNumber(newNumber);
    }

    const formHandler = event =>{
        event.preventDefault();

    }
    return(
        <div>
            {/* <p>{number}</p>
            <button onCLick={counterClickHandler}>+1</button> */}
            <form onSubmit={formHandler}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={e=> setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
            <h3>{confirmPassword}</h3>
        </div>
    );
}
export default MainContent;