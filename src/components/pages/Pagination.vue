<template>
  <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': !pagination.has_pre }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="paginationChange(pagination.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pagination.total_pages" :key="page"
          :class="{ 'active': page === pagination.current_page }">
          <a class="page-link" href="#" @click.prevent="paginationChange(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': !pagination.has_next }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="paginationChange(pagination.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
</template>
<script>
  export default {
    props:  {
      pagination: {
        type: Object,
        default: {}
      }
    },
    methods: {
      paginationChange(page) {
        this.$bus.$emit('pagination:change', page);
      }
    }
  }
</script>