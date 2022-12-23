import { ThreeElements } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Mesh } from "three";

export type OrnamentProps = ThreeElements["meshStandardMaterial"] &
  ThreeElements["mesh"];

interface Props {
  ornamentProps: OrnamentProps;
  allowEdit: boolean;
}
export const Ornament = ({ ornamentProps, allowEdit }: Props) => {
  const ref = useRef<Mesh>(null!);
  const [color, setColor] = useState(ornamentProps.color);
  const [position, setPosition] = useState(ornamentProps.position);
  const [editing, setEditing] = useState<boolean>(false);
  //useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh
      onClick={() => {
        if (!allowEdit) {
          return;
        }
        setEditing((old) => !old);
      }}
      {...ornamentProps}
      position={position}
      ref={ref}
    >
      <pointLight position={position} color={color} castShadow />
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial {...ornamentProps} color={color} />
    </mesh>
  );
};
