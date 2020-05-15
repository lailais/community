import config from "./config";
import { getChildrenInfo, BIRTH_TYPE, getStuffChildren, getChildrenMapping } from "./helper/birthdates";
import { LockupSVG } from "./SVG";
import { ProfileTriggerSVG } from "./SVG";
import { buildMenuInteractionNavTrackingAttribute, buildMenuInteractionNavTrackingAttributeWithArea } from "./tracking";
import { trackEvent } from "./Analytics";

const DOMContentLoadedCB = function() {
    const { bumpHost } = config;
    const Lockup = document.querySelector("#tbHeader .Lockup");
    const ProfileTrigger = document.getElementById("ProfileTrigger");
    const MobileNavTrigger = document.getElementById("MobileNavTrigger");
    const SiteNavigation = document.getElementById("SiteNavigation");
    const Profile = document.getElementById("Profile");
    const background = document.getElementById("background");

    const closeProfile = () => {
        ProfileTrigger.classList.remove("open");
        Profile.classList.remove("open");
    };

    const closeSiteNavigation = () => {
        MobileNavTrigger.classList.remove("open");
        SiteNavigation.classList.remove("open");
    };

    const closeBackground = () => {
        background.classList.remove("open");
    };

    const renderLockup = () => {
        const logoTrackingData = buildMenuInteractionNavTrackingAttribute("the bump", "header");
        const str = `
    <a href=${bumpHost} data-track='${logoTrackingData}'>
      ${LockupSVG()}
    </a>
    `;
        Lockup.innerHTML = str;
    };

    ProfileTrigger.addEventListener("click", () => {
        const isSiteNavigationOpen = MobileNavTrigger.classList.contains("open");
        closeSiteNavigation();

        ProfileTrigger.classList.toggle("open");
        Profile.classList.toggle("open");

        if (!isSiteNavigationOpen) {
            background.classList.toggle("open");
        }
    });

    MobileNavTrigger.addEventListener("click", () => {
        const isSiteNavigationOpen = MobileNavTrigger.classList.contains("open");
        const isProfileOpen = ProfileTrigger.classList.contains("open");
        closeProfile();
        MobileNavTrigger.classList.toggle("open");
        SiteNavigation.classList.toggle("open");

        if (!isProfileOpen) {
            background.classList.toggle("open");
        }

        trackEvent({
            selection: "hamburger",
            level: "header",
            event: "Menu Interaction",
            action: isSiteNavigationOpen ? "close" : "open",
        });
    });

    $(".Frame-body, .Frame-footer, #background").click(() => {
        closeSiteNavigation();
        closeProfile();
        closeBackground();
    });

    renderLockup();
};

export const renderProfile = member => {
    const { bumpHost } = config;
    const MyOverview = document.querySelector("#Profile .MyOverview");
    const ProfileTrigger = document.getElementById("ProfileTrigger");
    const Profile = document.getElementById("Profile");
    const login = document.getElementById("login");
    const SignOut = document.querySelector("#Profile .SignOut");

    const buildTrackingData = selection =>
        buildMenuInteractionNavTrackingAttributeWithArea(selection, "header", "account overview");

    const profileTrackingData = selection => buildMenuInteractionNavTrackingAttribute(selection, "header");

    const renderProfileTrigger = member => {
        const str = `
    <button
      type="button"
      aria-label="Toggle Profile"
      data-track='${profileTrackingData("my account")}'
      >
      ${ProfileTriggerSVG()}
      <img src=${member.avatar_url} alt="avatar" />
    </button>
    `;
        ProfileTrigger.innerHTML = str;
    };

    const renderMyOverview = ({ member, bumpHost, childrenMapping }) => {
        const childrenInfo = getChildrenInfo(childrenMapping);
        let childrenInfoStr = ``;
        childrenInfo.forEach(child => {
            childrenInfoStr += `<li key=${child.id}>${child.info}</li>`;
        });

        const str = `
    <div>
      <img
        src="${member.avatar_url}"
        alt="avatar"
      />
    </div>
    <div>
      <span>${member.first_name} ${member.last_name}</span>
      <ul class="ChildrenInfo">
        ${childrenInfoStr}
      </ul>
      <a href="${bumpHost}/join/profile" data-track='${buildTrackingData("edit profile")}'>Edit My Profile</a>
    </div>`;
        MyOverview.innerHTML = str;
    };

    const renderMyStuff = ({ bumpHost, childrenMapping }) => {
        const stuffChildren = getStuffChildren(childrenMapping);
        const MY_STUFF = stuffChildren.map(c => {
            switch (c.type) {
                case BIRTH_TYPE.pregnancy:
                    return {
                        copy: "Pregnancy Week by Week",
                        href: `${bumpHost}/pregnancy-week-by-week/${c.slug}`,
                    };
                case BIRTH_TYPE.baby:
                    return {
                        copy: "Baby Month by Month",
                        href: `${bumpHost}/baby-month-by-month/${c.slug}`,
                    };
                default:
                    return {
                        copy: "Toddler Month by Month",
                        href: `${bumpHost}/toddler-month-by-month/${c.slug}`,
                    };
            }
        });

        if (MY_STUFF.length > 0) {
            const MyStuffDom = document.createElement("div");
            MyStuffDom.classList.add("MyStuff");
            let StuffList = ``;
            MY_STUFF.forEach(link => {
                StuffList += `
            <li key=${link.href}>
              <a href=${link.href} data-track='${buildTrackingData(link.copy)}'>
                ${link.copy}
              </a>
            </li>`;
            });
            const str = `
          <h4>My Stuff</h4>
            <ul>
             ${StuffList}
            </ul>
        `;
            MyStuffDom.innerHTML = str;
            MyOverview.parentNode.insertBefore(MyStuffDom, MyOverview.nextSibling);
        }
    };

    const renderLogin = () => {
        const str = `<a href="${bumpHost}/login" data-track='${profileTrackingData("log in")}'>Log in</a>`;
        login.innerHTML = str;
    };

    const renderSignOut = () => {
        const signOutTrackingData = buildMenuInteractionNavTrackingAttributeWithArea(
            "log out",
            "header",
            "account overview",
        );
        const str = `<a href="${bumpHost}/logout" class="Anchor" data-track='${signOutTrackingData}'>Sign Out</a>`;
        SignOut.innerHTML = str;
    };

    if (!member) {
        ProfileTrigger.classList.add("hide");
        Profile.classList.add("hide");
        login.classList.remove("hide");
        renderLogin();
        return;
    }

    renderProfileTrigger(member);
    const childrenMapping = getChildrenMapping(member);
    renderMyOverview({ member, bumpHost, childrenMapping });
    renderMyStuff({ member, bumpHost, childrenMapping });
    renderSignOut();
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    DOMContentLoadedCB();
} else {
    document.addEventListener("DOMContentLoaded", DOMContentLoadedCB);
}
