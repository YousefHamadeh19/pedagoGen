"use client";

import React, { useRef, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { CircularProgress, Oval } from "react-loader-spinner";

const AuthenticationForm = () => {
    const router = useRouter();
    const { user, login } = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const timerRef = useRef<NodeJS.Timeout | null>(null); // This is your "emailTimer"
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<{ error: boolean, message: string }>({ error: false, message: '' });
    const [role, setRole] = useState<'Teacher' | 'Coordinator'>('Teacher');
    const [coordinatorLogin, setCoordinatorLogin] = useState<boolean>(false);

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {
        const newValue = e.target.value;
        setEmail(newValue); // Always update text instantly

        // Clear the existing timeout so we don't have 10 checks running at once
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {

            if (!newValue.match(isValidEmail || newValue === '')) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }
        }, 500);
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {
        const val = e.target.value;
        setPassword(val); // Always update the input value immediately

        // 1. If the input is cleared, reset the error and stop
        if (val === '') {
            setPasswordError({ error: false, message: '' });
            return;
        }

        // 2. Define our validation rules
        const minLength = val.length >= 8;
        const hasCapital = /[A-Z]/.test(val);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(val);

        // 3. Determine the error message
        // We check them in order of importance or logical flow
        let errorMessage = "";
        if (!minLength) {
            errorMessage = "Password must be at least 8 characters long";
        } else if (!hasCapital) {
            errorMessage = "Include at least one capital letter";
        } else if (!hasSpecial) {
            errorMessage = "Include at least one special character (@, #, $, etc.)";
        }

        // 4. Update the error state
        if (errorMessage) {
            setPasswordError({ error: true, message: errorMessage });
        } else {
            // If all tests pass, clear the error
            setPasswordError({ error: false, message: '' });
        }
    }

    function handleSubmit() {
        setIsLoading(true);

        if (email == '' || password == '' || emailError || passwordError.error) {
            return;
        }

        // Perform the login logic
        login({ email: email, name: "Youssef", role: role });
        setTimeout(() => {

            // Navigate to the dashboard
            if (role == 'Teacher') {
                router.push('/build-strategy');
                return;
            }


        }, 3000);
    }

    function handleRoleBasedSubmit(role: 'Coordinator' | 'Teacher') {
        setIsLoading(true);
        login({ email: email, name: "Youssef", role: role });

        setTimeout(() => {
            if (role == 'Teacher') {
                router.push('/build-strategy');
                return;
            }
            // Navigate to the dashboard
            router.push('/dashboard');
            return;

        }, 3000);
    }
    return (
        isLoading
            ?
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-100">
                <Oval
                    height={80}
                    width={80}
                    color="#2298f2"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#2298f2"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
            :

            <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
                {/* 1. White Container */}
                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center">

                    {/* Title & App Name */}
                    <h1 className="text-3xl font-bold text-black tracking-tight mb-1">
                        PedagoGen
                    </h1>

                    {/* 2. Statement */}
                    <p className="text-gray-500 text-sm mb-8">
                        Login to your account
                    </p>

                    {/* 3. Email and Password Inputs */}
                    <form className="w-full space-y-4" action={handleSubmit} noValidate>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-700 ml-1">Email</label>
                            <input
                                type="email"
                                placeholder="e.g. alex@school.edu"
                                onChange={(val) => handleEmailChange(val)}
                                className="w-full px-4 py-1.5 bg-gray-100 border-transparent rounded-md text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all text-black"
                            />
                            {emailError && <span className="text-sm text-red-600">*Email is not valid! Follow hint</span>}
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-700 ml-1">Password</label>
                            <input
                                type="password"
                                onChange={(val) => handlePasswordChange(val)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-1.5 bg-gray-100 border-transparent rounded-md text-sm focus:bg-white focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all text-black"
                            />
                            {passwordError.error && <span className="text-sm text-red-600">*{passwordError.message}</span>}
                        </div>

                        <button
                            className="w-full py-1.5 bg-black text-white rounded-md hover:bg-gray-800 transition-all active:scale-[0.98] mt-2 cursor-pointer"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* 4. Forgot Password */}
                    <div className="flex justify-end mt-4">
                        <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                            Forgot Password?
                        </button>
                    </div>

                    {/* 5. Horizontal Line */}
                    <div className="w-full flex items-center my-8">
                        <div className="flex-grow border-t border-gray-100"></div>
                        <span className="px-3 text-gray-400 text-xs uppercase tracking-widest">or</span>
                        <div className="flex-grow border-t border-gray-100"></div>
                    </div>

                    {/* 6. Sign up buttons */}

                    <div className="w-full space-y-3">
                        <p className="text-gray-300 text-center"> Don't have an account? Sign up as:</p>
                        <button
                            className="w-full py-1.5 border border-gray-300 text-black text-sm font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                            onClick={() => handleRoleBasedSubmit('Teacher')}
                        >
                            Sign up as Teacher
                        </button>
                        <button
                            className="w-full py-1.5 border border-gray-300 text-black text-sm font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                            onClick={() => handleRoleBasedSubmit('Coordinator')}
                        >
                            Sign up as Coordinator
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default AuthenticationForm;