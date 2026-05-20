export interface City {
  slug: string;
  name: string;
  date: string;
  tagline: string; // 一句话钩子
  coordinates: { x: number; y: number }; // SVG 坐标 (百分比)
  photo: string; // 封面图路径
  keywords: string[];
  companion?: string; // 同行者
  route: string; // 城市详情页路径
}

export const cities: City[] = [
  {
    slug: "jinan-yantai",
    name: "济南 & 烟台",
    date: "2026.02",
    tagline: "在泉水与小雪之间，把世界的音量调低",
    coordinates: { x: 68, y: 35 },
    photo: "/photos/jinan-yantai.jpg",
    keywords: ["泉水", "老舍", "无风声的冬天", "海"],
    companion: "女儿",
    route: "/cities/jinan-yantai",
  },
  {
    slug: "kunming",
    name: "昆明",
    date: "2024 夏",
    tagline: "一万次的春和景明，跟着汪曾祺吃遍春城",
    coordinates: { x: 42, y: 73 },
    photo: "/photos/kunming.jpg",
    keywords: ["西南联大", "汪曾祺", "菜市场", "翠湖"],
    companion: "女儿（毕业旅行）",
    route: "/cities/kunming",
  },
  {
    slug: "dali",
    name: "大理",
    date: "2025 夏",
    tagline: "按照你喜欢的方式生活，就是最好的人生",
    coordinates: { x: 38, y: 68 },
    photo: "/photos/dali.jpg",
    keywords: ["风花雪月", "乌托邦", "主理人", "苍山洱海"],
    route: "/cities/dali",
  },
  {
    slug: "quanzhou",
    name: "泉州",
    date: "2025.01",
    tagline: "半城烟火半城仙，神明的海上办事处",
    coordinates: { x: 72, y: 62 },
    photo: "/photos/quanzhou.jpg",
    keywords: ["海上丝路", "簪花", "木偶", "开元寺"],
    route: "/cities/quanzhou",
  },
  {
    slug: "hongkong",
    name: "香港",
    date: "2024.12",
    tagline: "与旧日的光影相逢，天荒地老流连在摩天轮",
    coordinates: { x: 67, y: 78 },
    photo: "/photos/hongkong.jpg",
    keywords: ["港乐", "TVB", "大东山", "叮叮车"],
    companion: "Echo",
    route: "/cities/hongkong",
  },
];

export const siteConfig = {
  title: "此处安放",
  slogan: "奔赴山海，和自己重逢。",
  subtitle: "有些旅行，不是为了抵达。",
  author: "Gogo",
};
