import React from 'react'
import { useState } from 'react';

export default function Header1() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className='container-fluid pt-1'>
            <div className='row w-90 mx-auto'>
                <div className='w-80 mx-auto px-0'>
                    <div className='col-md-10 col-12 mx-auto text-center'>
                        <img alt='' src='/asset/unsubscribe 1.svg' className='img-fluid' />
                        <h3 className='text-center fs-40 mb-2'>
                            Are you<span style={{ color: "#2CAAE6" }} > Breaking </span > up with us?
                        </h3>
                        <p className='text-center fs-17 mb-0'>
                            No hard feelings! We understand that sometimes relationships just don't work out. But before you go, we want to make sure you're leaving for the right reasons.
                        </p>
                    </div>
                </div>
            </div>

            <div className='text-center pt-5 d-flex justify-content-center'>

                <p onClick={() => handleOptionClick('stay')} className={`pointer  me-2 mb-0 py-auto ${selectedOption === 'stay' ? 'light-green ' : 'bg-white'}fw-semibold dark-blue-text mb-0 fw-normal rounded roboto subs-buuton border`}>
                    I’d Rather Stay
                </p>
                <p onClick={() => handleOptionClick('Unsubscribe')} className={`pointer ms-2  mb-0 py-auto ${selectedOption === 'Unsubscribe' ? 'light-green ' : 'bg-white'}fw-semibold dark-blue-text mb-0 fw-normal rounded roboto subs-buuton border`}>
                    Unsubscribe
                </p>
            </div>
        </div>
    )
}
