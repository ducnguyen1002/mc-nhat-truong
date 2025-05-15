'use client'

import React, { useEffect } from 'react'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import Image from 'next/image'
import Link from 'next/link'
import Fancybox from '@/components/ui/fancy-box'

const images = [
    '/assets/images/self-1.jpg',
    '/assets/images/self-2.jpg',
    '/assets/images/self-3.jpg',
    '/assets/images/self-4.jpg',
    '/assets/images/self-5.jpg',
    '/assets/images/self-6.jpg',
    '/assets/images/self-7.jpg',
    '/assets/images/self-8.jpg',
    '/assets/images/self-9.jpg',
    '/assets/images/self-10.jpg',
]

export default function ActivityGallery() {
    const visibleImages = images.slice(0, 8)
    const remainingCount = images.length - 8

    return (
        <section className="container py-16">
            <h2 className="mb-6 block text-center font-semibold uppercase text-darkGray md:mb-10">
                Hình ảnh hoạt động
            </h2>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: false,
                    },
                    Images: {
                        zoom: true,
                    },
                }}
                className="h-full w-full"
            >
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {visibleImages.map((src, index) => {
                        const isLastVisible = index === 7 && remainingCount > 0
                        return (
                            <Link
                                key={index}
                                href={src}
                                data-fancybox="gallery"
                                className="group relative aspect-square overflow-hidden rounded-xl"
                            >
                                <Image
                                    src={src}
                                    alt={`Hoạt động ${index + 1}`}
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    fill
                                />
                                {isLastVisible && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-2xl font-bold text-white">
                                        +{remainingCount}
                                    </div>
                                )}
                            </Link>
                        )
                    })}

                    {/* Render hidden items so Fancybox still shows all */}
                    {images.slice(8).map((src, index) => (
                        <Link
                            key={`hidden-${index}`}
                            href={src}
                            data-fancybox="gallery"
                            className="hidden"
                        />
                    ))}
                </div>
            </Fancybox>
        </section>
    )
}
