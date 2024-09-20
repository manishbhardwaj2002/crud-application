import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h2>Read Operation</h2>
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
                    <td><button className='btn-success'>Edit</button></td>
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
