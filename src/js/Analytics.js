const omit = _.omit;

const getData = str => {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
};

const getLoginUserStage = member => {
    if (!member) {
        return null;
    }
    // send the user stage to segment
    // If the user has a child and want to get pregnant, we should send ['ttc', 'parent']
    // If the user has a child and is pregnant, we should send ['pregnant', 'parent']
    const memberStage = [];
    if (member.is_ttc) {
        memberStage.push("ttc");
    }
    if (member.pregnancy && Object.keys(member.pregnancy).length > 0) {
        memberStage.push("pregnant");
    }
    if (member.born_children && member.born_children.length > 0) {
        memberStage.push("parent");
    }
    if (memberStage.length === 0) return null;
    return String(memberStage);
};

export function trackEvent(options) {
    if (typeof window.analytics === "undefined" || window.analytics === null || !options) {
        return;
    }
    const { event } = options;
    options = omit(options, "event");
    const params = Object.assign(
        {},
        {
            product: "bump",
            platform: $.deviceType,
            appBrowserView: $.isInApp,
            currentURL: $.requestUrl,
            email: $.member && $.member.email,
            stage: getLoginUserStage($.member),
        },
        options,
    );
    return window.analytics.track(event, params);
}

const trackingElementHandler = ({ target: element }) => {
    if (!element.dataset || !element.dataset.track) {
        element = element.closest("[data-track]");
    }

    if (!element || !element.dataset || !element.dataset.track) {
        return;
    }

    trackEvent(getData(element.dataset.track));
};

function onListener() {
    document.removeEventListener("click", trackingElementHandler);
    document.addEventListener("click", trackingElementHandler);
}

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    onListener();
} else {
    document.addEventListener("DOMContentLoaded", onListener);
}
