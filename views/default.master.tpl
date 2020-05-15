<!DOCTYPE html>
<html lang="{$CurrentLocale.Key}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    {asset name="Head"}
    {pocket name="Head"}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js"></script>
</head>

{assign
    "linkFormat"
    "<div class='Navigation-linkContainer'>
        <a href='%url' class='Navigation-link %class'>
            %text
        </a>
    </div>"
}
{capture name="menu"}
    {if $User.SignedIn}
        <div class="Navigation-row NewDiscussion">
            <div class="NewDiscussion mobile">
                {module name="NewDiscussionModule" reorder=$DataDrivenTitleBar}
            </div>
        </div>
    {else}
        {if !$DataDrivenTitleBar}
            <div class="Navigation-row">
                <div class="SignIn mobile">
                    {module name="MeModule"}
                </div>
            </div>
        {/if}
    {/if}
   
    {if !$DataDrivenTitleBar}
        {activity_link format=$linkFormat}
        {categories_link format=$linkFormat}
        {discussions_link format=$linkFormat}
        {knowledge_link format=$linkFormat}
        {custom_menu format=$linkFormat}
       
       
    {/if}
{/capture}

{capture name="navLinks"}
    {if !$DataDrivenTitleBar}
        {activity_link format=$linkFormat}
        {categories_link format=$linkFormat}
        {discussions_link format=$linkFormat}
        {custom_menu format=$linkFormat}
       
    {/if}
{/capture}
{assign var="SectionGroups" value=(isset($Groups) || isset($Group))}
{assign var="TemplateCss" value="
    {if $ThemeOptions.Options.hasHeroBanner}
        ThemeOptions-hasHeroBanner
    {/if}

    {if $ThemeOptions.Options.hasFeatureSearchbox}
        ThemeOptions-hasFeatureSearchbox
    {else}
        hideHomepageTitle
    {/if}

    {if $ThemeOptions.Options.panelToLeft}
        ThemeOptions-panelToLeft
    {/if}

    {if $User.SignedIn}
        UserLoggedIn
    {else}
        UserLoggedOut
    {/if}

    {if inSection('Discussion') and $Page gt 1}
        isNotFirstPage
    {/if}

    {if inSection('Group') && !isset($Group.Icon)}
        noGroupIcon
    {/if}

    locale-{$CurrentLocale.Lang}
"}

<body id="{$BodyID}" class="{$BodyClass}{$TemplateCss|strip:" "}">

    <!--[if lt IE 9]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
      <![endif]-->

    <div class="Frame" id="page">

        {if $DataDrivenTitleBar}
            <header id="titleBar" data-react="title-bar-hamburger" style="display: none!important;" data-unhide="true">
                {$smarty.capture.menu}
            </header>
        {else}
        <div class="Frame-top">
            <div class="Frame-header">
                <!---------- Main Header ---------->
                <div class="HeaderWrap">
                    <header id="tbHeader" class="tbHeader">
                        <div></div>

                        <!---------- Left Nav ---------->
                        <div class="SiteNavigationWrapper">
                            <div id="SiteNavigation" class="SiteNavigation">
                                <nav class="NavEl" id="NavEl">
                                    <div class="NavigationItemsContainer">
                                        <div class="TBSearchForm search__navigation" id="Search_Form"></div>
                                        <ul class="PrimaryNavigation">
                                            <li class="PrimaryNavTopLevelListItemWrap">
                                                <div id="primaryMenuGettingPregnant"></div>
                                                <div class="Pane" id="gettingPregnantPane"></div>
                                            </li>
                                            <li class="PrimaryNavTopLevelListItemWrap">
                                                <div id="primaryMenuPregnancy"></div>
                                                <div class="Pane" id="pregnancyPane"></div>
                                            </li>
                                            <div class="PopularLinks" id="popularLinksUnderPregnancy"></div>
                                            <li class="PrimaryNavTopLevelListItemWrap">
                                                <div id="primaryMenuBaby"></div>
                                                <div class="Pane" id="babyPane"></div>
                                            </li>
                                            <div class="PopularLinks" id="popularLinksUnderBaby"></div>
                                            <li class="PrimaryNavTopLevelListItemWrap" id="primaryMenuToddler">
                                                <div class="Pane" id="toddlerPane"></div>
                                            </li>
                                            <div class="PopularLinks" id="popularLinksUnderToddler"></div>
                                            <li class="PrimaryNavTopLevelListItemWrap" id="primaryMenuParents">
                                                <div class="Pane" id="parentsPane"></div>
                                            </li>
                                            <li class="PrimaryNavTopLevelListItemWrap" id="primaryMenuBabyProducts">
                                                <div class="Pane" id="babyProductsPane"></div>
                                            </li>
                                        </ul>
                                        <div id="secondaryNavigationAtLast"></div>
                                        <div id="leftNavSocialLink"></div>
                                        <div class="DownloadAppPromo" id="DownloadAppPromo"></div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <!---------- Left Nav END ---------->

                        <div id="MobileNavTrigger" class="MobileNavTrigger">
                            <button type="button">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#FFF" fill-rule="evenodd">
                                        <path d="M26.329 16.816H5.67a.671.671 0 110-1.342H26.33a.671.671 0 010 1.342zM26.329 8.843H5.67a.671.671 0 110-1.343H26.33a.671.671 0 010 1.343zM26.329 24.79H5.67a.671.671 0 110-1.343H26.33a.671.671 0 010 1.343z" />
                                        <path d="M16.96 16l7.842-7.845a.677.677 0 00-.957-.957l-7.853 7.845L8.16 7.198a.686.686 0 00-.957 0 .666.666 0 000 .957L15.045 16l-7.842 7.845a.666.666 0 000 .957c.125.13.298.202.478.198.18 0 .352-.071.479-.198l7.832-7.845 7.842 7.845c.125.13.299.202.479.198.18 0 .351-.071.478-.198a.687.687 0 000-.957L16.96 16z" /></g>
                                </svg>
                            </button>
                        </div>

                        <div class="Lockup"></div>

                        <!-- logout -->
                        <div id="login" class="ProfileTrigger hide"></div>

                        <!-- login -->
                        <div id="ProfileTrigger" class="ProfileTrigger" tabindex="-1"></div>
                        <div id="Profile" class="Profile">
                            <div class="ProfileWrapper">
                                <div class="MyOverview"></div>
                                <div class="SignOut"></div>
                            </div>
                        </div>
                        <div></div>
                    </header>
                </div>
                <!---------- Main Header END ---------->

                <button id="background" class="background"></button>
            </div>
            {/if}
            <div class="Frame-body">
        
                <!---------- Hero Banner ---------->
                {if $ThemeOptions.Options.hasHeroBanner && inSection(["CategoryList", "DiscussionList", "CategoryDiscussionList"])}
                    <div class="Herobanner">
                        {if {banner_image_url}}
                            <div class="Herobanner-bgImage" style="background-image:url('{banner_image_url}')"></div>
                        {/if}
                        <div class="Container">
                            {if $ThemeOptions.Options.hasFeatureSearchbox}
                                <div class="SearchBox js-sphinxAutoComplete" role="search">
                                    {if $hasAdvancedSearch === true}
                                        {module name="AdvancedSearchModule"}
                                    {else}
                                        {searchbox}
                                    {/if}
                                </div>
                            {else}
                                {if $Category}
                                    <h2 class="H HomepageTitle">{$Category.Name}{follow_button}</h2>
                                    <p class="P PageDescription">{$Category.Description}</p>
                                {else}
                                    {if {homepage_title} !== ""}
                                        <h2 class="H HomepageTitle">{homepage_title}</h2>
                                    {/if}
                                    {if $_Description}
                                        <p class="P PageDescription">{$_Description}</p>
                                    {/if}
                                {/if}
                            {/if}
                        </div>
                    </div>
                {/if}
                <!---------- Hero Banner END ---------->

                <div class="Frame-content">
                    <div class="Container">
                        <div class="Frame-contentWrap">
                            <div class="Frame-details">
                                {if !$isHomepage}
                                    <div class="Frame-row">
                                        <nav class="BreadcrumbsBox">
                                            {breadcrumbs}
                                        </nav>
                                    </div>
                                {/if}
                                {if !$DataDrivenTitleBar}
                                    <div class="Frame-row SearchBoxMobile">
                                        {if !$SectionGroups && !inSection(["SearchResults"])}
                                            <div class="SearchBox js-sphinxAutoComplete" role="search">
                                                {if $hasAdvancedSearch === true}
                                                    {module name="AdvancedSearchModule"}
                                                {else}
                                                    {searchbox}
                                                {/if}
                                            </div>
                                        {/if}
                                    </div>
                                {/if}
                                <div class="Frame-row">

                                    <!---------- Main Content ---------->
                                    <main class="Content MainContent">
                                        <!---------- Profile Page Header ---------->
                                        {if inSection("Profile")}
                                            <div class="Profile-header">
                                                <div class="Profile-photo">
                                                    <div class="PhotoLarge">
                                                        {module name="UserPhotoModule"}
                                                    </div>
                                                </div>
                                                <div class="Profile-name">
                                                    <div class="Profile-row">
                                                        <h1 class="Profile-username">
                                                            {$Profile.Name|escape:'html'}
                                                        </h1>
                                                    </div>
                                                    <div class="Profile-row">
                                                        {if isset($Rank)}
                                                            <span class="Profile-rank">
                                                                {$Rank.Label}
                                                            </span>
                                                        {/if}
                                                    </div>
                                                </div>
                                            </div>
                                        {/if}
                                        <!---------- Profile Page Header END ---------->

                                        {event name="BeforeContent"}
                                        {asset name="Content"}
                                    </main>
                                    <!---------- Main Content END ---------->

                                    <!---------- Main Panel ---------->
                                    <aside class="Panel Panel-main">
                                        {if !$SectionGroups && !$DataDrivenTitleBar}
                                            <div class="SearchBox js-sphinxAutoComplete" role="search">
                                              {searchbox}
                                            </div>
                                            {asset name="Panel"}
                                        {/if}

                                        {if !$_NoPanelAd1}
                                            {pocket name="PanelAd1" adsite="$_AdSite" adzone="$_AdZone" adparams="$_AdParams"}
                                            {/if}
                                        {if $Category.LocalResourceBadges}
                                            {pocket name="LocalResourceBadges" adsite="$_AdSite" adzone="$_AdZone" adparams="$_AdParams"}
                                        {/if}
                                            {pocket name="PanelVideo" adsite="$_AdSite" adzone="$_AdZone" adparams="$_AdParams"}
                                        {if !$_NoPanelAd2}
                                            {pocket name="PanelAd2" adsite="$_AdSite" adzone="$_AdZone" adparams="$_AdParams"}
                                        {/if} 
                                    </aside>
                                    <!---------- Main Panel END ---------->

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div class="Frame-footer">

            <!---------- Main Footer END ---------->
            <footer id="tbFooter" class="footer">
                <div class="FooterColumn">
                    <section class="topArticles"></section>
                    <section class="registryBabyGear"></section>
                </div>
                <div class="FooterColumn">
                    <section class="toolsResources"></section>
                    <section class="aboutTheBump"></section>
                </div>
                <div class="FooterColumn">
                    <section class="app"></section>
                    <section>
                        <span class="title followUs">Follow Us</span>
                        <div class="SocialLinks"></div>
                        <span class="Copyright">&#xA9;2020 The Bump</span></section>
                </div>
            </footer>
            <!---------- Main Footer END ---------->

        </div>
    </div>
    <div id="modals"></div>
    {event name="AfterBody"}
</body>

</html>