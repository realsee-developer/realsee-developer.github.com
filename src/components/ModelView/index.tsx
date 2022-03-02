import * as React from 'react'
import { useFivePlugin } from '@realsee/dnalogel/shared-utils/five/useFivePlugin'
import './index.css'
import ModelViewPlugin from '@realsee/dnalogel/plugins/ModelViewPlugin'
import { useFiveState } from '@realsee/five/react'
import { Five } from '@realsee/five'

export function ModelView() {
  const ref = React.useRef<HTMLDivElement>(null)
  const [, setFiveState] = useFiveState()
  const modelView = useFivePlugin<typeof ModelViewPlugin>('modelView')

  React.useEffect(() => {
    if (!ref.current) return
    modelView.appendTo(ref.current)
  }, [])
  return (
    <div ref={ref} onClick={() => setFiveState({ mode: Five.Mode.Floorplan })} className="five-ModelViewPlugin"></div>
  )
}
