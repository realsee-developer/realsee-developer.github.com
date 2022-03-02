import * as React from 'react'
import ModelViewPlugin from "@realsee/dnalogel/plugins/ModelViewPlugin";
import { work } from '../../../mockData'
import { parseWork } from "@realsee/five";
import { createFiveProvider } from "@realsee/five/react";
import { ResponsiveFiveCanvas } from "@site/src/components/ResponsiveFiveCanvas";
import { ModelView } from "@site/src/components/ModelView";
import BrowserOnly from "@docusaurus/BrowserOnly";

const FiveProvider = createFiveProvider({
    panorama: { minFov: 20, maxFov: 120 },
    imageOptions: { size: 512 },
    textureOptions: { size: 256 },
    plugins: [[
        ModelViewPlugin,
        'modelView',
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
                    <ModelView />
                </FiveProvider>
            )}
        </BrowserOnly>
    )
}

export default function Home(): JSX.Element {
    return <PanoFloorplanRadarPluginExample />
}
