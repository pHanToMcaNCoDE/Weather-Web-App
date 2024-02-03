import { useState } from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import Display from './components/Display'

function App() {
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${search},${search}&units=imperial&appid=9607c543a41ee8b0690372c8d642778c`;

  const searchData = (e) => {
    if(e.key === 'Enter'){
      try{
        axios.get(baseURL).then((response) => {
          setData(response.data)
          console.log(response.data)
        })
      }catch (err){
        console.log('Error', err)
      }
      setSearch('')
    }
  }



  return (
    <div className=' bg-amber-50'>
      <div className='max-w-[1200px] p-2 mx-auto'>
        <SearchBar search={search} setSearch={setSearch} searchData={searchData} />
        <Display data={data} />
      </div>  
    </div>
  )
}

export default App
