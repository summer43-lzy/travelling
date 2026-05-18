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

const imagePools = {
  food: [
    "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
  ],
  seafood: [
    "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1606851094291-6efae152bb87?auto=format&fit=crop&w=900&q=80",
  ],
  beach: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
  ],
  night: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  ],
  island: [
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1520483601560-389dff434fdf?auto=format&fit=crop&w=900&q=80",
  ],
  cable: [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  ],
};
const dayGalleries = [
  {
    title: "日落小镇・亲吻桥・烟花海岸",
    images: [imagePools.island[0], imagePools.night[0], imagePools.beach[2]],
  },
  {
    title: "An Thoi 港・Gam Ghi 浮潜・阳东夜市",
    images: [imagePools.seafood[0], imagePools.beach[0], imagePools.night[1]],
  },
  {
    title: "跨海缆车・香岛乐园・Bai Sao 白沙滩",
    images: [imagePools.cable[0], imagePools.island[1], imagePools.beach[1]],
  },
  {
    title: "酒店早餐・机场返程・南岛晨光",
    images: [imagePools.island[2], imagePools.beach[0], imagePools.cable[2]],
  },
];
const routeImages = [imagePools.cable, imagePools.beach, imagePools.night];
const regionImages = [
  {
    title: "南岛日落小镇",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "泰国湾海岛",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "夜市海鲜烟火气",
    src: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1000&q=80",
  },
];
function imagesForRestaurant(r) {
  if (r.cuisine.includes("海鲜") || r.name.includes("Crab") || r.cuisine.includes("烧烤")) return imagePools.seafood;
  if (r.area.includes("Bai Sao") || r.cuisine.includes("海滩")) return imagePools.beach;
  if (r.cuisine.includes("酒馆") || r.area.includes("夜市")) return imagePools.night;
  return imagePools.food;
}
function imageStrip(images, title, className = "image-strip") {
  return `<div class="${className}">${images.map((src, i) => `<button class="zoomable" data-img="${esc(src)}" data-title="${esc(title)} · 图 ${i + 1}" aria-label="放大查看 ${esc(title)} 图片 ${i + 1}"><img src="${esc(src)}" alt="${esc(title)} 图片 ${i + 1}" loading="lazy"></button>`).join("")}</div>`;
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
  return `<section class="page hero"><div class="hero-card"><div class="hero-copy"><p class="eyebrow">2025 年 6 月 5 日（周五）— 6 月 8 日（周一）・4 天 3 夜</p><h1>行程概览</h1><p>主题是躺平躺平躺平！</p></div></div><section class="overview-module"><div class="module-head"><div><h2 class="big-module-title">四天节奏</h2></div><span>4D3N / South Phu Quoc</span></div><div class="summary-grid">${days.map((d) => `<article class="summary-card"><div class="day-title"><span>${d.date}</span><b>${d.title}</b></div><p class="core">核心：${d.core}</p>${d.summary.map(([t, x]) => `<div class="summary-row"><em>${t}</em><span>${x}</span></div>`).join("")}</article>`).join("")}</div></section><section class="panel itinerary-panel"><div class="module-head"><div><h2 class="big-module-title">每日行程安排</h2></div></div>${days.map((d, di) => `<div class="day-plan"><div class="day-head"><h3><span class="day-date">${d.date}</span><span class="day-name">${d.title}</span></h3><span class="day-core">${d.core}</span></div><div class="day-gallery"><div><b>今日涵盖地点美图</b><span>${dayGalleries[di].title}</span></div>${imageStrip(dayGalleries[di].images, `${d.date} ${dayGalleries[di].title}`, "day-image-strip")}</div><div class="timeline">${d.items.map((it, ii) => `<div class="timeline-item"><div class="time">🕒 ${it[0]}</div><div class="event"><span class="tag" data-kind="${it[2]}">${it[2]}</span><p>${it[1]}</p></div><button class="favorite" data-di="${di}" data-ii="${ii}">♡ 收藏</button></div>`).join("")}</div><div class="notes"><b>餐饮・运力・注意事项</b>${d.notes.map((n) => `<p>● ${n}</p>`).join("")}</div></div>`).join("")}</section><section class="panel checklist"><h2>出发前 3 天・预订清单</h2><div>${preorder.map((x) => `<p>✅ ${x}</p>`).join("")}</div></section></section>`;
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
  return `<section class="page"><div class="page-title"><span>🍽️</span><div><p class="eyebrow">餐饮和路线均按团队动线重新整理</p><h1>美食与游玩推荐</h1></div></div><section class="panel"><div class="section-head"><h2>当地美食推荐 Top${limit}</h2><div class="tabs">${[
    ["distance", "按距离"],
    ["rating", "按评分"],
  ]
    .map(
      ([id, l]) =>
        `<button class="sort ${sort === id ? "active" : ""}" data-sort="${id}">${l}</button>`,
    )
    .join(
      "",
    )}</div></div><div class="filter">🔎 选择菜式：<select id="cuisine">${cuisines.map((t) => `<option ${t === cuisine ? "selected" : ""}>${t}</option>`).join("")}</select></div><div class="food-list">${list.map((r, i) => `<article class="food-card food-list-card"><div class="food-main"><div class="food-card-head"><span class="rank">#${i + 1}</span><h3>${r.name}</h3></div><p>${r.why}</p>${imageStrip(imagesForRestaurant(r), r.name)}</div><div class="meta food-tags"><span>${r.distance} km</span><span>⭐ ${r.rating}</span><span>${r.cuisine}</span><span>${r.area}</span></div></article>`).join("")}</div></section><section class="panel"><div class="module-head"><div><h2>最佳游玩线路</h2></div></div><div class="route-list">${routePlans.map((r, i) => `<article class="route route-list-card">${imageStrip(routeImages[i], r.title, "route-image-strip")}<div class="route-title"><span class="rank">路线 ${i + 1}</span><div><h3>${r.title}</h3><p>${r.best}</p></div></div><div class="route-body"><div><b>推荐动线</b><ol>${r.stops.map((s) => `<li>${s}</li>`).join("")}</ol></div><div><b>推荐理由</b><p>${r.reason}</p><b>推荐详情</b><ul>${r.details.map((d) => `<li>${d}</li>`).join("")}</ul></div></div></article>`).join("")}</div></section></section>`;
}

