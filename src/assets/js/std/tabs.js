export const tabs = (function () {
  const selectors = {
    tabs: ".tabs",
    content: ".tab--content",
    parent: "[js-parent]",
  }
  const actions = {
    active: "active",
    noactive: "hide",
    timer: "timer",
    time: "time",
    timeline: "timeline",
  }

  const tabs = document.querySelectorAll(selectors.tabs)
  let time = null

  if (!tabs.length) return

  tabs.forEach((tabContainer) => {
    for (const [index, tab] of Object.entries(tabContainer.children)) {
      tab.dataset.index = index
    }

    tabContainer.addEventListener("click", (event) => {
      event.preventDefault()

      if (time != null) {
        removeTimeline(tabContainer)
        clearTimeout(time)
        time = null
      }

      const tab = event.target.closest("[data-index]")

      if (!tab) return

      let tabContent = tabContainer.parentElement.querySelector(
        selectors.content
      )

      if (!tabContent) {
        tabContent = tabContainer.closest(selectors.parent)

        if (tabContent) {
          tabContent = tabContent.querySelector(selectors.content)
        }
      }

      if (!tabContent) return

      const activeTab = tabContainer.querySelector(`.${actions.active}`)

      if (activeTab) {
        activeTab.classList.remove(actions.active)
      }

      tab.classList.add(actions.active)

      if (tab.dataset.show) {
        if (tab.dataset.show == "all") {
          for (const content of tabContent.children) {
            if (content.classList.contains(actions.noactive)) {
              content.classList.remove(actions.noactive)
            }
          }
        }
      } else {
        for (const content of tabContent.children) {
          if (!content.classList.contains(actions.noactive)) {
            content.classList.add(actions.noactive)
          }
        }

        tabContent.children[~~tab.dataset.index].classList.remove(
          actions.noactive
        )
      }

      if (tabContainer.classList.contains(actions.timer)) {
        const block = document.createElement("span")
        block.className = actions.timeline
        tab.appendChild(block)
        tab.classList.add(actions.time)

        block.addEventListener("transitionend", () => {
          tabTimer(tab)
        })

        time = setTimeout(() => {
          block.style.width = "100%"
        }, 1000)
      }
    })

    tabContainer.children[0].click()
  })

  function tabTimer(tab) {
    removeTimeline(tab.parentElement)
    tab.classList.remove(actions.time)
    const next = tab.nextElementSibling || tab.parentElement.children[0]
    next.click()
  }

  function removeTimeline(parent) {
    const timeline = parent.querySelector(`.${actions.timeline}`)

    if (timeline) {
      timeline.remove()
    }
  }
})()
