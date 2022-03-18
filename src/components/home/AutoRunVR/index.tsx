import * as React from 'react'
// import { Five, FiveInitArgs, parseWork } from '@realsee/five'
import { Five, FiveInitArgs, parseWork } from '@realsee/five'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import { createFiveProvider, unsafe__useFiveInstance, useFiveEventCallback } from '@realsee/five/react'

import work from '@realsee/open-works/virtual/81980RNawnbCVaLz0a/work.json'

import { ResponsiveFiveCanvas } from '../../ResponsiveFiveCanvas'
import { Rotation } from '@realsee/dnalogel/plugins/CameraMovementPlugin/typing'

export function createAutoRunVR() {

  const defaultInitArgs: FiveInitArgs = {
    backgroundColor: 0xff0000,
    imageOptions: { size: 256 },
    textureOptions: { size: 64 },
    onlyRenderIfNeeds: true,
    antialias: false,
    model: {},
  }

  const FiveProvider = createFiveProvider(defaultInitArgs)

  const waiting = (time: number) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(true), time)
    })

  function AutoRun() {
    const five = unsafe__useFiveInstance()

    useFiveEventCallback('modelLoaded', () => {
      if (!ExecutionEnvironment.canUseDOM) {
        return
      }
      const CameraMovementPlugin = require('@realsee/dnalogel/plugins/CameraMovementPlugin').default
      const cameraMovementPlugin = CameraMovementPlugin(five, {})

      const callback = async () => {
        // 15s
        await cameraMovementPlugin.rotate(
          {
            fov: 120,
            latitude: 0.12900782075671083,
            longitude: 6.230574572010345,
            rotation: Rotation.Anticlockwise,
          },
          15000
        )
        // 2s
        await five.changeMode(Five.Mode.Floorplan, {}, 2000)
        // 2s
        await waiting(2000)
        // 5s
        await five.updateCamera(
          {
            fov: 80,
            latitude: 0.9376970139721618,
            longitude: 2.7173023248098125,
          },
          5000
        )
        // 2s
        await waiting(2000)

        // 2s
        await five.changeMode(
          Five.Mode.Panorama,
          {
            fov: 90,
            latitude: 0,
            longitude: 1.4774911460398048,
          },
          2000
        )

        await waiting(2000)
        callback()
      }
      callback()

      return () => {}
    })
    return <></>
  }

  return function AutoRunVR() {
    if (!ExecutionEnvironment.canUseDOM) {
      return <></>
    }
    return (
      <FiveProvider
        initialWork={parseWork(work)}
        initialState={{
          panoIndex: 7,
          fov: 90,
          mode: 'Panorama',
        }}
        ref={(ref) => {
          if (ExecutionEnvironment.canUseDOM) {
            Object.assign(window, { $five: ref?.five })
          }
        }}
      >
        <ResponsiveFiveCanvas />
        <AutoRun />
      </FiveProvider>
    )
  }
}
