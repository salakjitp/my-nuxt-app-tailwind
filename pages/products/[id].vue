<template>
  <div class="text-xl font-bold">Product Detail</div>
  <div>
    <div><span class="pr-1">ID:</span>{{ route.params.id }}</div>
  </div>
</template>

<script>
export default {
  // layout: 'product',
  scrollToTop: true,
  async asyncData({ params }) {
    const id = params.id; // When calling /abc the slug will be "abc"
    return { id };
  },
};
</script>

<script setup>
const route = useRoute();
// When accessing /product/1, route.params.id will be 1
console.log(route.params.id);
</script>
