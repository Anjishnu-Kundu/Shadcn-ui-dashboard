'use client'

// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }: any) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 0, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="basis"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="data.yFormatted"
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

const data = [
    {
      "id": "japan",
      "color": "hsl(349, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 283
        },
        {
          "x": "helicopter",
          "y": 292
        },
        {
          "x": "boat",
          "y": 198
        },
        {
          "x": "train",
          "y": 240
        },
        {
          "x": "subway",
          "y": 226
        },
        {
          "x": "bus",
          "y": 49
        },
        {
          "x": "car",
          "y": 197
        },
        {
          "x": "moto",
          "y": 103
        },
        {
          "x": "bicycle",
          "y": 64
        },
        {
          "x": "horse",
          "y": 245
        },
        {
          "x": "skateboard",
          "y": 103
        },
        {
          "x": "others",
          "y": 6
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(255, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 52
        },
        {
          "x": "helicopter",
          "y": 53
        },
        {
          "x": "boat",
          "y": 69
        },
        {
          "x": "train",
          "y": 281
        },
        {
          "x": "subway",
          "y": 253
        },
        {
          "x": "bus",
          "y": 147
        },
        {
          "x": "car",
          "y": 150
        },
        {
          "x": "moto",
          "y": 108
        },
        {
          "x": "bicycle",
          "y": 215
        },
        {
          "x": "horse",
          "y": 210
        },
        {
          "x": "skateboard",
          "y": 245
        },
        {
          "x": "others",
          "y": 155
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(261, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 122
        },
        {
          "x": "helicopter",
          "y": 31
        },
        {
          "x": "boat",
          "y": 279
        },
        {
          "x": "train",
          "y": 35
        },
        {
          "x": "subway",
          "y": 38
        },
        {
          "x": "bus",
          "y": 292
        },
        {
          "x": "car",
          "y": 169
        },
        {
          "x": "moto",
          "y": 179
        },
        {
          "x": "bicycle",
          "y": 3
        },
        {
          "x": "horse",
          "y": 125
        },
        {
          "x": "skateboard",
          "y": 109
        },
        {
          "x": "others",
          "y": 74
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(48, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 47
        },
        {
          "x": "helicopter",
          "y": 205
        },
        {
          "x": "boat",
          "y": 41
        },
        {
          "x": "train",
          "y": 170
        },
        {
          "x": "subway",
          "y": 274
        },
        {
          "x": "bus",
          "y": 149
        },
        {
          "x": "car",
          "y": 117
        },
        {
          "x": "moto",
          "y": 74
        },
        {
          "x": "bicycle",
          "y": 180
        },
        {
          "x": "horse",
          "y": 259
        },
        {
          "x": "skateboard",
          "y": 166
        },
        {
          "x": "others",
          "y": 245
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(79, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 57
        },
        {
          "x": "helicopter",
          "y": 177
        },
        {
          "x": "boat",
          "y": 103
        },
        {
          "x": "train",
          "y": 18
        },
        {
          "x": "subway",
          "y": 281
        },
        {
          "x": "bus",
          "y": 157
        },
        {
          "x": "car",
          "y": 49
        },
        {
          "x": "moto",
          "y": 75
        },
        {
          "x": "bicycle",
          "y": 2
        },
        {
          "x": "horse",
          "y": 22
        },
        {
          "x": "skateboard",
          "y": 213
        },
        {
          "x": "others",
          "y": 168
        }
      ]
    }
  ]

export default function Lines() {
  return (
      <Card className="">
        <CardHeader>
            <CardTitle>Lines</CardTitle>
            <CardDescription>These are the stats of this year.</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center w-full">
            <MyResponsiveLine data={data} />
        </CardContent>
    </Card>
  )
}
