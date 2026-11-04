<template>
    <div class="MainScreen">
        <div id="app">
            <Transition name="main-router" mode="out-in">
                <RouterView />
            </Transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainScreen',
}
</script>

<style lang="scss">
@import "@/theme/_variables.scss";

.MainScreen {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    color: $primary;
    margin: 0;
}
</style>
