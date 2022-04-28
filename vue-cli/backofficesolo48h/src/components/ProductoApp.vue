<template>
  <div v-if="currentProducto" class="edit-form">
    <h4>Producto</h4>
    <form>
      <div class="form-group">
        <label for="titulo">Titulo</label>
        <input
          type="text"
          class="form-control"
          id="titulo"
          required
          v-model="currentProducto.titulo"
          name="titulo"
        />
      </div>
      <div class="form-group">
        <img  width="100" height="100" :src="currentProducto.url" :alt="currentProducto.titulo">
      </div>
      <div class="form-group mb-2">
        <label for="imagen">Imagen</label>
        <input
          type="text"
          class="form-control"
          id="imagen"
          required
          v-model="currentProducto.url"
          name="imagen"
          placeholder="http://"
        />
      </div>
      <!-- <div class="form-group">
        <label for="descripcion">Descripción</label>
        <input
          class="form-control"
          id="descripcion"
          required
          v-model="currentProducto.descripcion"
          name="descripcion"
        />
      </div> -->
      <div class="form-floating">
        <textarea name="descripcion" v-model="currentProducto.descripcion" class="form-control" placeholder="Leave a comment here" id="descripcion" style="height: 200px"></textarea>
        <label for="descripcion">Descripción</label>
      </div>
      <div class="form-group">
        <label for="precio">Precio</label>
        <input
          class="form-control"
          type="number"
          id="precio"
          required
          v-model="currentProducto.precio"
          name="precio"
        />
      </div>
      <div class="form-group">
        <label for="categoria">Categoria</label>
        <select class="form-select form-select-sm" aria-label=".form-select-sm" id="categoria" v-model="currentProducto.categoria">
          <option value="-1" selected>-</option>
          <option v-for="cat in categorias" :value="cat.name" :key="cat.name">{{ cat.name }}</option>
        </select>
      </div>
      <div class="form-check mt-2">
        <input
          class="form-check-input"
          id="tendencia"
          type="checkbox"
          v-model="currentProducto.tendencia"
          name="tendencia"
        />
        <label class="form-check-label" for="tendencia">Tendencia</label>
      </div>
    </form>
    <div class="form-group">
      <router-link to="/productos" class="btn btn-primary">Volver</router-link>
      <button class="btn btn-danger m-2"
        @click="deleteProducto"
      >
        Borrar
      </button>
      <button type="submit" class="btn btn-success"
        @click="updateProducto"
      >
        Actualizar
      </button>
    </div> 
    <p class="mt-2">{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Por favor haga clic en un Producto...</p>
  </div>
</template>
<script>
import ProductoDataService from "../services/ProductoDataService";
export default {
  name: "ProductoApp",
  data() {
    return {
      currentProducto: null,
      message: '',
      categorias: []
    };
  },
  methods: {
    getProducto(id) {
      ProductoDataService.get(id)
        .then(response => {
          this.currentProducto = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateProducto() {
      this.currentProducto.precio = +this.currentProducto.precio
      ProductoDataService.update(this.currentProducto.id, this.currentProducto)
        .then(response => {
          console.log(response.data);
          this.message = '¡El Producto se actualizó con éxito!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteProducto() {
      ProductoDataService.delete(this.currentProducto.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "productos" });
        })
        .catch(e => {
          console.log(e);
        });
    },
    getCategories() {
      ProductoDataService.getAllCategories()
      .then(response => {
        this.categorias = response.data;
      })
    }
  },
  mounted() {
    this.message = '';
    this.getProducto(this.$route.params.id);
    this.getCategories()
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>