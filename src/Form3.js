import React from 'react'

function Form3(){
    return(
        <div className='container-fluid p-0'>
       <div className="card mb-5 p-5">
        <h1 className="form-header">Add Customer 3</h1>
        <form class="row g-3">
          <div class="col-sm-6 form-group">
            <label for="name-f">First Name</label>
            <input
              type="text"
              class="form-control"
              name="fname"
              id="name-f"
              placeholder="Enter your first name."
              required
            />
          </div>
          <div class="col-sm-6 form-group">
            <label for="name-l">Last name</label>
            <input
              type="text"
              class="form-control"
              name="lname"
              id="name-l"
              placeholder="Enter your last name."
              required
            />
          </div>
          <div class="col-sm-6 form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Enter your email."
              required
            />
          </div>
          <div class="col-sm-6 form-group">
            <label for="Date">Date Of Birth</label>
            <input
              type="Date"
              name="dob"
              class="form-control"
              id="Date"
              placeholder=""
              required
            />
          </div>
          <div class="col-sm-6 form-group">
            <label for="sex">Gender</label>
            <select id="sex" class="form-control browser-default custom-select">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unspesified">Unspecified</option>
            </select>
          </div>
          <div class="col-sm-6 form-group">
            <label for="tel">Phone</label>
            <input
              type="tel"
              name="phone"
              class="form-control"
              id="tel"
              placeholder="Enter Your Contact Number."
              required
            />
          </div>
          <div class="col-sm-12 form-group mb-0">
          <div class="table-btns float-end mt-5">
            <button class="btn btn-primary add-item-btn">Submit</button>
            <button class="btn btn-danger delete-item-btn">Cancle</button>
            </div>
          </div>
        </form>
      </div>
         </div>
    )
}

export default Form3