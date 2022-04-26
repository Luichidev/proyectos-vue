<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="titulo">Title</label>
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
        <label for="descripcion">Description</label>
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
          id="precio"
          required
          v-model="producto.precio"
          name="precio"
        />
      </div>
      <div class="form-group">
        <label for="categoria">Categoria</label>
        <select :categoria='categoria'>
          <option value="-1">-</option>
          <option value="0">Deporte</option>
          <option value="1">Maquillaje</option>
          <option value="2">Bricolaje</option>
          <option value="3">Electrónica</option>
        </select>
      </div>
      <div class="form-group">
        <label for="tendencia">Tendencia</label>
        <input
          class="form-control"
          id="tendencia"
          type="checkbox"
          v-model="producto.tendencia"
          name="tendencia"
        />
      </div>
      <button @click="saveProducto" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProducto">Add</button>
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