const Header = () => {
    return (
        <header className="fixed w-full z-[9999]">
            <div className="flex justify-between items-center py-3 px-4 md:px-14 bg-slate-100 shadow-md">
                <div className="font-bold text-xl md:text-2xl">
                    <a href="#splash">
                        <h1>PortFolio</h1>
                    </a>
                </div>
                <ul className="hidden md:flex gap-x-5">
                    <li>
                        <a href="#profile">Profile</a>
                    </li>
                    <li>
                        <a href="#skill">Skill</a>
                    </li>
                    <li>
                        <a href="#creation">Creation</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
