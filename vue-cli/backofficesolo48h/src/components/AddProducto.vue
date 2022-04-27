<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="titulo">Titulo</label>
        <input
          type="text"
          class="form-control"
          id="titulo"
          required
          v-model="producto.titulo"
          name="titulo"
        />
      </div>
      <div class="form-group">
        <label for="imagen">Imagen</label>
        <input
          type="text"
          class="form-control"
          id="imagen"
          required
          v-model="producto.url"
          name="imagen"
          placeholder="http://"
        />
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción</label>
        <input
          class="form-control"
          id="descripcion"
          required
          v-model="producto.descripcion"
          name="descripcion"
        />
      </div>
      <div class="form-group">
        <label for="precio">Precio</label>
        <input
          class="form-control"
          type="number"
          id="precio"
          required
          v-model="producto.precio"
          name="precio"
        />
      </div>
      <div class="form-group mb-2">
        <label for="categoria">Categoria</label>
        <select class="form-select form-select-sm" aria-label=".form-select-sm" id="categoria" v-model="producto.categoria">
          <option value="-1" selected>-</option>
          <option value="Deporte">Deporte</option>
          <option value="Maquillaje">Maquillaje</option>
          <option value="Bricolaje">Bricolaje</option>
          <option value="Electronica">Electrónica</option>
        </select>
      </div>
      <div class="form-check mb-2">
        <input
          class="form-check-input"
          id="tendencia"
          type="checkbox"
          v-model="producto.tendencia"
          name="tendencia"
        />
        <label class="form-check-label" for="tendencia">Tendencia</label>
      </div>
      <button @click="saveProducto" class="btn btn-success">Enviar🚀</button>
    </div>
    <div v-else class="mt-2">
      <h4>¡Lo enviaste con éxito!</h4>
      <button class="btn btn-success" @click="newProducto">Añadir</button>
    </div>
  </div>
</template>
<script>
import ProductoDataService from "../services/ProductoDataService";
export default {
  name: "addProducto",
  data() {
    return {
      producto: {
        id: null,
        titulo: "",
        url: "",
        descripcion: "",
        precio: 0,
        categoria: "",
        tendencia: false
      },
      submitted: false
    };
  },
  methods: {
    saveProducto() {
      var data = {
        titulo: this.producto.titulo,
        descripcion: this.producto.descripcion,
        precio: this.producto.precio,
        categoria: this.producto.categoria,
        tendencia: this.producto.tendencia,
      };
      ProductoDataService.create(data)
        .then(response => {
          this.producto.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newProducto() {
      this.submitted = false;
      this.producto = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>