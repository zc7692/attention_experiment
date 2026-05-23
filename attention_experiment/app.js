const CONFIG = {
  submitEndpoint: "/api/submit",
  localBackupKey: "attentionExperimentFormalBackup",
  defaultDurationSeconds: 20 * 60,
  batchSize: 6,
  minViewportWidth: 900,
  minCardsSeen: 8,
  minClicks: 4,
  minSurveySeconds: 25,
};

const CONTENT_POOL = [
  {
    id: "c01",
    category: "科技",
    title: "生成式人工智能正在重塑企业内部知识协作流程",
    author: "数字治理观察",
    readMinutes: 3,
    summary: "越来越多企业把生成式人工智能接入文档检索、知识问答和客服辅助环节，效率与治理边界成为新的核心议题。",
    body: "企业在部署生成式人工智能时，往往并不只关心模型能力本身，而更关心其能否稳定嵌入既有工作流。随着知识库调用、内部问答和流程自动化不断结合，平台开始同时积累更细致的使用痕迹。这些痕迹既能提升系统匹配效率，也会在长期中重塑组织对信息获取速度和处理节奏的期待。",
  },
  {
    id: "c02",
    category: "社会",
    title: "夜间公共空间为何再次成为城市治理讨论的重点",
    author: "城市研究札记",
    readMinutes: 4,
    summary: "从夜跑人群到深夜书店，夜间公共空间被重新定义，安全、照明与社交活力之间的平衡越来越重要。",
    body: "夜间公共空间的活跃程度往往被视为城市社会活力的晴雨表。照明设施、交通衔接、公共服务与安全感知共同影响个体是否愿意停留。近年来的研究开始注意到，停留时间本身不仅是结果变量，也会反过来塑造人们对城市开放性和秩序感的主观判断。",
  },
  {
    id: "c03",
    category: "健康",
    title: "睡前刷信息流为什么更容易进入停不下来的状态",
    author: "行为实验室",
    readMinutes: 5,
    summary: "疲劳状态、自我控制资源下降和连续推荐机制叠加，使夜间浏览更容易转入半自动化模式。",
    body: "当个体在疲劳状态下浏览内容时，对即时反馈的敏感性往往会上升，而对停止行为的控制力则会下降。连续推荐、低摩擦切换和不确定性奖励结构会在这一时段放大停留倾向。用户主观上可能只是想再看一条，但平台结构会持续推迟退出时点。",
  },
  {
    id: "c04",
    category: "财经",
    title: "广告收益增长的背后是对单位注意力价值的精细计量",
    author: "平台商业评论",
    readMinutes: 4,
    summary: "广告转化不再只依赖流量规模，更依赖注意力停留深度、连续性以及可预测性。",
    body: "平台商业化逻辑正在从单纯追求点击量转向更细粒度的注意力经营。只要平台能够更稳定地预测用户是否会继续停留、是否会与相邻内容发生互动，它就在广告定价中具备更强议价能力。由此，延长停留时长本身就可能成为系统优化的重要目标。",
  },
  {
    id: "c05",
    category: "教育",
    title: "在线学习平台如何在提醒效率与自主感之间保持平衡",
    author: "学习科学研究组",
    readMinutes: 3,
    summary: "提醒机制并非越强越好，关键在于其是否与学习节奏、目标反馈和用户主观控制相匹配。",
    body: "学习平台经常使用打卡提醒、阶段提示和进度反馈来提升完成率，但过强的提示也可能带来被驱动感。真正有效的设计，并非不断增加干预频率，而是在适度推动行动的同时维持用户对自主节奏的把握。这种平衡直接影响平台能否形成长期留存。",
  },
  {
    id: "c06",
    category: "文化",
    title: "熟悉感如何影响我们对信息可信度的直觉判断",
    author: "认知传播研究",
    readMinutes: 4,
    summary: "反复出现的信息更容易被误判为真实，这种熟悉性偏差在算法推荐环境中尤其值得警惕。",
    body: "认知心理学研究表明，个体更容易把处理流畅的信息理解为可信信息。平台通过相似议题重复推送、同类立场连续出现和表达风格回响，可能在不知不觉中增强这种熟悉性偏差。算法越偏向强化既有偏好，类似信息的重复概率就越高。",
  },
  {
    id: "c07",
    category: "科技",
    title: "可穿戴设备让注意力研究开始进入更细颗粒度阶段",
    author: "前沿设备观察",
    readMinutes: 3,
    summary: "眼动、心率和停留时长被逐渐结合起来，以更细致地区分主动专注与被动拖延。",
    body: "传统平台研究经常使用点击和停留时间来判断用户投入，但这些指标难以区分主动探索和被动滞留。随着眼动、心率和皮肤电等数据被纳入研究，行为分析逐渐转向更高维度。这也让平台与研究者都更关注注意力质量而非单一数量。",
  },
  {
    id: "c08",
    category: "社会",
    title: "算法调度提升效率时，劳动者为何仍可能感到更强压力",
    author: "劳动研究所",
    readMinutes: 5,
    summary: "更高效率不必然意味着更好体验，平台也可能将时间压力转嫁给一线劳动者。",
    body: "路线推荐、订单排序和时限管理构成了平台劳动的核心调度逻辑。算法越精确，空闲时间越容易被压缩，平台整体效率可能随之提高。但对劳动者而言，这种效率提升也可能意味着更少调整空间和更高连续劳动强度，从而形成效率与福利之间的张力。",
  },
  {
    id: "c09",
    category: "健康",
    title: "信息过载之下，人们为何越来越偏好短而快的内容形态",
    author: "健康传播中心",
    readMinutes: 4,
    summary: "认知负荷越高，个体越倾向于依赖低成本、即时反馈强的信息消费形式。",
    body: "短内容之所以容易形成吸引力，不仅因为节奏快，还因为它显著降低了理解门槛和决策成本。当用户面对大量待处理信息时，更可能优先选择可以快速进入、快速反馈并迅速切换的内容形态。这种偏好反过来又会鼓励平台持续优化碎片化供给。",
  },
  {
    id: "c10",
    category: "财经",
    title: "订阅制平台正在重新强调个性化推荐的长期留存价值",
    author: "媒体经营笔记",
    readMinutes: 3,
    summary: "对订阅平台而言，用户流失往往不是一次差评造成的，而是长期找不到值得回来的理由。",
    body: "订阅平台比广告平台更依赖长期留存与复访，因此其推荐逻辑不仅要追求即时点击，还要帮助用户在有限时间内稳定触达真正感兴趣的内容。若平台始终无法形成有效匹配，用户即使没有明显不满，也可能逐渐降低回访频率。",
  },
  {
    id: "c11",
    category: "教育",
    title: "学习型视频与娱乐型视频为何会不断争夺同一段时间预算",
    author: "青年研究中心",
    readMinutes: 4,
    summary: "教育平台并不是只在教育赛道上竞争，它们也在与更低门槛的娱乐平台争夺同一份注意力。",
    body: "学习型内容通常需要更高的前期投入和更长的连续专注，而娱乐平台则提供更快反馈与更低进入门槛。因此，教育平台面对的并非单纯内容竞争，而是跨场景、跨目标的时间预算竞争。用户在目标冲突中不断切换，也会影响平台应采取怎样的推荐和界面策略。",
  },
  {
    id: "c12",
    category: "文化",
    title: "为什么信息流结构会让人持续期待下一条内容更有趣",
    author: "媒介叙事评论",
    readMinutes: 4,
    summary: "连续更新的内容序列会强化“下一条可能更好”的预期，从而推迟退出决策。",
    body: "信息流结构与目录式内容消费的重要差异，在于它把内容组织成近乎无穷尽的连续序列。用户完成一次微小消费后，界面又立刻暗示下一条可能更贴合兴趣。这种持续前瞻性的期待，使退出不再是自然完成后的动作，而更像是需要额外做出的主动决定。",
  },
  {
    id: "c13",
    category: "科技",
    title: "推荐系统中的探索与利用为何会改变用户的长期体验",
    author: "算法架构室",
    readMinutes: 5,
    summary: "过度利用既有偏好看似更精准，但也可能削弱内容多样性与长期满意度。",
    body: "推荐系统总是在探索新偏好与利用已有偏好之间做权衡。利用程度越高，系统越容易快速呈现看起来更合意的内容，但也更可能让用户持续停留在狭窄主题之内。短期停留和长期多样性因此并不总是一致，这正是算法强度实验需要检验的重要问题。",
  },
  {
    id: "c14",
    category: "社会",
    title: "关系链为何会成为平台迁移成本的重要来源",
    author: "网络社会研究组",
    readMinutes: 4,
    summary: "当关系、记忆和互动记录都绑定在同一平台时，离开平台便不再只是更换一个应用。",
    body: "用户之所以会长期停留在某个平台，往往不仅因为内容本身有吸引力，还因为关系网络、互动历史和熟悉的界面节奏都沉淀其中。这类沉淀会把原本简单的切换行为变成更高成本的重新组织行为，从而强化平台锁定结构。",
  },
  {
    id: "c15",
    category: "健康",
    title: "长时间连续浏览后，主观满足感为什么仍然可能偏高",
    author: "实验行为中心",
    readMinutes: 5,
    summary: "即时反馈可以提升当下满足，但并不必然对应更高的长期福利。",
    body: "高频反馈与高匹配推荐会让用户在短期内感到持续满足，但这种满足并不一定等同于更高福利。行为经济学关注的关键问题正在于，个体在当下感到愉快的决策，是否也真的改善了其长期结果。注意力平台的吸引力正是建立在这种短期奖励之上。",
  },
  {
    id: "c16",
    category: "财经",
    title: "平台为何偏爱高停留与低退出摩擦的产品结构",
    author: "数字商业观察",
    readMinutes: 4,
    summary: "推迟退出动作本身就可能成为重要的商业变量，因此平台会持续优化停留路径。",
    body: "平台不一定要求用户每次都做重大决策，更多时候它追求的是让用户在一串几乎无摩擦的小动作中持续停留。只要退出被轻微推迟，平台就可能多获得一段停留、一轮广告展示或一组新的行为数据。由此，延缓退出本身就具有明确商业价值。",
  },
  {
    id: "c17",
    category: "教育",
    title: "轻量打断为何会显著削弱深度阅读与理解表现",
    author: "学习测量实验室",
    readMinutes: 3,
    summary: "频繁但很短的提示也会侵蚀连续加工时间，从而降低后续理解和回忆质量。",
    body: "深度阅读高度依赖连续注意力。实验发现，即使每次打断都很短，只要提示足够频繁，个体对长文本的理解质量就会明显下降。平台若不断以轻量提示扰动用户注意力，可能会对深度学习和审慎判断造成系统性影响。",
  },
  {
    id: "c18",
    category: "文化",
    title: "同一篇内容在不同界面结构中为何会产生不同停留结果",
    author: "视觉媒介研究",
    readMinutes: 4,
    summary: "内容本身并不是唯一决定因素，界面节奏、留白与预览密度也会显著影响点击与停留。",
    body: "同一篇文章若置于密集滚动的信息流中，用户点击往往更依赖顺手与即时刺激；若置于克制的阅读界面中，点击前则更可能伴随明确阅读目标。这意味着算法强度也不只是排序概率问题，它还会通过界面组织方式间接改变用户的注意力轨迹。",
  },
];

