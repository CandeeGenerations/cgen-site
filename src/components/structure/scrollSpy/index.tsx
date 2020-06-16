import React, {useEffect} from 'react'

type Props = {
  activeNavClass: string
  children: React.ReactNode
  className: string
  headerBackground: string
  scrollDuration?: string
  scrollTargetIds: string[]
}

const ScrollspyNav = (props: Props): JSX.Element => {
  const scrollDuration = Number(props.scrollDuration) || 1000
  const headerBackground = props.headerBackground === 'true'

  const easeInOutQuad = (
    currentTime: number,
    start: number,
    change: number,
    duration: number,
  ): number => {
    currentTime /= duration / 2

    if (currentTime < 1) {
      return (change / 2) * currentTime * currentTime + start
    }

    currentTime--

    return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start
  }

  const scrollTo = (start: number, to: number, duration: number): void => {
    const change = to - start
    const increment = 10
    let currentTime = 0
    const animateScroll = (): void => {
      currentTime += increment

      const val = easeInOutQuad(currentTime, start, change, duration)

      window.scrollTo(0, val)

      if (currentTime < duration) {
        setTimeout(animateScroll, increment)
      }
    }

    animateScroll()
  }

  const getNavLinkElement = (sectionID: string): Element | null =>
    document.querySelector(`a[href='/${sectionID}']`)

  const getNavToSectionID = (navHref: string | null): string =>
    navHref?.includes('/') ? navHref.replace('/', '') : ''

  const clearOtherNavLinkActiveStyle = (excludeSectionID: string): void => {
    props.scrollTargetIds.map((sectionID): void => {
      if (sectionID !== excludeSectionID) {
        getNavLinkElement(sectionID)?.classList?.remove(props.activeNavClass)
        getNavLinkElement(sectionID)?.parentElement?.classList?.remove(
          props.activeNavClass,
        )
      }
    })
  }

  useEffect(() => {
    if (document.querySelector(`a[href='/']`)) {
      document
        .querySelector(`a[href='/']`)
        ?.addEventListener('click', event => {
          event.preventDefault()
          scrollTo(window.pageYOffset, 0, scrollDuration)
          window.location.hash = ''
        })
    }

    const listElement = document.querySelector("div[data-nav='list']")

    if (listElement) {
      listElement.querySelectorAll('a').forEach((navLink: Element) => {
        navLink.addEventListener('click', event => {
          event.preventDefault()

          const sectionID = getNavToSectionID(navLink.getAttribute('href'))

          if (sectionID) {
            const scrollTargetPosition =
              document.getElementById(sectionID)?.offsetTop ||
              0 -
                (headerBackground
                  ? document.querySelector("div[data-nav='list']")
                      ?.scrollHeight || 0
                  : 0)
            scrollTo(window.pageYOffset, scrollTargetPosition, scrollDuration)
          } else {
            scrollTo(window.pageYOffset, 0, scrollDuration)
          }
        })
      })
    }

    window.addEventListener('scroll', () => {
      let scrollSectionOffsetTop

      props.scrollTargetIds.map((sectionID, index) => {
        scrollSectionOffsetTop =
          document.getElementById(sectionID)?.offsetTop ||
          0 -
            (headerBackground
              ? document.querySelector("div[data-nav='list']")?.scrollHeight ||
                0
              : 0)

        if (
          window.pageYOffset >= scrollSectionOffsetTop &&
          window.pageYOffset <
            scrollSectionOffsetTop +
              (document.getElementById(sectionID)?.scrollHeight || 0)
        ) {
          getNavLinkElement(sectionID)?.classList.add(props.activeNavClass)
          getNavLinkElement(sectionID)?.parentElement?.classList.add(
            props.activeNavClass,
          )
          clearOtherNavLinkActiveStyle(sectionID)
        } else {
          getNavLinkElement(sectionID)?.classList.remove(props.activeNavClass)
          getNavLinkElement(sectionID)?.parentElement?.classList.remove(
            props.activeNavClass,
          )
        }

        if (
          window.innerHeight + window.pageYOffset >=
            document.body.scrollHeight &&
          index === props.scrollTargetIds.length - 1
        ) {
          getNavLinkElement(sectionID)?.classList.add(props.activeNavClass)
          getNavLinkElement(sectionID)?.parentElement?.classList.add(
            props.activeNavClass,
          )
          clearOtherNavLinkActiveStyle(sectionID)
        }
      })
    })
  }, [])

  return (
    <div className={props.className} data-nav="list">
      {props.children}
    </div>
  )
}

export default ScrollspyNav
