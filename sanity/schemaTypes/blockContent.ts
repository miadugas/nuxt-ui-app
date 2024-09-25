import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        // Decorators like bold, italic
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        // Annotations like links
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // Image block
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),
    
    // Code block
    defineArrayMember({
      title: 'Code',
      name: 'code',
      type: 'code', // Now properly recognized after plugin install
      options: {
        language: 'javascript',
        languageAlternatives: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'Vue 3 + TypeScript', value: 'vue' }, // Added Vue 3 + TypeScript
          { title: 'TypeScript', value: 'typescript' }, // Optional: Add TypeScript separately if needed
          { title: 'Python', value: 'python' },
          { title: 'Bash', value: 'bash' },
        ],
        withFilename: true,
      },
    }),
    // Horizontal Line block
    defineArrayMember({
      title: 'Horizontal Line',
      name: 'horizontalLine',
      type: 'object',
      fields: [
        {
          name: 'isHorizontalLine',
          type: 'boolean',
          initialValue: true,
          hidden: true,
        },
      ],
    }),
  ],
})