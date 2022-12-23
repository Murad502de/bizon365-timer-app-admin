<template lang="pug">
v-app
  v-btn.layout-default__logout(
    icon,
    elevation="1",
    height="48",
    width="48",
    @click="signout"
  )
    v-icon(color="#607d8b") mdi-logout
  .layout-default__main
    slot
</template>

<script>
export default {
  components: {},

  props: {},
  data: () => ({
    signoutDialog: false,
  }),
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    signout() {
      console.debug("layout/default/methods/signout"); //DELETE
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug("layout/default/created"); //DELETE
  },
  mounted() {
    console.debug("layout/default/mounted"); //DELETE
  },
};
</script>

<style lang="scss">
.layout-default {
  &__logout {
    position: fixed;
    top: 12px;
    right: 24px;
  }
  &__main {
    margin-top: 48px;
  }
}
</style>