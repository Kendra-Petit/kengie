<template>
    <div class="HomepageScreen">
        <Cover />
        <div class="Block">
            <div class="Wrapper">
                <Intro class="pt-4" />
            </div>
        </div>
        <div class="Block reverse">
            <div class="Wrapper">
                <Divider />
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
            <div class="Wrapper">
                <Town class="pt-3" />
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
                <Divider class="mt-2" />
                <Invite class="mt-2 pt-3 pb-1" />
                <Divider class="mt-2" />
            </div>
        </div>
        <div class="Block">
            <div class="Wrapper">
                <ConfirmForm class="pt-3" />
            </div>
        </div>
        <div class="Block reverse">
            <div class="Wrapper">
                <!-- <Divider class="mt-2" /> -->
            </div>
            <LoveStory class="pt-3 mt-2" />
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
    Cover, Intro, Planning, Venue, Sleepover, Town, Transport, ExtraInfo, Invite, ConfirmForm, LoveStory, FinalCover
} from './components'

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
        FinalCover
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
    background-image:
        repeating-linear-gradient(0deg,
            transparent 0 15px,
            rgba(164, 195, 155, 0.12) 15px 30px),
        repeating-linear-gradient(90deg,
            transparent 0 15px,
            rgba(164, 195, 155, 0.12) 15px 30px);

    // background-image:
    //     repeating-linear-gradient(0deg,
    //         transparent 0 30px,
    //         rgba(164, 195, 155, 0.16) 30px 45px),
    //     repeating-linear-gradient(90deg,
    //         transparent 0 30px,
    //         rgba(164, 195, 155, 0.16) 30px 45px);

    .Block {
        // background: $body-bg;
        // .vichy-background {
        // background-color: #fff;
    }

    .reverse {
        background: $body-bg-reverse;
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