const elements = {
  introScreen: document.getElementById("introScreen"),
  experimentScreen: document.getElementById("experimentScreen"),
  completeScreen: document.getElementById("completeScreen"),
  runtimeBadge: document.getElementById("runtimeBadge"),
  timerText: document.getElementById("timerText"),
  inactiveText: document.getElementById("inactiveText"),
  feedList: document.getElementById("feedList"),
  loadMoreButton: document.getElementById("loadMoreButton"),
  startForm: document.getElementById("startForm"),
  surveyOverlay: document.getElementById("surveyOverlay"),
  surveyForm: document.getElementById("surveyForm"),
  submitSurveyButton: document.getElementById("submitSurveyButton"),
  pauseOverlay: document.getElementById("pauseOverlay"),
  detailDialog: document.getElementById("detailDialog"),
  detailCategory: document.getElementById("detailCategory"),
  detailTitle: document.getElementById("detailTitle"),
  detailMeta: document.getElementById("detailMeta"),
  detailBody: document.getElementById("detailBody"),
  closeDetailButton: document.getElementById("closeDetailButton"),
  cardsSeenStat: document.getElementById("cardsSeenStat"),
  cardsOpenedStat: document.getElementById("cardsOpenedStat"),
  bookmarksStat: document.getElementById("bookmarksStat"),
  activeElapsedStat: document.getElementById("activeElapsedStat"),
  downloadDataButton: document.getElementById("downloadDataButton"),
  restartButton: document.getElementById("restartButton"),
  completionMessage: document.getElementById("completionMessage"),
  receiptBox: document.getElementById("receiptBox"),
  startError: document.getElementById("startError"),
  deviceNotice: document.getElementById("deviceNotice"),
};

