<!-- <template>
  <div class="flex space-x-4">
    <nuxt-img 
      v-for="icon in socialMediaIcons" 
      :key="icon.name"
      :src="icon.src" 
      :alt="icon.alt"
      width="24"
      height="24"
      @click="openLink(icon.link)"
      class="cursor-pointer transition-transform duration-300 hover:scale-110 hover:opacity-75"
    />
  </div>
</template> -->
<!-- <template>
  <div class="flex space-x-4">
    <div
      v-for="icon in socialMediaIcons"
      :key="icon.name"
      class="p-2 rounded-full hover:bg-cyan-500 transition-colors duration-300"
      @click="openLink(icon.link)"
    >
      <nuxt-img 
        :src="icon.src" 
        :alt="icon.alt"
        width="24"
        height="24"
        class="cursor-pointer"
      />
    </div>
  </div>
</template> -->
<template>
  <div class="flex space-x-4">
    <div
      v-for="icon in socialMediaIcons"
      :key="icon.name"
      class="p-2 cursor-pointer transition-all duration-300 hover:text-cyan-500"
      @click="openLink(icon.link)"
    >
      <nuxt-img 
        :src="icon.src"
        :alt="icon.alt"
        width="24"
        height="24"
        class="fill-current"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const socialMediaIcons = [
  { name: 'codepen', src: '/icons/codepen.svg', alt: 'CodePen', link: 'https://codepen.com' },
  { name: 'bluesky', src: '/icons/bluesky.svg', alt: 'Twitter', link: 'https://bluesky.com' },
  { name: 'linkedin', src: '/icons/linkedin.svg', alt: 'LinkedIn', link: 'https://linkedin.com' },
  { name: 'github', src: '/icons/github.svg', alt: 'Github', link: 'https://github.com' },
  { name: 'dribbble', src: '/icons/dribbble.svg', alt: 'Dribbble', link: 'https://dribbble.com' },
]

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>
