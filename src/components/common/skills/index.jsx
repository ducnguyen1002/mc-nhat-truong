import Image from 'next/image'
import React from 'react'

const skillsData = [
    {
        title: 'Gala Dinner',
        description:
            'Là MC dẫn dắt Gala Dinner, tôi mang đến không khí sang trọng, vui tươi và gắn kết – khéo léo kết nối các phần trong chương trình, tạo điểm nhấn cảm xúc và duy trì năng lượng tích cực suốt buổi tiệc, góp phần giúp sự kiện thành công trọn vẹn và đáng nhớ.',
        images: [
            '/assets/gala-dinner/gala-1.jpg',
            '/assets/gala-dinner/gala-2.jpg',
            '/assets/gala-dinner/gala-3.jpg',
            '/assets/gala-dinner/gala-4.jpg',
        ],
        reverse: false,
    },
    {
        title: 'Hội nghị khách hàng',
        description:
            'Với kinh nghiệm dẫn dắt nhiều chương trình hội nghị và sự kiện doanh nghiệp, tôi là MC chuyên nghiệp chuyên phụ trách các sự kiện Hội nghị Khách hàng – nơi kết nối giữa doanh nghiệp và đối tác, khách hàng thân thiết.',
        images: [
            '/assets/customer-convention/cus-1.jpg',
            '/assets/customer-convention/cus-2.jpg',
            '/assets/customer-convention/cus-3.jpg',
            '/assets/customer-convention/cus-4.jpg',
        ],
        reverse: true,
    },
    {
        title: 'Lễ khai trương',
        description:
            'Là MC đồng hành trong các sự kiện khai trương, tôi mang đến không khí hân hoan và trang trọng, dẫn dắt chương trình linh hoạt – giúp tôn vinh thương hiệu, ghi dấu ấn ngày khởi đầu và lan tỏa năng lượng tích cực đến khách mời.',
        images: [
            '/assets/open-ceremony/open-1.jpg',
            '/assets/open-ceremony/open-2.jpg',
            '/assets/open-ceremony/open-3.jpg',
            '/assets/open-ceremony/open-4.jpg',
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
                                    src={img}
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
