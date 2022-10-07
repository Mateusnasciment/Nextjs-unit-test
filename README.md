This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


para definirmos as configurações do jest uitlizaremos alguns arquivos de configuração padrão que podem ser criados com o comando
```
touch jest.config.js .babelrc
```
na pasta raiz do seu projeto e iremos adicionar no 
package.json

```
jest.config.js
 o arquivo jest.config.js faz o controle das configurações e padrões que o jest irá seguir dentro do projeto !
 ```

babelrc
o babel informa os valores na pastas do next

package.json
 No package iremos adicionar

```
 "test": "jest --watch",
    "coverage": "jest --coverage"
```
jest = visualizado de arquivo do teste
coverage = mensura a cobertura de teste de arquivos individuais
 

 iniciando o TESTE
 Primero criar um arquivo chamado
 Header.test.js dentro da pasta
 components e depois criar  um arquivo Header.js na mesma pasta !
 usando o comando
 ```
 touch components/Header.js
 components/Header.test.js
 ```
 no terminal para criar esses arquivos
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
e no arquivo Header.js
```
import React from 'react';

export default function Header() {
    return <p>Header</p>;
}
```