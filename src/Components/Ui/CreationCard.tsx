import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Creation } from "../../Types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface CreationCardProps {
    item: Creation;
}

const CreationCard = ({ item }: CreationCardProps) => {
    return (
        <div className="w-full md:w-2/3 lg:w-3/4 mx-auto min-h-64 rounded-lg shadow-lg border-slate-100 border-2 flex flex-col lg:flex-row">
            <img src={item.image} alt={item.name} className="w-full lg:w-1/3 h-64 object-cover rounded-ss-lg rounded-se-lg lg:rounded-es-lg lg:rounded-se-none" />
            <div className="flex flex-col gap-8 py-8 px-12 w-full">
                <div className="flex gap-2 justify-center items-center">
                    <p className="text-2xl font-bold underline">{item.name}</p>
                    {item.github &&
                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="text-2xl transform cursor-pointer hover:scale-110 hover:duration-200" />
                        </a>
                    }
                    {item.link &&
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl transform cursor-pointer hover:scale-110 hover:duration-200" />
                        </a>
                    }
                </div>
                <div className="flex-1">
                    <p className="text-lg font-noto-sans">{item.description}</p>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-2">
                    {item.stack.map((stack, index) => (
                        <span className="bg-slate-200 px-2 py-1 rounded-md" key={index}>{stack}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreationCard;
