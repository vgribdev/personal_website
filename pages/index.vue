<template lang="pug">
.main-container
    .blur-cover
        img(v-for="(image, index) in images" :src="imageUrl(image)" :class="imageClasses(index)")
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
    name: 'index'
})
export default class App extends Vue {
    lastImage = 0
    visibleImage = 0

    images: Image[] = [
        { url: '/img/one.jpg' },
        { url: '/img/two.jpg' },
        { url: '/img/three.jpg' },
        { url: '/img/four.jpg' },
        { url: '/img/five.jpg' }
    ]

    imageUrl(image: Image) {
        return image.url
    }

    imageClasses(index: number) {
        const array = ['visible1','visible2']
        return {
            [array[Math.floor(Math.random() * array.length)]]: index === this.visibleImage || index === this.lastImage,
            top: index === this.visibleImage
        }
    }

    mounted() {
        setInterval(() => {
            this.lastImage = this.visibleImage
            // if it is the last image we restart from 0, else we increment it by 1
            this.visibleImage = this.visibleImage === this.images.length - 1 ? 0 : this.visibleImage + 1
            // Hide last image after a short delay.
            this.lastImage = -1
        }, DELAY)
    }
}
</script>

<style lang="sass">

$icon-size: 26px
$blur-level: 5px

=flexbox($justify, $align, $direction)
    display: flex
    justify-content: $justify
    align-items: $align
    flex-direction: $direction

.social:not(:first-child)
    margin-left: .5em

.social:not(:last-child)
    margin-right: .5em

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
    height: 0.16em
    border-radius: .2em
    background-color: rgba(#ffffff, 0.8)
    margin: 0 1em

.small-line
    width: 8em
    
.long-line
    min-width: 1em
    flex: 1 1

.main-container
    overflow: hidden
    position: relative
    font-family: 'Nunito Sans'
    font-size: 1em
    height: 100vh
    +flexbox(center, center, column)
    background-color: #000000
    color: #ffffff
    @media (max-width: 768px)
        font-size: .8em
    @media (max-width: 450px)
        font-size: .6em
    @media (max-width: 360px)
        font-size: .45em

    .blur-cover
        position: absolute
        top: $blur-level * -2
        bottom: $blur-level * -2
        left: $blur-level * -2
        right: $blur-level * -2
        +flexbox(center, center, column)
        filter: blur($blur-level)

        img
            transition: opacity 25s ease
            height: auto
            min-height: 100vh
            position: absolute
            display: none
            opacity: 0
            width: 120%
            @media (max-width: 1160px)
                height: 100%
                width: auto

            &.visible1 ,&.visible2
                display: block
                opacity: 1
                z-index: 1

            &.visible1
                animation: bg-1 45s linear infinite
            &.visible2
                animation: bg-2 45s linear infinite

            &.top1, &.top2
                z-index: 2

    .main-page
        position: relative
        min-height: 100%
        width: 100%
        +flexbox(center, center, column)

        .main-content
            +flexbox(center, center, column)

            h1
                font-size: 5em
            span
                color: rgba(#ffffff, 0.6)
                margin-top: 0.8em
                font-size: 1.1em
                text-transform: uppercase
                letter-spacing: 0.08em

        .header, .footer
            position: absolute
            +flexbox(center, center, row)
            flex-wrap: nowrap
            width: 85%

        .header
            top: 4em
            
            img
                width: auto
                height: $icon-size * 1.3

        .footer
            bottom: 4em

            .socials-container
                +flexbox(center, center, row)
                flex-wrap: nowrap

                .linkedin
                    background-position: center 1px

                .github
                    background-position: center ($icon-size * -1)

                .instagram
                    background-position: center ($icon-size * -2)

@keyframes bg-1
    0%
        transform: translateX(0)
    100%
        transform: translateX(25%)

@keyframes bg-2
    0%
        transform: translateX(0)
    100%
        transform: translateX(-25%)

</style>
