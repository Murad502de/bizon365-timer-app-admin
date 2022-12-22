<template lang="pug">
.webinar-detail-page
  v-card.webinar-detail-page__card(
    max-width="1000",
    min-width="800",
    elevation="7"
  )
    .webinar-detail-page__card--head
      v-list-item-title.text-h5.webinar-detail-page__title Вебинар
      .webinar-detail-page__card--actions
        v-btn.webinar-detail-page__card--actions-item(
          color="blue",
          width="128",
          height="36",
          @click="back"
        ) Назад
        v-btn.mr-4.webinar-detail-page__card--actions-item(
          color="success",
          width="128",
          height="36",
          :disabled="!valid",
          @click="save"
        ) Сохранить

    .webinar-detail-page__card--body
      v-form.webinar-detail-page__webinar-info(
        ref="form",
        v-model="valid",
        lazy-validation
      )
        v-text-field.webinar-detail-page__form-input(
          v-model="webinarName",
          label="Название вебинара",
          variant="outlined",
          color="blue",
          required,
          :rules="webinarNameRules"
        )
        v-text-field.webinar-detail-page__form-input(
          v-model="webinarCode",
          label="Идентификационный номер вебинара",
          variant="outlined",
          color="blue",
          required,
          :rules="webinarCodeRules"
        )

      .webinar-detail-page__gifts
        .webinar-detail-page__gifts--head
          v-list-item-title.text-h6.webinar-detail-page__gifts-title Подарки
          v-btn.mx-2(color="indigo", @click="addGift") Добавить

        .webinar-detail-page__gifts--body
          v-card.webinar-detail-page__gift(
            v-for="(gift, index) in gifts",
            :key="index",
            max-width="900",
            min-width="700",
            elevation="3"
          )
            .webinar-detail-page__gift--name Подарок {{ index }}
            .webinar-detail-page__gift--actions
              v-btn(
                icon,
                elevation="0",
                height="32",
                width="32",
                @click="editGift"
              )
                v-icon.webinar-detail-page__gift--actions_edit(color="#607d8b") mdi-pencil

              v-btn(
                icon,
                elevation="0",
                height="32",
                width="32",
                @click="deleteGift"
              )
                v-icon.webinar-detail-page__gift--actions_delete(
                  color="#ff5252"
                ) mdi-delete

  v-dialog(v-model="deleteDialog", max-width="500")
    v-card
      v-card-title.text-h5 Подтверждение удаления
      v-card-text Вы действительно хотите удалить данный подарок "Подарок 123"?
      v-card-actions
        v-spacer
        v-btn(color="green darken-1", text, @click="deleteDialog = false") Отменить
        v-btn(color="error darken-1", text, @click="deleteDialog = false") Удалить

  v-dialog(v-model="escapeDialog", max-width="500")
    v-card
      v-card-title.text-h5 Подтверждение ухода
      v-card-text Вы действительно хотите вернуться к списку вебинаров? Внимание, все несохранённые изменения будут удалены.
      v-card-actions
        v-spacer
        v-btn(color="green darken-1", text, @click="escapeDialog = false") Отменить
        v-btn(color="error darken-1", text, @click="approveBack") Назад
</template>

<script>
export default {
  components: {},

  props: {},
  data() {
    return {
      deleteDialog: false,
      escapeDialog: false,
      valid: true,
      webinarName: "",
      webinarNameRules: [(v) => !!v || "Обязательно к заполненнию"],
      webinarCode: "",
      webinarCodeRules: [(v) => !!v || "Обязательно к заполненнию"],

      gifts: [{}, {}, {}],
    };
  },
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    back() {
      console.debug("webinar/back"); //DELETE

      this.escapeDialog = true;
    },
    approveBack() {
      console.debug("webinar/approveBack"); //DELETE

      this.escapeDialog = false;
      this.$router.push({ name: "index" });
    },
    save() {
      console.debug("webinar/save"); //DELETE
    },
    addGift() {
      console.debug("webinar/addGift"); //DELETE
    },
    editGift() {
      console.debug("webinar/editGift"); //DELETE
    },
    deleteGift() {
      console.debug("webinar/deleteGift"); //DELETE

      this.deleteDialog = true;
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug("Webinar", this.$route); //DELETE
  },
  mounted() {},
};
</script>

<style lang="scss">
.webinar-detail-page {
  box-sizing: border-box;
  padding: 24px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;

  &__form {
    &-input {
      margin-top: 8px;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  &__card {
    padding: 24px;

    &--head {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-between;
      align-items: center;
    }

    &--body {
      margin-top: 32px;
    }

    &--actions {
      &-item {
        margin: 0 !important;

        margin-left: 14px !important;

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  &__gifts {
    box-sizing: border-box;
    margin-top: 32px;

    &--head {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-between;
      align-items: center;
    }

    &--body {
      margin-top: 24px;
    }
  }
  &__gift {
    padding: 14px;
    margin-top: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    &:first-child {
      margin-top: 0;
    }

    &--name {
      flex: 1;
    }

    &--actions {
      &_delete {
        // margin-left: 14px;
        cursor: pointer;
      }
      &_edit {
        cursor: pointer;
      }
    }
  }
}
</style>