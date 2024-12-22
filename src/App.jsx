import logo from './assets/logo1.png'
import microsoft from './assets/microsoft.svg'
import ge from './assets/ge.svg'
import netflix from './assets/netflix.svg'
import airbnb from './assets/airbnb.svg'
import google from './assets/google.svg'
import googlecloud from './assets/google-cloud.svg'
import stars from './assets/stars.png'

import tutek from './assets/tutek.png'
import mezun from './assets/mezun.png'
import pergar from './assets/pergar.png'
import saat from './assets/saat.png'

function App() {
 
  
        return (
    <>

    <header className='mt-[20px] mx-[100px]'>
      <div className='flex justify-between'>
      <img src={logo} alt='diamond' />
      <div className=''>
      <ul className='flex gap-9 items-center'>
      <li className='hover:text-[#9f2ce7] duration-150 cursor-pointer text-[#abadaf]'>Features</li>
      <li className='hover:text-[#9f2ce7] duration-150 cursor-pointer text-[#abadaf]'>Solution</li>
      <li className='hover:text-[#9f2ce7] duration-150 cursor-pointer text-[#abadaf]'>Reviews</li>
      <li className='hover:text-[#9f2ce7] duration-150 cursor-pointer font-semibold '>Premium <span className='text-[#8919cc] bg-[#fccafc] rounded-xl p-1 text-[10px]'>new</span></li>
      <button className='bg-[#9f2ce7] text-[#fff] p-2 rounded-3xl hover:px-5 duration-200 font-bold'>Get Started</button>
      </ul>
      
      </div>
      
        
      
      </div>
      
    </header>
    <main>
      <section className='relative pt-36 '>
        <p className='leading-none text-[75px] font-bold mx-[200px] text-center mt-[30px] '>Shaping a world with <span className='text-[#9f2ce7]'>reimagination.</span></p>
        <p className='text-[#777b89] text-center mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit <br /> illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
        
        
        
        <div className='flex justify-center items-center w-full gap-5 mt-16 '>
          <button className='bg-[#9f2ce7] text-[#f5e9fd] py-3 px-7 rounded-3xl font-bold hover:px-10 duration-200'>Get started</button>
          <button className='bg-[#f5e9fd] text-[#9f2ce7] py-3 px-7 rounded-3xl font-semibold hover:px-10 duration-200'>Learn more</button>
        </div>
        
        
        <div className='flex justify-center '>
          <div className='flex flex-col mt-16 py-8'>

            <div className='w-[1000px] h-[1px] bg-[#e9e9ec]'></div>

            <div className='flex gap-[200px] my-5 justify-center ' >
            <div><p className='text-[#333333] font-bold text-[20px]'>The lowest price</p><p className='text-[#757c87]'>Some text here</p></div>
            <div><p className='text-[#333333] font-bold text-[20px]'>The fastest on the market</p><p className='text-[#757c87]'>Some text here</p></div>
            <div><p className='text-[#333333] font-bold text-[20px]'>The most loved</p><p className='text-[#757c87]'>Some text here</p></div>
            </div>
            <div className='w-[1000px] h-[1px] bg-[#e9e9ec]'></div>

           
          </div>
        </div> 
        





        <div className='flex justify-center items-center gap-x-24'>
          <img className=' h-12 w-auto ' src={microsoft} alt="" />
          <img className=' h-12 w-auto' src={airbnb} alt="" />
          <img className=' h-9 w-auto' src={google} alt="" />
          <img className=' h-12 w-auto' src={ge} alt="" />
          <img className=' h-8 w-auto' src={netflix} alt="" />
          <img className=' h-7  w-auto' src={googlecloud} alt="" />
        </div>

        <div className='mt-[150px] ml-[200px]'>
          <img src={stars} alt="" />
          <p className='text-[#414959] text-[40px] font-bold '>A technology-first approach to <br /> payments and finance</p>
          <p className='text-[#5b6370]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad ipsum pariatur <br /> autem, fugit laborum in atque amet obcaecati? Nisi minima aspernatur, quidem nulla <br /> cupiditate nam consequatur eligendi magni adipisci.</p>
        </div>


        <div className=' mt-[100px] flex  justify-center border rounded-xl border-gray-100 mx-[150px] mb-[10px] duration-200'>

            <div className='group hover:shadow-2xl duration-200 border rounded-l-xl border-gray-100 p-12'>
            <img src={pergar} alt="" />
            <p className='group-hover:text-[#ff7616] text-xl font-semibold text-[#414959] mt-[15px]'>First feature</p>
            <p className='mt-[15px] text-[#656c78]'>Neque Dolor, fugiat non cum <br /> doloribus aperiam voluptates <br /> nostrum.</p>
            <p className='group-hover:text-[#ff7616] text-[#656c78] mt-4'>Read more</p>
            </div>
            <div className='group hover:shadow-2xl duration-200 border border-gray-100 p-12'>
            <img src={tutek} alt="" />
            <p className='group-hover:text-[#ff7616] text-xl font-semibold text-[#414959] mt-[15px]'>Second feature</p>
            <p className='mt-[15px] text-[#656c78]'>Neque Dolor, fugiat non cum <br /> doloribus aperiam voluptates <br /> nostrum.</p>
            <p className='group-hover:text-[#ff7616] text-[#656c78] mt-4'>Read more</p>
            </div>
            <div className='group hover:shadow-2xl duration-200 border border-gray-100 p-12'> 
            <img src={mezun} alt="" />
            <p className='group-hover:text-[#ff7616] text-xl font-semibold text-[#414959] mt-[15px]'>Third feature</p>
            <p className='mt-[15px] text-[#656c78]'>Neque Dolor, fugiat non cum <br /> doloribus aperiam voluptates <br /> nostrum.</p>
            <p className='group-hover:text-[#ff7616] text-[#656c78] mt-4'>Read more</p>
            </div>
            <div className='group hover:shadow-2xl duration-200 hover:bg-[#fff] border border-gray-100 p-14 rounded-r-xl bg-[#fafafc]'>
            <img src={saat} alt="" />
            <p className='group-hover:text-[#ff7616] text-xl font-semibold text-[#414959] mt-[15px]'>More features</p>
            <p className='mt-[15px] text-[#656c78]'>Neque Dolor, fugiat non cum <br /> doloribus aperiam voluptates <br /> nostrum.</p>
            <p className='group-hover:text-[#ff7616] text-[#656c78] mt-4'>Read more</p>
            </div>






        </div>

      </section>
    </main>

    </>
  )
}


export default App
