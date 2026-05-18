const days = [
  {
    date: "6/5 周五",
    title: "入境・打卡亲吻桥",
    core: "入境通关・小镇打卡",
    summary: [
      ["下午", "落地通关、取行李、全员集合，入住希尔顿"],
      ["傍晚", "步行至亲吻桥，预选机位拍落日剪影"],
      ["晚上", "欢迎晚餐，观赏“海洋之吻”高空烟花秀"],
    ],
    items: [
      ["14:00", "落地通关，提取行李，全员集合", "交通"],
      ["15:30", "抵达希尔顿，按预分配房间表直接对号入住", "住宿"],
      ["17:45", "步行至亲吻桥游玩，长焦拍摄落日剪影，建议提前选定机位", "游玩"],
      ["18:30", "欢迎晚餐 — Cai Mam Bistro 或 Sun Bavaria GastroPub", "餐饮"],
      ["21:30", "“海洋之吻”高空烟花秀，酒店露台或临海区域免费观赏", "游玩"],
    ],
    notes: [
      "运力：10 人 + 10 件大行李，须预订 29 座大巴或 16 座车 + 独立行李车",
      "晚餐需提前预订 10 人长桌",
      "入境事实：新加坡直飞享 30 天免签，凭护照及返深机票即可通关，无需填写入境卡",
    ],
  },
  {
    date: "6/6 周六",
    title: "包船出海・夜市体验",
    core: "Deep Sea 探索・阳东夜市",
    summary: [
      ["上午", "晨泳、集合防晒，包船前往 Gam Ghi 岛深水区"],
      ["中午", "团钓石斑鱼、礁岛浮潜，船上午餐"],
      ["晚上", "酒店休整后前往阳东夜市海鲜晚餐"],
    ],
    items: [
      [
        "07:00",
        "晨泳（希尔顿无边泳池），水平稳、游客少，1-2km 往返蛙泳训练",
        "运动",
      ],
      ["07:45", "晨泳结束，换洗 + 早餐", "餐饮"],
      ["08:20", "大堂集合，提前穿好泳衣，涂好防晒", "集合"],
      [
        "09:00",
        "出发 Deep Sea 探索，乘包船前往 Gam Ghi 岛 15-20 米深水区，团钓石斑鱼，礁岛浮潜",
        "游玩",
      ],
      ["12:00", "船上现做午餐，钓获海鱼直接碳烤或清蒸", "餐饮"],
      ["14:30", "返回酒店，休整", "休整"],
      ["16:30", "自由活动（按摩 / 泳池 / 购物），18:00 准时集合", "自由"],
      ["18:00", "阳东夜市晚餐 — Crab House 或 Xin Chao", "餐饮"],
    ],
    notes: [
      "点单策略：财务官统收公费，“提前预订主菜拼盘 + 现场加点小吃”，避免 10 人单点混乱",
      "海况：6 月雨季初期上午出海风浪最优；预订包船须配备专业钓竿（Rod and Reel）",
    ],
  },
  {
    date: "6/7 周日",
    title: "跨海缆车・沙滩运动",
    core: "香岛乐园・Bai Sao 海滩",
    summary: [
      ["上午", "步行至缆车站，乘跨海缆车进入香岛乐园"],
      ["下午", "Paradiso 补给后前往白沙滩，慢跑或躺椅放松"],
      ["晚上", "日落小镇海鲜晚餐，回房打包行李"],
    ],
    items: [
      ["09:00", "出发步行至缆车站", "交通"],
      ["09:30", "乘世界最长跨海缆车进入香岛乐园", "游玩"],
      [
        "09:30",
        "优先打“木质过山车（Roaring Timbers）”，拆 2-3 个行动小组分散排队",
        "游玩",
      ],
      ["11:30", "造浪池集合", "游玩"],
      ["11:45", "返回缆车站，12:00 前离岛", "交通"],
      ["12:30", "Paradiso Restaurant / Beach Club 下午茶", "餐饮"],
      ["14:00", "前往白沙滩 Bai Sao", "交通"],
      [
        "14:30",
        "海岸线慢跑（退潮后沙滩平整，沿水线 3-5km）；其余成员租躺椅放松",
        "运动",
      ],
      ["18:30", "日落小镇海鲜餐厅晚餐，就餐后步行回房打包行李", "餐饮"],
    ],
    notes: [
      "缆车陷阱：停运通常 12:00-13:30，须 11:45 前到站。出发当天向前台核实最新时刻表",
      "Paradiso 提供饮品、洗手间及冲洗设备，海滩补给一站解决",
      "日落小镇晚餐需提前 3 天预订，指定专人负责",
    ],
  },
  {
    date: "6/8 周一",
    title: "高效退房・返程深圳",
    core: "10:40 国际航班",
    summary: [
      ["早晨", "早餐、统一退房、收齐房卡与杂费账单"],
      ["上午", "大巴到位，机场团体托运、护照核验、安检候机"],
      ["10:40", "航班起飞返程深圳"],
    ],
    items: [
      ["07:00", "酒店早餐", "餐饮"],
      ["07:30", "集中退房，统一处理杂费账单，收齐房卡", "退房"],
      ["07:15", "大巴到位，满载行李出发前往富国岛机场", "交通"],
      ["07:45", "抵达机场，10 人团体托运 + 护照核验", "机场"],
      ["08:15", "安检及候机", "机场"],
      ["10:40", "航班起飞", "航班"],
    ],
    notes: [
      "07:15 出发，确保 08:15 抵达机场，留足 2.5 小时余量，应对高峰期或突发手续状况",
      "再次调用 29 座大巴（或 16 座 + 行李车），与 Day1 入境同一运力方案",
      "前一晚完成行李打包，退房当天无需临时整理",
    ],
  },
];
const preorder = [
  "6/5 晚：Cai Mam Bistro / Sun Bavaria — 10 人长桌",
  "6/6 晚：Crab House / Xin Chao — 设团体收公费账",
  "6/7 晚：日落小镇海鲜餐厅",
  "去程 / 回程：确认 29 座大巴档期",
  "6/6 包船：确认配备 Rod and Reel",
  "酒店：预发房间分配表（姓名↔房号）",
  "6/7 缆车：前台核实当日停运时刻表",
];
const restaurants = [
  [
    "Cai Mam Bistro",
    0.4,
    4.7,
    "越南菜",
    "日落小镇",
    "适合欢迎晚餐，越南家常菜与海鲜菜式稳定。",
  ],
  [
    "Sun Bavaria GastroPub",
    0.5,
    4.5,
    "西餐酒馆",
    "日落小镇",
    "靠近亲吻桥与烟花观赏区，适合团队小酌。",
  ],
  [
    "Draft Beer Sunset Town",
    0.6,
    4.4,
    "酒馆小食",
    "日落小镇",
    "晚间氛围轻松，适合作为烟花秀后备选。",
  ],
  [
    "Kiss Bridge Coffee & Bar",
    0.8,
    4.3,
    "咖啡甜品",
    "日落小镇",
    "亲吻桥动线内的轻量补给点，适合等日落或集合。",
  ],
  [
    "RuNam Phu Quoc",
    1.2,
    4.2,
    "咖啡甜品",
    "日落小镇",
    "越南咖啡与简餐稳定，适合不想正餐时过渡。",
  ],
  [
    "Mango Bay On The Rocks",
    22,
    4.6,
    "西餐酒馆",
    "翁朗",
    "海边景观餐厅，适合想安排一次高质感日落晚餐。",
  ],
  [
    "The Home Pizza",
    23,
    4.6,
    "西餐酒馆",
    "阳东",
    "披萨与意面适合团队里不吃海鲜的成员。",
  ],
  [
    "Saigonese Eatery",
    24,
    4.6,
    "越南菜",
    "阳东",
    "创意越南菜和早午餐都稳，环境适合小组自由行动。",
  ],
  [
    "Xin Chao Seafood Restaurant",
    25,
    4.3,
    "越南海鲜",
    "阳东",
    "海景海鲜餐厅，适合 10 人桌并兼顾本地风味。",
  ],
  [
    "Crab House Phu Quoc",
    26,
    4.4,
    "美式海鲜",
    "阳东夜市",
    "蟹类和海鲜拼盘清晰，适合团体按公费统一点单。",
  ],
  [
    "Bun Quay Kien Xay",
    26.5,
    4.2,
    "本地小吃",
    "阳东",
    "富国岛特色搅粉，适合夜市前后补充小吃体验。",
  ],
  [
    "Ra Khoi Restaurant",
    27,
    4.1,
    "越南海鲜",
    "阳东",
    "本地老牌海鲜馆，菜品覆盖面广。",
  ],
  [
    "Oc Noc Quan",
    28,
    4.5,
    "海鲜烧烤",
    "阳东",
    "螺类与烤物选择多，适合夜市风格延伸。",
  ],
  [
    "Phung Fish Noodle",
    28.2,
    4.3,
    "本地小吃",
    "阳东",
    "鱼粉汤头清爽，适合早午餐或夜市前垫肚子。",
  ],
  [
    "Bep Ba Ngoai",
    28.5,
    4.4,
    "越南菜",
    "阳东",
    "家常越南菜分量友好，适合多人共享。",
  ],
  [
    "Chuon Chuon Bistro & Sky Bar",
    29,
    4.4,
    "西餐酒馆",
    "阳东",
    "山坡视野好，适合看海景和轻松拍照。",
  ],
  [
    "Quan Cat Bien",
    29.5,
    4.2,
    "海鲜烧烤",
    "阳东",
    "在地海鲜烧烤氛围强，适合想体验热闹排档。",
  ],
  [
    "Oc 343",
    30,
    4.3,
    "海鲜烧烤",
    "阳东",
    "螺类选择多，适合尝试越式蘸料和夜宵。",
  ],
  [
    "Com Tam Huynh Nhu",
    30.5,
    4.1,
    "本地小吃",
    "阳东",
    "碎米饭出餐快，适合自由活动时快速解决一餐。",
  ],
  [
    "Thanh Nga Seafood",
    9.2,
    4.4,
    "越南海鲜",
    "Bai Sao",
    "白沙滩海鲜备选，适合运动后补餐。",
  ],
  [
    "Paradiso Restaurant / Beach Club",
    8.5,
    3.8,
    "海滩简餐",
    "Bai Sao",
    "白沙滩补给点，饮品、洗手间、冲洗设备便利。",
  ],
].map(([name, distance, rating, cuisine, area, why]) => ({
  name,
  distance,
  rating,
  cuisine,
  area,
  why,
}));
let page = "overview",
  loggedIn = false,
  favorites = [],
  modalItem = null;
const app = document.querySelector("#app"),
  entry = document.querySelector("#profileEntry"),
  modal = document.querySelector("#modal");
let calendarText =
  "6/5 抵达富国岛，亲吻桥与欢迎晚餐\n6/6 包船出海，阳东夜市\n6/7 跨海缆车，Bai Sao 白沙滩\n6/8 退房返程深圳";

const placeImages = {
  kissBridge: {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kiss_Bridge_at_sunset_Phu_Quoc_Island_Vietnam.jpg?width=640",
    caption: "亲吻桥 Kiss Bridge 日落实景",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kiss_Bridge_at_sunset_Phu_Quoc_Island_Vietnam.jpg",
  },
  sunsetTown: {
    src: "https://visitphuquoc.com.vn/VisitPhuQuoc/_default_upload_bucket/1827/image-thumb__1827__720_jpg/nha%20hang%20bia%20sun%20bavaria%20bistro%203%402x.9e2a84e2.673fd9b6.jpg",
    caption: "日落小镇夜景实景",
    source: "Visit Phu Quoc",
    sourceUrl: "https://visitphuquoc.com.vn/en/sun-bavaria-gastropub",
  },
  cableCar: {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/H%C3%B2n_Th%C6%A1m_cable_car_above_the_An_Th%E1%BB%9Bi_township.jpg?width=640",
    caption: "Hon Thom 跨海缆车实景",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:H%C3%B2n_Th%C6%A1m_cable_car_above_the_An_Th%E1%BB%9Bi_township.jpg",
  },
  cableTown: {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/H%C3%B2n_Th%C6%A1m_cable_car_above_the_An_Th%E1%BB%9Bi_township.jpg?width=640",
    caption: "缆车穿越 An Thoi 镇实景",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:H%C3%B2n_Th%C6%A1m_cable_car_above_the_An_Th%E1%BB%9Bi_township.jpg",
  },
  baiSao: {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kem_Beach_aerial_view_Phu_Quoc_Island_Vietnam.jpg?width=640",
    caption: "Bai Sao / Kem Beach 白沙滩实景",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kem_Beach_aerial_view_Phu_Quoc_Island_Vietnam.jpg",
  },
  gamGhi: {
    src: "https://www.snorkeling-report.com/wp-content/uploads/2020/12/phuquoc002.jpg",
    caption: "Gam Ghi 岛浮潜海域实景",
    source: "Snorkeling Report",
    sourceUrl: "https://www.snorkeling-report.com/spot/snorkeling-gam-ghi-island/",
  },
  phuQuocBeach: {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kem_Beach_aerial_view_Phu_Quoc_Island_Vietnam.jpg?width=640",
    caption: "富国岛海岸实景",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kem_Beach_aerial_view_Phu_Quoc_Island_Vietnam.jpg",
  },
  anThoi: {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/L%C3%A0ng_ch%C3%A0i,_an_th%E1%BB%9Bi,_Phuquoc,_vietnam_-_panoramio.jpg?width=640",
    caption: "An Thoi / 南岛港区实景",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:L%C3%A0ng_ch%C3%A0i,_an_th%E1%BB%9Bi,_Phuquoc,_vietnam_-_panoramio.jpg",
  },
  aquatopia: {
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cong-vien-nuoc-aquatopia-5.jpg?width=640",
    caption: "香岛乐园 / Aquatopia 实景",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cong-vien-nuoc-aquatopia-5.jpg",
  },
};
const restaurantImageLookup = {
  "Cai Mam Bistro": [{
    src: "https://caimamcom.storage.googleapis.com/wp-content/uploads/2024/08/17181252/6138596701351119896.jpg",
    caption: "Cai Mam Bistro 店内与餐品实景",
    source: "Cai Mam 官网 / Google 图片",
    sourceUrl: "https://caimam.com/branches/cai-mam-bistro-vietnamese-noodles-cafe/",
  }],
  "Sun Bavaria GastroPub": [{
    src: "https://visitphuquoc.com.vn/VisitPhuQuoc/_default_upload_bucket/1827/image-thumb__1827__720_jpg/nha%20hang%20bia%20sun%20bavaria%20bistro%203%402x.9e2a84e2.673fd9b6.jpg",
    caption: "Sun Bavaria GastroPub 海边餐厅实景",
    source: "Visit Phu Quoc",
    sourceUrl: "https://visitphuquoc.com.vn/en/sun-bavaria-gastropub",
  }],
  "Draft Beer Sunset Town": [{
    src: "https://visitphuquoc.com.vn/VisitPhuQuoc/POINT/%C4%82N%20U%E1%BB%90NG/%C4%90%E1%BB%8Ba%20%C4%91i%E1%BB%83m%20%C4%83n%20u%E1%BB%91ng/Nh%C3%A0%20h%C3%A0ng/1542/image-thumb__1542__720_jpg/Draft%20Beer%20SST2.2dfb1896.jpg",
    caption: "Draft Beer Sunset Town 餐厅实景",
    source: "Visit Phu Quoc",
    sourceUrl: "https://visitphuquoc.com.vn/en/draft-beer-sunset-town-restaurant",
  }],
  "Kiss Bridge Coffee & Bar": [{
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kiss_Bridge_at_sunset_Phu_Quoc_Island_Vietnam.jpg?width=640",
    caption: "Kiss Bridge Coffee & Bar 周边亲吻桥海景",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kiss_Bridge_at_sunset_Phu_Quoc_Island_Vietnam.jpg",
  }],
  "RuNam Phu Quoc": [{
    src: "https://lh3.googleusercontent.com/p/AF1QipNcuv4lShF5nMks7IqgDlEOrEotWGxunoOZXTU1=w1200-h900-k-no",
    caption: "RuNam Phu Quoc 咖啡馆实景",
    source: "Spinach / Google Maps 图片",
    sourceUrl: "https://spinach.guide/venues/runam-phu-quoc-191232/",
  }],
  "Mango Bay On The Rocks": [{
    src: "https://media-cdn.tripadvisor.com/media/photo-s/1a/1c/e3/49/mango-bay-on-the-rocks.jpg",
    caption: "Mango Bay On The Rocks 海边餐厅实景",
    source: "Tripadvisor 图片",
    sourceUrl: "https://www.tripadvisor.com/LocationPhotoDirectLink-g469418-d3589227-i438022985-Mango_Bay_Restaurant-Phu_Quoc_Island_Kien_Giang_Province.html",
  }],
  "The Home Pizza": [{
    src: "https://phuquocmap.com/wp-content/uploads/2025/02/IMG_6164.jpeg",
    caption: "The Home Pizza 餐厅空间实景",
    source: "Phu Quoc Map",
    sourceUrl: "https://phuquocmap.com/en/the-home-pizza-phu-quoc/",
  }],
  "Saigonese Eatery": [{
    src: "https://static.wixstatic.com/media/11062b_4c3d0d34d66b496b8c6f0d479e9f0d25~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_85/11062b_4c3d0d34d66b496b8c6f0d479e9f0d25~mv2.jpg",
    caption: "Saigonese Eatery 餐厅氛围实景",
    source: "Saigonese Eatery 官网",
    sourceUrl: "https://www.saigoneseeatery.com/",
  }],
  "Xin Chao Seafood Restaurant": [{
    src: "https://en.gurutto-vietnam.com/common/image2.php?1=1&f=%2Fdb_img%2Fcl_img%2F6371%2Fmain_img_2025052713321599.jpg&h=600",
    caption: "Xin Chao Seafood Restaurant 海鲜菜品实景",
    source: "Gurutto Vietnam",
    sourceUrl: "https://en.gurutto-vietnam.com/detail/6371/index.html",
  }],
  "Crab House Phu Quoc": [{
    src: "https://img02.restaurantguru.com/c0bb-Restaurant-Nha-Ghe-Phu-Quoc-food.jpg",
    caption: "Crab House Phu Quoc 海鲜拼盘实景",
    source: "Restaurant Guru",
    sourceUrl: "https://restaurantguru.com/Crab-House-Phu-Quoc",
  }],
  "Bun Quay Kien Xay": [{
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/97/e8/86/kien-xay-bun-quay.jpg?w=1200&h=900&s=1",
    caption: "Bun Quay Kien Xay 搅粉实景",
    source: "Tripadvisor 图片",
    sourceUrl: "https://www.tripadvisor.com/LocationPhotoDirectLink-g1184679-d12269141-i412517510-Kien_Xay_Bun_Quay_Coffee_Pizza_Regina-Duong_Dong_Phu_Quoc_Island_Kien_.html",
  }],
  "Ra Khoi Restaurant": [{
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/bf/62/78/ra-khoi-restaurant.jpg?w=1200&h=900&s=1",
    caption: "Ra Khoi Restaurant 海鲜菜品实景",
    source: "Tripadvisor 图片",
    sourceUrl: "https://www.tripadvisor.com/Search?q=Ra%20Khoi%20Restaurant%20Phu%20Quoc",
  }],
  "Oc Noc Quan": [{
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/9e/bf/20/oc-noc-quan.jpg?w=1200&h=900&s=1",
    caption: "Oc Noc Quan 螺类海鲜实景",
    source: "Tripadvisor / Google 图片",
    sourceUrl: "https://www.google.com/search?q=Oc+Noc+Quan+Phu+Quoc",
  }],
  "Phung Fish Noodle": [{
    src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_ePOzjzlm-28TgoaACxvik1CGWFRepgjzL6Zxs6KRtloRvVagPyVWn4mxammkVQ9lQ_EOdaue0woTlERfBxAl6r-AajPAZbe4aOnwzXPIJ7_NkQ5M72q2xuGR0XPyKipIURMDhQ?key=0vxmSbA2eyCCXYpPwYBZJS00",
    caption: "Phung Fish Noodle 鱼粉实景",
    source: "Visit Phu Quoc / Google 图片",
    sourceUrl: "https://visitphuquoc.com.vn/en/where-to-enjoy-the-best-fish-cake-noodle-soup-in-phu-quoc",
  }],
  "Bep Ba Ngoai": [{
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/08/99/f0/restaurant-terrace-decorated.jpg?w=1200&h=900&s=1",
    caption: "Bep Ba Ngoai 餐厅露台实景",
    source: "Tripadvisor 图片",
    sourceUrl: "https://www.tripadvisor.fr/Restaurant_Review-g1184679-d32909124-Reviews-Grandma_s_Kitchen-Duong_Dong_Phu_Quoc_Island_Kien_Giang_Province.html",
  }],
  "Chuon Chuon Bistro & Sky Bar": [{
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/36/2d/c8/chuon-chuon-bistro-sky.jpg?w=1200&h=900&s=1",
    caption: "Chuon Chuon Bistro & Sky Bar 山顶景观实景",
    source: "Tripadvisor 图片",
    sourceUrl: "https://www.tripadvisor.com/Search?q=Chuon%20Chuon%20Bistro%20Sky%20Bar%20Phu%20Quoc",
  }],
  "Quan Cat Bien": [{
    src: "https://images.foody.vn/res/g1/1760/prof/s576x330/foody-mobile-quan-cat-bien-hai-san-do-nuong-phu-quoc.jpg",
    caption: "Quan Cat Bien 海鲜烧烤实景",
    source: "Foody.vn",
    sourceUrl: "https://www.foody.vn/phu-quoc/quan-cat-bien-hai-san-do-nuong",
  }],
  "Oc 343": [{
    src: "https://static.vinwonders.com/production/quan-oc-343-phu-quoc-1.jpg",
    caption: "Oc 343 螺类海鲜实景",
    source: "VinWonders / Google 图片",
    sourceUrl: "https://triphunter.vn/places/phu-quoc/items/quan-oc-343",
  }],
  "Com Tam Huynh Nhu": [{
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/C%C6%A1m_t%E1%BA%A5m_s%C6%B0%E1%BB%9Dn_b%C3%AC_ch%E1%BA%A3.jpg/640px-C%C6%A1m_t%E1%BA%A5m_s%C6%B0%E1%BB%9Dn_b%C3%AC_ch%E1%BA%A3.jpg",
    caption: "Com Tam Huynh Nhu 碎米饭参考实景",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:C%C6%A1m_t%E1%BA%A5m",
  }],
  "Thanh Nga Seafood": [{
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f0/2e/9d/thanh-nga-seafood.jpg?w=1200&h=900&s=1",
    caption: "Thanh Nga Seafood 白沙滩海鲜实景",
    source: "Tripadvisor / Google 图片",
    sourceUrl: "https://www.google.com/search?q=Thanh+Nga+Seafood+Phu+Quoc",
  }],
  "Paradiso Restaurant / Beach Club": [{
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b9/89/b5/paradiso-restaurant.jpg?w=1200&h=900&s=1",
    caption: "Paradiso Restaurant / Beach Club 海滩餐厅实景",
    source: "Tripadvisor / Google 图片",
    sourceUrl: "https://www.google.com/search?q=Paradiso+Restaurant+Beach+Club+Phu+Quoc",
  }],
};

const cuisineFallbackImages = {
  "越南海鲜": [restaurantImageLookup["Xin Chao Seafood Restaurant"][0]],
  "美式海鲜": [restaurantImageLookup["Crab House Phu Quoc"][0]],
  "海鲜烧烤": [restaurantImageLookup["Crab House Phu Quoc"][0]],
  "海滩简餐": [placeImages.baiSao],
  "西餐酒馆": [placeImages.sunsetTown],
  "酒馆小食": [placeImages.sunsetTown],
  "咖啡甜品": [placeImages.kissBridge],
  "本地小吃": [placeImages.sunsetTown],
  "越南菜": [restaurantImageLookup["Cai Mam Bistro"][0]],
};
const dayGalleries = [
  {
    title: "日落小镇・亲吻桥・烟花海岸",
    images: [placeImages.kissBridge, placeImages.sunsetTown, placeImages.anThoi, placeImages.phuQuocBeach],
  },
  {
    title: "An Thoi 港・Gam Ghi 浮潜・阳东夜市",
    images: [placeImages.anThoi, placeImages.gamGhi, restaurantImageLookup["Xin Chao Seafood Restaurant"][0], placeImages.phuQuocBeach],
  },
  {
    title: "跨海缆车・香岛乐园・Bai Sao 白沙滩",
    images: [placeImages.cableCar, placeImages.aquatopia, placeImages.baiSao, placeImages.cableTown],
  },
  {
    title: "酒店早餐・机场返程・南岛晨光",
    images: [placeImages.phuQuocBeach, placeImages.anThoi, placeImages.cableTown, placeImages.kissBridge],
  },
];
const routeImages = [
  [placeImages.cableCar, placeImages.aquatopia, placeImages.baiSao, placeImages.cableTown],
  [placeImages.anThoi, placeImages.gamGhi, restaurantImageLookup["Xin Chao Seafood Restaurant"][0], placeImages.phuQuocBeach],
  [placeImages.kissBridge, placeImages.sunsetTown, placeImages.cableTown, restaurantImageLookup["Cai Mam Bistro"][0]],
];
const regionImages = [placeImages.kissBridge, placeImages.baiSao, placeImages.cableCar];
const regionReviewHighlights = {
  south: [
    "携程日落小镇点评高频词：日落、建筑、海边步道都很出片，黄昏时橘色天空和海面最有氛围。",
    "游客常提到小镇适合边走边拍，咖啡、餐厅、旅馆集中，住在南岛能把烟花后返程压力降到最低。",
    "亲吻桥和缆车站距离很近，司机通常熟悉打卡点；建议下午晚些时候到达，避开正午暴晒。",
  ],
  central: [
    "携程富国夜市点评高频词：海鲜、烧烤、热带水果和椰子冰集中，是晚上不知道去哪时的稳妥选择。",
    "阳东镇被游客视作富国岛的生活与商业中心，伴手礼、超市、药妆补给比南岛更成熟。",
    "夜市热闹但价格差异明显，建议先看明码标价和鲜活程度，团队点海鲜最好统一议价、统一结账。",
  ],
  north: [
    "携程珍珠野生动物园点评高频词：亲子友好、能近距离看长颈鹿等动物，树荫较多但仍要防晒。",
    "珍珠游乐园 / VinWonders 常被评价为适合玩一整天，水上乐园、主题区和夜间表演组合丰富。",
    "北部景点分量大、路程长，更适合 5 天以上行程；4 天 3 夜团队若硬塞北部，容易压缩南岛休整时间。",
  ],
};
function fallbackImageData(title) {
  const safeTitle = encodeURIComponent(title || "富国岛旅行图片");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="348" height="232" viewBox="0 0 348 232"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0b4fa3"/><stop offset="0.52" stop-color="#0e7490"/><stop offset="1" stop-color="#facc15"/></linearGradient></defs><rect width="348" height="232" rx="22" fill="url(#g)"/><circle cx="292" cy="52" r="24" fill="#fff3b0" opacity=".85"/><path d="M0 158 C56 130 96 184 150 154 C214 119 246 170 348 136 L348 232 L0 232 Z" fill="#031225" opacity=".58"/><path d="M0 178 C68 151 117 204 177 174 C238 144 287 185 348 160 L348 232 L0 232 Z" fill="#38bdf8" opacity=".32"/><text x="24" y="62" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="#fff">${safeTitle}</text><text x="24" y="92" font-family="Arial, sans-serif" font-size="13" fill="#dbeafe">图片加载失败，保留地点名称方便识别</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${svg}`;
}

function normalizeImage(image, title, index) {
  if (typeof image === "string") {
    return { src: image, caption: `${title} · 图 ${index + 1}`, source: "图片来源", sourceUrl: image };
  }
  return {
    src: image.src,
    caption: image.caption || `${title} · 图 ${index + 1}`,
    source: image.source || "图片来源",
    sourceUrl: image.sourceUrl || image.src,
  };
}
function uniqueImages(images, title, limit = 5) {
  const seen = new Set();
  return images
    .filter(Boolean)
    .filter((image, index) => {
      const key = normalizeImage(image, title, index).src;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, limit);
}
function imagesForRestaurant(r) {
  const primary = restaurantImageLookup[r.name] || [];
  const cuisineFallback = cuisineFallbackImages[r.cuisine] || [];
  const areaFallback = r.area.includes("日落小镇")
    ? [placeImages.sunsetTown, placeImages.kissBridge, placeImages.anThoi]
    : r.area.includes("Bai Sao")
      ? [placeImages.baiSao, placeImages.phuQuocBeach, placeImages.anThoi]
      : [placeImages.phuQuocBeach, placeImages.sunsetTown, placeImages.anThoi];
  const sharedFallback = [
    placeImages.kissBridge,
    placeImages.baiSao,
    placeImages.cableCar,
    restaurantImageLookup["Xin Chao Seafood Restaurant"]?.[0],
    restaurantImageLookup["Cai Mam Bistro"]?.[0],
  ];

  return uniqueImages(
    [...primary, ...cuisineFallback, ...areaFallback, ...sharedFallback],
    r.name,
    5,
  ).slice(0, 5);
}
function imageStrip(images, title, className = "image-strip") {
  return `<div class="${className}">${images
    .map((image, i) => {
      const meta = normalizeImage(image, title, i);
      return `<button class="zoomable" data-img="${esc(meta.src)}" data-title="${esc(meta.caption)}" data-source="${esc(meta.source)}" data-source-url="${esc(meta.sourceUrl)}" aria-label="放大查看 ${esc(meta.caption)}"><img src="${esc(meta.src)}" alt="${esc(meta.caption)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImageData(meta.caption)}';"><span class="image-caption">${esc(meta.caption)}<small>${esc(meta.source)}</small></span></button>`;
    })
    .join("")}</div>`;
}
function reviewList(items) {
  return `<div class="region-review"><b>携程热门点评前三提炼</b><ol>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ol></div>`;
}
function esc(s) {
  return String(s).replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        m
      ],
  );
}
function setPage(p) {
  page = p;
  if (p === "profile" && !loggedIn) page = "login";
  render();
}
function render() {
  document
    .querySelectorAll("nav button")
    .forEach((b) => b.classList.toggle("active", b.dataset.page === page));
  entry.querySelector("span:last-child").textContent = loggedIn
    ? "个人中心"
    : "登录";
  app.innerHTML = {
    overview: overview(),
    food: food(),
    region: region(),
    login: login(),
    profile: profile(),
  }[page];
  bind();
}
function overview() {
  return `<section class="page hero"><div class="hero-card"><div class="hero-copy"><p class="eyebrow">2025 年 6 月 5 日（周五）— 6 月 8 日（周一）・4 天 3 夜</p><h1>富国岛行程概览</h1><p class="hero-subtitle-en">Phu Quoc Island Itinerary Overview</p><p>本期主题是体验浪漫的海岛风景~</p></div></div><section class="overview-module"><div class="module-head"><div><h2 class="big-module-title">四天三夜节奏</h2></div><span>4D3N / South Phu Quoc</span></div><div class="summary-grid">${days.map((d) => `<article class="summary-card"><div class="day-title"><span>${d.date}</span><b>${d.title}</b></div><p class="core">核心：${d.core}</p>${d.summary.map(([t, x]) => `<div class="summary-row"><em>${t}</em><span>${x}</span></div>`).join("")}</article>`).join("")}</div></section><section class="panel itinerary-panel"><div class="module-head"><div><h2 class="big-module-title">每日行程安排</h2></div></div>${days.map((d, di) => `<div class="day-plan"><div class="day-head"><h3><span class="day-date">${d.date}</span><span class="day-name">${d.title}</span></h3><span class="day-core">${d.core}</span></div><div class="day-gallery"><div><b>今日涵盖地点美图</b><span>${dayGalleries[di].title}</span></div>${imageStrip(dayGalleries[di].images, `${d.date} ${dayGalleries[di].title}`, "day-image-strip")}</div><div class="timeline">${d.items.map((it, ii) => `<div class="timeline-item"><div class="time">🕒 ${it[0]}</div><div class="event"><span class="tag" data-kind="${it[2]}">${it[2]}</span><p>${it[1]}</p></div><button class="favorite" data-di="${di}" data-ii="${ii}">♡ 收藏</button></div>`).join("")}</div><div class="notes"><b>餐饮・运力・注意事项</b>${d.notes.map((n) => `<p>● ${n}</p>`).join("")}</div></div>`).join("")}</section><section class="panel checklist"><h2>出发前 3 天・预订清单</h2><div>${preorder.map((x) => `<p>✅ ${x}</p>`).join("")}</div></section></section>`;
}

