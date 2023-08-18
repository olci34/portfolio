/* eslint-disable no-unused-vars */
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
  Cloud,
  Html,
  useGLTF,
} from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { easing } from 'maath';

const GOLDENRATIO = 1.61803398875;

export const App = ({ images }) => (
  <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 4, 15] }}>
    <color attach='background' args={['#191920']} />
    <fog attach='fog' args={['#191920', 3, 15]} />
    <group position={[0, -0.5, 0]}>
      <Frames images={images} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[400, 300]}
          resolution={2048}
          mixBlur={1}
          mixStrength={100}
          roughness={0.8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color='#050505'
          metalness={0.9}
        />
      </mesh>
    </group>
    <Cloud position={[6, 5, -10]} speed={0.4} opacity={0.5} depth={1} width={3} />
    <Cloud position={[0, 6, -6]} speed={0.7} opacity={0.2} depth={1.3} width={3} />
    <Cloud position={[-6, 4.3, -10]} speed={0.4} opacity={0.5} depth={1} width={3} />
    <Cloud position={[10, 4, -10]} speed={0.4} opacity={0.5} depth={0.7} width={1} />
    <Cloud position={[-10, 4.3, -10]} speed={0.4} opacity={0.5} depth={0.7} width={1} />
    <Text fontSize={2} color='#101015' position={[0, 4, -4]}>
      Murat Ogulcan Sahin
    </Text>
    <Stat position={[0, 0, 3]} scale={0.02} />
    <Environment preset='city' />
  </Canvas>
);

function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute('/item/:id');
  const [, setLocation] = useLocation();
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 4.5);
      q.identity();
    }
  });
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });
  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name)
      )}
      onPointerMissed={() => setLocation('/')}
    >
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  );
}

function Frame({ name, html, url, c = new THREE.Color(), ...props }) {
  const image = useRef();
  const frame = useRef();
  const htmlDiv = useRef();
  const [, params] = useRoute('/item/:id');
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const isActive = params?.id === name;
  useCursor(hovered);
  useFrame((state, dt) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    easing.damp3(
      image.current.scale,
      [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1],
      0.1,
      dt,
    );
    easing.damp;

    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt);
  });
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 1.9, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial color='#151515' metalness={0.5} roughness={0.2} envMapIntensity={3} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
          <Html
            ref={htmlDiv}
            className='content'
            position={[0, 0, 0.71]}
            scale={0.2}
            transform
            occlude
          >
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </Html>
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          color={new THREE.Color('#AEAEAE')}
          url={url}
        />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX='left'
        anchorY='top'
        position={[0.55, GOLDENRATIO, 0]}
        fontSize={0.025}
      >
        {name.split('-').join(' ')}
      </Text>
    </group>
  );
}

function Stat(props) {
  const { nodes, materials } = useGLTF('/poly.gltf');

  return (
    <group {...props}>
      <mesh castShadow receiveShadow geometry={nodes.meshname.geometry} material={materials.stat} />
    </group>
  );
}
