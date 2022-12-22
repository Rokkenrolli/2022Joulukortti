import { useThree } from "@react-three/fiber";
import { CubeTextureLoader, WebGLCubeRenderTarget } from "three";
import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export const SkyBox = () => {
  const { gl } = useThree();

  const texture = useTexture("/2.jpg");
  const formatted = new WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);
  return <primitive attach='background' object={formatted.texture} />;
};
