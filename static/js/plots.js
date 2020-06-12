var containerDiv1 = document.getElementById("vizContainer1"),
//public.tableau
url1 = "https://public.tableau.com/views/NumberofDeathsperMaritalStatuswithInteractivity/NumberofDeathsperMaritalStatus?:display_count=y&publish=yes&:origin=viz_share_link"

var containerDiv2 = document.getElementById("vizContainer2"),
//public.tableau
url2 = "https://public.tableau.com/views/Mortality_SQL_Rob/OverallMaritalStatus?:display_count=y&:origin=viz_share_link"

var containerDiv3 = document.getElementById("vizContainer3"),
//public.tableau
url3 = "https://public.tableau.com/views/CauseofDeathperEducationLevel/CauseofDeathperEducationLevel?:display_count=y&publish=yes&:origin=viz_share_link"

var containerDiv4 = document.getElementById("vizContainer4"),
//public.tableau
url4 = "https://public.tableau.com/views/Mortality_SQL_Rob/AgevsManner?:display_count=y&:origin=viz_share_link"

var containerDiv5 = document.getElementById("vizContainer5"),
//public.tableau
url5 = "https://public.tableau.com/shared/ZD7TXC2BB?:display_count=y&:origin=viz_share_link"

var containerDiv6 = document.getElementById("vizContainer6"),
//public.tableau
url6 = "https://public.tableau.com/shared/H8XTZR7ZH?:display_count=y&:origin=viz_share_link"

var containerDiv7 = document.getElementById("vizContainer7"),
//public.tableau
url7 = "https://public.tableau.com/views/Mortality_SQL_Rob/Seasonality?:display_count=y&publish=yes&:origin=viz_share_link"

var containerDiv8 = document.getElementById("vizContainer8"),
//public.tableau
url8 = "https://public.tableau.com/views/SearchingforDeath/SearchingforDeath?:display_count=y&publish=yes&:origin=viz_share_link"

var containerDiv9 = document.getElementById("vizContainer9"),
//public.tableau
url9 = "https://public.tableau.com/views/MainMortality/Seasonvs_Top5Cause?:display_count=y&publish=yes&:origin=viz_share_link"

var infantList = [url5, url6];
var vizLen = infantList.length;
var vizCount = 0;
var viz5;

options = {
    hideTabs: true,
    // onFirstInteractive: function() {
    //     console.log("Run this code when the viz has finished loading.");
    // }
};

function initViz() {

    // Create a viz object and embed it in the container div.
    var viz1 = new tableau.Viz(containerDiv1, url1, options);
    var viz2 = new tableau.Viz(containerDiv2, url2, options);
    var viz3 = new tableau.Viz(containerDiv3, url3, options);
    var viz4 = new tableau.Viz(containerDiv4, url4, options);
    var viz5 = new tableau.Viz(containerDiv5, url5, options);
    var viz6 = new tableau.Viz(containerDiv6, url6, options);
    var viz7 = new tableau.Viz(containerDiv7, url7, options);
    var viz8 = new tableau.Viz(containerDiv8, url8, options);
    var viz9 = new tableau.Viz(containerDiv9, url9, options);

}

function switchInfantTab(vizPlusMinus) {
    vizCount = vizCount + vizPlusMinus;

    if (vizCount >= vizLen) {
    // Keep the vizCount in the bounds of the array index.
        vizCount = 0;
    } else if (vizCount < 0) {
        vizCount = vizLen - 1;
    }

    if (viz5) { // If a viz object exists, delete it.
        viz5.dispose();
    }

    var vizURL = infantList[vizCount];

    var viz5 = new tableau.Viz(containerDiv5, vizURL, options);
}



// Kensuke's links
var deathsByMaritalStatus = "https://public.tableau.com/profile/kensuke.suzuki#!/vizhome/NumberofDeathsperMaritalStatuswithInteractivity/Sheet6?publish=yes"
