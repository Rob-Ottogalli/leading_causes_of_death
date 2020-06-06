function initViz() {
    var containerDiv1 = document.getElementById("vizContainer1"),
        //public.tableau
        url1 = "https://public.tableau.com/views/DeathsPerGender/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link"

        // tableau online
        // url1 = "https://prod-useast-a.online.tableau.com/t/analyzingleadingdeathcauseinus/views/DeathsPerGender/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
    options = {
        hideTabs: true,
        onFirstInteractive: function() {
            console.log("Run this code when the viz has finished loading.");
        }
    };
    var containerDiv2 = document.getElementById("vizContainer2"),
        //public.tableau
        url2 = "https://public.tableau.com/views/DeathsPerGender/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link"

        // tableau online
        // url2 = "https://prod-useast-a.online.tableau.com/t/analyzingleadingdeathcauseinus/views/DeathsPerGender/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
    options = {
        hideTabs: true,
        onFirstInteractive: function() {
            console.log("Run this code when the viz has finished loading.");
        }
    };
    var containerDiv3 = document.getElementById("vizContainer3"),
        //public.tableau
        url3 = "https://public.tableau.com/views/DeathsPerGender/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link"

        // tableau online
        // url3 = "https://prod-useast-a.online.tableau.com/t/analyzingleadingdeathcauseinus/views/DeathsPerGender/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
    options = {
        hideTabs: true,
        onFirstInteractive: function() {
            console.log("Run this code when the viz has finished loading.");
        }
    };
    var containerDiv4 = document.getElementById("vizContainer4"),
        //public.tableau
        url4 = "https://public.tableau.com/views/DeathsPerGender/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link"

        // tableau online
        // url4 = "https://prod-useast-a.online.tableau.com/t/analyzingleadingdeathcauseinus/views/DeathsPerGender/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
    options = {
        hideTabs: true,
        onFirstInteractive: function() {
            console.log("Run this code when the viz has finished loading.");
        }
    };
    // Create a viz object and embed it in the container div.
    var viz1 = new tableau.Viz(containerDiv1, url1, options);
    var viz2 = new tableau.Viz(containerDiv2, url2, options);
    var viz3 = new tableau.Viz(containerDiv3, url3, options);
    var viz4 = new tableau.Viz(containerDiv4, url4, options);
}

// initViz();