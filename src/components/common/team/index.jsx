import { USER_PHONENUMBER } from '@/utils/consts'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const teamMembers = [
    {
        name: 'Nguyễn Văn A',
        age: 30,
        role: 'Trưởng nhóm tổ chức sự kiện',
        image: '/assets/images/birthday-1.jpg',
    },
    {
        name: 'Trần Thị B',
        age: 27,
        role: 'MC Team Building',
        image: '/assets/images/birthday-2.jpg',
    },
    {
        name: 'Lê Văn C',
        age: 32,
        role: 'Điều phối kỹ thuật sân khấu',
        image: '/assets/images/birthday-3.jpg',
    },
    {
        name: 'Phạm Thị D',
        age: 25,
        role: 'Phụ trách hoạt náo & trò chơi',
        image: '/assets/images/birthday-4.jpg',
    },
]

const TeamSection = () => {
    return (
        <div className="container py-10 md:py-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div className="flex flex-col items-center justify-center text-center md:col-span-2 md:items-start md:text-left">
                    <p className="text-mediumGray">đội ngũ</p>
                    <h2 className="uppercase tracking-wide">HTP PLAY</h2>
                    <p className="mt-6 text-lg text-darkGray">
                        Chuyên cung cấp đồ chơi <br /> tổ chức các sự kiện team
                        building ngoài trời
                    </p>
                    <Link
                        href={'tel:' + USER_PHONENUMBER}
                        className="mt-10 block w-fit cursor-pointer rounded border bg-black px-8 py-4 font-heading text-white transition-all hover:border-black hover:bg-white hover:text-black"
                    >
                        Liên hệ ngay
                    </Link>
                </div>

                {/* Member Cards */}
                <div className="grid grid-cols-1 gap-6 md:col-span-2 md:grid-cols-2">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-md"
                        >
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex w-full items-center justify-between">
                                    <h3 className="text-gray-800 text-lg font-semibold">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        Tuổi: {member.age}
                                    </p>
                                </div>
                                <p className="text-gray-600 mt-1 text-sm">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamSection
