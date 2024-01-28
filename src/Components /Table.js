import React from 'react'
import { TableData } from '../UserData/TableData'
import { TbFileDownload } from "react-icons/tb";
import { IconContext } from 'react-icons';
import savee from '../Assets/savee.svg'

const Table = () => {
  return (
    <div className='border border-back py-6 px-4 rounded-xl h-full  font-sans bg-white overflow-hidden dark:text-white dark:bg-dark dark:border-none'  >
        <div className='flex justify-between'>
            <p className='text:xs font-semibold lg:text-lg'>Last Orders</p>
            <p className='text-[#34CAA5]'>See all</p>
        </div>

        <div className='w-[100%] lg:w-full lg:text-sm text-[9px] overflow-scroll lg:overflow-auto'>
            <table className='table-auto w-[400px] font-sans dark:bg-transparent overflow-scroll' >
                <thead className=' border-b border-back text-[#9CA4AB] dark:border-[#e5eaef45]'>
                    <tr className='text-left'>
                        <th className='py-2 mr-2 w-1/2'>Name</th>
                        <th className=''>Date</th>
                        <th className=''>Amount</th>
                        <th className=''>Status</th>
                        <th className=' '>Invoice</th>
                    </tr>
                </thead>

                <tbody>
                    {TableData.map((data, index) => {
                        return(
                            <tr key={index} className='border-b border-back py-4 text-left dark:border-none'>
                                <td className='flex items-center justify-start p-0 lg:p-3 '>
                                    <img src={data.image} className='mr-2 py-2 lg:py-0 rounded-[50%] w-[30px] h-[45x]' />
                                    {data.name}
                                </td>
                                <td className='text-[#737373] font-thin'>{data.date}</td>
                                <td >{data.Amount}</td>
                                <td className={data.status === "Paid" ? 'text-[#34CAA5]' : "text-[#ED544E]"}>{data.status}</td>
                                <td >
                                    <div className='flex items-center'>
                                        <img src={savee} className='mx-2'/>
                                        <p className='font-sm'>View</p>
                                    </div>
                                    
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