<template>
<div class="Home">
  <ImbBackGround></ImbBackGround>
</div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import ImbBackGround from './ImbBackGround.vue';
@Component({
  components: {
        ImbBackGround,
    },
})
export default class Home extends Vue {

}
</script>
<style lang='stylus'>
 .Home{
   position relative
   max-width 500px
   margin auto
 }
</style>
