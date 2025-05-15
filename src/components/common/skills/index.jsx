import Image from 'next/image'
import React from 'react'

const skillsData = [
    {
        title: 'Hội Nghị Khách Hàng',
        description:
            'Với kinh nghiệm dẫn dắt nhiều chương trình hội nghị và sự kiện doanh nghiệp, tôi là MC chuyên nghiệp chuyên phụ trách các sự kiện Hội nghị Khách hàng – nơi kết nối giữa doanh nghiệp và đối tác, khách hàng thân thiết.',
        images: [
            'wedding-1.jpg',
            'wedding-2.jpg',
            'wedding-3.jpg',
            'wedding-4.jpg',
        ],
        reverse: false,
    },
    {
        title: 'Mở Bán Bất Động Sản',
        description:
            'Là MC chuyên nghiệp trong các sự kiện mở bán bất động sản, tôi luôn giữ phong thái tự tin, dẫn dắt mạch lạc, tạo không khí sôi động – góp phần nâng tầm hình ảnh dự án và truyền cảm hứng mua hàng đến khách mời.',
        images: ['event-1.jpg', 'event-2.jpg', 'event-3.jpg', 'event-4.jpg'],
        reverse: true,
    },
    {
        title: 'Giới Thiệu Sản Phẩm',
        description:
            'Là MC giới thiệu sản phẩm, tôi tập trung làm nổi bật thông điệp thương hiệu, truyền tải rõ ràng tính năng và giá trị sản phẩm đến khách hàng một cách lôi cuốn, dễ hiểu – góp phần tạo ấn tượng mạnh và thúc đẩy quyết định trải nghiệm hoặc mua hàng.',
        images: [
            'teambuilding-1.jpg',
            'teambuilding-2.jpg',
            'teambuilding-3.jpg',
            'teambuilding-4.jpg',
        ],
        reverse: false,
    },
]

const Skills = () => {
    return (
        <section
            id="kinh-nghiem"
            className="container py-10 text-black md:py-20"
        >
            <h2 className="mb-4 text-center uppercase tracking-wide">
                mc sự kiện chuyên nghiệp
            </h2>
            <p className="text-gray-700 mb-12 text-center text-xl font-light">
                Sẵn sàng phục vụ mọi sự kiện lớn nhỏ của quý khách!
            </p>

            {skillsData.map((item, index) => (
                <div
                    key={index}
                    className={`relative mb-12 flex flex-col md:items-stretch ${
                        item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                    } gap-6 md:gap-8`}
                >
                    {/* Text phần mô tả */}

                    <div
                        data-aos="fade-right"
                        className="relative z-10 flex flex-col items-center justify-center gap-4 md:w-1/3"
                    >
                        {/* Số thứ tự */}
                        <span className="absolute left-0 top-0 font-heading text-[80px] font-bold text-black opacity-30 md:top-[10%] md:text-[150px]">
                            {index + 1}.
                        </span>
                        <h3
                            data-aos="fade-right"
                            data-aos-delay="100"
                            className="text-center font-semibold md:text-left"
                        >
                            {item.title}
                        </h3>
                        {item.description && (
                            <p className="text-center md:text-left">
                                {item.description}
                            </p>
                        )}
                        {item.list && (
                            <ul className="list-disc pl-5 text-left">
                                {item.list.map((li, i) => (
                                    <li key={i}>{li}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Hình ảnh */}
                    <div
                        data-aos="fade-left"
                        className={`grid w-full grid-cols-2 gap-2 rounded-xl p-2 md:min-h-[480px] ${
                            item.reverse
                                ? 'bg-gradient-to-b from-mediumGray to-lightGray'
                                : 'bg-gradient-to-b from-gray to-lightGray'
                        } md:w-2/3`}
                    >
                        {item.images.map((img, i) => (
                            <div
                                key={i}
                                className="relative aspect-[4/3] md:aspect-auto"
                            >
                                <Image
                                    src={`/assets/images/${img}`}
                                    alt={item.title}
                                    fill
                                    className="rounded-xl object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Skills
