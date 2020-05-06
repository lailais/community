import { dataURIs } from './imagesDataURIs';

const getList = (bumpHost) => {
  const topArticles = {
    header: 'Top Articles',
    links: [{
      url: `${bumpHost}/topics/pregnancy-baby-showers`,
      text: 'Baby Shower',
      id: 'baby-shower',
      selection: 'articles > baby shower'
    }, {
      url: `${bumpHost}/a/top-pregnancy-fears`,
      text: 'Pregnancy Fears',
      id: 'pregnancy-fears',
      selection: 'articles > pregnancy fears'
    }, {
      url: `${bumpHost}/a/ovulation-symptoms-signs-of-ovulation`,
      text: 'Signs of Ovulation',
      id: 'signs-ovulation',
      selection: 'articles > signs of ovulation'
    }, {
      url: `${bumpHost}/a/best-pregnancy-tests`,
      text: 'Best Pregnancy Tests',
      id: 'best-pregnancy-tests',
      selection: 'articles > best pregnancy tests'
    }, {
      url: `${bumpHost}/a/early-signs-of-pregnancy`,
      text: 'Early Signs of Pregnancy',
      id: 'early-signs-of-pregnancy',
      selection: 'articles > early signs of pregnancy'
    }, {
      url: `${bumpHost}/a/pregnancy-announcement-ideas`,
      text: 'Pregnancy Announcement Ideas',
      id: 'pregnancy-announcement-ideas',
      selection: 'articles > pregnancy announcement ideas'
    }, {
      url: `${bumpHost}/topics/pregnancy-nursery-ideas`,
      text: 'Nursery Ideas',
      id: 'pregnancy-nursery-ideas',
      selection: 'articles > nursery ideas'
    }, {
      url: `${bumpHost}/a/creative-baby-gender-reveal-ideas`,
      text: 'Gender Reveal Ideas',
      id: 'creative-baby-gender-reveal-ideas',
      selection: 'articles > gender reveal ideas'
    }, {
      url: `${bumpHost}/a/baby-rash`,
      text: 'Baby Rashes',
      id: 'baby-rash',
      selection: 'articles > baby rashes'
    }, {
      url: `${bumpHost}/a/finger-foods-for-baby`,
      text: 'Baby Finger Foods',
      id: 'finger-foods-for-baby',
      selection: 'articles > baby finger foods'
    }]
  }
  const registryBabyGear = {
    header: 'Registry & Baby Gear',
    links: [{
      url: `${bumpHost}/registry`,
      text: 'Baby Registry',
      id: 'registry',
      selection: 'registry > baby registry'
    }, {
      url: `${bumpHost}/babyregistrysearch`,
      text: 'Baby Registry Search',
      id: 'baby-registry-search',
      selection: 'registry > baby registry search'
    }, {
      url: `${bumpHost}/a/registry-101`,
      text: 'Baby Registry Checklist',
      id: 'baby-registry-checklist',
      selection: 'registry > baby registry checklist'
    }, {
      url: `${bumpHost}/a/mom-must-haves`,
      text: 'Gifts for New Moms',
      id: 'mom-must-haves',
      selection: 'registry > gifts for new moms'
    }, {
      url: `${bumpHost}/a/best-strollers`,
      text: 'Best Strollers',
      id: 'best-strollers',
      selection: 'registry > best strollers'
    }, {
      url: `${bumpHost}/a/10-best-baby-cribs`,
      text: 'Best Cribs',
      id: 'best-cribs',
      selection: 'registry > best cribs'
    }, {
      url: `${bumpHost}/a/top-10-car-seats`,
      text: 'Best Car Seats',
      id: 'best-car-seats',
      selection: 'registry > best car seats'
    }, {
      url: `${bumpHost}/a/checklist-baby-essentials`,
      text: 'Best Essentials Checklist',
      id: 'checklist-baby-essentials',
      selection: 'registry > baby essentials checklist'
    }, {
      url: `${bumpHost}/best-of-baby`,
      text: 'Best of Baby Awards',
      id: 'best-of-baby',
      selection: 'registry > best of baby awards'
    }]
  }

  const toolsResources = {
    header: 'Tools & Resources',
    links: [{
      url: `${bumpHost}/pregnancy-week-by-week`,
      text: 'Pregnancy Week by Week',
      id: 'pregnancy-week-by-week',
      selection: 'tools > pregnancy week by week'
    }, {
      url: `${bumpHost}/a/checklist-packing-a-hospital-bag`,
      text: 'Hospital Bag Checklist',
      id: 'hospital-bag-checklist',
      selection: 'tools > hospital bag checklist'
    }, {
      url: `${bumpHost}/baby-names`,
      text: 'Baby Names',
      id: 'baby-names',
      selection: 'tools > baby names'
    }, {
      url: `${bumpHost}/baby-names/baby-boy-names`,
      text: 'Baby Boy Names',
      id: 'baby-boy-names',
      selection: 'tools > baby boy names'
    }, {
      url: `${bumpHost}/baby-names/baby-girl-names`,
      text: 'Baby Girl Names',
      id: 'baby-girl-names',
      selection: 'tools > baby girl names'
    }, {
      url: `${bumpHost}/baby-names/unique-baby-names`,
      text: 'Unique Baby Names',
      id: 'unique-baby-names',
      selection: 'tools > unique baby names'
    }, {
      url: `${bumpHost}/chinese-gender-chart`,
      text: 'Chinese Gender Chart',
      id: 'chinese-gender-chart',
      selection: 'tools > chinese gender chart'
    }, {
      url: `${bumpHost}/a/am-i-pregnant-quiz`,
      text: 'Am I Pregnant Quiz',
      id: 'am-i-pregnant-quiz',
      selection: 'tools > am i pregnant quiz'
    }, {
      url: `${bumpHost}/calculators/duedate`,
      text: 'Due Date Calculator',
      id: 'calculators-duedate',
      selection: 'tools > due date calculator'
    }, {
      url: `${bumpHost}/calculators/ovulation`,
      text: 'Ovulation Calculator',
      id: 'ovulation-calculator',
      selection: 'tools > ovulation calendar'
    }, {
      url: `${bumpHost}/calculators/contraction`,
      text: 'Contraction Timer',
      id: 'calculators-contraction',
      selection: 'tools > contraction timer'
    }, {
      url: `${bumpHost}/topics/parenting-breastfeeding`,
      text: 'Breastfeeding',
      id: 'parenting-breastfeeding',
      selection: 'tools > breastfeeding'
    }]
  }

  const aboutTheBump = {
    header: 'About The Bump',
    links: [{
      url: `${bumpHost}/about-us`,
      text: 'About Us and Contact',
      id: 'about-us',
      selection: 'about us and contact'
    }, {
      url: 'https://www.theknotww.com/advertising/',
      text: 'Advertise With Us',
      id: 'advertising',
      selection: 'advertise with us'
    }, {
      url: `${bumpHost}/privacy-policy`,
      text: 'Privacy Policy',
      id: 'privacy-policy',
      selection: 'privacy policy'
    }, {
      url: `${bumpHost}/terms`,
      text: 'Terms of Use',
      id: 'terms',
      selection: 'terms of use'
    }, {
      url: 'https://theknotww.zendesk.com/hc/en-us/requests/new?ticket_form_id=360000590371',
      text: 'Do Not Sell My Info',
      id: 'my-info',
      selection: 'Do Not Sell My Info'
    }]
  }

  const ourSisterSites = {
    header: 'Our Sister Sites',
    links: [{
      url: 'https://www.theknot.com/',
      id: 'knot-logo',
      text: 'KnotLogo',
      selection: 'visit our sister sites > the knot'
    }, {
      url: 'https://www.thebash.com/',
      id: 'bash-logo',
      text: 'BashLogo',
      selection: 'visit our sister sites > the bash'
    }]
  }

  const app = {
    header: 'Get the app on your mobile device',
    links: [{
      url: 'https://app.appsflyer.com/com.xogrp.thebump?pid=direct&c=web_footer&af_adset=desktop&af_ad=bottom',
      id: 'google-play',
      img: {
        src: dataURIs.googlePlay,
        alt: 'Download The Bump App from Google Play'
      },
      selection: 'download our apps > the bump android'
    }, {
      url: 'https://app.appsflyer.com/id568940747?pid=direct&c=web_footer&af_adset=desktop&af_ad=bottom',
      id: 'apple-app-store',
      img: {
        src: dataURIs.appleAppStore,
        alt: 'Download The Bump App from the Apple App Store'
      },
      selection: 'download our apps > the bump ios'
    }]
  }

  return { topArticles, registryBabyGear, toolsResources, aboutTheBump, ourSisterSites, app }
}
export default getList