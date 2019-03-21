<template>
  <div class="home">
    <input v-model="text" type="text" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  public text: string = "";
}
</script>