const state = {
  sessionId: null,
  participant: {},
  startedAt: null,
  endedAt: null,
  surveyShownAt: null,
  condition: null,
  durationSeconds: null,
  timerId: null,
  surveyTriggered: false,
  submitted: false,
  renderedIds: new Set(),
  eventLog: [],
  categoryScores: {},
  bookmarks: new Set(),
  visibleCards: new Map(),
  intersectionObserver: null,
  mutationObserver: null,
  activeElapsedSeconds: 0,
  inactiveElapsedSeconds: 0,
  lastActivityState: null,
  fullscreenEntered: false,
  fullscreenExitCount: 0,
  summary: {
    cardsSeen: 0,
    cardsOpened: 0,
    bookmarks: 0,
    maxScrollY: 0,
    clicks: 0,
  },
};

function parseQuery() {
  const params = new URLSearchParams(window.location.search);
  const duration = Number(params.get("duration"));
  const forcedCondition = params.get("condition");
  return {
    durationSeconds: Number.isFinite(duration) && duration > 0 ? duration : CONFIG.defaultDurationSeconds,
    forcedCondition,
    allowMobile: params.get("allowMobile") === "1",
  };
}

function randomChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function assignCondition(forcedCondition) {
  const conditions = ["low", "medium", "high"];
  if (conditions.includes(forcedCondition)) {
    return forcedCondition;
  }
  return randomChoice(conditions);
}