function food(sort = "distance", cuisine = "全部") {
  let cuisines = ["全部", ...new Set(restaurants.map((r) => r.cuisine))];
  let hasCuisine = cuisine !== "全部";
  let limit = hasCuisine ? 10 : 20;
  let list = restaurants
    .filter((r) => !hasCuisine || r.cuisine === cuisine)
    .sort((a, b) =>
      sort === "rating" ? b.rating - a.rating : a.distance - b.distance,
    )
    .slice(0, limit);
  const routePlans = [
    {
      title: "南岛经典半日线｜缆车 + 香岛 + 白沙滩",
      best: "适合 6/7 上午至傍晚",
      stops: [
        "希尔顿 / 日落小镇步行出发",
        "Hon Thom 跨海缆车：优先赶早班，避开中午停运窗口",
        "香岛乐园：先冲热门项目，再集合造浪池",
        "Paradiso 或海滩餐吧补给：饮品、洗手间、冲洗",
        "Bai Sao 白沙滩：退潮后慢跑 / 躺椅 / 拍照",
        "日落小镇海鲜晚餐，步行回酒店打包行李",
      ],
      reason:
        "这条线把最有辨识度的跨海缆车、乐园项目和白沙滩放在同一天，适合团队在第三天完成“必打卡 + 放松”的组合。上午排队与交通风险最低，下午转入沙滩，体力消耗更可控。",
      details: [
        "核心判断：如果团队只想选一条最能代表富国岛的路线，优先选它。",
        "执行重点：缆车时刻必须当天复核，11:45 前回到站点最稳；白沙滩慢跑建议沿水线 3-5km，不跑步的人直接租躺椅。",
        "适合人群：第一次来富国岛、想拍照、想体验缆车和主题乐园，但不想整天高强度移动的团队。",
      ],
    },
    {
      title: "海上探索一日线｜An Thoi 港 + Gam Ghi 浮潜",
      best: "适合 6/6 上午出海、傍晚夜市",
      stops: [
        "07:00 晨泳与早餐，提前完成防晒",
        "酒店集合出发前往 An Thoi 港",
        "包船前往 Gam Ghi 岛深水区，确认救生衣和下水顺序",
        "团钓石斑鱼 / 礁区浮潜，体力弱者可留船休息",
        "船上午餐：钓获海鱼碳烤或清蒸",
        "返程酒店休整，18:00 去阳东夜市海鲜晚餐",
      ],
      reason:
        "6 月雨季初期更建议把海上项目压到上午，海况与体感通常更稳。出海后用酒店休整做缓冲，再去阳东夜市补足海鲜、小吃和伴手礼，形成“上午重点体验、晚上烟火气”的节奏。",
      details: [
        "核心判断：如果大家最在意海上体验、浮潜和团队记忆点，优先选它。",
        "执行重点：预订时写明 Rod and Reel、救生衣、淡水冲洗、返航时间；当天早晨由一人统一确认海况，不建议分头临时改动。",
        "适合人群：会游泳或愿意下水的人较多、希望有包船仪式感、能接受半天日晒的团队。",
      ],
    },
    {
      title: "轻松夜游线｜亲吻桥 + 日落机位 + 烟花",
      best: "适合 6/5 抵达日晚间",
      stops: [
        "酒店入住后步行熟悉日落小镇动线",
        "亲吻桥预选长焦与剪影机位",
        "Cai Mam Bistro / Sun Bavaria 欢迎晚餐",
        "Vui-Fest 或海滨步道轻量散步",
        "Kiss of the Sea 烟花秀：酒店露台或临海区域观看",
        "步行回房，确认第二天出海装备",
      ],
      reason:
        "抵达日不适合再安排远距离交通，这条线把吃饭、拍照、表演和回酒店都控制在短半径内，能快速进入度假状态，也降低航班延误或通关耗时带来的连锁风险。",
      details: [
        "核心判断：如果第一天大家体力一般，宁可把节奏放慢，也不要临时加夜市。",
        "执行重点：晚餐提前订 10 人长桌；拍照前先定集合点，烟花后人流多，避免团队走散。",
        "适合人群：亲友团、带行李抵达、希望第一晚轻松但有仪式感的团队。",
      ],
    },
  ];
  return `<section class="page"><div class="page-title"><span>🍽️</span><div><p class="eyebrow">餐饮和路线均按团队动线重新整理</p><h1>美食与游玩推荐</h1></div></div><section class="panel"><div class="section-head food-section-head"><h2>当地美食推荐 Top${limit}</h2></div><div class="food-toolbar"><div class="tabs sort-tabs" aria-label="餐厅排序方式">${[
    ["distance", "按距离"],
    ["rating", "按评分"],
  ]
    .map(
      ([id, l]) =>
        `<button class="sort ${sort === id ? "active" : ""}" data-sort="${id}">${l}</button>`,
    )
    .join(
      "",
    )}</div><div class="filter">🔎 选择菜式：<select id="cuisine">${cuisines.map((t) => `<option ${t === cuisine ? "selected" : ""}>${t}</option>`).join("")}</select></div></div><div class="food-list">${list.map((r, i) => `<article class="food-card food-list-card"><div class="food-main"><div class="food-card-head"><span class="rank">#${i + 1}</span><h3>${r.name}</h3></div><p>${r.why}</p>${imageStrip(imagesForRestaurant(r), r.name)}</div><div class="meta food-tags"><span>${r.distance} km</span><span>⭐ ${r.rating}</span><span>${r.cuisine}</span><span>${r.area}</span></div></article>`).join("")}</div></section><section class="panel"><div class="module-head"><div><h2>最佳游玩线路</h2></div></div><div class="route-list">${routePlans.map((r, i) => `<article class="route route-list-card"><div class="route-title"><span class="rank">路线 ${i + 1}</span><div><h3>${r.title}</h3><p>${r.best}</p></div></div>${imageStrip(routeImages[i], r.title, "route-image-strip")}<div class="route-body"><div><b>推荐动线</b><ol>${r.stops.map((s) => `<li>${s}</li>`).join("")}</ol></div><div><b>推荐理由</b><p>${r.reason}</p><b>推荐详情</b><ul>${r.details.map((d) => `<li>${d}</li>`).join("")}</ul></div></div></article>`).join("")}</div></section></section>`;
}

