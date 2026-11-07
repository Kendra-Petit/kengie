<template>
    <div class="NotFoundScreen">
        <h1>
            404
        </h1>
        <h1>
            Esta URL no es válida
        </h1>
        <Cover />
    </div>
</template>

<script>
import { Cover } from './components'
export default {
    name: 'NotFoundScreen',
    components: {
        Cover,
    }
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";

.NotFoundScreen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 125px);
    width: auto;
    overflow: hidden;
    transition: all .5s ease-in-out;
    background-image:
        repeating-linear-gradient(0deg,
            transparent 0 15px,
            rgba(164, 195, 155, 0.12) 15px 30px),
        repeating-linear-gradient(90deg,
            transparent 0 15px,
            rgba(164, 195, 155, 0.12) 15px 30px);

    h1 {
        color: $primary;
        font-size: 5rem;
    }

}
</style>
