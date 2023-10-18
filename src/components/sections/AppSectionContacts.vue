<template>
  <section class="contacts">
    <app-container>
      <h2 class="contacts__title">Get news and updates</h2>
      <div class="contacts__inner">
        <div class="contacts__info">
          <form class="contacts__form">
            <input placeholder="E-mail" class="contacts__input" />
            <button class="contacts__btn">GO</button>
          </form>
          <p class="contacts__text">
            By signing up you agree to receive updates and marketing messages (e.g. email, social,
            etc.) from Meta about Meta’s existing and future products and services. <br />
            You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe
            link included in our messages. <br />
            Your subscription is subject to the Terms and Privacy Policy.
          </p>
        </div>
        <a href="mailto:oculusshop@gmail.com" class="contacts__email">oculusshop@gmail.com</a>
      </div>
    </app-container>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.contacts {
  margin-bottom: 100px;
}
.contacts__title {
  font-size: 24px;
  margin-bottom: 10px;
}
.contacts__inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.contacts__form {
  margin-bottom: 10px;
  position: relative;
  height: 52px;
}
.contacts__input {
  /* padding-bottom: 20px; */
  outline: none;
  border: none;
  border-bottom: 1px solid #cacad6;
  padding: 20px 70px 20px 2px;
  width: 100%;
}
.contacts__btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #cacad6;
  position: absolute;
  right: 0;
  bottom: 5px;
}

.contacts__text {
  /* padding-right: 12px; */
  font-size: 13px;
}

.contacts__email {
  align-self: end;
  justify-self: end;
}

@media (max-width: 720px) {
  .contacts__inner {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
</style>
