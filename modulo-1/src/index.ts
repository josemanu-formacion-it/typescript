cat > src/index.ts << 'EOF'
import { 
  calcularMedia, 
  calcularMediana, 
  calcularDesviacionEstandar,
  filtrarAtipicos,
  generarEstadisticas
} from './math-utils.js';

// Datos de ejemplo: ventas mensuales (con un outlier)
const datosVentas: number[] = [150, 145, 155, 148, 152, 151, 149, 150, 2000, 147];

console.log('📊 === ANÁLISIS ESTADÍSTICO DE VENTAS ===\n');

console.log('📈 Datos originales:');
console.log(`[${datosVentas.join(', ')}]\n`);

console.log('📍 Cálculos individuales:');
console.log(`  Media: ${calcularMedia(datosVentas)?.toFixed(2)}`);
console.log(`  Mediana: ${calcularMediana(datosVentas)?.toFixed(2)}`);
console.log(`  Desviación Estándar: ${calcularDesviacionEstandar(datosVentas)?.toFixed(2)}\n`);

const filtrados = filtrarAtipicos(datosVentas, 1.5);
const atipicosEliminados = datosVentas.length - (filtrados?.length || 0);

console.log('🔍 Filtrar outliers (IQR 1.5):');
console.log(`[${filtrados?.join(', ')}]`);
console.log(`  Se eliminaron: ${atipicosEliminados} valores atípicos\n`);

const estadisticas = generarEstadisticas(datosVentas);
console.log('📋 Estadísticas Completas:');
console.log(JSON.stringify(estadisticas, null, 2));

// Casos límite: array vacío
console.log('\n⚠️  Casos límite:');
console.log(`  Media de array vacío: ${calcularMedia([])}`);
console.log(`  Mediana de array vacío: ${calcularMediana([])}`);
console.log(`  Desv. Est. de array vacío: ${calcularDesviacionEstandar([])}`);
console.log(`  Estadísticas de array vacío: ${JSON.stringify(generarEstadisticas([]))}`);
console.log(`  Filtrar atípicos en array pequeño: ${JSON.stringify(filtrarAtipicos([1, 2, 3]))}`);
EOF
