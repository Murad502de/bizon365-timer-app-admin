<template lang="pug">
.webinar-detail-page
  v-card.webinar-detail-page__card(max-width="800", elevation="7")
    .webinar-detail-page__card--head
      v-list-item-title.text-h5.webinar-detail-page__title {{ webinarName }}
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
          :disabled="!webinarValid",
          @click="save"
        ) Сохранить

    .webinar-detail-page__card--body
      v-form.webinar-detail-page__webinar-info(
        ref="form",
        v-model="webinarValid",
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

  v-dialog(v-model="giftDeleteDialog", max-width="500")
    v-card
      v-card-title.text-h5 Подтверждение удаления
      v-card-text Вы действительно хотите удалить данный подарок "Подарок 123"?
      v-card-actions
        v-spacer
        v-btn(color="green darken-1", text, @click="giftDeleteDialog = false") Отменить
        v-btn(color="error darken-1", text, @click="giftDeleteDialog = false") Удалить

  v-dialog(v-model="webinarEscapeDialog", max-width="500")
    v-card
      v-card-title.text-h5 Подтверждение ухода
      v-card-text Вы действительно хотите вернуться к списку вебинаров? Внимание, все несохранённые изменения будут удалены.
      v-card-actions
        v-spacer
        v-btn(
          color="green darken-1",
          text,
          @click="webinarEscapeDialog = false"
        ) Отменить
        v-btn(color="error darken-1", text, @click="approveBack") Назад

  v-dialog(v-model="giftDetailDialog", max-width="700")
    v-card
      v-card-title.text-h5 {{ giftDetailName }}
      v-form.webinar-detail-page__gift-detail(
        ref="form",
        v-model="giftDetailValid",
        lazy-validation
      )
        v-row
          v-col
            v-text-field.webinar-detail-page__form-input(
              v-model="giftDetailName",
              label="Название подарка",
              variant="outlined",
              color="blue",
              required,
              :rules="giftDetailNameRules"
            )

        v-row
          v-col
            v-text-field.webinar-detail-page__form-input(
              v-model="giftDetailQueueNumber",
              label="Порядковый номер в очереди",
              variant="outlined",
              color="blue",
              required,
              :rules="giftDetailQueueNumberRules"
            )

          v-col
            v-text-field.webinar-detail-page__form-input(
              v-model="giftDetailDelay",
              label="Задержка в выдаче в секундах",
              variant="outlined",
              color="blue",
              required,
              :rules="giftDetailDelayRules"
            )
        v-row
          v-col
            v-text-field.webinar-detail-page__form-input(
              v-model="giftDetailLink",
              label="Ссылка на скачивание",
              variant="outlined",
              color="blue",
              required,
              :rules="giftDetailLinkRules"
            )
      v-card-actions
        v-spacer
        v-btn(color="error darken-1", text, @click="cancelGiftDetailDialog") Отменить
        v-btn(color="green darken-1", text, @click="saveGiftDetailDialog") Сохранить
</template>

<script>
export default {
  components: {},

  props: {},
  data() {
    return {
      webinarValid: true,
      webinarEscapeDialog: false,

      webinarName: "",
      webinarNameRules: [(v) => !!v || "Обязательно к заполненнию"],
      webinarCode: "",
      webinarCodeRules: [(v) => !!v || "Обязательно к заполненнию"],

      giftDeleteDialog: false,
      giftDetailDialog: false,
      giftDetailValid: true,

      giftDetailNew: false,
      giftDetailName: "",
      giftDetailNameRules: [(v) => !!v || "Обязательно к заполненнию"],
      giftDetailQueueNumber: "",
      giftDetailQueueNumberRules: [(v) => !!v || "Обязательно к заполненнию"],
      giftDetailDelay: "",
      giftDetailDelayRules: [(v) => !!v || "Обязательно к заполненнию"],
      giftDetailLink: "",
      giftDetailLinkRules: [(v) => !!v || "Обязательно к заполненнию"],

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

      this.webinarEscapeDialog = true;
    },
    approveBack() {
      console.debug("webinar/approveBack"); //DELETE

      this.webinarEscapeDialog = false;
      this.$router.push({ name: "index" });
    },
    save() {
      console.debug("webinar/save"); //DELETE
    },
    addGift() {
      console.debug("webinar/addGift"); //DELETE

      this.giftDetailNew = true;
      this.giftDetailDialog = true;
    },
    editGift() {
      console.debug("webinar/editGift"); //DELETE

      this.giftDetailNew = false;
      this.giftDetailDialog = true;
    },
    cancelGiftDetailDialog() {
      console.debug("webinar/cancelGiftDetailDialog"); //DELETE

      this.giftDetailDialog = false;
    },
    saveGiftDetailDialog() {
      console.debug("webinar/saveGiftDetailDialog"); //DELETE

      this.giftDetailDialog = false;

      if (this.giftDetailNew) {
        console.debug("webinar/saveGiftDetailDialog/AddNewGift"); //DELETE
      } else {
        console.debug("webinar/saveGiftDetailDialog/EditGift"); //DELETE
      }
    },
    deleteGift() {
      console.debug("webinar/deleteGift"); //DELETE

      this.giftDeleteDialog = true;
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
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-between;
      align-items: center;
    }

    &--body {
      flex: 1;
      margin-top: 32px;
    }

    &--actions {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: center;

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

    &-detail {
      box-sizing: border-box;
      margin-top: 48px;
      padding: 0 24px;
    }
  }
}
</style>