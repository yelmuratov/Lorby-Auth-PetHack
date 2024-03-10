import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VerificationForm from './verification';

function Register() {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [visibleConPassword, setVisibleConPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [mail, setMail] = useState("");
    const [username,setUserName] = useState("");
    const [samePassword,setSamePassword] = useState(false);
    // States for validation errors and criteria check
    const [passwordError, setPasswordError] = useState('');
    const [isCriteriaMet, setIsCriteriaMet] = useState(false);
    const hasValidLength = password.length >= 8 && password.length <= 15;
    const [succes,setSucces] = useState(true);
        const hasUpperAndLowerCase = /(?=.*[a-z])(?=.*[A-Z])/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password);

 

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setPasswordConfirm(newConfirmPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Assuming the API endpoint to which you're sending the POST request is '/api/register'
        const endpoint = 'https://www.challenge-neobook.org/lorby/authentication/register/';
    
        // The data you want to send in the POST request
        const userData = {
            email: mail,
            username,
            password, // Make sure your backend is secure and uses HTTPS before sending passwords
            password_confirm: passwordConfirm,
        };
    
        // Perform the POST request using Axios
        try{
            axios.post(endpoint, userData);
            setSucces(true);
        }catch(e){
            setSucces(false);
            console.log(e);
        }
            
    };

    useEffect(()=>{
        const isValid = hasValidLength && hasUpperAndLowerCase && hasDigit && hasSpecialChar;
        setIsCriteriaMet(isValid);
        setSamePassword(password==samePassword);
    },[password,passwordConfirm,hasSpecialChar,hasValidLength,hasUpperAndLowerCase]);

    const isButtonEnabled = isCriteriaMet && password == passwordConfirm;

    return (
        succes?
        <div id="register">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 md:pl-24 sm:pl-24 pl-12 ">
                <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl lg:text-[32px] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Создать аккаунт Lorby
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="email"
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)}
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                                    placeholder="Введи адрес почты"
                                    required=""
                                />
                            </div>
                            <div>
                                <input
                                    type="text" 
                                    value={username}// Assuming "username" is intended to be a text input
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                                    placeholder="Придумай логин"
                                    required=""
                                    onChange={(e)=>setUserName(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type={visiblePassword ? "text" : "password"}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    name="password"
                                    id="password"
                                    className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                                    placeholder="Создай пароль"
                                    required=""
                                />
                                <span
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={() => setVisiblePassword(prev => !prev)}
                                >
                                    <i className={`fa ${visiblePassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </span>
                            </div>
                            <div className='relative pl-12'>
                                <ul>
                                    <li className='text-[#767676] list-disc'>От 8 до 15 символов {hasValidLength?"✅":""}</li>
                                    <li className='text-[#767676] list-disc'>Строчные и прописные буквы {hasUpperAndLowerCase?"✅":""}</li>
                                    <li className='text-[#767676] list-disc'>Минимум 1 цифра {hasDigit?"✅":""}</li>
                                    <li className='text-[#767676] list-disc'>Минимум 1 спецсимвол {hasSpecialChar?"✅":""}</li>
                                </ul>
                            </div>
                            <div className="relative">
                                <input
                                    type={visibleConPassword ? "text" : "password"}
                                    value={passwordConfirm}
                                    onChange={handleConfirmPasswordChange}
                                    name="confirm-password"
                                    id="confirm-password"
                                    className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5"
                                    placeholder="Повтори пароль"
                                    required=""
                                />
                                <span
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                    onClick={() => setVisibleConPassword(prev => !prev)}
                                >
                                    <i className={`fa ${visibleConPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </span>
                            </div>
                            <button
                                type="submit"
                                disabled={!isButtonEnabled}
                                className={`${isButtonEnabled ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-100 text-gray-400'} w-full text-sm px-5 py-2.5 text-center font-medium rounded-lg focus:outline-none`}
                            >
                                Далее
                            </button>
                        </form>
                        <p className="text-sm font-light text-gray-500">
                            У вас уже есть аккаунт? <a href="/login" className="font-medium text-primary-600 hover:underline">Войти здесь</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        :
        <VerificationForm />
    );
}

export default Register;
