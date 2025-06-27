import React from 'react';
import { useState } from 'react';
import axios, { AxiosError } from 'axios'
import {  useNavigate} from 'react-router-dom'
import { useFormContext, FormData } from './FormContent';
import {useForm, SubmitHandler} from 'react-hook-form'
import '../index.css'
import InputField from '../components/InputField';

import { doc, setDoc } from "firebase/firestore";
import { db, auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUp: React.FC = () => {
    const {formData, setFormData} = useFormContext()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {handleSubmit, register, formState: {errors, isSubmitting}, setError, setValue, getValues} = useForm<FormData & {password: string, confirmPassword: string}>({shouldUseNativeValidation: false, 
      defaultValues: {...formData, password, confirmPassword}})
   const navigate = useNavigate()
   

const onSubmit: SubmitHandler<FormData> = async (data )=> {
  setFormData(data)
   
  try{

      const userCredential = await createUserWithEmailAndPassword(
      auth,
     data.email,
     password
    );
    const client = userCredential.user;


      await setDoc(doc(db, "enterprises", client.uid), {
      // this info will be stored on Firestore database
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    streetNumber: data.streetNumber,
    streetName: data.streetName,
    businessname: data.businessname,
    postcode: data.postcode,
    phonenumber: data.phonenumber,
    createdAt: new Date(),
    role: 'enterprise'
    });

    navigate('/signin')
  } catch(err){
    console.error(err)
  }

}

  return (
    <>
  
    <div className='main-cont'>
  
    <section className='side-img'>
                <div></div>
                <div className='absolute inset-0 flex flex-col  justify-center items-center z-100  text-center'>
            <h2 className='text-lg font-semibold '>Already have an account?</h2>
            
            <button onClick={()=> navigate('/signin')} className='submit-btn-secondary'>Sign In</button>
           
        </div>
            </section>
    <form  onSubmit={handleSubmit(onSubmit)} method='POST'>
        <div className='form-container'>
            
        <legend className='legend'>Sign Up</legend>


        <div className=' flex w-full gap-2 justify-center '>

          <InputField
            name="firstName"
            placeholder="first name"
            register={register}
            validationRules={{
              required: "Enter your first name",
              validate: (value: string) =>
                /^[a-zA-Z]+$/.test(value) || "Your input can only contain alpahbetic letters",
            }}
            error={errors.firstName}
          />
           <InputField
            name="lastName"
            placeholder="last name"
            register={register}
            validationRules={{
              required: "Enter your last name",
              validate: (value: string) =>
                /^[a-zA-Z]+$/.test(value) || "Your input can only contain alpahbetic letters",
            }}
            error={errors.lastName}
          />
            </div>

           <InputField
            name="businessname"
            placeholder="business name"
            register={register}
            validationRules={{
              required: "Enter your business name",
            }}
            error={errors.businessname}
          />
         

         <div className=' flex w-full gap-2 justify-center '>
           <InputField
          
            name="streetNumber"
            placeholder="street number"
            register={register}
            validationRules={{
              required: "Enter street number",
            }}
            error={errors.streetNumber}
          />
            <InputField
            name="streetName"
            placeholder="street name"
            register={register}
            validationRules={{
              required: "Enter street name",
            }}
            error={errors.streetName}
          />
          </div>

          <InputField
            name="postcode"
            placeholder="postcode"
            register={register}
            validationRules={{
              required: "Enter your postcode",
              validate: (value: string) =>
                /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s\d{1,2}[A-Za-z]{2}$/.test(value) || "Please enter a valid postcode",
            }}
            error={errors.postcode}
          />

          <InputField
            name="email"
            placeholder="email address"
            type="email"
            register={register}
            validationRules={{
              required: "Enter your email address",
              validate: (value: string) =>
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Please enter a valid email address",
            }}
            error={errors.email}
          />

         

          <InputField
            name="password"
            placeholder="password"
            type="password"
            register={register}
            validationRules={{
              required: "Enter your password",
              validate: (value: string) =>
                /^(?=.*[a-zA-Z]{8})(?=.*\d).+$/.test(value) || "Password must be at least 9 characters long and include a number",
            }}
            onChange={(e)=> setPassword(e.target.value)}
            error={errors.password}
          />

          <InputField
            name="confirmPassword"
            placeholder="confirm password"
            type="password"
            register={register}
            validationRules={{
              required: "Confirm your password",
              validate: (value: string) =>
                value === password || "Passwords do not match",
            }}
            onChange={(e)=> setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />
   
    <button className='submit-btn'>Submit</button>
    </div>
    </form>
    </div>
    </>
  );
};

export default SignUp;