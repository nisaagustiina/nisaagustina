<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  educations: {
    type: Object as PropType<{ title: string, date: string}[]>,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-lg text-muted">
      {{ $t("global.educations") }}
    </h3>
    <div class="flex flex-col gap-4 text-main">
      <div
        v-for="education in educations"
        :key="education.title"
      >
        <h4 class="font-semibold text-main">
          {{ education.title }}
        </h4>
        <div class="flex gap-1 text-muted">
          <p>
            {{ education.date }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
