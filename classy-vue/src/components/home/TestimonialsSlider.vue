<template>
        <section class="testimonials">

            <div v-for="number in [currentNumber]"
       transition="fade" :key="number.id" class="testimonials__layout">
                <div class="testimonials__image circle circle--medium circle--light-blue">
                    <img :src="testimonials[currentNumber].image" alt="">
                </div>
                <h2 class="testimonials__name">{{testimonials[currentNumber].name }}</h2>
                <p class="testimonials__text">{{ testimonials[currentNumber].text }}</p>
                <div class="testimonials__pagination">
                    <button v-for="n in slidesCount" :key="n.id"
                    @click="goto(n-1)" :class="{testActive : n-1 === currentNumber}"></button>
                </div>
            </div>

        </section>
</template>

<script>
export default {
  name: 'testimonials-slider',
  data: function(){
    return{
        testimonials: [
        { 
          name: 'Jane Smith',
        	image: '../../../static/images/home-page/jane-smith.png',
        	text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        { 
          name: 'Dolores McClean',
        	image: '../../../static/images/home-page/jane-smith2.png',
        	text: 'I love the selection of clothes and how many different styles can be found. Their price ranges vary and every costumer group can be found in Zara. Unfortunately, Denmark seems to be behind in the fashion run compared to stores in Spain, Italy and more.'
        }],
        currentNumber: 0,
        timer: null
        }
    },
    computed: {
      slidesCount () {
        return this.testimonials.length
      }
    },
    mounted: function () {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 5000);
        },

        next: function() {
          ( this.slidesCount - 1 == this.currentNumber) ? (this.currentNumber = 0) : (this.currentNumber += 1)
        },
        goto(index){
         this.currentNumber = index;
     }
    }
}
</script>

<style lang="scss">
@import '../../assets/styles/modules/_variables';
@import '../../assets/styles/modules/_mixins';


.testimonials {
  background-color: $sky-blue;
  @include grid-col-3;
  padding: $section-padding;
  &__layout {
    position: relative;
    grid-column: 2 / 3;
    @include grid-col-12;
    text-align: center;
    color: $white;
  }
  &__image {
    grid-column: 6 / 8;
    margin: 0 auto;
  }
  &__name {
    grid-column: 6 / 8;
    font-weight: 600;
  }
  &__text {
    grid-column: 3 / 11;
    font-style: italic;
    line-height: 2;
  }
  &__pagination{
        position: absolute;
        bottom: -1.5rem;
        left: 0;
        right: 0;
        
        button {
            outline: none;
            margin: 0 0.5rem;
            width: 1rem;
            height: 1rem;
            background-color:transparent;
            opacity: 0.8;
            border-radius: 1rem;
            border: 2px solid #ffff;
            transition: all .5s linear;
            &:hover{
                cursor: pointer;
                background-color:#ffff;
        }
            &.testActive{
                background-color: #ffff;
            }
        }
    }
}

.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}
</style>
