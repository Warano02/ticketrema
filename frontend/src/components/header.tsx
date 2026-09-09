import Image from 'next/image'
import { CircleUserRound, UsersRound, Bell, Heart, Search, SlidersHorizontal, TextAlignJustify, MapPin, ChevronDown } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import Flag from 'country-flag-icons/react/3x2/AC'
import { US } from 'country-flag-icons/react/1x1'




export default function Header() {
  return (
    <>
      <div className='flex justify-between  bg-[#f5f5f5] h-12'>
        <div className='flex mx-6'>
          <MapPin className='mt-3'/>
          <select>
            <option value=""> 
              Cote d'ivoir
            </option>
            <option value="">
              Guinee</option>
            <option value="">Cameroun</option>
            <option value="">Gabon</option>
            <option value="">Senegal</option>
            <option value="">Mali</option>
            <option value="">Burkina Faso</option>
            <option value="">Togo</option>
            <option value="">Benin</option>
            <option value="">Autre Pays</option>

          </select>
          {/* <ChevronDown /> */}
        </div>
        <div className='flex gap-3 mx-6 mt-3'>
          <FaFacebook/>
          <FaInstagram/>
          <FaTiktok/>
          <FaLinkedin/>
        </div>

      </div>
      <div className='shadow-2xl h-17 border'>
        <div className='flex justify-between bg-white'>
          <div>
            <Image src="/logo.png" alt='Logo' width={130} height={130} className='mt-4' />
          </div>
          <button className='absolute ml-70 mt-3'>
            <SlidersHorizontal className='bg-[#f0151f] font-black text-white w-9 h-9 rounded-[12px] flex justify-center items-center' />
          </button>

          <input type="search" name="" id="" className='mt-2 relative  border border-black flex justify-center gap-1.25 items-center focus:outline-none  w-150 h-12 rounded-[12px] pl-12 ' />
          <button className='absolute ml-208 mt-3'>
            <Search className='bg-[#f0151f] text-white rounded-[12px]  w-9 h-9 shadow-2xs ' />
          </button>
          <button className='text-white rounded-4xl bg-[#f0151f] h-10 w-50 mt-3'>Publier un evenement</button>

          <div className='flex space-x-4 '>
            <button>

              <UsersRound />
            </button>
            <button><Bell /></button>
            <button><Heart /></button>
            <button className='flex mt-4'>
              <TextAlignJustify />
              <CircleUserRound />
            </button>
          </div>
        </div>
      </div>

    </>

  )
}