function generateSessionId() {
  return `exp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function generateParticipantCode() {
  return `P-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function formatTime(seconds) {
  const safe = Math.max(seconds, 0);
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function getDeviceInfo() {
  const ua = navigator.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  return {
    userAgent: ua,
    language: navigator.language || "",
    platform: navigator.platform || "",
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    isMobile,
  };
}

function isExposureActive() {
  return document.visibilityState === "visible" && document.hasFocus();
}

function recordEvent(type, payload = {}) {
  const now = Date.now();
  state.eventLog.push({
    type,
    timestamp: new Date(now).toISOString(),
    elapsedMs: state.startedAt ? now - state.startedAt : null,
    activeElapsedSeconds: state.activeElapsedSeconds,
    inactiveElapsedSeconds: state.inactiveElapsedSeconds,
    ...payload,
  });
}

function showStartError(message) {
  elements.startError.textContent = message;
  elements.startError.classList.remove("hidden");
}

function clearStartError() {
  elements.startError.textContent = "";
  elements.startError.classList.add("hidden");
}

function updateStats() {
  elements.cardsSeenStat.textContent = String(state.summary.cardsSeen);
  elements.cardsOpenedStat.textContent = String(state.summary.cardsOpened);
  elements.bookmarksStat.textContent = String(state.summary.bookmarks);
  elements.activeElapsedStat.textContent = formatTime(state.activeElapsedSeconds);
  elements.timerText.textContent = formatTime(state.durationSeconds - state.activeElapsedSeconds);
  elements.inactiveText.textContent = formatTime(state.inactiveElapsedSeconds);
}

function handleActivityStateChange(reason) {
  const active = isExposureActive();
  if (state.lastActivityState === active) return;
  state.lastActivityState = active;
  const shouldShowPause = Boolean(state.startedAt) && !active && !state.surveyTriggered && !state.submitted;
  elements.pauseOverlay.classList.toggle("hidden", !shouldShowPause);
  if (state.startedAt && !state.surveyTriggered) {
    recordEvent(active ? "exposure_resumed" : "exposure_paused", { reason });
  }
}

function scoreItem(item) {
  const pref = state.categoryScores[item.category] || 0;
  const recentCategoryCount = Array.from(state.renderedIds)
    .slice(-6)
    .map((id) => CONTENT_POOL.find((entry) => entry.id === id))
    .filter(Boolean)
    .filter((entry) => entry.category === item.category).length;

  if (state.condition === "low") {
    return Math.random() * 10 - recentCategoryCount * 1.5 + (item.readMinutes <= 4 ? 0.3 : 0);
  }
  if (state.condition === "medium") {
    return pref * 1.8 + Math.random() * 5 - recentCategoryCount * 0.8 + (item.readMinutes <= 4 ? 1 : 0.3);
  }
  return pref * 3.2 + Math.random() * 3 - recentCategoryCount * 0.2 + (item.readMinutes <= 4 ? 1.4 : 0.2);
}

function nextBatch() {
  const candidates = CONTENT_POOL.filter((item) => !state.renderedIds.has(item.id));
  if (!candidates.length) {
    state.renderedIds.clear();
    return nextBatch();
  }

  const ranked = candidates
    .map((item) => ({ item, score: scoreItem(item) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(CONFIG.batchSize * 2, 12));

  const picked = [];
  while (picked.length < CONFIG.batchSize && ranked.length) {
    const index = state.condition === "low" ? Math.floor(Math.random() * Math.min(ranked.length, 5)) : 0;
    const choice = ranked.splice(index, 1)[0];
    picked.push(choice.item);
  }

  picked.forEach((item) => state.renderedIds.add(item.id));
  return picked;
}

function enrichPreference(category, amount) {
  state.categoryScores[category] = (state.categoryScores[category] || 0) + amount;
}

function renderFeedItems(items) {
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "feed-card";
    article.dataset.cardId = item.id;
    article.dataset.category = item.category;
    article.innerHTML = `
      <div class="feed-meta">
        <span class="category-tag">${item.category}</span>
        <span>${item.author}</span>
        <span>预计阅读 ${item.readMinutes} 分钟</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="feed-actions">
        <button class="secondary-button" type="button" data-action="open">展开全文</button>
        <button class="secondary-button" type="button" data-action="bookmark">收藏</button>
        <button class="secondary-button" type="button" data-action="similar">继续看类似内容</button>
      </div>
    `;

    article.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const action = target.dataset.action;
      if (!action) return;

      state.summary.clicks += 1;
      if (action === "open") openDetail(item);
      if (action === "bookmark") toggleBookmark(item, target);
      if (action === "similar") requestSimilar(item);
      updateStats();
    });

    elements.feedList.appendChild(article);
    if (state.intersectionObserver) {
      state.intersectionObserver.observe(article);
    }
  });
}

