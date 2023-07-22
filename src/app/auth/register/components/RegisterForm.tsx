import SignInGitHub from "./buttons/SignInGitHub"
// import SignInGoogle from "./buttons/SignInGoogle"
// import SignInLinkedIn from "./buttons/SignInLinkedIn"

const RegisterForm = () => {
    return (
  <div className="flex min-h-screen bg-white dark:bg-black">

    <div className="flex flex-row w-full">

      <div className='hidden lg:flex flex-col justify-between dark:bg-[#121981] bg-[#88ff73] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
        <div className="flex items-center justify-start space-x-3">
          {/* <span className="bg-black rounded-full w-8 h-8"></span> */}
          <img src="https://static.thenounproject.com/png/4862307-200.png" className="rounded-full p-1 w-20 h-20" alt="" />
          <a href="#" className="font-bold text-3xl">{process.env.COMPANY_NAME}</a>
        </div>
        <div className='space-y-5'>
          <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Sign up today and explore all we have to offer.</h1>
          <p className="text-lg">Already have an account?</p>
          <a href="../auth/login"
            className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium dark:border-black dark:bg-black dark:text-white border-white bg-white text-black">Login</a>
        </div>
        <a href="https://github.com/DrogazDev" className="font-medium">{process.env.COPYRIGHT_TEXT}</a>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
        <div className="flex lg:hidden justify-between items-center w-full py-4">
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-6 h-6"></span>
            <a href="#" className="font-medium text-lg">Brand</a>
          </div>
          <div className="flex items-center space-x-2">
            <span>Not a member? </span>
            <a href="#" className="underline font-medium text-[#070eff]">
              Sign up now
            </a>
          </div>
        </div>
        <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Create an account</h2>
            <p className="text-md md:text-xl text-black dark:text-white">Sign Up with a email and password, or use our OAuth Integrations</p>
          </div>
          <div className="flex flex-col max-w-md space-y-5">
            <input type="text" placeholder="Username" name="username"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black dark:border-white dark:bg-black rounded-lg font-medium placeholder:font-normal" />
            <input type="password" placeholder="Password" name="password"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black dark:border-white dark:bg-black rounded-lg font-medium placeholder:font-normal" />
            <input type="password" placeholder="Repeat Password" name="repeat-password"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black dark:border-white dark:bg-black rounded-lg font-medium placeholder:font-normal" />
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium dark:border-white dark:bg-black dark:text-white border-black bg-white text-black">Sign Up</button>
            <div className="flex justify-center items-center">
              <span className="w-full border border-black dark:border-white"></span>
              <span className="px-4 text-black dark:text-white">Or</span>
              <span className="w-full border border-black dark:border-white"></span>
            </div>
            {/* <SignInGoogle/> */}
            {/* <SignInLinkedIn/> */}
            <SignInGitHub/>
            {/* https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png */}
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default RegisterForm