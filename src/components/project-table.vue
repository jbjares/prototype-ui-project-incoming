<template>
  <table>
    <thead>
    <tr>
      <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey === key }">
        {{ key | capitalize }}
        <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
      </th>
      <!-- To accept and reject projects -->
      <th>State</th>
    </tr>
    </thead>
    <tbody>
    <tr  v-on:click="routeTo(entry['id'])"  v-for="entry in sortedData">
      <td v-for="key in columns">
        {{entry[key]}}
      </td>
      <!-- State -->
      <td>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      data: [Array],
      columns: [Array],
      idRoute: {
        type: String,
        default: null,
        required: false
      }
    },
    data () {
      const sortOrders = {}
      this.columns.forEach((key) => {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      sortedData () {
        if (this.sortKey) {
          return this.data.sort((a, b) => {
            const valueA = a[this.sortKey]
            const valueB = b[this.sortKey]
            return (valueA === valueB ? 0 : valueA > valueB ? 1 : -1) * this.sortOrders[this.sortKey] || 1
          })
        }
        return this.data
      },
      routePrefix () {
        return '/' + this.idRoute + '/'
      }
    },
    filters: {
      capitalize (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    methods: {
      sortBy (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },

      routeTo (id) {
        if (this.idRoute !== null) {
          this.$router.push(this.routePrefix + id)
        }
      }
    }
  }
</script>

<style scoped>
  table {
    /*border: 2px solid #42b983;*/
    /*border-radius: 3px;*/
    background-color: #fff;
    width: 100%;
  }

  th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  td {
    background-color: #f9f9f9;
  }

  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

  th.active {
    color: #fff;
  }

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
  ul li {
    display:inline-block;
  }
</style>
