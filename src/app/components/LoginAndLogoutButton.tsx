"use client"

import { Client, Account, ID } from 'appwrite';

const LoginButton = () => {

    return (
        <a href="../auth/login"
        className="dark:bg-[#000440] bg-green-500 text-white px-4 py-2 rounded-md">Login</a>
    )
}

export default LoginButton