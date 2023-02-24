import { api } from "../services/covidApi.js";

export class App {
  constructor() {
    this.routes = [];
    this.countries = [];
    this.sumarry = [];
    this.global = [];
    this.dataNumbers = [];
  }

  async init() {
    this.laodData();
  }

  async laodData() {
    const { data } = await api.get("/");

    const sumarry = data.summaryRoute;

    this.getSummary(sumarry);
  }

  async getSummary(routeDetails) {
    const { data } = await api.get(routeDetails.Path);
    const { Global, Countries } = data;

    this.dataNumbers.push({
      label: "Total Confirmados",
      value: Global.TotalConfirmed,
    });
    this.dataNumbers.push({
      label: "Total de Mortes",
      value: Global.TotalDeaths,
    });
    this.dataNumbers.push({
      label: "Total de Recuperados",
      value: Global.TotalRecovered,
    });

    this.countries = Countries;
    this.globalInfo(this.dataNumbers);
  }

  globalInfo(global) {
    this.renderSummaryCards(global);
    this.renderPieChart();
    this.renderBarChart();
  }

  renderSummaryCards(global) {
    const app = document.getElementById("summary");

    global.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("card-summary");

      const cardTitle = document.createElement("h2");
      cardTitle.classList.add("card-summary-label");
      cardTitle.textContent = element.label;
      card.appendChild(cardTitle);

      const cardNumber = document.createElement("h1");
      cardNumber.classList.add("card-summary-number");
      cardNumber.textContent = element.value;
      card.appendChild(cardNumber);

      app.appendChild(card);
    });
  }

  renderPieChart() {
    const chartArea = document.getElementById("chart-area");

    const pieChart = document.createElement("canvas");
    pieChart.classList.add("chart");
    pieChart.style.width = "400px";
    pieChart.style.height = "400px";
    pieChart.style.display = "flex";
    pieChart.style.justifyContent = "center";
    pieChart.id = "pieChart";

    const chart = new Chart(pieChart, {
      type: "doughnut",
      data: {
        labels: ["Confirmados", "Mortes", "Recuperados"],
        datasets: [
          {
            label: "Total de Casos",
            data: [
              this.dataNumbers[0].value,
              this.dataNumbers[1].value,
              this.dataNumbers[2].value,
            ], //TODO arumar os dados
            backgroundColor: ["#3e95cd", "#FD526C", "#3cba9f"],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Total de Casos",
          fontSize: 25,
        },
      },
    });

    chartArea.appendChild(pieChart);
  }

  renderBarChart() {
    let labels = _.map(this.getTheTopTen(), "Country");
    let data = _.map(this.getTheTopTen(), "TotalDeaths");

    const sectionBarChart = document.getElementById("chart-bar");

    const barChart = document.createElement("canvas");
    barChart.style.width = "400px";
    barChart.style.height = "400px";
    barChart.style.display = "flex";
    barChart.style.justifyContent = "center";
    barChart.id = "barChart";

    const chart = new Chart(barChart, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Mortes por País",
            data: data,
            backgroundColor: ["#FD526C"],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Top 10 Countries by Deaths",
          fontSize: 25,
        },
      },
    });

    sectionBarChart.appendChild(barChart);
  }

  getTheTopTen() {
    const topTen = _.slice(this.countries, 0, 10);
    const orderTopTen = _.orderBy(topTen, ["TotalDeaths"], ["desc"]);

    return orderTopTen;
  }

  loading() {
    const app = document.getElementById("main");
    const h1 = document.getElementById("cardConfirmedNumber");
    h1.textContent = "Loading...";
    app.appendChild(h1);
  }
}
