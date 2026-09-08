import { Link } from "react-router-dom";
import Resumelogo from "../assets/Resumelogo.png";

export default function Navbar({ onMenuClick }) {
    return (
        <nav className="relative z-10 flex h-16 w-full shrink-0 items-center justify-between bg-gradient-to-b from-gray-700 to-blue-500 px-4 shadow-md md:justify-end md:px-6">
            <button
                onClick={onMenuClick}
                className="rounded-lg p-2 text-gray-100 hover:bg-gray-800/25 md:hidden"
                aria-label="Open menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <Link
                to="/"
                className="flex h-16 w-72 items-center justify-end"
            >
                <img
                    src={Resumelogo}
                    alt="ResumeBuilder Logo"
                    className="h-14 w-auto object-contain"
                />
            </Link>

        </nav>
    );
}