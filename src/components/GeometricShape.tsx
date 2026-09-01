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
    let angleX = 0;
    let angleY = 0;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const size = Math.min(canvas.width, canvas.height) * 0.2;
    const vertices = [
      [0, -size * 1.2, 0], 
      [0, size * 1.2, 0],  
      [size, 0, 0],        
      [0, 0, size],      
      [-size, 0, 0],   
      [0, 0, -size]       
    ];

    const edges = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 3], [3, 4], [4, 5], [5, 2]
    ];

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 0.02;
      mouseY = (e.clientY / innerHeight - 0.5) * 0.02;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      angleX += 0.005 + mouseY;
      angleY += 0.007 + mouseX;

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const projected = vertices.map(([x, y, z]) => {
        let x1 = x * Math.cos(angleY) + z * Math.sin(angleY);
        let z1 = -x * Math.sin(angleY) + z * Math.cos(angleY);
        let y2 = y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = y * Math.sin(angleX) + z1 * Math.cos(angleX);

        const fov = 400;
        const scale = fov / (fov + z2 + size * 2);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
        };
      });

      // Use theme colors
      const isDark = document.documentElement.classList.contains('dark');
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)';
      ctx.lineWidth = 2.0;

      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
        ctx.stroke();
      });

      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.0, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
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
  }, [theme]); // re-run effect when theme changes to ensure drawing colors update immediately

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0"
    />
  );
};
