import * as React from 'react'
import { parseWork } from '@realsee/five'
import { createFiveProvider } from '@realsee/five/react'
import ModelViewPlugin from '@realsee/dnalogel/plugins/ModelViewPlugin'

import { work } from './work'

import './index.css'
import { ResponsiveFiveCanvas } from '@site/src/components/ResponsiveFiveCanvas'
import { ModelView } from '@site/src/components/ModelView'

const FiveProvider = createFiveProvider({
  panorama: { minFov: 20, maxFov: 120 },
  imageOptions: { size: 512 },
  textureOptions: { size: 256 },
  plugins: [[ModelViewPlugin, 'modelView']],
  poweredByRealsee: true,
  backgroundColor: 0xffffff,
})

function App(props) {
  return (
    <FiveProvider initialWork={parseWork(work)} ref={(ref) => Object.assign(window, { $five: ref.five })}>
      {/* <div className="phone-panel"> */}
      <ResponsiveFiveCanvas />
      {/* </div> */}

      <ModelView />
    </FiveProvider>
  )
}

export default App
