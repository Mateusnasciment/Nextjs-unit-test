<h3 align="center">
   Unit tests are very useful to ensure that your components continue to work when performing maintenance in the future. </br></br></br>
</h3>


## Getting Started

First, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


to define jest settings we will use some default configuration files that can be created with the command
```
touch jest.config.js .babelrc
```
in the root folder of your project and we will add in the
package.json

```
jest.config.js
 the jest.config.js file controls the settings and standards that jest will follow within the project!
 ```

babelrc
babel informs the values ​​in the next folder

package.json
 In the package we will add

```
 "test": "jest --watch",
    "coverage": "jest --coverage"
```
jest = test file preview
coverage = measure test coverage of individual files
 

 starting the TEST
 First create a file called
 Header.test.js inside the folder
 components and then create a Header.js file in the same folder!
 using the command
 ```
 touch components/Header.js
 components/Header.test.js
 ```
 in the terminal to create these files
 ```
 import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

it('should render Header', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Header')).toBeInTheDocument();
});

```
and in the Header.js file
```
import React from 'react';

export default function Header() {
    return <p>Header</p>;
}
```
