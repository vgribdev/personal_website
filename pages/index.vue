<template lang="pug">
.main-container
    .main-page
        .header
            .small-line
            img(src="img/logo.svg" alt='Html tag')
            .long-line
        .main-content
            h1 Hi, I'm Valentin!
            p A Full-stack developer and co-founder of #[a(href="https://docode.it") Docode OÜ] 
        .footer
            .long-line
            .socials-container
                a.social.linkedin(href="https://www.linkedin.com/in/vgrib/" aria-label="Linkedin")
                a.social.github(href="https://github.com/vgribdev" aria-label="Github")
                a.social.instagram(href="https://www.instagram.com/vgribdev/" aria-label="Instagram")
            .small-line

</template>

<script lang="ts">
export default {
    name: 'index'
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
            text-align: center

            h1
                width: 100%
                font-size: 64px
            p
                width: 100%
                color: rgba(#ffffff, 0.7)
                margin-top: 32px
                font-size: 22px
                text-transform: uppercase
                a
                    color: #fff
                    &:visited
                        color: #9a9a9a
            @media (max-width: 450px)
                text-align: left

                h1
                    line-height: 1.2
                    font-size: 52px
                p
                    line-height: 1.4
                    font-size: 18px

        .header, .footer
            position: absolute
            +flexbox(center, center, row)
            flex-wrap: nowrap
            width: 100%
            height: 32px

        .header
            top: 64px
            display: grid
            grid-template-columns: auto auto 1fr
            grid-gap: 12px
            img
                width: 32px
                height: auto

        .footer
            bottom: 64px
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