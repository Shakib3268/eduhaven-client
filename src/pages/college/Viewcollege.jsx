import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Viewcollege = () => {
    const single = useLoaderData();
    const {college_name,college_image,research_history,events,sports,_id} = single || {}
    const fall = single.admission_dates.fall;
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
      <div className='grid grid-cols-2 gap-4'>
        <div>
            <p><span className='font-bold'>Events</span>
            {
                events.map(int => <li>{int}</li>)
            }
            </p>
        </div>
        <div>
            <p><span className='font-bold'>Sports</span>
            {
                sports.map(int => <li>{int}</li>)
            }
            </p>
        </div>

      </div>
      <p><span className='text-black font-bold'>Research History : </span>{research_history}</p>
      <p><span>Ratings : </span>3.5</p>
    <div className="card-actions justify-end">
    <Link to={`/admission/${_id}`} className="badge badge-outline">Admition</Link>
    </div>
  </div>
</div>
    );
};

export default Viewcollege;