import Image from 'next/image'
import React from 'react'

const personalInfo = [
    { key: 'Họ tên', value: 'Nguyễn Văn Phú' },
    { key: 'Nghệ danh', value: 'Gia Phú' },
    { key: 'Năm sinh', value: '1999' },
    { key: 'Quê quán', value: 'Yên Định, Thanh Hóa' },
    { key: 'Học vấn', value: 'Tốt nghiệp HV MC Văn Minh năm 2019' },
]

const AboutMe = () => {
    return (
        <section
            id="gioi-thieu"
            className="overflow-hidden bg-lightGray py-10 text-black md:py-20"
        >
            <div className="container grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-20">
                <p>MC NHẬT TRƯỜNG</p>
                <p className="col-span-2 text-[40px] leading-normal md:text-[80px]">
                    15 năm làm chủ <br /> nghệ thuật tổ chức <br /> sự kiện
                    chuyên nghiệp.
                </p>
                <div className="space-y-3 uppercase">
                    {/* tag */}
                    <div className="w-fit rounded-md bg-mediumGray px-4 py-2 text-white">
                        MC CHUYÊN NGHIỆP
                    </div>
                    <div className="w-fit rounded-md bg-mediumGray px-4 py-2 text-white">
                        Chuyên gia tổ chức team building
                    </div>
                    <div className="w-fit rounded-md bg-mediumGray px-4 py-2 text-white">
                        Chuyên gia tổ chức sự kiện{' '}
                    </div>
                </div>
                <div class="col-span-2">
                    <p>
                        Với 15 năm trong ngành, MC Nhật Trường xuất sắc trong
                        việc dẫn dắt các sự kiện ở nhiều quy mô. Sự chuyên
                        nghiệp của anh đảm bảo mọi khoảnh khắc đều trở nên đặc
                        biệt.
                    </p>
                    <p>
                        Dẫn dắt đội ngũ HTP Play, Nhật Trường chuyên tổ chức các
                        hoạt động team building sáng tạo, mang đến những trải
                        nghiệm gắn kết và đáng nhớ.
                    </p>
                    <p>
                        Khám phá cách chúng tôi có thể nâng tầm sự kiện của bạn.
                        Hãy tin tưởng vào chuyên môn của chúng tôi để có một
                        chương trình trọn vẹn và khó quên.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
