import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../app/Slice/gitUser";

const Update = () => {
    const [updateData, setUpdateData] = useState({});
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const { id } = useParams();
    const { users } = useSelector((state) => state.gitUser);
    useEffect(() => {
        if (id) {
            const singleuser = users.filter((data) => data.id === id);
            setUpdateData(singleuser[0]);
        }
    }, []);

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData))
        navigate("/read")
    }

    const homeNavigate = () => {
        navigate("/")
    }


    return (
        <div>
            <button onClick={homeNavigate} className="btn btn-warning m-5 w-25">
                Home Page
            </button>
            <form onSubmit={handleUpdate} className="w-50 mx-auto my-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Name
                    </label>
                    <input
                        name="name"
                        onChange={newData}
                        value={updateData?.name ?? ""}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        name="email"
                        onChange={newData}
                        value={updateData?.email ?? ""}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Age
                    </label>
                    <input
                        name="age"
                        onChange={newData}
                        value={updateData?.age ?? ""}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        onChange={newData}
                        type="radio"
                        name="gender"
                        id="gridRadios1"
                        value="male"
                        checked={updateData?.gender === "male"}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        onChange={newData}
                        type="radio"
                        name="gender"
                        id="gridRadios2"
                        value="female"
                        checked={updateData?.gender === "female"}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Update;
