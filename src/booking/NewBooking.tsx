
import { useState, useEffect } from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import InputField from '../components/InputField';
import { Controller } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCamera, faCalendarDays, faClock, faLocationDot, faMessage } from '@fortawesome/free-solid-svg-icons';

export type NewBookingInputs ={
    // firstName: string,
    // lastName: string,
    // email: string,
    street_name: string,
    street_number: string,
    postcode: string,
    date: string,
    time: string,
   service: Service | '',
    occasion: Occasion | '',
    instructions: string

}

export const SERVICE_OPTIONS = ['photography', 'videography', 'photography and videography'] as const;
export type Service = typeof SERVICE_OPTIONS[number];

export const OCCASION_OPTIONS = ['Property', 'Food', 'Event'] as const;
export type Occasion = typeof OCCASION_OPTIONS[number];

const NewBooking = () => {


    const [profile, setProfile] = useState(null);

  const[booking, setBooking]= useState<NewBookingInputs>({
  
    street_name: '',
    street_number:'',
    postcode: '',
    date: '',
    time: '',
    service: '',
    occasion: '',
    instructions:''
})


const {
  register,
  control,
  handleSubmit,
  formState: { errors, isSubmitSuccessful },
} = useForm<NewBookingInputs>();

const onSubmit: SubmitHandler<NewBookingInputs> = async data => {

  setBooking(data);

  const{service, occasion, date, time, ...rest} = data
  const dataTosend={
    client_id: 1,
    artist_id: 1,
     ...rest,
     service_name: `${occasion} ${service}`,
     date_and_time: `${date} ${time}:00`,
     
  }


  try{
  const r = await fetch('http://localhost:3000/mybookings/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataTosend  && dataTosend)
  });
 if(!r.ok){
  const text = await r.text()
  console.error(text)
  return
 }

  } catch(err){
  console.error(err)
}
};

console.log(`${booking.occasion}${booking.service}`)

