import { useEffect, useRef } from 'react';

// ---------- Land detection (simplified continent polygons) ----------
function isLand(lat: number, lng: number): boolean {
  const lo = ((lng + 180) % 360) - 180; // normalize to [-180,180]

  // Greenland
  if (lat > 59 && lat < 84 && lo > -56 && lo < -18) return true;
  // Iceland
  if (lat > 63 && lat < 67 && lo > -25 && lo < -12) return true;

  // Alaska
  if (lat > 54 && lat < 72 && lo > -170 && lo < -130) return true;
  if (lat > 60 && lat < 72 && lo > -170 && lo < -155) return true;

  // Canada / USA / Mexico
  if (lat > 48 && lat < 72 && lo > -138 && lo < -52) return true;
  if (lat > 25 && lat < 50 && lo > -125 && lo < -67) return true;
  if (lat > 14 && lat < 30 && lo > -118 && lo < -86) return true;
  // Florida
  if (lat > 24 && lat < 31 && lo > -87 && lo < -80) return true;

  // Central America & Caribbean islands (approximate)
  if (lat > 8 && lat < 18 && lo > -92 && lo < -75) return true;
  if (lat > 17 && lat < 23 && lo > -90 && lo < -74) return true; // Cuba/Hispaniola
  if (lat > 15 && lat < 20 && lo > -74 && lo < -72) return true; // Haiti/DR

  // South America
  if (lat > 8 && lat < 13 && lo > -72 && lo < -60) return true;
  if (lat > -5 && lat < 8 && lo > -78 && lo < -50) return true;
  if (lat > -18 && lat < -5 && lo > -75 && lo < -35) return true;
  if (lat > -30 && lat < -18 && lo > -72 && lo < -43) return true;
  if (lat > -38 && lat < -30 && lo > -73 && lo < -52) return true;
  if (lat > -55 && lat < -38 && lo > -75 && lo < -64) return true;

  // UK & Ireland
  if (lat > 49 && lat < 59 && lo > -11 && lo < 2) return true;
  if (lat > 54 && lat < 61 && lo > -8 && lo < 0) return true; // Scotland

  // Scandinavia (Norway, Sweden, Finland)
  if (lat > 55 && lat < 72 && lo > 4 && lo < 32) return true;
  if (lat > 68 && lat < 72 && lo > 14 && lo < 30) return true;

  // Western & Central Europe
  if (lat > 43 && lat < 56 && lo > -5 && lo < 25) return true;
  if (lat > 35 && lat < 44 && lo > -10 && lo < 28) return true; // Iberia, Italy

  // Eastern Europe / Baltic
  if (lat > 50 && lat < 60 && lo > 20 && lo < 40) return true;

  // Russia (European)
  if (lat > 50 && lat < 70 && lo > 28 && lo < 65) return true;
  // Russia (Siberia)
  if (lat > 50 && lat < 75 && lo > 60 && lo < 145) return true;
  if (lat > 65 && lat < 75 && lo > 30 && lo < 60) return true;
  // Kamchatka
  if (lat > 50 && lat < 62 && lo > 155 && lo < 165) return true;

  // Turkey / Caucasus
  if (lat > 36 && lat < 43 && lo > 26 && lo < 45) return true;

  // Middle East / Arabian Peninsula
  if (lat > 12 && lat < 32 && lo > 35 && lo < 60) return true;
  if (lat > 28 && lat < 38 && lo > 38 && lo < 55) return true; // Iraq/Iran

  // Iran / Afghanistan / Pakistan
  if (lat > 25 && lat < 40 && lo > 44 && lo < 74) return true;

  // India
  if (lat > 8 && lat < 28 && lo > 68 && lo < 90) return true;
  if (lat > 6 && lat < 10 && lo > 76 && lo < 80) return true; // southern tip
  // Sri Lanka
  if (lat > 5 && lat < 10 && lo > 79 && lo < 82) return true;

  // Central Asia (Kazakhstan, Uzbekistan etc)
  if (lat > 38 && lat < 52 && lo > 50 && lo < 88) return true;

  // China / Mongolia
  if (lat > 18 && lat < 55 && lo > 73 && lo < 135) return true;
  // Exclude Gobi/ocean: some inaccuracy is OK at this scale

  // Korean Peninsula
  if (lat > 34 && lat < 43 && lo > 126 && lo < 130) return true;

  // Japan
  if (lat > 30 && lat < 36 && lo > 130 && lo < 135) return true; // Kyushu/Honshu south
  if (lat > 34 && lat < 40 && lo > 132 && lo < 142) return true; // Honshu
  if (lat > 40 && lat < 46 && lo > 140 && lo < 146) return true; // Hokkaido

  // Southeast Asia (mainland)
  if (lat > 5 && lat < 25 && lo > 97 && lo < 110) return true; // Thailand/Myanmar/Vietnam
  if (lat > 10 && lat < 22 && lo > 100 && lo < 108) return true; // Vietnam coast

  // Southeast Asia (islands — Indonesia, Philippines approx)
  if (lat > -8 && lat < 5 && lo > 95 && lo < 141) return true;
  if (lat > 5 && lat < 20 && lo > 117 && lo < 127) return true; // Philippines

  // Africa - North (Morocco to Egypt)
  if (lat > 22 && lat < 38 && lo > -17 && lo < 37) return true;
  // Africa - Sahara/Sudan
  if (lat > 8 && lat < 22 && lo > -17 && lo < 43) return true;
  // Africa - West
  if (lat > -5 && lat < 8 && lo > -18 && lo < 10) return true;
  // Africa - Central/Congo
  if (lat > -15 && lat < 5 && lo > 8 && lo < 38) return true;
  // Africa - East (Ethiopia, Kenya, Tanzania)
  if (lat > -12 && lat < 18 && lo > 34 && lo < 50) return true;
  // Africa - Southern
  if (lat > -35 && lat < -12 && lo > 12 && lo < 40) return true;
  // Madagascar
  if (lat > -26 && lat < -12 && lo > 43 && lo < 51) return true;

  // Australia
  if (lat > -39 && lat < -12 && lo > 114 && lo < 154) return true;
  // Tasmania
  if (lat > -44 && lat < -40 && lo > 144 && lo < 149) return true;

  // New Zealand (approximate)
  if (lat > -47 && lat < -35 && lo > 166 && lo < 178) return true;
  if (lat > -35 && lat < -34 && lo > 173 && lo < 175) return true;

  // Antarctica (partial)
  if (lat < -70) return true;

  return false;
}

