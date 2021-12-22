import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AnimationImpl = () => {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");
  

  return <group scale={[0.5,0.5,0.5 ]}><primitive  object={gltf.scene} /></group>;
};

export default AnimationImpl;
