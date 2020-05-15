import getList from "./helper/listData";
import config from "./config";
import { KnotLogo } from "./SVG";
import { BashLogo } from "./SVG";
import { buildMenuInteractionNavTrackingAttribute } from "./tracking.js";
import SocialLinks from "./SocialLink";

const DOMContentLoadedCB = () => {
    const topArticlesDom = document.querySelector("#tbFooter .topArticles");
    const registryBabyGearDom = document.querySelector("#tbFooter .registryBabyGear");
    const toolsResourcesDom = document.querySelector("#tbFooter .toolsResources");
    const aboutTheBumpDom = document.querySelector("#tbFooter .aboutTheBump");
    const appDom = document.querySelector("#tbFooter .app");
    const socialLinksDom = document.querySelector("#tbFooter .SocialLinks");

    const { topArticles, registryBabyGear, toolsResources, aboutTheBump, ourSisterSites, app } = getList(
        config.bumpHost,
    );

    const footerTrackingData = selection => buildMenuInteractionNavTrackingAttribute(selection, "footer");

    const renderLinks = linksInfo => {
        let links = ``;
        linksInfo.links.forEach(l => {
            links += `
        <li key=${l.id}>
          <a href=${l.url} id=${l.id} data-track='${footerTrackingData(l.selection)}'>${l.text}</a>
        </li>`;
        });
        const str = `
    <span class="title">${linksInfo.header}</span>
    <ul>
      ${links}
    </ul>`;
        return str;
    };

    const renderSisterSites = linksInfo => {
        let links = ``;
        linksInfo.links.forEach(l => {
            links += `<a href=${l.url} id=${l.id} key=${l.id} data-track='${footerTrackingData(l.selection)}'>${
                l.text === "KnotLogo" ? KnotLogo() : BashLogo()
            }</a>`;
        });
        const str = `
    <span class="title">${linksInfo.header}</span>
    <div class="SitesWrap">
      ${links}
    </div>`;
        return str;
    };

    const renderApp = linksInfo => {
        let links = ``;
        linksInfo.links.map(l => {
            links += `
        <a
          key=${l.id}
          href=${l.url}
          id=${l.id}
          target="_blank"
          rel="noopener noreferrer"
          data-track='${footerTrackingData(l.selection)}'
        >
          <img
            src=${l.img.src}
            alt=${l.img.alt}
          />
        </a>
      `;
        });
        const str = `
    <span class="title">${linksInfo.header}</span>
    <div class="AppDownloadsWrap">
      ${links}
    </div>`;
        return str;
    };

    topArticlesDom.innerHTML = renderLinks(topArticles);
    registryBabyGearDom.innerHTML = renderLinks(registryBabyGear);
    toolsResourcesDom.innerHTML = renderLinks(toolsResources);
    aboutTheBumpDom.innerHTML = renderLinks(aboutTheBump) + renderSisterSites(ourSisterSites);
    appDom.innerHTML = renderApp(app);
    socialLinksDom.innerHTML = SocialLinks({ trackingPlacement: "footer" });
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    DOMContentLoadedCB();
} else {
    document.addEventListener("DOMContentLoaded", DOMContentLoadedCB);
}
