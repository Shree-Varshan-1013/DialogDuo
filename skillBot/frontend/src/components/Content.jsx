import React from 'react'

const Content = () => {
    return (
        <section className='m-5'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28">
                <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                    <div className="w-full mx-auto">
                        <h1 className="mb-8 text-4xl font-bold tracking-tighter text-neutral-600 md:text-5xl text-justify text-md leading-7 lg:text-5xl">Inspiration</h1>
                        <h2 className='leading-7 text-md lg:text-lg'>Recent studies have revealed that as much as 90% of students opt for a wrong career path due to a lack of career guidance and the persisting gap between skills and aptitudes.
                            So, our team decided to leverage Artificial Intelligence to bring forth DialogDuo, which serves as your perfect career guidance companion throughout your career journey.</h2>
                    </div>
                </div>
                <div className="grid place-content-center">
                    <div className='flex justify-center items-center mb-10'>
                        <div className="flex justify-center align-middle items-center content-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 20 20"><path fill="#525252" d="M3.33 8L10 12l10-6l-10-6L0 6h10v2zM0 8v8l2-2.22V9.2zm10 12l-5-3l-2-1.2v-6l7 4.2l7-4.2v6z" /></svg>
                        </div>
                        <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                            <h2 className='leading-7'>Achieve Career Success with Smart, Real-Time Advice!</h2>
                        </div>
                    </div>
                    <div className='flex justify-center align-middle items-center content-center'>
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#525252" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1zm-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" /></svg>
                        </div>
                        <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                            <h2 className='leading-7'>Elevate Your Career with Our Awesome Resume Builder!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content