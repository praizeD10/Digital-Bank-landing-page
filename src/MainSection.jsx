import React from 'react'

const MainSection = () => {
  return (
    <div className="bg-[#F3F4F6] py-20" >
      <div className='max-w-6xl mx-auto px-6 '>
        <div className='max-w-xl mb-14 '>
          <h1 className='text-3xl mb-8' >Why choose DigitalBank</h1>
          <p className='text-gray-500 leading-relaxed'>
              We leverage Open banking to turn your bank account into a financial hub.<br/>
              Control your finances like never before.
          </p>
        </div>

        <div className="flex justify-around gap-8">
          <div>
              <h3 className='text-xl text-[#2D314D] mb-4'>Online Banking</h3>
              <p className='text-gray-500 leading-relaxed'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </div>
          <div>
              <h3 className='text-xl text-[#2D314D] mb-4'>Simple Budgeting</h3>
              <p className='text-gray-500 leading-relaxed'>See exactly where your money goes each month. Receive notifications when you are close to hitting your limits.</p>
          </div>
          <div>
              <h3 className='text-xl text-[#2D314D] mb-4'>Fast Onboarding</h3>
              <p className='text-gray-500 leading-relaxed'>We don't do branches. Open your account in minutes online and start taking control of your finances right away</p>
          </div>
          <div>
              <h3 className='text-xl text-[#2D314D] mb-4'>Open API</h3>
              <p className='text-gray-500 leading-relaxed'>Manage your savings, investment, pension, and much more from one account. Tracking your money has never been easier.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
