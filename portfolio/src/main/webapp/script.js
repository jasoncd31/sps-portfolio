// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Fetches bigfoot sightings data and uses it to create a chart. */
function drawChart() {
  const data = google.visualization.arrayToDataTable([
          ['Year', 'Dog', 'Cat', 'Bird'],
          ['2000',  68, 73, 19],
          ['2002',  68, 77.7, 17.3],
          ['2004',  73.9, 90.5, 16.6],
          ['2006',  74.8, 88.3, 16],
          ['2008', 77.5, 93.6,15],
          ['2012', 78.2,86.4,16.2],
          ['2014', 83.3,95.6,20.6],
          ['2015', 77.8,85.8,14.3],
          ['2017', 89.7,94.2,20.6]
        ]);


  const options = {
          title: 'Dogs Vs Cats Vs Birds',
          subtitle: 'in the millions',
          legend: { position: 'bottom' },
          height: 700
        };


  const chart = new google.visualization.LineChart(document.getElementById('chart-container'));

  chart.draw(data, options);
}

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('date-container');
  greetingContainer.innerText = greeting;
}

async function showHello() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();

  const helloContainer = document.getElementById('hello-container');
  helloContainer.innerText = textFromResponse;
}

/** Fetches the current date from the server and adds it to the page. */
async function showServerTime() {
  const responseFromServer = await fetch('/date');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('date-container');
  dateContainer.innerText = textFromResponse;
}
let map;

/** Creates a map and adds it to the page. */
function createMap() {
  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 37.422, lng: -122.084}, zoom: 16});
}

