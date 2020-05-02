React-компоненты, предоставляющие базовые элементы управления для веб-интерфейса.

https://git.hostco.ru/dps/commons/ui-controls

## Использование в проекте

1. Добавить в package.json импорт библиотеки из GIT. Для импорта необходимо иметь доступ к репозиторию и подключение по SSH.

  ```json
    {
      "devDependencies": {
        "ui-controls": "git+ssh://git@git.hostco.ru:dps/commons/ui-controls#1.0.19",
      }
    }
  ```

2. Установить библиотеку:

  ```shell
    npm-install
  ```

3. Импортировать необходимые компоненты:

  ```jsx static
    import { Button } from 'ui-controls';

    const YourComponent = ({ handleClick, text }) => (
      <Button onClick={handleClick}>
        {text}
      </Button>
    );
  ```

4. (Опционально) Импортировать стандартный набор стилей для компонентов. Для упрощения процесса кастомизации стандартных стилей, рекомендуется импортировать стили по умолчанию в качестве самого первого модуля на веб-странице вашего проекта. Это может быть файл index.js, в котором выполняется рендеринг корневого компонента React.

  ```jsx static
    import 'ui-controls/lib/css/styles.css';
  ```

5. (Опционально) В случае, если в вашем проекте не используется оптимизация импортируемых модулей, вы можете захотеть импортировать компоненты из библиотеки изолированно от остальных. Изолированный импорт возможен в common-js формате:

  ```jsx static
    import InputWithLabel from 'ui-controls/lib/cjs/input-with-label';
  ```

  Либо в формате ECMAscript:

  ```jsx static
    import InputWithLabel from 'ui-controls/lib/es/input-with-label';
  ```