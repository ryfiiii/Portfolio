import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface HeaderProps {
    isScrolling: boolean;
}

const Header = ({ isScrolling }: HeaderProps) => {

    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const smoothScroll = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <>
            <header className="fixed w-full z-[9999]">
                <div className="flex justify-between items-center py-3 px-4 md:px-7 lg:px-14 bg-slate-100 shadow-md">
                    <div className="font-bold text-xl md:text-2xl">
                        <a href="#splash" onClick={(e) => smoothScroll('splash', e)}>
                            <h1>PortFolio</h1>
                        </a>
                    </div>
                    <ul className="hidden lg:flex gap-x-5">
                        <li>
                            <a href="#profile" onClick={(e) => smoothScroll('profile', e)}>Profile</a>
                        </li>
                        <li>
                            <a href="#skill" onClick={(e) => smoothScroll('skill', e)}>Skill</a>
                        </li>
                        <li>
                            <a href="#creation" onClick={(e) => smoothScroll('creation', e)}>Creation</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => smoothScroll('contact', e)}>Contact</a>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        {navActive ? (
                            <>
                                <FontAwesomeIcon icon={faXmark} onClick={toggleNav} className="text-2xl" />
                                <div className="w-full h-full fixed top-[52px] md:top-[56px] left-0 backdrop-blur-md bg-white/30 z-10">
                                    <ul className="flex flex-col gap-y-10 text-center text-xl p-20">
                                        <li className="flex flex-col gap-1">
                                            <a href="#profile" onClick={(e) => smoothScroll('profile', e)}>Profile</a>
                                            <div className="bg-rainbow h-[1px] w-full" />
                                        </li>
                                        <li className="flex flex-col gap-1">
                                            <a href="#skill" onClick={(e) => smoothScroll('skill', e)}>Skill</a>
                                            <div className="bg-rainbow h-[1px] w-full" />
                                        </li>
                                        <li className="flex flex-col gap-1">
                                            <a href="#creation" onClick={(e) => smoothScroll('creation', e)}>Creation</a>
                                            <div className="bg-rainbow h-[1px] w-full" />
                                        </li>
                                        <li className="flex flex-col gap-1">
                                            <a href="#contact" onClick={(e) => smoothScroll('contact', e)}>Contact</a>
                                            <div className="bg-rainbow h-[1px] w-full" />
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <FontAwesomeIcon icon={faBars} onClick={toggleNav} className="text-2xl" />
                        )}
                    </div>
                </div>
            </header>
            <div className={`z-[9999] right-5 bottom-5 fixed transform transition-opacity duration-500 ${isScrolling ? 'opacity-100' : 'opacity-0'}`}>
                <a href="#splash" onClick={(e) => smoothScroll('splash', e)}>
                    <span className="animate-bounce bg-slate-100 w-10 md:w-12 h-10 md:h-12 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faChevronUp} className="text-purple-500 text-lg" />
                    </span>
                </a>
            </div>
        </>
    );
};

export default Header;
