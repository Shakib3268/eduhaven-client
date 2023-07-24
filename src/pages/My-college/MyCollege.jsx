import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import AddCollege from './AddCollege';

const MyCollege = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
  const [colleges, setCollege] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/admitCollage?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCollege(data);
        console.log(data);
      });
  }, [user]);
    return (
        <div>
            <h2 className='text-5xl text-center'>College Admission</h2>
            <div className='text-center'>
            {
                colleges.map(college => <AddCollege key={college._id} college={college}></AddCollege>)
            }
            </div>
        </div>
    );
};

export default MyCollege;