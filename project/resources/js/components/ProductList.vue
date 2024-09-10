<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Lista de productos</h1>
      <ul class="list-group" v-if="products.length">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="product in products" :key="product.id">
          <span>{{ product.name }} - {{ product.description }}</span>
          <span class="badge bg-primary">${{ product.price }}</span>
        </li>
      </ul>
      <p v-else class="text-center text-muted">No hay productos disponibles</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: []
      }
    },
    mounted() {
      axios.get('/api/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  </script>
  