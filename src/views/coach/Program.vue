<template>
    <div class="container">
        <div class="column is-multiline">
            <div class="column is-12">
                <h1 class="title">Name: {{program.name}}</h1>
                <router-link to="/" class="button is-light">Edit </router-link>
            </div>

            <div class="column is-6">
                <div class="box">
                    <h2 class="subtitle">Details</h2>
                    <p><strong>Category:</strong>{{program.category}}</p>
                    <p><strong>Price:</strong>  {{program.price}}</p>
                    <p><strong>Date published:</strong>   {{program.date_created}}</p>
                </div>
            </div>
            <div class="column is-6">
                <div class="box">
                    <h2 class="subtitle">Contact information</h2>
                    <p><strong>Email:</strong>{{}}</p>
                    <p><strong>Phone:</strong>{{}}</p>
                    <p><strong>Instagram:</strong>{{}}</p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'axios'
export default {
    name: "Program",
    data() {
        return {
            program: {}
        }
    },
    computed: {
        
    },
    methods: {
        async getProgram() {
            this.$store.commit('setIsLoading',true)

            const programId = this.$route.params.id

            axios
                .get(`/backend/api_coafro/programs/${programId}/`)
                .then(response => {
                    console.log(response)
                    this.program = response.data
                })
                .catch(error => {
                    console.log(error)
                })


            this.$store.commit('setIsLoading', false)
        }
    },
    mounted() {
        this.getProgram()
    }
}
</script>