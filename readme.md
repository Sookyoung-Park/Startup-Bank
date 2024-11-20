![LandingPage](https://github.com/Sookyoung-Park/Startup-Bank/blob/main/startup-bank/public/startupbank-mockup-1.png?raw=true)

<div>
    <img src="https://img.shields.io/badge/-Fullstack-black?style=for-the-badge&logoColor=white&logo=javascript&color=000000" alt="Fullstack" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=2e8c6b" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />

</div>


# 💶 Startup Bank
Fullstack project of Startup Pitchs Bank

## **Introduction**

A Next.js 15 platform where entrepreneurs can submit their startup pitches, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience.


<!-- <a href="https://drive.google.com/file/d/1Lt2vFWM0jzQg4S8wrYMQ8SDTOPX5DOa7/view?usp=sharing">Please check the deployed website here!</a> -->

## **Tech Stack**

- Next.js
- React
- TypeScript
- TailwindCSS
- ShadCN
- Sanity


## **Main Features**
- **GitHub Authentication:** Allows users to log in easily using their GitHub account.
- **Live Content API:** Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.
- **Filter feature:** Browse through pitches with filtering options by category.
- **Editor Picks:** Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.
- **Views Tracker:** Tracks the number of views for each pitch instead of an upvote system.
- **Search Functionality**



## **Usage**
- **Cloning the Repository**

```bash
git clone git@github.com:Sookyoung-Park/Startup-Bank.git
cd Startup-Bank
cd startup-bank
```

- **Installation**

Install the project dependencies using npm:

```bash
npm install
```

- **Set Up Environment Variables**

Create a new file named .env.local in the root of your project and add the following content:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=

AUTH_SECRET= 
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

- **Running the Project**

```bash
npm run dev
```


## **Screenshots**
![Screenshot1](https://github.com/Sookyoung-Park/Startup-Bank/blob/main/startup-bank/public/startupbank-mockup-13png.png?raw=true)
![Screenshot2](https://github.com/Sookyoung-Park/Startup-Bank/blob/main/startup-bank/public/startupbank-mockup-2.png?raw=true)