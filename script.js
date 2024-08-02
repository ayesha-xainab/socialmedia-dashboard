// Load the Google Charts library
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawCharts);

// Function to draw charts
function drawCharts() {
    // Data for Follower Growth Chart
    const followerGrowthData = google.visualization.arrayToDataTable([
        ['Month', 'Followers'],
        ['Jan',  60],
        ['Feb',  80],
        ['Mar',  50],
        ['Apr',  70],
        ['May',  60],
        ['Jun',  60]
    ]);

    const followerGrowthOptions = {
        title: 'Followers Growth (x-Millions)',
        curveType: 'function',
        legend: { position: 'bottom', textStyle: { color: '#f0f0f0' } },
        backgroundColor: 'transparent',
        titleTextStyle: { color: '#f0f0f0' },
        hAxis: { textStyle: { color: '#f0f0f0' }, gridlines: { color: '#444' } },
        vAxis: { textStyle: { color: '#f0f0f0' }, gridlines: { color: '#444' } }
    };

    const followerGrowthChart = new google.visualization.LineChart(document.getElementById('followerGrowthChart'));
    followerGrowthChart.draw(followerGrowthData, followerGrowthOptions);

    // Data for Engagement Rate Chart
    const engagementRateData = google.visualization.arrayToDataTable([
        ['Month', 'ER'],
        ['Jan',  40],
        ['Feb',  30],
        ['Mar',  55],
        ['Apr',  46],
        ['May',  60],
        ['Jun',  25]
    ]);

    const engagementRateOptions = {
        title: 'Engagement Rate (% per month)',
        hAxis: { textStyle: { color: '#f0f0f0' }, gridlines: { color: '#444' } },
        vAxis: { textStyle: { color: '#f0f0f0' }, gridlines: { color: '#444' } },
        backgroundColor: 'transparent',
        titleTextStyle: { color: '#f0f0f0' },
        legend: { textStyle: { color: '#f0f0f0' } }
    };

    const engagementRateChart = new google.visualization.BarChart(document.getElementById('engagementRateChart'));
    engagementRateChart.draw(engagementRateData, engagementRateOptions);
}
