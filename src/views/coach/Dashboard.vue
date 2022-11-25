<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Dashboard</h1>
      </div>
    </div>
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="subtitle">My programs</h1>
      </div>
    </div>
    <div v-if="coachprograms" class="columns is-multiline">
      <div v-for="program in coachprograms" v-bind:key="program.id" class="column is-4">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content">
                <p
                  class="title is-4"
                >{{program.coach.user.first_name}} {{program.coach.user.last_name}}</p>
                <p class="subtitle is-6">{{program.coach.user.username}}</p>
              </div>
            </div>

            <div class="content">
              <!-- <h1 v-if="coachAuth === 'True'">COach je</h1> -->
              <h1>{{program.name}}</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">{{program.date_created}}</time>
              <h3>{{program.price}}$</h3>
              <button class="button">
                <router-link :to="{ name: 'Program', params: {id: program.id}}">See details</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>There is no programs yet</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      coachprograms: []
    };
  },
  computed: {
    coachAuth() {
        const isAuth = this.$store.getters.coachAuth
        return isAuth
    },   
  },
  methods: {
    async getPrograms() {
      this.$store.commit("setIsLoading", true);

      axios
        .get("/backend/api_coafro/coach_programs" , { headers: { Authorization: `Bearer ${this.$store.state.token}` }})
        .then(response => {
          this.coachprograms = response.data;
        })
        .catch(error => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    }
  },
  mounted() {
    this.getPrograms();
  }
};
</script>