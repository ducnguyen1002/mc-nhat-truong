'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/components/ui/headers/DesktopHeader'
import { handleScrollToSection } from '@/utils/scrollToSection'

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScroll = () => {
        const currentScrollY = window.scrollY

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false) // Cuộn xuống ẩn
        } else {
            setIsVisible(true) // Cuộn lên hiện
        }

        setLastScrollY(currentScrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <div
            className={`fixed left-0 top-0 z-[1000] w-full transition-transform duration-300 lg:hidden ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            {/* Thanh top chứa icon mở menu */}
            <div className="bg-glass flex items-center justify-between border-b border-black px-4 py-3 shadow-lg">
                <span className="font-heading text-black">NhatTruong</span>
                <button
                    className="text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Panel menu trượt xuống */}
            <div
                className={`absolute left-0 top-full w-full overflow-hidden border-b border-black bg-white shadow-md transition-all duration-300 ${
                    isMenuOpen
                        ? 'max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="flex h-screen flex-col divide-y divide-lightGray">
                    {navItems.map((nav) => (
                        <li key={nav.id}>
                            <button
                                className="block px-6 py-4 text-center font-heading text-2xl text-black"
                                onClick={() => {
                                    handleScrollToSection(nav.id)
                                    setIsMenuOpen(false)
                                }} // Đóng menu khi chọn
                            >
                                {nav.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobileHeader
