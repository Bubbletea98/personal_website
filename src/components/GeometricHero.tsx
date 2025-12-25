"use client";

import { motion } from "framer-motion";

// Neural network schematic - raw, engineered look
export default function GeometricHero() {
  // Layer configuration for the neural network schematic
  const layers = [
    { nodes: 3, label: "INPUT" },
    { nodes: 5, label: "HIDDEN_1" },
    { nodes: 4, label: "HIDDEN_2" },
    { nodes: 2, label: "OUTPUT" },
  ];

  const nodeSize = 50;
  const layerSpacing = 180;
  const nodeSpacing = 70;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Schematic Grid Background */}
      <div className="absolute inset-0 schematic-grid opacity-60" />
      
      {/* Corner Markers - Engineering Drawing Style */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-black/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-black/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-black/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-black/20" />

      {/* Neural Network Schematic - Positioned to the right, lower to avoid text overlap */}
      <svg
        className="absolute right-0 top-[65%] -translate-y-1/2 w-[700px] h-[500px] opacity-[0.15]"
        viewBox="0 0 700 500"
      >
        {/* Draw connections first (behind nodes) */}
        {layers.map((layer, layerIndex) => {
          if (layerIndex === layers.length - 1) return null;
          const nextLayer = layers[layerIndex + 1];
          const x1 = layerIndex * layerSpacing + 80;
          const x2 = (layerIndex + 1) * layerSpacing + 80;

          return layer.nodes > 0 && nextLayer.nodes > 0 ? (
            <g key={`connections-${layerIndex}`}>
              {Array.from({ length: layer.nodes }).map((_, nodeIndex) => {
                const y1 = (500 - (layer.nodes - 1) * nodeSpacing) / 2 + nodeIndex * nodeSpacing;
                return Array.from({ length: nextLayer.nodes }).map((_, nextNodeIndex) => {
                  const y2 = (500 - (nextLayer.nodes - 1) * nodeSpacing) / 2 + nextNodeIndex * nodeSpacing;
                  return (
                    <motion.line
                      key={`line-${layerIndex}-${nodeIndex}-${nextNodeIndex}`}
                      x1={x1 + nodeSize / 2}
                      y1={y1}
                      x2={x2 - nodeSize / 2}
                      y2={y2}
                      stroke="#1a1a1a"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.5,
                        delay: layerIndex * 0.3 + (nodeIndex + nextNodeIndex) * 0.05,
                        ease: "easeOut",
                      }}
                    />
                  );
                });
              })}
            </g>
          ) : null;
        })}

        {/* Draw nodes */}
        {layers.map((layer, layerIndex) => {
          const x = layerIndex * layerSpacing + 80;
          return (
            <g key={`layer-${layerIndex}`}>
              {/* Layer Label */}
              <motion.text
                x={x}
                y={30}
                textAnchor="middle"
                className="font-mono text-xs font-bold fill-current"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: layerIndex * 0.2 + 0.5 }}
              >
                {layer.label}
              </motion.text>

              {/* Nodes */}
              {Array.from({ length: layer.nodes }).map((_, nodeIndex) => {
                const y = (500 - (layer.nodes - 1) * nodeSpacing) / 2 + nodeIndex * nodeSpacing;
                return (
                  <motion.g key={`node-${layerIndex}-${nodeIndex}`}>
                    <motion.rect
                      x={x - nodeSize / 2}
                      y={y - nodeSize / 2}
                      width={nodeSize}
                      height={nodeSize}
                      fill="#fafaf9"
                      stroke="#1a1a1a"
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: layerIndex * 0.2 + nodeIndex * 0.1,
                        ease: "easeOut",
                      }}
                    />
                    <motion.text
                      x={x}
                      y={y + 4}
                      textAnchor="middle"
                      className="font-mono text-[10px] font-bold fill-current"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ delay: layerIndex * 0.2 + nodeIndex * 0.1 + 0.3 }}
                    >
                      N{layerIndex}{nodeIndex}
                    </motion.text>
                  </motion.g>
                );
              })}
            </g>
          );
        })}
      </svg>

      {/* Floating geometric shapes - Left side */}
      <motion.div
        className="absolute left-[10%] top-[20%] w-20 h-20 border-4 border-black/10"
        animate={{
          rotate: [0, 90, 90, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[5%] bottom-[30%] w-12 h-12 bg-[#ff6b35]/10 border-3 border-black/10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[15%] bottom-[15%] w-16 h-16 rounded-full border-4 border-black/10"
        animate={{
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Technical annotations */}
      <div className="absolute bottom-8 left-8 font-mono text-[10px] text-black/30 uppercase tracking-widest">
        <div>REV: 2.0</div>
        <div>SCALE: 1:1</div>
      </div>

      <div className="absolute top-8 right-8 font-mono text-[10px] text-black/30 uppercase tracking-widest text-right">
        <div>NEURAL_ARCH_v2</div>
        <div>FANDI.INFERENCE</div>
      </div>
    </div>
  );
}

