<template>
  <div class="carousel">
      <slot></slot>
      <button class="carousel__nav carosuel__prev" @click.prevent="prev"></button>
      <button class="carousel__nav carosuel__next" @click.prevent="next"></button>
      <div class="carousel__pagination">
          <button v-for="n in slidesCount" :key="n.id"
          @click="goto(n-1)" :class="{active : n-1 === index}"></button>
      </div>
  </div>
</template>

<script>
export default {
  name:'carousel-main',
  data : function(){
      return {
          index: 0,
          slides: [],
          direction: null,
          timer: null
      }
  },
  mounted: function(){
    this.slides = this.$children;
    this.slides.forEach((slide, i) => {
        slide.index = i
    })
    this.startRotation();
 },
 computed: {
     slidesCount (){
         return this.slides.length
     }
 },
 ready: function () {
        this.startRotation();
    },
 methods: {
     startRotation: function() {
            console.log('start');
            this.timer = setInterval(this.next, 4000);
        },
     next (){
         this.index += 1;
         this.direction = 'right';
         if ( this.index >= this.slidesCount){
             this.index = 0
         }
     },
     prev () {
         this.index -= 1
         this.direction = 'left';
         if(this.index < 0){
             this.index = this.slidesCount - 1
         }
     },
     goto(index){
         this.direction = index > this.index ? 'right' : 'left';
         this.index = index;
     }
 }
}
</script>


<style lang="scss">
.carousel{
    overflow: hidden;
    position: relative;
    &__nav{
        position: absolute;
        top: 50%;
        left: 10px;
        background: url("../../../../static//images/home-page/left-arrow.png");
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 40px;
        height: 100px;
        border-style: none;
        cursor: pointer;
        outline: none;
        transition: all .5s linear;
        &:hover{
            transform: scale(1.2);
        }
    }
    &__nav.carosuel__next{
        right: 10px;
        left: auto;
        background: url('../../../../static//images/home-page/right-arrow.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    &__pagination{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        
        button {
            outline: none;
            flex-grow: 1;
            height: 1.5rem;
            background-color: #ffff;
            opacity: 0.8;
            border-style: none;
            transition: all .5s linear;
            &:hover{
                cursor: pointer;
                background-color:rgb(228, 51, 51);
        }
            &.active{
                background-color: rgb(228, 51, 51);
            }
        }
    }
}



</style>
