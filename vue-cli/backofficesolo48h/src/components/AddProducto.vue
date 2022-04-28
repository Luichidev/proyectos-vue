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
        <img  width="100" height="100" :src="img" :alt="producto.titulo">
      </div>
      <div class="form-group mb-2">
        <label for="imagen">Imagen</label>
        <input
          type="text"
          class="form-control"
          id="imagen"
          required
          v-model="producto.url"
          name="imagen"
          placeholder="http://"
          @input="uploadImg"
        />
      </div>
      <!-- <div class="form-group">
        <label for="descripcion">Descripción</label>
        <input
          class="form-control"
          id="descripcion"
          required
          v-model="producto.descripcion"
          name="descripcion"
        />
      </div> -->
      <div class="form-floating">
        <textarea name="descripcion" v-model="producto.descripcion" class="form-control" placeholder="Leave a comment here" id="descripcion" style="height: 200px"></textarea>
        <label for="descripcion">Descripción</label>
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
          <option v-for="cat in categorias" :value="cat.name" :key="cat.name">{{ cat.name }}</option>
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
      categorias: [],
      submitted: false,
      optionsSelect: [],
      img: "https://image.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg"
    };
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    saveProducto() {
      var data = {
        titulo: this.producto.titulo,
        url: this.producto.url,
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
    },

    getCategories() {
      ProductoDataService.getAllCategories()
      .then(response => {
        this.categorias = response.data;
      })
    },

    uploadImg(event) {
      const url = event.target.value
      if(url.includes("http") || url.includes("https")){
        this.img = url
      }
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