import React, { useEffect, useState } from 'react';
import Know from './Know';

const Coleges = () => {
    const[college,setCollege] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/college')
        .then(res => res.json())
        .then(data => setCollege(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-2 mb-8'> 
                    {
                        college.map(know => <Know key={know.id} know={know}></Know>)
                    }
            </div>
            
        </div>
    );
};

export default Coleges;