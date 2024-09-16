<template>
  <div class="py-12 sm:py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <div
        class="p-6 bg-neutral-200 rounded-lg border border-gray-200 shadow-md dark:bg-neutral-800  dark:border-gray-700">
        <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral-900 dark:text-neutral-200">
          Tech I Know
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
          This is a curated list of tools and technologies that I have actively worked with to build robust, scalable web
          applications. From frontend frameworks to backend services and everything in between, these are the technologies
          I've leveraged to solve real-world problems, streamline development processes, and deliver high-quality digital
          experiences. While this list isn't comprehensive, it highlights the core of my technical toolkit.
        </p>

        <!-- Dropdown Navigation for Small Screens -->
        <div class="my-6 sm:hidden">
          <select
            class="block w-full rounded-lg border border-gray-300 bg-white p-3 dark:bg-neutral-900 dark:border-gray-600 dark:text-neutral-200"
            @change="handleSelectChange($event)">
            <option v-for="tab in tabs" :key="tab.name" :value="tab.name" :selected="currentTab === tab.name">
              {{ tab.name }}
            </option>
          </select>
        </div>

        <!-- Tab Navigation -->
        <div class="my-6 hidden sm:block">
          <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 dark:bg-neutral-900  rounded-full p-1">
            <li v-for="tab in tabs" :key="tab.name">
              <a href="#" @click="handleTabClick($event, tab.name)"
                :class="[currentTab === tab.name ? 'bg-white dark:bg-cyan-500 dark:text-gray-100 rounded-full shadow text-indigo-900' : 'text-gray-500', 'flex justify-center py-4']"
                :aria-current="currentTab === tab.name ? 'page' : undefined">
                {{ tab.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Content Areas -->
        <div v-if="currentTab === 'Frontend'">
          <div
            class="bg-neutral-200 dark:bg-neutral-900 dark:border-gray-700 py-12 sm:py-12 border-b border-gray-200 text-center rounded-2xl px-6">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl">Frontend</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              These are, but not limited to, the tech I use for building client-side applications
            </p>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mt-8">
              <div v-for="stack in frontend" :key="stack.name"
                class="relative bg-white shadow-md rounded-lg p-4 flex items-center justify-center transition hover:bg-gray-100">
                <img class="h-14 w-14 object-cover" :src="stack.imageUrl" :alt="stack.name" />
                <div
                  class="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity rounded-lg p-4">
                  <h3 class="text-lg font-semibold text-gray-900">{{ stack.name }}</h3>
                  <p class="text-sm text-gray-500">{{ stack.years }} years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="currentTab === 'Backend'">
          <div
            class="bg-neutral-200 dark:bg-neutral-900 dark:border-gray-700 py-12 sm:py-12 border-b border-gray-200 text-center rounded-2xl px-6">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl">Backend</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              These are, but not limited to, the tech I use for building fast and scalable backend applications
            </p>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mt-8">
              <!-- <div v-for="stack in backend" :key="stack.name"
                class="relative bg-white shadow-md rounded-lg p-4 flex items-center justify-center transition hover:bg-gray-100">
                <img class="h-14 w-14 object-cover" :src="stack.imageUrl" :alt="stack.name" />
                <div
                  class="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity rounded-lg p-4">
                  <h3 class="text-lg font-semibold text-gray-900">{{ stack.name }}</h3>
                  <p class="text-sm text-gray-500">{{ stack.years }} years</p>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <div v-if="currentTab === 'Tools'">
          <div
            class="bg-neutral-200 dark:bg-neutral-900 dark:border-gray-700 py-12 sm:py-12 border-b border-gray-200 text-center rounded-2xl px-6">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl">Tools</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              These are, but not limited to, the tools I use for streamlining development and deployment processes
            </p>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mt-8">
              <!-- <div v-for="stack in tools" :key="stack.name"
                class="relative bg-white shadow-md rounded-lg p-4 flex items-center justify-center transition hover:bg-gray-100">
                <img class="h-14 w-14 object-cover" :src="stack.imageUrl" :alt="stack.name" />
                <div
                  class="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity rounded-lg p-4">
                  <h3 class="text-lg font-semibold text-gray-900">{{ stack.name }}</h3>
                  <p class="text-sm text-gray-500">{{ stack.years }} years</p>
                </div>
              </div> -->
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>




<script setup lang="ts">
import { ref } from 'vue';

interface Stack {
  name?: string;
  imageUrl: string;
  years?: number;
}

const currentTab = ref<string>('Backend');

const selectTab = (tabName: string): void => {
  currentTab.value = tabName;
};

const handleSelectChange = (event: Event): void => {
  const target = event.target as HTMLSelectElement;
  selectTab(target.value);
};

const frontend: Stack[] = [
  { name: 'VueJS', imageUrl: '../assets/icons/LogosVue.svg', years: 7 },
  // { name: 'React', imageUrl: '../assets/icons/DeviconReact.svg', years: 8 },
  // { name: 'AngularJS', imageUrl: '../assets/icons/DeviconAngularjs.svg', years: 4 },
  // { name: 'Angular', imageUrl: '../assets/icons/VscodeIconsFileTypeAngular.svg', years: 4 },
  // { name: 'Svelte', imageUrl: '../assets/icons/DeviconSvelte.svg', years: 3 },
  // { name: 'JavaScript', imageUrl: '../assets/icons/DeviconJavascript.svg', years: 8 },
  // { name: 'TypeScript', imageUrl: '../assets/icons/DeviconTypescript.svg', years: 7 },
  // { name: 'HTML5', imageUrl: '../assets/icons/DeviconHtml5Wordmark.svg', years: 10 },
  // { name: 'CSS3', imageUrl: '../assets/icons/DeviconCss3Wordmark.svg', years: 10 },
  // { name: 'AstroJS', imageUrl: '../assets/icons/DeviconAstro.svg', years: 2 },
  // { name: 'TailwindCSS', imageUrl: '../assets/icons/DeviconTailwindcss.svg', years: 5 },
  // { name: 'Bulma', imageUrl: '../assets/icons/LogosBulma.svg', years: 4 },
  // { name: 'Foundation', imageUrl: '../assets/icons/DeviconFoundation.svg', years: 7 },
  // { name: 'Bootstrap', imageUrl: '../assets/icons/DeviconBootstrapWordmark.svg', years: 8 },
  // { name: 'Sass', imageUrl: '../assets/icons/DeviconSass.svg', years: 7 },
  // { name: 'WindiCSS', imageUrl: '../assets/icons/LogosWindiCss.svg', years: 4 },
  // { name: 'Nuxt', imageUrl: '../assets/icons/DeviconNuxtjs.svg', years: 5 },
  // { name: 'NextJS', imageUrl: '../assets/icons/DeviconNextjs.svg', years: 5 },
  // { name: 'GatsbyJS', imageUrl: '../assets/icons/DeviconGatsby.svg', years: 4 },
  // { name: 'ElectonjS', imageUrl: '../assets/icons/DeviconElectron.svg', years: 4 },
  // { name: 'MaterialUI', imageUrl: '../assets/icons/DeviconMaterialui.svg', years: 6 },
  // { name: 'Vuetify', imageUrl: '../assets/icons/DeviconVuetify.svg', years: 5 },
  // { name: 'Dart', imageUrl: '../assets/icons/LogosDart.svg', years: 3 },
  // { name: 'Flutter', imageUrl: '../assets/icons/DeviconFlutter.svg', years: 4 },
  // { name: 'Swift', imageUrl: '../assets/icons/DeviconSwift.svg', years: 5 },
];

// const backend: Stack[] = [
//   { name: 'NodeJS', imageUrl: '../src/assets/icons/DeviconNodejsWordmark.svg', years: 8 },
//   { name: 'Python', imageUrl: '../src/assets/icons/LogosPython.svg', years: 10 },
//   { name: 'Firebase', imageUrl: '../src/assets/icons/DeviconFirebase.svg', years: 6 },
//   { name: 'MongoDB', imageUrl: '../src/assets/icons/DeviconMongodb.svg', years: 8 },
//   { name: 'NestJS', imageUrl: '../src/assets/icons/DeviconNestjs.svg', years: 4 },
//   { name: 'MySQL', imageUrl: '../src/assets/icons/DeviconMysql.svg', years: 8 },
//   { name: 'Redis', imageUrl: '../src/assets/icons/DeviconRedisWordmark.svg', years: 5 },
//   { name: 'PostgreSQL', imageUrl: '../src/assets/icons/DeviconPostgresql.svg', years: 3 },
//   { name: 'C#', imageUrl: '../src/assets/icons/DeviconCsharp.svg', years: 4 },
//   { name: 'Docker', imageUrl: '../src/assets/icons/DeviconDockerWordmark.svg', years: 4 },
//   { name: 'ExpressJS', imageUrl: '../src/assets/icons/SkillIconsExpressjsDark.svg', years: 3 },
//   { name: 'SQLite', imageUrl: '../src/assets/icons/DeviconSqliteWordmark.svg', years: 5 },
//   { name: 'Scala', imageUrl: '../src/assets/icons/LogosScala.svg', years: 1 },
//   { name: 'Supabase', imageUrl: '../src/assets/icons/DeviconSupabase.svg', years: 4 },
//   { name: 'Sequelize', imageUrl: '../src/assets/icons/DeviconSequelize.svg', years: 8 },
//   { name: 'Django', imageUrl: '../src/assets/icons/VscodeIconsFileTypeDjango.svg', years: 4 },
//   { name: 'Redux', imageUrl: '../src/assets/icons/DeviconRedux.svg', years: 6 },
// ];

// const tools: Stack[] = [
//   { name: 'Git', imageUrl: '../src/assets/icons/DeviconGit.svg', years: 8 },
//   { name: 'Kubernetes', imageUrl: '../src/assets/icons/DeviconKubernetes.svg', years: 3 },
//   { name: 'Photoshop', imageUrl: '../src/assets/icons/DeviconPhotoshop.svg', years: 4 },
//   { name: 'Figma', imageUrl: '../src/assets/icons/DeviconFigma.svg', years: 4 },
//   { name: 'Illustrator', imageUrl: '../src/assets/icons/LogosAdobeIllustrator.svg', years: 3 },
//   { name: 'Sketch', imageUrl: '../src/assets/icons/DeviconSketch.svg', years: 3 },
//   { name: 'Jira', imageUrl: '../src/assets/icons/DeviconJira.svg', years: 3 },
//   { name: 'Ionic', imageUrl: '../src/assets/icons/DeviconIonic.svg', years: 4 },
//   { name: 'ESLint', imageUrl: '../src/assets/icons/DeviconEslint.svg', years: 5 },
//   { name: 'Jest', imageUrl: '../src/assets/icons/SkillIconsJest.svg', years: 5 },
//   { name: 'Heroku', imageUrl: '../src/assets/icons/DeviconHeroku.svg', years: 3 },
//   { name: 'Netlify', imageUrl: '../src/assets/icons/SkillIconsNetlifyLight.svg', years: 4 },
//   { name: 'Puppeteer', imageUrl: '../src/assets/icons/DeviconPuppeteer.svg', years: 4 },
//   // { name: 'Vercel', imageUrl: '../src/assets/icons/DeviconVercel.svg', years: 5 },
//   { name: 'AWS', imageUrl: '../src/assets/icons/SkillIconsAwsDark.svg', years: 4 },
//   { name: 'Azure', imageUrl: '../src/assets/icons/DeviconAzure.svg', years: 5 },
//   { name: 'AzureDevOps', imageUrl: '../src/assets/icons/DeviconAzuredevops.svg', years: 6 },
//   // { name: 'Google Cloud', imageUrl: '../src/assets/icons/DeviconGooglecloud.svg', years: 5 },
//   // { name: 'Postman', imageUrl: '../src/assets/icons/DeviconPostman.svg', years: 3 },
//   { name: 'ArcoCD', imageUrl: '../src/assets/icons/DeviconArgocdWordmark.svg', years: 4 },
//   { name: 'MS SQL Server', imageUrl: '../src/assets/icons/DeviconMicrosoftsqlserver.svg', years: 6 },
//   { name: 'Storybook', imageUrl: '../src/assets/icons/DeviconStorybook.svg', years: 3 },
//   { name: 'DigitalOcean', imageUrl: '../src/assets/icons/DeviconDigitalocean.svg', years: 4 },
//   { name: 'Github', imageUrl: '../src/assets/icons/LogosGithubIcon.svg', years: 8 },

//   // { name: 'Playwright', imageUrl: '../src/assets/icons/DeviconPycharm.svg', years: 3 },
//   { name: 'DrawIO', imageUrl: '../src/assets/icons/VscodeIconsFileTypeDrawio.svg', years: 4 },
//   { name: 'Formkit', imageUrl: '../src/assets/icons/VscodeIconsFileTypeFormkit.svg', years: 4 },
//   { name: 'Xcode', imageUrl: '../src/assets/icons/DeviconXcode.svg', years: 5 },
//   { name: 'Apple', imageUrl: '../src/assets/icons/DeviconApple.svg', years: 10 },
//   { name: 'GitLab', imageUrl: '../src/assets/icons/DeviconGitlabWordmark.svg', years: 8 },
//   { name: 'VS Code', imageUrl: '../src/assets/icons/DeviconVscode.svg', years: 10 },
//   { name: 'Visual Studio', imageUrl: '../src/assets/icons/DeviconVisualstudio.svg', years: 5 },
//   { name: 'Pinia', imageUrl: '../src/assets/icons/LogosPinia.svg', years: 5 },
// ];

interface Tab {
  name: string;
  href: string;
  current: boolean;
}
const tabs: Tab[] = [
  { name: 'Frontend', href: '#', current: false },
  // { name: 'Backend', href: '#', current: false },
  // { name: 'Tools', href: '#', current: true },
];

const handleTabClick = (event: Event, tabName: string): void => {
  event.preventDefault(); // Prevent the default anchor behavior
  selectTab(tabName);
};
</script>

