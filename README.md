# Synthetic

O Synthetic e um modelo de aplicativo SaaS, totalmente funcional que provê um ambiente para gerar conteúdo através de IA. Para utilizá-lo você faz o registro com e-mail ou autorização via rede social (Google ou Facebook, etc). Após o registro a plataforma permite a assinatura do serviço que permite gerar conteúdo através de APIs de Inteligência Artificial.

Aos interessados, existe a possibilidade de substituir o serviço por qualquer outro, aproveitando a estrutura e os recursos da aplicação. Este modelo foi elaborado para exemplificar, de forma didática, o processo de um modelo de um Micro SaaS.

![alt text](./doc/land-page.png)

## Pré-requisitos

- node (20.11.1 - utilizado)
- npm (10.2.4 - utilizado) ou gerenciador de biblioteca de sua preferência
- git (2.34.1 - utilizado)

## Techs

- React 18 - linguagem de programação - <https://react.dev>
- Next 14 - framework - <https://nextjs.org>
- Typescript - tipagem - <https://www.typescriptlang.org>
- Shadcn ui - componentes - <https://ui.shadcn.com>
- Tailwind - estilização e ui - <https://tailwindui.com>
- Lucide-react - ícones - <https://lucide.dev/icons>
- Prisma - orm / persistência - <https://www.prisma.io>
- Next-intl - internacionalização - <https://next-intl-docs.vercel.app>
- Eslint - padronização, qualidade e estilo de código - <https://eslint.org>
- Axios - Cliente HTTP baseado em Promise - <https://axios-http.com/>
- React-markdown - React component to render markdown - <https://www.npmjs.com/package/react-markdown>
- Zod - Biblioteca de declaração e validação de esquema TypeScript-first - <https://zod.dev>

[](#servicos)

## Serviços na web

- Clerk/nextjs - Autenticação e Autorização - <https://clerk.com/docs>
- Stripe - gateway de pagamento - <https://stripe.com/br>
- Openai - Inteligência Artificial - <https://platform.openai.com/docs/introduction>
- Replicate - Inteligência Artificial - <https://replicate.com/docs>
- Crisp - Plataforma de mensagens multifunções e multicanal -  <https://crisp.chat/pt>
- Database - mySql - <https://www.mysql.com>

![alt text](./doc/dashboard.png)

## Instalar e Executar

1. Clone

   Escolha a pasta onde deseja armazenar o projeto e digite os comandos abaixo:

   ```
   git clone https://github.com/esbnet/synthetic
   ```

2. Instalar dependências

   Na pasta raiz do projeto, digite o seguinte comando:

   ```
   npm install
   ```

3. Configurar variáveis de ambiente

   Para que o sistema rode é necessário configurar as variáveis de ambiente. Para isso, deverá ser consultado a documentação de cada serviço utilizado. <a id="#servicos">Link acima</a>.
   Na pasta raiz, crie o arquivo `.env` e inclua as variáveis abaixo com seus respectivos valores.

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# IA's 
OPENAI_API_KEY=
OPENAI_API_KEY=
OPENAI_ORGANIZATION_ID=

REPLICATE_API_TOKEN=

# Database
DATABASE_URL="mysql://root:example@localhost:3306/iasaas" //Config your database URL

# STRIPE_SECRET_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_ID=

NEXT_PUBLIC_APP_URL="http://localhost:3000"

```

4. Criar banco de dados e tabelas

   É pré-requisito configurar as variáveis de ambiente para que o sistema tenha as credenciais de acesso ao Supabase.
   Na pasta raiz, digite:

   ```
   npx prisma migrate dev
   ```

   Este é o comando que criará o banco de dados e as tabelas no ambiente do Bando de Dados.

5. Executar o projeto

   Ainda na pasta raiz do projeto, após realizar todos os procedimentos acima, rode o comando:

   ```
   npm run dev
   ```

</br></br>

<center>
Bons estudos...

</br></br></br>

Me pagar um café (pix): :coffee:

![me pague um café](./doc/pix.png)

</center>
