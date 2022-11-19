<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="colummn is-12">
                <h1 class="title">Add programs</h1>



                <!-- MOZDA CU KORISTITI AKO ZA COACHA PREBACIM SVE NA FRONT STRANU -->

                <div class="colummn is-12">
                    <form @submit.prevent="submitForm">

                        <div class="field">
                            <label>Program</label>
                            <div class="control">
                                <input type="text" class="input" v-model="name">
                            </div>
                        </div>

                        <div class="field">
                            <label>Price</label>
                            <div class="control">
                                <input type="text" class="input" v-model="price">
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button class="button is-success">Submit</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    </div>
            

    
</template>

<script>
import axios from 'axios'
export default {
    name: "AddProgram",
    data() {
        return {
            name: '',
            price: ''
        }
    },
    methods: {
        async submitForm() {
            this.$store.commit('setIsLoading', true)
            console.log("SUBMIT FORM")
            const program = {
                name: this.name,
                price: this.price,

            }

            await axios
                .post('/backend/api_coafro/programs/', program)
                .then(response => {
                    console.log(response)

                    this.$router.push('/')
                })
                .catch(error => {
                    console.log(error)
                })

            this.$store.commit('setIsLoading', false)
        }
    }

}
</script>