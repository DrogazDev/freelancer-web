"use client"

const SignInLinkedIn = () => {
    return (
        <button className="flex items-center justify-center flex-none py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black dark:border-white relative">
        <span className="absolute left-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" height="24px" width="24px" alt="" />
        </span>
        <span className="text-black dark:text-white">Sign in with LinkedIn</span>
      </button>
    )
}

export default SignInLinkedIn