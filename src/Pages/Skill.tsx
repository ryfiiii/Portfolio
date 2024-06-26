import SkillCard from "../Components/Ui/SkillCard";
import SlideInLeft from "../Components/Ui/SlideInLeft";
import SlideInRight from "../Components/Ui/SlideInRight";
import { backend, frontend, others } from "../Config/Skill";

const Skill = () => {
    return (
        <section id="skill">
            <div className="w-full min-h-screen bg-skill-image bg-cover bg-center bg-scroll lg:bg-fixed py-20 overflow-hidden">
                <div className="w-3/4 mx-auto flex flex-col justify-center items-center gap-16">
                    <h2 className="font-bold text-4xl drop-shadow-2xl text-slate-200">Skill</h2>

                    {/* フロントエンド */}
                    <h3 className="text-slate-200 drop-shadow-2xl font-bold text-center text-2xl border-b-2 border-slate-900 font-noto-sans">フロントエンド</h3>
                    <SlideInLeft>
                        <div className="flex items-center justify-center flex-wrap gap-12 w-full">
                            {frontend.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </SlideInLeft>

                    {/* バックエンド */}
                    <h3 className="text-slate-200 drop-shadow-2xl font-bold text-center text-2xl border-b-2 border-slate-900 font-noto-sans">バックエンド</h3>
                    <SlideInRight>
                        <div className="flex items-center justify-center flex-wrap gap-12 w-full">
                            {backend.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </SlideInRight>

                    {/* その他 */}
                    <h3 className="text-slate-200 drop-shadow-2xl font-bold text-center text-2xl border-b-2 border-slate-900 font-noto-sans">その他</h3>
                    <SlideInLeft>
                        <div className="flex items-center justify-center flex-wrap gap-12 w-full">
                            {others.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </SlideInLeft>

                </div>
            </div>
        </section>
    );
};

export default Skill;
