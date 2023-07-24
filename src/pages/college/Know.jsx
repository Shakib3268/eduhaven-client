import React from 'react';

const Know = ({know}) => {
  const {college_name,college_image} = know
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={college_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {college_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Admssion date: {}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">View Details</div>
    </div>
  </div>
</div>
        </>
    );
};

export default Know;