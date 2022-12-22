import { ThreeElements, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
export const Ornament = (props: ThreeElements["mesh"]) => {
  const ref = useRef<Mesh>(null!);

  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh {...props} ref={ref}>
      <pointLight position={props.position} castShadow />
      <sphereGeometry args={[1, 128, 128]} />
      <meshStandardMaterial color={"hotpink"} transparent />
    </mesh>
  );
};
