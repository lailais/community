export const buildMenuInteractionNavTrackingAttribute = (selection, placement, rest) => {
    return JSON.stringify({
        event: "Menu Interaction",
        product: "bump",
        placement,
        selection,
        ...rest,
    });
};

export const buildMenuInteractionNavTrackingAttributeWithArea = (selection, placement, userDecisionArea, rest) => {
    return JSON.stringify({
        event: "Menu Interaction",
        product: "bump",
        placement,
        selection,
        userDecisionArea,
        ...rest,
    });
};

export const buildLeftNavTrackingAttr = (selection, level) => {
    return JSON.stringify({
        event: "Menu Interaction",
        product: "bump",
        placement: "left nav",
        level: level ? level : "first level",
        selection: selection.toLowerCase(),
    });
};