return (
  <div className=" flex flex-col p-4 justify-center text-center items-center">

    {isSubmitSuccessful?<div className='flex py-4  w-[25rem]  flex-col  justify-center items-center'>
  <h2 className='text-xl py-5 text-primary-dark text-opa font-bold'>
    Thank you for your booking, 
    {/* <span className='italic '> { profile.firstName}</span>
    <span className=' text- italic'> {profile.lastName}</span>  */}
     !</h2>
  <div className='  flex flex-col items-left justify-center text-xs  py-4 rounded-[0.3rem] w-[25rem] px-10 bg-ternary-light'>
   
  <h3 className=' pb-3 font-semibold text-md text-left text-primary-dark'>Booking details:</h3>
  <div className='items-left flex justify-left flex-col'>
  <div className='flex gap-2 text-xs justify-left text-secondary-medium text-opa py-1'>
    <li className='list-none text-opacity-55'>
<FontAwesomeIcon className='text-xs' icon={faCamera} />
    </li>
    {`${booking.occasion} ${booking.service} `}
  </div>

  <div className='flex gap-2 text-xs justify-left text-secondary-medium text-opa py-1'>
    <li className='list-none text-opacity-55'>
<FontAwesomeIcon className='text-xs' icon={faLocationDot} />
    </li>
    {` ${booking.street_number} ${booking.street_name}, ${booking.postcode} `}
  </div>

  <div className='flex gap-2 text-xs justify-left text-secondary-medium text-opa py-1'  >
    <li className='list-none text-opacity-55'>
    <FontAwesomeIcon className='text-xs' icon={ faCalendarDays} />   
     </li>
    {`${booking.date} `}
  </div>

  <div className='flex gap-2 text-xs justify-left text-secondary-medium text-opa py-1'  >
    <li className='list-none text-opacity-55'>
    <FontAwesomeIcon className='text-xs' icon={ faClock} />   
     </li>
    {` ${booking.time} `}
  </div>

   <div className='flex gap-2 text-xs justify-left text-secondary-medium text-opa py-1'  >
    <li className='list-none text-opacity-55'>
    <FontAwesomeIcon className='text-xs' icon={ faMessage} />   
     </li>
    {` ${booking.instructions} `}
  </div>
  <button className='submit-btn'>Go to My Bookings</button>
</div>
</div>
  
  </div>: 

<div className=' flex w-1/3 justify-center '>
    <form className=' flex-col w-[90vw] flex  p-4 justify-center text-center '  onSubmit={handleSubmit(onSubmit)}>
          <legend className="text-xl text-center font-semibold mb-4">Make a Booking</legend>

{/* <div className=' w-100 flex justify-between w-full gap-2 '>
      <InputField
        name="firstName"
        placeholder="First Name"
        register={register}
        validationRules={{ required: 'First name is required' }}
        error={errors.firstName}
      />

      <InputField
        name="lastName"
        placeholder="Last Name"
        register={register}
        validationRules={{ required: 'Last name is required' }}
        error={errors.lastName}
      />
</div>
      <InputField
        name="email"
        type="email"
        placeholder="Email"
        register={register}
        validationRules={{
          required: 'Email is required',
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: 'Enter a valid email',
          },
        }}
        error={errors.email}
      /> */}
<div className=' w-100 flex justify-between w-full gap-2 '>
      <InputField
        name="street_name"
        placeholder="Street Name"
        register={register}
        validationRules={{ required: 'Street name is required' }}
        error={errors.street_name}
      />
      <InputField
        name="street_number"
        placeholder="Street Number"
        register={register}
        validationRules={{ required: 'Street number is required' }}
        error={errors.street_name}
      />
</div>
      <InputField
        name="postcode"
        placeholder="Postcode"
        register={register}
        validationRules={{ required: 'Postcode is required' }}
        error={errors.postcode}
      />

       <div className=' w-100 flex justify-between w-full gap-2 '>
        <InputField
          name="date"
          type="date"
          placeholder="dd/mm/yyyy"
          register={register}
          validationRules={{ required: 'Date is required' }}
          error={errors.date}
        />
     

    
        
        <InputField
          name="time"
          type="time"
          placeholder=""
          register={register}
          validationRules={{ required: 'Time is required',
            message: 'Enter time as HH:MM (00–23 hours)'
           }}
          error={errors.time}
        />
        </div>
    

    <div className="flex w-full flex-col mb-4 align-left text-left">

<label className="mb-1">Occasion</label>
<Controller
        name="occasion"
        control={control}
        rules={{ required: 'Please pick an occasion' }}
        render={({ field }) => (
          <div>
            <div className="flex justify-between">
              {OCCASION_OPTIONS.map(opt => {
                const isSelected = field.value === opt;
                return (
                  <div
                    key={opt}
                    onClick={() => field.onChange(opt)}
                    className={[
                      
                      'text-sm cursor-pointer w-32 py-5  px-4 bg-primary-dark font-semibold rounded-md text-center',
                      '',
                      !isSelected ? 'border-emerald-600 border-2  bg-white text-emerald-600' : 'text-primary-medium ',
                    ].join(' ')}
                  >
                    {opt}
                  </div>
                );
              })}
            </div>
            {errors.occasion && (
              <p className="mt-1 text-xs text-red-600">{errors.occasion.message}</p>
            )}
          </div>
        )}
      />
</div>

      <div className="  flex flex-col text-left justify-left items-left mb-4 ">
        <label className="mb-1">Service</label>
    
          <Controller
        name="service"
        control={control}
        rules={{ required: 'Please pick a service' }}
        render={({ field }) => (
          <div>
            <div className="flex justify-between">
              {SERVICE_OPTIONS.map(opt => {
                const isSelected = field.value === opt;
                return (
                  <div
                    key={opt}
                    onClick={() => field.onChange(opt)}
                    className={[
                      
                      'text-sm cursor-pointer w-32 py-5 px-4 flex   font-semibold rounded justify-center items-center text-center',
                      'bg-primary-dark',
                      !isSelected ? 'bg-white border-2 border-emerald-600  text-emerald-600': 'text-primary-medium ',
                    ].join(' ')}
                  >
                   <p className='text-center'>{opt}</p> 
                  </div>
                );
              })}
            </div>
            {errors.service && (
              <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>
            )}
          </div>
        )}
      />
</div>


     

     <div  className="flex w-full flex-col mb-4 align-left text-left">
      <label className='mb-2'>Instructions</label>
    <textarea
    {...register('instructions')}
    placeholder='Add some instructions...'
    className=' p-2 border-2 rounded-md border-ternary-medium'></textarea>
     </div>
      
      

      <button  className='submit-btn'
        type="submit"

      >
        Submit Booking
      </button>
    
   
    </form>
</div>

      }
  </div>
      
);
};

export default NewBooking;