import React from "react";
import { useForm } from "react-hook-form";

export default function EditUserForm  (props)  {

//console.log(props.currentUser)

    const {register, handleSubmit,setValue, formState: { errors }} = useForm({
        defaultValues: props.currentUser
    }); //state

    setValue('name',props.currentUser.name);
    setValue('username',props.currentUser.username)

    const onSubmit=(data,e)=>{
        //console.log(data)
        data.id=props.currentUser.id
        props.updateUser(props.currentUser.id,data) //data viene de los inputs y id es lo que recibimos en cada click
        e.target.reset();
   
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
            <button>Edit User</button>
        </form>
     );
}
