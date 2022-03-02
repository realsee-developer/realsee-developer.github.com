import * as React from 'react'
import Loading from '@site/src/components/Loading'
import { parseWork } from "@realsee/five";
import { createFiveProvider } from "@realsee/five/react";
import { ResponsiveFiveCanvas } from "@site/src/components/ResponsiveFiveCanvas";
import { work1, work2 } from './work'

const FiveProvider = createFiveProvider({
    panorama: { minFov: 20, maxFov: 120 },
    imageOptions: { size: 512 },
    textureOptions: { size: 256 },
    poweredByRealsee: true,
    backgroundColor: 0xffffff,
})

function LoadingExample(props) {
    return (
        <FiveProvider initialWork={parseWork(work1)} ref={ref => Object.assign(window, { $five: ref.five })}>
            <ResponsiveFiveCanvas />
            <Loading />
        </FiveProvider>
    )
}

export default LoadingExample
