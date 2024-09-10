<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Agregar nuevo producto</h1>
      <form @submit.prevent="submitProduct" class="border p-4 rounded shadow-sm">
        <div class="mb-3">
          <label for="name" class="form-label">Nombre del producto:</label>
          <input id="name" type="text" v-model="name" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Descripción:</label>
          <input id="description" type="text" v-model="description" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Precio:</label>
          <input id="price" type="number" v-model="price" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary w-100">Agregar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        description: '',
        price: 0
      }
    },
    methods: {
      submitProduct() {
        axios.post('/api/products', {
          name: this.name,
          description: this.description,
          price: this.price
        })
        .then(response => {
          console.log('Producto agregado', response.data);
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
  }
  </script>
  