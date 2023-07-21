import Image from 'next/image'

export default function Home() {
  return (
    <header>
      <div className="topbar w-full h-[4rem] bg-[#000440]">
        <div className="container mx-auto flex justify-between items-center h-full">
          <p className='title text-3xl' >FreeLancer</p>
          <div className="flex items-center">
            <p className='text-white mr-4'>Home</p>
            <p className='text-white mr-4'>About</p>
            <p className='text-white mr-4'>Contact</p>
            <button className='bg-[#000440] border border-white text-white px-4 py-2 rounded-md'>Login</button>
          </div>
        </div>
      </div>
    </header>
    
  )
}
