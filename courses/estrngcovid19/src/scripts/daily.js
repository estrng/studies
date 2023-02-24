import { api } from "../services/covidApi.js";
import { format, parseISO } from "https://esm.run/date-fns";

export class Daily {
  constructor() {
    this.dailyData = [124, 10, 12, 158, 68, 76];
    this.bottomSummary = [];
    this.coutries = [];
    this.selectedCountry = "Brazil";
    this.startDate = "";
    this.endDate = "";
    this.typeData = "Deaths";
    this.filters = [];
    this.totalConfirmed = [];
    this.totalDeaths = [];
    this.totalRecovered = [];
    this.totalDates = [];
  }

  init() {
    this.loadDailyData();
  }

  async loadDailyData() {
    const { data } = await api.get(`/countries`);

    data.forEach((element) => {
      this.coutries.push({ country: element.Country, slug: element.Slug });
    });

    this.renderInputDate(this.coutries);
  }

  renderInputDate(data) {
    //render select options by this.coutries alfabeticly.
    const select = document.getElementById("coutries");

    //data ordered by country name alfabeticly.
    const orderedData = _.orderBy(data, ["country"], ["asc"]);

    orderedData.forEach((element) => {
      const option = document.createElement("option");
      option.value = element.slug;
      option.innerText = element.country;
      select.appendChild(option);
    });

    //select listener.
    select.addEventListener("change", (e) => {
      const selected = e.target.value;
      this.selectedCountry = selected;
    });

    //start date selection listener.
    const startDate = document.getElementById("stardDate");
    startDate.addEventListener("change", (e) => {
      const selected = e.target.value;
      this.startDate = selected;
    });

    const endDate = document.getElementById("endDate");
    endDate.addEventListener("change", (e) => {
      const selected = e.target.value;
      this.endDate = selected;
    });

    const typeData = document.getElementById("data");
    typeData.addEventListener("change", (e) => {
      const selected = e.target.value;
      this.typeData = selected;
    });
  }

  async apply() {
    this.filters.push({
      country: this.selectedCountry,
      from: this.startDate,
      to: this.endDate,
      type: this.typeData,
    });

    try {
      const data = await this.getAllCountryStatus(this.filters);
      this.setTotals(data);
      this.clearSelected();
    } catch (error) {
      console.error(error);
      this.clearSelected();
    }
  }

  async getAllCountryStatus(filters) {
    const { data } = await api.get(
      `/country/${filters[0].country}?from=${filters[0].from}&to=${filters[0].to}`
    );
    return data;
  }

  //render line chart.
  renderLineChart(data) {
    console.log(data);
    const secondRow = document.getElementById("chart-line");

    const lineChart = document.createElement("canvas");

    //create the chart.
    const myChart = new Chart(lineChart, {
      type: "line",
      data: {
        labels: data[0].labels,
        datasets: [
          {
            label: data[0].label,
            data: data[0].set,
            borderColor: "#3e95cd",
            fill: true,
          },
        ],
      },
    });

    myChart.update(data);

    secondRow.appendChild(lineChart);
  }

  clearSelected() {
    const startDate = document.getElementById("stardDate");
    startDate.value = "2020-10-01";

    const endDate = document.getElementById("endDate");
    endDate.value = "2021-11-01";

    const coutry = document.getElementById("coutries");
    coutry.value = "Brazil";

    const typeData = document.getElementById("data");
    typeData.value = "Deaths";

    this.filters.pop();

    this.bottomSummary.pop();
  }

  //set total confirmed, deaths and recovered by the last day.
  setTotals(data) {
    console.log(data.length);

    //for each item in the data make average of confirmed cases, deaths and recovered per day.
    data.forEach((element) => {
      this.totalDates.push(format(parseISO(element.Date), "yyyy-MM-dd"));
      this.totalConfirmed.push(Math.round(element.Confirmed / data.length));
      this.totalDeaths.push(Math.round(element.Deaths / data.length));
      this.totalRecovered.push(Math.round(element.Recovered / data.length));
    });

    const chartData = [];
    if (this.typeData === "Deaths")
      chartData.push({
        labels: this.totalDates,
        label: "Numero de mortes",
        set: this.totalDeaths,
      });
    if (this.typeData === "Confirmed")
      chartData.push({ label: "Casos confirmados", set: this.totalConfirmed });
    if (this.typeData === "Recovered")
      chartData.push({
        label: "Total de recuperados",
        set: this.totalRecovered,
      });

    this.renderLineChart(chartData);

    const last = _.last(data);

    const confirmed = document.getElementById("totalConfirmedValue");
    confirmed.textContent = last.Confirmed;
    const deaths = document.getElementById("totalDeathsValue");
    deaths.textContent = last.Deaths;
    const recovered = document.getElementById("totalRecoveredValue");
    recovered.textContent = last.Recovered;
  }
}
