<template>
  <div>
    <span class="font-bold text-lg">All Product</span>
    <div class="grid grid-cols-4 gap-4">
      <div
        class="p-2 shadow-lg rounded-lg border-2 grid justify-items-stretch hover:bg-blue-100 cursor-pointer"
        v-for="(item, index) in data.products"
        :key="index"
        @click="gotoProductDetail(item.id)"
      >
        <img
          :src="item.thumbnail"
          class="rounded-md h-48 shadow justify-self-center"
        />

        <div class="font-bold">{{ item.title }}</div>
        <div class="font-normal text-gray-600">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "All Product",
});
const router = useRouter();

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

const { data: data } = await useFetch("https://dummyjson.com/products", {
  params: { limit: 10 },
});
console.log(data);

const gotoProductDetail = (id) => {
  router.push({
    name: "products-id",
    params: {
      id: id,
    },
  });
};
</script>

<script></script>
