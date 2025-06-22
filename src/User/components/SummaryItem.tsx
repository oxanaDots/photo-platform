import React from 'react';

interface SummaryitemsProps{
    value: number;
    label: string;
    unpaid: boolean
}

function SummaryItem({value, label, unpaid}: SummaryitemsProps) {
  return (
     <div className='flex flex-col justify-center gap-3  items-center py-4 px-6 bg-ternary-light rounded-md '>
               <h2 className='font-semibold text-primary-dark'>{value}</h2>
               <p className={`text-xs ${unpaid ?  'text-red-600': 'text-primary-medium' } `}>{label}</p>
            </div>
  );
}

export default SummaryItem;