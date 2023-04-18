import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, getAllUser } from '../../app/Slice/gitUser'
import { useSelector } from 'react-redux'

const Read = () => {
    const dispatch = useDispatch()
    const { users, loading } = useSelector((state) => state.gitUser)

    useEffect(() => {
        dispatch(getAllUser())
    }, [])
    if (loading) {
        return <h2>Loading....</h2>
    }
    return (
        <div>
            {
                users.map((data) => {
                    return (
                        <div className="card w-50 mx-auto my-5" key={data.id}>
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{data.email}</h6>
                                <p className="card-text">{data.age}</p>
                                <p className="card-text">{data.gender}</p>
                                <Link to={`/update/${data.id}`} className="card-link">Edit</Link>
                                <Link onClick={() => dispatch(deleteUser(data.id))} className="card-link">Delete</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Read
