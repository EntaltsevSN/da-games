export type BlogTag = 'игра' | 'сайт';

export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  tags: BlogTag[];
  paragraphs: string[];
  items?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'zapusk-sajta-i-bloga',
    date: '2026-10-01',
    title: 'Запустили сайт и блог обновлений',
    tags: ['сайт', 'игра'],
    paragraphs: [
      'У «Цифрового офиса» теперь есть лендинг и отдельная страница блога. Здесь будем рассказывать, что меняется в игре и на сайте.',
      'Играть можно прямо в браузере — без установки, в один клик.',
    ],
    items: [
      'Появилась главная страница с описанием игры',
      'Открыли блог: новые записи будут появляться сверху',
      'Запуск игры доступен с лендинга и из шапки сайта',
    ],
  },
];
