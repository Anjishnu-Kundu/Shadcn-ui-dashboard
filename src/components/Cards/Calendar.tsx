"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { ResponsiveTimeRange } from "@nivo/calendar"

const MyResponsiveCalendar = ({ data }: any) => {
    return <ResponsiveTimeRange
        data={data}
        from="2018-04-01"
        to="2018-08-12"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
    />
}

export default function Calendar() {
    // function generateDataArray(year: number, numberOfObjects: number, minValue: number, maxValue: number) {
    //     const dataArray = []

    //     for(let i=1; i<=numberOfObjects; i++) {
    //         const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    //         const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    //         const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    //         const date = `${year}-${month}-${day}`;

    //         dataArray.push({ "value": randomValue, "day": date });
    //     }
    //     return dataArray
    // }
    // const data = generateDataArray(2023, 20, 20, 100);

    const data = [
        {
            "value": 249,
            "day": "2018-04-12"
        },
        {
            "value": 317,
            "day": "2018-04-23"
        },
        {
            "value": 270,
            "day": "2018-05-25"
        },
        {
            "value": 156,
            "day": "2018-06-23"
        },
        {
            "value": 98,
            "day": "2018-04-30"
        },
        {
            "value": 317,
            "day": "2018-06-08"
        },
        {
            "value": 269,
            "day": "2018-05-08"
        },
        {
            "value": 396,
            "day": "2018-08-06"
        },
        {
            "value": 120,
            "day": "2018-05-02"
        },
        {
            "value": 101,
            "day": "2018-04-15"
        },
        {
            "value": 65,
            "day": "2018-05-06"
        },
        {
            "value": 201,
            "day": "2018-07-26"
        },
        {
            "value": 23,
            "day": "2018-07-17"
        },
        {
            "value": 330,
            "day": "2018-05-31"
        },
        {
            "value": 138,
            "day": "2018-07-23"
        },
        {
            "value": 366,
            "day": "2018-06-26"
        },
        {
            "value": 91,
            "day": "2018-06-05"
        },
        {
            "value": 50,
            "day": "2018-06-04"
        },
        {
            "value": 82,
            "day": "2018-08-02"
        },
        {
            "value": 170,
            "day": "2018-06-13"
        },
        {
            "value": 298,
            "day": "2018-06-12"
        },
        {
            "value": 8,
            "day": "2018-04-25"
        },
        {
            "value": 332,
            "day": "2018-06-22"
        },
        {
            "value": 342,
            "day": "2018-04-20"
        },
        {
            "value": 157,
            "day": "2018-06-20"
        },
        {
            "value": 381,
            "day": "2018-06-07"
        },
        {
            "value": 375,
            "day": "2018-08-07"
        },
        {
            "value": 60,
            "day": "2018-07-14"
        },
        {
            "value": 154,
            "day": "2018-06-02"
        },
        {
            "value": 231,
            "day": "2018-08-01"
        },
        {
            "value": 209,
            "day": "2018-06-16"
        },
        {
            "value": 100,
            "day": "2018-04-14"
        },
        {
            "value": 133,
            "day": "2018-05-04"
        },
        {
            "value": 346,
            "day": "2018-05-11"
        },
        {
            "value": 254,
            "day": "2018-06-10"
        },
        {
            "value": 131,
            "day": "2018-06-06"
        },
        {
            "value": 373,
            "day": "2018-07-01"
        },
        {
            "value": 329,
            "day": "2018-06-24"
        },
        {
            "value": 313,
            "day": "2018-07-05"
        },
        {
            "value": 394,
            "day": "2018-07-15"
        },
        {
            "value": 177,
            "day": "2018-05-24"
        },
        {
            "value": 242,
            "day": "2018-04-22"
        },
        {
            "value": 305,
            "day": "2018-06-17"
        },
        {
            "value": 115,
            "day": "2018-05-29"
        },
        {
            "value": 166,
            "day": "2018-07-07"
        },
        {
            "value": 171,
            "day": "2018-06-01"
        },
        {
            "value": 279,
            "day": "2018-07-11"
        },
        {
            "value": 111,
            "day": "2018-04-07"
        },
        {
            "value": 337,
            "day": "2018-05-30"
        },
        {
            "value": 174,
            "day": "2018-05-21"
        },
        {
            "value": 370,
            "day": "2018-07-25"
        },
        {
            "value": 325,
            "day": "2018-05-07"
        }
    ]

    // function generateDataForYear2023() {
    //     const data = [];
    //     const startDate = new Date("2023-01-01");
    //     const endDate = new Date("2023-12-31");

    //     while (startDate <= endDate) {
    //         const value = Math.floor(Math.random() * 301)
    //         const formattedDate = startDate.toISOString().split('T')[0];

    //         data.push({
    //             "value": value,
    //             "day": formattedDate,
    //         })

    //         startDate.setDate(startDate.getDate() + 1);
    //     }

    //     return data;
    // }

    // const dataArray = generateDataForYear2023()

    return <Card className="">
        <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>These are the numbers of this year.</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center w-full">
            <MyResponsiveCalendar data={data} />
        </CardContent>
    </Card>
}