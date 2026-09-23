# Перестройка блога под профили клиентов

> **Статус: выполнено 23.09.2026.** Все 11 пунктов сделаны, результат отличается от плана
> в двух местах: адреса новых статей выбрала модель (`turn-any-room-into-meeting-room-for-a-day`
> и `av-for-venues-not-built-for-presentations`), а `av-set-up-meaning` осталась отдельной
> статьёй про термин в сметах. Итог: 88 статей → 32, 59 перенаправлений (301), в sitemap
> 40 адресов вместо 107. Ход работ — в `CHANGELOG.md`.


Дата: 2026-09-21. Основание: раздел «Who we serve» в `_agents/domain-expertise.md` — полный сервис с техником, до ~100 человек, AV туда, где его нет или не хватает.

## Итог

- Статей сейчас: 88. После перестройки: 32 — 19 переписанных или исправленных, 10 новостей без изменений, 2 новые статьи, 1 статья с новым адресом.
- Перенаправлений 301: 59. Ни один адрес не пропадает: каждый ведёт на статью с тем же или ближайшим намерением.
- Во всех оставшихся статьях убираются ложные обещания: same-day/next-day, самовывоз, LED/свет/DJ, сценарии крупнее ~100 человек.

## Как это делается

1. Две новые статьи пишет seo-writer через `from-text` по брифу ниже. Они проходят обычную проверку черновика, получают обложку и попадают в `published_pages.json`.
2. Хабы и остальные оставшиеся статьи правлю в `public/blog` в ветке `dev`: переписываю по брифу, переношу полезное из поглощаемых статей, убираю ложные обещания.
3. Перенаправления прописываю в `next.config.ts` (`redirects()`, `permanent: true`). Markdown и обложки поглощённых статей удаляю, sitemap пересоберётся сам.
4. Запросы поглощённых статей остаются в `published_pages.json` и добавляются в exclusions, чтобы агент не написал их заново.
5. Порядок: сначала две новые статьи (их адреса — цели перенаправлений), потом хабы, потом перенаправления одним коммитом.

## Новые статьи

### `turn-any-room-into-meeting-room-for-a-day`

Как превратить обычный офис или помещение в переговорную на день: что привезти, как развернуть, техник на всё событие.

Поглощает 22: `av-setup-for-conference-room-dayton`, `beavercreek-oh-meeting-space-av-equipment`, `boardroom-rental-trophy-club`, `conference-room-av-fort-worth`, `conference-room-solutions-pittsburgh`, `conference-space-trophy-club-tx`, `corporate-meeting-space-trophy-club`, `led-video-wall-setups-conference-rooms-boardrooms`, `meeting-room-av-equipment-levis-quebec`, `meeting-room-technology-fort-worth`, `meeting-rooms-av-equipment-burnaby`, `meeting-rooms-av-equipment-downtown-pittsburgh`, `meeting-rooms-av-equipment-emory-area-atlanta`, `meeting-rooms-av-equipment-trophy-club-texas`, `meeting-rooms-with-av-equipment-calgary-alberta`, `meeting-space-av-equipment-beavercreek-ohio`, `meeting-space-av-equipment-grand-prairie-tx`, `rent-conference-room-av-equipment-tech-support`, `rent-conference-room-trophy-club`, `shared-office-space-trophy-club`, `short-term-office-lease-trophy-club`, `small-meeting-room-trophy-club`

### `offsite-event-av-non-traditional-venues-portland`

AV для выездного мероприятия на нестандартной площадке: ресторан, номер отеля у аэропорта, ложа стадиона, винодельня.

Поглощает 10: `conference-rooms-near-pdx-airport`, `corporate-events-at-hgv-stadium-portland`, `dfw-airport-meeting-space`, `easyas-hgv-stadium-meeting-rooms-capacity`, `event-room-near-fort-worth-airport`, `event-rooms-with-av-equipment-conway-ar`, `event-venues-with-av-equipment-mount-kisco`, `meeting-rooms-av-equipment-near-fort-worth-airport`, `meeting-space-av-equipment-fallsview-tourist-district`, `restaurants-with-private-rooms-and-av-equipment`

## Остающиеся статьи

