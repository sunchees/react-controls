React-компоненты, предоставляющие базовые элементы управления для веб-интерфейса.

https://github.com/sunchees/react-controls

## Использование в проекте

1. Добавить в package.json импорт библиотеки из GIT.

  ```json
    {
      "devDependencies": {
        "react-controls": "git+https://git@github.com:sunchees/react-controls.git#1.1.39",
      }
    }
  ```

2. Установить библиотеку:

  ```shell
    npm-install
  ```

3. Импортировать необходимые компоненты:

  ```jsx static
    import { Button } from 'react-controls';

    const YourComponent = ({ handleClick, text }) => (
      <Button onClick={handleClick}>
        {text}
      </Button>
    );
  ```

4. (Опционально) Импортировать стандартный набор стилей для компонентов. Для упрощения процесса кастомизации стандартных стилей, рекомендуется импортировать стили по умолчанию в качестве самого первого модуля на веб-странице вашего проекта. Это может быть файл index.js, в котором выполняется рендеринг корневого компонента React.

  ```jsx static
    import 'react-controls/lib/styles.css';
  ```