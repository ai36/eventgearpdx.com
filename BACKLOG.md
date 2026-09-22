# Backlog

## Переработка контента блога

Основание: раздел «Who we serve» в `_agents/domain-expertise.md` и раскладка
[docs/content-restructure-plan.md](docs/content-restructure-plan.md).
Пункты независимы: каждый затрагивает только свои статьи и свои перенаправления.
Выполняется по одному пункту за раз, по запросу «перерабатываем пункт N».

### Порядок выполнения любого пункта

1. **Контент.** Переписать статьи пункта в `public/blog` в ветке `dev`: перенести в хаб
   полезное из поглощаемых статей; убрать same-day/next-day, самовывоз, LED/свет/DJ,
   сценарии крупнее ~100 человек, политику; привести к полному сервису с техником.
   Поглощённые статьи удалить вместе с обложками в `public/blog/images/<slug>/`.
2. **Перенаправления.** Для каждой поглощённой статьи добавить в `next.config.ts`
   (`redirects()`, `permanent: true`) правило `/blog/<старый slug>` → `/blog/<хаб>`.
   Цепочек перенаправлений не допускать.
3. **Состояние агентов на кластере.** Запросы поглощённых статей оставить в
   `published_pages.json` и добавить в `exclusions.txt`, чтобы агент не написал их заново.
4. **Проверка.** `npm run build` проходит; локально хабы отдают 200, старые адреса —
   перенаправление на хаб; в статьях пункта не осталось ложных обещаний;
   внутренние ссылки на удалённые статьи заменены ссылками на хабы.
5. **CHANGELOG.md** — запись о пункте.
6. **Коммит и пуш в `dev`.** Слияние в `main` владелец делает сам через GitHub.
7. **GSC — после слияния в `main` и деплоя сайта** (делает владелец в интерфейсе
   Search Console, список адресов даю я):
   - Проверка URL → «Запросить индексирование» для каждой новой и переписанной статьи
     пункта (лимит около 10 запросов в день);
   - Файлы Sitemap → повторно отправить `https://eventgearpdx.com/sitemap.xml`;
   - для старых адресов удаление не запрашивать: Google сам увидит перенаправления;
   - через 1–2 недели в отчёте «Индексирование страниц» старые адреса должны перейти
     в «Страница с переадресацией», а хаб — в проиндексированные.

Пункт закрывается, когда выполнен шаг 7.

### 1. Новая статья «Обычный офис → переговорная на день»

- [ ] Новая статья `turn-office-into-meeting-room-portland` пишется seo-writer через
  `from-text` по брифу и проходит обычную проверку черновика. После автопубликации
  deploy-agent сам запросит её индексирование; перед шагами 2–6 подтянуть `main` в `dev`.
- Перенаправить на неё 22 статьи: `meeting-rooms-av-equipment-trophy-club-texas`,
  `conference-space-trophy-club-tx`, `corporate-meeting-space-trophy-club`,
  `rent-conference-room-trophy-club`, `boardroom-rental-trophy-club`,
  `small-meeting-room-trophy-club`, `shared-office-space-trophy-club`,
  `short-term-office-lease-trophy-club`, `meeting-rooms-av-equipment-downtown-pittsburgh`,
  `conference-room-solutions-pittsburgh`, `meeting-rooms-with-av-equipment-calgary-alberta`,
  `meeting-rooms-av-equipment-burnaby`, `meeting-room-av-equipment-levis-quebec`,
  `meeting-space-av-equipment-beavercreek-ohio`, `beavercreek-oh-meeting-space-av-equipment`,
  `meeting-space-av-equipment-grand-prairie-tx`, `meeting-rooms-av-equipment-emory-area-atlanta`,
  `rent-conference-room-av-equipment-tech-support`, `meeting-room-technology-fort-worth`,
  `conference-room-av-fort-worth`, `av-setup-for-conference-room-dayton`,
  `led-video-wall-setups-conference-rooms-boardrooms`.
- GSC: `/blog/turn-office-into-meeting-room-portland`.

### 2. Новая статья «AV для выездного мероприятия на нестандартной площадке»

- [ ] Новая статья `offsite-event-av-non-traditional-venues-portland` (ресторан, номер отеля
  у аэропорта, ложа стадиона, винодельня) — так же, как в пункте 1, через `from-text`.
- Перенаправить на неё 10 статей: `restaurants-with-private-rooms-and-av-equipment`,
  `conference-rooms-near-pdx-airport`, `dfw-airport-meeting-space`,
  `event-room-near-fort-worth-airport`, `meeting-rooms-av-equipment-near-fort-worth-airport`,
  `corporate-events-at-hgv-stadium-portland`, `easyas-hgv-stadium-meeting-rooms-capacity`,
  `event-rooms-with-av-equipment-conway-ar`, `event-venues-with-av-equipment-mount-kisco`,
  `meeting-space-av-equipment-fallsview-tourist-district`.
- GSC: `/blog/offsite-event-av-non-traditional-venues-portland`.

### 3. Частично оборудованные площадки

- [ ] Хаб `conference-center-audio-visual-equipment`: что есть у площадки, что довезти,
  техник на всё событие; проверить у площадки эксклюзивного AV-подрядчика и сборы
  за стороннего поставщика.
- Перенаправить на хаб 6 статей: `corporate-event-space-with-av-equipment`,
  `conference-venue-with-av-access-portland`, `meeting-venue-with-av-access-portland`,
  `conference-suites-equipment`, `pro-audio-vendors-hotel-resort-av-systems`,
  `pro-audio-equipment-suppliers-hotel-event-spaces`.