| Статья | Показы* | Действие | Поглощает | Исправить |
|---|---|---|---|---|
| `av-quotes-portland-event-rental` | 8 | **Хаб.** Хаб «как запросить и сравнить смету». | `how-to-request-event-av-quote` | убрать same-day/next-day |
| `av-setup-for-events` | 38 | **Хаб.** Общий гайд по AV-настройке; взять лучшее из `av-configuration-for-events` — у неё больше всего показов в кластере. | `audio-visual-setup-for-events`, `av-configuration-for-events` | убрать same-day/next-day |
| `av-setup-portland-event-rental` | 8 | **Хаб.** Сервисная страница «настройка AV в Портленде под ключ». | `audio-video-setup-portland-event-rental` | убрать same-day/next-day |
| `conference-av-rental-portland` | 0 | **Хаб.** Небольшие конференции и семинары до ~100 участников, гибридный формат. | `reliable-audio-visual-equipment-rentals-conferences` | убрать same-day/next-day |
| `conference-center-audio-visual-equipment` | 60 | **Хаб.** Хаб «площадка оборудована частично»: что есть у площадки, что довезти, техник на всё событие. Отдельно — проверить у площадки эксклюзивного AV-подрядчика и сборы за стороннего поставщика. | `conference-suites-equipment`, `conference-venue-with-av-access-portland`, `corporate-event-space-with-av-equipment`, `meeting-venue-with-av-access-portland`, `pro-audio-equipment-suppliers-hotel-event-spaces`, `pro-audio-vendors-hotel-resort-av-systems` | убрать same-day/next-day |
| `how-to-estimate-av-equipment-needs-corporate-events` | 13 | **Хаб.** Хаб «что нужно для встречи или мероприятия до 100 человек». | `audiovisual-equipment-for-meetings` | убрать same-day/next-day, масштаб до ~100 |
| `presentation-rental-portland` | 25 | **Хаб.** Хаб по оборудованию для презентаций: проектор, экран, микрофон, кликер, техник. | `hire-presentation-equipment-portland`, `presentation-rentals-portland` | убрать same-day/next-day |
| `projector-rental-portland` | 13 | **Хаб.** Хаб по проекторам: проектор и экран под ключ с техником. Убрать сценарии «забрать и подключить самому» и крупные залы. | `large-venue-projector-rental-portland`, `projector-for-rent-portland`, `projector-rentals-portland`, `renting-a-projector-portland`, `renting-projectors-portland` | убрать same-day/next-day |
| `what-are-av-costs-event-rental` | 0 | **Хаб.** Хаб по стоимости и бюджету. Цены не выдумывать — объяснять, из чего складываются: оборудование, доставка, монтаж, часы техника. | `audio-visual-company-budgeting`, `how-to-estimate-an-av-project` | убрать same-day/next-day, масштаб до ~100 |
| `what-does-av-stand-for-in-events` | 76 | **Хаб.** Справочный хаб с короткими разделами: аббревиатура, AV room, вход AV на проекторе, AV needs. | `av-acronym-what-it-means-for-events`, `av-needs-meaning`, `av-stands-for`, `what-does-av-mean-on-a-projector`, `what-does-av-room-stand-for` | убрать same-day/next-day |
| `av-equipment-rental-for-events` | 2 | Главная сервисная страница: полный сервис, техник на всё событие, до ~100 человек. | — | убрать same-day/next-day |
| `av-set-up-meaning` | 6 | Отдельное намерение «что входит в AV setup». Оставить, сослаться на `av-setup-for-events`. | — | — |
| `commercial-av-installation-near-me` | 8 | Точно ложится на модель: «когда аренда на событие выгоднее постоянной установки». Усилить этот угол. | — | убрать same-day/next-day, масштаб до ~100 |
| `corporate-event-equipment-rental-oregon-city` | 0 | Oregon City в радиусе 50 миль — оставить. | — | убрать same-day/next-day |
| `event-gear-rental-portland` | 1 | Брендовая страница; привести к «Who we serve». | — | убрать same-day/next-day |
| `guide-to-evaluating-av-equipment` | 29 | Оставить. | — | убрать same-day/next-day |
| `professional-av-setup-for-galas` | 57 | Переписать под небольшие гала и благотворительные ужины до ~100 гостей. | — | убрать same-day/next-day, масштаб до ~100, убрать LED/свет/DJ |
| `projection-equipment-presenting-guidelines` | 0 | Оставить. | — | — |
| `wireless-microphone-rental-conferences` | 0 | Оставить, привести к формату полного сервиса. | — | убрать same-day/next-day, масштаб до ~100 |

