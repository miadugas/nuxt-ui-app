<template>
  <div class="py-10 sm:py-10 mt-4">
    <div class="mx-auto max-w-7xl text-center">
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
        <div class="mt-6 sm:hidden">
          <select
            class="block w-full rounded-lg border border-gray-300 bg-neutral-200 p-3 dark:bg-neutral-900 dark:border-gray-600 dark:text-neutral-200"
            @change="handleSelectChange($event)">
            <option v-for="tab in tabs" :key="tab.name" :value="tab.name" :selected="currentTab === tab.name">
              {{ tab.name }}
            </option>
          </select>
        </div>

        <!-- Tab Navigation -->
        <div class="mt-6 hidden sm:block">
          <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 dark:bg-neutral-900 rounded-tl-full rounded-tr-full p-1">
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
        <div class="relative overflow-hidden">
          <transition name="slide" mode="out-in">
            <div :key="currentTab">
              <div v-if="currentTab === 'Frontend'">
                <div
                  class="bg-neutral-200 dark:bg-neutral-900 dark:border-gray-700 py-4 sm:py-4 border-b border-gray-200 text-center rounded-bl-2xl rounded-br-2xl pb-6">
                  <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl">Frontend
                  </h2>
                  <p class="mt-4 text-lg leading-8 text-gray-500 dark:text-gray-400">
                    These are, but not limited to, the tech I use for building client-side applications
                  </p>
                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mt-8 px-6">
                    <div v-for="stack in frontend" :key="stack.name"
                      class="relative bg-neutral-200 dark:bg-neutral-800 shadow-md rounded-lg p-4 flex items-center justify-center transition hover:bg-gray-100 ">
                      <img class="h-14 w-14 object-cover" :src="getImageUrl(stack.imageUrl)" :alt="stack.name" />
                      <div
                        class="absolute inset-0 flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-800 bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity rounded-lg p-4">
                        <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400">{{ stack.name }}</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ stack.years }} years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="currentTab === 'Backend'">
                <div
                  class="bg-neutral-200 dark:bg-neutral-900 dark:border-gray-700 py-4 sm:py-4 border-b border-gray-200 text-center rounded-bl-2xl rounded-br-2xl pb-6">
                  <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl">Backend
                  </h2>
                  <p class="mt-4 text-lg leading-8 text-gray-500 dark:text-gray-400">
                    These are, but not limited to, the tech I use for building fast and scalable backend applications
                  </p>
                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mt-8 px-6">
                    <div v-for="stack in backend" :key="stack.name"
                      class="relative bg-neutral-200 dark:bg-neutral-800 shadow-md rounded-lg p-4 flex items-center justify-center transition hover:bg-gray-100">
                      <img class="h-14 w-14 object-cover" :src="getImageUrl(stack.imageUrl)" :alt="stack.name" />
                      <div
                        class="absolute inset-0 flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-800 bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity rounded-lg p-4">
                        <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400">{{ stack.name }}</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ stack.years }} years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="currentTab === 'Tools'">
                <div
                  class="bg-neutral-200 dark:bg-neutral-900 dark:border-gray-700 py-4 sm:py-4 border-b border-gray-200 text-center rounded-bl-2xl rounded-br-2xl pb-6">
                  <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl">Tools</h2>
                  <p class="mt-4 text-lg leading-8 text-gray-500 dark:text-gray-400">
                    These are, but not limited to, the tools I use for streamlining development and deployment processes
                  </p>
                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mt-8 px-6">
                    <div v-for="stack in tools" :key="stack.name"
                      class="relative bg-neutral-200 dark:bg-neutral-800 shadow-md rounded-lg p-4 flex items-center justify-center transition hover:bg-gray-100">
                      <img class="h-14 w-14 object-cover" :src="getImageUrl(stack.imageUrl)" :alt="stack.name" />
                      <div
                        class="absolute inset-0 flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-800 bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity rounded-lg p-4">
                        <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400">{{ stack.name }}</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ stack.years }} years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

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
  { name: 'VueJS', imageUrl: 'LogosVue.svg', years: 7 },
  { name: 'React', imageUrl: 'DeviconReact.svg', years: 8 },
  { name: 'AngularJS', imageUrl: 'DeviconAngularjs.svg', years: 4 },
  { name: 'Angular', imageUrl: 'VscodeIconsFileTypeAngular.svg', years: 4 },
  { name: 'Svelte', imageUrl: 'DeviconSvelte.svg', years: 5 },
  { name: 'JavaScript', imageUrl: 'DeviconJavascript.svg', years: 8 },
  { name: 'TypeScript', imageUrl: 'DeviconTypescript.svg', years: 7 },
  { name: 'HTML5', imageUrl: 'DeviconHtml5Wordmark.svg', years: 10 },
  { name: 'CSS3', imageUrl: 'DeviconCss3Wordmark.svg', years: 10 },
  { name: 'AstroJS', imageUrl: 'DeviconAstro.svg', years: 2 },
  { name: 'TailwindCSS', imageUrl: 'DeviconTailwindcss.svg', years: 5 },
  { name: 'Bulma', imageUrl: 'LogosBulma.svg', years: 4 },
  { name: 'Foundation', imageUrl: 'DeviconFoundation.svg', years: 7 },
  { name: 'Bootstrap', imageUrl: 'DeviconBootstrapWordmark.svg', years: 8 },
  { name: 'Sass', imageUrl: 'DeviconSass.svg', years: 7 },
  { name: 'WindiCSS', imageUrl: 'LogosWindiCss.svg', years: 4 },
  { name: 'Nuxt', imageUrl: 'DeviconNuxtjs.svg', years: 5 },
  { name: 'NextJS', imageUrl: 'DeviconNextjs.svg', years: 5 },
  { name: 'GatsbyJS', imageUrl: 'DeviconGatsby.svg', years: 4 },
  { name: 'ElectonjS', imageUrl: 'DeviconElectron.svg', years: 4 },
  // { name: 'MaterialUI', imageUrl: 'DeviconMaterialui.svg', years: 6 },
  // { name: 'Vuetify', imageUrl: 'DeviconVuetify.svg', years: 5 },
  { name: 'Dart', imageUrl: 'LogosDart.svg', years: 3 },
  { name: 'Flutter', imageUrl: 'DeviconFlutter.svg', years: 4 },
  // { name: 'Swift', imageUrl: 'DeviconSwift.svg', years: 5 },
];