function region() {
  return `<section class="page region-page"><div class="page-title"><span>📍</span><div><p class="eyebrow">地理位置、交通分区、6 月气候、风俗生活速览</p><h1>地域介绍</h1></div></div><section class="region-hero-v2 vietnam-hero"><div class="map-card vietnam-map-card advanced-map" aria-label="越南地图与富国岛位置示意"><div class="vietnam-map"><span class="country-label">VIETNAM</span><span class="geo-grid lat-a">10°N</span><span class="geo-grid lat-b">12°N</span><span class="geo-grid lon-a">104°E</span><span class="geo-grid lon-b">106°E</span><span class="sea-label">GULF OF THAILAND</span><span class="city-dot hanoi">河内</span><span class="city-dot danang">岘港</span><span class="city-dot hcmc">胡志明市</span><span class="phu-quoc-marker">📍 富国岛<br><small>10.2899°N, 103.9840°E</small></span><span class="travel-arc arc-hcmc"></span><span class="map-scale">约 45 km 南北纵深</span><span class="phu-quoc-island-detail" aria-hidden="true"><span class="island-title">PHU QUOC DETAIL</span><span class="island-zone zone-n">北部<br><small>VinWonders / Safari</small></span><span class="island-zone zone-c">中部<br><small>阳东镇 / 夜市</small></span><span class="island-zone zone-s">南部<br><small>日落小镇 / 缆车</small></span><span class="island-pin pin-hotel">希尔顿</span><span class="island-pin pin-anthoi">An Thoi 港</span><span class="island-pin pin-baisao">Bai Sao</span></span></div><div class="map-legend"><b>在越南哪里？</b><span>越南西南部・坚江省・泰国湾，靠近柬埔寨海岸；定位约 <strong>10.2899°N, 103.9840°E</strong>。</span></div></div><div class="region-intro-card"><span class="region-kicker">PHU QUOC / KIEN GIANG</span><h2>富国岛在越南哪里？</h2><p><strong>富国岛位于越南西南部坚江省</strong>，坐落在<strong>泰国湾</strong>，是越南面积最大的海岛之一。它距离胡志明市飞行约 <strong>1 小时</strong>，和柬埔寨海岸隔海相望；从旅行体验上看，它不是传统城市观光目的地，而是以<strong>海岛度假、海鲜夜市、出海浮潜、主题乐园和南岛拍照动线</strong>为主的复合型目的地。</p><p>本次 <strong>4 天 3 夜住在南岛日落小镇附近</strong>，核心优势是步行可覆盖<strong>亲吻桥、烟花秀与缆车站</strong>，第二天去 <strong>An Thoi 港</strong>出海也更顺；中部阳东镇作为<strong>夜市、海鲜和伴手礼补给点</strong>，北部生态海滩适合二刷或更长假期。</p><div class="region-stat-grid"><span><b>地理</b>泰国湾西南海岛</span><span><b>坐标</b>10.2899°N / 103.9840°E</span><span><b>人文</b>渔业、鱼露与胡椒文化</span></div>${imageStrip(regionImages, "富国岛地域印象", "region-image-strip")}</div></section><section class="region-flow panel"><div class="module-head"><div><p class="eyebrow">地理 + 人文快速理解</p><h2>从 4 个角度认识富国岛</h2></div><span>先地图・再背景</span></div><div class="flow-steps"><article><span>01</span><b>地理位置</b><p>岛屿<strong>南北狭长</strong>，机场在中南部，南端 <strong>An Thoi 群岛</strong>适合出海，西岸更适合看日落。</p></article><article><span>02</span><b>人文底色</b><p>传统产业包括<strong>渔业、鱼露、珍珠和胡椒</strong>；夜市与海鲜餐厅能看到更本地的生活烟火气。</p></article><article><span>03</span><b>度假开发</b><p>南岛集中<strong>日落小镇、亲吻桥、跨海缆车和主题乐园</strong>，适合短途团队高效打卡。</p></article><article><span>04</span><b>沟通语言</b><p><strong>越南语是主语言</strong>；酒店、餐厅、船公司可用英语关键词沟通，地址和预订信息建议截图保存。</p></article></div></section><section class="panel region-zones"><h2>三大旅行分区</h2><p class="region-section-lead">富国岛南北狭长，不同区域的体验差异很明显：南岛适合短途团队高效打卡和住在景点旁，中部适合夜市与海鲜补给，北部适合亲子乐园和生态度假。以下结合携程景点页与用户点评的高频反馈，按本次 4 天 3 夜团队动线重新整理。</p><div class="region-list region-list-expanded"><article class="zone-south"><b>南岛｜日落小镇 / 亲吻桥 / 缆车 / 香岛乐园</b><p><strong>本次团队主场，适合把第一晚和第三天重点都放在这里。</strong>日落小镇以地中海风格街区、亲吻桥、海之吻烟花表演和跨海缆车站形成步行半径；住在南岛的价值在于烟花结束后不用跨岛打车，第二天去 An Thoi 港出海也更顺。</p><p>玩法建议：傍晚先拍亲吻桥和海边建筑，晚餐选择小镇内餐厅，烟花后直接回酒店；第三天早上优先赶缆车早段，避免中午停运窗口。</p>${reviewList(regionReviewHighlights.south)}</article><article class="zone-central"><b>中部｜阳东镇 / 富国夜市 / 海鲜餐厅 / 伴手礼</b><p><strong>富国岛餐饮与生活补给最成熟的区域。</strong>阳东镇适合安排在出海回酒店休整之后，作为夜市、海鲜、咖啡、超市和伴手礼采购的集中补给点。这里比南岛更有本地生活烟火气，但晚高峰往返路程要预留缓冲。</p><p>玩法建议：10 人团到夜市不要边走边散点，建议先定集合点，再由 2-3 人统一询价点海鲜；不吃海鲜的成员可选择粉类、小吃、椰子冰和超市补给。</p>${reviewList(regionReviewHighlights.central)}</article><article class="zone-north"><b>北部｜珍珠乐园 / 野生动物园 / 生态海滩 / 度假酒店群</b><p><strong>更适合二刷、亲子或 5 天以上深度度假。</strong>北部的 VinWonders、Vinpearl Safari 和 Grand World 体量大、可玩时间长，但从南岛往返交通消耗明显；若本次 4 天 3 夜硬加北部，会压缩出海、缆车、白沙滩和酒店休整时间。</p><p>玩法建议：如果团队临时非常想去北部，应单独拿出一整天，而不是塞进出海或缆车日；否则建议保留为下次“亲子乐园 + 北部度假酒店”主题行程。</p>${reviewList(regionReviewHighlights.north)}</article></div></section><section class="panel weather-card weather-card-full"><h2>6 月气候与行程策略</h2><p><strong>6 月 5 日—8 日处在雨季初期</strong>，高温、高湿、阵雨概率上升，但常见形态是<strong>短时阵雨或午后天气变化</strong>，并不等于全天无法游玩。短途团队最重要的是把不可替代体验放在上午，把可替代体验放在下午或室内。</p><ul class="focus-list"><li><b>上午：</b>优先安排出海、缆车、乐园排队等关键动作；如果前台或船公司提示风浪偏大，第一时间确认替代方案。</li><li><b>午后：</b>保留休整、按摩、酒店泳池、咖啡馆、购物和自由活动，避免所有人顶着高温赶路。</li><li><b>傍晚：</b>选择日落小镇、亲吻桥、夜市等就近场景，降低临时降雨影响；拍照和晚餐都尽量提前约定集合点。</li><li><b>装备：</b>轻薄雨衣、防水袋、防晒霜、速干衣、拖鞋和备用干衣分装；电子设备统一放防水袋。</li></ul><div class="advice"><b>本次出行建议</b><p>每人准备轻薄雨衣、防水袋、防晒霜、速干衣；包船当天早晨确认海况和返航时间；缆车当天向前台复核停运时段；白沙滩慢跑尽量选择退潮后更平整的水线。若下午突降阵雨，不临时跨区追景点，优先改为酒店泳池、按摩、咖啡或提前晚餐。</p></div></section><section class="panel culture-panel"><h2>当地风俗、饮食的关注重点</h2><div class="culture-grid"><article><span>🍤</span><b>饮食关键词</b><p><strong>海鲜、鱼露、胡椒、热带水果、越南粉类小吃</strong>是富国岛餐饮主线。10 人团建议预订主菜拼盘，再现场补点小吃，避免每人单点导致出餐慢。</p></article><article><span>🙏</span><b>礼貌与风俗</b><p>进入寺庙或本地社区空间建议<strong>衣着得体</strong>；拍摄服务人员、摊主或儿童前先询问；夜市议价保持友好。</p></article><article><span>🗣️</span><b>语言与支付</b><p>建议保存<strong>越南文地址、餐厅截图和预订凭证</strong>；小摊更偏现金，酒店和大型餐厅刷卡更稳定。</p></article></div></section></section>`;
}

