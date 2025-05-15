'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const feedbackImages = [
    'feedback-1.jpg',
    'feedback-2.jpg',
    'feedback-3.jpg',
    'feedback-4.jpg',
    'feedback-5.jpg',
]

const Feedbacks = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <section id="feedbacks" className="container py-10 text-black md:py-20">
            <h2 className="mb-4 text-center uppercase tracking-wide">
                Đánh giá
            </h2>
            <p className="text-gray-700 mb-12 text-center text-xl font-light">
                trực tiếp từ khách hàng của MC Nhật Trường
            </p>

            {/* Swiper */}
            <div data-aos="fade-up" className="container relative">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current
                        swiper.params.navigation.nextEl = nextRef.current
                        swiper.navigation.init()
                        swiper.navigation.update()
                    }}
                    loop={true}
                    modules={[Navigation]}
                    className="px-6"
                >
                    {feedbackImages.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex justify-center p-2 md:p-6"
                        >
                            <div className="relative h-[600px] w-full shadow-2xl shadow-darkGray">
                                <Image
                                    src={`/assets/images/${img}`}
                                    alt={`Feedback ${index + 1}`}
                                    fill
                                    className="rounded-xl object-cover object-top"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-black bg-lightGray p-3 text-black shadow-md transition hover:scale-110"
                >
                    <ChevronLeft size={20} />
                </button>

                <button
                    ref={nextRef}
                    className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-black bg-lightGray p-3 text-black shadow-md transition hover:scale-110"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <h3
                data-aos="fade-up"
                className="mt-20 text-center uppercase tracking-wide"
            >
                MC Nhật Trường <br />
                rất mong muốn được hợp tác cùng quý vị!
            </h3>
        </section>
    )
}

export default Feedbacks
