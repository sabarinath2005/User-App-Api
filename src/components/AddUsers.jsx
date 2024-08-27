import React from 'react'
import Navbar from './Navbar'

const AddUsers = () => {
  return (
    <div>
      <Navbar /><br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">First Name</label>
                <input type="text" className="form-control" placeholder='Enter First Name' />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Last Name</label>
                <input type="text" className="form-control" placeholder='Enter Last Name'/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Profile pic</label>
                <input type="file" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email ID</label>
                <input type="text" className="form-control" placeholder='Enter Email ID' />
              </div>
              <div className="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUsers