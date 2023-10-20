import React from 'react'
import './Table.css'
import DataTable from 'react-data-table-component'

function Tables(){
    const columns= [
        {
            name: 'First Name',
            selector: row => row.Fname,
            sortable: true
        },
        {
            name: 'Second Name',
            selector: row => row.Sname,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true
        }
    ]
    const data = [
        {
            id: 1,
            Fname: 'Reena ',
            Sname: 'Rani',
            email:'reena20790@gmail.com',
            status: 'Active',
            age: 29,
        },
        {
            id: 2,
            Fname: 'Manoj ',
            Sname: 'krishna',
            email:'manojla7099@gmail.com',
            age: 27,
            status: 'Active',
        },
        {
            id: 3,
            Fname: 'priya',
            Sname: 'jain',
            email:'jainpriya89621@gmail.com	',
            status: 'Inactive',
            age: 33
        },
        {
            id: 4,
            Fname: 'Test',
            Sname: 'Domain',
            email:'sushilkumar@web.bizm',
            status: 'Inactive',
            age: 28
        },
        {
            id: 5,
            Fname: 'xReenaRani ',
            Sname: 'Test',
            email:'reenarani.bale@web.biz',
            age: 26,
            status: 'Active',
        },
        {
            id: 6,
            Fname: 'Devabakthini',
            Sname: 'Kumar',
            email:'ajuu433@gmail.com',
            status: 'Inactive',
            age: 42
        },
        {
            id: 7,
            Fname: 'Sholli',
            Sname: 'Kestecher',
            email:'sholliber@gmail.com',
            status: 'Active',
            age: 28
        },
        {
            id: 8,
            Fname: 'xReenaRani ',
            Sname: 'Test',
            email:'reenarani.bale@web.biz',
            age: 26,
            status: 'Active',
        },
        {
            id: 9,
            Fname: 'Devabakthini',
            Sname: 'Kumar',
            email:'ajuu433@gmail.com',
            status: 'Inactive',
            age: 42
        },
        {
            id: 10,
            Fname: 'Reena ',
            Sname: 'Rani',
            email:'reena20790@gmail.com',
            status: 'Active',
            age: 29
        },
        {
            id: 11,
            Fname: 'Manoj ',
            Sname: 'krishna',
            email:'manojla7099@gmail.com',
            age: 27,
            status: 'Active',
        },
        {
            id: 12,
            Fname: 'priya',
            Sname: 'jain',
            email:'jainpriya89621@gmail.com	',
            status: 'Inactive',
            age: 33
        },
        {
            id: 13,
            Fname: 'Test',
            Sname: 'Domain',
            email:'sushilkumar@web.bizm',
            status: 'Inactive',
            age: 28
        },
        {
            id: 14,
            Fname: 'xReenaRani ',
            Sname: 'Test',
            email:'reenarani.bale@web.biz',
            age: 26,
            status: 'Active',
        },
        {
            id: 15,
            Fname: 'Devabakthini',
            Sname: 'Kumar',
            email:'ajuu433@gmail.com',
            status: 'Inactive',
            age: 42
        },
        {
            id: 16,
            Fname: 'Sholli',
            Sname: 'Kestecher',
            email:'sholliber@gmail.com',
            status: 'Active',
            age: 28
        },
        {
            id: 17,
            Fname: 'xReenaRani ',
            Sname: 'Test',
            email:'reenarani.bale@web.biz',
            age: 26,
            status: 'Active',
        },
        {
            id: 18,
            Fname: 'Devabakthini',
            Sname: 'Kumar',
            email:'ajuu433@gmail.com',
            status: 'Inactive',
            age: 42
        }    
    ]
    return(
       <div className='card'>
        <div className='table-search d-flex justify-content-between'>
          <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="datatable-1" /></label>
          <div className='table-btns'>
            <button className='btn btn-primary add-item-btn'>Add</button>
            <button className='btn btn-danger delete-item-btn'>Delete</button>
          </div>
        </div>
        <DataTable 
          columns={columns}
          data={data}
          fixedHeader
          pagination
          selectableRows
        ></DataTable>
        </div>
    )
}

export default Tables