import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
import { useForm } from 'react-hook-form';

const Admission = () => {
    const admission = useLoaderData();
    const {user} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        fetch("http://localhost:5000/addcollege",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result)
        })
        console.log(data)
      };
    return (
        <div className="mt-4">
        <h2 className="text-center text-2xl font-bold text-green-500 underline mb-2">Admission</h2>
        <div className="card card-body bg-base-300 text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="flex justify-center gap-3">
              <label className="label">
                <span className="label-text font-bold">Picture:</span>
              </label>
              <input placeholder="image-link" type='url' {...register("picture")} />
              <label className="label">
                <span className="label-text font-bold">Candidate Name:</span>
              </label>
              <input value={user?.displayName}
                placeholder="Candidate-Name"
                {...register("Name", { required: true })}
              />
            </div>
            <div className="flex justify-center gap-3 mt-3">
              <label className="label">
                <span className="label-text font-bold">Phone-Number:</span>
              </label>
              <input
                placeholder="phone-number"
                {...register("phone_number", { required: true })}
              />
            </div>
            <select className="text-input w-1/2 mt-3" {...register("category")}>
                <option value="Economics">Economics</option>
                <option value="Physics">Physics</option>
                <option value="Math">Math</option>
                <option value="Chemistry">Chemistry</option>
              </select>
              <div className="flex justify-center gap-3 mt-3">
              <label className="label">
                <span className="label-text font-bold">Candidate Email:</span>
              </label>
              <input value={user?.email} type='email'  placeholder="Seller Email" {...register("email")} />
              <label className="label">
                <span className="label-text font-bold">address:</span>
              </label>
              <input
                placeholder="Address"
                {...register("Address", { required: true })}
              />
            </div>
            <div className="flex justify-center gap-3 mt-3">
              <label className="label">
                <span className="label-text font-bold">Date of birth:</span>
              </label>
              <input placeholder="Date-of-birth" {...register("birth")} />
            </div>
  
            <input className="mt-4 btn" type="submit" value='Submit' />
          </form>
        </div>
      </div>
    );
};

export default Admission;