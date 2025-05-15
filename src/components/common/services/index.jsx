import Link from 'next/link'
import React from 'react'

const categories = [
    {
        title: 'MC Teambuilding',
        description:
            'Năng động, nhiệt huyết, nêu bật giá trị tinh thần đoàn kết của công ty, doanh nghiệp.',
    },
    {
        title: 'MC Gala Dinner',
        description: 'Hoạt náo, game show vui vẻ, hài hước.',
    },
    {
        title: 'MC Hội Khoá',
        description:
            'Nói lên tiếng lòng tri ân, khơi nguồn cảm xúc, ôn lại kỷ niệm đẹp thuở cắp sách tới trường.',
    },
    {
        title: 'MC Lửa Trại',
        description: 'Tạo nên một bầu không khí đoàn kết.',
    },
    {
        title: 'MC Year End Party',
        description:
            'Kết nối tinh thần gắn kết giữa BLĐ, CBNV trong công ty, doanh nghiệp.',
    },
    {
        title: 'MC Ca Nhạc',
        description:
            'Tạo hiệu ứng tương tác vui vẻ, là cầu nối giữa ca sĩ và khán giả.',
    },
    {
        title: 'MC Khai Trương',
        description:
            'Lời dẫn toát lên năng lượng tích cực, may mắn và tài lộc.',
    },
    {
        title: 'MC Wedding Luxury',
        description:
            'Sang trọng, lịch sự, lối dẫn kết nối câu chuyện tình yêu của cô dâu chú rể.',
    },
    {
        title: 'MC Sinh Nhật',
        description:
            'Gắn kết thành viên gia đình, game hoạt náo cho các bạn nhỏ.',
    },
]

export default function McCategoryGrid() {
    return (
        <div className="bg-mediumGray py-10 md:py-20">
            <h3 className="text-center uppercase text-white">
                các dịch vụ khác
            </h3>
            <p className="text-gray-700 mb-12 text-center text-xl font-light text-white">
                mà Nhật Trường cung cấp
            </p>
            <div className="container grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-mediumGray bg-white p-4 text-center shadow-sm transition hover:shadow-md"
                    >
                        <h3 className="text-gray-800 text-lg font-semibold">
                            {item.title}
                        </h3>
                        <p className="mx-auto mt-2 max-w-full text-sm text-darkGray md:max-w-[200px]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <Link
                href={'#'}
                className="mx-auto mt-10 block w-fit cursor-pointer rounded border bg-white px-8 py-4 font-heading text-black transition-all hover:border-black hover:bg-lightGray"
            >
                Tải xuống kịch bản mẫu
            </Link>
        </div>
    )
}
