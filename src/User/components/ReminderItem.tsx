import React from 'react';

interface ReminderItemProps{
    bookingNumber: string;
    reminderStatus: string;
    buttonTitle: string
}

function ReminderItem({bookingNumber, reminderStatus, buttonTitle}: ReminderItemProps) {
  return (
    <div className={`
    ${reminderStatus == 'Media is ready to download' || reminderStatus == "Upcoming" ? 'border-y border-emerald-500':'border-y border-red-500'}
    flex text-xs justify-between items-center  bg-ternary-light py-4 px-6`}>
        <p className='font-semibold text-secondary-medium'>Booking {bookingNumber}</p>
        <p>{reminderStatus}</p>
        <div className='flex flex-col gap-1.5 w-[19%]'>
            <button className='bg-primary-dark text-secondary-light py-1.5 px-3 rounded-full'>{buttonTitle}</button>
            { reminderStatus == 'Upcoming' ?<button className=' border border-primary-dark text-primary-dark py-1.5 px-3 rounded-full'>Cancel</button> : null}

        </div>
      
    </div>
  );
}

export default ReminderItem;