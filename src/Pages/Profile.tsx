import FadeIn from '../Components/Ui/FadeIn';
import icon from '../assets/images/icon.jpg';

const Profile = () => {
    return (
        <section id="profile">
            <div className="w-full min-h-[50vh] py-32">
                <FadeIn>
                    <div className="w-3/4 mx-auto flex flex-col gap-12 lg:gap-20">
                        <h2 className="font-bold text-4xl text-center drop-shadow-2xl">Profile</h2>
                        <div className="flex gap-16 flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start">
                            <img src={icon} alt="icon" className="mt-14 h-48 w-48 object-cover rounded-full" loading="lazy" />
                            <div className="flex flex-col gap-10 font-noto-sans">
                                <p className="text-3xl font-semibold text-center lg:text-start">自己紹介</p>
                                <div className="flex flex-col gap-3">
                                    <p>2023年4月、新卒としてIT業界に飛び込み、エンジニアとしてのキャリアをスタートさせました。</p>
                                    <p>PHP、JavaScript、Reactなど、多様なプログラミング言語やフレームワークに触れ、ウェブ開発の奥深さと可能性に魅了されました。</p>
                                    <p>
                                        フロントエンドではUI/UX設計からモダンなフレームワークを使用した実装まで、バックエンドではデータベース設計、認証システム、APIの構築など
                                        日々の生活を支えるシステムの仕組みを幅広く理解し、それらに使われている技術を用いた開発を行いアウトプットするよう心掛けてきました。
                                    </p>
                                    <p>
                                        将来的には、技術力の向上はもちろん、ビジネス視点も兼ね備えたエンジニアを目指しています。
                                        プロジェクトの企画段階から関わり、技術面だけでなく、ビジネス全体を見渡せる幅広い能力を身につけたいと考えています。
                                    </p>
                                </div>
                                <p className="text-3xl font-semibold text-center lg:text-start">経歴</p>
                                <div className="flex flex-col gap-3">
                                    <p className="underline">2023/04~ 中小SES企業</p>
                                    <p>新卒エンジニアとしてキャリアをスタート。Web開発を中心に、幅広い技術スタックの基礎を習得。</p>
                                    <p className="underline">2024/04~ 某国内クラウド企業</p>
                                    <p>基盤システム・VPS系のシステムの新規開発・保守を行う。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section >
    );
};

export default Profile;
