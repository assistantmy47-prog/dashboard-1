const dashboardData = {
  "7d": {
    updated: "Updated 14:35 UTC",
    health: {
      apiLatency: "1.8s",
      sesQueue: "42",
      retryRate: "1.2%",
      schemaDrift: "0.4%",
    },
    metrics: {
      totalObjects: "1.22M",
      objectsChange: "+8.1% since last period",
      dataVolume: "18.4 TB",
      volumeChange: "+11.4% since last period",
      apiSuccess: "99.2%",
      apiChange: "+0.4% stability",
      sesLatency: "3.6s",
      sesChange: "-0.7s improvement",
    },
    sources: {
      api: 5,
      ses: 3,
    },
    chart: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      objects: {
        api: [280, 320, 310, 360, 420, 390, 455],
        ses: [140, 160, 150, 190, 210, 205, 230],
        forecast: [null, null, null, null, 430, 460, 480],
      },
      volume: {
        api: [2.4, 2.6, 2.5, 2.9, 3.2, 3.0, 3.4],
        ses: [1.2, 1.4, 1.3, 1.5, 1.7, 1.6, 1.9],
        forecast: [null, null, null, null, 3.3, 3.5, 3.7],
      },
    },
    table: [
      {
        source: "Aurora Retail",
        channel: "API",
        objects: "312k",
        avgSize: "16 MB",
        success: "99.4%",
        status: "ok",
      },
      {
        source: "NorthBeam",
        channel: "SES",
        objects: "184k",
        avgSize: "11 MB",
        success: "97.8%",
        status: "warn",
      },
      {
        source: "Solstice Health",
        channel: "API",
        objects: "256k",
        avgSize: "22 MB",
        success: "98.9%",
        status: "ok",
      },
      {
        source: "Blue Harbor",
        channel: "API",
        objects: "142k",
        avgSize: "9 MB",
        success: "96.2%",
        status: "alert",
      },
      {
        source: "Sunline Labs",
        channel: "SES",
        objects: "104k",
        avgSize: "8 MB",
        success: "99.1%",
        status: "ok",
      },
    ],
  },
  "30d": {
    updated: "Updated 14:02 UTC",
    health: {
      apiLatency: "2.1s",
      sesQueue: "58",
      retryRate: "1.8%",
      schemaDrift: "0.6%",
    },
    metrics: {
      totalObjects: "4.92M",
      objectsChange: "+6.4% since last period",
      dataVolume: "62.8 TB",
      volumeChange: "+9.7% since last period",
      apiSuccess: "98.8%",
      apiChange: "+0.2% stability",
      sesLatency: "4.1s",
      sesChange: "-0.4s improvement",
    },
    sources: {
      api: 6,
      ses: 4,
    },
    chart: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      objects: {
        api: [1150, 1320, 1280, 1500],
        ses: [580, 640, 620, 710],
        forecast: [null, null, 1380, 1540],
      },
      volume: {
        api: [10.8, 12.2, 11.9, 13.6],
        ses: [5.4, 6.1, 5.9, 6.6],
        forecast: [null, null, 12.6, 14.0],
      },
    },
    table: [
      {
        source: "Aurora Retail",
        channel: "API",
        objects: "1.4M",
        avgSize: "18 MB",
        success: "99.1%",
        status: "ok",
      },
      {
        source: "NorthBeam",
        channel: "SES",
        objects: "860k",
        avgSize: "12 MB",
        success: "97.4%",
        status: "warn",
      },
      {
        source: "Solstice Health",
        channel: "API",
        objects: "1.1M",
        avgSize: "21 MB",
        success: "98.5%",
        status: "ok",
      },
      {
        source: "Blue Harbor",
        channel: "API",
        objects: "640k",
        avgSize: "9 MB",
        success: "95.8%",
        status: "alert",
      },
      {
        source: "Sunline Labs",
        channel: "SES",
        objects: "520k",
        avgSize: "8 MB",
        success: "99.0%",
        status: "ok",
      },
    ],
  },
  "90d": {
    updated: "Updated 13:40 UTC",
    health: {
      apiLatency: "2.4s",
      sesQueue: "72",
      retryRate: "2.3%",
      schemaDrift: "0.9%",
    },
    metrics: {
      totalObjects: "13.7M",
      objectsChange: "+12.2% since last period",
      dataVolume: "174.2 TB",
      volumeChange: "+15.6% since last period",
      apiSuccess: "98.1%",
      apiChange: "-0.3% stability",
      sesLatency: "4.6s",
      sesChange: "-0.1s improvement",
    },
    sources: {
      api: 7,
      ses: 5,
    },
    chart: {
      labels: ["Jan", "Feb", "Mar"],
      objects: {
        api: [3900, 4420, 4780],
        ses: [1900, 2140, 2320],
        forecast: [null, 4580, 4900],
      },
      volume: {
        api: [42.6, 48.8, 51.3],
        ses: [20.4, 23.2, 24.9],
        forecast: [null, 50.2, 53.1],
      },
    },
    table: [
      {
        source: "Aurora Retail",
        channel: "API",
        objects: "4.2M",
        avgSize: "19 MB",
        success: "98.7%",
        status: "ok",
      },
      {
        source: "NorthBeam",
        channel: "SES",
        objects: "2.5M",
        avgSize: "12 MB",
        success: "96.6%",
        status: "warn",
      },
      {
        source: "Solstice Health",
        channel: "API",
        objects: "3.4M",
        avgSize: "21 MB",
        success: "98.1%",
        status: "ok",
      },
      {
        source: "Blue Harbor",
        channel: "API",
        objects: "2.1M",
        avgSize: "10 MB",
        success: "95.2%",
        status: "alert",
      },
      {
        source: "Sunline Labs",
        channel: "SES",
        objects: "1.5M",
        avgSize: "8 MB",
        success: "98.6%",
        status: "ok",
      },
    ],
  },
};

