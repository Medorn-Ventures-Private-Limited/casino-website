import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import WinnersSwiper from "./Winners";
import ResultCard from "./ResultCard";
import InforCard from "./InforCard";
import Footer from "../Footer";
import RestructionPopup from "../RestructionPopup";

const Home = () => {
  const results1 = [
  { resultNo: 12 },
  { resultNo: 14 },
  { resultNo: 16 },
  { resultNo: 12 },
  { resultNo: 14 },
  { resultNo: 46 },
  { resultNo: 9 },
  { resultNo: 30 },

  ];
  const results2 = [
  { resultNo: 2 },
  { resultNo: 9 },
  { resultNo: 15},
  { resultNo: 23 },
  { resultNo: 4 },
  { resultNo: 8 },
  { resultNo: 52 },
  { resultNo: 63 },

  ];
  const infoData = [
    {title:"Licensed & Secure Online Lottery Play", text:"When playing online lotteries in Australia, always choose a licensed and secure provider. ACMA-licensed operators follow strict safety and regulatory standards to protect your data and ensure fair play. These providers also promote responsible gaming through features like deposit limits and breaks between draws. Playing with a licensed operator gives you peace of mind while enjoying the excitement of the lottery."},
    {title:"How Secure is lottery.com", text:"In the past, lottery regulations were managed by individual states, which meant online play was allowed in some areas but restricted in others. This changed with the Interactive Gambling Act, effective July 1, 2021, introducing nationwide rules for online gambling. Today, lotteries are legal across Australia, but operators must obtain a license from the Australian Communications and Media Authority (ACMA) to operate lawfully. Licensed providers must meet strict standards, including deposit limits of up to $1,000 per month, and some games require breaks between draws to encourage responsible play. While Australian players can enjoy a wide range of online lottery games, online casinos are still prohibited"},
    {title:"Responsible Gambling Matters", text:"Player safety is a top priority under Australia’s gambling regulations. To encourage responsible play, a $1,000 monthly deposit limit is enforced to prevent overspending. The OASIS system (Online Account Status Inquiry) protects individuals on self-exclusion lists, preventing them from signing up with other providers. The Interstate Gambling Supervision System monitors gambling activity, enforces limits, and detects early signs of risky behavior. If you or someone you know needs help, support services are available—call 1800 858 858 for assistance."}
  ]
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTimeLeft({
        days: now.getDate(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <Nav/>
    <div className="bg-[#e0aa5b] w-full p-4 lg:px-32 lg:py-10 ">
      
      <div className="lg:flex lg:gap-20 py-10">
        <div className="">
        <img className="h-48 w-50 " src="/images/vecteezy_isolated-casino-composition-for-design-element_8854495.png" alt="" />
        <h1 className="text-3xl text-[#064A8F] font-bold lg:text-6xl leading-tight">Play the Lottery, Live the Excitement </h1>
          <div className="pt-3  ">
            <h6 className="">The lottery is meant to be fun and exciting, not a way to make quick money. Play responsibly, avoid chasing losses, and never use money you can’t afford to lose—like funds for rent, bills, or essentials</h6>
            <h6 className="mt-2">Stay in control by monitoring your balance often. If you ever need to pause or seek guidance, don’t hesitate to contact the following support organizations.
            </h6>
            <h6 className="mt-2">
              Experience the thrill of the lottery and try your luck at every turn. Play responsibly, enjoy the excitement, and remember that every ticket is a chance to win
            </h6>
          </div>
          <div className="flex flex-wrap gap-6 lg:gap-10 mt-4 lg:mt-8">
            <a href="https://www.gamblinghelponline.org.au/" target="_blank" rel="noopener noreferrer">         
              <img
                className="h-12 w-auto object-contain"
                src="/images/gamblers.webp"
                alt="Gamblers Logo"
              />
            </a>
            <a href="https://www.gambleaware.nsw.gov.au/" target="_blank" rel="noopener noreferrer"> 
              <img
                className="h-12 w-auto object-contain"
                src="/images/gamble.webp"
                alt="Gamble Logo"
              />
            </a>
            <a href="https://www.resetgambling.org/" target="_blank" rel="noopener noreferrer"> 
              <img
                className="h-12 w-auto object-contain"
                src="/images/reset.webp"
                alt="Reset Logo"
              />
            </a>
          </div>
      </div>
      <div className="">
            <div className="bg-black lg:w-100 text-[#FFFFFF] flex flex-col items-center text-center rounded-4xl pt-5 pb-5 mt-10 lg:mt-2">
              <img className="h-40 w-40" src="/images\transparent-casino-roulette-wheel-cards-chips-slot-machine-casino-game-with-roulette-wheel-slot-machine65fa55d8ce10a2.62653453-removebg-preview.png" alt="" />
              <h1 className="text-2xl font-bold mt-6">Play Lucky Lotteries</h1>
              <h5 className="mt-3 text-sm opacity-85">Access exciting bonuses while enjoying <br /> the games you love!</h5>
              <button className=" bg-[#15D86F] px-20 py-3 m-5 text-2xl font-semibold rounded-4xl ">Buy Ticket</button>
              <div className="text-center text-xl font-semibold flex gap-4 lg:gap-7 mb-4">
                <div className="">
                  <h1 className="text-3xl font-bold">{timeLeft.days}</h1>
                  <h6 className="text-sm opacity-80 font-medium">DAYS</h6>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{timeLeft.hours}</h1>
                  <h6 className="text-sm opacity-80 font-medium">HOURS</h6>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{timeLeft.minutes}</h1>
                  <h6 className="text-sm opacity-80 font-medium">MINUTES</h6>
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{timeLeft.seconds}</h1>
                  <h6 className="text-sm opacity-80 font-medium">SECONDS</h6>
                </div>
              </div>
              <div className="flex gap-1">
                <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4caf50" d="M12 3l9 4v6c0 5-3.8 9.4-9 10-5.2-.6-9-5-9-10V7l9-4z"></path>
                    <path fill="#fff" d="M10.2 16.6l-3.2-3.2 1.4-1.4 1.8 1.8 4.6-4.6 1.4 1.4z"></path>
                </svg>
                <h6 className="text-sm">Safe & Secure</h6>
              </div>
              <h6 className="text-center text-sm mt-2 opacity-85">Official Home of AU Lotteries All transactions encrypted</h6>
              <div className="flex  gap-4 mt-2">
                <img className="h-16 w-12" src="/images/paypal.svg" alt="" />
                <img className="h-16 w-12" src="/images/master.svg" alt="" />
                <img className="h-16 w-12" src="/images/gpay.svg" alt="" />
                <img className="h-16 w-12" src="/images/visa.svg" alt="" />
              </div>

            </div>
          </div>
      </div>

      <div className="lg:py-20 py-10">
        <h1 className="text-center  text-3xl lg:text-4xl font-bold mb-10">Results</h1>
        <div className="lg:flex gap-8  lg:px-10">
          <ResultCard result={results1}/>
          <ResultCard result={results2}/>
        </div>
      </div>
      <div >
        <WinnersSwiper />
      </div>
      <div className="">
        <InforCard infoData={infoData}/>
      </div>
      <div>
        
      </div>


    </div>
    <Footer/>
    <RestructionPopup/>
    </>
  );
};

export default Home;