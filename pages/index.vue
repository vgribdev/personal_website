<template lang="pug">
.main-container
    .main-page
        .header
            .small-line
            img(src="favicon.png")
            .long-line
        .main-content
            h1 Hi, I'm Valentin!
            span A Full-Stack Developer based in London, England
        .footer
            .long-line
            .socials-container
                a.social.linkedin(href="https://www.linkedin.com/in/vgrib/")
                a.social.github(href="https://github.com/vgribdev")
                a.social.instagram(href="https://www.instagram.com/vgribdev/")
            .small-line

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const DELAY = 5000

type Image = {
    url: string
}

@Component({
    name: 'index',
})
export default class App extends Vue {
    mounted() {}
}
</script>

<style lang="sass">
$icon-size: 26px

=flexbox($justify, $align, $direction)
    display: flex
    justify-content: $justify
    align-items: $align
    flex-direction: $direction

.social:not(:first-child)
    margin-left: 10px

.social:not(:last-child)
    margin-right: 10px

.social
    cursor: pointer
    height: $icon-size
    width: $icon-size
    background-image: url('../static/img/socials.svg')
    background-repeat: no-repeat
    background-size: $icon-size ($icon-size * 3)
    transition: opacity .25s ease
    &:hover
        opacity: 0.6

.small-line, .long-line
    height: 2px
    border-radius: 1px
    background-color: rgba(#ffffff, 0.8)

.small-line
    width: 60px

.long-line
    min-width: 100px

.main-container
    overflow: hidden
    position: relative
    font-size: 18px
    height: 100vh
    +flexbox(center, center, column)
    background-color: #1a2029
    color: #ffffff
    padding: 0 18px

    .main-page
        position: relative
        min-height: 100%
        width: 100%
        +flexbox(center, center, column)

        .main-content
            +flexbox(center, center, column)
            h1
                font-size: 64px
            span
                color: rgba(#ffffff, 0.9)
                margin-top: 32px
                font-size: 22px
                text-transform: uppercase

        .header, .footer
            position: absolute
            +flexbox(center, center, row)
            flex-wrap: nowrap
            width: 100%

        .header
            top: 32px
            display: grid
            grid-template-columns: auto auto 1fr
            grid-gap: 12px
            img
                width: auto
                height: $icon-size * 1.3

        .footer
            bottom: 32px
            display: grid
            grid-template-columns: 1fr auto auto
            grid-gap: 12px

            .socials-container
                +flexbox(center, center, row)
                flex-wrap: nowrap

                .linkedin
                    background-position: center 1px

                .github
                    background-position: center ($icon-size * -1)

                .instagram
                    background-position: center ($icon-size * -2)
</style>
