<h1 align="center">
Unit tests in Next with Jest
</h1><br>

<h3 align="center">
   Unit tests are very useful to ensure that your components continue to work when performing maintenance in the future. </br></br></br>
</h3>

Because of its framework integration, Next.js projects can create SSR and SSG — or static sites — for use with React. This increases the chances of successfully integrating Next.js into future web application development projects.

## Getting Started

start your project
I assume you already have a basic understanding of the subject and have Node.js and NPM or yarn installed on your machine.

First, let's start a standard Next project by typing the npx create-next-app command in the terminal, which will ask the following questions:

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

 ```
 the jest.config.js file controls the settings and standards that jest will follow within the project!

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
Save both files and in the terminal run the command npm run test, if everything went well you will have a screen like this: nextjs-jest-tested
