// Tab Navigation
const navBtns = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    
    // Remove active class from all buttons and tabs
    navBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked button and corresponding tab
    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});

// Export functionality
function exportTab(tabId) {
  alert(`Export data untuk ${tabId} akan segera tersedia. Fitur ini akan mengunduh data dalam format Excel/PDF.`);
}

// Chart Colors
const chartColors = [
  '#1FB8CD',
  '#FFC185', 
  '#B4413C',
  '#ECEBD5',
  '#5D878F',
  '#DB4545',
  '#D2BA4C',
  '#964325',
  '#944454',
  '#13343B'
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeCharts();
});

function initializeCharts() {
  // BCR Chart (Pie Chart)
  const bcrCtx = document.getElementById('bcrChart');
  if (bcrCtx) {
    new Chart(bcrCtx, {
      type: 'pie',
      data: {
        labels: ['ROI Minimum (2,15x)', 'ROI Maksimum (3,68x)'],
        datasets: [{
          data: [2.15, 3.68],
          backgroundColor: [chartColors[0], chartColors[1]],
          borderWidth: 2,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 15,
              font: { size: 12 }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.parsed + 'x';
              }
            }
          }
        }
      }
    });
  }

  // Savings Chart (Horizontal Bar Chart)
  const savingsCtx = document.getElementById('savingsChart');
  if (savingsCtx) {
    new Chart(savingsCtx, {
      type: 'bar',
      data: {
        labels: [
          'Komplikasi Diabetes',
          'Komplikasi Hipertensi', 
          'Klaim Katastropik',
          'Rawat Inap',
          'Produktivitas',
          'Laboratorium'
        ],
        datasets: [{
          label: 'Minimum (Miliar)',
          data: [1500, 2000, 2000, 500, 1000, 300],
          backgroundColor: chartColors[0],
        }, {
          label: 'Maksimum (Miliar)',
          data: [2000, 3000, 4000, 1000, 2000, 500],
          backgroundColor: chartColors[1],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return 'Rp ' + value.toLocaleString();
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: { padding: 15, font: { size: 12 } }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': Rp ' + context.parsed.x.toLocaleString() + ' Miliar';
              }
            }
          }
        }
      }
    });
  }

  // Projection Chart (Stacked Bar Chart)
  const projectionCtx = document.getElementById('projectionChart');
  if (projectionCtx) {
    new Chart(projectionCtx, {
      type: 'bar',
      data: {
        labels: ['Tahun 1', 'Tahun 2', 'Tahun 3', 'Tahun 4', 'Tahun 5'],
        datasets: [
          {
            label: 'Komplikasi Diabetes',
            data: [500, 500, 750, 1000, 1000],
            backgroundColor: chartColors[0]
          },
          {
            label: 'Komplikasi Hipertensi',
            data: [750, 750, 1000, 1250, 1500],
            backgroundColor: chartColors[1]
          },
          {
            label: 'Klaim Katastropik',
            data: [1000, 1000, 1250, 1500, 1750],
            backgroundColor: chartColors[2]
          },
          {
            label: 'Rawat Inap',
            data: [200, 200, 300, 400, 400],
            backgroundColor: chartColors[3]
          },
          {
            label: 'Produktivitas',
            data: [400, 400, 600, 800, 800],
            backgroundColor: chartColors[4]
          },
          {
            label: 'Laboratorium',
            data: [125, 125, 175, 225, 250],
            backgroundColor: chartColors[5]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return 'Rp ' + value.toLocaleString();
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: { padding: 10, font: { size: 11 } }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': Rp ' + context.parsed.y.toLocaleString() + ' Miliar';
              },
              footer: function(tooltipItems) {
                let sum = 0;
                tooltipItems.forEach(item => sum += item.parsed.y);
                return 'Total: Rp ' + sum.toLocaleString() + ' Miliar';
              }
            }
          }
        }
      }
    });
  }

  // Regional Chart (Bar Chart)
  const regionalCtx = document.getElementById('regionalChart');
  if (regionalCtx) {
    new Chart(regionalCtx, {
      type: 'bar',
      data: {
        labels: [
          'Jawa Tengah',
          'Jawa Timur',
          'Banten',
          'Jawa Barat',
          'DIY',
          'Gorontalo Utara',
          'Rembang',
          'Papua'
        ],
        datasets: [{
          label: 'Jumlah Peserta',
          data: [1300000, 745000, 379328, 242000, 47800, 42946, 29022, 944],
          backgroundColor: chartColors,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value.toLocaleString();
              }
            }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return 'Peserta: ' + context.parsed.y.toLocaleString();
              }
            }
          }
        }
      }
    });
  }

  // Disease Chart (Horizontal Bar Chart)
  const diseaseCtx = document.getElementById('diseaseChart');
  if (diseaseCtx) {
    new Chart(diseaseCtx, {
      type: 'bar',
      data: {
        labels: [
          'Tekanan Darah Abnormal',
          'Hiperglikemia',
          'Kolesterol Abnormal',
          'Hipertensi',
          'Diabetes'
        ],
        datasets: [{
          label: 'Persentase Terdeteksi',
          data: [79.49, 55.0, 37.5, 30.8, 24.3],
          backgroundColor: chartColors[2],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.parsed.x + '%';
              }
            }
          }
        }
      }
    });
  }

  // Disparity Chart (Doughnut Chart)
  const disparityCtx = document.getElementById('disparityChart');
  if (disparityCtx) {
    new Chart(disparityCtx, {
      type: 'doughnut',
      data: {
        labels: ['Jawa (2,3 Juta)', 'Luar Jawa (860 Ribu)'],
        datasets: [{
          data: [2300000, 860000],
          backgroundColor: [chartColors[0], chartColors[1]],
          borderWidth: 2,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 15,
              font: { size: 12 }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((context.parsed / total) * 100).toFixed(0);
                return context.label + ': ' + percentage + '%';
              }
            }
          }
        }
      }
    });
  }
}

// Make exportTab available globally
window.exportTab = exportTab;