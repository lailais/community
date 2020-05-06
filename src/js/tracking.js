
/* Context */
// import { useBlueprintContext } from '../context/BlueprintContext';

const getLoginUserStage = member => {
  if (!member) { return null }
  // send the user stage to segment
  // If the user has a child and want to get pregnant, we should send ['ttc', 'parent']
  // If the user has a child and is pregnant, we should send ['pregnant', 'parent']
  const memberStage = []
  if (member.is_ttc) { memberStage.push('ttc') }
  if (member.pregnancy &&
    (Object.keys(member.pregnancy).length > 0)) {
    memberStage.push('pregnant')
  }
  if (member.born_children &&
    (member.born_children.length > 0)) { memberStage.push('parent') }
  if (memberStage.length === 0) return null
  return String(memberStage)
}

export const createTrackingData = (member) => {
  return {
    email: member && member.email,
    stage: getLoginUserStage(member),
  }
}

export const buildMenuInteractionNavTrackingAttribute = (selection, placement, rest) => {
  return JSON.stringify({
    event: 'Menu Interaction',
    product: 'bump',
    placement,
    selection,
    ...rest,
  });
};

export const buildMenuInteractionNavTrackingAttributeWithArea = (selection, placement, userDecisionArea, rest) => {
  return JSON.stringify({
    event: 'Menu Interaction',
    product: 'bump',
    placement,
    selection,
    userDecisionArea,
    ...rest,
  });
};

// export const buildLeftNavTrackingAttr = (selection, level) => {
//   const [{ trackingData }] = useBlueprintContext();
//   return JSON.stringify({
//     event: 'Menu Interaction',
//     product: 'bump',
//     placement: 'left nav',
//     level: level ? level : 'first level',
//     selection: selection.toLowerCase(),
//     ...trackingData,
//   });
// }
