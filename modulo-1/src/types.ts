cat > src/types.ts << 'EOF'
/**
 * Interface que define la estructura de estadísticas completas
 */
export interface EstadisticasResumen {
  media: number;
  mediana: number;
  desviacionEstandar: number;
  minimo: number;
  maximo: number;
  cantidad: number;
}
EOF
