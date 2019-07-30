<template lang="pug">
    #home(:style="{color: textColor}")
        .main
            h1.title Hi I'm Valentin
            h3.subtitle I'm a Full Stack Developer based in London, England.
            .icons
                a(href="https://www.instagram.com/gribvalentin/")
                    linkedin-logo.icons__icon(:color='textColor')
                a(href="https://www.linkedin.com/in/vgrib/")
                    instagram-logo.icons__icon.icons__icon--instagram(:color='textColor')
            h5.credits Credits: Unsplash{{ author ? `, Author: ${author}.` : '.' }}

        #bg
            div(v-for="(image, index) in images" :style="imageStyle(image)" :class="imageClasses(index)")
</template>

<script>
    import InstagramLogo from '../components/icons/instagram-logo'
    import LinkedinLogo from '../components/icons/linkedin-logo'

    const DELAY = 8000
    export default {
        components: { InstagramLogo, LinkedinLogo },
        methods: {
            imageStyle(image) {
                return {
                    backgroundImage: `url(${image.url})`,
                    backgroundPosition: 'center'
                }
            },
            imageClasses(index) {
                return {
                    visible: index === this.visibleImage || index === this.lastImage,
                    top: index === this.visibleImage
                }
            }
        },
        computed: {
            textColor() {
                return this.images[this.visibleImage].textColor
            },
            author() {
                return this.images[this.visibleImage].author
            }
        },
        data() {
            return {
                lastImage: 0,
                visibleImage: 0,
                images: [
                    { url: '/img/img1.jpg', author: 'Ales Nesetril', textColor: '#ffffff' },
                    { url: '/img/img2.jpg', author: 'Émile Perron', textColor: '#000000' },
                    { url: '/img/img3.jpg', textColor: '#000000' }
                ]
            }
        },
        mounted() {
            setInterval(() => {
                this.lastImage = this.visibleImage
                // if it is the last image we restart from 0, else we increment it by 1
                this.visibleImage = this.visibleImage === this.images.length - 1 ? 0 : this.visibleImage + 1
                // Hide last image after a short delay.
                setTimeout(() => {
                    this.lastImage = -1
                }, DELAY / 3)
            }, DELAY)

        }
    }
</script>

<style lang="sass">
=max-width-tablet()
    @media (max-width: 768px)
        @content

.main
    width: 70%
    +max-width-tablet
        width: 100%

.title
    font-size: 80px
    +max-width-tablet
        font-size: 60px

.subtitle
    margin-top: 45px
    font-size: 50px
    margin-bottom: 24px
    +max-width-tablet
        margin-top: 27px
        font-size: 40px

.credits
    margin-top: 12px
    font-size: 15px
    padding-left: 2px
    opacity: .7

.icons
    padding-left: 4px

    &__icon
        cursor: pointer
        width: 24px
        height: 24px
        opacity: .7

        &:hover
            opacity: 1

        &--instagram
            margin-left: 12px
// Image translation animation
@keyframes bg
    0%
        transform: translateX(0)

    100%
        transform: translateX(-25%)

#home
    padding: 20vh 4vw 10vh 4vw
    +max-width-tablet
        padding: 5em 1.25em 1.25em 1.25em

    *
        z-index: 2
        position: relative

#bg
    transition: opacity 2s ease-in-out
    height: 100%
    left: 0
    position: fixed
    top: 0
    width: 100%
    z-index: 1

    div
        transition: opacity 3s ease, visibility 3s
        background-size: cover
        height: 100%
        left: 0
        position: absolute
        top: 0
        visibility: hidden
        opacity: 0
        width: 150%

        &.visible
            animation: bg 45s linear infinite
            visibility: visible
            opacity: 1
            z-index: 1

            &.top
                z-index: 2

            +max-width-tablet
                animation: bg #{45s * 0.65} linear infinite


</style>
