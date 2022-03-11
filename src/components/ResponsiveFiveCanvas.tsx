import * as React from 'react'
import { FiveCanvas } from '@realsee/five/react'
import { debounce } from '../utils/debounce'

/**
 * 响应式 FiveCanvas
 *
 * @description 会根据浏览器窗口宽高变化自适应 `Five` 画布面板。
 */

export function ResponsiveFiveCanvas() {
  const [size, setSize] = React.useState<{ width: number; height: number }>({ width: 0, height: 0 })
  const ref = React.useRef<HTMLDivElement>(null)
  const fixedHeightRef = React.useRef<boolean>(false)

  React.useEffect(() => {
    if (!ref.current) return

    setSize({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    })

    const updateState = debounce(({ width, height }) => {
      setSize({ width, height })
      console.log('updateState')
    })
    const observer = new ResizeObserver((entries) => {

      const entry = entries[0]
      const width = entry.contentRect.width
      const height = entry.contentRect.height
 
      updateState({ width, height })
    })

    observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
      observer.disconnect()
    }
  }, [])


  return (
    <div
      className="ResponsiveFiveCanvas"
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 1,
        opacity: size.width === 0 || size.height === 0 ? 0 : 1,
      }}
    >
      <FiveCanvas width={size.width} height={size.height} />
    </div>
  )
}
