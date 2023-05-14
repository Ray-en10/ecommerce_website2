import React, { useState, useEffect } from 'react';
import './Formaff.css';
import Navbar from './Navbar';



function Acccli() {
    const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/php-react/login-php/aff/clientaff.php')
      .then(res => res.json())
      .then(data => setAccounts(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="pageprod">
        <div className="alltab">
          <h2 className="tabtitle">Client Accounts</h2> <br />
          <div className="tab">
            <table className="table table-striped table-class">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map(account => (
                  <tr key={account.id}>
                    <td>{account.name}</td>
                    <td>{account.email}</td>
                    <td>{account.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acccli
