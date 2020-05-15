import config from "./config";
import { buildLeftNavTrackingAttr } from "./tracking";
import { trackEvent } from "./Analytics";
import SocialLinks from "./SocialLink";
import { searchSVG, backButton, registrySVG, perksSVG, toolsSVG, babyNamesSVG, bestOfBabySVG, rightArrow } from "./SVG";
import { dataURIs } from "./helper/imagesDataURIs";
const { bumpHost } = config;

const stopPropagation = e => {
    let ev = e || window.event;
    if (ev && ev.stopPropagation) {
        ev.stopPropagation();
    } else {
        //IE
        ev.cancelBubble = true;
    }
};

const goToChildMenu = childID => {
    stopPropagation();
    var primaryMenu = document.getElementsByClassName("PrimaryNavTopLevelListItemWrap");
    if (primaryMenu) {
        primaryMenu[childID].getElementsByClassName("Pane")[0].style.cssText += `
        z-index: 1000;
        visibility: visible;
        opacity: 1;
        height: 100%;
        overflow: auto;
    `;
    }
    var navEl = document.getElementById("NavEl");
    if (navEl) {
        navEl.style.cssText += `
    transform: translateX(-50%);
    `;
    }
};

const goBackToPrimaryMenu = childID => {
    stopPropagation();
    var primaryMenu = document.getElementsByClassName("PrimaryNavTopLevelListItemWrap");
    if (primaryMenu) {
        primaryMenu[childID].getElementsByClassName("Pane")[0].style.cssText = "";
    }
    var navEl = document.getElementById("NavEl");
    if (navEl) {
        navEl.style.cssText += `
    transform: translateX(0%);
    `;
    }
};

const genBackToPrimaryMenuButton = (childID, elementId) => {
    document.getElementById(elementId).innerHTML += `
  <button type="button" aria-label="Back to Primary Navigation" class="backToPrimaryMenu" id="baclToPrimaryMenu-${childID}">
    ${backButton()}
    VIEW ALL
  </button>
  `;
};

const genSecondaryNavigation = elementId => {
    const level = elementId === "secondaryNavigationAtLast" ? "first level" : "second level";
    document.getElementById(elementId).innerHTML += `
  <ul class="SecondaryNavigation bp__secondary_navigation">
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref" data-track='${buildLeftNavTrackingAttr(
        "registry",
        level,
    )}'
      href="${bumpHost}/registry">
      ${registrySVG()}
      Registry
    </a>
  </li>
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref" data-track='${buildLeftNavTrackingAttr(
        "Best of Baby",
        level,
    )}'
      href="${bumpHost}/best-of-baby">
      ${bestOfBabySVG()}
      Best of Baby
    </a>
  </li>
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref" data-track='${buildLeftNavTrackingAttr(
        "Baby Names",
        level,
    )}'
      href="${bumpHost}/baby-names">
      ${babyNamesSVG()}
      Baby Names
    </a>
  </li>
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref" data-track='${buildLeftNavTrackingAttr("Tools", level)}'
      href="${bumpHost}/tools">
      ${toolsSVG()}
      Tools
    </a>
  </li>
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref" data-track='${buildLeftNavTrackingAttr("Perks", level)}'
      href="${bumpHost}/perks">
      ${perksSVG()}
      Perks
    </a>
  </li>
</ul>
  `;
};

const genSiteNavHref = (list, span, className, elementId) => {
    const Span = span ? `<span>${span}</span>` : "";
    const level = className === "SiteNavHref" ? "second level" : "first level";
    document.getElementById(elementId).innerHTML += `
  ${Span}
  <ul>
  ${list
      .map(
          item => `
    <li>
      <a class="${className}" href="${bumpHost}${item.href}" data-track='${buildLeftNavTrackingAttr(
              item.name,
              level,
          )}'>${item.name}</a>
    </li>
  `,
      )
      .join("")}
  </ul>
  `;
};

const genPrimaryNavTopLevelListItem = (childID, name, href, elementId, trackingData = {}) => {
    document.getElementById(elementId).innerHTML += `
  <div class="PrimaryNavTopLevelListItem">
    <a class="SiteNavHref PrimarySiteNavHref" href="${bumpHost}${href}" data-track='${trackingData}'>${name}</a>
    <button type="button" class="childMenuBtn" id="menuBtn-${childID}">
    ${rightArrow()}
  </button>
  </div>
  `;
};