- GSC: `/blog/conference-center-audio-visual-equipment`.

### 4. Проекторы

- [ ] Хаб `projector-rental-portland`: проектор и экран под ключ с техником, без самовывоза
  и крупных залов.
- Перенаправить на хаб 5 статей: `projector-rentals-portland`, `projector-for-rent-portland`,
  `renting-a-projector-portland`, `renting-projectors-portland`,
  `large-venue-projector-rental-portland`.
- GSC: `/blog/projector-rental-portland`.

### 5. Оборудование для презентаций

- [ ] Хаб `presentation-rental-portland`: проектор, экран, микрофон, кликер, техник.
- Перенаправить на хаб 2 статьи: `presentation-rentals-portland`,
  `hire-presentation-equipment-portland`.
- GSC: `/blog/presentation-rental-portland`.

### 6. Настройка AV

- [ ] Хаб `av-setup-for-events` — общий гайд, взять лучшее из `av-configuration-for-events`.
  Перенаправить на него: `audio-visual-setup-for-events`, `av-configuration-for-events`.
- [ ] Хаб `av-setup-portland-event-rental` — сервисная страница «настройка AV в Портленде
  под ключ». Перенаправить на него: `audio-video-setup-portland-event-rental`.
- [ ] `av-set-up-meaning` — оставить, привести к модели, сослаться на `av-setup-for-events`.
- GSC: `/blog/av-setup-for-events`, `/blog/av-setup-portland-event-rental`,
  `/blog/av-set-up-meaning`.

### 7. Стоимость, сметы, расчёт оборудования

- [ ] Хаб `what-are-av-costs-event-rental` — из чего складывается цена, без выдуманных цифр.
  Перенаправить на него: `audio-visual-company-budgeting`, `how-to-estimate-an-av-project`.
- [ ] Хаб `av-quotes-portland-event-rental` — как запросить и сравнить смету.
  Перенаправить на него: `how-to-request-event-av-quote`.
- [ ] Хаб `how-to-estimate-av-equipment-needs-corporate-events` — что нужно для события
  до ~100 человек. Перенаправить на него: `audiovisual-equipment-for-meetings`.
- GSC: `/blog/what-are-av-costs-event-rental`, `/blog/av-quotes-portland-event-rental`,
  `/blog/how-to-estimate-av-equipment-needs-corporate-events`.

### 8. Что значит «AV»

- [ ] Хаб `what-does-av-stand-for-in-events` с короткими разделами: аббревиатура, AV room,
  вход AV на проекторе, AV needs.
- Перенаправить на хаб 5 статей: `av-stands-for`, `av-acronym-what-it-means-for-events`,
  `av-needs-meaning`, `what-does-av-room-stand-for`, `what-does-av-mean-on-a-projector`.
- GSC: `/blog/what-does-av-stand-for-in-events`.

### 9. Конференции и микрофоны

- [ ] Хаб `conference-av-rental-portland` — небольшие конференции и семинары до ~100
  участников, гибридный формат. Перенаправить на него:
  `reliable-audio-visual-equipment-rentals-conferences`.
- [ ] `wireless-microphone-rental-conferences` — оставить, убрать самовывоз и сценарии 200+.
- GSC: `/blog/conference-av-rental-portland`, `/blog/wireless-microphone-rental-conferences`.

### 10. Сервисные страницы

- [ ] `av-equipment-rental-for-events` — главная сервисная страница: полный сервис,
  техник на всё событие, до ~100 человек.
- [ ] `event-gear-rental-portland` — брендовая страница, привести к «Who we serve».
- [ ] `corporate-event-equipment-rental-oregon-city` — оставить, убрать ложные обещания.
- GSC: `/blog/av-equipment-rental-for-events`, `/blog/event-gear-rental-portland`,
  `/blog/corporate-event-equipment-rental-oregon-city`.

### 11. Отдельные гайды и смена адреса

- [ ] `professional-av-setup-for-galas` — переписать под небольшие гала и благотворительные
  ужины до ~100 гостей, убрать LED/свет.
- [ ] `commercial-av-installation-near-me` — усилить угол «когда аренда на событие выгоднее
  постоянной установки».
- [ ] `guide-to-evaluating-av-equipment`, `projection-equipment-presenting-guidelines` —
  убрать ложные обещания.
- [ ] `questions-to-ask-av-company-before-scottsdale-event` → новый адрес
  `questions-to-ask-av-company-before-event` с перенаправлением со старого; убрать самовывоз.
- GSC: `/blog/professional-av-setup-for-galas`, `/blog/commercial-av-installation-near-me`,
  `/blog/guide-to-evaluating-av-equipment`, `/blog/projection-equipment-presenting-guidelines`,
  `/blog/questions-to-ask-av-company-before-event`.

## Прочее

- [ ] **Закрыть пробел в контенте:** нет статей для свадеб до ~100 гостей, частных праздников,
  религиозных общин, школьных и pop-up мероприятий, малого бизнеса на своей площадке.
- [ ] **Падение видимости в Google.** По данным GSC за окно 7 дней показы упали с 626
  (222 запроса, 17–23.07.2026) до ~100–125 (~20 запросов, с середины августа), кликов ноль
  за всё время. Основную часть показов на пике давали статьи для «не наших» клиентов
  (переговорки с AV в других городах) — их перестраивают пункты 1–3.
  Ручных мер в Search Console нет (проверено владельцем 21.09.2026).
  Осталось: в отчёте «Индексирование страниц» проверить, не выпали ли статьи блога из индекса.
