import { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import robot from '../assets/robot2.glb'
interface RobotModelProps {
  scale?: number
}

export function RobotModel({ scale = 1 }: RobotModelProps) {
  const group = useRef<Group>(null)
    const { scene, animations } = useGLTF(robot)
  const { actions } = useAnimations(animations, group)

  // 添加一些动画效果
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })

  return (
    <group ref={group} dispose={null}>
      <primitive 
        object={scene} 
        scale={0.008 * scale}
        position={[0, -0.8, 0]}
      />
    </group>
  )
}

useGLTF.preload(robot) 