import React, { useState } from 'react';

function VerificationForm() {
    const [code, setCode] = useState(['', '', '', '']); // Array to hold each digit

    const handleChange = (index, event) => {
        const newCode = [...code];
        newCode[index] = event.target.value;
        setCode(newCode);

        // Focus next input after current input is filled
        if (event.target.value.length === 1 && index < 3) {
            document.getElementById(`input-${index + 1}`).focus();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Combine the code array into a single string and handle the submission
        const fullCode = code.join('');
        console.log('Entered code:', fullCode);
        // Here you can add your logic to verify the code or send it to a server
    };

    return (
        <form onSubmit={handleSubmit} className='w-[500px] px-4 flex items-center flex-col justify-center gap-12'>
            <label className='text-[22px] w-[343px]'>
                Введи 4-значный код, высланный на example@gmail.com
                <div className='flex w-[260px] gap-8 mt-[30px]'>
                    {code.map((_, index) => (
                        <input
                            key={index}
                            id={`input-${index}`}
                            className='bg-[#F4F4F4]'
                            type="text"
                            maxLength="1"
                            value={code[index]}
                            onChange={(event) => handleChange(index, event)}
                            style={{ width: '56px', height: '64px' }} // Adjust styling as needed
                            autoFocus={index === 0} // Focus the first input box
                        />
                    ))}
                </div>
            </label>
            <button
                type="submit"
                className={`bg-gray-100 text-gray-400'} w-full text-sm px-5 py-2.5 text-center font-medium rounded-lg focus:outline-none`}
            >
                Далее
            </button>
        </form>
    );
}

export default VerificationForm;
