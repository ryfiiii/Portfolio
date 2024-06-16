import Footer from './Components/Section/Footer'
import Header from './Components/Section/Header'
import Contact from './Pages/Contact'
import Creation from './Pages/Creation'
import Profile from './Pages/Profile'
import Skill from './Pages/Skill'
import Splash from './Pages/Splash'

const App = () => {

    return (
        <>
            <div className="font-inter text-slate-600">
                <Header />
                <Splash />
                <Profile />
                <Skill />
                <Creation />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default App
