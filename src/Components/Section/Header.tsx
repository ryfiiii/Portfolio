const Header = () => {
    const smoothScroll = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <header className="fixed w-full z-[9999]">
            <div className="flex justify-between items-center py-3 px-4 md:px-14 bg-slate-100 shadow-md">
                <div className="font-bold text-xl md:text-2xl">
                    <a href="#splash" onClick={(e) => smoothScroll('splash', e)}>
                        <h1>PortFolio</h1>
                    </a>
                </div>
                <ul className="hidden md:flex gap-x-5">
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
            </div>
        </header>
    );
};

export default Header;
