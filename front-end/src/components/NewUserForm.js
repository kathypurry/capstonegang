import React from 'react'
import { Link } from 'react-router-dom';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


const NewUserForm = () => {

    return (
        <div className="NewUserForm">
            <h1 id="formHeader">Create an account</h1>
            <h3 id="formHeader-small">Already have an account? <Link>Sign In</Link></h3>
            <form action="" id="NewUserForm">
                <label htmlFor="">Email Address</label>
                <input type="text" />

                <label htmlFor="">Choose a Username</label>
                <input type="text" />

                <label htmlFor="">Password</label>
                <input type="text" />

                <label htmlFor="">Date of Birth</label>
                <input type="date" name="" id="" />

                <label htmlFor="">Country/Region</label>
                <CountryDropdown />

                <div> By clicking Create Account, I agree that:
                    <ul>
                        <li>I have read and accepted the <Link>Terms of Use</Link>.</li>
                        <li>The Capstone Gang may keep me informed with personalised emails about game updates and reminders.</li>
                    </ul>
                </div>

                <input type="submit" value="Create Account" id="createAccount-Submit" />
            </form>
        </div>
    )
}

export default NewUserForm
