<template lang="pug">
.webinar-list-page
  v-card.webinar-list-page__card(
    max-width="1000",
    min-width="800",
    elevation="7"
  )
    .webinar-list-page__card--head
      v-list-item-title.text-h5.webinar-list-page__title Вебинары
      v-btn.mr-4.webinar-list-page--add-webinar(
        color="blue",
        width="128",
        height="36",
        @click="addWebinar"
      ) Добавить

    .webinar-list-page__card--body
      .webinar-list-page__list
        v-card.webinar-list-page__list-item(
          v-for="(webinar, index) in webinars",
          :key="index",
          max-width="900",
          min-width="700",
          elevation="3"
        )
          .webinar-list-page__list-item--name name {{ index }}
          .webinar-list-page__list-item--actions
            v-btn(
              icon,
              elevation="0",
              height="32",
              width="32",
              @click="editWebinar"
            )
              v-icon.webinar-list-page__list-item--actions_edit(
                color="#607d8b"
              ) mdi-pencil

            v-btn(
              icon,
              elevation="0",
              height="32",
              width="32",
              @click="deleteWebinar"
            )
              v-icon.webinar-list-page__list-item--actions_delete(
                color="#ff5252"
              ) mdi-delete

  v-dialog(v-model="dialog", max-width="500")
    v-card
      v-card-title.text-h5 Подтверждение удаления
      v-card-text Вы действительно хотите удалить данный вебинар "Вебинар 123", включая все привязанные подарки и их настройки?
      v-card-actions
        v-spacer
        v-btn(color="green darken-1", text, @click="dialog = false") Отменить
        v-btn(color="error darken-1", text, @click="dialog = false") Удалить
</template>

<script>
export default {
  components: {},

  props: {},
  data() {
    return {
      webinars: [{}, {}, {}, {}],
      dialog: false,
    };
  },
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    addWebinar() {
      console.debug("add"); //DELETE

      this.$router.push({
        name: "webinar",
      });
    },
    editWebinar() {
      console.debug("edit"); //DELETE

      this.$router.push({
        name: "webinar",
        query: {
          uuidWebinar: "qwer-asdf-zxcv-lkjhg12",
        },
      });
    },
    deleteWebinar() {
      console.debug("delete"); //

      this.dialog = true;
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug("Webinars/created", this.$route); //DELETE
  },
  mounted() {},
};
</script>

<style lang="scss">
.webinar-list-page {
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

  &--add-webinar {
    margin: 0 !important;
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
  }

  &__list {
    box-sizing: border-box;
    margin-top: 32px;

    &-item {
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
}
</style>