import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom' // Ensure 'react-router-dom' is used
import { account } from '../lib/client'

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await account.get()
                setIsLoading(false)
            } catch (e) {
                console.error("Auth check failed:", e)
                navigate("/sign-in", { replace: true })
            }
        }
        checkAuth()
    }, [navigate])

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <p>Loading...</p>
                {/* You can replace this with a Spinner component */}
            </div>
        )
    }

    return <Outlet />
}

export default Layout
