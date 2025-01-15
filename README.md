# Projeto Next.js com Suporte a Locales

## Descrição do Projeto

Este projeto utiliza **Next.js**.

A organização interna utiliza **Atomic Design** para os componentes, com separação clara de estilos, tipos, hooks e funções utilitárias globais.

---

## Estrutura de Pastas

Abaixo está uma visão geral da estrutura do projeto:

---

## Descrição das Pastas

### **`app`**

- Diretório principal do Next.js onde as rotas são definidas.

### **`src/components`**

- Segue o conceito de **Atomic Design**:
  - **Atoms:** Componentes básicos e reutilizáveis (botões, inputs, etc.).
  - **Molecules:** Combinações simples de átomos.
  - **Organisms:** Conjuntos mais complexos de moléculas.
  - **Templates:** Estruturas base para páginas.
  - **Pages:** Representação específica de páginas.

### Organização de Componentes no Projeto

Cada componente é organizado em sua própria pasta, seguindo uma estrutura modular e limpa. Dentro da pasta do componente:

1. **O componente principal** é implementado no arquivo `index.ts(x)` e exportado diretamente.
2. **Funções auxiliares, variáveis, hooks ou estilos específicos** são armazenados em pastas e arquivos separados dentro da mesma, garantindo que cada peça necessária para o funcionamento do componente permaneça encapsulada e fácil de gerenciar.
3. **Somente o que é essencial para o componente funcionar é incluído na pasta**, evitando dependências desnecessárias e melhorando a clareza do código.

Essa abordagem garante modularidade, reutilização, e facilita a manutenção e leitura do projeto.

---

### Estrutura de Pastas e Arquivos

A organização segue o padrão abaixo:

### Arquivos

- **`index.tsx`**:

  - Contém a implementação principal do componente.
  - **Exemplo (`MeuComponente.tsx`)**:

    ```tsx
    import React from 'react';

    interface IMeuComponent {
        ....tipos
    }

    const MeuComponente: React.FC = ({ ...tipos }: IMeuComponent) => {
      return <div>Olá, este é o MeuComponente!</div>;
    };

    export { MeuComponente };
    ```

- **`style.css`**:

  - Arquivo que contém estilos css muito específico para um determinado componente. Usado em casos raros.
  - **Exemplo (`style.css`)**:
    ```css
    .meu-estilo {
      border: red;
    }
    ```

- **`[component-pasta]/hooks`**:

  - Pasta que armazena os hooks necessários para aquele componente.
  - **Exemplo (`[component-pasta]/hooks/useMeuHookCustomizado.ts`)**:

    ```ts
    import { useState } from "react"

    export const useMeuHookCustomizado() {
        const [open, setOpen] = useState(false)

        const toggle = () => setOpen(prev => !prev)

        return toggle
    }
    ```

- **`[component-pasta]/functions`**:

  - Pasta que armazena as funções necessários para aquele componente.
  - **Exemplo (`[component-pasta]/functions/minhaFuncao.ts`)**:

    ```ts
    interface IMinhaFuncao {
        ...params
    }

    export const minhaFuncao({ ...params }: IMinhaFuncao) {
        const calc = params.a + params.b

        return calc
    }
    ```

- **`[component-pasta]/arrays`**:

  - Pasta que armazena os arrays necessários para aquele componente.
  - **Exemplo (`[component-pasta]/arrays/meuArray.ts`)**:
    ```ts
    export const meuArray = ['a', 'b']
    ```

- **`[component-pasta]/variables`**:
  - Pasta que armazena as variáveis necessários para aquele componente.
  - **Exemplo (`[component-pasta]/variables/minhaVariavel.ts`)**:
    ```ts
    export const minhaVariavel =
      'Vou ser reutilizada no fluxo desse componente e necessito ser reaproveitada.'
    ```

### **`src/enum`**

- Contém enum's globais que deve ser reutilizado na aplicação:
  - **`slugs.ts`**: Slugs que contém atualmente na aplicação.

### **`src/fonts`**

- Contém as fontes que está sendo utilizado na aplicação:
  - **`index.ts`**: Arquivo que exporta as fontes que está sendo utilizado na aplicação. As fontes já estão dentro dessa pasta porém... dentro de mais pastas separadas dentro desse diretório.

### **`src/I18n`**

- Contém os arquivos e pastas de configuração da lib next-intl:
  - **`[messages/language]`**: Pasta que contém as traduções para cada componente quando necessário.
  - **`request.ts`**: Arquivo de configuração de request inicial conforme descrito na lib, apenas configurado para os idiomas da aplicação.
  - **`routing.ts`**: Arquivo de configuração de roteamento inicial conforme descrito na lib, apenas configurado para os idiomas da aplicação.

### **`src/routes`**

- Pasta que contém as rotas atuais da aplicação. Utilizado de forma há simplificar a manutenção futura centralizando um único local com os path's da aplicação.
  - **`index.ts`**: Arquivo que contém as rotas(path) da aplicação, links de direcionamento externo para outros web sites e também rotas que são habilitadas dentro da aplicação.

### **`src/styles`**

- Contém estilos globais e configurações de design:
  - **`global.css`**: Estilos globais da aplicação juntamente com a paleta de cores que contém na aplicação.

### **`src/types`**

1. **Tipos Específicos por Página, Componente, Fluxo, Parâmetros, Dentre outros**:
   - Armazenados em pastas correspondentes às páginas em `src/types/[nome-da-pagina]|[nome-do-fluxo]|[nome-do-component].ts/`.
   - Contêm tipos exclusivos para cada página, componente, fluxo ou módulo.
   - Isso permite que os arquivos permaneçam focados e organizados, alinhados com a estrutura das páginas da aplicação.

### **`src/hooks`**

- Contém hooks personalizados que podem ser usados em diferentes partes da aplicação.

### **`src/utils`**

- Reúne funções e formatadores globais, como:
  - Manipulação de datas.
  - Validações.
  - Helpers diversos.

### **`src/middleware`**

- Reúne funções específicas para o middleware da aplicação.

### **`middleware.ts`**

- Arquivo que contém o middleware responsável por orquestrar requisições na aplicação. Utilizado para mapeamento de rotas e validações caso necessário.

---

## Como Rodar o Projeto

### **Pré-requisitos**

- Node.js (>= 18)
- NPM ou Yarn

### **Instalação**

1. Clone o repositório:

   ```bash
   git clone https://link_do_repositório
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

### **Executando**

1. Rodando:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

Acesse o projeto em [http://localhost:3000].