const backend: Stack[] = [
  { name: 'NodeJS', imageUrl: 'DeviconNodejsWordmark.svg', years: 8 },
  { name: 'Python', imageUrl: 'LogosPython.svg', years: 10 },
  { name: 'Firebase', imageUrl: 'DeviconFirebase.svg', years: 6 },
  { name: 'MongoDB', imageUrl: 'DeviconMongodb.svg', years: 8 },
  { name: 'NestJS', imageUrl: 'DeviconNestjs.svg', years: 4 },
  { name: 'Arduino', imageUrl: 'DeviconArduino.svg', years: 8 },
  { name: 'Raspberry Pi', imageUrl: 'DeviconRaspberrypi.svg', years: 8 },
  { name: 'MySQL', imageUrl: 'DeviconMysql.svg', years: 8 },
  { name: 'Redis', imageUrl: 'DeviconRedisWordmark.svg', years: 5 },
  { name: 'PostgreSQL', imageUrl: 'DeviconPostgresql.svg', years: 3 },
  { name: 'C#', imageUrl: 'DeviconCsharp.svg', years: 4 },
  { name: 'Docker', imageUrl: 'DeviconDockerWordmark.svg', years: 4 },
  // { name: 'ExpressJS', imageUrl: 'SkillIconsExpressjsDark.svg', years: 3 },
  { name: 'SQLite', imageUrl: 'DeviconSqliteWordmark.svg', years: 5 },
  { name: 'Scala', imageUrl: 'LogosScala.svg', years: 1 },
  { name: 'Supabase', imageUrl: 'DeviconSupabase.svg', years: 4 },
  { name: 'Sequelize', imageUrl: 'DeviconSequelize.svg', years: 8 },
  { name: 'Django', imageUrl: 'VscodeIconsFileTypeDjango.svg', years: 4 },
  { name: 'Redux', imageUrl: 'DeviconRedux.svg', years: 6 },
  { name: 'GraphQL', imageUrl: 'VscodeIconsFileTypeGraphql.svg', years: 4 },
  { name: '.Net Core', imageUrl: 'DeviconDotnetcore.svg', years: 3 },

];

