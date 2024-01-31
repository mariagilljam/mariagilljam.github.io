var data = {
    labels: ['Kategori 1', 'Kategori 2', 'Kategori 3', 'Kategori 4'],
    datasets: [{
      label: 'Antall enheter',
      data: [10, 25, 15, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    }]
  };
  
  // Konfigurasjon for stolediagrammet
  var options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  // Opprett stolediagrammet
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });