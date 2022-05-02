<template>
  <div>
    <n-result status="success" title="succss" description="Naive-ui + Nuxt rc1">
      <template #footer>
        <n-space justify="center">
          <n-button type="success">Naive-ui</n-button>
          <n-button type="success" secondary>+</n-button>
          <n-button type="success">Nuxt rc1</n-button>
        </n-space>
      </template>
    </n-result>
    <n-space>
      <n-button type="primary">naive-ui</n-button>
      <n-button type="info">naive-ui</n-button>
      <n-button type="warning">naive-ui</n-button>
    </n-space>
    <n-h2>Tooltip demo</n-h2>
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button>鸭子</n-button>
      </template>
      如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子。
    </n-tooltip>
    <n-h1>特点</n-h1>
    <n-space>
      <n-tag>Nuxt3</n-tag>
      <n-tag>Vite</n-tag>
      <n-tag>Naive-ui</n-tag>
      <n-tag>SEO friendly</n-tag>
    </n-space>
  </div>
</template>