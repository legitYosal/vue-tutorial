<template>
    <v-layout align-center justify-center class="layout-login-card">
    <v-flex sm8 md6 lg3>
    <v-card class="elevation-12">
        <v-card-text>
        <form v-on:submit.prevent="handleSubmit">
            <v-text-field prepend-icon="person" label="employee name" v-model="employee.name" type="text" name="name" ref="first" ></v-text-field>
            <v-text-field prepend-icon="email" label="employee email" v-model="employee.email" type="email" name="email" ></v-text-field>
            <transition name="fade">
            <p
                v-if="error && submiting"
                class="error-message"
            >❗PLEASE FILL OUT REQUIERED FIELDS</p>
            </transition>
            <transition name="fade">
            <p
                v-if="success"
                class="success-message"
            > ✅ successfully added</p>
            </transition>
            <div class="button-div">
                <v-btn v-on:click="handleSubmit" block class="ma-2" outlined color="indigo">Add employee</v-btn>
            </div>
        </form>
        </v-card-text>

    </v-card>
    </v-flex>
    </v-layout>
</template>

<script>

    export default {
        name: 'employee-form',
        props: {
            employees: Array,
        },
        data () {
            return{     
                submiting: false,
                error: false,
                success: false,           
                employee: {
                    name: '',
                    email: '',
                },
            }
        },
        methods: {
            handleSubmit() {
                this.submiting = true
                this.clearStatus()
                if (this.invalidName || this.invalidEmail) {
                    this.error = true
                    setTimeout(this.clearStatus, 2000)
                    return
                }
                fetch('http://127.0.0.1:3600/users', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ...this.employee, 
                        password:'default'
                    })
                }).then((result) => {
                    result.json().then((data) => {
                        // console.log(data)
                        this.employees.splice(0, 0, {...this.employee, ...data})
                        this.$refs.first.focus()
                        this.employee = {
                            name: '',
                            email: '',
                        }
                        this.error = false
                        this.success = true
                        this.submiting = false
                        setTimeout(this.clearStatus, 2000)
                    }).catch((err) => {
                        console.log(err)
                    })
                }).catch((err) => {
                    console.log(err)
                })

            },
            clearStatus() {
                this.success = false
                this.error = false
            }
        },
        computed: {
            invalidName() {
                return this.employee.name === ''
            },
            invalidEmail() {
                return this.employee.email === ''
            },
        },
    }
</script>

<style>
/*    form {
        margin-bottom: 2rem;
    }*/
    .button-div {
        padding-top: 30px;
        display: flex;
        align-content: center;
        justify-content: center;
    }
    [class*='-message'] {
        font-weight: 500;
    }
    .error-message {
        color: #d33c40;
    }
    .success-message {
        color: #32a95d;
    }
    .error-message, .success-message {
        /*background-color: #232334;*/
        position: absolute;
    }
    .fade-enter-active {
      animation: bounce-in .5s;
    }
    .fade-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
</style>