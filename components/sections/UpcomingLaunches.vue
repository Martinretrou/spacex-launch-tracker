<template>
  <div class="section upcoming-launches">
    <h2>Upcoming Launches</h2>
    <ul>
      <li
        :class="{ highlighted: index === activeIndex }"
        v-for="(launch, index) in launches"
        @click="activeIndex = index"
        :key="index"
      >
        <p class="launch-name">
          <mark>#{{ launch.flight_number }}</mark> {{ launch.mission_name }}
        </p>
        <p v-if="index === activeIndex" class="launch-date">
          Date: {{ $moment(launch.launch_date_utc).format('DD/MM/YYYY') }}
        </p>
        <p v-if="index === activeIndex" class="launch-rocket">
          Rocket: {{ launch.rocket.rocket_name }}
        </p>
        <p v-if="index === activeIndex" class="launch-site">
          Site: {{ launch.launch_site.site_name_long }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UpcomingLaunches',
  props: ['launches'],
  data() {
    return {
      activeIndex: 0
    }
  }
}
</script>

<style lang="scss">
.upcoming-launches {
  padding: 15vh 30px 30vh;
  ul {
    list-style: none;
    padding-inline-start: 0;
    padding: 0;
    margin-top: 15px;
    display: flex;
    flex-direction: column;

    li {
      opacity: 0.7;
      font-size: 12px;
      transition: all 150ms ease-in-out;
      &:not(:first-child) {
        margin-top: 8px;
      }
      mark {
        background-color: transparent;
        color: $white;
        font-weight: bold;
        opacity: 0.5;
      }
      &.highlighted {
        opacity: 1;
        font-size: 16px;
        margin: 20px 0;
        .launch {
          &-name {
            margin-bottom: 5px;
          }
          &-date,
          &-rocket,
          &-site {
            font-size: 14px;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
