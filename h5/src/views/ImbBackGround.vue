<template>
  <div class="ImbBackGround">
    <transition-group name="fade" mode="out-in">
      <img
        v-for="item in img.resultImgArr"
        v-show="img.current == item.index"
        @load="onload"
        :key="item.index"
        :src="item.url"
        alt=""
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {GetImgArrs} from '../../util';
@Component
export default class ImbBackGround extends Vue {
  public name = 'ImbBackGround';
  public img = new GetImgArrs();

  public onload() {
    this.img.onload();
  }

  public destroyed() {
    this.img.destroyed();
  }
}
</script>
<style lang="stylus" scoped>
.ImbBackGround {
  font-size: 0px;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active below version 2.1.8 */
  opacity: 0;
}
</style>

