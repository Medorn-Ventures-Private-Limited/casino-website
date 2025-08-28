import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#0B4D91] w-full px-4 pt-5 pb-20 text-white '>
        <div className=' lg:w-2/3 lg:mx-auto '>
            <div className=' flex flex-wrap gap-1 justify-center py-3 border-b-2 border-gray-400 lg:gap-10'>
            <Link  className="text-white cursor-pointer hover:underline text-sm font-bold">
                Privacy Policy
            </Link>
            <Link to="/" className="text-white  hover:underline text-sm font-bold">
                Terms & Conditions
            </Link>
            <Link to="/" className="text-white cursor-pointer hover:underline text-sm font-bold">
                Cookies Policy
            </Link>
            <Link to="/responsible-gambling" className="text-white cursor-pointer hover:underline text-sm font-bold">
                Responsible Gambling
            </Link>
            </div>
            <div className=' py-4 text-center border-b-2 border-gray-400'>
                <h6 className='text-sm opacity-75'><span className='font-bold'>Donald Lottery Services Pty Ltd</span> (ABN 38 756 494 021) owns the intellectual property for the contents of this website. Any unauthorised copying or other misuse will be prosecuted.</h6>
                <h6 className='text-sm opacity-75'>® Registered trade mark / ™ trade mark of Donald Lottery Services Pty Ltd.</h6>
                <h6 className='text-sm opacity-75 '>Not all lottery tickets are winners – whether you win and how much you win is a matter of chance. Donald Lottery Services is not affiliated with the overseas lottery operators from which it purchases matching tickets.</h6>
                <h6 className='text-sm opacity-90 font-bold mt-2'>Think! About your choices. Play smart, gamble responsibly.</h6>
                <h6 className='text-sm opacity-75 mt-1'>Help is available 24 / 7: <span className='text-blue-500 underline'>Gambling Help 1800 858 858 | GambleAware</span></h6>
                <h6 className='text-sm opacity-75 mt-1'> <span className='font-bold'>BetStop – The National Self-Exclusion Register</span> is a free service that lets you exclude yourself from all licensed online wagering providers. Learn more at betstop.gov.au.</h6>
                <h6 className='text-sm opacity-75 mt-1'>Donald Lottery Services operates under a licence issued by the Australian Government and is regulated by the Australian Communications and Media Authority (ACMA). We are committed to responsible gambling and enforce a monthly deposit limit of AUD 1,000</h6>
                <h6 className='text-sm opacity-90 font-bold mt-1'>Persons under 18 years of age are not permitted to gamble.</h6>
                <h6 className='text-sm opacity-75 italic mt-3'>* All prize amounts are quoted in AUD and rounded for visual purposes. Overseas jackpots are advertised as the annuity amount and may be subject to local taxes. A lump-sum option would generally be less. Figures over USD 600 are subject to US tax.
                  ** The number of winners listed for each prize division includes Donald Lottery Services winners as well as winners of the corresponding overseas lotteries.</h6>

            </div>
           
   
            <div className='border-b border-gray-400 p-4 flex flex-col lg:flex-row lg:gap-10 justify-center gap-4 items-center'>
              <a href="https://www.resetgambling.org/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-12 w-auto object-contain filter grayscale brightness-85 hover:scale-110 transition-transform duration-300"
                  src="/images/reset.webp"
                  alt="Reset Logo"
                />
              </a>
              <a href="https://gamblinghelponline.org.au" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-12 w-auto object-contain filter grayscale brightness-75 hover:scale-110 transition-transform duration-300"
                  src="/images/gamblers.webp"
                  alt="Gamblers Logo"
                />
              </a>
              <a href="/responsible-gambling">
                <img
                  className="h-12 w-auto object-contain filter grayscale brightness-75 hover:scale-110 transition-transform duration-300"
                  src="/images/18.svg"
                  alt="18+ Logo"
                />
              </a>
              <a href="https://responsiblegambling.vic.gov.au/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-12 w-auto object-contain filter grayscale brightness-75 hover:scale-110 transition-transform duration-300"
                  src="/images/victoria.svg"
                  alt="Victoria Logo"
                />
              </a>

              <a href="https://www.gambleaware.nsw.gov.au/" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-12 w-auto object-contain filter grayscale brightness-75 hover:scale-110 transition-transform duration-300"
                  src="/images/gamble.webp"
                  alt="Gamble Logo"
                />
              </a>
            </div>
          </div>
        <h4 className='text-center text-sm font-bold pt-2'>© Copyright Lottery Drops</h4>
     </div>
  )
}

export default Footer