const genSocialLinks = () => {
    document.getElementById("leftNavSocialLink").innerHTML += `
  <div class="SocialLinks social_links__navigation">
    ${SocialLinks({ trackingPlacement: "left nav" })}
  </div>
  `;
};

const genSearchForm = () => {
    document.getElementById("Search_Form").innerHTML += `
  <form id="search_form_nav">
    <label for="site__search___search__navigation">
    ${searchSVG()}
      <input type="search" aria-label="Search through site content" id="site__search___search__navigation"
        name="site__search" placeholder="Search" value>
    </label>
  </form>
  `;
};

const genDownloadAppPromo = () => {
    document.getElementById("DownloadAppPromo").innerHTML += `
  <div>
    <img
      src=${dataURIs.phoneShell}
      alt="The Bump App on iPhone">
  <div>
    <p>
      <span>Download The App</span>
      to explore more tools like Planner+ and Food Safety.
    </p>
    <span>
      <a href="https://bump.onelink.me/5bsp?pid=VHP" target="_blank" rel="noopener noreferrer">Get the Bump App</a>
      <a href="https://app.appsflyer.com/com.xogrp.thebump" target="_blank" rel="noopener noreferrer">
        <img src=${dataURIs.googlePlay} alt="Download The Bump App from Google Play">
      </a>
      <a href="https://app.appsflyer.com/id568940747" target="_blank" rel="noopener noreferrer">
      <img src=${dataURIs.appleAppStore} alt="Download The Bump App from the Apple App Store"></a>
    </span>
  </div>
</div>
  `;
};
const render = () => {
    //search form
    genSearchForm();

    // Getting Pregnant
    const gettingPregnantTrackingData = buildLeftNavTrackingAttr("Getting Pregnant");
    genPrimaryNavTopLevelListItem(
        0,
        "Getting Pregnant",
        "/topics/getting-pregnant",
        "primaryMenuGettingPregnant",
        gettingPregnantTrackingData,
    );
    genBackToPrimaryMenuButton(0, "gettingPregnantPane");

    var gettingPregnantPaneSites = [
        { name: "All Getting Pregnant", href: "/topics/getting-pregnant" },
        { name: "Fertility &amp; Family Planning", href: "/topics/getting-pregnant-fertility-family-planning" },
        { name: "Fertility Challenges", href: "/topics/getting-pregnant-infertility" },
        { name: "Early Pregnancy", href: "/topics/getting-pregnant-pregnancy-signs" },
    ];
    genSiteNavHref(gettingPregnantPaneSites, "Getting Pregnant", "SiteNavHref", "gettingPregnantPane");
    var gettingPregnantTools = [
        { name: "Fertility Chart", href: "/a/tool-fertility-chart" },
        { name: "Ovulation Calculator", href: "/ovulation-calculator" },
        { name: "Community", href: "/community" },
    ];
    genSiteNavHref(gettingPregnantTools, "Tools", "SiteNavHref", "gettingPregnantPane");
    genSecondaryNavigation("gettingPregnantPane");

    // Pregnancy
    const pregnancyTrackingData = buildLeftNavTrackingAttr("Pregnancy");
    genPrimaryNavTopLevelListItem(1, "Pregnancy", "/topics/pregnancy", "primaryMenuPregnancy", pregnancyTrackingData);
    genBackToPrimaryMenuButton(1, "pregnancyPane");
    var pregnancy = [
        { name: "All Pregnancy", href: "/topics/pregnancy" },
        { name: "First Trimester", href: "/topics/first-trimester" },
        { name: "Second Trimester", href: "/topics/second-trimester" },
        { name: "Third Trimester", href: "/topics/third-trimester" },
        { name: "Health &amp; Wellness", href: "/topics/pregnancy-body-care" },
        { name: "Life &amp; Career", href: "/topics/pregnancy-life-career" },
        { name: "Twins &amp; Multiples", href: "/topics/pregnancy-twins-multiples" },
        { name: "Baby Showers &amp; Reveals", href: "/topics/pregnancy-baby-showers" },
        { name: "News", href: "/news" },
    ];
    genSiteNavHref(pregnancy, "Pregnancy", "SiteNavHref", "pregnancyPane");
    var linksUnderPregnancy = [
        { name: "Pregnancy Week by Week", href: "/pregnancy-week-by-week" },
        { name: "Baby Boy Names", href: "/b/boy-baby-names" },
        { name: "Baby Girl Names", href: "/b/girl-baby-names" },
        { name: "Unisex Baby Names", href: "/b/unisex-baby-names" },
    ];
    genSiteNavHref(linksUnderPregnancy, undefined, "SiteNavHref", "pregnancyPane");
    var tools = [
        { name: "Chinese Gender Chart", href: "/chinese-gender-chart" },
        { name: "Due Date Calculator", href: "/due-date-calculator" },
        { name: "Contraction Counter", href: "/calculators/contraction" },
        { name: "Community", href: "/community" },
    ];
    genSiteNavHref(tools, "Tools", "SiteNavHref", "pregnancyPane");
    genSecondaryNavigation("pregnancyPane");

    // popularLinksUnderPregnancy
    var popularLinksUnderPregnancy = [
        { name: "First Trimester", href: "/topics/first-trimester" },
        { name: "Second Trimester", href: "/topics/second-trimester" },
        { name: "Third Trimester", href: "/topics/third-trimester" },
        { name: "Pregnancy Week by Week", href: "/pregnancy-week-by-week" },
        { name: "Baby Showers &amp; Reveals", href: "/topics/pregnancy-baby-showers" },
    ];
    genSiteNavHref(
        popularLinksUnderPregnancy,
        "Popular links under Pregnancy",
        "SiteNavHref PopularSiteNavHref",
        "popularLinksUnderPregnancy",
    );

    // Baby
    const babyTrackingData = buildLeftNavTrackingAttr("Baby");
    genPrimaryNavTopLevelListItem(2, "Baby", "/baby-month-by-month", "primaryMenuBaby", babyTrackingData);
    genBackToPrimaryMenuButton(2, "babyPane");

    var baby = [
        { name: "All Baby", href: "/topics/parenting" },
        { name: "Baby Month by Month", href: "/baby-month-by-month" },
        { name: "Parenting Twins &amp; Multiples", href: "/topics/parenting-twins-multiples" },
        { name: "Milestones", href: "/topics/parenting-baby-s-firsts" },
        { name: "Sleep", href: "/topics/parenting-baby-sleep" },
        { name: "Breastfeeding", href: "/topics/parenting-breastfeeding" },
        { name: "Feeding", href: "/topics/parenting-baby-feeding" },
        { name: "Baby Health &amp; Wellness", href: "/topics/parenting-baby-safety" },
        { name: "Childcare", href: "/topics/parenting-childcare" },
        { name: "News", href: "/news" },
    ];
    genSiteNavHref(baby, "Baby", "SiteNavHref", "babyPane");

    var tools = [
        { name: "Breastfeeding Tracker", href: "/a/tool-breastfeeding-log" },
        { name: "Sleep Tracker", href: "/a/tool-sleep-tracker" },
        { name: "Vaccination Tracker", href: "/a/tool-vaccine-tracker" },
        { name: "Input / Output Tracker", href: "/a/tool-input-output-tracker" },
        { name: "Community", href: "/community" },
    ];
    genSiteNavHref(tools, "Tools", "SiteNavHref", "babyPane");

    genSecondaryNavigation("babyPane");

    // popularLinksUnderBaby
    var popularLinksUnderBaby = [{ name: "Baby Month by Month", href: "/baby-month-by-month" }];
    genSiteNavHref(
        popularLinksUnderBaby,
        "Popular links under Baby",
        "SiteNavHref PopularSiteNavHref",
        "popularLinksUnderBaby",
    );

    //Toddler
    const toddlerTrackingData = buildLeftNavTrackingAttr("Toddler");
    genPrimaryNavTopLevelListItem(3, "Toddler", "/topics/parenting-toddler", "primaryMenuToddler", toddlerTrackingData);

    genBackToPrimaryMenuButton(3, "toddlerPane");

    var toddler = [
        { name: "All Toddler", href: "/topics/parenting-toddler" },
        { name: "Toddler Development", href: "/toddler-month-by-month" },
    ];
    genSiteNavHref(toddler, "Toddler", "SiteNavHref", "toddlerPane");

    var tools = [
        { name: "Vaccination Tracker", href: "/a/tool-vaccine-tracker" },
        { name: "Community", href: "/community" },
    ];

    genSiteNavHref(tools, "Tools", "SiteNavHref", "toddlerPane");

    genSecondaryNavigation("toddlerPane");

    //popularLinksUnderToddler
    var popularLinksUnderToddler = [{ name: "Toddler Month by Month", href: "/toddler-month-by-month" }];
    genSiteNavHref(
        popularLinksUnderToddler,
        "Popular links under Toddler",
        "SiteNavHref PopularSiteNavHref",
        "popularLinksUnderToddler",
    );

    //Parents
    const parentsTrackingData = buildLeftNavTrackingAttr("Parents");
    genPrimaryNavTopLevelListItem(
        4,
        "Parents",
        "/topics/parenting-parenting",
        "primaryMenuParents",
        parentsTrackingData,
    );
    genBackToPrimaryMenuButton(4, "parentsPane");

    var parents = [
        { name: "All Parents", href: "/topics/parenting-parenting" },
        { name: "Health &amp; Wellness", href: "/topics/parenting-post-birth-recovery" },
        { name: "Life &amp; Relationships", href: "/topics/parenting-friends-family" },
        { name: "Work &amp; Career", href: "/topics/parenting-working-mom" },
    ];
    genSiteNavHref(parents, "Parents", "SiteNavHref", "parentsPane");

    var tools = [{ name: "Community", href: "/community" }];
    genSiteNavHref(tools, "Tools", "SiteNavHref", "parentsPane");

    genSecondaryNavigation("parentsPane");

    //Baby Products
    const babyProductsTrackingData = buildLeftNavTrackingAttr("Baby Products");
    genPrimaryNavTopLevelListItem(
        5,
        "Baby Products",
        "/topics/parenting-baby-products",
        "primaryMenuBabyProducts",
        babyProductsTrackingData,
    );
    genBackToPrimaryMenuButton(5, "babyProductsPane");

    var babyProducts = [
        { name: "All Baby Products", href: "/topics/parenting-baby-product" },
        { name: "Best of Baby Awards", href: "/best-of-baby" },
        { name: "Baby Registry", href: "/topics/pregnancy-baby-registry" },
        { name: "Toddler &amp; Baby Gear", href: "/topics/pregnancy-baby-gear" },
        { name: "Clothing &amp; Accessories", href: "/topics/parenting-baby-clothes" },
        { name: "Nursery Ideas", href: "/topics/pregnancy-nursery-ideas" },
        { name: "Eco-friendly &amp; Sustainability", href: "/topics/pregnancy-eco-friendly" },
    ];

    genSiteNavHref(babyProducts, "Baby Products", "SiteNavHref", "babyProductsPane");

    var tools = [{ name: "Community", href: "/community" }];
    genSiteNavHref(tools, "Tools", "SiteNavHref", "babyProductsPane");

    genSecondaryNavigation("babyProductsPane");

    genSecondaryNavigation("secondaryNavigationAtLast");

    genSocialLinks();

    genDownloadAppPromo();
};

const addBtnEventListener = () => {
    const menuButtons = document.getElementsByClassName("childMenuBtn");
    for (let i = 0; i < menuButtons.length; i++) {
        menuButtons[i].addEventListener("click", () => {
            const child = menuButtons[i].id.split("-")[1];
            goToChildMenu(child);
        });
    }

    const backMenuButtons = document.getElementsByClassName("backToPrimaryMenu");
    for (let i = 0; i < backMenuButtons.length; i++) {
        backMenuButtons[i].addEventListener("click", () => {
            const childID = menuButtons[i].id.split("-")[1];
            goBackToPrimaryMenu(childID);
        });
    }
};

const addSearchFormEvent = () => {
    document.getElementById("search_form_nav").addEventListener("submit", e => {
        e.preventDefault();

        const searchValue = document.getElementById("search_form_nav")["site__search"].value;

        // search form event track
        const placement = "left nav";
        const textSearchTrackingData = {
            event: "Text Search",
            query: searchValue,
            placement,
        };
        trackEvent(textSearchTrackingData);

        window.location = `${bumpHost}/search?q=${searchValue}`;
    });
};

$(() => {
    render();
    addBtnEventListener();
    addSearchFormEvent();
});
