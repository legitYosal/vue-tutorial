<template>
    <v-container>
    <div id="evployee-table">
<!--         <p
            v-if="employees.length < 1" class="empty-table"
        >No employees</p>            
       <table v-else>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody 
                is="transition-group"
                name="rowtrans"
                @enter="enter"
                @beforeEnter="beforeEnter"
                @leave="leave"
                :css="false"
            >
                <tr v-for="(employee, index) in employees" class="employee-table" :key="employee.id">
                    <td v-if="editing === employee.id">
                        <div>
                        <input type="text" v-model="employee.name" name="edit-name">
                        </div>
                    </td>
                    <td v-else> 
                        <div>
                        {{ employee.name }}                             
                        </div>
                    </td>
                    <td v-if="editing === employee.id">
                        <div>
                        <input type="email" v-model="employee.email" name="edit-email">
                        </div>
                    </td>
                    <td v-else> 
                        <div>
                        {{ employee.email }}                             
                        </div>
                    </td>
                    <td v-if="editing !== employee.id">
                        <div class="buttom-group">
                            <button
                                @click="handleDelete(employee.id, index)"
                            >Delete</button>                                
                            <button
                                id="editing"
                                @click="editMode(employee.id)"
                            >Edit</button>
                        </div>
                    </td>
                    <td v-else>
                        <div class="buttom-group">
                            <button id="editing" @click="editEmployee(employee)">Save</button>
                            <button id="editing" class="muted-button" @click="editing = null">Cancel</button>
                        </div>
                    </td>
                </tr>
            </tbody>
       </table>
 -->
    <v-data-table
        :headers="headers"
        :items="employees"
        :items-per-page="100"
        class="elevation-1"
        hide-default-footer
        :css="false"

    >
        <template v-slot:body="props">
        <tbody 
            name="velocity-anime" 
            is="transition-group"
            @enter="enter"
            @beforeEnter="beforeEnter"
            @leave="leave"
        >
          <template >
          <tr class="employee-table" v-for="(item, index) in props.items" :key="item.id">
            <td>
                <div>
                    {{item.name}}
                </div>
            </td>
            <td>
                <div>
                    {{item.email}}
                </div>
            </td>
            <td>
                <div class="buttom-group">
                <v-icon
                    small
                    @click="handleDelete(item.id, index)"
                >
                mdi-delete
                </v-icon> 
                </div>
            </td>
           </tr>
            </template>
      </tbody>
      </template>
    </v-data-table>
    </div>
    </v-container>

</template>

<script>
    // if (process.client)
    // import Velocity from 'velocity-animate'
    // if (process.client) 
    if (process.browser) {
        const Velocity = require('velocity-animate').default
    }
    export default {
        name: 'employee-table',
        props: {
            employees: Array,
        },
        data() {
            return {
                editing: null,
                show: 1,
                wait: true,
                ptb: '0px', // padding top
                mh: '50px',   // maximom height
                headers: [
                    {
                        text: 'Name',
                        align: 'center',
                        sortable: false,
                        value: 'name'
                    },
                    {
                        text: 'Email',
                        sortable: false,
                        align: 'center',
                        value: 'email'
                    },
                    {
                        text: 'Actions',
                        align: 'center',
                        sortable: false,
                        value: 'actions'
                    }
                ]
            }
        },
        methods: {
            editMode(id) {
                this.editing = id
            },
            editEmployee(new_employee) {
                if (new_employee.name === '' || new_employee.email === '') return
                this.employees = this.employees.map(
                    employee => employee.id === new_employee.id ? new_employee : employee
                )
                this.editing = null
            },
            handleDelete(id, index) {
                fetch('http://127.0.0.1:3600/users/' + id, {
                    method: 'delete'
                }).then((result) => {
                    result.json().then((data) => {
                        if (data.errors) {
                            console.log('handle this situachion bro its not good loocking')
                        } else {
                            this.employees.splice(index, 1)
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                }).catch((err) => {
                    console.log(err)
                })
            },
            beforeEnter(el) {
                let divs = el.querySelectorAll('div')
                for (let i = 0; i < divs.length; i++) {
                    divs[i].style.maxHeight = '0px'
                    divs[i].style.paddingTop = '0px'
                    divs[i].style.paddingBottom = '0px'
                }
            },
            enter(el, done) {
                console.log('hello')
                // if (!process.client) return;
                let divs = el.querySelectorAll('div')
                Velocity (
                    divs,
                    { maxHeight: this.mh, paddingTop: this.ptb, paddingBottom: this.ptb },
                    { duration: 600, complete: done }
                )
            },
            leave(el, done) {
                // if (!process.client) return;
                let divs = el.querySelectorAll('div')
                Velocity (
                    divs,
                    { maxHeight: '0px', paddingTop: '0px', paddingBottom: '0px' },
                    { duration: 600, complete: done }
                )
            }

        }
    }
</script>
    
<style>

    td, th {
        text-align: center;
    }
    .buttom-group {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
        overflow: auto;
        /*background-color: #234244;*/
    }

    button {
        margin-left: 1rem;
        margin-right: 1rem;
        /*background: #07889B;*/
        /*border: 1px solid #07889B;*/
        float: left;       
        /*width: 100%;*/
        /*display: none;*/
    }

    .empty-table {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        font-style: italic;
    }
    input {
        max-width: 170px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .employee-table td div {
        max-height: 50px;
        overflow: hidden;
    }
    table {
        table-layout: fixed;
    }


    @media screen and (max-device-width: 620px) {
        #editing {
            display: none;
        }
    }
</style>