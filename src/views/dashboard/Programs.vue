<template>
    <div class="container">
        <h1 class="title">Programs</h1>
        <div v-if="programs" class="columns is-multiline">
            <div v-for="program in programs" v-bind:key="program.id" class="column is-4">
                <div class="card">
                <div class="card-content">
                    <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{program.coach.user.first_name}} {{program.coach.user.last_name}} </p>
                        <p class="subtitle is-6">{{program.coach.user.username}}</p>
                    </div>
                    </div>

                    <div class="content">
                        <h1>{{program.name}}</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br>
                    <time datetime="2016-1-1">{{program.date_created}}</time>
                    <h3>{{program.price}}$</h3>
                    <button class="button">See details</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div v-else>There is no programs yet</div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Programs',
        data() {
            return {
                programs:[]
            }
        },
        methods: {
            async getPrograms() {
                this.$store.commit('setIsLoading', true)


                axios
                    .get('/backend/api_coafro/programs', )
                    .then(response => {
                        console.log(response.data)
                        this.programs = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })


                this.$store.commit('setIsLoading', false)


            }
        },
        mounted() {
            this.getPrograms()
        }
    }
</script>