import { useState } from 'react'
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Sun, Moon, Settings } from 'lucide-react'

interface RobotControlsProps {
  onSpeedChange: (speed: number) => void
  onAutoRotateChange: (autoRotate: boolean) => void
  onScaleChange: (scale: number) => void
  onLightIntensityChange: (intensity: number) => void
  isMobile: boolean
}

export function RobotControls({
  onSpeedChange,
  onAutoRotateChange,
  onScaleChange,
  onLightIntensityChange,
  isMobile
}: RobotControlsProps) {
  const [autoRotate, setAutoRotate] = useState(!isMobile)
  const [speed, setSpeed] = useState(0.5)
  const [scale, setScale] = useState(1)
  const [lightIntensity, setLightIntensity] = useState(0.7)
  const [showControls, setShowControls] = useState(!isMobile)

  const handleAutoRotateToggle = () => {
    const newValue = !autoRotate
    setAutoRotate(newValue)
    onAutoRotateChange(newValue)
  }

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed)
    onSpeedChange(newSpeed)
  }

  const handleScaleChange = (newScale: number) => {
    setScale(newScale)
    onScaleChange(newScale)
  }

  const handleLightIntensityChange = (newIntensity: number) => {
    setLightIntensity(newIntensity)
    onLightIntensityChange(newIntensity)
  }

  if (isMobile) {
    return (
      <>
        {/* 移动端控制按钮 */}
        <button
          onClick={() => setShowControls(!showControls)}
          className="absolute bottom-4 right-4 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-colors duration-200"
          title="显示控制面板"
        >
          <Settings size={24} />
        </button>

        {/* 移动端控制面板 */}
        {showControls && (
          <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 w-[90%] max-w-sm border border-white/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-lg font-medium">模型控制</h3>
                <button
                  onClick={() => setShowControls(false)}
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* 自动旋转控制 */}
                <div className="flex items-center justify-between">
                  <span className="text-white">自动旋转</span>
                  <button
                    onClick={handleAutoRotateToggle}
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      autoRotate ? 'bg-primary-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {autoRotate ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                </div>

                {/* 旋转速度控制 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white">旋转速度</span>
                    <span className="text-white/60">{speed.toFixed(1)}x</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw size={20} className="text-white" />
                    <input
                      type="range"
                      min="0.1"
                      max="2"
                      step="0.1"
                      value={speed}
                      onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                      className="flex-1 accent-primary-500"
                    />
                  </div>
                </div>

                {/* 模型大小控制 */}
                <div className="space-y-2">
                  <span className="text-white">模型大小</span>
                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={() => handleScaleChange(Math.max(0.5, scale - 0.1))}
                      className="flex-1 p-3 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <ZoomOut size={20} className="mx-auto" />
                    </button>
                    <span className="text-white/60 w-12 text-center">{scale.toFixed(1)}x</span>
                    <button
                      onClick={() => handleScaleChange(Math.min(2, scale + 0.1))}
                      className="flex-1 p-3 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors duration-200"
                    >
                      <ZoomIn size={20} className="mx-auto" />
                    </button>
                  </div>
                </div>

                {/* 光照强度控制 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white">光照强度</span>
                    <span className="text-white/60">{lightIntensity.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun size={20} className="text-white" />
                    <input
                      type="range"
                      min="0.1"
                      max="1.5"
                      step="0.1"
                      value={lightIntensity}
                      onChange={(e) => handleLightIntensityChange(parseFloat(e.target.value))}
                      className="flex-1 accent-primary-500"
                    />
                    <Moon size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  // 桌面端控制面板
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 border border-white/20">
      {/* 自动旋转控制 */}
      <button
        onClick={handleAutoRotateToggle}
        className={`p-2 rounded-lg transition-colors duration-200 ${
          autoRotate ? 'bg-primary-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
        }`}
        title={autoRotate ? '暂停旋转' : '开始旋转'}
      >
        {autoRotate ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* 旋转速度控制 */}
      <div className="flex items-center gap-2">
        <RotateCcw size={20} className="text-white" />
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={speed}
          onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
          className="w-24 accent-primary-500"
        />
      </div>

      {/* 模型大小控制 */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleScaleChange(Math.max(0.5, scale - 0.1))}
          className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors duration-200"
          title="缩小"
        >
          <ZoomOut size={20} />
        </button>
        <button
          onClick={() => handleScaleChange(Math.min(2, scale + 0.1))}
          className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors duration-200"
          title="放大"
        >
          <ZoomIn size={20} />
        </button>
      </div>

      {/* 光照强度控制 */}
      <div className="flex items-center gap-2">
        <Sun size={20} className="text-white" />
        <input
          type="range"
          min="0.1"
          max="1.5"
          step="0.1"
          value={lightIntensity}
          onChange={(e) => handleLightIntensityChange(parseFloat(e.target.value))}
          className="w-24 accent-primary-500"
        />
        <Moon size={20} className="text-white" />
      </div>
    </div>
  )
} 