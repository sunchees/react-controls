# react-controls

Basic React controls and utility components

## Usage

1. Add git tag link as dependency in your package.json

```json
{
  "devDependencies": {
    "react-controls": "git+https://git@github.com:sunchees/react-controls.git#1.1.41"
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

## Development

1. Clone the repository:

```
  git clone git@github.com:sunchees/react-controls.git
  git checkout develop
  cd react-controls
```

2. Install dependencies:

```
  npm install
```

3. Make changes in existing components or add new ones in /src/components directory.
4. When adding new components:
   - Add new component import (and export) in /src/index.d.ts and /src/index.js modules.
5. Update package version in package.json
6. Build new package version:

```
  npm run build
```

7. Push changes to git:

```
  git commit
  git push
```

8. Create new git tag:

```
  git tag 1.1.41
  git push origin 1.1.41
```
