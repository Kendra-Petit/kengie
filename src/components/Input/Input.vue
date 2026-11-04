<template>
    <div
        class="Input"
        :class="{ error }"
    >
        <Icon
            v-if="iconLeft && !error"
            class="iconLeft"
            :icon="iconLeft"
            :color="iconColor"
            :size="18"
        />
        <Icon
            v-if="iconRight && !error"
            class="iconRight"
            :icon="iconRight"
            :color="iconColor"
            :size="18"
        />
        <input
            ref="input"
            :value="value"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :class="inputClass"
            v-on="inputListeners"
        >

        <Transition
            name="fade"
            :duration="500"
        >
            <span
                v-if="error"
                class="Error"
                :style="{ fontSize: '12px', color: 'red'}"
            >
                {{ error }}
            </span>
        </Transition>
    </div>
</template>

<script>
import VueTypes from 'vue-types'
import { merge } from 'lodash'
import Icon from '@/components/Icon/Icon.vue'

const TYPES = [
    'text',
    'password',
    'email',
    'number',
    'url',
    'tel',
    'search',
    'range',
    'color',
    'date',
    'time',
    'datetime',
    'datetime-local',
    'month',
    'week',
]
export default {
    name: 'Input',
    props: {
        error: VueTypes.string.def(''),
        name: VueTypes.string.isRequired,
        placeholder: VueTypes.string.def(''),
        readonly: VueTypes.bool.def(false),
        disabled: VueTypes.bool.def(false),
        type: VueTypes.oneOf(TYPES).isRequired,
        align: VueTypes.oneOf(['left', 'right', 'center']).def('left'),
        value: VueTypes.oneOfType([String, Number]),
        iconRight: VueTypes.string.def(''),
        iconLeft: VueTypes.string.def(''),
        iconColor: VueTypes.oneOf([
            'white',
            'primary',
            'secondary',
            'dark',
            'grayMedium',
            'black',
            'yellow',
        ]).def('dark'),
    },
    components: {
        Icon,
    },
    computed: {
        inputClass () {
            return [this.align]
        },
        inputListeners () {
            return merge({}, this.$listeners, {
                input: (event) => {
                    const { value } = event.target
                    this.$emit('input', value)
                },
            })
        },
    },
    methods: {
        focus () {
            this.$refs.input.focus()
        },
    },
}
</script>

<style scoped lang="scss">
@import "@/theme/_variables.scss";

input {
    width: 100%;
    min-height: 35px;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    background: $white;
    color: $form-color;
    font-size: 16px;
    font-weight: 400;
    transition: border-color 0.5s ease-in-out;

    // &::-moz-placeholder, &::-webkit-input-placeholder, &::-moz-placeholder, &:-moz-placeholder, &:-ms-input-placeholder {
    //     color: tomato;
    // }

    &:focus {
        box-shadow: inset 0 0 0 2px $gray-05;
        outline: none;
    }
    &[readonly] {
        opacity: 0.5;
        cursor: not-allowed;
	}
	&:disabled {
        background-color: $gray-light;
        cursor: not-allowed;
    }
    &.right {
        text-align: right;
    }
    &.center {
        text-align: center;
    }
    &.left {
        text-align: left;
    }
}

.Input {
    position: relative;
    &.error {
        input {
            border-color: red;
        }
    }
}

.Icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.iconRight {
        right: 12px;
        ~input {
            padding-right: 40px;
        }
    }
    &.iconLeft {
        left: 12px;
        ~input {
            padding-left: 40px;
        }
    }
}

.Error {
    position: absolute;
    top: $form-height + 5px;
    left: 5px;
}
</style>
