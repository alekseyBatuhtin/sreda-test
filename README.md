# Start app

```bash
git clone git@github.com:alekseyBatuhtin/sreda-test.git
cd sreda-test
npm install
npm run start
```
Открыть http://localhost:3000/ в браузере

# Roadmap

## Common tasks

1. (Done) Реализовать вывод репозиториев (#task1). Необходимо запросить и отрендерить список репозиториев созданных за последний месяц на языке JavaScript, отсортированных по популярности (звездам).
2. (Done) Добавить фильтрацию по типу лицензии проекта (#task2).
3. (Done) Добавить строку поиска по названию проектов из списка (#task3).

## Additional tasks

4. (Done) Покрыть код тестами (#task4). Первоначально бизнес-логику, потом UI.
5. (Done) Реализовать серверную пагинацию (#task5).
6. (Done) Добавить индикатор загрузки данных (#task6).
7. (Done) Responsive до 320px (#task7).

## Bugfix, refactor
8. (Done) Добавить обработку ошибок
9. (Done) genMonthAgoDate, genSearchQuery вынести в utils
10. (Done)Слишком длинные названия репозиториев вываливаются из блока