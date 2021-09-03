import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';


const NewUserForm = () => {
    const [input, setInput] = useState({
        email: '',
        userName: '',
        password: '',
        date: '',
        country: '',

    })
    const handleChange_input = (e) => {
        setInput({...input, [e.target.id]:[e.target.value]});
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        //updateUsers(user)
    }

    return (
        <div className="NewUserForm">
            <h1 id="formHeader">Create an account</h1>
            <h3 id="formHeader-small">Already have an account? <Link>Sign In</Link></h3>
            <form onSumbit={handleSumbit} id="NewUserForm">
                <label htmlFor="NewUserForm-email">Email Address</label>
                <input
                    type="email" name=""
                    id="email" className="NewUserForm-Input"
                    value={input.email}
                    onChange={ handleChange_input }/>;

                <label htmlFor="NewUserForm-userName">Choose a Username</label>
                <input
                    type="text" name=""
                    id="userName" className="NewUserForm-Input"
                    value={input.userName}
                    onChange={handleChange_input}/>

                <label htmlFor="NewUserForm-password">Password</label>
                <input
                    type="password" name="" id="password" className="NewUserForm-Input"
                    value={input.password}
                    onChange={handleChange_input}/>

                <label htmlFor="NewUserForm_confirmPassword">Confirm Password</label>
                <input
                    type="password" name="" id="confirmPassword" className="NewUserForm-Input"
                    value={input.confirmPassword}
                    onChange={handleChange_input}/>

                <label htmlFor="NewUserForm-DOB">Date of Birth</label>
                <input
                    type="date" name="" id="DOB" className="NewUserForm-Input"
                    value={input.date}
                    />

                <label htmlFor="NewUserForm-country">Country/Region</label>
                <CountryDropdown
                    className="NewUserForm-Input"
                    id="country"
                    value={input.country}/>
{/* Terms of use still has to be written out */}
                <div id='NewUserForm-agreement'> By clicking Create Account, I agree that:
                    <ul>
                        <li>I have read and accepted the <Link>Terms of Use</Link>.</li>
                        <li>The Capstone Gang may keep me informed with personalised emails about game updates and reminders.</li>
                    </ul>
                </div>

                <input type="submit" value="Create Account" id="createAccount-Submit" />
            </form>
        </div>
    )
};

export default NewUserForm;
