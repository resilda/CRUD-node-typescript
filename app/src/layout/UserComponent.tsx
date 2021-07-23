import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/rootReducer";

function UserComponent() {
    const addUser = useSelector((state: RootState) => state.data.addUser);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState();
    const [hobbies, setHobbies] = useState('');

    const data = {
        name: name,
        lastName: lastName,
        age: age,
        hobbies: hobbies
    }

    console.log('data', data);

    function addNewUser(e) {
        e.preventDefault();
        axios.post("http://localhost:4000/create", { body: { name, lastName, age, hobbies } })
            .then(function (response) {
                console.log('response', response);
                console.log('data', data)
            }).catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Add New User</h2>
            <form onSubmit={(e: any) => addNewUser(e)}>
                <label>Name</label>
                <input id="name" type="text" placeholder="Name" onChange={(e: any) => setName(e.target.value)} />
                <label>Last Name</label>
                <input id="lastName" type="text" placeholder="Last Name" onChange={(e: any) => setLastName(e.target.value)} />
                <label>Age</label>
                <input id="age" type="text" placeholder="Age" onChange={(e: any) => setAge(e.target.value)} />
                <label>Hobbies</label>
                <textarea id="hobbies" placeholder="Hobbies" onChange={(e: any) => setHobbies(e.target.value)} />
                <button type="submit">Submit</button>
                {/* <button onClick={() => dispatch(addUser())}>Add</button> */}
            </form>
        </div>
    )
}

export default UserComponent;