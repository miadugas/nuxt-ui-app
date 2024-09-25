<template>
  <div>
    <PortableText 
      :value="content"
      :components="components"
    />
    
    <!-- Debug output -->
    <div class="mt-8 p-4 bg-gray-100 rounded">
      <h3 class="font-bold">Debug Info:</h3>
      <pre>{{ JSON.stringify(content, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PortableText, type PortableTextComponents, type PortableTextTypeComponent } from '@portabletext/vue'
import { defineComponent, h } from 'vue'

const props = defineProps<{
  content: Array<{
    _type: string;
    _key: string;
    [key: string]: any;
  }>
}>()

const HorizontalLine: PortableTextTypeComponent = defineComponent({
  name: 'HorizontalLine',
  props: ['node'],
  setup() {
    return () => h('hr', { class: 'my-8 border-t-4 border-gray-300' })
  }
})

const components: Partial<PortableTextComponents> = {
  types: {
    horizontalLine: HorizontalLine,
    // Add other custom components here
  }
}
</script>