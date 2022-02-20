import { onMounted, onUnmounted, onUpdated } from 'vue'

export function useActiveSidebarLinks(container, marker) {
    const throttleAndDebounce = (fn, delay) => {
        let timeout = null;
        let called = false
        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
            if (!called) {
                fn()
                called = true
                setTimeout(() => {
                    called = false
                }, delay)
            } else {
                timeout = setTimeout(fn, delay)
            }
        }
    }
    const onScroll = throttleAndDebounce(setActiveLink, 150)
    function setActiveLink() {
        const sidebarLinks = getSidebarLinks()
        const anchors = getAnchors(sidebarLinks)

        if (
            anchors.length &&
            window.scrollY + window.innerHeight === document.body.offsetHeight
        ) {
            activateLink(anchors[anchors.length - 1].hash)
            return
        }
        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i]
            const nextAnchor = anchors[i + 1]
            const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor)
            if (isActive) {
                history.replaceState(
                    null,
                    document.title,
                    hash ? hash : ' '
                )
                activateLink(hash)
                return
            }
        }
    }

    let prevActiveLink = null

    function activateLink(hash) {
        deactiveLink(prevActiveLink)

        const activeLink = (prevActiveLink =
            hash == null
                ? null
                : (container.value.querySelector(
                    `.toc-item a[href="${decodeURIComponent(hash)}"]`
                )))
        if (activeLink) {
            activeLink.classList.add('active')
            marker.value.style.opacity = '1'
            marker.value.style.top = `${activeLink.offsetTop}px`
        } else {
            marker.value.style.opacity = '0'
            marker.value.style.top = '33px'
        }
    }

    function deactiveLink(link) {
        link && link.classList.remove('active')
    }

    function getSidebarLinks() {
        return Array.from(
            container.value.querySelectorAll('.toc-content .toc-link')
        )
    }

    function getAnchors(sidebarLinks) {
        return (
            Array.from(
                document.querySelectorAll('.page .container .content .header-anchor')
            )
        ).filter((anchor) =>
            sidebarLinks.some((sidebarLink) => sidebarLink.hash === anchor.hash)
        )
    }

    function getPageOffset() {
        return (document.querySelector('.nav-bar')).offsetHeight
    }
    function getAnchorTop(anchor) {
        const pageOffset = getPageOffset()
        try {
            return anchor.parentElement.offsetTop - pageOffset - 15
        } catch (e) {
            return 0
        }
    }

    function isAnchorActive(index, anchor, nextAnchor) {
        const scrollTop = window.scrollY
        if (index === 0 && scrollTop === 0) {
            return [true, null]
        }
        if (scrollTop < getAnchorTop(anchor)) {
            return [false, null]
        }
        if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
            return [true, decodeURIComponent(anchor.hash)]
        }
        return [false, null]
    }

    onMounted(() => {
        window.requestAnimationFrame(setActiveLink)
        window.addEventListener('scroll', onScroll)
    })

    onUpdated(() => {
        activateLink(location.hash)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })
}
