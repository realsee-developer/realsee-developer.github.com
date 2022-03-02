import * as React from 'react'
import PanoFloorplanRadarPlugin from "@realsee/dnalogel/plugins/floorplan/PanoFloorplanRadarPlugin";
import { work, floorplanServerData } from '../../../mockData'
import { parseWork } from "@realsee/five";
import { createFiveProvider } from "@realsee/five/react";
import { ResponsiveFiveCanvas } from "@site/src/components/ResponsiveFiveCanvas";
import PanoFloorplanRadar from "@site/src/components/PanoFloorplanRader";
import BrowserOnly from "@docusaurus/BrowserOnly";

const FiveProvider = createFiveProvider({
    panorama: { minFov: 20, maxFov: 120 },
    imageOptions: { size: 512 },
    textureOptions: { size: 256 },
    plugins: [[
        PanoFloorplanRadarPlugin,
        'panoFloorplanRadar',
        {
            configs: {
                hoverEnable: true
            }
        }
    ]],
    poweredByRealsee: true,
    backgroundColor: 0xffffff,
})

function PanoFloorplanRadarPluginExample(props) {
 return (
     <BrowserOnly>
         {() => (
             <FiveProvider initialWork={parseWork(work)} ref={ref => Object.assign(window, { $five: ref.five })}>
                 <ResponsiveFiveCanvas />
                 <PanoFloorplanRadar
                     floorplanServerData={floorplanServerData}
                 />
             </FiveProvider>
         )}
     </BrowserOnly>
 )
}

export default PanoFloorplanRadarPluginExample
