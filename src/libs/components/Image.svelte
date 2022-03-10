<script lang="ts">
    import { useDarkMode } from '$libs/stores/index'
    // your script goes here
    const darkMode = $useDarkMode ? true : false;
    export const classes: string = ""
    export const srcSetDark: string = ""
    export const srcDark: string = ""
    export const srcSet: string = ""
    export const src: string = ""
    export const alt: string = ""
</script>

<img
class={classes}
srcSet={darkMode ? srcSetDark : srcSet}
src={darkMode ? srcDark : src}
alt={alt}
/>