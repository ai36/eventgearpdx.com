# Changelog

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/).
Автопубликации статей SEO-агентом (`content: auto-publish …`) сюда не вносятся.

## [Unreleased]

### Fixed

- Canonical и `og:url` на страницах пагинации блога указывали на несуществующий
  `/blog/<n>` (ответ 500) вместо `/blog/page/<n>`.
