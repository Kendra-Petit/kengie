<template>
    <div class="PillSelectorInput">
        <p v-if="label" class="Label">
            {{ label }}
        </p>
        <p v-if="extraLabel" class="ExtraLabel">
            {{ extraLabel }}
        </p>
        <div class="OptionGroup" :class="[`border-${border}`, { rounded }]">
            <!-- <Spinner :visible="addLoading && Object.keys(options).length === 0" color="white" small /> -->
            <template v-if="!addLoading || Object.keys(options).length !== 0">
                <a v-for="({ key: theKey, abbreviation, label: optionLabel, id, icon, color }, key) in options"
                    :key="theKey" class="Option"
                    :class="{ selected: isOptionSelected(id || theKey, key, value), useIcons, [color]: color, highlighted: highlightReference ? !!isOptionReference(id) : false }"
                    @click.prevent="handleOptionClick(key, id, theKey)">
                    <Icon v-if="icon && useIcons" :icon="icon" :color="color" :size="16" />
                    {{ useKeysAsLabels ? abbreviation : optionLabel }}
                </a>
            </template>
        </div>
    </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
    name: 'PillSelectorInput',
    props: {
        label: VueTypes.string,
        extraLabel: VueTypes.string,
        value: VueTypes.oneOfType([
            VueTypes.number,
            VueTypes.string,
            VueTypes.arrayOf(VueTypes.oneOfType([VueTypes.number, VueTypes.string])),
        ]).optional,
        options: VueTypes.oneOfType([Array, Object]),
        multiple: VueTypes.bool.def(false),
        rounded: VueTypes.bool.def(false),
        preventDeselect: VueTypes.bool.def(false),
        useKeysAsLabels: VueTypes.bool.def(false),
        border: VueTypes.oneOf(['gray', 'gray-dark', 'danger', 'primary', 'none']).optional,
        useIcons: VueTypes.bool.def(false),
        addLoading: VueTypes.bool.def(true),
        highlightReference: VueTypes.array,
    },
    computed: {
        actualIsMultiple() {
            const { value, multiple } = this
            return multiple || Array.isArray(value)
        },
    },
    methods: {
        isOptionReference(key) {
            return this.highlightReference.find(u => {
                return u.positionId === key
            })
        },
        isOptionSelected(key, otherKey, value) {
            const { actualIsMultiple } = this
            if (this.useIcons) return otherKey === value
            else return actualIsMultiple ? (value || []).includes(key) : key === value
        },
        handleOptionClick(key, id, theKey) {
            const currentKey = id || theKey
            const { value, actualIsMultiple } = this
            if (actualIsMultiple) {
                const values = value || []
                this.$emit('input', values.includes(currentKey) ? values.filter(v => v !== currentKey) : [...values, currentKey])
            } else {
                if (this.preventDeselect) {
                    if (this.useIcons) this.$emit('input', key)
                    else this.$emit('input', currentKey)
                } else {
                    if (this.useIcons) this.$emit('input', key === value ? undefined : key)
                    else this.$emit('input', currentKey === value ? undefined : currentKey)
                }
            }
        },
    },
}
</script>

<style scoped lang="scss">
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.PillSelectorInput {
    display: inline-block;
    width: 100%;
}

.Label {
    margin: 0 16px 16px 0;
    color: $primary;
    font-weight: $font-weight-semibold;

    @media screen and (max-width: $md) {
        margin: 0 16px 16px 0;
        font-size: 1rem; //14px;
    }
}

.ExtraLabel {
    margin: 0 16px 12px 0;
    color: $primary;
    font-weight: $font-weight-normal;

    @media screen and (max-width: $md) {
        margin: 0 16px 12px 0;
        font-size: 1rem; //14px;
    }
}

.OptionGroup {
    background-color: $white;
    transition: all 0.3s;
    border-radius: 20px;
    padding: 0 7px 7px 7px;
    display: flex;
    flex-wrap: wrap;

    .Spinner {
        margin: 7px;
    }

    .Option+.Option {
        margin-left: 4px;
    }

    &.rounded {
        border-radius: 50px;
    }

}

.border-gray {
    border: 1px solid $gray-05
}

.border-gray-dark {
    border: 1px solid $gray-04
}

.border-danger {
    border: 1px solid $danger
}

.border-primary {
    border: 1px solid $primary !important;
}

.border-none {
    border: none
}

.Option {
    margin-top: 7px;
    display: inline-block;
    padding: 9px 16px;
    border-radius: 50px;
    font-size: 1rem; //14px;
    color: $primary;
    background-color: rgba($primary, 0.05);
    font-weight: $font-weight-semibold;
    transition: all 0.3s;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;

    @media screen and (max-width: $md) {
        padding: 7px 12px;
    }

    .Icon {
        margin-right: 5px;
    }

    &.highlighted {
        border: 1px solid $primary;
    }

    &.selected,
    &:hover {
        font-weight: $font-weight-semibold;
        color: $white;
    }

    &:hover {
        background-color: rgba($primary, 0.7);
    }

    &.selected {
        background-color: $primary;
    }

    &.useIcons {
        background-color: rgba($gray-07, .5) !important;
        color: $gray-dark;

        &:hover,
        &.selected {
            background-color: $primary !important;
            color: $white;

            .Icon {
                transition: all .1s ease-in-out;
                color: white !important
            }

            &.success,
            &.error,
            &.error,
            &.info,
            &.warning,
            &.grayDark {
                color: white;

                .Icon {
                    transition: all .1s ease-in-out;
                    color: white !important
                }
            }

            &.success {
                background-color: $success !important
            }

            &.error {
                background-color: $danger !important
            }

            &.info {
                background-color: $info !important
            }

            &.grayDark {
                background-color: $gray-dark !important
            }

            &.warning {
                background-color: $warning !important;
                color: $gray-dark !important;

                &:hover {
                    .Icon {
                        color: $white !important
                    }
                }
            }
        }
    }
}
</style>
