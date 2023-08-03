import Image from 'next/image'

export const metadata = {
  title: 'About Me',
  description: 'This is my portfolio Website for about me.',
}


const data=[
  {
    para :'We are a passionate team of front-end developers, driven by a shared vision to create exceptional web experiences. Our journey began with a love for coding, design, and technology, and over the years, we\'ve honed our skills to become experts in crafting intuitive and visually appealing user interfaces.'
  },
  {
    para :'Our dedication to staying ahead in the ever-evolving tech landscape fuels us to constantly learn and embrace cutting-edge technologies. From HTML, CSS, and JavaScript to frameworks like React, Angular, and Vue.js, we possess a versatile skillset that enables us to adapt to any project\'s requirements.'
  },
  {
    para :'Collaboration is at the heart of our work ethos. We thrive on open communication and believe in leveraging the collective genius of our team. We work hand-in-hand with designers, back-end developers, and stakeholders to transform ideas into tangible, user-centric products that delight users.'
  },
  {
    para :'Usability and accessibility are paramount in our approach. We meticulously ensure that our applications are intuitive, inclusive, and responsive across various devices and browsers, catering to a diverse audience..'
  },
  {
    para :'Beyond just writing code, we are problem solvers. We love tackling challenges and finding innovative solutions. Our analytical mindset enables us to identify potential bottlenecks, optimize performance, and enhance the overall user experience.s.'
  },
  {
    para :'While we relish new projects, we also take pride in the relationships we build with our clients. We strive to understand their unique needs and aspirations, creating tailor-made solutions that align with their goals.'
  },
  {
    para :'Continuous improvement is ingrained in our DNA. We actively seek feedback, conduct code reviews, and engage in workshops to grow both as individuals and as a team. This dedication to excellence reflects in the quality of our work..'
  },
  {
    para :'Passion drives our work, but integrity defines our character. We are committed to delivering projects on time, within budget, and with the utmost professionalism. Trust is the foundation of our client relationships, and we hold ourselves accountable to the highest standards.'
  },
  
]

export default function About() {
 
  return (
    <div className=''>
      <div className='w-full h-[350px] relative'>
        <Image  loading='eager' priority src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_640.jpg" fill={true} alt='viaksh' className='object-cover' />
        <div className='absolute bottom-5 left-7  bg-green-100 shadow-lg rounded-sm px-5 py-3 w-[300px] md:w-[400px] '>
          <h1 className='text-2xl'>Digital Storytells</h1>
          <p className='xl'>Handcrafting award winniing digital experience.</p>
        </div>
      </div>
      <div className='flex flex-col gap-10 px-5 pt-7  md:flex-row md:gap-28 md:pt-10 even:bg-green-100'>
        <div className='flex-1'>
          <h1 className="text-3xl md:text-5xl mb-7 text-green-800">Who are We?</h1>
          {
            data.map((value,index)=> <h1 className='text-xl py-4 px-2 odd:bg-yellow-300 even:bg-green-400' key={index}>{value.para} </h1> )
          }
        </div>
        <div className='flex-1'>
          <h1 className="text-3xl mb-7 md:text-5xl text-green-800">What we do?</h1>
          <p>As front-end developers, we know that the user interface is the gateway to a successful application. Our goal is to create seamless and delightful user experiences that leave a lasting impression and foster brand loyalty. </p> 
          <ul className='mt-3'>
            <li>-Dynamic website</li>
            <li>-Fast and Handy</li>
            <li>-Mobile apps</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
