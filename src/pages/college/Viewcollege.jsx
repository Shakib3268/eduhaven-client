import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Viewcollege = () => {
    const know = useLoaderData()
    const {college_name,college_image,admission_dates,research_history} = know
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={college_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {college_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Admssion date: {
     fall
      }</p>
      <p><span className='text-black font-bold'>Research History : </span>{research_history}</p>
      <p><span>Ratings : </span>3.5</p>
    <div className="card-actions justify-end">
        
    </div>
  </div>
</div>
    );
};

export default Viewcollege;