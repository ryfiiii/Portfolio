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
                            <div className="w-full lg:w-3/4 mx-auto min-h-32 rounded-lg shadow-lg border-slate-100 border-2 p-6" key={index}>
                                <div className="">
                                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg" loading="lazy" />
                                    <div className="flex flex-col gap-2">
                                        <p className="text-xl font-bold">{item.name}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Creation;
