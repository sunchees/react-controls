# react-controls
Базовые React-компоненты элементов управления.

## Использование в проекте

1. Добавить в package.json импорт библиотеки из GIT.
  ```json
    {
      "devDependencies": {
        "react-controls": "git+https://git@github.com:sunchees/react-controls.git#1.1.40",
      }
    }
  ```
2. Установить библиотеку:
  ```
    npm-install
  ```
3. Импортировать необходимые компоненты:
  ```jsx
    import { Button } from 'react-controls';

    const YourComponent = ({ handleClick, text }) => (
      <Button onClick={handleClick}>
        {text}
      </Button>
    );
  ```
4. (Опционально) Импортировать стандартный набор стилей для компонентов. Для упрощения процесса кастомизации стандартных стилей, рекомендуется импортировать стили по умолчанию в качестве самого первого модуля на веб-странице вашего проекта. Это может быть файл index.js, в котором выполняется рендеринг корневого компонента React.
  ```jsx
    import 'react-controls/lib/styles.css';
  ```

## Разработка

1. Скачать исходный код библиотеки:
  ```
    git clone git@github.com:sunchees/react-controls.git
    git checkout develop
    cd react-controls
  ```
2. Установить зависимости:
  ```
    npm install
  ```
3. Внести изменения в компоненты, или добавить новые (/src/components). При разработке рекомендуется придерживаться стиля разработки, примененного в остальных компонентах.
4. Для новых компонентов:
    - Импортировать новый компонент в модулях /src/index.d.ts и /src/index.js
    - Добавить ссылку на новый компонент в файле конфигурации rollup.config.js в блоке input, по аналогии с остальными компонентами
5. Поднял версию в package.json
6. Выполнить сборку библиотеки:
  ```
    npm run build
  ```
7. Запушить изменений в GIT:
  ```
    git commit
    git push
  ```
8. Создать в GIT-tag с новой версией:
  ```
    git tag 1.1.40
    git push origin 1.1.40
  ```

## Работа с документацией (style-guide)

1. Выполнить сборку документации:
  ```
    npm run doc:build
  ```
2. Запустить локальный сервер с документацией (с поддержкой hot-reload):
  ```
    npm run doc
  ```
3. (Опционально) Документацию можно предоставлять в качестве статичной страницы с помощь Nginx. Для этого необходимо настроить Nginx таким образом, чтобы он ссылался на файл /styleguide/index.html

Больше информации по работе со styleguideist: https://react-styleguidist.js.org/
