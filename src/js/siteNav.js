const bumpHost = 'https://www.thebump.com'

const stopPropagation = (e) => {
  let ev = e || window.event
  if (ev && ev.stopPropagation) {
    ev.stopPropagation()
  } else {
    //IE
    ev.cancelBubble = true
  }
}

const goToChildMenu = (childID) => {
  stopPropagation()
  var primaryMenu = document.getElementsByClassName('PrimaryNavTopLevelListItemWrap')
  if (primaryMenu) {
    primaryMenu[childID].getElementsByClassName('Pane')[0].style.cssText += `
        z-index: 1000;
        visibility: visible;
        opacity: 1;
        height: 100%;
        overflow: auto;
    `
  }
  var navEl = document.getElementById('NavEl')
  if (navEl) {
    navEl.style.cssText += `
    transform: translateX(-50%);
    `
  }
}

const goBackToPrimaryMenu = (childID) => {
  stopPropagation()
  var primaryMenu = document.getElementsByClassName('PrimaryNavTopLevelListItemWrap')
  if (primaryMenu) {
    primaryMenu[childID].getElementsByClassName('Pane')[0].style.cssText = ''
  }
  var navEl = document.getElementById('NavEl')
  if (navEl) {
    navEl.style.cssText += `
    transform: translateX(0%);
    `
  }
}

const genBackToPrimaryMenuButton = (childID, elementId) => {
  document.getElementById(elementId).innerHTML += (`
  <button type="button" aria-label="Back to Primary Navigation" class="backToPrimaryMenu" id="baclToPrimaryMenu-${childID}">
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.044 20.77L13 16l5.043-4.77a.908.908 0 011.207 0 .744.744 0 010 1.112L15.278 16l3.972 3.658a.744.744 0 010 1.113.891.891 0 01-.603.229.894.894 0 01-.603-.23z"
        fill="#FF6E6E" fill-rule="nonzero" />
    </svg>
    VIEW ALL
  </button>
  `)
}