const tools: Stack[] = [
// { name: 'Git', imageUrl: 'DeviconGit.svg', years: 8 },
  { name: 'Kubernetes', imageUrl: 'DeviconKubernetes.svg', years: 3 },
  { name: 'Adobe CC', imageUrl: 'adobe-creative-cloud.svg', years: 4 },
  // { name: 'Photoshop', imageUrl: 'DeviconPhotoshop.svg', years: 4 },
  { name: 'Figma', imageUrl: 'DeviconFigma.svg', years: 4 },
  // { name: 'Illustrator', imageUrl: 'LogosAdobeIllustrator.svg', years: 3 },
  { name: 'Sketch', imageUrl: 'DeviconSketch.svg', years: 3 },
  { name: 'Jira', imageUrl: 'DeviconJira.svg', years: 3 },
  { name: 'Ionic', imageUrl: 'DeviconIonic.svg', years: 4 },
  // { name: 'ESLint', imageUrl: 'DeviconEslint.svg', years: 5 },
  { name: 'Jest', imageUrl: 'SkillIconsJest.svg', years: 5 },
  { name: 'Heroku', imageUrl: 'DeviconHeroku.svg', years: 3 },
  { name: 'Netlify', imageUrl: 'SkillIconsNetlifyLight.svg', years: 4 },
  // { name: 'Vercel', imageUrl: 'DeviconVercel.svg', years: 5 },
  { name: 'AWS', imageUrl: 'SkillIconsAwsDark.svg', years: 4 },
  { name: 'Azure', imageUrl: 'DeviconAzure.svg', years: 5 },
  { name: 'AzureDevOps', imageUrl: 'DeviconAzuredevops.svg', years: 6 },
  // { name: 'Google Cloud', imageUrl: 'DeviconGooglecloud.svg', years: 5 },
  { name: 'Postman', imageUrl: 'LogosPostmanIcon.svg', years: 5 },
  { name: 'ArcoCD', imageUrl: 'DeviconArgocdWordmark.svg', years: 4 },
  { name: 'MS SQL Server', imageUrl: 'DeviconMicrosoftsqlserver.svg', years: 6 },
  { name: 'Storybook', imageUrl: 'DeviconStorybook.svg', years: 3 },
  { name: 'DigitalOcean', imageUrl: 'DeviconDigitalocean.svg', years: 4 },
  { name: 'Formkit', imageUrl: 'VscodeIconsFileTypeFormkit.svg', years: 4 },
  { name: 'Xcode', imageUrl: 'DeviconXcode.svg', years: 5 },
  { name: 'VS Code', imageUrl: 'DeviconVscode.svg', years: 10 },
  { name: 'Visual Studio', imageUrl: 'DeviconVisualstudio.svg', years: 5 },
  { name: 'Pinia', imageUrl: 'LogosPinia.svg', years: 5 },
  { name: 'MaterialUI', imageUrl: 'DeviconMaterialui.svg', years: 6 },
  { name: 'Vuetify', imageUrl: 'DeviconVuetify.svg', years: 5 },
];

interface Tab {
  name: string;
  href: string;
  current: boolean;
}

const tabs: Tab[] = [
  { name: 'Frontend', href: '#', current: false },
  { name: 'Backend', href: '#', current: false },
  { name: 'Tools', href: '#', current: true },
];

const handleTabClick = (event: Event, tabName: string): void => {
  event.preventDefault(); // Prevent the default anchor behavior
  selectTab(tabName);
};

const getImageUrl = (name: string): string => {
  return new URL(`../assets/images/icons/${name}`, import.meta.url).href;
};

// Active Tab Indicator Position
const indicatorStyle = ref({ left: '0%', width: '33.333%' });

const updateIndicator = () => {
  const activeIndex = tabs.findIndex(tab => tab.name === currentTab.value);
  const percentage = (activeIndex / tabs.length) * 100;
  indicatorStyle.value = {
    left: `${percentage}%`,
    width: `${100 / tabs.length}%`,
  };
};

// Watch for tab changes to update indicator
watch(currentTab, () => {
  updateIndicator();
});

// Initialize indicator on mount
onMounted(() => {
  updateIndicator();
});
</script>

<style scoped>
/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* .slide-enter-active {
  transition: all 0.5s ease;
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
} */

/* .slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-active {
  transition: all 0.5s ease;
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
} */

/* Active Tab Indicator */
ul.relative {
  position: relative;
}

ul.relative .indicator {
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: #4f46e5;
  /* Indigo-500 */
  transition: all 0.3s ease;
}</style>