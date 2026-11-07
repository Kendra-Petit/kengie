<template>
    <div class="Textarea" :class="{ error, dark }">
        <textarea ref="textarea" :value="value" :name="name" :placeholder="placeholder" :readonly="readonly"
            :disabled="disabled" :rows="rows" :class="{ filled, focused }" v-on="inputListeners" />
        <Transition name="fade" :duration="500">
            <span v-if="error" class="Error" :style="{ fontSize: '12px', color: 'red' }">
                {{ error }}
            </span>
        </Transition>
    </div>
</template>

<script>
import VueTypes from 'vue-types'
import { merge } from 'lodash'

export default {
    name: 'Textarea',
    props: {
        error: VueTypes.string.def(''),
        name: VueTypes.string.isRequired,
        placeholder: VueTypes.string.def(''),
        readonly: VueTypes.bool.def(false),
        disabled: VueTypes.bool.def(false),
        resizable: VueTypes.bool.def(false),
        dark: VueTypes.bool.def(false),
        rows: VueTypes.number.def(3),
        value: VueTypes.oneOfType([String, Number]),
    },
    data() {
        return {
            focused: false,
        }
    },
    computed: {
        inputListeners() {
            return merge({}, this.$listeners, {
                input: (event) => {
                    if (this.resizable) this.resizeTextarea(event)
                    this.$emit('input', event.target.value, this.id)
                },
                focus: (event) => {
                    this.$emit('onFocus', event.target.value, this.id)
                    this.activeFocus()
                },
                blur: (event) => {
                    this.$emit('onBlur', event.target.value, this.id)
                    this.deactiveFocus()
                },
            })
        },
        filled() {
            return (this.value || '').length > 0
        },
    },
    mounted() {
        if (this.resizable) {
            this.$nextTick(() => this.setHeight(this.$refs.textarea))
        }
    },
    methods: {
        resizeTextarea(event) {
            this.$refs.textarea.style.height = 'auto'
            this.setHeight(event.target)
        },
        setHeight({ scrollHeight }) {
            this.$refs.textarea.setAttribute('style', `height: ${scrollHeight}px;overflow-y: hidden;`)
        },
        activeFocus() {
            this.focused = true
        },
        deactiveFocus() {
            this.focused = false
        },
    },
}
</script>

<style scoped lang="scss">
@import '@/theme/_variables.scss';

textarea {
    width: 100%;
    min-height: 50px;
    // margin-bottom: 16px;
    resize: none;
    padding: 15px 20px;
    border-radius: 10px;
    border: 1px solid $primary;
    background-color: transparent;
    color: $primary;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    transition: box-shadow 0.3s ease-in-out;

    &:focus {
        box-shadow: inset 0 0 0 1px rgba(77, 101, 84, 0.5);
    }

    &[readonly] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: $gray-05;
        color: $gray-03;
        box-shadow: none;
    }
}

.Textarea {
    position: relative;

    &.error {
        textarea {
            box-shadow: inset 0 0 0 2px tomato;
        }
    }

    &.dark {
        .Label {
            color: $primary !important;
        }

        &:not(.error) {
            textarea {
                box-shadow: none;
            }
        }

        .Error {
            color: tomato;
        }
    }
}

.Error {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 16px;
}
</style>
