import React from "react";
import { useForm } from "react-hook-form";

export default function AddUserForm  (props)  {
    const {register, handleSubmit, formState: { errors }} = useForm() //state

    const onSubmit=(data,e)=>{
        //console.log(data)
        props.addUser(data)//mandamos el usuario que fue capturado en el form
        e.target.reset()//limpia los campos
    }
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input {...register("name", { required: true, message: 'Name is required'})}
                type="text"
            />
            <div>{errors.name?.type === 'required' && "Name is required"}</div>
            
            <label>Username</label>
            <input {...register("username", { required: true, message: 'Username is required'})} type="text"  />
            <div>{errors.username?.type === 'required' && "Username is required"}</div>
            <button className='add'>Add new user</button>
        </form>
     );
}
