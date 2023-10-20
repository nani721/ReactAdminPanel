import React, {useState} from "react";
import './CustomerList.css';


function CustomerList2() {

    const [customerList] = useState([

        { id: 1, label: "Sonya Henshaw", location: "Colorado", avatar: require('./img/users/avatar-8.jpg'), status:'Active', statusclassName:'badge bg-soft-info font-size-12', cost:'112.00'},
        { id: 2, label: "Marie Kim", location: "Australia", avatar: require('./img/users/avatar-2.jpg'), status:'success', statusclassName:'badge bg-soft-success font-size-12', cost:'120.00'},
        { id: 3, label: "Sonya Henshaw", location: "India", avatar: require('./img/users/avatar-1.jpg'), status:'Cancel', statusclassName:'badge bg-soft-danger font-size-12', cost:'420.00'},
        { id: 4, label: "Glenn Holden", location: "Nevada", avatar: require('./img/users/avatar-4.jpg'), status:'Cancel', statusclassName:'badge bg-soft-danger font-size-12', cost:'250.00'},
        { id: 5, label: "Lolita Hamill", location: "Texas", avatar: require('./img/users/avatar-5.jpg'), status:'Success', statusclassName:'badge bg-soft-success font-size-12', cost:'110.00'},
        { id: 6, label: "Robert Mercer", location: "California", avatar: require('./img/users/avatar-6.jpg'), status:'Active', statusclassName:'badge bg-soft-info font-size-12', cost:'420.00'},
        { id: 7, label: "Marie Kim", location: "Montana", avatar: require('./img/users/avatar-7.jpg'), status:'Cancel', statusclassName:'badge bg-soft-warning font-size-12', cost:'112.00'}
       
    ]);

  return (
    <div className="container-fluid p-0">
      <div className="Card">
      <h4 class="text-color card-title mb-4">Top Rated Customers</h4>
        <div className="table-height">
        <div className="table-responsive">
          <table className="table table-borderless table-centered table-nowrap">
            <tbody>
             {customerList.map(item => (
                <tr>
                <td>
                 <img src={item.avatar} alt="avatar" className="avatar-xs rounded-circle"/>
                </td>
                <td>
                  <h6 className="font-size-15 mb-1 fw-normal">{item.label}</h6>
                  <p className="text-muted font-size-13 mb-0">
                    <i className="mdi mdi-map-marker"></i> {item.location}
                  </p>
                </td>
                <td>
                  <span className={item.statusclassName}>{item.status}</span>
                </td>
                <td className="text-muted fw-semibold text-end">
                  <i
                    className="icon-xs icon me-2 text-success"
                    data-feather="trending-up"
                  ></i>
                  ${item.cost}
                </td>
              </tr>
             ))} 
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerList2;
