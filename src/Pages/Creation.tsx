import CreationCard from "../Components/Ui/CreationCard";
import { creation } from "../Config/Creation";

const Creation = () => {
    return (
        <section id="creation">
            <div className="w-full min-h-screen py-20">
                <div className="w-full md:w-3/4 p-6 md:p-0 mx-auto">
                    <h2 className="font-bold text-4xl text-center drop-shadow-2xl mb-16">Creation</h2>

                    {/* 制作物 */}
                    <div className="flex flex-col gap-12">
                        {creation.map((item, index) => (
                            <CreationCard index={index} item={item} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Creation;
