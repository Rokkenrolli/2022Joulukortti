import React, { useState } from "react";
import { Ornament, OrnamentProps } from "../Ornament/Ornament";

interface Props {
  initialOrnaments?: OrnamentProps[];
  edit: boolean;
}
export const Ornaments = ({ initialOrnaments, edit }: Props) => {
  const [ornaments, setOrnaments] = useState<OrnamentProps[]>(
    initialOrnaments ?? []
  );

  return (
    <>
      {ornaments.map((o, i) => (
        <Ornament key={`ornament_${i}`} ornamentProps={o} allowEdit={edit} />
      ))}
    </>
  );
};
