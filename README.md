# iPro Suite Web App

## What the Application does

- The Company's Web Application.

## Technologies

- React Router
- ZuStand
- TypeScript
- React hooks
- Tailwind css
- Shadcn

## Some of the challenges I've faced and how I've tackled them

- TBA

## Project Installation

```bash
git clone https://github.com/mahmoudrottab/iprosuiteapp.git
cd iprosuiteapp
npm install
```

## To Start the App

```bash
npm run dev
```

## For Building

```bash
npm run build
```

## Usage

- Company's Web Portal/ System.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D tailwindcss-animate
npm i react-router-dom
npm i -D @types/node
npx shadcn-ui@latest init
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add carousel
npx shadcn-ui@latest add card
npx shadcn-ui@latest add table
npm install @tanstack/react-table
npx shadcn-ui@latest add checkbox
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add tabs
npm i @tanstack/react-query
npm i --save react-dropzone
npm install @tanstack/react-query @tanstack/react-query-devtools
npm i solidjs-dropzone
npm install react-intersection-observer
npm i appwrite
npm i attr-accept
npm i axios
npm install uuid
```

## Project Hierarchy

```bash
  ipro_suite_app
    ├─ public
    │  ├─ icons                      ### Icons Folder
    │  │  ├─ AboutExperience.jsx     ### Our Customer About Experience component
    │  ├─ images                     ### Images Folder
    │  │  ├─ AboutExperience.jsx     ### Our Customer About Experience component
    │  ├─ react.svg         
    ├─ src                           ### root Folder
    │  ├─ index.js                   ### project index
    │  ├─ _auth                      ### Authentication Forms
    │  │  ├─ SigninForm              ### Singin Form
    │  │  ├─ SignupForm.jsx          ### Signup Form
    │  │─ AuthLayout.jsx             ### Forms Layout
    │  ├─ _root                      ### Pages Layout
    │  │  ├─ AboutHero.jsx           ### Our Customer About Hero component
    │  │  ├─ AboutOverview.jsx       ### Our Customer About Overview component
    │  │  ├─ AboutJobs.jsx           ### Our Customer About Jobs component
    │  │  ├─ Experience.jsx          ### Our Customer Experience component
    │  │  ├─ Header.jsx              ### Our Header Nav Bar
    │  │  ├─ Footer.jsx              ### Our Footer
    │  │  ├─ Hero.jsx                ### Our Hero Banner in Home Page
    │  │  ├─ Overview.jsx            ### Our overview section in Home Page
    │  │─ RootLayout.jsx             ### RootLayout
    │  ├─ components                 ### used to group all the project components
    │  │  ├─ ui                      ### ShadCn Components
    │  │  │  ├─ button.tsx           
    │  │  │  ├─ form.tsx           
    │  │  │  ├─ card.tsx           
    │  │  │  ├─ carousel.tsx           
    │  │  │  ├─ index.tsx           
    │  │  │  ├─ label.tsx           
    │  │  │  ├─ tabs.tsx           
    │  │  │  ├─ textarea.tsx           
    │  │  │  ├─ toast.tsx           
    │  │  │  ├─ toaster.tsx           
    │  │  │  ├─ use-toast.ts     
    │  ├─ constants                ### Constants Folder
    │  │  ├─ index.ts                 
    │  ├─ stoe                     ### Zustand Store folder
    │  │  ├─ index.js
    │  │  ├─ SectionWrapper.js
    │  ├─ store              ### Our Redux Store
    │  │  ├─ reducer.js
    │  │─ globals.css
    │  │─ App.tsx
    │  │─ main.tsx
    ├─ .gitignore
    ├─ node_modules
    ├─ package.json
    ├─ package-lock.json
    ├─ postcss.config.js
    ├─ tailwind.config.js
    ├─ README.md
    ├─ tsconfig.json
    ├─ tsconfig.node.json
    └─ vite.config.js
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge

<a href="https://www.linkedin.com/company/ipro-suite/"> <img src="https://img.shields.io/badge/iPro_Suite-Mahmoud_Rottab-blue" alt="iPro Suite" /> </a>
