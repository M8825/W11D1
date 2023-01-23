import React, { useState} from "react";


function Form(props) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "", // TODO: Make this a dropdown
        staff: "", // TODO: Make this a radio button
        bio: "", // textarea
        notification: "", //checkbox
    })


    const handleChange = (field) => {
        return (event) => {
            // TODO: passwordInput is not defined
            const newObj = Object.assign({}, user, { [field]: event.target.value });
            setUser(newObj)
            // TODO: when it updates user
        }
    }
    const handleSubmit = (field) => {
    };


    return (
        <>
            <h1>Hi From FORM</h1>

            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={user.name}
                    placeholder="Name"
                    onChange={handleChange('name')}
                />

                <input
                    type="email"
                    value={user.email}
                    placeholder="Email"
                    onChange={handleChange('email')}
                />

                <input
                    type="text"
                    value={user.phoneNumber}
                    placeholder="Phone Number"
                    onChange={handleChange('phoneNumber')}
                />

                <select >
                    <option value="no-value" placeholder="Select Type">Select Type</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>

                <fieldset onChange={handleChange('staff')}>
                    <div>
                        <input type="radio" id="option1" name="staff" value="instructor" checked/>
                        <label for="option1">Instructor</label>

                        <input type="radio" id="option2" name="staff"  value="student" />
                        <label for="option2">Student</label>
                    </div>
                </fieldset>


                <textarea
                    type="textarea"
                    value={user.bio}
                    placeholder="Bio"
                    onChange={handleChange('bio')}
                />

                <fieldset onChange={handleChange('notification')}>
                    <input
                        type="checkbox"
                        value={user.notification}
                        id='notification'
                    />
                    <label for="notification">Notification</label>
                </fieldset>
            </form>
        </>
    )
}

export default Form;
