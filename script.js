// データはここで管理（API/Firebaseに差し替え可能）
const TEAM = {
  leader: "shxrk",
  slogan: "俺らにしかないことを見つけ夢を掴む",
  members: [
    { name: "選手A", role: "選手", tags: ["攻める", "仲間の指示"] },
    { name: "サポート選手", role: "選手", tags: ["サポート", "素材補給"] },
    { name: "マネージャー", role: "マネージャー", tags: ["運営", "対応"] },
    { name: "ストリーマー", role: "ストリーマー", tags: ["PR", "配信", "実況"] },
    { name: "育成", role: "育成", tags: ["選手育成", "初心者育成"] },
    { name: "オーナー", role: "オーナー", tags: ["管理", "運営", "資金調達"] },
    { name: "副オーナー", role: "副オーナー", tags: ["管理", "運営"] },
    { name: "運営", role: "運営", tags: ["企画", "運営", "メンバー管理"] },
  ],
  achievements: [
    { title: "グランドファイナル出場", meta: "×1 / Fortnite", year: 2024 },
    { title: "FNCS dv2.3 上位入賞", meta: "1.2桁台", year: 2024 },
    { title: "スキン大会 スキン獲得", meta: "複数回", year: 2024 },
    { title: "その他 ランクカップなど 二桁台獲得", meta: "", year: 2024 },
  ],
  kpis: { final: "1回", top: "TOP 10〜99" }
};

// 年
document.getElementById("year").textContent = new Date().getFullYear();

// リーダー名
document.getElementById("leader-name").textContent = TEAM.leader;

// KPI表示
document.getElementById("kpi-final").textContent = TEAM.kpis.final;
document.getElementById("kpi-top").textContent = TEAM.kpis.top;

// メンバー描画
const memberGrid = document.getElementById("member-grid");
TEAM.members.forEach(m => {
  const el = document.createElement("article");
  el.className = "member-card";
  el.innerHTML = `
    <div class="pill">${m.role}</div>
    <h3>${m.name}</h3>
    <p class="role">${(m.tags || []).join(" / ")}</p>
  `;
  memberGrid.appendChild(el);
});

// 実績描画
const achList = document.getElementById("achievements-list");
TEAM.achievements
  .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
  .forEach(a => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="title">${a.title}</div>
      <div class="meta">${a.meta ? a.meta + " ・ " : ""}${a.year || ""}</div>
    `;
    achList.appendChild(li);
  });

// ナビ開閉（モバイル）
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open");
});

// お問い合わせ（デモ）バリデーション
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("c-name");
  const email = document.getElementById("c-email");
  const msg = document.getElementById("c-msg");

  let ok = true;
  const setErr = (id, text) => {
    const span = document.querySelector(`.error[data-for="${id}"]`);
    if (span) span.textContent = text || "";
  };

  if (!name.value.trim()) {
    setErr("c-name", "必須です"); ok = false;
  } else setErr("c-name");

  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    setErr("c-email", "メール形式が不正です"); ok = false;
  } else setErr("c-email");

  if (!msg.value.trim()) {
    setErr("c-msg", "必須です"); ok = false;
  } else setErr("c-msg");

  if (ok) {
    alert("デモ送信：バックエンド連携で実送信に対応できます（Firebase推奨）");
    form.reset();
  }
});
