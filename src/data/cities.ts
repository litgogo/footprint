// ============================================================
// 足迹数据模型 v2.0 — 三级索引结构
// ============================================================

// --- 基础类型 ---

export interface Fragment {
  id: string;
  type: "ticket" | "location" | "moment";
  image?: string;
  caption: string;
  date?: string;
}

export interface Feeling {
  id: string;
  quote: string;
  context?: string;
}

export interface Thought {
  id: string;
  title: string;
  body: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  note?: string;
}

// --- 城市类型 ---

export interface City {
  slug: string;
  name: string;
  date: string;
  tagline: string;
  coordinates: { x: number; y: number };
  photo: string;
  keywords: string[];
  companion?: string;
  route: string;

  // 新增：三级索引
  topics: string[];
  fragments: Fragment[];
  feelings: Feeling[];
  thoughts: Thought[];
  people: Person[];
}

// ============================================================
// 城市数据
// ============================================================

export const cities: City[] = [
  // ----------------------------------------------------------
  // 济南 & 烟台
  // ----------------------------------------------------------
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
    topics: ["在地建筑", "文博展馆", "自然景观", "美食记忆"],
    people: [
      {
        id: "yellow-jn",
        name: "Yellow",
        role: "女儿",
        note: "在趵突泉边一起读老舍的《济南的冬天》，她第一次发现文字真的有温度。",
      },
    ],
    fragments: [
      {
        id: "jn-1",
        type: "location",
        image: "/photos/jinan-baotu.jpg",
        caption: "趵突泉 — 三股水汩汩往上冒，像大地在呼吸。",
        date: "2026.02.03",
      },
      {
        id: "jn-2",
        type: "moment",
        image: "/photos/jinan-snow.jpg",
        caption: "济南的冬天没有风声。雪落在泉水里，无声融化。老舍没说谎。",
        date: "2026.02.04",
      },
      {
        id: "jn-3",
        type: "ticket",
        caption: "大明湖畔 · 冬日游船票根",
        date: "2026.02.04",
      },
      {
        id: "jn-4",
        type: "location",
        image: "/photos/jinan-museum.jpg",
        caption: "山东博物馆 — 从大汶口到龙山，黑陶薄如蛋壳。",
        date: "2026.02.05",
      },
      {
        id: "jn-5",
        type: "moment",
        image: "/photos/yantai-sea.jpg",
        caption: "烟台的海在冬天格外安静，像一块未经打磨的灰色绸缎。",
        date: "2026.02.06",
      },
      {
        id: "jn-6",
        type: "ticket",
        caption: "烟台山灯塔登顶票 · 俯瞰整片渤海",
        date: "2026.02.06",
      },
    ],
    feelings: [
      {
        id: "jn-f1",
        quote: "冬天的济南是没有风声的——老舍诚不欺我。站在这座城里，才懂什么叫「温晴」。",
        context: "出发前刚读完《济南的冬天》，到趵突泉那一刻的验证感",
      },
      {
        id: "jn-f2",
        quote: "这座城市的节奏像泉水一样，不争不抢，但永远在涌。",
        context: "坐在泉城广场看来往行人",
      },
    ],
    thoughts: [
      {
        id: "jn-t1",
        title: "一座城市的「听觉温度」",
        body: "济南的冬天被老舍定义成了一种声音——「没有风声」。这不是数据的温度，是体感的温度。人在一个城市里的感受，往往不是气温决定的，是这座城市「听起来怎样」决定的。济南听起来是泉水声，小而持续，像白噪音机器。现代人总是戴着降噪耳机去对抗城市噪音，但济南自己就是一台降噪机器。\n\n这让我想起一个观点：城市的宜居性，可能应该用「分贝数」来排名，而不是 GDP。",
      },
    ],
  },

  // ----------------------------------------------------------
  // 昆明
  // ----------------------------------------------------------
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
    topics: ["在地建筑", "文博展馆", "美食记忆", "自然景观"],
    people: [
      {
        id: "yellow-km",
        name: "Yellow",
        role: "女儿 — 毕业旅行",
        note: "从高考战场下来后的第一次长途旅行。她说昆明的云和广州不一样，我说是因为你的眼睛不一样了。",
      },
    ],
    fragments: [
      {
        id: "km-1",
        type: "location",
        image: "/photos/kunming-lake.jpg",
        caption: "翠湖 — 满池荷花，老人在柳树下用云南话聊天下棋。",
        date: "2024.07.12",
      },
      {
        id: "km-2",
        type: "moment",
        image: "/photos/kunming-market.jpg",
        caption: "篆新菜市场 — 汪曾祺说「到了一个新地方，有人爱逛百货公司，有人爱逛书店，我宁可去逛逛菜市场。」",
        date: "2024.07.13",
      },
      {
        id: "km-3",
        type: "location",
        caption: "西南联大旧址 — 铁皮屋顶的教室，炮弹炸过三次，课没停过一节。",
        date: "2024.07.13",
      },
      {
        id: "km-4",
        type: "ticket",
        caption: "云南陆军讲武堂 · 黄色门楼",
        date: "2024.07.14",
      },
      {
        id: "km-5",
        type: "moment",
        caption: "过桥米线的仪式感：一碟碟往滚汤里放，像在进行某种古老的时间仪式。",
        date: "2024.07.14",
      },
    ],
    feelings: [
      {
        id: "km-f1",
        quote: "汪曾祺教会我的不是吃什么，是用什么态度吃。他那代人经历了那么多，还能津津有味写一颗咸鸭蛋——这是很深的功力。",
        context: "在篆新菜市场看着熙熙攘攘的人群",
      },
      {
        id: "km-f2",
        quote: "女儿问我：西南联大那么苦为什么还那么厉害？我想了想说，因为他们知道自己在为什么读书。",
        context: "西南联大旧址，Yellow 的一个提问",
      },
    ],
    thoughts: [
      {
        id: "km-t1",
        title: "菜市场是城市的「胃镜」",
        body: "汪曾祺说菜市场最有生气。在篆新菜市场转了三个小时，我大概理解了他的意思。菜市场是城市最诚实的器官——没有滤镜，没有文案，没有「打卡点」。食材怎么摆、老板怎么吆喝、买菜的人问什么问题，这些才是城市的底层代码。\n\n篆新的菌子摊前围满了人，老板一边削松茸一边教你怎么挑。那种知识传递的密度，不亚于任何一堂课。西南联大的教授们当年可能就在这样的菜市场旁边备课。",
      },
      {
        id: "km-t2",
        title: "铁皮屋顶下的「抗干扰力」",
        body: "在西南联大旧址看到一个细节：铁皮屋顶的教室，下雨时雨声大到老师讲课根本听不见。有一次陈岱孙教授在黑板上写了四个字：「静坐听雨」。\n\n这是个极好的隐喻。信息过载的时代，我们缺的不是更多的「输入」，是「静坐听雨」的能力——在不可阻挡的噪音中保持内心的课堂秩序。",
      },
    ],
  },

  // ----------------------------------------------------------
  // 大理
  // ----------------------------------------------------------
  {
    slug: "dali",
    name: "大理",
    date: "2025 夏",
    tagline: "按照你喜欢的方式生活，就是最好的人生",
    coordinates: { x: 38, y: 68 },
    photo: "/photos/dali.jpg",
    keywords: ["风花雪月", "乌托邦", "主理人", "苍山洱海"],
    route: "/cities/dali",
    topics: ["自然景观", "在地建筑", "文创聚落", "美食记忆"],
    people: [
      {
        id: "dl-cafe-owner",
        name: "林姐",
        role: "咖啡馆主理人 · 前北京互联网人",
        note: "「逃离不是目的，重新定义生活才是。」在大理第五年，从写代码到烘豆子。",
      },
    ],
    fragments: [
      {
        id: "dl-1",
        type: "moment",
        image: "/photos/dali-lake.jpg",
        caption: "洱海边骑行 — 苍山十九峰一字排开，像大地的脊背。",
        date: "2025.08.02",
      },
      {
        id: "dl-2",
        type: "location",
        caption: "喜洲古镇 — 白族照壁上的题字，「清白传家」「琴鹤家声」，每家都有自己的信仰。",
        date: "2025.08.03",
      },
      {
        id: "dl-3",
        type: "moment",
        caption: "林姐的咖啡馆里，一整个下午只有两拨客人。她说大理教会了她「允许」。",
        date: "2025.08.04",
      },
      {
        id: "dl-4",
        type: "ticket",
        caption: "苍山索道票 · 洗马潭索道",
        date: "2025.08.05",
      },
    ],
    feelings: [
      {
        id: "dl-f1",
        quote: "大理不是逃离的终点——它是你终于敢问自己「我想怎么活」的那个地方。",
        context: "在洱海边发呆的下午",
      },
      {
        id: "dl-f2",
        quote: "白族照壁上写着「清白传家」四个字。一个民族的价值观刻在墙上，风吹日晒也不改。这种自信，我有点羡慕。",
        context: "喜洲古镇",
      },
    ],
    thoughts: [
      {
        id: "dl-t1",
        title: "「主理人」现象与社会实验",
        body: "大理最有趣的不是风景，是人。几乎每家店都有一个「主理人」——这个称谓本身就很有意思。不是老板、不是经理，是「主理」。意味着他们「理」的是生活，不只是生意。\n\n林姐从北京来，之前在互联网大厂写代码。她说在大理，没人问你「在哪上班」，大家问「你最近做什么」。这个问题更具体、更当下，也更尊重人的流动性。\n\n大理像一个大型的社会实验：如果给人们足够的空间、阳光和低成本的安全网，他们会选择怎么生活？答案似乎是：他们会选择「认真生活」，而不是「认真工作」。",
      },
    ],
  },

  // ----------------------------------------------------------
  // 泉州
  // ----------------------------------------------------------
  {
    slug: "quanzhou",
    name: "泉州",
    date: "2025.01",
    tagline: "半城烟火半城仙，神明的海上办事处",
    coordinates: { x: 72, y: 62 },
    photo: "/photos/quanzhou.jpg",
    keywords: ["海上丝路", "簪花", "木偶", "开元寺"],
    route: "/cities/quanzhou",
    topics: ["在地建筑", "文博展馆", "市井烟火", "非遗传承"],
    people: [
      {
        id: "qz-artisan",
        name: "陈师傅",
        role: "提线木偶传承人",
        note: "「木偶有36根线，但控制它的只有一双手。人心不散，戏就不散。」",
      },
    ],
    fragments: [
      {
        id: "qz-1",
        type: "location",
        image: "/photos/quanzhou-kaiyuan.jpg",
        caption: "开元寺 — 东西塔对峙，唐代桑树仍在开花。",
        date: "2025.01.18",
      },
      {
        id: "qz-2",
        type: "moment",
        image: "/photos/quanzhou-xunpu.jpg",
        caption: "蟳埔女簪花围 — 头发上开出一座花园。",
        date: "2025.01.19",
      },
      {
        id: "qz-3",
        type: "moment",
        caption: "木偶剧院的钟馗醉酒——木偶举起酒杯的瞬间，全场屏息。36根线，每一根都是心跳。",
        date: "2025.01.19",
      },
      {
        id: "qz-4",
        type: "ticket",
        caption: "泉州海外交通史博物馆 · 沉船展厅门票",
        date: "2025.01.20",
      },
      {
        id: "qz-5",
        type: "location",
        caption: "关帝庙的香火旺得像起了雾，隔壁就是清净寺。神在泉州做邻居。",
        date: "2025.01.20",
      },
    ],
    feelings: [
      {
        id: "qz-f1",
        quote: "泉州有「世界宗教博物馆」之称，但我觉得更像「神明的合租公寓」。各住各的，相安无事。",
        context: "在涂门街看关帝庙和清净寺隔街相望",
      },
      {
        id: "qz-f2",
        quote: "簪花围戴上的那一刻，我才意识到自己很久没有「被装饰」过了。成年人把很多东西简化到了无趣。",
        context: "蟳埔村体验簪花",
      },
    ],
    thoughts: [
      {
        id: "qz-t1",
        title: "神明的「邻里关系」",
        body: "泉州最让我着迷的不是单一的庙宇，是它们之间的关系。涂门街上，关帝庙的香火袅袅升腾，几百米外就是中国现存最古老的伊斯兰教寺院清净寺，再走几步是文庙、天后宫。不同文明的巅峰之作像邻居一样排在一起。\n\n这不是「融合」——融合听起来像把所有东西倒进榨汁机。泉州是「并存」：各守各的规矩，各信各的神，但在同一片天空下。这种并存不需要理论框架，它就是一个港口城市千年日常积累下来的肌肉记忆。",
      },
    ],
  },

  // ----------------------------------------------------------
  // 香港
  // ----------------------------------------------------------
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
    topics: ["市井烟火", "自然景观", "光影记忆", "美食记忆"],
    people: [
      {
        id: "echo-hk",
        name: "Echo",
        role: "挚友 — 同行者",
        note: "两个听着粤语歌长大的人，在香港的街头终于找到了歌词里的坐标。",
      },
    ],
    fragments: [
      {
        id: "hk-1",
        type: "moment",
        image: "/photos/hongkong-dingding.jpg",
        caption: "叮叮车二层 — 铜锣湾到中环，窗户开着，风吹得人不想下车。",
        date: "2024.12.20",
      },
      {
        id: "hk-2",
        type: "location",
        image: "/photos/hongkong-peak.jpg",
        caption: "太平山顶 — 维港夜景像打翻了一盒珠宝。",
        date: "2024.12.21",
      },
      {
        id: "hk-3",
        type: "ticket",
        caption: "天星小轮 · 尖沙咀→中环",
        date: "2024.12.21",
      },
      {
        id: "hk-4",
        type: "moment",
        caption: "大东山芒草 — Eason《富士山下》MV 取景地，风吹过时整座山都在唱歌。",
        date: "2024.12.22",
      },
      {
        id: "hk-5",
        type: "moment",
        caption: "庙街夜市 — 煲仔饭的焦香裹着摊贩的叫卖声。TVB 没有骗人。",
        date: "2024.12.22",
      },
    ],
    feelings: [
      {
        id: "hk-f1",
        quote: "当叮叮车的轨道声和记忆里的港乐前奏重合的瞬间，我确认了一件事：有些地方你从未去过，但它一直在你身体里。",
        context: "第一次坐上叮叮车，轨道转弯发出吱呀声",
      },
      {
        id: "hk-f2",
        quote: "和 Echo 站在维港边上，同时哼出《倾城》。成年人的友谊不需要每天联系，但在对的场景里，默契会自动解锁。",
        context: "维港夜景",
      },
    ],
    thoughts: [
      {
        id: "hk-t1",
        title: "「未抵达的故乡」",
        body: "香港于我是一种很奇怪的存在：我从未来过，但它像一个「未抵达的故乡」。港乐、TVB 剧、电影——这些文化输出在我们这代人心里种下了一个比真实香港更完整的香港。中环、铜锣湾、旺角这些地名不是因为地图而存在，是因为无数个歌词、对白、剧情转折。\n\n所以这次来，不像是「旅行」，更像是「对答案」。每个地点都是一道填空题：原来叮叮车转弯真的是那种声音，原来兰桂坊的斜度和电视里一模一样。这种「验证」带来的快感，比发现新东西更强烈。",
      },
      {
        id: "hk-t2",
        title: "密度与呼吸感",
        body: "香港是世界上人口密度最高的城市之一，但在大东山上，芒草摇曳，整片山野只有风声。这种「密度的张力」是香港最迷人的地方——你可以从中环的钢铁丛林出发，一小时内站到一座山上，看芒草像海浪一样起伏。\n\n现代人常说要「逃离城市」，香港人说：不需要逃离，你只需要上山。密度和呼吸感不是对立的——它们是可以并存的两种生活速度，取决于你选择哪条路。",
      },
    ],
  },
];

// ============================================================
// 站点配置
// ============================================================

export const siteConfig = {
  title: "此处安放",
  slogan: "脚步的延伸，是认知的位移",
  subtitle: "奔赴山海，和自己重逢。有些旅行，不是为了抵达。",
  author: "Gogo",
};
