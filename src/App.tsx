import { useEffect, useRef, useState } from 'react'
import Footer from './Components/Section/Footer'
import Header from './Components/Section/Header'
import Contact from './Pages/Contact'
import Creation from './Pages/Creation'
import Profile from './Pages/Profile'
import Skill from './Pages/Skill'
import Splash from './Pages/Splash'

const App = () => {

    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const mainContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolling(entry.isIntersecting);
            },
            { threshold: [0.01] }
        );

        if (mainContentRef.current) {
            observer.observe(mainContentRef.current);
        }

        return () => {
            if (mainContentRef.current) {
                observer.unobserve(mainContentRef.current);
            }
        };
    }, [setIsScrolling]);

    return (
        <>
            <div className="font-inter text-slate-600">
                <Header isScrolling={isScrolling} />
                <main>
                    <Splash />
                    <div ref={mainContentRef}>
                        <Profile />
                        <Skill />
                        <Creation />
                        <Contact />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
