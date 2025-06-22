import React from 'react';
import Sidebarmenu from '../Sidebarmenu';
import InputField from '../../components/InputField';
import { useForm, SubmitHandler } from 'react-hook-form';

interface AccountInfoInputs{
    currentPassword:string;
    newPassword: string;
    confirmNewPassword: string
    
}
function Account() {

  const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<AccountInfoInputs>();
  return (
  <section className='flex py-10 justify-center px-5'>
      <div className="flex  w-[80%]  py-10 ">
        <Sidebarmenu/>
         <div className=" justify-left w-[100%] flex border-t border-l border-primary-dark py-12 px-14">

        <form>
           <div className=' flex justify-evenly items-left flex-col pb-8  '>
            
    
        <div className='  w-[40vw] items-start flex-col gap-2 items-left justify-left border-b pb-8 '>

          <InputField
            name="currentPassword"
            placeholder="your current password"
            register={register}
            validationRules={{
              
              validate: (value: string) =>
                /^(?=.*[a-zA-Z]{8})(?=.*\d).+$/.test(value) || "Password must be at least 9 characters long and include a number",
           
            }}
            error={errors.currentPassword}
          />
           <InputField
            name="newPassword"
            placeholder="your new password"
            register={register}
            validationRules={{
              
              validate: (value: string) =>
                /^(?=.*[a-zA-Z]{8})(?=.*\d).+$/.test(value) || "Password must be at least 9 characters long and include a number",
           
            }}
            error={errors.newPassword}
          />

            <InputField
            name="confirmNewPassword"
            placeholder="confirm your new password"
            register={register}
            validationRules={{
              
              validate: (value: string) =>
                 value === 'newPassword' || 'Password do not match'
            }}
            error={errors.newPassword}
          />
            <button className='save-btn'>Save Changes</button>

          </div>


            <h2 className='py-6'>Delete Account</h2>
            <p className='text-sm font-semibold text-red-500  underline underline-offset-4'>Delete my account</p>

           </div>
           
        </form>
        </div>
          </div>

        </section>
  );
}

export default Account;