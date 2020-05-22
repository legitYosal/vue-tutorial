<template>
    <div id="employee-index">
        <!-- <routing-top-nav/> -->
        <h1>Employees</h1>
        <employee-form
            v-bind:employees="employees"
        />
        <employee-table
            v-bind:employees="employees"
        />          
    </div>
</template>

<script>
    import EmployeeTable from '~/components/EmployeeTable'
    import EmployeeForm from '~/components/EmployeeForm'
    // import RoutingTopNav from '@/components/RoutingTopNav'

    export default {
        name: 'employee',
        // props: {
        //     employee_slug: String,
        // },
        components: {
            // RoutingTopNav,
            EmployeeTable,
            EmployeeForm,
        },
        data() {
            return {
                employees:  [
                ],
            }
        },
        methods: {
            getEmployees() {
                fetch(
                    'http://127.0.0.1:3600/users?limit=20?page=0'
                ).then((result) => {
                    result.json().then((data) => {
                        this.employees = data
                    }).catch((err) => {
                        console.log(err)
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }

        },
        mounted() {
            this.getEmployees()
        }
    }

</script>

<style></style>