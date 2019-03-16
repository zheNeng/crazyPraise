<template>
<div class="GetText" @click="clickChange">
{{text}}
</div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import {text} from '../assets/text';
console.log('text', text);
@Component
export default class GetText extends Vue {
  public text = this.getText();
  public countsetTimeout: any;
  public changeText() {
    this.text = this.getText();
  }
  public clickChange() {
      clearTimeout(this.countsetTimeout);
      this.changeText();
      this.countsetTimeout = setTimeout(() => {
        this.clickChange();
      }, 4500);
  }
public getText() {
  const random = parseInt( String(Math.random() * text.length), 0);
  return text[random];
}
public mounted() {
  this.clickChange();
}

}
</script>
<style lang='stylus'>
.GetText
    position: absolute;
    top: 30%;
    left: 50%;
    transform translate(-50%,-50%)
    width: 60%;
    text-align: center;
    min-height: 30%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #03a9f4a8;
    border-radius: 21px;
    color: #cebcbc;
</style>
