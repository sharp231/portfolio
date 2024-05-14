import { onMounted, onUnmounted, ref } from 'vue'

export default function useScrollAnimation() {
    const time = ref(0.4)
    const value = ref(0.4)
    let parent = null
    let childs = []

    const scrollAnimation = () => {
        const elePos = parent.offsetTop
        const scroll = window.scrollY
        const windowHeight = window.innerHeight

        if (scroll > elePos - windowHeight && !parent.classList.contains('play')) {
            childs.forEach(child => {
                if (child.classList.contains('fedeUp')) {
                    child.classList.add('play')
                    child.style.animationDelay = `${value.value}s`
                    child.classList.add('fedeUp')
                    value.value += time.value
                    if (childs.indexOf(child) === childs.length - 1) {
                        parent.classList.remove('play')
                    }
                }
            })
        } else {
            childs.forEach((child) => {
                child.classList.remove('fedeUp')
            })
            value.value = time.value
        }
    }

    onMounted(() => {
        parent = document.querySelector('.delayScroll')
        childs = Array.from(parent.children)
        scrollAnimation()
        window.addEventListener('scroll', scrollAnimation)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', scrollAnimation)
    })

    return {
        time,
        value,
        scrollAnimation
    }
}