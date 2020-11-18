const KEYWORD_LIST = {
  家: 'home',
  住: 'home',
  幾歲: 'old',
  好早: 'sleep',
  想睡: 'sleep',
  生日: 'birthday',
  birthday: 'birthday',
  帥: 'handsome',
  你好師: 'handsome',
  難過: 'sad',
  哭哭: 'sad',
  祝你生日快樂: 'thanks',
  聰明: 'thanks',
  謙虛: 'thanks',
  禮貌: 'thanks',
  熱: 'hot',
  你好胖: 'fat',
  我好: 'laugh',
  ok: 'ok',
  好: 'ok',
};

const KEYWORD_KEYS = {
  home: [
    {
      type: 'location',
      title: 'Huei Home',
      address: '新北市三重區光明路84巷1號',
      latitude: 25.0569927,
      longitude: 121.4921821,
    },
  ],
  old: [
    {
      type: 'text',
      text: "今年 27 歲\nσ(o'ω'o)",
    },
  ],
  sleep: [
    {
      type: 'text',
      text: '豪愛睏',
    },
    {
      type: 'sticker',
      packageId: '2',
      stickerId: '523',
    },
  ],
  birthday: [
    {
      type: 'text',
      text: `我的生日跟炭治郎同一天喔
      ...φ(･ω･*)☆
    `,
    },
  ],
  handsome: [
    {
      type: 'text',
      text: `是你不嫌棄拉\n但還是送你一張照片 ψ(｀∇´)ψ`,
    },
    {
      type: 'image',
      originalContentUrl:
        'https://images.unsplash.com/photo-1604919912564-6480b79b1c11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
      previewImageUrl:
        'https://images.unsplash.com/photo-1604919912564-6480b79b1c11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    },
  ],
  sad: [
    {
      type: 'text',
      text: '哭哭',
    },
    {
      type: 'sticker',
      packageId: '2',
      stickerId: '525',
    },
  ],
  thanks: [
    {
      type: 'text',
      text: '謝謝 (*^o^*)',
    },
    {
      type: 'sticker',
      packageId: '1',
      stickerId: '5',
    },
  ],
  hot: [
    {
      type: 'text',
      text: '你傻拉，現在冬天欸 σ(oдolll)',
    },
  ],
  fat: [
    {
      type: 'text',
      text: '你才胖',
    },
    {
      type: 'sticker',
      packageId: '2',
      stickerId: '25',
    },
  ],
  laugh: [
    {
      type: 'text',
      text: '哈哈哈哈',
    },
    {
      type: 'sticker',
      packageId: '1',
      stickerId: '110',
    },
  ],
  ok: [
    {
      type: 'sticker',
      packageId: '2',
      stickerId: '179',
    },
  ],
};

module.exports = {
  KEYWORD_LIST,
  KEYWORD_KEYS,
};
