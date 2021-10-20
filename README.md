## Setting up Dev

Для быстрого страта необходимо склонировать репозиторий:

`git clone https://github.com/perlaert/test-task.git` &mdash;

Затем перейти в папку проекта: `cd test-task` &mdash;

Установить все зависимости: `npm install` &mdash;

Запустить в режиме разработки `npm start` &mdash;

Во вкладке браузера перейти по адресу http://localhost:3000.

## Deploying / Publishing:

- `npm run build` &mdash; создание оптимизированного продакшен билда
- `npm run pledeploy` &mdash; скрипт автоматически запускается перед деплоем и делает новый билд
- `npm run deploy` &mdash; деплой приложения на Netlify
