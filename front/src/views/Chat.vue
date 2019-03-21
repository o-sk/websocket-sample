<template>
  <div class="chat">
    <input v-model="text" type="text" />
    <input type="button" @click="send" value="send" />
    <p v-for="(message, i) in receiveMessages" :key="message + i">
      {{ message }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Chat extends Vue {
  public text: string = "";
  public receiveMessages: string[] = [];
  public socket: WebSocket = new WebSocket("ws://localhost:8888/chat");

  public mounted(): void {
    this.socket.onopen = () => {
      console.log("ws open");
    };
    this.socket.onmessage = e => {
      this.receiveMessages.push(e.data);
    };
    this.socket.onclose = e => {
      console.log("ws close");
    };
  }

  public send(): void {
    this.socket.send(this.text);
  }

  public beforeDestroy(): void {
    this.socket.close();
  }
}
</script>
