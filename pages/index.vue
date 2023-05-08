<template>
  <main>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <article class="prose lg:prose-xl">
      {{ markdown }}
    </article>

    <hr />

    <article
      class="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600"
    >
      {{ markdown }}
    </article>
  </main>
</template>

<script setup>
// const appConfig = useAppConfig()

const config = useRuntimeConfig();
console.log("Runtime config:", config);
if (process.server) {
  console.log("API secret:", config.apiSecret);
}

const markdown = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
</script>
