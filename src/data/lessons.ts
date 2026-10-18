// 課程資料：每一課 = 一個生活情境。新增課程只要在這裡加一筆。
// 單字的 example 一定要是母語人士自然會說的句子；中文用台灣說法。

export interface Word { icon: string; en: string; zh: string; ex?: string; exZh?: string }
export interface Sentence { en: string; zh: string; note?: string }
export interface Lesson {
  id: string;
  unit: string;
  title: string;
  titleEn: string;
  level: '入門' | '基礎' | '進階';
  intro: string;
  words: Word[];
  sentences: Sentence[];
  image?: string; // 每日圖卡的圖（public 底下的路徑）
  date?: string;
}

export const units = [
  { id: 'life', title: '第一單元：日常生活', desc: '超商、搭車、吃飯，每天都會遇到的英文' },
  { id: 'phrases', title: '第二單元：這句英文怎麼說', desc: '「我先走了」「辛苦了」這類中文常說的話' },
  { id: 'daily', title: '每日圖卡', desc: '粉專每天發的圖卡，都在這裡變成一堂小課' },
];

export const lessons: Lesson[] = [
  {
    id: 'convenience-store',
    unit: 'life',
    title: '便利商店',
    titleEn: 'Convenience Store',
    level: '入門',
    intro: '結帳、加熱、繳費、取包裹，超商裡最常用到的單字和句子。',
    words: [
      { icon: '🧾', en: 'receipt', zh: '收據、發票', ex: 'Do you need a receipt?', exZh: '需要收據嗎？' },
      { icon: '🛍️', en: 'plastic bag', zh: '塑膠袋', ex: 'Do you need a plastic bag?', exZh: '需要塑膠袋嗎？' },
      { icon: '🔥', en: 'heat up', zh: '加熱', ex: 'Could you heat this up, please?', exZh: '可以幫我加熱嗎？' },
      { icon: '💳', en: 'pay by card', zh: '刷卡', ex: 'Can I pay by card?', exZh: '可以刷卡嗎？' },
      { icon: '📱', en: 'mobile payment', zh: '行動支付', ex: 'Do you take mobile payment?', exZh: '可以用行動支付嗎？' },
      { icon: '⭐', en: 'points card', zh: '集點卡', ex: 'Do you have a points card?', exZh: '你有集點卡嗎？' },
      { icon: '🥤', en: 'iced coffee', zh: '冰咖啡', ex: "I'd like a large iced coffee.", exZh: '我要一杯大杯冰咖啡。' },
      { icon: '📦', en: 'pick up a package', zh: '取包裹', ex: "I'm here to pick up a package.", exZh: '我來取包裹。' },
      { icon: '💸', en: 'pay a bill', zh: '繳帳單', ex: 'Can I pay my phone bill here?', exZh: '這裡可以繳電話費嗎？' },
      { icon: '🖨️', en: 'make a copy', zh: '影印', ex: 'Where can I make a copy?', exZh: '哪裡可以影印？' },
      { icon: '🙋', en: 'cashier', zh: '店員、收銀員', ex: 'The cashier gave me my change.', exZh: '店員把零錢找給我。' },
      { icon: '🍱', en: 'microwave', zh: '微波爐、微波', ex: 'Can you microwave this for me?', exZh: '可以幫我微波這個嗎？' },
    ],
    sentences: [
      { en: 'Would you like it heated up?', zh: '要幫你加熱嗎？', note: '店員最常問' },
      { en: 'Do you need a bag?', zh: '需要袋子嗎？' },
      { en: "That's all, thanks.", zh: '這樣就好，謝謝。' },
      { en: 'How would you like to pay?', zh: '你要怎麼付款？' },
      { en: 'Can I get a receipt, please?', zh: '可以給我收據嗎？' },
    ],
  },
  {
    id: 'taking-a-taxi',
    unit: 'life',
    title: '搭計程車',
    titleEn: 'Taking a Taxi',
    level: '入門',
    intro: '出國叫車從上車到下車，這些就夠用。',
    words: [
      { icon: '🚕', en: 'taxi stand', zh: '計程車招呼站', ex: "Where's the nearest taxi stand?", exZh: '最近的計程車招呼站在哪？' },
      { icon: '📍', en: 'address', zh: '地址', ex: 'Could you take me to this address?', exZh: '可以載我到這個地址嗎？' },
      { icon: '🧭', en: 'route', zh: '路線', ex: 'Please take the fastest route.', exZh: '請走最快的路線。' },
      { icon: '⏱️', en: 'meter', zh: '跳表', ex: 'Could you turn on the meter?', exZh: '可以跳表嗎？' },
      { icon: '🛑', en: 'pull over', zh: '靠邊停', ex: 'Can you pull over here?', exZh: '可以在這裡靠邊停嗎？' },
      { icon: '👋', en: 'drop off', zh: '讓…下車', ex: 'You can drop me off at the corner.', exZh: '在轉角讓我下車就好。' },
      { icon: '🧳', en: 'trunk', zh: '後車廂', ex: 'Could you open the trunk?', exZh: '可以開一下後車廂嗎？' },
      { icon: '💵', en: 'change', zh: '零錢、找的錢', ex: 'Keep the change.', exZh: '不用找了。' },
    ],
    sentences: [
      { en: 'Could you take me to this address?', zh: '可以載我到這個地址嗎？' },
      { en: 'How long will it take to get there?', zh: '到那裡要多久？' },
      { en: 'Could you turn up the AC?', zh: '冷氣可以開強一點嗎？' },
      { en: 'Can I pay by card?', zh: '可以刷卡嗎？' },
      { en: 'Keep the change.', zh: '不用找了。', note: '給小費時說' },
    ],
  },
  {
    id: 'night-market',
    unit: 'life',
    title: '逛夜市',
    titleEn: 'Night Market',
    level: '入門',
    intro: '帶外國朋友逛夜市，點小吃、問價錢、說甜度冰塊都用得到。',
    words: [
      { icon: '🏮', en: 'food stall', zh: '小吃攤', ex: 'There are so many food stalls here!', exZh: '這裡好多小吃攤！' },
      { icon: '🧋', en: 'bubble tea', zh: '珍珠奶茶', ex: "Let's get some bubble tea.", exZh: '我們去買珍奶吧。' },
      { icon: '🍗', en: 'fried chicken', zh: '炸雞、雞排', ex: 'This fried chicken is huge!', exZh: '這塊雞排好大！' },
      { icon: '🍳', en: 'oyster omelet', zh: '蚵仔煎', ex: 'Have you tried oyster omelet?', exZh: '你吃過蚵仔煎嗎？' },
      { icon: '🍲', en: 'stinky tofu', zh: '臭豆腐', ex: 'Stinky tofu smells strong but tastes great.', exZh: '臭豆腐聞起來很臭，吃起來很香。' },
      { icon: '🍢', en: 'skewers', zh: '串燒', ex: "I'll take three skewers.", exZh: '我要三串。' },
      { icon: '🎯', en: 'carnival game', zh: '夜市遊戲', ex: "Let's play a carnival game!", exZh: '我們來玩夜市遊戲！' },
      { icon: '💵', en: 'cash only', zh: '只收現金', ex: 'Sorry, cash only.', exZh: '抱歉，只收現金。' },
      { icon: '🥡', en: 'to go', zh: '外帶', ex: 'Can I get this to go?', exZh: '這個可以外帶嗎？' },
      { icon: '👥', en: 'crowded', zh: '人很多、擁擠', ex: "It's so crowded tonight.", exZh: '今晚人好多。' },
    ],
    sentences: [
      { en: 'For here or to go?', zh: '內用還是外帶？', note: '老闆常問' },
      { en: 'How much is this?', zh: '這個多少錢？' },
      { en: 'Half sugar, less ice, please.', zh: '半糖少冰，謝謝。' },
      { en: 'Is it spicy?', zh: '這會辣嗎？' },
      { en: 'Can I try one?', zh: '可以試吃一個嗎？' },
    ],
  },
  {
    id: 'breakfast-shop',
    unit: 'life',
    title: '早餐店',
    titleEn: 'Breakfast Shop',
    level: '入門',
    intro: '蛋餅、蘿蔔糕、大冰奶，台灣早餐店的英文一次學會。',
    words: [
      { icon: '🏪', en: 'breakfast shop', zh: '早餐店', ex: "There's a breakfast shop on every corner.", exZh: '每個街角都有一家早餐店。' },
      { icon: '🥞', en: 'egg pancake', zh: '蛋餅', ex: "I'll have an egg pancake with cheese.", exZh: '我要一份起司蛋餅。' },
      { icon: '🥪', en: 'sandwich', zh: '三明治', ex: 'Can I get a ham sandwich?', exZh: '可以給我一份火腿三明治嗎？' },
      { icon: '🍘', en: 'radish cake', zh: '蘿蔔糕', ex: 'Fried radish cake, please.', exZh: '我要煎蘿蔔糕，謝謝。' },
      { icon: '🥛', en: 'soy milk', zh: '豆漿', ex: 'A large soy milk, please.', exZh: '一杯大杯豆漿，謝謝。' },
      { icon: '🧋', en: 'milk tea', zh: '奶茶', ex: 'Iced milk tea, no sugar.', exZh: '冰奶茶，無糖。' },
      { icon: '🥔', en: 'hash brown', zh: '薯餅', ex: 'Can I add a hash brown?', exZh: '可以加一個薯餅嗎？' },
      { icon: '🍞', en: 'toast', zh: '吐司', ex: 'Peanut butter toast, please.', exZh: '花生吐司，謝謝。' },
      { icon: '🔢', en: 'order number', zh: '號碼牌', ex: 'Your order number is 25.', exZh: '你的號碼是 25 號。' },
    ],
    sentences: [
      { en: 'What would you like?', zh: '你要點什麼？', note: '老闆常問' },
      { en: "I'll have an egg pancake and a soy milk.", zh: '我要一份蛋餅和一杯豆漿。' },
      { en: 'Can I get it to go?', zh: '可以外帶嗎？' },
      { en: 'How long will it take?', zh: '要等多久？' },
      { en: 'Can I pay with my EasyCard?', zh: '可以用悠遊卡付嗎？' },
    ],
  },
  {
    id: 'taking-the-mrt',
    unit: 'life',
    title: '搭捷運',
    titleEn: 'Taking the MRT',
    level: '入門',
    intro: '儲值、轉乘、找出口，帶外國朋友搭捷運不卡關。',
    words: [
      { icon: '🚇', en: 'MRT station', zh: '捷運站', ex: "Where's the nearest MRT station?", exZh: '最近的捷運站在哪？' },
      { icon: '💳', en: 'EasyCard', zh: '悠遊卡', ex: 'You can use your EasyCard on the bus too.', exZh: '悠遊卡也可以搭公車。' },
      { icon: '➕', en: 'top up', zh: '儲值', ex: 'I need to top up my card.', exZh: '我需要儲值。' },
      { icon: '🚉', en: 'platform', zh: '月台', ex: 'Which platform is it?', exZh: '在哪個月台？' },
      { icon: '🔁', en: 'transfer', zh: '轉乘、轉車', ex: 'Transfer at Zhongxiao Fuxing.', exZh: '在忠孝復興轉車。' },
      { icon: '🚪', en: 'exit', zh: '出口', ex: 'Take Exit 2.', exZh: '走 2 號出口。' },
      { icon: '💺', en: 'priority seat', zh: '博愛座', ex: 'Please offer the priority seat to people in need.', exZh: '請把博愛座讓給需要的人。' },
      { icon: '🌙', en: 'last train', zh: '末班車', ex: 'What time is the last train?', exZh: '末班車是幾點？' },
    ],
    sentences: [
      { en: 'Does this train go to Taipei 101?', zh: '這班車有到台北 101 嗎？' },
      { en: 'How many stops is it?', zh: '要坐幾站？' },
      { en: 'Where should I transfer?', zh: '我要在哪裡轉車？' },
      { en: 'Which exit should I take?', zh: '我要走哪個出口？' },
      { en: 'Excuse me, coming through.', zh: '不好意思，借過。', note: '很實用' },
    ],
  },
  {
    id: 'leaving-work',
    unit: 'phrases',
    title: '「我先走了」',
    titleEn: "I'm heading out",
    level: '入門',
    intro: '下班、聚會先離開，不要再說 I go first. 了。',
    words: [
      { icon: '🚪', en: 'head out', zh: '出發、離開', ex: "I'm heading out.", exZh: '我要走了。' },
      { icon: '⌛', en: "I've got to go", zh: '我得走了', ex: "Sorry, I've got to go.", exZh: '抱歉，我得走了。' },
      { icon: '🌙', en: 'call it a day', zh: '今天收工', ex: "Let's call it a day.", exZh: '今天就到這裡吧。' },
      { icon: '👋', en: 'see you tomorrow', zh: '明天見', ex: 'See you tomorrow!', exZh: '明天見！' },
      { icon: '😊', en: 'take care', zh: '保重、慢走', ex: 'Take care!', exZh: '保重喔！' },
      { icon: '🏃', en: "I'm off", zh: '我走囉', ex: "Okay, I'm off. Bye!", exZh: '好，我走囉，掰！' },
    ],
    sentences: [
      { en: "I'm heading out.", zh: '我要走了。', note: '最常用' },
      { en: "I'm calling it a day.", zh: '我今天先收工了。', note: '下班' },
      { en: "Sorry, I've got to go.", zh: '抱歉，我得先走了。' },
      { en: 'See you tomorrow!', zh: '明天見！' },
    ],
  },
];

