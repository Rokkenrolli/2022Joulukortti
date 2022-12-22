import { ThreeElements } from "@react-three/fiber";
import React from "react";
import { DoubleSide } from "three";
export const Floor = (props: ThreeElements["mesh"]) => {
  return (
    <mesh {...props}>
      <planeGeometry />
      <meshBasicMaterial color='green' side={DoubleSide} />
    </mesh>
  );
};
