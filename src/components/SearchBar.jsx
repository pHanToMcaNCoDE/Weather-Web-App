import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";

const SearchBar = ({search, setSearch, searchData}) => {
  return (
    <div className='border-4 border-[#000] flex flex-row items-center gap-x-6 w-[70%] lg:w-[50%] bg-blue-50 mx-auto my-6 px-2 py-3 rounded-full'>
        <MdOutlineLocationOn className='text-blue-300' size={28}/>
        <input className='w-[90%] bg-transparent flex flex-row justify-center items-center text-[1rem] font-mono text-slate-500 outline-none placeholder:text-[#999]' value={search} onChange={(e) => setSearch(e.target.value)} type='text' onKeyDown={searchData} placeholder='Search for a City or Country...'></input>
    </div>
  )
}

export default SearchBar
