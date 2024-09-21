import React, {useState}from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




const Create = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
const header={"Access-Control-Allow-Origin":"*"}
const navigate=useNavigate();

    const handleSubmit=(e)=>{
e.preventDefault();
axios.post(
    'https://66df2b53de4426916ee3c2a7.mockapi.io/crud-id',
    {name:name,email:email},
    header,)
    .then(()=>{
        navigate("/read")

    })

}

    return (
        <div>
            <>
            <div className='d-flex justify-content-between m-2'>
                <h5>Create</h5>
                <Link to="/read">  <button className='btn btn-primary'>Show Data</button></Link>
              
                </div>
                <form>
                <div className="mb-3">
                        <label  className="form-label">Name</label>
                        <input type="password" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control"  onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                   
                   
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </>
        </div>
    )   
}

export default Create;
