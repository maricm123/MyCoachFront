<template>
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <strong>MyCoach</strong>
            </router-link>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <!-- <router-link to="/" class="navbar-item">Programs </router-link> -->


                <div class="navbar-item">
                    <div class="buttons">
                        <template v-if="!$store.state.isAuthenticated">
                            <router-link to="/sign-up" class="button is-success"><strong>Sign up</strong></router-link>
                            <router-link to="/log-in" class="button is-light">Log in</router-link>
                        </template>
                        
                        <template v-else>
                            <router-link to="/coach/my-account" class="button is-info"> MyAccount</router-link>
                            <router-link to="/coach/dashboard" class="button is-info"> MyDashboard </router-link> 
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>
