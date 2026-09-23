# Backlog

## Запросить переиндексацию в GSC

Рабочая очередь. Сюда попадает каждая созданная или переписанная страница после
слияния в `main`. Владелец в Search Console открывает «Проверка URL» → «Запросить
индексирование», после чего строка удаляется отсюда.

Суточная квота — около 10–12 адресов на ресурс, поэтому очередь разбирается частями.
Для удалённых и перенаправленных страниц ничего запрашивать не нужно: Google сам
увидит 301. Повторная отправка `https://eventgearpdx.com/sitemap.xml` в разделе
«Файлы Sitemap» квотой не ограничена и полезна после каждого пункта.

- [ ] https://eventgearpdx.com/blog/av-setup-for-events — пункт 6, в `main` 23.09.2026
- [ ] https://eventgearpdx.com/blog/av-setup-portland-event-rental — пункт 6
- [ ] https://eventgearpdx.com/blog/av-set-up-meaning — пункт 6

Запрошено 23.09.2026: `conference-center-audio-visual-equipment` (пункт 3),
`projector-rental-portland` (пункт 4), `presentation-rental-portland` (пункт 5).

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
3. **Состояние агентов на кластере.**
   - Запросы поглощённых статей оставить в `published_pages.json` и добавить в
     `exclusions.txt`, чтобы агент не написал их заново.
   - **Обязательно** удалить поглощённые статьи и их обложки из накопительной папки
     `/srv/swarm/eventgearpdx/shared/blog/{content,images}`. Она накопительная:
     deploy-agent копирует из неё всё при каждом запуске, поэтому оставленный там
     файл вернёт удалённую статью обратно в `main`.
   - Новая статья попадает в `main` через deploy-agent, но он публикует не чаще
     раза в сутки (ветка `content/<дата>`). Если он сегодня уже отработал, забрать
     статью и обложку из `shared/blog` в `dev` вручную — иначе перенаправления
     будут вести на несуществующую страницу.
4. **Проверка.** `npm run build` проходит; локально хабы отдают 200, старые адреса —
   перенаправление на хаб; в статьях пункта не осталось ложных обещаний;
   внутренние ссылки на удалённые статьи заменены ссылками на хабы.
5. **CHANGELOG.md** — запись о пункте.
6. **Коммит и пуш в `dev`.** Слияние в `main` владелец делает сам через GitHub.
7. **Очередь GSC.** Полные адреса созданных и переписанных страниц пункта добавить
   в раздел «Запросить переиндексацию в GSC» в начале файла. Сам запрос делает
   владелец, по мере квоты.
8. **Удалить пункт из этого файла.** Выполненное живёт в `CHANGELOG.md`, здесь
   остаётся только незакрытая работа. Номера у пунктов не сдвигаются — они
   закреплены за темами, чтобы ссылка «пункт N» не меняла смысл.

Пункт закрывается после шага 6: дальше работа переезжает в очередь GSC,
а сам пункт удаляется. Через 1–2 недели после запроса в отчёте «Индексирование
страниц» старые адреса должны перейти в «Страница с переадресацией», а хабы —
в проиндексированные.

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
