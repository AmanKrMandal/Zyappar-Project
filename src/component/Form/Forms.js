import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../../app/Slice/gitUser';
import { useNavigate } from 'react-router-dom';

const Forms = () => {
    const [user, setUser] = useState({});

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userGetData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user", user)
        dispatch(createUser(user))
        navigate("/read")
    }
    const homeNavigate = () => {
        navigate("/read")
    }
    return (
        <div>
            <button onClick={homeNavigate} className="btn btn-warning m-5 w-25">
                Read Data
            </button>
            <form onSubmit={handleSubmit} className='w-50 mx-auto my-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input name='name' onChange={userGetData} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' onChange={userGetData} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                    <input name='age' onChange={userGetData} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="form-check">
                    <input className="form-check-input" onChange={userGetData} type="radio" name="gender" id="gridRadios1" value="male" />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" onChange={userGetData} type="radio" name="gender" id="gridRadios2" value="female" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                        Female
                    </label>
                </div>

                <button name='name' type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Forms
