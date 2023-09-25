$(document).ready(function(){
    // slick slider 
    $('.slick-slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,

    });

    // chart js
    const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgb(240, 12, 12)',
            'rgb(43, 101, 237)',
            'rgb(70, 219, 24)' ,
            'rgb(169, 21, 189)' ,
            'rgb(224, 129, 27)' ,
          ],
        borderWidth: 1
      }] ,
      
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  

  //calender
  $("#cal").flatpickr();

})

