import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-[#f0f6ff] py-10 px-4 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-roboto text-gray-900">
                    About <span className="text-[#020085]">Us</span>
                </h2>
                <div className='text-[#020085] w-[120px] mt-2 mb-6 mx-auto'>
                    <hr className="border-t-2 border-[#666] ml-[15px]" />
                    <hr className="border-t-2 border-[#666] mr-[15px] mt-1" />
                </div>
                <p className="text-gray-700 text-justify leading-7 mb-4 font-roboto">
                    We teach student using advanced learning materials and ensure a congenial learning
                    materials and ensure a congenial environment for connective Practice, regular test,
                    systematic and most importantly science based activities in the classrooms targeting
                    Academic calendar published for each year under the guidance of Ministry of Education,
                    Bangladesh Madrasah Education Board. As a result this institution has been establishing its
                    superiority both in curricular and co-curricular activities.
                </p>
                <p className="text-gray-700 text-justify leading-7 mb-4 font-roboto">
                    This institution has been able to acquire appraisal in the field of inter school &
                    college debate, cultural competition, essay competition and education co-curricular
                    activities.
                </p>
                <p className="text-gray-700 text-justify leading-7 mb-4 font-roboto">
                    With the combining effects of students, teachers, guidance and most importantly for
                    the skilled management of the Governing Body.
                </p>
                <p className="text-gray-700 text-justify leading-7 font-roboto">
                    We are determined to shape it as the best educational institution of Chuadanga as well as
                    Bangladesh. Maintaining consistency in the acquired result and reputation. Our only
                    expectation is to get the cordial co-operation of all to administer the institution and
                    improve the standard of education.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
