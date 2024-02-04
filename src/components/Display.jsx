import React from 'react'
import rain from '../assets/Animation - 1706948437304.gif'
import dust from '../../public/Animation - 1706917123922 (1).gif'
import clear from '../assets/Animation - 1706946831575.gif'
import cloud from '../assets/Animation - 1706948572084.gif'
import wind from '../assets/Animation - 1706948540158.gif'
import snow from '../assets/Animation - 1706949045293.gif'
import mist from '../../public/Animation - 1706921287884.gif'
import haze from '../../public/Animation - 1706922018036.gif'
import img from '../../public/Animation - 1706923658631.gif'
import { FiWind } from "react-icons/fi";
import { TiThermometer } from "react-icons/ti";
import { BsDroplet } from "react-icons/bs";


const Display = ({data}) => {
  return (
    <div className='w-full lg:w-[80%] mx-auto h-[85vh] flex flex-row lg:flex-col font-mono tracking-widest justify-between items-center px-4 gap-4'>


      {/* top */}
        <div className='w-[65%] lg:w-[94%] h-[48vh] py-3 bg-[#000] translate-y-[8%] translate-x-4 relative mt-8'></div>
      <div className='z-20 p-3 flex flex-col justify-between items-center mt-8 w-[60%] h-[50%] bg-orange-200 border-4 border-[#000] absolute'>
        {
            data.name ? <p className='font-mono tracking-wider text-xl leading-normal'>{data.name}</p> : 'Country/City'
        }
        {/* <p className='font-mono tracking-wide text-xl'>{data.name}</p> */}
        {
            data.main ? <h1 className='text-5xl lg:text-7xl tracking-wider font-mono text-slate-500 py-4 leading-[3rem]'>{data.main.temp}°F</h1> : <h1 className='text-5xl lg:text-7xl tracking-wider font-mono text-slate-500 py-4 leading-[3rem]'>+20°F</h1>
        }

        <div className='py-6 bg-[#fff] rounded-full w-[12rem] h-[12rem] px-2 border-2 border-[#000] flex justify-center items-center'>
            {
                data.weather ?
                // dust
                data.weather[0].main === 'Dust' ? <img className='w-[10em] h-[10em] object-cover' src={dust} alt='Dust'></img> : 
                // sun or clear
                data.weather[0].main === 'Clear' ? <img className='w-[10em] h-[10em] object-cover' src={clear} alt='Clear'></img> : 
                // cloud
                data.weather[0].main === 'Clouds' ? <img className='w-[10em] h-[10em] object-cover' src={cloud} alt='Cloud'></img> : 
                // snow
                data.weather[0].main === 'Snow' ? <img className='w-[10em] h-[10em] object-cover' src={snow} alt='Snow'></img> : 
                // rain
                data.weather[0].main === 'Rain' ? <img className='w-[10em] h-[10em] object-cover' src={rain} alt='Rain'></img> : 
                // wind
                data.weather[0].main === 'wind' ? <img className='w-[10em] h-[10em] object-cover' src={wind} alt='Wind'></img> : 
                // mist
                data.weather[0].main === 'Mist' ? <img className='w-[10em] h-[10em] object-cover' src={mist} alt='Mist'></img>:
                // haze
                data.weather[0].main === 'Haze' ? <img className='w-[10em] h-[10em] object-cover' src={haze} alt='Mist'></img> : '' : <img className='w-[10em] h-[8em] object-cover' src={img} alt='Display'></img>
            }
            
        </div>
        {
            data.weather ? <p className='font-mono tracking-wider text-xl leading-normal'>{data.weather[0].main}</p> : 'Weather'
        }
      </div>

      {/* bottom */}
      <div className='h-[80%] lg:h-auto lg:w-[60%] mx-auto flex flex-col lg:flex-row justify-center lg:gap-x-[8em] gap-y-8 lg:gap-y-0 items-center p-3 bg-blue-50 border-4 border-[#000] my-3 rounded-[1em]'>
        <div className='flex flex-col items-center'>
            <FiWind className='text-blue-400' size={30}/>
            <p className='font-mono tracking-wide text-[1.1rem]'>Wind</p>
            {
                data.wind ? <h3 className='text-[.85rem] tracking-wider font-mono text-slate-700'>{data.wind.speed} Mph</h3> : '0 Mph'
            }
        </div>
        <div className='flex flex-col items-center'>
            <TiThermometer className='text-blue-400' size={30}/>
            <p className='font-mono tracking-wide text-[1.1rem]'>Pressure</p>
            {
                data.main ? <h3 className='text-[.85rem] tracking-wider font-mono text-slate-700'>{data.main.pressure} mb</h3>: '0 mb'
            }
        </div>
        <div className='flex flex-col items-center'>
            <BsDroplet className='text-blue-400' size={30}/>
            <p className='font-mono tracking-wide text-[1.1rem]'>Humidity</p>
            {
                data.main ? <h3 className='text-[.85rem] tracking-wider font-mono text-slate-700'>{data.main.humidity}%</h3> : '0%'
            }
        </div>
      </div>
    </div>
  )
}

export default Display
