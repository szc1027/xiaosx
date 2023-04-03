<template>
  <div class="">
    <div>
      <button class="btn">按钮</button>

    </div>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const data = reactive({})

</script>
<style  scoped>
.btn {
  @apply bg-pink-300 text-xl text-center rounded p-2
}
</style>