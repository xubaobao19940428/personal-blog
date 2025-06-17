import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { RobotModel } from './RobotModel'
import { RobotControls } from './RobotControls'
import { useEffect, useState, useRef } from 'react'

export function RobotScene() {
  const [isMobile, setIsMobile] = useState(false)
  const [autoRotate, setAutoRotate] = useState(!isMobile)
  const [rotationSpeed, setRotationSpeed] = useState(0.5)
  const [modelScale, setModelScale] = useState(1)
  const [lightIntensity, setLightIntensity] = useState(0.7)
  const controlsRef = useRef<any>(null)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // 移动端默认开启自动旋转
      setAutoRotate(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 监听自动旋转状态变化
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate
    }
  }, [autoRotate])

  // 监听旋转速度变化
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotateSpeed = rotationSpeed
    }
  }, [rotationSpeed])

  const handleSpeedChange = (speed: number) => {
    setRotationSpeed(speed)
  }

  const handleAutoRotateChange = (value: boolean) => {
    setAutoRotate(value)
  }

  const handleScaleChange = (scale: number) => {
    setModelScale(scale)
  }

  const handleLightIntensityChange = (intensity: number) => {
    setLightIntensity(intensity)
  }

  return (
    <div className="w-full h-[350px] md:h-[400px] lg:h-[600px] relative">
      <Canvas
        camera={{ 
          position: isMobile ? [0, 0, 2.5] : [0, 0, 4.5],
          fov: isMobile ? 35 : 45,
          near: 0.1,
          far: 1000
        }}
        style={{ background: 'transparent' }}
        dpr={[1, isMobile ? 1.5 : 2]}
      >
        <ambientLight intensity={lightIntensity} />
        <spotLight 
          position={isMobile ? [3, 3, 3] : [5, 5, 5]}
          angle={0.3} 
          penumbra={1} 
          intensity={0.8}
        />
        <RobotModel scale={modelScale} />
        <OrbitControls 
          ref={controlsRef}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI * 3/4}
          enablePan={false}
          enableRotate={!isMobile}
          autoRotate={autoRotate}
          autoRotateSpeed={rotationSpeed}
          dampingFactor={0.05} // 添加阻尼效果
          rotateSpeed={0.5} // 降低手动旋转速度
        />
        <Environment preset="city" />
      </Canvas>

      <RobotControls
        onSpeedChange={handleSpeedChange}
        onAutoRotateChange={handleAutoRotateChange}
        onScaleChange={handleScaleChange}
        onLightIntensityChange={handleLightIntensityChange}
        isMobile={isMobile}
      />
    </div>
  )
} 