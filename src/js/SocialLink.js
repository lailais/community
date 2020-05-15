import { Facebook, Instagram, Pinterest, Twitter } from "./SVG";
import { buildMenuInteractionNavTrackingAttribute } from "./tracking.js";

export default ({ trackingPlacement }) => {
    const socialLinksTrackingData = selection =>
        buildMenuInteractionNavTrackingAttribute(`follow us > ${selection}`, trackingPlacement);
    return `
  <a
    href="https://www.facebook.com/TheBump"
    data-track='${socialLinksTrackingData("facebook")}'
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    ${Facebook()}
  </a>
  <a
    href="https://www.instagram.com/TheBump"
    data-track='${socialLinksTrackingData("instagram")}'
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    ${Instagram()}
  </a>
  <a
    href="https://www.pinterest.com/thebump"
    data-track='${socialLinksTrackingData("pinterest")}'
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    ${Pinterest()}
  </a>
  <a
    href="https://www.twitter.com/thebump"
    data-track='${socialLinksTrackingData("twitter")}'
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    ${Twitter()}
  </a>
  `;
};
