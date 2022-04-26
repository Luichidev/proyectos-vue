<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Productos List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(producto, index) in productos"
          :key="index"
          @click="setActiveProducto(producto, index)"
        >
          {{ producto.titulo }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProductos">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentProducto">
        <h4>Producto</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentProducto.titulo }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentProducto.descripcion }}
        </div>
        <div>
          <label><strong>Precio:</strong></label> {{ currentProducto.precio}}
        </div>
        <a class="badge badge-warning"
          :href="'/productos/' + currentProducto.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
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
      title: ""
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
      ProductoDataService.findByTitle(this.title)
        .then(response => {
          this.productos = response.data;
          console.log(response.data);
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
</style>