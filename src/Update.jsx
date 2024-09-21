import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"))

    }, [])

    const handleUpdate = (e) => {
       e.preventDefault();
        axios.put(`https://66df2b53de4426916ee3c2a7.mockapi.io/crud-id/${id}`,
            {
                name: name,
                email: email,
            })
            .then(() => {

                navigate("/read")

            })


    }

    return (
        <>
            <h5>Update</h5>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="password" className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <button type="submit" className="btn btn-primary mx-2"
                    onClick={handleUpdate}
                >Update</button>
                <Link to="/read">
                 <button  className="btn btn-primary mx-2"
                    
                >Back</button></Link>
            </form>
        </>
    )
}

export default Update