\* Показы в GSC за всё время (30.05–21.09.2026), сумма по запросам.

## Смена адреса

| Было | Станет | Исправить |
|---|---|---|
| `questions-to-ask-av-company-before-scottsdale-event` | `questions-to-ask-av-company-before-event` | убрать самовывоз |

## Новости компании — без изменений

`december-onsite-support-highlights`, `expanded-delivery-coverage`, `holiday-event-rush-preparation`, `new-wireless-microphone-kits`, `new-year-inventory-audit`, `projector-lamp-refresh-program`, `spring-event-season-prep`, `summer-bookings-open`, `support-for-hybrid-events`, `winter-meeting-trends-pnw`

## Все перенаправления

| Старый адрес | Показы* | Куда |
|---|---|---|
| `/blog/how-to-request-event-av-quote` | 0 | `/blog/av-quotes-portland-event-rental` |
| `/blog/audio-visual-setup-for-events` | 5 | `/blog/av-setup-for-events` |
| `/blog/av-configuration-for-events` | 57 | `/blog/av-setup-for-events` |
| `/blog/audio-video-setup-portland-event-rental` | 0 | `/blog/av-setup-portland-event-rental` |
| `/blog/reliable-audio-visual-equipment-rentals-conferences` | 27 | `/blog/conference-av-rental-portland` |
| `/blog/conference-suites-equipment` | 9 | `/blog/conference-center-audio-visual-equipment` |
| `/blog/conference-venue-with-av-access-portland` | 0 | `/blog/conference-center-audio-visual-equipment` |
| `/blog/corporate-event-space-with-av-equipment` | 5 | `/blog/conference-center-audio-visual-equipment` |
| `/blog/meeting-venue-with-av-access-portland` | 0 | `/blog/conference-center-audio-visual-equipment` |
| `/blog/pro-audio-equipment-suppliers-hotel-event-spaces` | 27 | `/blog/conference-center-audio-visual-equipment` |
| `/blog/pro-audio-vendors-hotel-resort-av-systems` | 8 | `/blog/conference-center-audio-visual-equipment` |
| `/blog/audiovisual-equipment-for-meetings` | 1 | `/blog/how-to-estimate-av-equipment-needs-corporate-events` |
| `/blog/conference-rooms-near-pdx-airport` | 0 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/corporate-events-at-hgv-stadium-portland` | 0 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/dfw-airport-meeting-space` | 82 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/easyas-hgv-stadium-meeting-rooms-capacity` | 86 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/event-room-near-fort-worth-airport` | 0 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/event-rooms-with-av-equipment-conway-ar` | 0 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/event-venues-with-av-equipment-mount-kisco` | 21 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/meeting-rooms-av-equipment-near-fort-worth-airport` | 104 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/meeting-space-av-equipment-fallsview-tourist-district` | 59 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/restaurants-with-private-rooms-and-av-equipment` | 3 | `/blog/offsite-event-av-non-traditional-venues-portland` |
| `/blog/hire-presentation-equipment-portland` | 9 | `/blog/presentation-rental-portland` |
| `/blog/presentation-rentals-portland` | 27 | `/blog/presentation-rental-portland` |
| `/blog/large-venue-projector-rental-portland` | 0 | `/blog/projector-rental-portland` |
| `/blog/projector-for-rent-portland` | 13 | `/blog/projector-rental-portland` |
| `/blog/projector-rentals-portland` | 0 | `/blog/projector-rental-portland` |
| `/blog/renting-a-projector-portland` | 7 | `/blog/projector-rental-portland` |
| `/blog/renting-projectors-portland` | 0 | `/blog/projector-rental-portland` |
| `/blog/questions-to-ask-av-company-before-scottsdale-event` | 0 | `/blog/questions-to-ask-av-company-before-event` |
| `/blog/av-setup-for-conference-room-dayton` | 45 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/beavercreek-oh-meeting-space-av-equipment` | 44 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/boardroom-rental-trophy-club` | 9 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/conference-room-av-fort-worth` | 9 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/conference-room-solutions-pittsburgh` | 5 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/conference-space-trophy-club-tx` | 48 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/corporate-meeting-space-trophy-club` | 60 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/led-video-wall-setups-conference-rooms-boardrooms` | 0 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/meeting-room-av-equipment-levis-quebec` | 42 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/meeting-room-technology-fort-worth` | 0 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/meeting-rooms-av-equipment-burnaby` | 61 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/meeting-rooms-av-equipment-downtown-pittsburgh` | 152 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/meeting-rooms-av-equipment-emory-area-atlanta` | 0 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/meeting-rooms-av-equipment-trophy-club-texas` | 153 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/meeting-rooms-with-av-equipment-calgary-alberta` | 61 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/meeting-space-av-equipment-beavercreek-ohio` | 27 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/meeting-space-av-equipment-grand-prairie-tx` | 10 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/rent-conference-room-av-equipment-tech-support` | 0 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/rent-conference-room-trophy-club` | 53 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/shared-office-space-trophy-club` | 58 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/short-term-office-lease-trophy-club` | 0 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/small-meeting-room-trophy-club` | 29 | `/blog/turn-any-room-into-meeting-room-for-a-day` |
| `/blog/audio-visual-company-budgeting` | 2 | `/blog/what-are-av-costs-event-rental` |
| `/blog/how-to-estimate-an-av-project` | 18 | `/blog/what-are-av-costs-event-rental` |
| `/blog/av-acronym-what-it-means-for-events` | 0 | `/blog/what-does-av-stand-for-in-events` |
| `/blog/av-needs-meaning` | 0 | `/blog/what-does-av-stand-for-in-events` |
| `/blog/av-stands-for` | 0 | `/blog/what-does-av-stand-for-in-events` |
| `/blog/what-does-av-mean-on-a-projector` | 0 | `/blog/what-does-av-stand-for-in-events` |
| `/blog/what-does-av-room-stand-for` | 0 | `/blog/what-does-av-stand-for-in-events` |

