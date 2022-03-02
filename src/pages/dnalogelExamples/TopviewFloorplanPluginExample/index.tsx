import * as React from 'react'
import TopviewFloorplanPlugin from "@realsee/dnalogel/plugins/floorplan/TopviewFloorplanPlugin";
import { work } from '../../../mockData'
import { parseWork, Five, Mode } from "@realsee/five";
import { ResponsiveFiveCanvas } from "@site/src/components/ResponsiveFiveCanvas";
import { createFiveProvider, unsafe__useFiveInstance, useFiveState } from "@realsee/five/react";
import { Box, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { floorplanServerData } from '../../../mockData'
import BrowserOnly from "@docusaurus/BrowserOnly";


interface TopviewFloorplanPluginUsePropTypes {}

const TopviewFloorplanPluginUse = (props: TopviewFloorplanPluginUsePropTypes) => {
    const five = unsafe__useFiveInstance()
    const [fiveState, setFiveState] = useFiveState()

    React.useEffect(() => {
        const topviewFloorplanPlugin = five.plugins.topviewFloorplan
        topviewFloorplanPlugin.load(floorplanServerData)
    }, [])

    return (
        <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: 'transparent' }}
            className="topview-floorplan-plugin-use"
        >
            <BottomNavigation
                showLabels
                value={fiveState.mode}
                onChange={(_, newValue: Mode) => {
                    setFiveState({ mode: newValue });
                }}
            >
                <BottomNavigationAction label="全景漫游" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>
                <BottomNavigationAction label="俯视模型" icon={<ViewInArIcon/>} value={Five.Mode.Topview}/>
            </BottomNavigation>
        </Paper>
    )

};

const FiveProvider = createFiveProvider({
    panorama: { minFov: 20, maxFov: 120 },
    imageOptions: { size: 512 },
    textureOptions: { size: 256 },
    plugins: [[
        TopviewFloorplanPlugin,
        'topviewFloorplan',
        {
            selector: '.plugin-full-screen-container',
            hoverEnable: true
        }
    ]],
    poweredByRealsee: true,
    backgroundColor: 0xffffff,
})

function TopviewFloorplanPluginExample(props) {

    const PluginFullScreenContainer = React.memo(
        () => <Box
            className="plugin-full-screen-container"
            sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        />,
        () => true
    )

    return (
        <BrowserOnly>
            {() => (
                <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, backgroundColor: 'black' }}>
                    <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref.five })}>
                        <ResponsiveFiveCanvas />
                        <PluginFullScreenContainer />
                        <TopviewFloorplanPluginUse />
                    </FiveProvider>
                </Box>
            )}
        </BrowserOnly>
    )
}

export default TopviewFloorplanPluginExample
