import AboutMe from '@/components/common/about-me'
import Feedbacks from '@/components/common/feedbacks'
import ActivityGallery from '@/components/common/gallery'
import Hero from '@/components/common/hero'
import McCategoryGrid from '@/components/common/services'
import Skills from '@/components/common/skills'
import TeamSection from '@/components/common/team'
import Video from '@/components/common/video'
import WhyMe from '@/components/common/why-me'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>MC Nhật Trường</title>
                <meta
                    name="description"
                    content="MC gala dinner, team building chuyên nghiệp"
                />
            </Head>
            <div className="relative">
                <Hero />
                <AboutMe />
                <Skills />
                <McCategoryGrid />
                <TeamSection />
                <ActivityGallery />
                <Video />
                <Feedbacks />
            </div>
        </>
    )
}
