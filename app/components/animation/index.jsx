import { Suspense } from "react";
import { ClientOnly } from "remix-utils";
import AnimationImpl from "./animation.client";


const Animation = () => {
  return (
    <ClientOnly>
      <Suspense fallback={null}>
        
      <AnimationImpl />
        
      </Suspense>
    </ClientOnly>
  );
};

export default Animation;
