import icon from '../assets/images/icon.jpg';

const Profile = () => {
    return (
        <section id="profile">
            <div className="w-full min-h-[50vh] py-32">
                <div className="w-3/4 mx-auto flex flex-col gap-12 lg:gap-20">
                    <h2 className="font-bold text-4xl text-center drop-shadow-2xl">Profile</h2>
                    <div className="flex gap-16 flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start">
                        <img src={icon} alt="icon" className="mt-14 h-48 w-48 object-cover rounded-full" loading="lazy" />
                        <div className="flex flex-col gap-10 font-noto-sans">
                            <p className="text-3xl font-semibold text-center lg:text-start">自己紹介</p>
                            <div className="flex flex-col gap-3">
                                <p>2023年4月に新卒としてIT業界に足を踏み入れました。</p>
                                <p>PHP・JavaScriptを始めとした、様々なプログラミング言語やフレームワークの基礎に触れ、どんどんとウェブ開発の世界に魅せられていきました。</p>
                                <p>
                                    フロントエンドはUI・UXからモダンなフレームワークの使い方まで、バックエンドはデータベース設計から決済処理・認証やAPIの作成まで、
                                    身の回りにあるシステムがどう動いているかを理解し、それらに使われている技術を用いた開発を行いアウトプットするよう心掛けてきました。
                                </p>
                                <p>
                                    将来的には、技術は勿論のこと、会社という営利組織を回していくために、更に深く広い知識を身に付け、
                                    要件定義からプロジェクトに携わることができるエンジニアを目指しています。
                                </p>
                            </div>
                            <p className="text-3xl font-semibold text-center lg:text-start">経歴</p>
                            <div className="flex flex-col gap-3">
                                <p className="underline">2023/04 中小SES会社</p>
                                <p>未経験から新卒としてエンジニアとしてのキャリアをスタート。ウェブ開発を主に様々な技術の基礎を学ぶ。</p>
                                <p className="underline">2024/04 某国内クラウド会社</p>
                                <p>基盤システム・VPS系統のシステム保守・新規開発を行う。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Profile;
