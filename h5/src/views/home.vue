<template>
<div class="Home">
  <ImbBackGround @onload="imgLoad"></ImbBackGround>
  <div>
  <GetText v-if="showText"></GetText>
  </div>
</div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import ImbBackGround from './ImbBackGround.vue';
import GetText from './GetText.vue';
@Component({
  components: {
        ImbBackGround,
        GetText,
    },
})
export default class Home extends Vue {
public showText: boolean = false;
public imgLoad() {
  this.showText = true;
}
}
</script>
<style lang='stylus'>
 .Home{
   position relative
   max-width 500px
   margin auto
   height 100vh
   overflow hidden
 }
</style>
