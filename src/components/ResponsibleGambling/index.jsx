import React from 'react'
import TitleCard from './TitleCard';
import Card from './Card';
import Footer from '../Footer';
import Nav from '../Nav';

const ResponsibleGambling = () => {
  const infoData = [
    {title: "Deposit Limits", info:"Set daily, weekly, or monthly limits on how much you can deposit into your account. This helps you manage your budget and prevents excessive spending"},
    {title: "Time Limits", info:"Set limits on how long you can play in a single session. Our system will notify you when you're approaching your time limit and will log you out when the limit is reached."},
    {title:"Self-Exclusion", info:"Temporarily or permanently exclude yourself from our platform if you feel you need a break from gambling. During this period, you won't be able to access your account or receive marketing communications."},
    {title:"Reality Checks", info:"Set up notifications that will appear at regular intervals during your play, showing how long you've been playing and your net wins or losses for the session."}

  ]
  const supportData = [
    {
      title:"Gambling Help Online",
      description:"24/7 free and confidential counseling service for people affected by gambling.",
      phone:"1800 858 858",
      website:"https://www.gamblinghelponline.org.au/"
    },
    {
      title:"Gamblers Anonymous Australia",
      description:"A fellowship of men and women who share their experience, strength, and hope with each other to solve their common problem and help others recover from a gambling problem.",
      phone:"",
      website:"https://www.gansw.org.au/"
    },
    {
      title:"GambleAware",
      description:"Provides information, resources, and support for those affected by problem gambling.",
      phone:"1800 858 858",
      website:"https://www.gambleaware.nsw.gov.au/"
    },
    

  ]
  return (
    <>
      <Nav/>
      <div className='p-5  lg:w-3/4 lg:mx-auto'>
        <TitleCard />
        <div className='content'>
          <Card
            title="Our Commitment to Responsible Gambling"
            content={
              <>
                <h6 className='text-sm font-semibold mt-4'>At Lottery Drops, we believe that gambling should always be an enjoyable form of entertainment. We are committed to promoting responsible gambling and providing a safe, secure, and supportive environment for all our players.</h6>
                <h6 className='text-sm font-semibold mt-4'>We recognize that for some individuals, gambling can become a problem. That’s why we've implemented various measures and tools to help our players stay in control of their gambling activities and make informed decisions</h6> 
                <div className='bg-[#EEF6FF] rounded-xl border-l-5 border-[#064A8F] p-4 mt-5'>
                  <h1 className='text-[#0B4D91] text-2xl leading-tight font-bold'>Our Responsible Gambling Principles</h1>
                  <ul className='list-disc ml-6 mt-3'>
                    <li className='text-sm font-semibold mt-4'>Preventing underage gambling (18+ only)</li>
                    <li className='text-sm font-semibold mt-4'>Providing transparent information about games and odds</li>
                    <li className='text-sm font-semibold mt-4'>Offering tools to help players manage their gambling</li>
                    <li className='text-sm font-semibold mt-4'>Training our staff to recognize signs of problem gambling</li>
                    <li className='text-sm font-semibold mt-4'>Supporting research and treatment for problem gambling</li>
                    <li className='text-sm font-semibold mt-4'>Promoting a balanced approach to gambling as entertainment</li>
                  </ul>
                </div>
                
              </>
            }
          />

          <Card
            title="Is Your Gambling Still Fun?"
            content={
              <>
                <h6 className='text-sm font-semibold mt-4'>Gambling should be an enjoyable leisure activity. If you're concerned about your gambling habits, ask yourself these questions:</h6>
                <ul className='list-disc ml-6 mt-3'>
                  <li className='text-sm font-semibold mt-4'>Do you gamble to escape from problems or to relieve feelings of helplessness, anxiety, or depression??</li>
                  <li className='text-sm font-semibold mt-4'>Have you ever lied to family or friends about how much you gamble or how much money you've spent gambling?</li>
                  <li className='text-sm font-semibold mt-4'>Do you find yourself trying to win back money you've lost (chasing losses)?</li>
                  <li className='text-sm font-semibold mt-4'>Have you tried to cut down or stop gambling but found you couldn’t?</li>
                  <li className='text-sm font-semibold mt-4'>Have you ever gambled more than you intended to or spent more time gambling than you planned?</li>
                  <li className='text-sm font-semibold mt-4'>Has gambling negatively affected your relationships, job, studies, or financial situation?</li>
                </ul>
                <h6 className='text-sm font-semibold mt-4'>
                    If you answered "yes" to any of these questions, your gambling habits might be becoming problematic. We encourage you to use our responsible gambling tools or seek professional help.
                </h6>
                <div className='bg-[#FFF8E6] rounded-xl border-l-5 border-[#F0C14B] p-4 mt-5 '>
                  <h6 className='text-sm font-semibold'>
                    Remember, recognizing that you may have a problem is the first step toward regaining control 
                  </h6>
                </div>
                
              </>
            }
          />

          <Card
            title="Our Responsible Gambling Tools"
            content={
              <>
                <h6 className='text-sm font-semibold mt-4'>We provide several tools to help you manage your gambling and stay in control:</h6>
                {infoData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#EEF6FF] rounded-xl border-l-4 border-[#064A8F] p-4 mt-5"
                    >
                    <h1 className="text-[#0B4D91] text-2xl leading-tight font-bold">
                      {item.title}
                    </h1>
                    <h6 className="text-sm font-semibold mt-4">
                      {item.info}
                    </h6>
                  </div>
                ))} 
                <h6 className='text-sm font-semibold mt-4'>To access these tools, log in to your account and visit the “Responsible Gambling” section in your account settings. If you need assistance setting up any of these tools, our customer support team is available 24/7 to help.</h6>     
                
              </>
            }
          />

          <Card
            title="Support and Resources"
            content={
            <>
            <h6 className='text-sm font-semibold mt-4'>We provide several tools to help you manage your gambling and stay in control:</h6>
            {infoData.map((item, index) => (
              <div
                key={index}
                className="bg-[#EEF6FF] rounded-xl border-l-4 border-[#064A8F] p-4 mt-5"
                >
                <h1 className="text-[#0B4D91] text-2xl leading-tight font-bold">
                  {item.title}
                </h1>
                <h6 className="text-sm font-semibold mt-4">
                  {item.info}
                </h6>
              </div>
            ))} 
            <h6 className='text-sm font-semibold mt-4'>To access these tools, log in to your account and visit the “Responsible Gambling” section in your account settings. If you need assistance setting up any of these tools, our customer support team is available 24/7 to help.</h6>     
           </>
            }
          />
          <Card
            title="Support and Resources"
            content={
              <>
                <h6 className='text-sm font-semibold mt-4'>If you or someone you know is struggling with gambling problems, help is available. The following organizations provide free, confidential support and counseling services:</h6>
                {supportData.map((item, index) => (
                  <div
                    key={index}
                    className=" rounded border-gray-400 shadow-lg p-4 mt-5"
                    >
                    <h1 className="text-[#0B4D91] text-xl leading-tight font-bold">
                      {item.title}
                    </h1>
                    <h6 className="text-sm font-semibold mt-4">
                      {item.description}
                    </h6>
                    <h6 className="text-sm font-semibold">
                      Phone: <span className='text-blue-600 underline'>{item.phone}</span>
                    </h6>
                    <h6 className="text-sm font-semibold">
                      Website: <a className='text-blue-600 underline' href={item.website} target="_blank" rel="noopener noreferrer">{item.website.replace(/^https?:\/\//, "")}</a>
                    </h6>
                  </div>
                ))} 
              </>
            }
          />
          <Card
            title="Protecting Minors"
            content={
              <>
                <h6 className='text-sm font-semibold mt-4'>lightlottery Australian Lottery is strictly for individuals aged 18 and over. We take our responsibility to prevent underage gambling very seriously and have implemented several measures to protect minors:</h6>
                <ul className='list-disc list-inside'>
                  <li className='text-sm font-semibold lg:text-bold mt-4'>Age verification checks during the registration process.</li>
                  <li className='text-sm font-semibold lg:text-bold mt-4'>Ongoing monitoring of player activity to identify and prevent underage gambling.</li>
                  <li className='text-sm font-semibold lg:text-bold mt-4'>“18+” labeling on all our materials</li>
                  <li className='text-sm font-semibold lg:text-bold mt-4'>Parental control information to help parents protect their children</li>
                  <li className='text-sm font-semibold lg:text-bold mt-4'>Collaboration with relevant authorities and organizations to promote responsible gambling.</li>
               </ul>
              <div className='bg-[#FFF8E6] rounded-xl border-l-5 border-[#E76A6A] p-4 mt-5 '>
                <h1 className='text-xl font-bold text-[#E76A6A] '>Important Notice for Parents</h1>
                <h6 className='text-sm font-semibold mt-4'>
                  If you share your devices with children, we recommend installing parental control software to prevent them from accessing gambling websites. You should also ensure that your login details are kept secure and not accessible to minors.
                </h6>
              </div>
              </>
            }
          />
          
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default ResponsibleGambling;