const elements = {
  updated: document.getElementById("updated-time"),
  apiLatency: document.getElementById("api-latency"),
  sesQueue: document.getElementById("ses-queue"),
  retryRate: document.getElementById("retry-rate"),
  schemaDrift: document.getElementById("schema-drift"),
  totalObjects: document.getElementById("total-objects"),
  objectsChange: document.getElementById("objects-change"),
  dataVolume: document.getElementById("data-volume"),
  volumeChange: document.getElementById("volume-change"),
  apiSuccess: document.getElementById("api-success"),
  apiChange: document.getElementById("api-change"),
  sesLatency: document.getElementById("ses-latency"),
  sesChange: document.getElementById("ses-change"),
  tableBody: document.getElementById("table-body"),
  sourceTotal: document.getElementById("source-total"),
  apiSources: document.getElementById("api-sources"),
  sesSources: document.getElementById("ses-sources"),
  apiBar: document.getElementById("api-bar"),
  sesBar: document.getElementById("ses-bar"),
};

const timeframeButtons = document.querySelectorAll(".time-button");
const forecastToggle = document.getElementById("forecast-toggle");
const viewSelect = document.getElementById("view-select");

let currentRange = "7d";
let currentView = "objects";

const ctx = document.getElementById("throughput-chart");
let throughputChart;

const buildChart = () => {
  throughputChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        buildDataset("API stream", [], "#5dffcb", "rgba(93, 255, 203, 0.12)"),
        buildDataset("SES ingestion", [], "#4ecbff", "rgba(78, 203, 255, 0.12)"),
        buildDataset("Total", [], "#f4c27b", "rgba(244, 194, 123, 0.12)"),
        buildDataset("Forecast", [], "#ffffff", "rgba(255, 255, 255, 0.12)", true),
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(10, 12, 15, 0.9)",
          borderColor: "rgba(255, 255, 255, 0.1)",
          borderWidth: 1,
          padding: 10,
          titleColor: "#e8f0f0",
          bodyColor: "#c7d5d8",
        },
      },
      scales: {
        x: {
          grid: {
            color: "rgba(255, 255, 255, 0.04)",
          },
          ticks: {
            color: "#91a2a8",
          },
        },
        y: {
          grid: {
            color: "rgba(255, 255, 255, 0.04)",
          },
          ticks: {
            color: "#91a2a8",
          },
          title: {
            display: true,
            text: "Objects per minute",
            color: "#91a2a8",
          },
        },
      },
    },
  });
};

