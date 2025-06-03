// Settings.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useFormContext, FormData } from '../../forms/FormContent';
import Sidebarmenu from '../Sidebarmenu';
import InputField from '../../components/InputField';
import axios from 'axios';

export default function MyDetails() {
  const { formData, setFormData } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    // we’re not pre‐filling values here—just using register to validate & collect
    defaultValues: formData, 
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // save their edits back into context
    setFormData(data);
    // and optionally persist to your API
    await axios.put('/api/user/settings', data);
    alert('Settings saved!');
  };

  return (
    <section className='flex w-[100vw] py-10 justify-center px-5
    '>
    <div className="flex  py-10 justify-center">

      <Sidebarmenu />
      <div className="w-[60vw] justify-left flex border-t border-l border-primary-dark py-12 px-14">
      <form  onSubmit={handleSubmit(onSubmit)} method='POST'>
        <div className='items-left'>
            
    
        <div className=' flex w-[40vw] gap-2 justify-left '>

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

       
   
    <button className='save-btn'>Update Changes</button>
    </div>
    </form>
      </div>
    </div>
    </section>
  );
}
