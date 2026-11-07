<template>
    <div class="HomepageScreen">
        <!-- <img class="flowers 1" :src="require('@/assets/imgs/flowers/1.png')" /> -->
        <Cover />
        <div class="Block">
            <img class="Flowers Intro" :src="require('@/assets/imgs/flowers/5.png')" />
            <div class="Wrapper">
                <Intro class="pt-4 pb-4" />
            </div>
        </div>
        <div class="Block reverse">
            <!-- <img class="Flowers PlanningRight" :src="require('@/assets/imgs/flowers/4.png')" />
            <img class="Flowers PlanningLeft" :src="require('@/assets/imgs/flowers/4.png')" /> -->
            <div class="Wrapper">
                <Divider :style="{ transform: 'translateY(-4px)', 'margin-top': 0 }" />
                <Planning class="mt-2 pb-2" />
                <!-- <Divider class="mt-2" /> -->
            </div>
        </div>
        <div class="Block">
            <Venue class="pt-3" />
        </div>
        <div class="Block reverse">
            <div class="Wrapper">
                <!-- <Divider class="mt-2" /> -->
            </div>

            <Sleepover class="mt-2 pt-3" />
            <div class="Wrapper">
                <!-- <Divider class="mt-2" /> -->
            </div>
        </div>
        <div class="Block">
            <img class="Flowers Town" :src="require('@/assets/imgs/flowers/6.png')" />
            <!-- <img class="Flowers Town2" :src="require('@/assets/imgs/flowers/7.png')" /> -->
            <div class="Wrapper">
                <Town class="pt-3 pb-1" />
            </div>
        </div>
        <div class="Block reverse">
            <div class="Wrapper">
                <!-- <Divider class="mt-2" /> -->
                <Transport class="pt-3 pb-1" />
                <!-- <Divider class="mt-2" /> -->

            </div>
        </div>
        <div class="Block">
            <div class="Wrapper">
                <ExtraInfo class="pt-3 pb-1" />
            </div>
        </div>
        <div class="Block reverse">
            <div class="Wrapper">
                <Divider class="mt-2" :style="{ transform: 'translateY(-4px)' }" />
                <Invite :guests="guests" class="pt-2 pb-2" />
            </div>
        </div>
        <div class="Block fill">
            <!-- <img class="Flowers ConfirmForm" :src="require('@/assets/imgs/flowers/1.png')" /> -->

            <div class="Wrapper">
                <!-- <Divider class="" /> -->
                <ConfirmForm :guests="guests" :code="code" :guestsList="guestsList" class="pt-3 pb-2" />
            </div>
        </div>
        <!-- <div class="Block">
            <div class="Wrapper">
                <Gift class="pt-3 pb-2" />
            </div>
        </div> -->
        <div class="Block">
            <img class="Flowers LoveStory" :src="require('@/assets/imgs/flowers/girasol.png')" />

            <div class="Wrapper">
                <!-- <Divider class="mt-2" /> -->
            </div>
            <LoveStory class="pt-3 " />
        </div>
        <div class="Block pb-4">
            <div class="Wrapper">
                <FinalCover class="mt-2" />
            </div>
        </div>
    </div>
</template>

<script>
import { Divider } from '@/components'
import {
    Cover, Intro, Planning, Venue, Sleepover, Town, Transport, ExtraInfo, Invite, ConfirmForm, LoveStory, FinalCover, // Gift
} from './components'
import { GUESTS_LIST } from '@/utils/guestsList.js'

const BASE_CODE = 1007

export default {
    name: 'HomepageScreen',
    components: {
        Divider,
        Cover,
        Intro,
        Planning,
        Venue,
        Sleepover,
        Town,
        Transport,
        ExtraInfo,
        Invite,
        ConfirmForm,
        LoveStory,
        FinalCover,
        // Gift
    },
    data() {
        const list = Object.keys(GUESTS_LIST)
            .sort((a, b) => Number(a) - Number(b))
            .flatMap(key => GUESTS_LIST[key])

        // console.log(list)
        return {
            activeTab: '',
            invites: {},
            guests: [],
            code: '',
            guestsList: list,
        }
    },
    mounted() {
        Object.keys(GUESTS_LIST).forEach(k => this.invites[`${BASE_CODE}${k}`] = GUESTS_LIST[k])
        const { code } = this.$route.params || {}

        if (code && this.invites?.[code]) {
            this.code = code
            this.guests = this.invites[code]
        } else {
            this.$router.push({
                name: '404',
            })
        }
    },
}
</script>
<style lang="scss" scoped>
@import "@/theme/_variables.scss";
@import '@/theme/_breakpoints.scss';

.HomepageScreen {
    width: auto;
    overflow: hidden;
    transition: all .5s ease-in-out;
    background-color: $white;
    background-image:
        linear-gradient(90deg,
            rgba(164, 195, 155, 0.12) 50%,
            transparent 50%),
        linear-gradient(0deg,
            rgba(164, 195, 155, 0.12) 50%,
            transparent 50%);
    background-size: 22px 22px;


    .Block {
        position: relative;

        .Flowers {
            position: absolute;

            &.Intro {
                bottom: 0;
                left: 0;
                height: 15rem;
                // right: -20px;
                // transform: rotate(-20deg);
                // scaleX(-1)
            }

            &.PlanningRight {
                height: 30rem;
                right: -6rem;
                top: 5rem;
                transform: rotate(-6deg);
            }

            &.PlanningLeft {
                height: 30rem;
                left: -6rem;
                bottom: 10rem;
                transform: rotate(6deg);
            }

            &.Town {
                height: 10rem;
                right: 2rem;
                // top: 20%
            }

            // &.Town2 {
            //     height: 15rem;
            //     bottom: -1rem;
            //     right: -2rem;
            //     transform: rotate(-20deg) scaleX(-1);
            // }

            &.ConfirmForm {
                top: -10rem;
                left: -2rem;
                height: 18rem;
                transform: rotate(20deg) scaleX(-1);
                opacity: .8;

                @media (max-width: $md) {
                    top: -4.5rem;
                    left: -2.5rem;
                    height: 10rem;
                    transform: rotate(28deg);
                }
            }

            &.LoveStory {
                height: 15rem;
                right: -2rem;
                top: -2.5rem;

                @media (max-width: $sm) {
                    height: 9rem;
                    top: 1rem;
                    right: -2.5rem;
                }
            }
        }

    }

    .reverse {
        background: $body-bg-reverse;
    }

    .fill {
        background: #EFF4ED;
    }



    .Wrapper {
        margin: 0 auto;
        max-width: 85%;
        margin-inline: auto;

        @media (min-width: $sm) {
            max-width: 540px;
        }

        @media (min-width: $md) {
            max-width: 700px;
        }

        @media (min-width: $lg) {
            max-width: 920px;
        }

        @media (min-width: $xl) {
            max-width: 1088px;
        }
    }

    .mt-2 {
        margin-top: 2rem
    }

    .mt-4 {
        margin-top: 4rem
    }

    .mt-7 {
        margin-top: 7rem;

        @media (max-width: $sm) {
            margin-top: 5rem;
        }
    }

    .pb-4 {
        padding-bottom: 4rem
    }

    .pt-2 {
        padding-top: 2rem
    }

    .pb-1 {
        padding-bottom: 1rem
    }

    .pb-2 {
        padding-bottom: 2rem
    }

    .pt-3 {
        padding-top: 3rem
    }

    .pt-4 {
        padding-top: 4rem
    }
}
</style>
