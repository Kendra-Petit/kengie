<template>
    <div v-if="isOpen" class="Modal">
        <div class="Dialog">
            <div class="Header">
                <Title v-if="title" :text="title" />
                <slot name="header" />
                <Icon icon="close" class="Close" @click="$emit('close')" />
            </div>
            <div v-if="$slots.body" class="Body">
                <slot name="body" />
            </div>
            <div v-if="$slots.footer" class="Footer">
                <slot name="footer" />
            </div>
        </div>
        <div class="Backdrop" @click="$emit('close')" />
    </div>
</template>

<script>
import VueTypes from 'vue-types'
import { Icon, Title } from '@/components'

export default {
    name: 'Modal',
    components: {
        Icon,
        Title,
    },
    props: {
        isOpen: VueTypes.bool.def(true),
        title: VueTypes.string,
    },
    watch: {
        isOpen(val) {
            if (val) document.body.classList.add('no-scroll')
            else document.body.classList.remove('no-scroll')
        },
    },
    beforeDestroy() {
        document.body.classList.remove('no-scroll')
    },
}
</script>

<style scoped lang="scss">
@import '@/theme/_breakpoints.scss';
@import '@/theme/_variables.scss';

.Modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    z-index: 9996;
    color: $gray-01
}

.Backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($black, 0.8);
    z-index: 9997;
}

.Dialog {
    position: relative;
    width: auto;
    max-width: 100%;
    margin: 0px auto;
    border-radius: 32px;
    background: white;
    box-shadow: 0px 8px 24px rgba($gray-01, 0.2);
    z-index: 9998;

    @media screen and (min-width: $md) {
        max-width: 750px;
        margin: 50px auto;
    }
}

.Close {
    position: absolute;
    top: 40px;
    right: 40px;
    color: $gray-01;
    font-size: 32px;
    opacity: .7;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
}

.Header {
    display: flex;
    align-items: center;
    padding: 40px;

    @media (max-width: $md) {
        padding: 40px 20px 30px 20px;
    }

    .Title {
        color: $gray;
        margin-bottom: 0;
    }
}

.Body {
    padding: 0 40px;
    padding-bottom: 40px;

    @media (max-width: $md) {
        padding: 0 20px;
        padding-bottom: 20px;
    }
}

.Footer {
    padding: 40px;
    padding-bottom: 40px;

    @media (max-width: $md) {
        padding: 0 20px;
        padding-bottom: 40px;
    }
}

.modal-enter-active,
.modal-leave-active {
    .Dialog {
        transition-duration: 0.5s;
        transition-property: opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    }

    .Backdrop {
        transition: opacity 0.5s ease-in-out;
    }
}

.modal-enter,
.modal-leave-to {
    .Backdrop {
        opacity: 0;
    }

    .Dialog {
        opacity: 0;
        transform: translateY(-50px);
    }
}
</style>
