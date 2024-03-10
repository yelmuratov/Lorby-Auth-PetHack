import React, { useState } from 'react'

function Register() {
    const [visiblePasword, setVisblePassword] = useState(false);
    const [visibleConPasword, setVisbleConPassword] = useState(false);
    return (
        <div id="register">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 md:pl-24 sm:pl-24 pl-12 ">
            <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl lg:text-[32px] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl sm:text-[32px]">
                        Создать аккаунт Lorby
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <input type="email" name="email" id="email" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500" placeholder="Введи адрес почты" required="" />
                        </div>
                        <div>
                            <input type="username" name="username" id="username" className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500" placeholder="Придумай логин" required="" />
                        </div>
                        <div className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 flex justify-between items-center">
                            <input type={`${visiblePasword?"text":"password"}`} name="password" id="password" placeholder="Создай пароль" className='focus:outline-none bg-transparent' required="" />
                            <i className={`fa-regular fa-eye${visiblePasword?"-slash":""} cursor-pointer`} onClick={()=>setVisblePassword(prev => !prev)}></i>
                        </div>
                        <div className="text-gray-900 pl-8 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 flex justify-between items-center">
                            <ul>
                                <li className='text-[#767676] list-disc text-[14px]'>От 8 до 15 символов</li>
                                <li className='text-[#767676] list-disc text-[14px]'>Строчные и прописные буквы</li>
                                <li className='text-[#767676] list-disc text-[14px]'>Минимум 1 цифра</li>
                                <li className='text-[#767676] list-disc text-[14px]'>Минимум 1 спецсимвол (!, ", #, $...)</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 flex justify-between items-center">
                            <input type={`${visibleConPasword?'text':"password"}`} className='focus:outline-none bg-transparent' name="confirm-password" id="confirm-password" placeholder="Повтори пароль" required="" />
                            <i className={`fa-regular fa-eye${visibleConPasword?"-slash":""} cursor-pointer`} onClick={()=>setVisbleConPassword(prev => !prev)}></i>
                        </div>
                        <button type="submit" className="w-full text-gray-400 bg-gray-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Далее</button>
                    </form>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        У вас уже есть аккаунт? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Войти здесь</a>
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register