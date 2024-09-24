"use client"

import { getUserInfo } from '@/utils/local-storage'
import { useRouter } from 'next/navigation'
import React from 'react'

const AuthLayout = ({children}:{children: React.ReactNode}) => {
    const currentUser = getUserInfo()
    const router = useRouter()
    if(!currentUser)router.push('/login')
    
    return (
        children
    );
};

export default AuthLayout;