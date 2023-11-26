import React, { useEffect, useRef } from 'react';

const HeroAnimation = () => {

    return (
        <>
            <div className='h-screen'>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center  text-base">
                            <img src='https://cdn.discordapp.com/attachments/1083840135055032330/1178378886451560549/dijicoresembol.png?ex=6575eddb&is=656378db&hm=772a5d3ba65485529d1369f4287f0f09469461d30a1f27836df6c9d85fc701b2&' className="w-32 h-32 mx-auto" alt='logo' />
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-4">
                                dijicore
                            </h1>
                            <p className="mt-6 text-lg leading-8">
                                Biz size sosyal medya yönetimi, sosyal medya sayesinde markanızı zirveye çıkarma olanağı sunuyoruz! Çünkü biz Sınırların Ötesindeyiz!
                            </p>
                            <svg
                                className="animate-bounce w-6 h-6 mx-auto mt-6 text-base"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M12 18l-6-6h12l-6 6z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroAnimation;
