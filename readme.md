# Setup guideline

## Prerequisites

- nodejs >= 16.8
- yarn >= 1.22
- docker >= 20.10

## Project structure

## Libraries and documentation

- [NextJS](https://nextjs.org/docs/getting-started)
- [Prisma](https://www.prisma.io/docs/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Ant Design](https://ant.design/docs/react/introduce)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Styled Components](https://styled-components.com/docs)
- [JSON Web Token](https://jwt.io/introduction)

## Install dependencies

### Database

```bash
docker-compose up db -d
```

### Server

```bash
yarn install
```

### Additional

- Copy `.env.example` to `.env` and update the environment variables
- Run `yarn db:push` to create database schema
- Run `yarn db:seed` to create database seed
- Run `yarn generate` to generate database model when database schema changed
- Run `yarn dev` to start development server
- Run `yarn build` to build production server
- Run `yarn start` to start production server
- Create new api endpoint in `src/pages/api` folder
