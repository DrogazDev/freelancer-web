import LoginButton from './LoginAndLogoutButton'

const TopBar = () => {
    return (
        <header>
            <div className="topbar w-full h-[4rem] dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-700 bg-gradient-to-r from-green-400 to-green-800">
              <div className="container mx-auto flex justify-between items-center h-full">
                <p className='title text-3xl dark:text-black text-white' >FreeLancer</p>
                <div className="flex items-center">
                  <p className='text-white mr-4'>Home</p>
                  <p className='text-white mr-4'>About</p>
                  <p className='text-white mr-4'>Contact</p>
                  <LoginButton/>
                </div>
              </div>
            </div>
            <div>
                <div className="pt-[10rem] px-12 mx-auto max-w-7xl">
                    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal dark:text-white text-black md:text-6xl md:tracking-tight">
                            <span >Start</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-700 bg-gradient-to-r from-green-400 to-green-800 lg:inline">hunting jobs</span> <span>with your skills</span>
                        </h1>
                        <p className="px-0 mb-8 text-lg dark:text-gray-300 md:text-xl lg:px-24">
                            Start gaining the traction you've always wanted with our next-level templates and designs. Crafted to help you tell your story.
                        </p>
                        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                                Get Started
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0">
                                Learn More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="w-full mx-auto mt-20 text-center md:w-10/12">
                        <div className="relative z-0 w-full mt-8">
                            <div className="relative overflow-hidden shadow-2xl">
                                <div className="flex items-center flex-none px-4 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-700 bg-gradient-to-r from-green-400 to-green-800 rounded-b-none h-11 rounded-xl">
                                    <div className="flex space-x-1.5">
                                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                                    </div>
                                </div>
                                {/* <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg"> */}
                                <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopBar