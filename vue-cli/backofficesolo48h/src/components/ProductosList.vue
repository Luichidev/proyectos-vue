<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Buscar por titulo"
          v-model="titulo" @keyup.enter="searchTitle"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Buscar 🔍
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6 fixed">
      <div v-if="currentProducto">
        <h4>Producto</h4>
        <div>
          <label><strong>Titulo:</strong></label> {{ currentProducto.titulo }}
        </div>
        <div>
          <label><strong>Descripción:</strong></label> {{ currentProducto.descripcion }}
        </div>
        <div>
          <label><strong>Precio:</strong></label> {{ currentProducto.precio}}
        </div>
        <div>
          <label><strong>Categoria:</strong></label> {{ currentProducto.categoria}}
        </div>
        <a class="btn btn-warning"
          :href="'/productos/' + currentProducto.id"
        >
          Editar ✏️
        </a>
      </div>
      <div v-else>
        <br />
        <p>Selecciona un producto del Listado...</p>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Listado de productos</h4>
      <ul class="list-group">
        <li class="list-group-item d-flex align-items-center"
          :class="{ active: index == currentIndex }"
          v-for="(producto, index) in productos"
          :key="index"
          @click="setActiveProducto(producto, index)"
        >
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <img width="100" height="100" :src="producto.url" :alt="producto.titulo" :title="producto.titulo">
            </div>
            <div class="flex-grow-1 ms-3">
              {{ producto.titulo }}
            </div>
          </div>
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProductos">
        Eliminar todos
      </button>
    </div>
  </div>
</template>
<script>
import ProductoDataService from "../services/ProductoDataService";
export default {
  name: "productos-list",
  data() {
    return {
      productos: [],
      currentProducto: null,
      currentIndex: -1,
      titulo: "",
      categoria: []
    };
  },
  methods: {
    retrieveProductos() {
      ProductoDataService.getAll()
        .then(response => {
          this.productos = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveProductos();
      this.currentProducto = null;
      this.currentIndex = -1;
    },
    setActiveProducto(producto, index) {
      this.currentProducto = producto;
      this.currentIndex = index;
    },
    removeAllProductos() {
      ProductoDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      ProductoDataService.findByTitle(this.titulo)
        .then(response => {
          this.productos = response.data;
          console.log(response.data);
          this.titulo = "";
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveProductos();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

@media screen and (min-width:768px){
  .fixed {
    position: fixed;
    right: 0;
    z-index: 1030;
    top: 200px;
  }
}
</style>