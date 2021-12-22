import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const AnimationImpl = () => {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");

  return <primitive object={gltf.scene} />;
};

export default AnimationImpl;
