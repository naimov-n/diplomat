<template>
    <div>
        <layoutsHeader  v-if="$route.path != '/'"/>
        <layoutsPageHeader v-if="$route.path != '/'"/>
        <Nuxt />        
        <layoutsFooter/>
    </div>
</template>

<script>
export default {
    mounted() {
       
    }
}
</script>