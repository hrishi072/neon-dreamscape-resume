
// Simple linear interpolation function
export const lerp = (start: number, end: number, t: number): number => {
  return start * (1 - t) + end * t;
};

// Function to generate random number between min and max
export const random = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

// Function to clamp a value between min and max
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

// Function to ease value with cubic bezier
export const cubicBezier = (t: number, p0: number, p1: number, p2: number, p3: number): number => {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;
  
  return uuu * p0 + 3 * uu * t * p1 + 3 * u * tt * p2 + ttt * p3;
};

// Function to ease in and out
export const easeInOut = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

// Function to create simple spring effect
export const spring = (
  currentValue: number,
  targetValue: number,
  velocity: number,
  mass: number = 1,
  stiffness: number = 0.1,
  damping: number = 0.5
): { position: number; velocity: number } => {
  const force = (targetValue - currentValue) * stiffness;
  const acceleration = force / mass;
  const newVelocity = velocity + acceleration - velocity * damping;
  const newPosition = currentValue + newVelocity;
  
  return {
    position: newPosition,
    velocity: newVelocity
  };
};
