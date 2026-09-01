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
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let currentMouseX = -1000;
    let currentMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetAngleY = ((e.clientX / innerWidth) - 0.5) * Math.PI;
      targetAngleX = ((e.clientY / innerHeight) - 0.5) * Math.PI;

      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseOut = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.001; // Slower auto-rotation
      currentAngleX += (targetAngleX - currentAngleX) * 0.02; // Slower mouse tracking
      currentAngleY += (targetAngleY - currentAngleY) * 0.02;

      // Smooth mouse for hover repulsion
      if (targetMouseX === -1000) {
        currentMouseX = -1000;
        currentMouseY = -1000;
      } else {
        if (currentMouseX === -1000) {
          currentMouseX = targetMouseX;
          currentMouseY = targetMouseY;
        } else {
          currentMouseX += (targetMouseX - currentMouseX) * 0.05; // Slower hover response
          currentMouseY += (targetMouseY - currentMouseY) * 0.05;
        }
      }

      const rotX = currentAngleX + time * 0.8;
      const rotY = currentAngleY + time * 1.2;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const size = Math.min(canvas.width, canvas.height) * 0.38;

      // Project points
      const projected = points.map((p, i) => {
        // 1. Organic Breathing (slower and more subtle pulse)
        const breath = Math.sin(time * 2 + i * 0.3) * 0.03;
        const r = 1 + breath;
        const bx = p.x * r;
        const by = p.y * r;
        const bz = p.z * r;

        // 2. Rotate around Y then X
        let x1 = bx * Math.cos(rotY) - bz * Math.sin(rotY);
        let z1 = bx * Math.sin(rotY) + bz * Math.cos(rotY);
        let y2 = by * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = by * Math.sin(rotX) + z1 * Math.cos(rotX);

        // 3. Perspective projection
        const fov = 3.5;
        const scale = fov / (fov + z2);

        return {
          x: x1 * scale,
          y: y2 * scale,
          z: z2,
          origX: p.x,
          origY: p.y,
          origZ: p.z,
          screenX: 0,
          screenY: 0,
          hoverRatio: 0
        };
      });

      // Post-process for mouse repulsion
      projected.forEach((p) => {
        const screenX = cx + p.x * size;
        const screenY = cy + p.y * size;

        const dx = screenX - currentMouseX;
        const dy = screenY - currentMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Interactive radius of 150px
        if (dist < 150 && currentMouseX !== -1000) {
          const hoverRatio = 1 - (dist / 150);
          const angle = Math.atan2(dy, dx);
          // Push outwards up to 40px
          const push = hoverRatio * 40;
          p.screenX = screenX + Math.cos(angle) * push;
          p.screenY = screenY + Math.sin(angle) * push;
          p.hoverRatio = hoverRatio;
        } else {
          p.screenX = screenX;
          p.screenY = screenY;
          p.hoverRatio = 0;
        }
      });

      const isDark = document.documentElement.classList.contains('dark');
      ctx.lineWidth = 1.0;

      // Draw lines between close points
      const maxDistance = 0.45;
      for (let i = 0; i < numPoints; i++) {
        for (let j = i + 1; j < numPoints; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          // Check distance using original stable coordinates
          const dist3D = Math.sqrt(
            (p1.origX - p2.origX) ** 2 +
            (p1.origY - p2.origY) ** 2 +
            (p1.origZ - p2.origZ) ** 2
          );

          if (dist3D < maxDistance) {
            const avgZ = (p1.z + p2.z) / 2;
            const depth = Math.max(0, (avgZ + 1.2) / 2.4);
            const distFactor = 1 - (dist3D / maxDistance);
            const baseOpacity = depth * distFactor * 0.4;
            const hoverBoost = Math.max(p1.hoverRatio, p2.hoverRatio);

            if (baseOpacity > 0.01 || hoverBoost > 0) {
              ctx.beginPath();
              ctx.moveTo(p1.screenX, p1.screenY);
              ctx.lineTo(p2.screenX, p2.screenY);

              if (hoverBoost > 0) {
                const finalOpacity = Math.min(1, baseOpacity + hoverBoost * 0.8);
                ctx.strokeStyle = `rgba(37, 99, 235, ${finalOpacity})`; // Blue accent
              } else {
                ctx.strokeStyle = isDark
                  ? `rgba(255, 255, 255, ${baseOpacity})`
                  : `rgba(0, 0, 0, ${baseOpacity})`;
              }
              ctx.stroke();
            }
          }
        }
      }

      // Draw nodes
      projected.forEach((p) => {
        const depth = Math.max(0, (p.z + 1.2) / 2.4);
        const radius = 1 + depth * 2.5 + (p.hoverRatio * 2);
        const opacity = Math.min(1, depth * 0.8 + (p.hoverRatio * 0.5));

        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, radius, 0, Math.PI * 2);
        if (p.hoverRatio > 0) {
          ctx.fillStyle = `rgba(37, 99, 235, ${opacity})`;
        } else {
          ctx.fillStyle = isDark
            ? `rgba(255, 255, 255, ${opacity})`
            : `rgba(0, 0, 0, ${opacity})`;
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
    />
  );
};