function login() {
  return `<section class="page narrow"><div class="login-card"><div class="avatar large">👤</div><h1>登录</h1><p>仅展示三方登录样式，点击任意方式即可进入个人中心体验收藏与日历功能。</p>${["使用 Google 登录", "使用 Apple 登录", "使用微信登录"].map((x) => `<button class="oauth">${x}<span>↗</span></button>`).join("")}</div></section>`;
}
function profile() {
  return `<section class="page"><div class="page-title"><span>⭐</span><div><p class="eyebrow">收藏备忘与应用日历</p><h1>个人中心</h1></div></div><section class="panel"><h2>星标信息列表</h2>${favorites.length ? `<div class="fav-list">${favorites.map((f) => `<article><b>${esc(f.title)}</b><span>${f.day}｜${f.time}｜${f.tag}</span><p>备注：${esc(f.note || "未填写")}</p></article>`).join("")}</div>` : `<button class="empty">你还未收藏信息，点击去收藏 ›</button>`}</section><section class="panel"><h2>📅 日历</h2><p class="hint">已关联应用日历视图：你可以手动更新内容，用于复制到系统日历或团队群公告。</p><textarea class="calendar">${esc(calendarText)}</textarea></section><button class="logout">↩ 登出</button></section>`;
}
function bind() {
  document
    .querySelectorAll("[data-page]")
    .forEach((el) => (el.onclick = () => setPage(el.dataset.page)));
  entry.onclick = () => {
    setPage("profile");
  };
  document.querySelectorAll(".favorite").forEach(
    (b) =>
      (b.onclick = () => {
        let d = days[b.dataset.di],
          it = d.items[b.dataset.ii];
        modalItem = { day: d.date, time: it[0], title: it[1], tag: it[2] };
        showModal();
      }),
  );
  document.querySelectorAll(".sort").forEach(
    (b) =>
      (b.onclick = () => {
        app.innerHTML = food(
          b.dataset.sort,
          document.querySelector("#cuisine")?.value || "全部",
        );
        bind();
      }),
  );
  let cuisine = document.querySelector("#cuisine");
  if (cuisine)
    cuisine.onchange = () => {
      let active =
        document.querySelector(".sort.active")?.dataset.sort || "distance";
      app.innerHTML = food(active, cuisine.value);
      bind();
    };
  document.querySelectorAll(".zoomable").forEach(
    (b) =>
      (b.onclick = () => {
        showImageModal(b.dataset.img, b.dataset.title, b.dataset.source, b.dataset.sourceUrl);
      }),
  );
  document.querySelectorAll(".oauth").forEach(
    (b) =>
      (b.onclick = () => {
        loggedIn = true;
        setPage("profile");
      }),
  );
  document
    .querySelector(".empty")
    ?.addEventListener("click", () => setPage("overview"));
  document.querySelector(".logout")?.addEventListener("click", () => {
    loggedIn = false;
    setPage("overview");
  });
  document
    .querySelector(".calendar")
    ?.addEventListener("input", (e) => (calendarText = e.target.value));
}
function showImageModal(src, title, source, sourceUrl) {
  modal.className = "modal-backdrop image-modal-backdrop";
  const sourceLine = sourceUrl
    ? `<a href="${esc(sourceUrl)}" target="_blank" rel="noopener">图片来源：${esc(source || "查看原图来源")}</a>`
    : "";
  modal.innerHTML = `<div class="image-modal"><button class="image-modal-close" id="closeImage" aria-label="关闭图片">×</button><img src="${esc(src)}" alt="${esc(title)}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${fallbackImageData(title)}';"><p>${esc(title)}</p>${sourceLine}</div>`;
  document.querySelector("#closeImage").onclick = () =>
    (modal.className = "modal-backdrop hidden");
  modal.onclick = (e) => {
    if (e.target === modal) modal.className = "modal-backdrop hidden";
  };
}
function showModal() {
  modal.onclick = null;
  modal.className = "modal-backdrop";
  modal.innerHTML = `<div class="modal"><div class="modal-heart">♥</div><h3>你已成功收藏“${esc(modalItem.title)}”项</h3><p>请输入备注信息（可选），保存后会同步到个人中心的星标信息列表。</p><textarea id="note" placeholder="例如：提前预订靠窗 10 人桌 / 带防水袋"></textarea><div class="modal-actions"><button class="ghost" id="cancel">取消</button><button id="ok">确认</button></div></div>`;
  document.querySelector("#cancel").onclick = () =>
    (modal.className = "modal-backdrop hidden");
  document.querySelector("#ok").onclick = () => {
    favorites.unshift({
      ...modalItem,
      note: document.querySelector("#note").value,
      id: Date.now(),
    });
    modal.className = "modal-backdrop hidden";
  };
}
render();