const genSecondaryNavigation = (elementId) => {
  document.getElementById(elementId).innerHTML += (`
  <ul class="SecondaryNavigation bp__secondary_navigation">
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref"
      href="${bumpHost}/registry">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill-rule="nonzero" fill="none">
          <path
            d="M20.634 11.285A2.048 2.048 0 0018.738 10a1.954 1.954 0 00-1.592.741 5.612 5.612 0 00-.922 1.75 5.495 5.495 0 00-.916-1.75 1.925 1.925 0 00-1.586-.74 2.053 2.053 0 00-1.914 1.283 1.96 1.96 0 00.566 2.216c.292.226.617.407.963.537h5.792c.338-.132.654-.313.94-.537a1.96 1.96 0 00.583-2.205m-8.138.274a1.295 1.295 0 011.22-.805c.38-.017.747.152.98.455.232.303.934 1.75 1.073 2.719-.887-.187-2.386-.566-2.923-1.021a1.167 1.167 0 01-.35-1.348zm3.32 5.081v5.203h-4.696a.292.292 0 01-.292-.291V16.65h4.987zm5.716 0v4.912a.297.297 0 01-.292.291h-4.666v-5.203h4.958zm-5.717-2.613v1.855h-5.541A.292.292 0 0110 15.6V14.33c0-.162.13-.292.292-.292h5.541zm6.3 0c.161 0 .292.13.292.292V15.6c0 .161-.13.292-.292.292h-5.541v-1.855zm-3.406-3.267a1.29 1.29 0 011.207.8 1.167 1.167 0 01-.356 1.347c-.536.46-2.035.84-2.916 1.027.139-.97.844-2.428 1.073-2.719.23-.29.58-.459.95-.455h.042z"
            fill="#C2383F" />
          <path
            d="M19.082 14.032c.351-.128.681-.307.98-.531a1.96 1.96 0 00.584-2.205 2.06 2.06 0 00-1.92-1.295 1.96 1.96 0 00-1.598.74 5.536 5.536 0 00-.915 1.75 5.536 5.536 0 00-.916-1.75 1.937 1.937 0 00-1.581-.74 2.065 2.065 0 00-1.92 1.29 1.96 1.96 0 00.566 2.21c.3.226.63.407.98.537H10.38a.38.38 0 00-.379.379v2.233c0 .21.17.379.38.379h.454v4.458c0 .21.17.379.38.379h9.998c.21 0 .379-.17.379-.38V17.03h.455c.21 0 .379-.17.379-.38v-2.238a.38.38 0 00-.38-.38h-2.963zm-.431-3.232h.04a1.3 1.3 0 011.208.8c.185.463.053.993-.327 1.318-.542.455-2.035.84-2.945 1.026a6.09 6.09 0 011.073-2.689c.226-.294.58-.463.95-.455zm-4.93-.029c.38-.016.744.154.975.455a6.06 6.06 0 011.073 2.69c-.91-.187-2.403-.584-2.917-1.027a1.167 1.167 0 01-.35-1.319c.207-.49.689-.805 1.22-.799zm-2.963 5.47v-1.45h5.075v1.45h-5.075zm.834.759h4.241v4.073h-4.24V17zm9.24 4.073h-4.24v-4.05h4.24v4.05zm.835-4.832h-5.075v-1.45h5.075v1.45z"
            fill="#007A77" />
        </g>
      </svg>
      Registry
    </a>
  </li>
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref"
      href="${bumpHost}/best-of-baby">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill-rule="nonzero" fill="none">
          <path
            d="M16.125 10a6.125 6.125 0 110 12.25 6.125 6.125 0 010-12.25zm0 2.213l-1.082 2.305-2.418.369 1.75 1.794-.413 2.532 2.163-1.195 2.163 1.195-.413-2.532 1.75-1.794-2.418-.37-1.082-2.304z"
            fill="#C2383F" />
          <path
            d="M16.125 10a6.125 6.125 0 110 12.25 6.125 6.125 0 010-12.25zm0 .7a5.425 5.425 0 100 10.85 5.425 5.425 0 000-10.85zm0 1.513l1.082 2.305 2.418.369-1.75 1.794.413 2.532-2.163-1.195-2.163 1.195.413-2.532-1.75-1.794 2.418-.37 1.082-2.304z"
            fill="#007A77" />
        </g>
      </svg>
      Best of Baby
    </a>
  </li>
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref"
      href="${bumpHost}/baby-names">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill-rule="nonzero" fill="none">
          <path
            d="M20.842 9.543a.38.38 0 01.409.379v12.017a.38.38 0 01-.409.408h-9.73a.385.385 0 01-.361-.408V9.922a.385.385 0 01.379-.38h2.012v1.592a.38.38 0 00-.371.303l-.008.076c0 .21.17.38.38.38h.81a.38.38 0 000-.759l-.029-1.591h1.65v1.591a.38.38 0 00-.37.303l-.008.076c0 .21.17.38.379.38h.81a.38.38 0 000-.759l-.029-1.591h1.651v1.591a.38.38 0 00-.371.303l-.008.076c0 .21.17.38.38.38h.781a.38.38 0 100-.759V9.543h2.053zm-2.024 9.129h-5.676a.38.38 0 00-.076.75l.076.008h5.676a.38.38 0 000-.758zm0-2.304h-5.676a.38.38 0 00-.076.75l.076.008h5.676a.38.38 0 100-.758zm0-2.304h-5.676a.38.38 0 00-.076.75l.076.008h5.676a.38.38 0 000-.758z"
            fill="#C2383F" />
          <path
            d="M11.112 22.347a.385.385 0 01-.361-.408V9.922a.385.385 0 01.379-.38h9.712a.38.38 0 01.409.38v12.017a.38.38 0 01-.409.408h-9.73zm.397-.758h8.954V10.3H18.79v.846a.38.38 0 110 .758h-.782a.38.38 0 010-.758v-.846h-1.65l.029.846a.38.38 0 010 .758h-.811a.38.38 0 010-.758v-.846h-1.65l.028.846a.38.38 0 010 .758h-.81a.38.38 0 010-.758v-.846h-1.646l.012 11.288zm7.31-2.159h-5.677a.38.38 0 010-.758h5.676a.38.38 0 010 .758zm-5.677-2.304a.38.38 0 110-.758h5.676a.38.38 0 010 .758h-5.676zm5.676-2.304h-5.676a.38.38 0 010-.758h5.676a.38.38 0 010 .758z"
            fill="#007A77" />
        </g>
      </svg>
      Baby Names
    </a>
  </li>
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref"
      href="${bumpHost}/tools">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill-rule="nonzero" fill="none">
          <path
            d="M22.12 16.472a3.8 3.8 0 00.694-4.413l-1.931 1.926h-1.554v-1.638l1.884-1.932a3.83 3.83 0 00-4.43.695 3.794 3.794 0 00-.707 4.405l-5.733 5.728a1.165 1.165 0 101.646 1.65l5.726-5.728a3.79 3.79 0 004.405-.693z"
            fill="#C2383F" />
          <path
            d="M16.371 11.03a4.146 4.146 0 00-.792 4.404l.025.058-5.558 5.554a1.515 1.515 0 00-.003 2.144l.08.074a1.514 1.514 0 002.064-.074l5.552-5.554.059.027a4.14 4.14 0 005.278-5.713l-.219-.427-2.169 2.162h-1.06V12.54l2.117-2.17-.423-.216a4.179 4.179 0 00-4.837.759l-.114.118zm4.09-.474l.094.031-1.626 1.668v2.13h2.049l1.667-1.662.03.088a3.44 3.44 0 01-4.85 4.093l-.227-.116-5.907 5.907a.814.814 0 11-1.15-1.154l5.912-5.908-.116-.226a3.444 3.444 0 01.643-4 3.48 3.48 0 013.48-.851z"
            fill="#007A77" />
        </g>
      </svg>
      Tools
    </a>
  </li>
  <li>
    <a class="SiteNavHref SecondarySiteNavHref SVGSiteNavHref"
      href="${bumpHost}/perks">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill-rule="nonzero" fill="none">
          <path
            d="M15.615 10.25a1.457 1.457 0 011.627-.002l.71.462.026.002.831-.053a1.487 1.487 0 011.41.814l.37.737c.01.02.014.025.034.035l.738.369c.53.265.846.814.813 1.412l-.052.81c0 .055.006.085 0 .08l.46.682c.335.486.335 1.135.005 1.63l-.463.722-.002.037.026.81a1.487 1.487 0 01-.814 1.41l-.737.368c-.02.01-.025.015-.035.035l-.369.737c-.265.531-.814.847-1.412.814l-.81-.052a.15.15 0 00-.026.003l-.04.01-.687.462a1.464 1.464 0 01-1.627.002l-.709-.462-.026-.002-.832.052a1.487 1.487 0 01-1.41-.813l-.358-.717c-.02-.035-.035-.05-.046-.056l-.737-.368a1.475 1.475 0 01-.814-1.412l.052-.81c0-.058-.007-.095 0-.094l-.46-.682a1.457 1.457 0 01-.003-1.631l.462-.709.002-.026-.053-.832a1.487 1.487 0 01.814-1.41l.737-.369c.02-.01.025-.015.035-.035l.369-.737c.265-.53.814-.847 1.412-.814l.81.052a.324.324 0 00.143-.028l-.022.008zm.802 1.94c-.2 0-.362.163-.362.363v.701a1.787 1.787 0 00-1.56 1.76c0 .623.318 1.436 1.844 1.782.846.189 1.275.556 1.275 1.08a1.114 1.114 0 01-1.197 1.063 1.197 1.197 0 01-1.197-1.197.362.362 0 10-.724 0 1.927 1.927 0 001.559 1.888v.718a.362.362 0 00.724 0v-.718a1.776 1.776 0 001.559-1.754c0-.512-.24-1.426-1.843-1.788-1.275-.29-1.275-.88-1.275-1.074a1.114 1.114 0 011.197-1.07 1.203 1.203 0 011.18 1.003.362.362 0 00.713-.123 1.904 1.904 0 00-1.531-1.564v-.707c0-.2-.162-.362-.362-.362z"
            fill="#C2383F" />
          <path
            d="M15.615 10.25a1.457 1.457 0 011.627-.002l.709.464c-.003-.001-.002-.002 0-.002l.027.002.831-.053a1.487 1.487 0 011.41.814l.37.737c.01.02.014.025.034.035l.737.369c.53.265.847.814.814 1.412l-.052.81c0 .055.006.085 0 .08l.46.682c.334.486.334 1.135.005 1.63l-.466.722h.002l-.001.037.026.81a1.487 1.487 0 01-.814 1.41l-.738.368c-.02.01-.024.015-.034.035l-.369.737c-.265.531-.814.847-1.412.814l-.81-.052a.15.15 0 00-.026.003l-.04.01-.687.462a1.464 1.464 0 01-1.627.002l-.709-.465c.003.002.002.003 0 .003l-.026-.002-.832.052a1.487 1.487 0 01-1.41-.813l-.358-.717c-.02-.035-.035-.05-.046-.056l-.737-.368a1.475 1.475 0 01-.814-1.412l.052-.81c0-.058-.007-.095 0-.094l-.46-.682a1.457 1.457 0 01-.003-1.631l.464-.708c-.001.002-.002.001-.002-.001l.002-.026-.053-.832a1.487 1.487 0 01.814-1.41l.737-.369c.02-.01.025-.015.035-.035l.369-.737c.265-.53.814-.847 1.412-.814l.81.052a.324.324 0 00.143-.028l-.022.008zm1.283.594a.834.834 0 00-.936 0l-.674.453-.05.027a.936.936 0 01-.397.076l-.814-.052a.85.85 0 00-.817.47l-.363.726a.655.655 0 01-.303.303l-.727.363a.862.862 0 00-.47.814l.053.836c0 .159-.034.301-.114.399l-.442.676a.835.835 0 00-.001.936l.48.724a.935.935 0 01.077.397l-.052.815a.85.85 0 00.47.816l.726.363c.127.064.218.16.303.303l.363.727a.862.862 0 00.814.47l.836-.053c.158 0 .301.034.398.114l.677.442a.841.841 0 00.936 0v.001l.688-.462a.796.796 0 01.407-.107l.815.051a.85.85 0 00.816-.47l.364-.725a.655.655 0 01.303-.304l.726-.363a.865.865 0 00.47-.823l-.027-.814c0-.158.034-.3.113-.396l.444-.692a.835.835 0 000-.936l-.473-.708a.839.839 0 01-.083-.4l.052-.814a.85.85 0 00-.47-.817l-.726-.363a.655.655 0 01-.304-.303l-.363-.726a.862.862 0 00-.814-.47l-.836.052c-.158 0-.3-.034-.398-.113zm-.481 1.347c.2 0 .362.162.362.362v.707c.789.146 1.401.772 1.53 1.564a.362.362 0 01-.712.123c-.097-.577-.595-1-1.18-1.002l-.13-.003a1.114 1.114 0 00-1.067 1.072c0 .195 0 .785 1.275 1.074 1.603.362 1.843 1.275 1.843 1.788a1.776 1.776 0 01-1.56 1.754v.718a.362.362 0 11-.723 0v-.718a1.927 1.927 0 01-1.56-1.888.362.362 0 11.725 0c0 .661.536 1.197 1.197 1.197a1.114 1.114 0 001.197-1.063c0-.524-.429-.891-1.275-1.08-1.526-.346-1.843-1.159-1.843-1.782a1.787 1.787 0 011.559-1.76v-.701c0-.2.162-.362.362-.362z"
            fill="#007A77" />
        </g>
      </svg>
      Perks
    </a>
  </li>
</ul>
  `)
}

