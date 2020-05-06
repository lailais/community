const omit = _.omit

  function getData (str) {
    try {
      return JSON.parse(str)
    } catch (e) {
      return str
    }
  }

  function trackEvent (options) {
    if (typeof window.analytics === 'undefined' || window.analytics === null ||
      !options) { return }
    const { event } = options
    options = omit(options, 'event')
    const params = Object.assign({}, {
      product: 'bump',
      platform: $.deviceType,
      appBrowserView: $.isInApp,
      currentURL: $.requestUrl
    }, options)
    return window.analytics.track(event, params)
  }

  const trackingElementHandler = ({ target: element }) => {
    if (!element.dataset || !element.dataset.track) {
      element = element.closest('[data-track]')
    }

    if (!element || !element.dataset || !element.dataset.track) {
      return
    }

    trackEvent(getData(element.dataset.track))
  }

  function onListener () {
    document.removeEventListener('click', trackingElementHandler)
    document.addEventListener('click', trackingElementHandler)
  }

  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    onListener();
  } else {
  document.addEventListener("DOMContentLoaded", onListener);
  }