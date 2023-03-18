/* eslint-disable */
<template>
  <div class="layout">
    <div v-if="reports.length > 0" class="list">
      <h3>Breaks</h3>
      <ul>
        <li v-for="report in reports" :key="report.date">
          <p>
            <button class="btn" @click="selectReport(report)">
              <b>{{ report.break }}</b>
            </button>
          </p>
        </li>
      </ul>
    </div>
    <Report :report="this.activeReport" />
  </div>
</template>

<script>
import Report from "./Report";
export default {
  name: "Home",
  components: {
    Report
  },
  data() {
    return {
      reports: [],
      activeReport: {},
      loading: false
    };
  },
  beforeMount() {
    this.getReports().then(() => this.selectReport(this.reports[0]));
  },
  methods: {
    async getReports() {
      try {
        this.loading = true;
        const response = await fetch("http://localhost:8081/reports");
        const data = await response.json();
        this.reports = data;
      } catch (e) {
        throw new Error(e);
      } finally {
        this.loading = false;
      }
    },
    selectReport(report) {
      this.activeReport = report;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
}
h3 {
  text-decoration: underline;
  padding: 5px;
}
.list {
  padding: 30px;
}
.btn {
  padding: 5px;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  color: darkblue;
}
.btn :hover {
  background-color: rgb(168, 168, 207);
}
p {
  font-size: 16px;
}
.layout {
  display: inline-flex;
  width: 100%;
  gap: 10%;
}
</style>
