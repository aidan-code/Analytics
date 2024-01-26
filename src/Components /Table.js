import React from 'react'
import { TableData } from '../UserData/TableData'
import { TbFileDownload } from "react-icons/tb";
import { IconContext } from 'react-icons';
import savee from '../Assets/savee.svg'

const Table = () => {
  return (
    <div className='border border-back py-6 px-4 rounded-xl h-full font-sans bg-white'>
        <div className='flex justify-between'>
            <p className='font-semibold text-lg'>Last Orders</p>
            <p className='text-[#34CAA5]'>See all</p>
        </div>

        <div className='w-full'>
            <table className='table-auto w-full font-sans' >
                <thead className=' border-b border-back text-[#9CA4AB]'>
                    <tr className='text-left '>
                        <th className='py-2'>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th className='p-0'>Invoice</th>
                    </tr>
                </thead>

                <tbody>
                    {TableData.map((data, index) => {
                        return(
                            <tr key={index} className='border-b border-back py-4 text-left'>
                                <td className='flex items-center justify-start p-3'>
                                    <img src={data.image} className='mr-3'/>
                                    {data.name}
                                </td>
                                <td className='text-[#737373] font-thin'>{data.date}</td>
                                <td >{data.Amount}</td>
                                <td className={data.status === "Paid" ? 'text-[#34CAA5]' : "text-[#ED544E]"}>{data.status}</td>
                                <td className=' flex justify-start text-center w-auto p-0'>
                                    <img src={savee} className='mx-2'/>
                                    <p className='font-sm'>View</p>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            
            </table>
        </div>
    </div>
  )
}

export default Table