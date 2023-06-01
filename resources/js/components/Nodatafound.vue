<template>
    <tbody>
        <tr>
            <td :colspan="colspan" class="text-center">
                <h4 class="text-muted py-3">No data found!</h4>
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
