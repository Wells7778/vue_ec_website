<template>
  <div>
    <div class="text-right">
      <button class="btn btn-primary mt-4">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="90">是否啟用</th>
          <th width="80">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product) in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-right">
            {{ product.origin_price}}
          </td>
          <td class="text-right">
            {{product.price}}
          </td>
          <td>
            <span v-if="product.is_enabled == 1" class="text-success">啟用</span>
            <span v-else class="text-danger">未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/products/all`;
      const vm = this;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>