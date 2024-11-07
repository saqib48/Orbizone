import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

function Geddetail2() {
    return (
        <div className='max-w-[1200px] mx-auto px-4 pb-10'>
            <div>
                <Heading level={4}>What is GED®?</Heading>
                <Paragraph variant='paraAbout'>The General Educational Development (GED) exam USA is a comprehensive assessment designed to measure the skills and knowledge typically acquired through four years of high school education. It serves as an alternative pathway for individuals who have not completed traditional high school education to earn a recognized high school equivalency credential.</Paragraph>
                <Heading level={5}>Key Features </Heading>
                <ul className='list-disc text-lg font-[400] leading-relaxed ml-[20px] mt-2 mb-2 text-[#d1d5db] '>
                    <li>American High School Qualification</li>
                    <li>Equivalent to A-levels, Intermediate (FA/FSC/ICS/ICOM), IB DP, High School</li>
                    <li>Recognised and Approved by IBCC Pakistan</li>
                    <li>Pathway to higher education and recognised worldwide</li>
                    <li>Self paced learning / Prepare in 3 months only</li>
                    <li>Cost Effective (as low as USD 320$ only)</li>
                    <li>Flexible Schedule (Weekend Classes – Evening time to suit your pressing needs)</li>
                    <li>On-Campus and Online Classes</li>
                    <li>Appear throughout the year for the Exam</li>
                    <li>Accepted by LUMS, UOL, IVY League, and Universities Worldwide</li>
                </ul>
                <Heading level={4}>GED Key Features</Heading>
                <Paragraph variant='paraAbout'>The General Educational Development (GED) exam USA is a comprehensive assessment designed to measure the skills and knowledge typically acquired through four years of high school education. It serves as an alternative pathway for individuals who have not completed traditional high school education to earn a recognized high school equivalency credential.</Paragraph>
                <Heading level={5}>Subjects</Heading>
                <Paragraph variant='paraAbout'>The GED exam covers four main subjects areas</Paragraph>
                <ul className='list-disc text-lg font-[400] leading-relaxed ml-[20px] mt-2 mb-2 text-[#d1d5db] '>
                    <li>Mathematical Reasoning</li>
                    <li>Reasoning Through Language Arts</li>
                    <li>Science</li>
                    <li>Social Studies</li>
                </ul>
                <Heading level={5}>Flexible Scheduling</Heading>
                <Paragraph variant='paraAbout'>Candidates have the flexibility to schedule the exam at their convenience, allowing for personalized preparation and readiness assessment.</Paragraph>
                <Heading level={5}>Cost-Effective</Heading>
                <Paragraph variant='paraAbout'>Pursuing a GED certificate is more cost-effective compared to traditional high school education or other standardized tests.</Paragraph>
                <Heading level={5}>Career Advancement</Heading>
                <Paragraph variant='paraAbout'>Many employers and numerous educational institutions recognize the GED certificate as evidence of foundational knowledge and skills, enhancing job prospects and opening doors to higher education opportunities.</Paragraph>
                <Heading level={5}>Global Recognition</Heading>
                <Paragraph variant='paraAbout'>The GED certificate is widely accepted by employers and educational institutions worldwide, providing access to diverse opportunities across different industries and regions.</Paragraph>
                <Heading level={4}>GED® Facts</Heading>
                <ul className='list-disc text-lg font-[400] leading-relaxed ml-[20px] mt-2 mb-2 text-[#d1d5db] '>
                    <li>Nearly all colleges and employers accept the GED® credential</li>
                    <li>There are over 20 million graduates and counting</li>
                    <li>GED® grads can earn on average $9,000 more a year</li>
                    <li>GED® grads can enrol for higher education in Pakistan, UK, USA, Australia, Canada, Dubai and many more</li>
                </ul>

            </div>
        </div>
    )
}

export default Geddetail2