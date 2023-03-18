<template>
  <div class="report-container">
    <h3>{{ report.break }} Report</h3>
    <p><b>Wave height:</b> {{ report.waveHeight }}</p>
    <p><b>Wind:</b> {{ report.wind }}</p>
    <p><b>Tides:</b> {{ report.tide_1 }} {{ report.tide_2 }}</p>
    <p><b>Date / Time:</b> {{ report.date }}</p>
    <p><b>Source:</b> {{ report.url }}</p>
  </div>
</template>
<script>
export default {
  name: "Report",
  props: {
    report: Object
  }
};
</script>
<style scoped>
.report-container {
  margin-top: 75px;
  padding: 30px;
  font-size: 18px;
}
</style>