// ---------- Major city connection nodes ----------
interface CityNode {
  lat: number;
  lng: number;
  name: string;
}

const CITIES: CityNode[] = [
  { lat: 28.6, lng: 77.2, name: 'New Delhi' },
  { lat: 51.5, lng: -0.1, name: 'London' },
  { lat: 40.7, lng: -74.0, name: 'New York' },
  { lat: 35.7, lng: 139.7, name: 'Tokyo' },
  { lat: -33.9, lng: 151.2, name: 'Sydney' },
  { lat: 48.9, lng: 2.3, name: 'Paris' },
  { lat: -23.5, lng: -46.6, name: 'São Paulo' },
  { lat: 55.8, lng: 37.6, name: 'Moscow' },
  { lat: 1.3, lng: 103.8, name: 'Singapore' },
  { lat: 39.9, lng: 116.4, name: 'Beijing' },
  { lat: 19.1, lng: 72.9, name: 'Mumbai' },
  { lat: 6.5, lng: 3.4, name: 'Lagos' },
  { lat: 30.0, lng: 31.2, name: 'Cairo' },
  { lat: -34.6, lng: -58.4, name: 'Buenos Aires' },
  { lat: 43.7, lng: -79.4, name: 'Toronto' },
  { lat: 37.6, lng: -122.4, name: 'San Francisco' },
  { lat: 25.2, lng: 55.3, name: 'Dubai' },
  { lat: 22.3, lng: 114.2, name: 'Hong Kong' },
];

const CONNECTIONS: [number, number][] = [
  [0, 1], [0, 3], [0, 10], // Delhi connections
  [1, 2], [1, 5], [1, 7], [1, 12], // London connections
  [2, 13], [2, 14], [2, 15], // NYC connections
  [3, 8], [3, 9], [3, 17], // Tokyo connections
  [4, 3], // Sydney to Tokyo
  [0, 16], [16, 12], [16, 5], // Dubai connections
  [9, 17], [17, 8], // Beijing/HK/Singapore
  [11, 12], [11, 1], // Lagos connections
  [6, 2], [6, 13], // São Paulo connections
  [7, 5], [7, 1], // Moscow connections
  [14, 15], [15, 2], // Canada/SF connections
];

// ---------- Canvas projection helpers ----------
function project(
  lat: number,
  lng: number,
  rotY: number,
  cx: number,
  cy: number,
  r: number
) {
  const phi = (lat * Math.PI) / 180;
  const lam = ((lng * Math.PI) / 180) + rotY;
  const x = r * Math.cos(phi) * Math.sin(lam);
  const y = -r * Math.sin(phi);
  const z = r * Math.cos(phi) * Math.cos(lam);
  return { x: cx + x, y: cy + y, z };
}

function sphereLerp(
  latA: number, lngA: number,
  latB: number, lngB: number,
  t: number
): [number, number] {
  const lat = latA + (latB - latA) * t;
  const lng = lngA + (lngB - lngA) * t;
  return [lat, lng];
}

