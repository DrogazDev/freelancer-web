"use client"

import { Client, Account, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject( '64ba34ef6cec08c45246' );               // Your project ID

const SignInGitHub = () => {
    return (
      <button className="flex items-center justify-center flex-none py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black dark:border-white relative">
        <span className="absolute left-4">
          <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" className="rounded-full" height="24px" width="24px" alt="" />
        </span>
        <span className="text-black dark:text-white" onClick={LoginOrRegister}>Sign in with GitHub</span>
      </button>
    )
}

const LoginOrRegister = () => {
  const account = new Account(client);

  account.createOAuth2Session('github', 'http://localhost:3000');
}

export default SignInGitHub