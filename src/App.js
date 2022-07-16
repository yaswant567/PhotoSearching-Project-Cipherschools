import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
function App() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])

    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=W4IWPq_4YyVJD5yPY7uWeOv4R6QcD7SbqKttP_snmLo`)
            .then((response) => {
                // console.log(response.data);
                setResult(response.data.results);
            })
    }
    return (
        <>
             <h2 class="text-center"><b>Search Photonpm</b></h2>
            <div className='container text-center my-5' >
                <input type="text" className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
        
                <button type='submit' onClick={changePhoto} className='btn btn-primary my-2'>Get Photo</button>
            </div>

            <div className="container">
                <div class="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div class="col-lg-3 col-md-4 col-6">
                                    <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default App