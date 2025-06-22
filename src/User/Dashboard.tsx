import React from 'react';
import Sidebarmenu from './Sidebarmenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import SummaryItem from './components/SummaryItem';
import ReminderItem from './components/ReminderItem';
function Dashboard() {
  return (
    <section className='flex py-10 justify-center px-5'>
    <div className="flex  w-[80%]  py-10 justify-center">
      <Sidebarmenu/>
      <div className='flex w-[100%] flex-col border-t border-l border-primary-dark py-12 px-14'>
        <div className=" flex flex-col gap-16">
      
           <section className='flex  items-center gap-4'>
            <div className='flex  grid-col-1 justify-center items-center w-[4rem] h-[4rem] bg-primary-dark rounded-full'>
              <FontAwesomeIcon className=' text-2xl text-secondary-light' icon={faUser}/>
            </div>
            <div className=' justify-center grid-col-2  text-left'>
               <h2 className=''>Name Surname</h2>
             <button className='mt-2 text-xs px-4 py-1 rounded-full border border-secondary-dark'>Edit</button>
            </div>
           </section>


          <div className='flex justify-between  gap-20'>
           <section className='flex flex-col gap-4'>
            <h2>Summary</h2>
          <div className='flex flex-col gap-4'>
            <SummaryItem label='Number of photos' value={122}  unpaid={false}/>
          <SummaryItem label='Number of photos' value={122} unpaid={false}/>
            <SummaryItem label='Unpaid invoices' value={2}  unpaid={true}/>
          </div>
           

           </section>

           <section className='flex flex-col w-[40vw] gap-4 '>
            <h2>My reminders and updates</h2>
            <div className='overflow-y-scroll h-[70%] always-scrollbar flex flex-col gap-4 pr-4 '>
            <ReminderItem bookingNumber={'#123'} 
            reminderStatus={'Upcoming'}
             buttonTitle={'View Details'}/>

              <ReminderItem bookingNumber={'#123'} 
            reminderStatus={'Media is ready to download'}
             buttonTitle={'Download'}/>

               <ReminderItem bookingNumber={'#123'} 
            reminderStatus={'Photographer cancelled'}
             buttonTitle={'View Details'}/>

                <ReminderItem bookingNumber={'#123'} 
            reminderStatus={'Payment is overdue'}
             buttonTitle={'Pay Now'}/>
             </div>
           </section>
           
           </div>
        </div>
          </div>
          </div>
    </section>
  );
}

export default Dashboard;