"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  connections: number[];
}

interface NeuralParticlesProps {
  particleCount?: number;
  connectionDistance?: number;
  mouseInfluence?: number;
}

export default function NeuralParticles({
  particleCount = 80,
  connectionDistance = 150,
  mouseInfluence = 100,
}: NeuralParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  const initParticles = useCallback(
    (width: number, height: number) => {
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          pulsePhase: Math.random() * Math.PI * 2,
          connections: [],
        });
      }
      return particles;
    },
    [particleCount]
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    // Clear canvas with fade effect for trailing
    ctx.fillStyle = "rgba(2, 6, 23, 0.1)";
    ctx.fillRect(0, 0, width, height);

    const time = Date.now() * 0.001;

    // Update and draw particles
    particles.forEach((particle, i) => {
      // Mouse interaction - particles are attracted/repelled
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouseInfluence && dist > 0) {
        const force = (mouseInfluence - dist) / mouseInfluence;
        const angle = Math.atan2(dy, dx);
        // Gentle attraction effect
        particle.vx += Math.cos(angle) * force * 0.02;
        particle.vy += Math.sin(angle) * force * 0.02;
      }

      // Apply velocity with damping
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Bounce off edges
      if (particle.x < 0 || particle.x > width) {
        particle.vx *= -1;
        particle.x = Math.max(0, Math.min(width, particle.x));
      }
      if (particle.y < 0 || particle.y > height) {
        particle.vy *= -1;
        particle.y = Math.max(0, Math.min(height, particle.y));
      }

      // Pulsing effect
      const pulse = Math.sin(time * 2 + particle.pulsePhase) * 0.3 + 0.7;
      const currentOpacity = particle.opacity * pulse;

      // Draw particle (neural node)
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.radius * 3
      );
      gradient.addColorStop(0, `rgba(6, 182, 212, ${currentOpacity})`);
      gradient.addColorStop(0.5, `rgba(20, 184, 166, ${currentOpacity * 0.5})`);
      gradient.addColorStop(1, "rgba(6, 182, 212, 0)");

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core of the node
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(6, 182, 212, ${currentOpacity + 0.2})`;
      ctx.fill();

      // Draw connections to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const other = particles[j];
        const connDx = particle.x - other.x;
        const connDy = particle.y - other.y;
        const connDist = Math.sqrt(connDx * connDx + connDy * connDy);

        if (connDist < connectionDistance) {
          const lineOpacity = (1 - connDist / connectionDistance) * 0.3;

          // Animated gradient along the connection
          const connectionGradient = ctx.createLinearGradient(
            particle.x,
            particle.y,
            other.x,
            other.y
          );

          const animOffset = (Math.sin(time * 3 + i * 0.1) + 1) / 2;
          connectionGradient.addColorStop(
            0,
            `rgba(6, 182, 212, ${lineOpacity * (1 - animOffset)})`
          );
          connectionGradient.addColorStop(
            0.5,
            `rgba(20, 184, 166, ${lineOpacity})`
          );
          connectionGradient.addColorStop(
            1,
            `rgba(139, 92, 246, ${lineOpacity * animOffset})`
          );

          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = connectionGradient;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw signal pulse along connection
          if (Math.random() < 0.001) {
            const pulseX = particle.x + (other.x - particle.x) * animOffset;
            const pulseY = particle.y + (other.y - particle.y) * animOffset;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(6, 182, 212, ${lineOpacity * 2})`;
            ctx.fill();
          }
        }
      }
    });

    // Draw mouse glow effect
    if (mouse.x > 0 && mouse.y > 0) {
      const mouseGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouseInfluence
      );
      mouseGradient.addColorStop(0, "rgba(6, 182, 212, 0.1)");
      mouseGradient.addColorStop(0.5, "rgba(20, 184, 166, 0.05)");
      mouseGradient.addColorStop(1, "rgba(6, 182, 212, 0)");

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouseInfluence, 0, Math.PI * 2);
      ctx.fillStyle = mouseGradient;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [connectionDistance, mouseInfluence]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = initParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}

