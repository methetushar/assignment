<template>
    <tbody>
    <tr>
        <td :colspan="colspan" class="text-center">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </td>
    </tr>
    </tbody>
</template>

<script>
    export default {
        name: "DataLoader",
        props: ['colspan']
    }
</script>

<style scoped>

</style>
