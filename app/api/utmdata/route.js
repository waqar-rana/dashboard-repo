import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { NextResponse } from "next/server";

const propertyId = '329824737';

// Initialize the client
const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), // Correctly format the private key
    },
});

export async function POST(request) {
    try {
        // Parse the request body to get utmSource
        const { utm, startDate, endDate } = await request.json();

        // Ensure the utm keyword is provided
        if (!utm || utm.trim() === "") {
            return NextResponse.json({ error: "UTM parameter is missing or empty." });
        }

        if(new Date(startDate) > new Date(endDate)) {
            return NextResponse.json({ error: "Start date should be less than end date" }, {status: 400});
        }

        if (new Date(startDate) < new Date("2025-01-01")) {
            return NextResponse.json({ error: "We are not offering data before 01-01-2025. Please select date after this range" }, {status: 400});
        }

        const [response] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dimensions: [
                { name: "date" }, // Get metrics grouped by day
                { name: "firstUserCampaignName" } // Filter by campaign name (UTM source)
            ],
            metrics: [
                { name: "newUsers" }, // Users metric
                { name: "totalRevenue" } // Revenue metric
            ],
            dateRanges: [
                { startDate: startDate, endDate: endDate} // Use specified or default date range
            ],
            dimensionFilter: {
                filter: {
                    fieldName: "firstUserCampaignName",
                    stringFilter: {
                        matchType: "ENDS_WITH",
                        value: `_${utm}` // Pass UTM source dynamically
                    }
                }
            },
            orderBys: [
                {
                    dimension: { orderType: "NUMERIC", dimensionName: "date" }
                }
            ]
        });

        // If no data is returned, handle that case
        if (!response.rows || response.rows.length === 0) {
            return NextResponse.json({ message: "No data found for the given UTM parameter." }, { DataNotFound: true });
        }

        // Aggregate data by date
        const dateMap = new Map();

        response.rows.forEach(row => {
            const date = row.dimensionValues[0].value; // Date for this entry
            const newUsers = parseInt(row.metricValues[0].value, 10); // Users for this date
            const revenue = parseFloat(row.metricValues[1].value); // Revenue for this date

            if (!dateMap.has(date)) {
                dateMap.set(date, { totalUsers: 0, totalRevenue: 0 });
            }

            const dateData = dateMap.get(date);
            dateData.totalUsers += newUsers;
            dateData.totalRevenue += revenue;
        });

        function formatDate(dateStr) {
            const year = dateStr.slice(0, 4);
            const month = dateStr.slice(4, 6);
            const day = dateStr.slice(6, 8);
            return `${day}-${month}-${year}`;
        }

        // Map the aggregated data to the required format
        const data = Array.from(dateMap, ([date, { totalUsers, totalRevenue }]) => {
            const avgRpm = totalUsers > 0 ? (totalRevenue / totalUsers) * 1000 : 0;
            return {
                date: formatDate(date),
                users: totalUsers,
                revenue: totalRevenue.toFixed(2),
                rpm: avgRpm.toFixed(2)
            };
        });

        // Return the response using NextResponse
        return NextResponse.json(data, { DataNotFound: false });
    } catch (error) {
        console.error('Error fetching UTM Campaign Data:', error);
        return NextResponse.json({ error: 'No Data Found' }, { status: 500 });
    }
}
