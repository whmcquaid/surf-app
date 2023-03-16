<template>
  <div class="container">
    <div v-if="loading">
      <p>Pulling in surf reports from all across the web...</p>
    </div>
    <button class="btn" @click="getReports">Update Reports</button>
    <div v-if="reports.length > 0">
      <ul>
        <li v-for="{ report } in reports">
          <p>{{ report.break }}</p>
          <p>{{ report.wind }}</p>
          <p>{{ report.tide_1 }}</p>
          <p>{{ report.tide_2 }}</p>
          <p>{{ report.date }}</p>
          <p>{{ report.url }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      reports: [],
      loading: false
    };
  },
  methods: {
    async getReports() {
      try {
        this.loading = true;
        const response = await fetch("http://localhost:8081/ob");
        const data = await response.json();
        const updatedReports = data.updatedReports;
        this.reports = updatedReports;
      } catch (e) {
        throw new Error(e);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
}
.btn {
}
p {
  font-size: 16px;
}
</style>
