export function IslandWithPlane({ isRotating, setCurrentStage, ...props }) {
    const containerRef = useRef();
  
    useFrame(() => {
      // Rotate the parent container if isRotating is true
      if (isRotating) {
        containerRef.current.rotation.y += delta * 0.001 * Math.PI; // Adjust the rotation speed as needed
      }
    });
  
    return (
      <group ref={containerRef} {...props}>
        <Islandn isRotating={isRotating} setCurrentStage={setCurrentStage} />
        <Plane isRotating={isRotating} position={[10, 0, 0]} />
      </group>
    );
  }
  