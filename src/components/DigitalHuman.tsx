import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import * as THREE from 'three';

interface DigitalHumanProps {
  onLoad?: () => void;
  isSpeaking?: boolean;
}

const DigitalHumanModel = ({ onLoad, isSpeaking }: DigitalHumanProps) => {
  const { scene, nodes, materials } = useGLTF('/models/people.glb');
  const modelRef = useRef<THREE.Group>();
  const mouthRef = useRef<THREE.Mesh>();
  
  // 查找嘴部网格
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // 根据模型的具体结构，找到嘴部网格
          // 这里需要根据实际模型调整查找条件
          if (child.name.toLowerCase().includes('mouth') || 
              child.name.toLowerCase().includes('jaw') ||
              child.name.toLowerCase().includes('face')) {
            mouthRef.current = child;
          }
        }
      });
    }
  }, [scene]);

  // 嘴部动画
  useFrame((state, delta) => {
    if (mouthRef.current && isSpeaking) {
      // 根据语音状态控制嘴部开合
      const time = state.clock.getElapsedTime();
      const mouthOpen = Math.sin(time * 10) * 0.5 + 0.5; // 0-1 之间的值
      
      // 根据模型的具体结构调整变形方式
      if (mouthRef.current.morphTargetDictionary && mouthRef.current.morphTargetInfluences) {
        // 如果有变形目标，使用变形目标
        const mouthOpenIndex = mouthRef.current.morphTargetDictionary['mouthOpen'] || 0;
        mouthRef.current.morphTargetInfluences[mouthOpenIndex] = mouthOpen;
      } else {
        // 如果没有变形目标，直接调整缩放
        mouthRef.current.scale.y = 1 + mouthOpen * 0.2;
      }
    } else if (mouthRef.current) {
      // 不说话时恢复默认状态
      if (mouthRef.current.morphTargetDictionary && mouthRef.current.morphTargetInfluences) {
        const mouthOpenIndex = mouthRef.current.morphTargetDictionary['mouthOpen'] || 0;
        mouthRef.current.morphTargetInfluences[mouthOpenIndex] = 0;
      } else {
        mouthRef.current.scale.y = 1;
      }
    }
  });

  useEffect(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={0.1}
      position={[0, -1, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
};

const DigitalHuman: React.FC<DigitalHumanProps> = ({ onLoad }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // 初始化语音合成
  useEffect(() => {
    if ('speechSynthesis' in window) {
      speechRef.current = new SpeechSynthesisUtterance();
      speechRef.current.lang = 'zh-CN';
      speechRef.current.rate = 1.0;
      speechRef.current.pitch = 1.0;
      speechRef.current.volume = 1.0;

      // 获取可用的声音
      const voices = window.speechSynthesis.getVoices();
      const chineseVoice = voices.find(voice => voice.lang.includes('zh'));
      if (chineseVoice) {
        speechRef.current.voice = chineseVoice;
      }

      // 监听语音结束事件
      speechRef.current.onend = () => {
        setIsSpeaking(false);
        setCurrentText('');
      };

      // 监听语音开始事件
      speechRef.current.onstart = () => {
        setIsSpeaking(true);
      };
    }
  }, []);

  // 说话函数
  const speak = (text: string) => {
    if (!speechRef.current || isMuted) return;
    
    // 停止当前正在播放的语音
    window.speechSynthesis.cancel();
    
    // 设置新的语音内容
    speechRef.current.text = text;
    setCurrentText(text);
    
    // 开始播放
    window.speechSynthesis.speak(speechRef.current);
  };

  // 停止说话
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setCurrentText('');
  };

  // 切换静音
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isSpeaking) {
      stopSpeaking();
    }
  };

  // 预设的对话内容
  const greetings = [
    "你好，我是你的数字分身",
    "很高兴见到你",
    "我可以为你介绍我的技能和经验",
    "有什么我可以帮你的吗？"
  ];

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm z-10">
          <div className="text-white">加载中...</div>
        </div>
      )}
      
      <div className="w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ background: 'transparent' }}
          onCreated={() => setIsLoading(false)}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <DigitalHumanModel onLoad={onLoad} isSpeaking={isSpeaking} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
          />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* 控制面板 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={() => speak(greetings[Math.floor(Math.random() * greetings.length)])}
          className={`p-2 rounded-full transition-colors ${
            isSpeaking ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isSpeaking || isMuted}
        >
          {isSpeaking ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
        </button>
        
        <button
          onClick={toggleMute}
          className={`p-2 rounded-full transition-colors ${
            isMuted ? 'bg-gray-500 hover:bg-gray-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
        </button>

        {currentText && (
          <div className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {currentText}
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalHuman; 