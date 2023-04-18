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
    return (
        <div>
            <form onSubmit={handleSubmit} className='w-50 mx-auto my-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input name='name' onChange={userGetData} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='text' onChange={userGetData} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                    <input name='age' onChange={userGetData} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" onChange={userGetData} type="radio" name="gender" id="gridRadios1" value="male" checked />
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

                    </div>
                </fieldset>
                <button name='name' type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Forms
