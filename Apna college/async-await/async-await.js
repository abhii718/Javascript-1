function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

// async-await
async function getAllData() {
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
}
// getAllData();

(async function () {
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
})();
// async function getWeatherData() {
//   try {
//     await api(); // 1st
//     console.log("Weather data recieve successfully");
//   } catch {
//     console.error("Error fetching weather data: ", error.message);
//   }
// }\]=-887
// getWeatherData();
