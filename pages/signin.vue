<template lang="pug">
.signin-page
  div {{ myOwnCount }}
  v-card.mx-auto(width="400", elevation="7")
    v-list-item(two-line)
      v-list-item-title.text-h5(align="center") Авторизация

    v-list-item
      v-form.signin-page__form(ref="form", v-model="valid", lazy-validation)
        v-text-field.signin-page__form-input(
          v-model="email",
          :rules="emailRules",
          label="E-mail",
          required,
          variant="outlined",
          color="blue"
        )

        v-text-field.signin-page__form-input(
          v-model="name",
          :rules="nameRules",
          label="Пароль",
          required,
          variant="outlined",
          type="password",
          color="blue"
        )

      .signin-page__form-button
        v-btn.mr-4(
          :disabled="!valid",
          color="blue",
          width="280",
          height="48",
          @click="validate"
        ) Войти
</template>

<script>
import { api } from "@/api/index";
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { useUserStore } from "@/store/UserStore";

export default {
  components: {},

  props: {},
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "Обязательно к заполненнию"],
      email: "",
      emailRules: [
        (v) => !!v || "Обязательно к заполненнию",
        (v) => /.+@.+\..+/.test(v) || "Неверный формат электронной почты",
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
    };
  },
  computed: {
    ...mapState(useUserStore, {
      myOwnCount: "count",
    }),
  },

  watch: {},
  methods: {
    /* STORE */
    ...mapActions(useUserStore, { myOwnIncrement: "increment" }),
    
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    validate() {
      this.myOwnIncrement(); //DELETE

      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug("Signin::api", api); //DELETE
  },
  mounted() {},
};
</script>

<style lang="scss">
.signin-page {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 0 24px;

  & > .v-card {
    padding: 16px;
  }

  &__form {
    margin-top: 20px;
  }
  &__form-input {
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }
  &__form-button {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-top: 8px;

    button {
      width: 280px;
      margin: 0 !important;
    }
  }
}
</style>