function openDetail(item) {
  state.summary.cardsOpened += 1;
  enrichPreference(item.category, state.condition === "high" ? 3.5 : state.condition === "medium" ? 2 : 1);
  recordEvent("open_detail", { cardId: item.id, category: item.category });
  updateStats();

  elements.detailCategory.textContent = item.category;
  elements.detailTitle.textContent = item.title;
  elements.detailMeta.textContent = `${item.author} · 预计阅读 ${item.readMinutes} 分钟`;
  elements.detailBody.innerHTML = item.body
    .split("。")
    .filter(Boolean)
    .map((segment) => `<p>${segment.trim()}。</p>`)
    .join("");

  if (!elements.detailDialog.open) {
    elements.detailDialog.showModal();
  }
}

function toggleBookmark(item, buttonEl) {
  const exists = state.bookmarks.has(item.id);
  if (exists) {
    state.bookmarks.delete(item.id);
    state.summary.bookmarks -= 1;
    buttonEl.textContent = "收藏";
  } else {
    state.bookmarks.add(item.id);
    state.summary.bookmarks += 1;
    enrichPreference(item.category, 2);
    buttonEl.textContent = "已收藏";
  }
  recordEvent("toggle_bookmark", {
    cardId: item.id,
    category: item.category,
    active: !exists,
  });
}

