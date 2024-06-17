import { Skill } from "../../Types/types";

interface SkillCardProps {
    index: number;
    skill: Skill;
}

const SkillCard = ({ index, skill }: SkillCardProps) => {

    const getGaugeColor = (index: number) => {
        return index <= skill.level ? 'bg-yellow-300' : 'bg-slate-300';
    };

    return (
        <div key={index} className="flex justify-center items-center flex-col bg-white rounded-lg w-60 h-16 shadow-lg">
            <div className="flex justify-center items-center gap-2">
                <img src={skill.icon} alt={skill.name} className="h-8 w-8" loading="lazy" />
                <p className="text-xl font-bold">{skill.name}</p>
            </div>
            <div className="flex mt-[5px]">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className={`gauge w-8 h-2 mr-1 last:mr-0 ${getGaugeColor(index + 1)}`}></div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
