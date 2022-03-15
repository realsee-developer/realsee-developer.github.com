import * as React from 'react'
import { Five, FiveInitArgs, parseWork } from '@realsee/five'
import { createFiveProvider, unsafe__useFiveInstance, useFiveEventCallback } from '@realsee/five/react'

import work from '@realsee/open-works/virtual/816lPVZQkQDF5XOpPo/work.json'

import { ResponsiveFiveCanvas } from '../../ResponsiveFiveCanvas'
import CameraMovementPlugin from '@realsee/dnalogel/plugins/CameraMovementPlugin'
import { useFivePlugin } from '@realsee/dnalogel/shared-utils/five/useFivePlugin'
import { Rotation } from '@realsee/dnalogel/plugins/CameraMovementPlugin/typing'

const defaultInitArgs: FiveInitArgs = {
  // backgroundColor: 0xffffff,
  backgroundColor: 0xff0000,
  imageOptions: { size: 256 },
  textureOptions: { size: 64 },
  onlyRenderIfNeeds: true,
  antialias: false,
  model: {},
  plugins: [[CameraMovementPlugin, 'cameraMovementPlugin', {}]],
}

const FiveProvider = createFiveProvider(defaultInitArgs)

const waiting = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), time)
  })

function AutoRun() {
  const cameraMovementPlugin = useFivePlugin<typeof CameraMovementPlugin>('cameraMovementPlugin')
  const five = unsafe__useFiveInstance()

  useFiveEventCallback('modelLoaded', () => {
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

    // const intervalId = setInterval(() => {
    //   callback()
    // }, 30000)

    return () => {
      // if (intervalId) clearInterval(intervalId)
    }
  })
  return <></>
}

export function AutoRunVR() {
  return (
    <FiveProvider
      initialWork={parseWork(work)}
      initialState={{
        panoIndex: 4,
        fov: 90,
        // latitude: 0.08537924222344828,
        // longitude: 2.692752190220825,
        mode: 'Panorama',
      }}
      ref={(ref) => Object.assign(window, { $five: ref?.five })}
    >
      <ResponsiveFiveCanvas />
      <AutoRun />
    </FiveProvider>
  )
}