function requestSimilar(item) {
  enrichPreference(item.category, state.condition === "high" ? 3 : 1.5);
  recordEvent("request_similar", { cardId: item.id, category: item.category });
  appendMoreContent();
}

function appendMoreContent() {
  renderFeedItems(nextBatch());
}

function setupObserver() {
  if (state.intersectionObserver) {
    state.intersectionObserver.disconnect();
  }
  if (state.mutationObserver) {
    state.mutationObserver.disconnect();
  }

  state.intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const cardId = entry.target.dataset.cardId;
      const category = entry.target.dataset.category;
      if (!cardId || !category) return;

      if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
        entry.target.classList.add("visible");
        if (!state.visibleCards.has(cardId)) {
          state.visibleCards.set(cardId, Date.now());
        }
        if (!entry.target.dataset.countedSeen) {
          entry.target.dataset.countedSeen = "1";
          state.summary.cardsSeen += 1;
          enrichPreference(category, state.condition === "high" ? 1.2 : 0.5);
          recordEvent("card_visible", {
            cardId,
            category,
            ratio: Number(entry.intersectionRatio.toFixed(3)),
          });
          updateStats();
        }
      } else {
        entry.target.classList.remove("visible");
        if (state.visibleCards.has(cardId)) {
          const enteredAt = state.visibleCards.get(cardId);
          state.visibleCards.delete(cardId);
          recordEvent("card_hidden", {
            cardId,
            category,
            visibleDurationMs: enteredAt ? Date.now() - enteredAt : null,
          });
        }
      }
    });
  }, { threshold: [0.65] });

  document.querySelectorAll(".feed-card").forEach((card) => state.intersectionObserver.observe(card));

  state.mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement && node.classList.contains("feed-card")) {
          state.intersectionObserver.observe(node);
        }
      });
    });
  });

  state.mutationObserver.observe(elements.feedList, { childList: true });
}

function saveLocalBackup() {
  const snapshot = {
    sessionId: state.sessionId,
    participant: state.participant,
    condition: state.condition,
    durationSeconds: state.durationSeconds,
    startedAt: state.startedAt ? new Date(state.startedAt).toISOString() : null,
    endedAt: state.endedAt ? new Date(state.endedAt).toISOString() : null,
    activeElapsedSeconds: state.activeElapsedSeconds,
    inactiveElapsedSeconds: state.inactiveElapsedSeconds,
    summary: state.summary,
    categoryScores: state.categoryScores,
    eventLog: state.eventLog,
  };
  localStorage.setItem(CONFIG.localBackupKey, JSON.stringify(snapshot));
}

