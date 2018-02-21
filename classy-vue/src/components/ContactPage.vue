<template>
 <div>
  <form v-if="formSent == false" class="contact-form" @submit.prevent="validateBeforeSubmit">
      <h1 class="contact-form__headline">Need help? Get in touch</h1>

        <label class="contact-form__label label">Your Email</label>
            <input class="contact-form__email" name="email" v-model.lazy="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
            <span v-show="errors.has('email')" class="contact-form__error is-danger">{{ errors.first('email') }}</span>
     
        <label class="contact-form__label label">What's on your mind?</label>
            <input class="contact-form__msg" name="msg" v-model.lazy="msg" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('msg') }" type="text" placeholder="Message">
            <span v-show="errors.has('msg')" class="contact-form__error is-danger">{{ errors.first('msg') }}</span>
           
            <button class="contact-form__button btn btn--blue" type="submit">Submit</button>
</form>
<div v-else class="form-submitted">Your message has been sent. <br> We'll be in touch soon.</div>
</div>
  
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

export default {
  name: 'form-example',
  data: () => ({
    email: '',
    msg: '',
    formSent: false
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.formSent = true;
          return;
        };
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/modules/_variables";
@import "../assets/styles/modules/_mixins";

.contact-form{
    display: flex;
    flex-direction: column;
    max-width: 50%;
    margin: 5rem auto;
    &__label{
        font-size: 1.25rem;
        font-weight: 600;
        margin: 3rem 0 1rem;
    }
    &__email, &__msg{
        padding: 0.5rem;
        font-size: 1.25rem;
        border: 1px solid $dark-gray;
    }
    &__msg{
        height: 4rem;;
    }
    &__button{
        margin: 3rem auto;
        width: 200px;
        padding: 0.5rem;
    }
}

.form-submitted{
    text-align: center;
    border: 2px solid $dark;
    font-size: 2rem;
    line-height: 2;
    width: 60%;
    padding: 4rem;
    margin: 5rem auto;

}

.is-danger{
    border: 2px solid rgba(255, 0, 0, 0.562);
}

@include max-width(800px){
    .contact-form{
        max-width: 85%;
    }
}
</style>