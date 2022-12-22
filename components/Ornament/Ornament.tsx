import { ThreeElements, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Color, Mesh } from "three";

export const Ornament = (props: ThreeElements["mesh"] & { color: Color }) => {
  const ref = useRef<Mesh>(null!);

  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh {...props} ref={ref}>
      <pointLight position={props.position} color={props.color} castShadow />
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        roughness={0.4}
        color={props.color}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};
