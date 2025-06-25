<template>
  <div class="overflow-x-auto my-6">
    <table>
      <slot />
    </table>
  </div>
</template>

<script setup>
// No necesitas ninguna lógica JavaScript aquí, es solo un contenedor de estilo.
</script>

<style>
/*
  Opcional: Si tus tablas de Nuxt Content tienen estilos por defecto
  que impiden que `overflow-x-auto` funcione bien o si quieres
  asegurarte de que la tabla dentro del slot no tenga márgenes conflictivos,
  puedes añadir estilos globales aquí.

  Por ejemplo, si el `<table>` dentro del slot tiene un margen por defecto
  que rompe el redondeo del contenedor:
*/
.prose :where(table):not(.not-prose) {
  /*
    Asegura que la tabla no tenga un ancho fijo que cause el desbordamiento
    y que el margin se maneje desde el contenedor.
  */
  width: 100%; /* La tabla ocupará todo el ancho disponible del contenedor */
  margin: 0 !important; /* Elimina márgenes externos de la tabla si existen */
  border-collapse: collapse; /* Estilo común para tablas */
}
</style>