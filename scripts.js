document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Nunca', 'A veces', 'Normalmente', 'Casi siempre', 'Siempre'],
        datasets: [{
          label: '¿Experimentas ansiedad si pasas un día sin revisar tus redes sociales?',
          data: [4, 12, 24, 6, 4],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(103, 162, 235)',
            'rgb(103, 72, 235)',
          ],
          hoverOffset: 4
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
