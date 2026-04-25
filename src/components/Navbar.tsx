"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import Logo from '../../public/logo.png'
import Image from "next/image";
import { useState } from "react";
import PedagoLoader from "./ui/Loader";
const Navbar = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const handleLogout = () => {

        logout();
        window.location.href = '/';

    };

    return (
        <nav className="flex items-center justify-between px-12 py-1 bg-white border-b border-gray-100 shadow-sm">
            <div className="text-xl font-bold text-black tracking-tight cursor-default flex justify-center items-center">
                <Image src={Logo.src} alt="logo" onClick={() => router.replace('/')} width={50} height={50} />
                PedagoGen
            </div>

            <div className="flex items-center gap-4">
                {user ? (

                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 flex justify-center gap-2 text-sm font-medium border border-none cursor-pointer transition-all duration-300 active:scale-95 text-black hover:decoration-underline"
                    >
                        <span className="text-gray-600 text-sm">
                            {user.role} Dashboard
                        </span>
                        <LogOut size={18} /> Log out
                    </button>

                ) : (
                    <>
                        <Link href="/auth">
                            <button className="px-5 py-2 text-sm font-medium text-black bg-white border border-black rounded-lg cursor-pointer transition-all duration-300 hover:bg-black hover:text-white active:scale-95">
                                Login
                            </button>
                        </Link>
                        <Link href="/auth">
                            <button className="px-5 py-2 text-sm font-medium text-white bg-black border border-black rounded-lg cursor-pointer transition-all duration-300 active:scale-95 shadow-sm">
                                Sign up
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;