// 課程資料：每一課 = 一個生活情境。新增課程只要在這裡加一筆。
// 單字的 example 一定要是母語人士自然會說的句子；中文用台灣說法。

export interface Word { icon: string; en: string; zh: string; ex: string; exZh: string }
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
}

export const units = [
  { id: 'daily', title: '第一單元：日常生活', desc: '超商、搭車、吃飯，每天都會遇到的英文' },
  { id: 'phrases', title: '第二單元：這句英文怎麼說', desc: '「我先走了」「辛苦了」這類中文常說的話' },
];

export const lessons: Lesson[] = [
  {
    id: 'convenience-store',
    unit: 'daily',
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
    unit: 'daily',
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
