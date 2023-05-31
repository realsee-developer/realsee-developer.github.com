import * as React from "react";
// import { Five, FiveInitArgs, parseWork } from '@realsee/five'
import { Five, FiveInitArgs, parseWork } from "@realsee/five";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import {
  createFiveProvider,
  unsafe__useFiveInstance,
  useFiveEventCallback,
} from "@realsee/five/react";

import work from "@realsee/open-works/virtual/816lPVZQkQDF5XOpPo/work.json";

import { ResponsiveFiveCanvas } from "../../ResponsiveFiveCanvas";
import { Rotation } from "@realsee/dnalogel/plugins/CameraMovementPlugin/typing";
import { CameraMovementPlugin } from "@realsee/dnalogel/plugins/CameraMovementPlugin";
import BrowserOnly from "@docusaurus/BrowserOnly";

const waiting = (time: number) =>
  new Promise((resolve) => setTimeout(() => resolve(true), time));

const AutoRun = () => {
  const five = unsafe__useFiveInstance();

  const animation = React.useCallback(async () => {
    const cameraMovementPlugin = five.plugins.cameraMovementPlugin;
    await cameraMovementPlugin.rotate(
      {
        fov: 120,
        latitude: 0.12900782075671083,
        longitude: 6.230574572010345,
        rotation: Rotation.Anticlockwise,
      },
      15000
    );
    // 2s
    await five.changeMode(Five.Mode.Floorplan, {}, 2000);
    // 2s
    await waiting(2000);
    // 5s
    await five.updateCamera(
      {
        fov: 80,
        latitude: 0.9376970139721618,
        longitude: 2.7173023248098125,
      },
      5000
    );
    // 2s
    await waiting(2000);

    // 2s
    await five.changeMode(
      Five.Mode.Panorama,
      {
        fov: 90,
        latitude: 0,
        longitude: 1.4774911460398048,
      },
      2000
    );

    await waiting(2000);
    return await animation();
  }, []);

  React.useEffect(() => {
    five.ready().then(async () => await animation());
  }, [five]);

  return <></>;
};

const AutoRunVR = () => {
  const defaultInitArgs: FiveInitArgs = {
    imageOptions: { size: 256 },
    textureOptions: { size: 64 },
    plugins: [[CameraMovementPlugin, "cameraMovementPlugin"]],
  };

  const FiveProvider = createFiveProvider(defaultInitArgs);

  return (
    <FiveProvider
      initialWork={parseWork(work)}
      initialState={{
        panoIndex: 7,
        fov: 90,
        mode: "Panorama",
      }}
      ref={(ref) => {
        if (ExecutionEnvironment.canUseDOM) {
          Object.assign(window, { $five: ref?.five });
        }
      }}
    >
      <ResponsiveFiveCanvas />
      <AutoRun />
    </FiveProvider>
  );
};

export default () => <BrowserOnly>{() => <AutoRunVR></AutoRunVR>}</BrowserOnly>;
