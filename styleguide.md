Basic React controls and utility components

https://github.com/sunchees/react-controls

## Usage

1. Add git tag link as dependency in your package.json

```json
{
  "devDependencies": {
    "react-controls": "git+https://git@github.com:sunchees/react-controls.git#1.1.40"
  }
}
```

2. Install dependency:

```
  npm-install
```

3. Use components in your project:

```jsx
import { Button } from "react-controls";

const YourComponent = ({ handleClick, text }) => (
  <Button onClick={handleClick}>{text}</Button>
);
```

4. (Optional) Import default component styles. To apply your custom styles over the default ones, import default styles before any other styles in your application.

```jsx
import "react-controls/lib/styles.css";
```
