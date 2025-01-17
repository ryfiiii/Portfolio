import { Creation } from "../Types/types";

// 画像インポート
import portfolioImage from "../assets/creation/portfolio.png";
import shareCodeImage from "../assets/creation/sharecode.png";
import ryuTechImage from "../assets/creation/ryutech.png";
import blogShopImage from "../assets/creation/blogshop.png";

export const creation: Creation[] = [
    {
        name: "Portfolio",
        image: portfolioImage,
        description: "自己紹介や経歴、学習した技術スタック、制作物などを掲載しているポートフォリオサイト",
        link: "https://portfolio.ryfiii.com/",
        github: "https://github.com/ryfiiii/Portfolio?tab=readme-ov-file#readme",
        stack: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
        name: "ShareCode",
        image: shareCodeImage,
        description: "「手軽に、瞬時に、世界中へ。ちょっとしたコードをすぐに共有できるサービス」※現在制作中",
        link: "https://sharecode.ryfiii.com/",
        github: "https://github.com/ryfiiii/ShareCode?tab=readme-ov-file#readme",
        stack: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Laravel", "Inertia", "MySQL"],
    },
    {
        name: "RyuTech",
        image: ryuTechImage,
        description: "学んだ事をアウトプットする為に制作している個人ブログサイト",
        link: "https://wp.ryfiii.com/",
        github: null,
        stack: ["WordPress"],
    },
    {
        name: "BlogShop",
        image: blogShopImage,
        description: "ブログ記事の投稿・閲覧・購入が出来るプラットフォーム(練習で制作したため非公開)",
        link: null,
        github: "https://github.com/ryfiiii/Laravel_Stripe_Blog?tab=readme-ov-file#readme",
        stack: ["Laravel", "Stripe", "microCMS", "MySQL"],
    },
];