import MainLayout from '@/components/common/layout/main-layout'
import '@/styles/globals.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({ duration: 800 }) // Cấu hình AOS
    }, [])
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
