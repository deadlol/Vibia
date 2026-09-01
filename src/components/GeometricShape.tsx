import React, { useEffect, useRef } from 'react';

interface GeometricShapeProps {
  theme?: 'light' | 'dark';
}

export const GeometricShape: React.FC<GeometricShapeProps> = ({ theme = 'light' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate Fibonacci Sphere points
    const numPoints = 120;
    const points: { x: number; y: number; z: number }[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      const phi = Math.acos(1 - 2 * t);
      const theta = 2 * Math.PI * i / goldenRatio;

      points.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      });
    }

    let targetAngleX = 0;
    let targetAngleY = 0;
    let currentAngleX = 0;
    let currentAngleY = 0;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Map mouse to a reasonable rotation target
      targetAngleY = ((e.clientX / innerWidth) - 0.5) * Math.PI;
      targetAngleX = ((e.clientY / innerHeight) - 0.5) * Math.PI;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.002;
      // Smooth interpolation towards mouse target
      currentAngleX += (targetAngleX - currentAngleX) * 0.05;
      currentAngleY += (targetAngleY - currentAngleY) * 0.05;

      const rotX = currentAngleX + time;
      const rotY = currentAngleY + time * 1.3;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const size = Math.min(canvas.width, canvas.height) * 0.35;

      // Project points
      const projected = points.map(p => {
        // Rotate around Y
        let x1 = p.x * Math.cos(rotY) - p.z * Math.sin(rotY);
        let z1 = p.x * Math.sin(rotY) + p.z * Math.cos(rotY);
        // Rotate around X
        let y2 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = p.y * Math.sin(rotX) + z1 * Math.cos(rotX);

        // Apply perspective
        const fov = 3;
        const scale = fov / (fov + z2);

        return {
          x: x1 * scale,
          y: y2 * scale,
          z: z2,
          origX: p.x,
          origY: p.y,
          origZ: p.z
        };
      });

      const isDark = document.documentElement.classList.contains('dark');
      ctx.lineWidth = 1.0;

      // Draw lines between close points
      const maxDistance = 0.45;
      for (let i = 0; i < numPoints; i++) {
        for (let j = i + 1; j < numPoints; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          // Calculate distance using original 3D coordinates so connections don't pop in/out
          const dist = Math.sqrt(
            (p1.origX - p2.origX) ** 2 +
            (p1.origY - p2.origY) ** 2 +
            (p1.origZ - p2.origZ) ** 2
          );

          if (dist < maxDistance) {
            const avgZ = (p1.z + p2.z) / 2;
            // Map Z from [-1, 1] to a depth multiplier [0, 1]
            const depth = Math.max(0, (avgZ + 1.2) / 2.4);
            const distFactor = 1 - (dist / maxDistance);
            const opacity = depth * distFactor * 0.4;

            if (opacity > 0.01) {
              ctx.beginPath();
              ctx.moveTo(cx + p1.x * size, cy + p1.y * size);
              ctx.lineTo(cx + p2.x * size, cy + p2.y * size);
              ctx.strokeStyle = isDark
                ? `rgba(255, 255, 255, ${opacity})`
                : `rgba(0, 0, 0, ${opacity})`;
              ctx.stroke();
            }
          }
        }
      }

      // Draw nodes
      projected.forEach((p) => {
        const depth = Math.max(0, (p.z + 1.2) / 2.4);
        const radius = 1 + depth * 2;
        const opacity = depth * 0.8;

        ctx.beginPath();
        ctx.arc(cx + p.x * size, cy + p.y * size, radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${opacity})`
          : `rgba(0, 0, 0, ${opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
    />
  );
};
