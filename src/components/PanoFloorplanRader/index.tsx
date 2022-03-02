import * as React from 'react';
import './index.css'
import PanoFloorplanRadarPlugin from "@realsee/dnalogel/plugins/floorplan/PanoFloorplanRadarPlugin";
import { useFivePlugin } from "@realsee/dnalogel/shared-utils/five/useFivePlugin";
import { FloorplanServerData } from '@realsee/dnalogel/plugins/floorplan/typings/floorplanServerData'
import { useFiveState } from "@realsee/five/react";


interface PanoFloorplanRadarPropTypes {
    floorplanServerData: FloorplanServerData
}

const PanoFloorplanRadar = (props: PanoFloorplanRadarPropTypes) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [, setFiveState] = useFiveState()

    const panoFloorplanRadar = useFivePlugin<typeof PanoFloorplanRadarPlugin>('panoFloorplanRadar')

    React.useEffect(() => {
        if (!ref.current) return
        panoFloorplanRadar.appendTo(ref.current)
        panoFloorplanRadar.load(props.floorplanServerData)
    }, [])

    function handleClick() {
        setFiveState({ mode: "Floorplan" })
    }

    return (
        <div
            ref={ref}
            className="five-PanoFloorplanRadarPlugin"
            onClick={handleClick}
        />
    )

};

export default PanoFloorplanRadar;
