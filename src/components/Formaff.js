import React, { useState, useEffect } from 'react';
import './Formaff.css';
import Navbar from './Navbar';

function Formaff() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost/php-react/login-php/aff/formaff.php')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="pageprod">
        <div className="alltab">
          <h2 className="tabtitle">Client Comments</h2> <br />
          <div className="tab">
            <table className="table table-striped table-class">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Comment</th>
                </tr>
              </thead>
              <tbody>
                {comments.map(comment => (
                  <tr key={comment.id}>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.text}</td>
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

export default Formaff;
