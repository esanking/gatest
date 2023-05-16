<template>
    <div>
       query id: {{ id}}

       <button @click="$router.go(-1)">go back</button>
    </div>
</template>
<script>
    export default({
        data() {
            return{
                id:null
            }
        },
        created() {
            this.id = this.$route.query.id
        }
    })
</script>