const buildDataset = (label, data, stroke, fill, dashed = false) => ({
  label,
  data,
  borderColor: stroke,
  backgroundColor: fill,
  borderWidth: dashed ? 2 : 2.5,
  borderDash: dashed ? [6, 6] : [],
  tension: 0.4,
  fill: true,
  pointRadius: 0,
  pointHoverRadius: 4,
});

const updateMetricText = (metric) => {
  elements.totalObjects.textContent = metric.totalObjects;
  elements.objectsChange.textContent = metric.objectsChange;
  elements.dataVolume.textContent = metric.dataVolume;
  elements.volumeChange.textContent = metric.volumeChange;
  elements.apiSuccess.textContent = metric.apiSuccess;
  elements.apiChange.textContent = metric.apiChange;
  elements.sesLatency.textContent = metric.sesLatency;
  elements.sesChange.textContent = metric.sesChange;
};

const updateHealth = (health, updated) => {
  elements.updated.textContent = updated;
  elements.apiLatency.textContent = health.apiLatency;
  elements.sesQueue.textContent = health.sesQueue;
  elements.retryRate.textContent = health.retryRate;
  elements.schemaDrift.textContent = health.schemaDrift;
};

const updateSources = (sources) => {
  const total = sources.api + sources.ses;
  const apiPercent = Math.round((sources.api / total) * 100);
  const sesPercent = 100 - apiPercent;

  elements.sourceTotal.textContent = `${total} active`;
  elements.apiSources.textContent = sources.api;
  elements.sesSources.textContent = sources.ses;
  elements.apiBar.style.width = `${apiPercent}%`;
  elements.sesBar.style.width = `${sesPercent}%`;
};

const updateTable = (rows) => {
  elements.tableBody.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${row.source}</td>
        <td>${row.channel}</td>
        <td>${row.objects}</td>
        <td>${row.avgSize}</td>
        <td>${row.success}</td>
        <td><span class="status-chip ${row.status}">${statusLabel(
        row.status
      )}</span></td>
      </tr>
    `
    )
    .join("");
};

const statusLabel = (status) => {
  if (status === "ok") return "Healthy";
  if (status === "warn") return "Watch";
  return "Alert";
};

const updateChart = (range, view) => {
  const dataset = dashboardData[range].chart;
  const viewData = dataset[view];
  const total = viewData.api.map((value, index) => value + viewData.ses[index]);

  throughputChart.data.labels = dataset.labels;
  throughputChart.data.datasets[0].data = viewData.api;
  throughputChart.data.datasets[1].data = viewData.ses;
  throughputChart.data.datasets[2].data = total;
  throughputChart.data.datasets[3].data = viewData.forecast;

  throughputChart.options.scales.y.title.text =
    view === "objects" ? "Objects per minute" : "GB per minute";

  throughputChart.update();
};

const updateDashboard = (range) => {
  const data = dashboardData[range];
  updateHealth(data.health, data.updated);
  updateMetricText(data.metrics);
  updateSources(data.sources);
  updateTable(data.table);
  updateChart(range, currentView);
};

timeframeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    timeframeButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    currentRange = button.dataset.range;
    updateDashboard(currentRange);
  });
});

forecastToggle.addEventListener("change", (event) => {
  throughputChart.data.datasets[3].hidden = !event.target.checked;
  throughputChart.update();
});

viewSelect.addEventListener("change", (event) => {
  currentView = event.target.value;
  updateChart(currentRange, currentView);
});

buildChart();
updateDashboard(currentRange);
forecastToggle.dispatchEvent(new Event("change"));
