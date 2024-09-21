import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([])

  const GetData = async () => {
    try {
      const response = await axios.get("https://66df2b53de4426916ee3c2a7.mockapi.io/crud-id")
      console.log(response.data)
      setData(response.data)


    } catch (error) {

      console.log(error.message)
    }
}

const setLocalStorage=(id,name,email)=>{
localStorage.setItem("id", id);
localStorage.setItem("name", name);
localStorage.setItem("email",email);
}

const handleDelete=(id)=>{
axios.delete(`https://66df2b53de4426916ee3c2a7.mockapi.io/crud-id/${id}`
  )
  .then(()=>{
      GetData()
    })


}

  useEffect(() => {
    GetData()


  }, [])

  return (

    <>
      <div className='d-flex justify-content-between m-2'>
                <h5>Read operation</h5>
                <Link to="/">  <button className='btn btn-primary'>Create Data</button></Link>
              
                </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {
          data.map((eachData) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{eachData.id}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td><Link to="/Update"><button className='btn-success'onClick={()=>setLocalStorage(eachData.id, eachData.name,eachData.email)}>Edit</button></Link></td>
                    <td><button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button></td>
                  </tr>


                </tbody>

              </>

            )


          })
        }
      </table>
    </>

  )
}

export default Read;
