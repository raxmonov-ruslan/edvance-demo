/**
 * Pitch Day 3.0 — /demo konfiguratsiyasi.
 * NEXT_PUBLIC_* bo‘lsa u ustunlik qiladi. Secret’larni bu yerga yozmang.
 */

function env(key: string): string {
  const v = process.env[key]?.trim();
  return v || "";
}

export const demoConfig = {
  videoUrl: env("NEXT_PUBLIC_DEMO_VIDEO_URL") || "/pitch-day/demo.mp4",
  youtubeId: env("NEXT_PUBLIC_DEMO_YOUTUBE_ID"),
  prototypeUrl:
    env("NEXT_PUBLIC_PROTOTYPE_URL") || "https://edvance-seven.vercel.app/",
  githubUrl: env("NEXT_PUBLIC_GITHUB_URL") || "https://github.com/ruslan-raxmonov/edvance-demo",
  linkedinUrl: env("NEXT_PUBLIC_LINKEDIN_URL"),
  telegramUrl: env("NEXT_PUBLIC_TELEGRAM_URL") || "https://t.me/edvance_support",
  contactEmail: "support@edvance.uz",
};

export const demoMeta = {
  title: "EDVΛNCE — AI Sales Manager Demo",
  description:
    "EDVΛNCE AI Sales Manager ta’lim markazlarida Instagram va Telegram orqali keladigan leadlarni qabul qilish, saralash va sinov darsigacha olib borishni avtomatlashtiradi.",
  ogTitle: "EDVΛNCE — AI Sales Manager",
  ogDescription:
    "EDVΛNCE ta’lim leadlarini malakali suhbatlarga aylantirishini ko‘ring.",
};

export const demoNav = [
  { id: "overview", label: "Umumiy", href: "#overview" },
  { id: "problem", label: "Muammo", href: "#problem" },
  { id: "solution", label: "Yechim", href: "#solution" },
  { id: "how", label: "Qanday ishlaydi", href: "#how" },
  { id: "roadmap", label: "Yo‘l xaritasi", href: "#roadmap" },
  { id: "team", label: "Jamoa", href: "#team" },
  { id: "video", label: "Demo", href: "#video" },
] as const;

export type PhaseStatus = "done" | "in_progress" | "planned";

export const implementationPhases: {
  n: string;
  title: string;
  status: PhaseStatus;
  items: string[];
}[] = [
  {
    n: "01",
    title: "Asos (Foundation)",
    status: "done",
    items: [
      "Ta’lim ma’lumot modeli (lead, kurs, filial, bilim bazasi)",
      "Tashkilot / workspace tuzilmasi",
      "CRM obyektlari va pipeline bosqichlari",
      "Bilim hujjatlari (FAQ / siyosat)",
    ],
  },
  {
    n: "02",
    title: "AI Sales Manager",
    status: "in_progress",
    items: [
      "Agent profili va ko‘rsatmalar",
      "Bilim bazasiga asoslangan javob logikasi",
      "Lead signal / qualify yordamchilari",
      "Hermes / LLM adapter ulanishi",
    ],
  },
  {
    n: "03",
    title: "Kanal integratsiyasi",
    status: "in_progress",
    items: [
      "Telegram ulash (Composio / board)",
      "Instagram ulash (Composio / board)",
      "Xabar qabul qilish + suhbat tarixi",
      "AI javob yo‘li",
    ],
  },
  {
    n: "04",
    title: "CRM avtomatlashtirish",
    status: "in_progress",
    items: [
      "Lead yaratish va ball berish",
      "Pipeline UI (dashboard CRM)",
      "Sinov darsi / handoff yordamchilari",
      "Operator inbox",
    ],
  },
  {
    n: "05",
    title: "Optimizatsiya",
    status: "planned",
    items: [
      "Konversiya voronkasi analitikasi",
      "Yaxshiroq qualification qoidalari",
      "Avtomatik follow-up",
      "Qo‘shimcha AI xodimlar (support / ops)",
    ],
  },
];