const genSiteNavHref = (list, span, className, elementId) => {
  var Span = span ? `<span>${span}</span>` : ''
  document.getElementById(elementId).innerHTML += (`
  ${Span}
  <ul>
  ${list.map(item => (`
    <li>
      <a class="${className}" href="${bumpHost}${item.href}">${item.name}</a>
    </li>
  `)).join('')}
  </ul>
  `)
}

const genPrimaryNavTopLevelListItem = (childID, name, href, elementId) => {
  document.getElementById(elementId).innerHTML += (`
  <div class="PrimaryNavTopLevelListItem">
    <a class="SiteNavHref PrimarySiteNavHref" href="${bumpHost}${href}">${name}</a>
    <button type="button" class="childMenuBtn" id="menuBtn-${childID}">
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <rect fill="#FF6E6E" fill-rule="nonzero" x="6" y="6" width="20" height="20" rx="10" />
        <path
          d="M13.646 20.375c.09 0 .179-.031.249-.089l4.745-3.992a.386.386 0 000-.593l-4.745-3.985a.387.387 0 00-.498.593l4.4 3.695-4.395 3.689a.391.391 0 00-.047.546.397.397 0 00.29.136h0z"
          stroke="#FFF" />
      </g>
    </svg>
  </button>
  </div>
  `)
}
const render = () => {
  // Getting Pregnant
  genPrimaryNavTopLevelListItem(0, 'Getting Pregnant', '/topics/getting-pregnant', 'primaryMenuGettingPregnant')
  genBackToPrimaryMenuButton(0, 'gettingPregnantPane')

  var gettingPregnantPaneSites = [
    { name: 'All Getting Pregnant', href: '/topics/getting-pregnant' },
    { name: 'Fertility &amp; Family Planning', href: '/topics/getting-pregnant-fertility-family-planning' },
    { name: 'Fertility Challenges', href: '/topics/getting-pregnant-infertility' },
    { name: 'Early Pregnancy', href: '/topics/getting-pregnant-pregnancy-signs' },
  ]
  genSiteNavHref(gettingPregnantPaneSites, 'Getting Pregnant', 'SiteNavHref', 'gettingPregnantPane')
  var gettingPregnantTools = [
    { name: 'Fertility Chart', href: '/a/tool-fertility-chart' },
    { name: 'Ovulation Calculator', href: '/ovulation-calculator' },
    { name: 'Community', href: '/community' },
  ]
  genSiteNavHref(gettingPregnantTools, 'Tools', 'SiteNavHref', 'gettingPregnantPane')
  genSecondaryNavigation('gettingPregnantPane')

  // Pregnancy
  genPrimaryNavTopLevelListItem(1, 'Pregnancy', '/topics/pregnancy', 'primaryMenuPregnancy')
  genBackToPrimaryMenuButton(1, 'pregnancyPane')
  var pregnancy = [
    { name: 'All Pregnancy', href: '/topics/pregnancy' },
    { name: 'First Trimester', href: '/topics/first-trimester' },
    { name: 'Second Trimester', href: '/topics/second-trimester' },
    { name: 'Third Trimester', href: '/topics/third-trimester' },
    { name: 'Health &amp; Wellness', href: '/topics/pregnancy-body-care' },
    { name: 'Life &amp; Career', href: '/topics/pregnancy-life-career' },
    { name: 'Twins &amp; Multiples', href: '/topics/pregnancy-twins-multiples' },
    { name: 'Baby Showers &amp; Reveals', href: '/topics/pregnancy-baby-showers' },
    { name: 'News', href: '/news' },
  ]
  genSiteNavHref(pregnancy, 'Pregnancy', 'SiteNavHref', 'pregnancyPane')
  var linksUnderPregnancy = [
    { name: 'Pregnancy Week by Week', href: '/pregnancy-week-by-week' },
    { name: 'Baby Boy Names', href: '/b/boy-baby-names' },
    { name: 'Baby Girl Names', href: '/b/girl-baby-names' },
    { name: 'Unisex Baby Names', href: '/b/unisex-baby-names' },
  ];
  genSiteNavHref(linksUnderPregnancy, undefined, 'SiteNavHref', 'pregnancyPane')
  var tools = [
    { name: 'Chinese Gender Chart', href: '/chinese-gender-chart' },
    { name: 'Due Date Calculator', href: '/due-date-calculator' },
    { name: 'Contraction Counter', href: '/calculators/contraction' },
    { name: 'Community', href: '/community' },
  ]
  genSiteNavHref(tools, 'Tools', 'SiteNavHref', 'pregnancyPane')
  genSecondaryNavigation('pregnancyPane')

  // popularLinksUnderPregnancy
  var popularLinksUnderPregnancy = [
    { name: 'First Trimester', href: '/topics/first-trimester' },
    { name: 'Second Trimester', href: '/topics/second-trimester' },
    { name: 'Third Trimester', href: '/topics/third-trimester' },
    { name: 'Pregnancy Week by Week', href: '/pregnancy-week-by-week' },
    { name: 'Baby Showers &amp; Reveals', href: '/topics/pregnancy-baby-showers' },
  ]
  genSiteNavHref(popularLinksUnderPregnancy, 'Popular links under Pregnancy', 'SiteNavHref PopularSiteNavHref', 'popularLinksUnderPregnancy')

  // Baby
  genPrimaryNavTopLevelListItem(2, 'Baby', '/baby-month-by-month', 'primaryMenuBaby')
  genBackToPrimaryMenuButton(2, "babyPane")

  var baby = [
    { name: 'All Baby', href: '/topics/parenting' },
    { name: 'Baby Month by Month', href: '/baby-month-by-month' },
    { name: 'Parenting Twins &amp; Multiples', href: '/topics/parenting-twins-multiples' },
    { name: 'Milestones', href: '/topics/parenting-baby-s-firsts' },
    { name: 'Sleep', href: '/topics/parenting-baby-sleep' },
    { name: 'Breastfeeding', href: '/topics/parenting-breastfeeding' },
    { name: 'Feeding', href: '/topics/parenting-baby-feeding' },
    { name: 'Baby Health &amp; Wellness', href: '/topics/parenting-baby-safety' },
    { name: 'Childcare', href: '/topics/parenting-childcare' },
    { name: 'News', href: '/news' },
  ]
  genSiteNavHref(baby, 'Baby', 'SiteNavHref', "babyPane")

  var tools = [
    { name: 'Breastfeeding Tracker', href: '/a/tool-breastfeeding-log' },
    { name: 'Sleep Tracker', href: '/a/tool-sleep-tracker' },
    { name: 'Vaccination Tracker', href: '/a/tool-vaccine-tracker' },
    { name: 'Input / Output Tracker', href: '/a/tool-input-output-tracker' },
    { name: 'Community', href: '/community' },
  ]
  genSiteNavHref(tools, 'Tools', 'SiteNavHref', 'babyPane')

  genSecondaryNavigation('babyPane')

  // popularLinksUnderBaby
  var popularLinksUnderBaby = [
    { name: 'Baby Month by Month', href: '/baby-month-by-month' }
  ]
  genSiteNavHref(popularLinksUnderBaby, 'Popular links under Baby', 'SiteNavHref PopularSiteNavHref', 'popularLinksUnderBaby')

  //Toddler
  genPrimaryNavTopLevelListItem(3, 'Toddler', '/topics/parenting-toddler', 'primaryMenuToddler')

  genBackToPrimaryMenuButton(3, 'toddlerPane')

  var toddler = [
    { name: 'All Toddler', href: '/topics/parenting-toddler' },
    { name: 'Toddler Development', href: '/toddler-month-by-month' },
  ]
  genSiteNavHref(toddler, 'Toddler', 'SiteNavHref', 'toddlerPane')

  var tools = [
    { name: 'Vaccination Tracker', href: '/a/tool-vaccine-tracker' },
    { name: 'Community', href: '/community' },
  ]

  genSiteNavHref(tools, 'Tools', 'SiteNavHref', 'toddlerPane')

  genSecondaryNavigation('toddlerPane')

  //popularLinksUnderToddler
  var popularLinksUnderToddler = [
    { name: 'Toddler Month by Month', href: '/toddler-month-by-month' }
  ]
  genSiteNavHref(popularLinksUnderToddler, 'Popular links under Toddler', 'SiteNavHref PopularSiteNavHref', 'popularLinksUnderToddler')


  //Parents
  genPrimaryNavTopLevelListItem(4, 'Parents', '/topics/parenting-parenting', 'primaryMenuParents')
  genBackToPrimaryMenuButton(4, 'parentsPane')

  var parents = [
    { name: 'All Parents', href: '/topics/parenting-parenting' },
    { name: 'Health &amp; Wellness', href: '/topics/parenting-post-birth-recovery' },
    { name: 'Life &amp; Relationships', href: '/topics/parenting-friends-family' },
    { name: 'Work &amp; Career', href: '/topics/parenting-working-mom' }
  ];
  genSiteNavHref(parents, 'Parents', 'SiteNavHref', 'parentsPane')

  var tools = [
    { name: 'Community', href: '/community' },
  ]
  genSiteNavHref(tools, 'Tools', 'SiteNavHref', 'parentsPane')

  genSecondaryNavigation('parentsPane')

  //Baby Products
  genPrimaryNavTopLevelListItem(5, 'Baby Products', '/topics/parenting-baby-products', 'primaryMenuBabyProducts')
  genBackToPrimaryMenuButton(5, 'babyProductsPane')

  var babyProducts = [
    { name: 'All Baby Products', href: '/topics/parenting-baby-product' },
    { name: 'Best of Baby Awards', href: '/best-of-baby' },
    { name: 'Baby Registry', href: '/topics/pregnancy-baby-registry' },
    { name: 'Toddler &amp; Baby Gear', href: '/topics/pregnancy-baby-gear' },
    { name: 'Clothing &amp; Accessories', href: '/topics/parenting-baby-clothes' },
    { name: 'Nursery Ideas', href: '/topics/pregnancy-nursery-ideas' },
    { name: 'Eco-friendly &amp; Sustainability', href: '/topics/pregnancy-eco-friendly' },
  ]

  genSiteNavHref(babyProducts, 'Baby Products', 'SiteNavHref', 'babyProductsPane')

  var tools = [
    { name: 'Community', href: '/community' },
  ]
  genSiteNavHref(tools, 'Tools', 'SiteNavHref', 'babyProductsPane')

  genSecondaryNavigation('babyProductsPane')

  //
  genSecondaryNavigation('secondaryNavigationAtLast')
}

const addBtnEventListener = () => {

  const menuButtons = document.getElementsByClassName('childMenuBtn')
  for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener('click', () => {
      const child = menuButtons[i].id.split('-')[1]
      goToChildMenu(child)
    })
  }
  
  const backMenuButtons = document.getElementsByClassName('backToPrimaryMenu')
  for (let i = 0; i < backMenuButtons.length; i++) {
    backMenuButtons[i].addEventListener('click', () => {
      const childID = menuButtons[i].id.split('-')[1]
      goBackToPrimaryMenu(childID)
    })
  }

  document.getElementById('SiteNavigation').addEventListener('click', stopPropagation)
  document.getElementById('search_form_nav').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location = `${bumpHost}/search?q=${document.getElementById('search_form_nav')['site__search'].value}`;
  })
}

render()
addBtnEventListener()
