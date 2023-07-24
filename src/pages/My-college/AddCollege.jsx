import React from 'react';

const AddCollege = ({college}) => {
    const {picture,Name,phone_number,category,email,Address,birth} = college
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {Name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Phone-Number: {
     phone_number
      }</p>
      <p><span className='text-black font-bold'>Category : </span>{category}</p>
      <p><span className='text-black font-bold'>Email : </span>{email}</p>
      <p><span className='text-black font-bold'>Address : </span>{Address}</p>
      <p><span className='text-black font-bold'>Birth : </span>{birth}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </>
    );
};

export default AddCollege;