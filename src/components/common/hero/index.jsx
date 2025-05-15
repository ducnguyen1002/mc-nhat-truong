'use client'

import { USER_PHONENUMBER } from '@/utils/consts'
import { QuoteIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const desktopImages = [
    '/assets/images/self-1.jpg',
    '/assets/images/self-2.jpg',
    '/assets/images/self-3.jpg',
    '/assets/images/self-4.jpg',
    '/assets/images/self-5.jpg',
    '/assets/images/self-6.jpg',
]

const Hero = () => {
    return (
        <div className="container mt-10 flex h-screen max-h-[920px] min-h-[800px] flex-col gap-8 py-10 md:mt-20 md:flex-row md:gap-20 md:py-20">
            {/* chữ */}
            <div className="flex h-1/2 w-full flex-col justify-center text-center md:h-full md:w-2/3">
                {/* tên */}
                <h1 className="mb-2 block font-bold uppercase text-black">
                    NHẬT TRƯỜNG
                </h1>
                <p className="mb-6 font-light">MC - Người dẫn chương trình</p>

                {/* quote */}
                <div className="relative w-full text-xl font-normal uppercase italic">
                    <QuoteIcon className="absolute -top-2 left-0 size-4 rotate-180 md:size-6 lg:left-1/4" />
                    Bạn Trao Tôi Sự Tin Tưởng <br /> Tôi Trao Bạn Sự Hài Lòng
                    <QuoteIcon className="absolute -bottom-2 right-0 size-4 md:size-6 lg:right-1/4" />
                </div>

                {/* cta */}
                <div className="mt-10 flex flex-col justify-center gap-2 md:flex-row">
                    <Link
                        href={'tel:' + USER_PHONENUMBER}
                        className="w-full cursor-pointer rounded border bg-black px-8 py-4 font-heading text-white transition-all hover:border-black hover:bg-white hover:text-black md:w-fit"
                    >
                        Liên hệ ngay
                    </Link>
                    <Link
                        href={'tel:' + USER_PHONENUMBER}
                        className="w-full cursor-pointer rounded bg-gray px-8 py-4 font-heading text-black transition-all hover:bg-mediumGray md:w-fit"
                    >
                        Tìm hiểu thêm &gt;
                    </Link>
                </div>
            </div>

            {/* ảnh avatar */}
            <div className="flex h-1/2 w-full items-center justify-center md:h-full md:w-1/3">
                <div className="relative my-auto aspect-square w-full overflow-hidden rounded-xl">
                    <Image
                        src="/assets/self/self-2.jpg"
                        className="object-cover object-top"
                        alt="self-mobile"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
