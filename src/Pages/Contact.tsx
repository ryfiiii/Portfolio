const Contact = () => {

    const formSpreeId = import.meta.env.VITE_FORMSPREE_ID;

    return (
        <section id="contact">
            <div className="w-full min-h-[75vh] bg-contact-image bg-cover bg-center bg-scroll lg:bg-fixed py-20">
                <div className="w-full md:w-3/4 p-6 md:p-0 mx-auto flex flex-col justify-center items-center gap-16">
                    <h2 className="font-bold text-4xl drop-shadow-2xl text-slate-200">Contact</h2>

                    {/* お問い合わせフォーム */}
                    <div className="w-full md:w-4/5 lg:w-2/3 min-h-64 backdrop-blur-md bg-white/10 rounded-2xl shadow-md p-6 md:p-16">
                        <form action={`https://formspree.io/f/${formSpreeId}`} method="POST">
                            <div className="flex flex-col gap-5 md:gap-7 w-full">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="font-noto-sans mb-1 font-semibold">お名前<span className="text-red-500 ml-1">*</span></label>
                                    <input type="text" className="p-2 outline-none border-2 border-slate-300 rounded-lg focus:border-indigo-500" name="name" id="name" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="company" className="font-noto-sans mb-1 font-semibold">会社名</label>
                                    <input type="text" className="p-2 outline-none border-2 border-slate-300 rounded-lg focus:border-indigo-500" name="company" id="company" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="font-noto-sans mb-1 font-semibold">メールアドレス<span className="text-red-500 ml-1">*</span></label>
                                    <input type="email" className="p-2 outline-none border-2 border-slate-300 rounded-lg focus:border-indigo-500" name="email" id="email" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message" className="font-noto-sans mb-1 font-semibold">内容<span className="text-red-500 ml-1">*</span></label>
                                    <textarea className="resize-y min-h-32 p-2 outline-none border-2 border-slate-300 rounded-lg focus:border-indigo-500" name="message" id="message" />
                                </div>
                                <button type="submit" className="w-2/3 md:w-1/2 lg:w-1/4 mx-auto bg-slate-300 py-2 px-5 rounded-lg shadow-md transform hover:duration-200 hover:bg-slate-400 font-noto-sans font-semibold">送信</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
