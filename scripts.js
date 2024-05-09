document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
        datasets: [{
          label: '¿Experimentas ansiedad si pasas un día sin revisar tus redes sociales?',
          data: [4, 12, 24, 6, 4],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
});
