/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as THREE from 'three';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useCursor,
  MeshReflectorMaterial,
  Text,
  Environment,
  Cloud,
  Html,
  Loader,
  useProgress,
  Image,
  OrbitControls,
  Circle,
  useTexture,
  PerspectiveCamera,
} from '@react-three/drei';
import { useRoute, useLocation } from 'wouter';
import { easing } from 'maath';
import pp from './img/pp.jpg';

const GOLDENRATIO = 1.61803398875;

export const App = ({ images }) => (
  <div id='app-content'>
    <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 4, 15] }}>
      <Suspense fallback={null}>
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
        <group position={[0, 0, -5]}>
          <Cloud position={[-7, 6, -5]} speed={0.4} opacity={0.5} depth={2} width={2} />
          <Cloud position={[9, 6, -7]} speed={0.4} opacity={0.5} depth={2} width={2} />
          <Cloud position={[0, 6, -5]} speed={0.4} opacity={0.5} depth={1} width={4} />
        </group>
        {/* <Cloud position={[10, 4, -10]} speed={0.4} opacity={0.5} depth={0.7} width={1} /> */}
        {/* <Cloud position={[-10, 4.3, -10]} speed={0.4} opacity={0.5} depth={0.7} width={1} /> */}
        <Text fontSize={2} color='#101015' position={[0, 4, -6]} visible>
          Murat Ogulcan Sahin
        </Text>
        <Environment preset='city' />
        <directionalLight args={['white', 2]} position={(0, 0, 20)} />
      </Suspense>
    </Canvas>
    <Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`} />
    <Navbar />
  </div>
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
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.55));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0.2, 4.2);
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
      {images.map((props) => <Frame key={props.url} {...props}/> /* prettier-ignore */)}
    </group>
  );
}

function Frame({ name, url, isMainFrame, html, ...props }) {
  const image = useRef();
  const frame = useRef();
  const htmlDiv = useRef();
  const [, params] = useRoute('/item/:id');
  const [colorMap] = useTexture([pp]);
  const [hovered, hover] = useState(false);
  const isActive = params?.id === name;
  useCursor(hovered);
  useFrame((state, dt) => {
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
        scale={[1, GOLDENRATIO / 1.2, 0.05]}
        position={[0, GOLDENRATIO / 2.2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial color='#151515' metalness={0.5} roughness={0.2} envMapIntensity={3} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
          <Html
            castShadow
            receiveShadow
            ref={htmlDiv}
            position={[0, 0, 0.72]}
            scale={[0.2, 0.15, 0.05]}
            transform
            occlude='raycast'
            pointerEvents='none'
          >
            <div className='content' dangerouslySetInnerHTML={{ __html: html }}></div>
          </Html>
        </mesh>
        <mesh position={[0.06, 0.1, 0.71]} visible={isMainFrame} ra>
          <circleGeometry args={[0.3]} />
          <meshStandardMaterial map={colorMap} roughness={0.0} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX='left'
        anchorY='top'
        position={[0.55, GOLDENRATIO / 1.15, 0]}
        fontSize={0.025}
      >
        {name.split('-').join(' ')}
      </Text>
    </group>
  );
}

function Navbar(props) {
  const [, setLocation] = useLocation();
  return (
    <nav id='navbar' className='row justify-content-between'>
      <div
        className='col navbar-item'
        id='nav-about'
        onClick={(e) => (e.stopPropagation(), setLocation('/item/Welcome'))}
      >
        About
      </div>
      <div
        className='col navbar-item'
        id='navbar-experiences'
        onClick={(e) => (e.stopPropagation(), setLocation('/item/Experience-CATIC'))}
      >
        Experience
      </div>
      <div
        className='col navbar-item'
        id='navbar-contact'
        onClick={(e) => (e.stopPropagation(), setLocation('/item/Welcome'))}
      >
        Contact
      </div>
    </nav>
  );
}

function Progressbar(props) {
  const { progress } = useProgress();

  return <Html center>{progress.toFixed(1)} % loading</Html>;
}