## Пробел в контенте

Для половины профилей из «Who we serve» статей нет совсем: свадьбы до ~100 гостей, частные праздники и кинопоказы во дворе, религиозные общины, школьные мероприятия, pop-up события, малый бизнес на своей площадке. Это отдельная задача после перестройки.


## Порядок выполнения пункта (сохранён на случай новой переработки)

1. **Контент.** Переписать статьи пункта в `public/blog` в ветке `dev`: перенести в хаб
   полезное из поглощаемых статей; убрать same-day/next-day, самовывоз, LED/свет/DJ,
   сценарии крупнее ~100 человек, политику; привести к полному сервису с техником.
   Поглощённые статьи удалить вместе с обложками в `public/blog/images/<slug>/`.
2. **Перенаправления.** Для каждой поглощённой статьи — правило в `next.config.ts`
   (`redirects()`, `permanent: true`), без цепочек.
3. **Состояние агентов на кластере.**
   - Запросы поглощённых статей оставить в `published_pages.json` и добавить в `exclusions.txt`.
   - **Обязательно** удалить поглощённые статьи и обложки из накопительной папки
     `/srv/swarm/eventgearpdx/shared/blog/{content,images}`: deploy-agent копирует оттуда всё
     при каждом запуске и вернёт удалённое обратно в `main`.
   - Новая статья попадает в `main` через deploy-agent не чаще раза в сутки (ветка
     `content/<дата>`). Если он уже отработал, забрать статью и обложку из `shared/blog`
     в `dev` вручную, иначе перенаправления будут вести на несуществующую страницу.
4. **Проверка.** Сборка проходит; хабы отдают 200, старые адреса — 308 на хаб; ложных
   обещаний не осталось; внутренние ссылки ведут на существующие статьи.
5. **CHANGELOG.md** — запись о пункте.
6. **Коммит и пуш в `dev`.** Слияние в `main` делает владелец через GitHub.
7. **Очередь GSC.** Полные адреса созданных и переписанных страниц — в раздел
   «Запросить переиндексацию в GSC» в `BACKLOG.md`. Запрос делает владелец, по мере квоты
   (около 10–12 адресов в сутки).