function region() {
  return `<section class="page region-page"><div class="page-title"><span>📍</span><div><p class="eyebrow">地理位置、交通分区、6 月气候、风俗生活速览</p><h1>地域介绍</h1></div></div><section class="region-hero-v2 vietnam-hero"><div class="map-card vietnam-map-card advanced-map" aria-label="越南地图与富国岛位置示意"><div class="vietnam-map"><span class="country-label">VIETNAM</span><span class="geo-grid lat-a">10°N</span><span class="geo-grid lat-b">12°N</span><span class="geo-grid lon-a">104°E</span><span class="geo-grid lon-b">106°E</span><span class="sea-label">GULF OF THAILAND</span><span class="city-dot hanoi">河内</span><span class="city-dot danang">岘港</span><span class="city-dot hcmc">胡志明市</span><span class="phu-quoc-marker">📍 富国岛<br><small>10.2899°N, 103.9840°E</small></span><span class="travel-arc arc-hcmc"></span><span class="map-scale">约 45 km 南北纵深</span></div><div class="map-legend"><b>在越南哪里？</b><span>越南西南部・坚江省・泰国湾，靠近柬埔寨海岸；定位约 <strong>10.2899°N, 103.9840°E</strong>。</span></div></div><div class="region-intro-card"><span class="region-kicker">PHU QUOC / KIEN GIANG</span><h2>富国岛在越南哪里？</h2><p><strong>富国岛位于越南西南部坚江省</strong>，坐落在<strong>泰国湾</strong>，是越南面积最大的海岛之一。它距离胡志明市飞行约 <strong>1 小时</strong>，和柬埔寨海岸隔海相望；从旅行体验上看，它不是传统城市观光目的地，而是以<strong>海岛度假、海鲜夜市、出海浮潜、主题乐园和南岛拍照动线</strong>为主的复合型目的地。</p><p>本次 <strong>4 天 3 夜住在南岛日落小镇附近</strong>，核心优势是步行可覆盖<strong>亲吻桥、烟花秀与缆车站</strong>，第二天去 <strong>An Thoi 港</strong>出海也更顺；中部阳东镇作为<strong>夜市、海鲜和伴手礼补给点</strong>，北部生态海滩适合二刷或更长假期。</p><div class="region-stat-grid"><span><b>地理</b>泰国湾西南海岛</span><span><b>坐标</b>10.2899°N / 103.9840°E</span><span><b>人文</b>渔业、鱼露与胡椒文化</span></div>${imageStrip(regionImages.map((x) => x.src), "富国岛地域印象", "region-image-strip")}</div></section><section class="region-flow panel"><div class="module-head"><div><p class="eyebrow">地理 + 人文快速理解</p><h2>从 4 个角度认识富国岛</h2></div><span>先地图・再背景</span></div><div class="flow-steps"><article><span>01</span><b>地理位置</b><p>岛屿<strong>南北狭长</strong>，机场在中南部，南端 <strong>An Thoi 群岛</strong>适合出海，西岸更适合看日落。</p></article><article><span>02</span><b>人文底色</b><p>传统产业包括<strong>渔业、鱼露、珍珠和胡椒</strong>；夜市与海鲜餐厅能看到更本地的生活烟火气。</p></article><article><span>03</span><b>度假开发</b><p>南岛集中<strong>日落小镇、亲吻桥、跨海缆车和主题乐园</strong>，适合短途团队高效打卡。</p></article><article><span>04</span><b>沟通语言</b><p><strong>越南语是主语言</strong>；酒店、餐厅、船公司可用英语关键词沟通，地址和预订信息建议截图保存。</p></article></div></section><div class="region-layout"><section class="panel region-zones"><h2>三大旅行分区</h2><div class="region-list"><article class="zone-south"><b>南岛｜日落小镇 / 亲吻桥 / 缆车</b><p><strong>拍照、表演、烟花、跨海缆车和主题乐园最集中。</strong>本次住宿在南岛，适合把第一晚、第三天的重点都放在这里，减少 10 人团频繁换乘。</p></article><article class="zone-central"><b>中部｜阳东镇 / 夜市 / 海鲜餐厅</b><p><strong>餐饮选择最多，夜市、海鲜餐厅、咖啡和伴手礼更成熟。</strong>第二天出海后去中部吃晚餐，能补足本地烟火气，也方便统一采购。</p></article><article class="zone-north"><b>北部｜生态海滩 / 度假酒店群</b><p><strong>节奏更慢、路程更长。</strong>更适合二刷或 5 天以上深度度假，本次短途团队不建议硬塞北部，以免交通消耗压缩躺平时间。</p></article></div></section><section class="panel weather-card"><h2>6 月气候与行程策略</h2><p><strong>6 月 5 日—8 日处在雨季初期</strong>，高温、高湿、阵雨概率上升，但常见形态是<strong>短时阵雨或午后天气变化</strong>，并不等于全天无法游玩。</p><ul class="focus-list"><li><b>上午：</b>优先安排出海、缆车、乐园排队等关键动作。</li><li><b>午后：</b>保留休整、按摩、酒店泳池、咖啡馆等弹性选项。</li><li><b>傍晚：</b>选择日落小镇、亲吻桥、夜市等就近场景，降低临时降雨影响。</li></ul><div class="advice"><b>本次出行建议</b><p>每人准备轻薄雨衣、防水袋、防晒霜、速干衣；包船当天早晨确认海况和返航时间；缆车当天向前台复核停运时段；白沙滩慢跑尽量选择退潮后更平整的水线。</p></div></section></div><section class="panel culture-panel"><h2>当地风俗、饮食与团队沟通重点</h2><div class="culture-grid"><article><span>🍤</span><b>饮食关键词</b><p><strong>海鲜、鱼露、胡椒、热带水果、越南粉类小吃</strong>是富国岛餐饮主线。10 人团建议预订主菜拼盘，再现场补点小吃，避免每人单点导致出餐慢。</p></article><article><span>🙏</span><b>礼貌与风俗</b><p>进入寺庙或本地社区空间建议<strong>衣着得体</strong>；拍摄服务人员、摊主或儿童前先询问；夜市议价保持友好。</p></article><article><span>🗣️</span><b>语言与支付</b><p>建议保存<strong>越南文地址、餐厅截图和预订凭证</strong>；小摊更偏现金，酒店和大型餐厅刷卡更稳定。</p></article></div></section></section>`;
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
        showImageModal(b.dataset.img, b.dataset.title);
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
function showImageModal(src, title) {
  modal.className = "modal-backdrop image-modal-backdrop";
  modal.innerHTML = `<div class="image-modal"><button class="image-modal-close" id="closeImage" aria-label="关闭图片">×</button><img src="${esc(src)}" alt="${esc(title)}"><p>${esc(title)}</p></div>`;
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