// 每日圖卡：專案的 scripts/sync_site.py 會把發過的圖卡 JSON 放進 src/data/daily/、圖放進 public/daily/
type Card = Record<string, any>;
const cards = Object.values(import.meta.glob<Card>('./daily/*.json', { eager: true, import: 'default' }));
const short = (t: string) => t.length <= 22;
function fromCard(c: Card): Lesson | null {
  const base = { id: `daily-${c.id}`, unit: 'daily', level: '入門' as const, image: `/daily/${c.id}.png`, date: c.id.slice(0, 10),
    title: (c.title || '').replace(/[「」]/g, ''), titleEn: c.title_en || '', intro: c.subtitle || '' };
  let words: Word[] = [], sentences: Sentence[] = [];
  if (c.type === 'vocab') words = c.items.map((i: Card) => ({ icon: i.icon, en: i.en, zh: i.zh }));
  if (c.type === 'scene') words = c.labels.map((i: Card) => ({ icon: '🔎', en: i.en, zh: i.zh }));
  if (c.type === 'howto') { words = c.items.map((i: Card) => ({ icon: '💬', en: i.en, zh: i.zh })); sentences = c.items.map((i: Card) => ({ en: i.en, zh: i.zh, note: i.note })); }
  if (c.type === 'sentences') { sentences = c.items; words = c.items.filter((i: Card) => short(i.en)).map((i: Card) => ({ icon: '💬', en: i.en, zh: i.zh })); }
  if (c.type === 'compare') { words = c.sides.flatMap((s: Card) => s.examples.map((x: Card) => ({ icon: s.word === c.sides[0].word ? '👉' : '👈', en: x.en, zh: x.zh }))); base.titleEn = c.subtitle || ''; }
  if (c.tip?.en) sentences.push({ en: c.tip.en, zh: c.tip.zh, note: c.tip.label });
  if (words.length < 4) return null;
  return { ...base, words, sentences };
}
export const dailyLessons = cards.map(fromCard).filter((l): l is Lesson => !!l).sort((a, b) => (b.date! > a.date! ? 1 : -1));
export const allLessons = [...lessons, ...dailyLessons];