export default function GlobeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const rotRef = useRef(0);
  const pulseRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    const size = canvas.offsetWidth;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.4;

    // Pre-compute land dot positions on a 3.5° grid
    const landDots: [number, number][] = [];
    for (let lat = -89; lat <= 89; lat += 3.5) {
      const lngStep = 3.5 / Math.max(0.2, Math.cos((lat * Math.PI) / 180));
      for (let lng = -180; lng < 180; lng += lngStep) {
        if (isLand(lat, lng)) {
          landDots.push([lat, lng]);
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const rot = rotRef.current;
      const pulse = pulseRef.current;

      // --- Outer glow ring ---
      const glow = ctx.createRadialGradient(cx, cy, r * 0.75, cx, cy, r * 1.35);
      glow.addColorStop(0, 'rgba(255,31,31,0.10)');
      glow.addColorStop(0.5, 'rgba(255,31,31,0.04)');
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.35, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // --- Sphere base ---
      const sphere = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.2, r * 0.1, cx, cy, r);
      sphere.addColorStop(0, 'rgba(30,5,5,0.85)');
      sphere.addColorStop(1, 'rgba(8,0,0,0.95)');
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = sphere;
      ctx.fill();

      // --- Lat/lng grid lines ---
      ctx.save();
      ctx.globalAlpha = 0.08;
      for (let lat = -60; lat <= 60; lat += 30) {
        const projY = cy - r * Math.sin((lat * Math.PI) / 180);
        const rLat = r * Math.cos((lat * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(cx, projY, rLat, rLat * 0.15, 0, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI + rot;
        const rx = r * Math.abs(Math.cos(angle));
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, r, 0, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      ctx.restore();

      // --- Land dots ---
      for (const [lat, lng] of landDots) {
        const p = project(lat, lng, rot, cx, cy, r);
        if (p.z <= 0) continue; // back face

        const brightness = p.z / r;
        const alpha = 0.25 + brightness * 0.65;
        const dotSize = 0.9 + brightness * 0.6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,220,220,${alpha})`;
        ctx.fill();
      }

      // --- Connection arcs ---
      for (const [ai, bi] of CONNECTIONS) {
        const a = CITIES[ai];
        const b = CITIES[bi];

        const pA = project(a.lat, a.lng, rot, cx, cy, r);
        const pB = project(b.lat, b.lng, rot, cx, cy, r);

        if (pA.z < -r * 0.3 && pB.z < -r * 0.3) continue;

        ctx.beginPath();
        const segments = 24;
        let first = true;
        let allHidden = true;

        for (let s = 0; s <= segments; s++) {
          const t = s / segments;
          const [lat, lng] = sphereLerp(a.lat, a.lng, b.lat, b.lng, t);
          const p = project(lat, lng, rot, cx, cy, r * 1.04);
          if (p.z > -r * 0.1) allHidden = false;
          if (first) { ctx.moveTo(p.x, p.y); first = false; }
          else ctx.lineTo(p.x, p.y);
        }

        if (!allHidden) {
          ctx.strokeStyle = 'rgba(255,60,60,0.28)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // --- City nodes with pulsing rings ---
      for (let ci = 0; ci < CITIES.length; ci++) {
        const city = CITIES[ci];
        const p = project(city.lat, city.lng, rot, cx, cy, r);
        if (p.z <= 0) continue;

        const depth = p.z / r;
        const baseAlpha = 0.4 + depth * 0.6;

        // Outer pulse ring
        const pulsePhase = (pulse * 0.04 + ci * 0.4) % (Math.PI * 2);
        const pulseScale = 0.5 + 0.5 * Math.abs(Math.sin(pulsePhase));
        const maxRing = 7 + depth * 4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, maxRing * pulseScale, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,31,31,${0.15 * (1 - pulseScale) * baseAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Middle ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4 + depth * 2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,31,31,${0.4 * baseAlpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,60,60,${baseAlpha})`;
        ctx.fill();
      }

      // --- Animated particle along connections ---
      const particleT = (pulse * 0.008) % 1;
      for (const [ai, bi] of CONNECTIONS.slice(0, 8)) {
        const a = CITIES[ai];
        const b = CITIES[bi];
        const pA = project(a.lat, a.lng, rot, cx, cy, r);
        const pB = project(b.lat, b.lng, rot, cx, cy, r);
        if (pA.z < 0 && pB.z < 0) continue;

        const [pLat, pLng] = sphereLerp(a.lat, a.lng, b.lat, b.lng, particleT);
        const pp = project(pLat, pLng, rot, cx, cy, r * 1.04);
        if (pp.z < 0) continue;

        ctx.beginPath();
        ctx.arc(pp.x, pp.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,150,150,0.9)';
        ctx.fill();

        const gGlow = ctx.createRadialGradient(pp.x, pp.y, 0, pp.x, pp.y, 8);
        gGlow.addColorStop(0, 'rgba(255,80,80,0.5)');
        gGlow.addColorStop(1, 'rgba(255,80,80,0)');
        ctx.beginPath();
        ctx.arc(pp.x, pp.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = gGlow;
        ctx.fill();
      }

      // --- Sphere edge highlight (atmosphere) ---
      const atmo = ctx.createRadialGradient(cx, cy, r * 0.85, cx, cy, r);
      atmo.addColorStop(0, 'rgba(255,31,31,0)');
      atmo.addColorStop(0.7, 'rgba(255,31,31,0.04)');
      atmo.addColorStop(1, 'rgba(255,60,60,0.14)');
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = atmo;
      ctx.fill();

      // --- Clip to sphere ---
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();

      rotRef.current += 0.004;
      pulseRef.current += 1;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ maxWidth: '100%', maxHeight: '100%' }}
    />
  );
}
