<template>
  <h2>{{ msg }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
});
</script>