export const roadmapStages: {
  id: string;
  label: string;
  status: PhaseStatus | "current";
  summary: string;
}[] = [
  {
    id: "idea",
    label: "G‘OYA",
    status: "done",
    summary: "Ta’lim sotuvi muammosini aniqlash",
  },
  {
    id: "prototype",
    label: "PROTOTIP",
    status: "current",
    summary: "AI Sales Manager + demo oqimi",
  },
  {
    id: "mvp",
    label: "MVP",
    status: "planned",
    summary: "Haqiqiy ta’lim markazlari bilan sinov",
  },
  {
    id: "launched",
    label: "ISHGA TUSHIRISH",
    status: "planned",
    summary: "5–10 ta real markazda foydalanish va feedback",
  },
  {
    id: "workforce",
    label: "AI ISHCHI KUCHI",
    status: "planned",
    summary: "Sotuv → Support → HR → Operatsiyalar",
  },
];

export const teamMembers = [
  {
    name: "Ruslan Raxmonov",
    role: "Founder & CEO",
    skills: ["Mahsulot", "Strategiya", "AI agentlar", "Full-stack"],
    technologies: ["Next.js", "TypeScript", "Supabase", "Hermes / LLM", "Telegram / Instagram"],
    links: [
      { label: "GitHub", href: demoConfig.githubUrl },
      { label: "Telegram", href: demoConfig.telegramUrl },
    ].filter((l) => Boolean(l.href)),
  },
  {
    name: "Bekmuod Shodmonov",
    role: "Developer",
    skills: ["Dasturlash", "Integratsiyalar", "UI"],
    technologies: ["Next.js", "TypeScript", "API"],
    links: [] as { label: string; href: string }[],
  },
  {
    name: "Nuriddin Ergashev",
    role: "Project Manager",
    skills: ["Loyiha boshqaruvi", "Mijozlar bilan ishlash", "Rejalashtirish"],
    technologies: ["Product ops", "Roadmap", "Kommunikatsiya"],
    links: [] as { label: string; href: string }[],
  },
];

export const techLabels = {
  frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4"],
  backend: ["Next.js API marshrutlari", "Supabase / PostgreSQL (yoki FS store)", "JTTR board xizmatlari"],
  ai: ["Hermes agent adapter", "Bilim bazasiga asoslangan promptlar", "Lead qualify yordamchilari"],
  integrations: ["Telegram (Composio)", "Instagram (Composio)"],
  planned: ["WhatsApp Business", "Ochiq partner API", "Self-serve billing"],
};

export const demoFaq = [
  {
    q: "EDVΛNCE nima?",
    a: "EDVΛNCE — ta’lim markazlari uchun AI Sales Manager. Instagram va Telegram murojaatlarini qabul qiladi, bilim bazasi asosida javob beradi, leadni saralaydi va sinov darsigacha olib borishga yordam beradi.",
  },
  {
    q: "Qaysi muammoni hal qiladi?",
    a: "Administratorlar barcha DM’larga bir xil sifatda yetisha olmaydi. Leadlar javobsiz qoladi, qo‘lda saralanadi, follow-up yo‘qoladi. EDVΛNCE shu oqimni avtomatlashtirishga qaratilgan.",
  },
  {
    q: "AI qanday ishlaydi?",
    a: "AI markazning bilim bazasidan foydalanadi (kurs, narx, filial, jadval). Keyin leadni saralaydi, ball beradi, sinov darsi yoki adminga topshirishni belgilaydi.",
  },
  {
    q: "Qaysi kanallarni qo‘llab-quvvatlaydi?",
    a: "Hozirgi fokus: Instagram va Telegram (Composio orqali ulash). WhatsApp — yo‘l xaritasida rejalashtirilgan.",
  },
  {
    q: "Lead scoring qanday ishlaydi?",
    a: "Suhbatdan maqsad, kurs, daraja va sinov darsiga qiziqish ajratiladi; lead holati (issiq / iliq / sovuq) va keyingi harakat belgilanadi. Demo’dagi 82 ball — misol UI, haqiqiy mijoz ma’lumoti emas.",
  },
  {
    q: "Kelajakdagi rejangiz nima?",
    a: "Qisqa muddat: ta’lim AI Sales MVP. Uzoq muddat: Sotuv → Support → HR → Operatsiyalar — AI ishchi kuchi platformasi.",
  },
];

export const publicApiDocs = [
  {
    method: "GET",
    path: "/api/pitch-day",
    desc: "Pitch Day meta, yo‘l xaritasi holati, demo havolalari (JSON).",
  },
  {
    method: "GET",
    path: "/api/edvance-health",
    desc: "Ilova health-check (adapter / store holati).",
  },
];