function startTimer() {
  updateStats();
  handleActivityStateChange("timer_start");
  state.timerId = window.setInterval(() => {
    if (isExposureActive()) {
      state.activeElapsedSeconds += 1;
    } else {
      state.inactiveElapsedSeconds += 1;
    }

    updateStats();

    if (state.activeElapsedSeconds >= state.durationSeconds) {
      clearInterval(state.timerId);
      triggerSurvey();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function triggerSurvey() {
  if (state.surveyTriggered) return;
  state.surveyTriggered = true;
  state.surveyShownAt = Date.now();
  recordEvent("survey_shown");
  saveLocalBackup();
  elements.surveyOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function computeCategoryConcentration() {
  const values = Object.values(state.categoryScores);
  const total = values.reduce((sum, value) => sum + value, 0);
  if (!total) return 0;
  return Number(values.reduce((sum, value) => {
    const p = value / total;
    return sum + p * p;
  }, 0).toFixed(4));
}

function buildQualityFlags(payload) {
  const hiddenRatio = payload.summary.totalObservedSeconds
    ? payload.summary.inactiveElapsedSeconds / payload.summary.totalObservedSeconds
    : 0;

  return {
    attentionCheckFailed: payload.survey.attentionCheck !== "5",
    highHiddenRatio: hiddenRatio > 0.2,
    lowEngagement:
      payload.summary.cardsSeen < CONFIG.minCardsSeen || payload.summary.clicks < CONFIG.minClicks,
    surveyTooFast: payload.summary.surveySeconds < CONFIG.minSurveySeconds,
    mobileDevice: payload.technical.device.isMobile,
    viewportTooSmall: payload.technical.device.viewportWidth < CONFIG.minViewportWidth,
    interruptedSelfReport: payload.survey.interruption === "clear",
    repeatedFullscreenExit: payload.summary.fullscreenExitCount > 1,
  };
}

function buildSubmissionPayload(formData) {
  const survey = Object.fromEntries(formData.entries());
  state.endedAt = Date.now();
  const payload = {
    sessionId: state.sessionId,
    participant: state.participant,
    condition: state.condition,
    durationSeconds: state.durationSeconds,
    startedAt: new Date(state.startedAt).toISOString(),
    endedAt: new Date(state.endedAt).toISOString(),
    summary: {
      ...state.summary,
      activeElapsedSeconds: state.activeElapsedSeconds,
      inactiveElapsedSeconds: state.inactiveElapsedSeconds,
      totalObservedSeconds: state.activeElapsedSeconds + state.inactiveElapsedSeconds,
      categoryConcentration: computeCategoryConcentration(),
      uniqueBookmarks: state.bookmarks.size,
      eventCount: state.eventLog.length,
      fullscreenEntered: state.fullscreenEntered,
      fullscreenExitCount: state.fullscreenExitCount,
      surveySeconds: state.surveyShownAt ? Math.round((state.endedAt - state.surveyShownAt) / 1000) : null,
    },
    categoryScores: state.categoryScores,
    survey,
    eventLog: state.eventLog,
    technical: {
      device: getDeviceInfo(),
      referrer: document.referrer || "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    },
  };

  payload.qualityFlags = buildQualityFlags(payload);
  return payload;
}

async function submitPayload(payload) {
  try {
    const response = await fetch(CONFIG.submitEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`submit failed with status ${response.status}`);
    }
    const result = await response.json();
    return { ok: true, result };
  } catch (error) {
    console.warn(error);
    return { ok: false, error: String(error) };
  }
}

function downloadJSON(payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `attention-experiment-${payload.sessionId}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function handleSurveySubmit(event) {
  event.preventDefault();
  elements.submitSurveyButton.disabled = true;
  const formData = new FormData(elements.surveyForm);
  recordEvent("survey_submitted", { attentionCheck: formData.get("attentionCheck") });
  const payload = buildSubmissionPayload(formData);
  saveLocalBackup();
  const response = await submitPayload(payload);

  elements.surveyOverlay.classList.add("hidden");
  document.body.style.overflow = "";
  elements.experimentScreen.classList.add("hidden");
  elements.completeScreen.classList.remove("hidden");
  elements.runtimeBadge.classList.add("hidden");
  state.submitted = true;

  let receiptCode = `LOCAL-${state.sessionId.slice(-6).toUpperCase()}`;
  if (response.ok) {
    receiptCode = response.result.receiptCode || receiptCode;
    elements.completionMessage.textContent = "问卷已成功提交并保存。请将下方完成码提供给研究者用于核验。";
  } else {
    elements.completionMessage.textContent = "问卷已完成，但当前未能连接实验服务器。请立即下载 JSON 备份，并把该备份交给研究者。";
  }

  elements.receiptBox.textContent = `完成码：${receiptCode}`;
  elements.receiptBox.classList.remove("hidden");
  elements.downloadDataButton.onclick = () => downloadJSON(payload);
  elements.restartButton.onclick = () => window.location.reload();
}

async function requestFullscreenIfPossible() {
  if (!document.fullscreenEnabled) return;
  try {
    await document.documentElement.requestFullscreen();
    state.fullscreenEntered = true;
    recordEvent("fullscreen_entered");
  } catch (_error) {
    recordEvent("fullscreen_request_failed");
  }
}

function resetStateForNewRun() {
  stopTimer();
  if (state.intersectionObserver) state.intersectionObserver.disconnect();
  if (state.mutationObserver) state.mutationObserver.disconnect();

  state.sessionId = null;
  state.participant = {};
  state.startedAt = null;
  state.endedAt = null;
  state.surveyShownAt = null;
  state.condition = null;
  state.durationSeconds = null;
  state.surveyTriggered = false;
  state.submitted = false;
  state.renderedIds = new Set();
  state.eventLog = [];
  state.categoryScores = {};
  state.bookmarks = new Set();
  state.visibleCards = new Map();
  state.intersectionObserver = null;
  state.mutationObserver = null;
  state.activeElapsedSeconds = 0;
  state.inactiveElapsedSeconds = 0;
  state.lastActivityState = null;
  state.fullscreenEntered = false;
  state.fullscreenExitCount = 0;
  state.summary = {
    cardsSeen: 0,
    cardsOpened: 0,
    bookmarks: 0,
    maxScrollY: 0,
    clicks: 0,
  };
  elements.feedList.innerHTML = "";
}

async function handleStart(event) {
  event.preventDefault();
  clearStartError();

  const query = parseQuery();
  const device = getDeviceInfo();
  const formData = new FormData(elements.startForm);

  if (formData.get("adultCheck") !== "yes") {
    showStartError("本实验仅面向年满 18 周岁的参与者。");
    return;
  }

  if (!query.allowMobile && (device.isMobile || device.viewportWidth < CONFIG.minViewportWidth)) {
    showStartError("正式收数版请使用电脑端浏览器完成。若仅用于调试，可在网址后添加 ?allowMobile=1。");
    return;
  }

  resetStateForNewRun();
  state.sessionId = generateSessionId();
  state.participant = {
    participantCode: (formData.get("participantCode") || "").trim() || generateParticipantCode(),
    ageGroup: formData.get("ageGroup") || "",
    gender: formData.get("gender") || "",
    adultConfirmed: formData.get("adultCheck") === "yes",
  };
  state.condition = assignCondition(query.forcedCondition);
  state.durationSeconds = query.durationSeconds;
  state.startedAt = Date.now();

  recordEvent("experiment_started", {
    condition: state.condition,
    durationSeconds: state.durationSeconds,
    participant: state.participant,
    device,
  });

  elements.introScreen.classList.add("hidden");
  elements.experimentScreen.classList.remove("hidden");
  elements.runtimeBadge.classList.remove("hidden");
  updateStats();
  renderFeedItems(nextBatch());
  setupObserver();
  handleActivityStateChange("experiment_started");
  await requestFullscreenIfPossible();
  startTimer();
}

function setupGlobalEvents() {
  elements.startForm.addEventListener("submit", handleStart);

  elements.loadMoreButton.addEventListener("click", () => {
    appendMoreContent();
    recordEvent("manual_load_more");
  });

  elements.closeDetailButton.addEventListener("click", () => elements.detailDialog.close());

  elements.detailDialog.addEventListener("click", (event) => {
    const rect = elements.detailDialog.getBoundingClientRect();
    const withinDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!withinDialog) elements.detailDialog.close();
  });

  elements.surveyForm.addEventListener("submit", handleSurveySubmit);

  window.addEventListener("scroll", () => {
    state.summary.maxScrollY = Math.max(state.summary.maxScrollY, Math.round(window.scrollY));
  }, { passive: true });

  document.addEventListener("visibilitychange", () => {
    handleActivityStateChange("visibilitychange");
  });

  window.addEventListener("focus", () => {
    handleActivityStateChange("focus");
  });

  window.addEventListener("blur", () => {
    handleActivityStateChange("blur");
  });

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && state.startedAt && !state.submitted) {
      state.fullscreenExitCount += 1;
      recordEvent("fullscreen_exited", { count: state.fullscreenExitCount });
    }
  });

  window.addEventListener("beforeunload", (event) => {
    saveLocalBackup();
    if (state.startedAt && !state.submitted) {
      event.preventDefault();
      event.returnValue = "";
    }
  });
}

setupGlobalEvents();
