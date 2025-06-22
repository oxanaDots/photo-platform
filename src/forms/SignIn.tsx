import React, { useState } from 'react';
import axios, { AxiosError } from 'axios'
import InputField from '../components/InputField';
import {useForm, SubmitHandler} from 'react-hook-form'
import '../index.css'
import { useNavigate } from 'react-router-dom';

type SignInFormData={
  email: string,
  password: string
}

const SignIn: React.FC = () => {
const [email, setEmail] = useState<string>("")
const [password, setPassword] = useState<string>("")
const {handleSubmit, register, formState: {errors, isSubmitting}, setError, setValue, getValues} = useForm<SignInFormData>({shouldUseNativeValidation: false, defaultValues: {email, password}})
const navigate = useNavigate()
const apiURL = 'http://localhost:5173';


const onSubmit: SubmitHandler<SignInFormData> = async (data )=> {

  if (data){
    navigate('/mydashboard')
  }
}

const onError = ()=>{
  console.log('wrong')
}
  return (
    <>
  
    <div className='main-cont'>
  
    <section className='side-img'>
              
                <div className='absolute inset-0 flex flex-col  justify-center items-center z-10  text-center'>
            <h2 className='text-lg font-semibold '>Are you new to our platform??</h2>
            <button onClick={()=> navigate('/signup')} className='submit-btn-secondary'>Sign Up</button>
        </div>
            </section>
    <form  onSubmit={handleSubmit(onSubmit, onError)} method='POST'>
        <div className='form-container'>
            
        <legend className='legend'>Sign In</legend>

        <InputField
            name="email"
            placeholder="Email Address"
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
            placeholder="Password"
            type="password"
            register={register}
            validationRules={{
              required: "Enter your password",
              validate: (value: string) =>
                /^(?=.*[a-zA-Z]{8})(?=.*\d).+$/.test(value) || "Password must be at least 9 characters long and include a number",
            }}
            error={errors.password}
          />

   
    <button className='submit-btn'>Submit</button>
    </div>
    </form>
    </div>
    </>
  );
};

export default SignIn;


