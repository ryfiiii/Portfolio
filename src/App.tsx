import Footer from './Components/Section/Footer'
import Header from './Components/Section/Header'
import Contact from './Pages/Contact'
import Creation from './Pages/Creation'
import Profile from './Pages/Profile'
import Skill from './Pages/Skill'
import Splash from './Pages/Splash'
import { useInView } from 'react-intersection-observer'

const App = () => {

    const { ref, inView } = useInView({ // 変更
        threshold: 0.01,
    });

    return (
        <>
            <div className="font-inter text-slate-600">
                <Header isScrolling={inView} />
                <main>
                    <Splash />
                    <div ref={ref}>
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
