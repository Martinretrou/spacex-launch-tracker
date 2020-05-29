<template>
  <div class="section next-launch">
    <div class="next-launch-content">
      <h2>Next launch</h2>
      <div v-if="launch" class="launch">
        <img
          v-if="launch.links.mission_patch"
          :src="launch.links.mission_patch"
          class="launch-badge"
        />

        <p class="launch-name">
          <mark>#{{ launch.flight_number }}</mark>
          <b>{{ launch.mission_name }}</b>
        </p>
        <p class="launch-date">
          Date: {{ $moment(launch.launch_date_utc).format('DD/MM/YYYY') }}
        </p>
        <p class="launch-rocket">Rocket: {{ launch.rocket.rocket_name }}</p>
        <p class="launch-site">Site: {{ launch.launch_site.site_name_long }}</p>
        <!-- <p class="launch-site">Details: {{ launch.details }}</p> -->
        <div class="ctas">
          <a
            v-if="launch.links.video_link"
            :href="launch.links.video_link"
            class="btn ghost-white"
          >
            Live stream
          </a>
          <a
            v-if="launch.links.presskit"
            :href="launch.links.presskit"
            class="btn ghost-white"
          >
            Press Kit
          </a>
        </div>
      </div>
    </div>
    <div
      :style="{
        'background-image':
          'url(' + require('~/assets/img/png/hero_bg.png') + ')'
      }"
      class="img"
    ></div>
    <div class="fade-black" />
  </div>
</template>

<script>
export default {
  name: 'NextLaunch',
  props: ['launch'],
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="scss">
.next-launch {
  position: relative;
  padding: 0;
  height: 90vh;
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  &-content {
    margin-top: 5vh;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    height: 90vh;
    max-height: 300px;
    z-index: 2;
  }
  .ctas {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    a + a {
      margin-top: 15px;
    }
  }
  .img {
    margin-top: -10vh;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }
  h2 {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 2em;
  }
  mark {
    background-color: transparent;
    color: $white;
    font-weight: bold;
    opacity: 0.5;
  }
  p + p {
    margin-top: 8px;
  }
  .fade-black {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 3;
  }
  .launch-badge {
    max-width: 33vw;
    margin-bottom: 0.5em;
  }
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    height: auto;
  }
}
</style>
