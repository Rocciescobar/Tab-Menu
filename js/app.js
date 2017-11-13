var showHide = function(e) {
  var selectedTab = e.target.dataset.selectedTab; // e es event
  var breakfast = document.getElementById('breakfast');
  var lunch = document.getElementById('lunch');
  var dinner = document.getElementById('dinner');

  if (selectedTab === 'breakfastTab') {    
    // ocultar comida y cena
    lunch.style.display = 'none';
    dinner.style.display = 'none';
    // mostrar desayuno
    breakfast.style.display = 'block';
  } else if (selectedTab === 'lunchTab') {
    // ocultar desayuno y cena
    breakfast.style.display = 'none';
    dinner.style.display = 'none';
    // mostrar almuerzo
    lunch.style.display = 'block';
  } else if (selectedTab === 'dinnerTab') {
    // ocultar desayuno y almuerzo
    breakfast.style.display = 'none';
    lunch.style.display = 'none';
    // mostrar cena
    dinner.style.display = 'block';
  }
};

var loadPage = function() {
  var breakfast = document.getElementById('breakfast');
  var lunch = document.getElementById('lunch');
  var dinner = document.getElementById('dinner');
  breakfast.style.display = 'none';
  lunch.style.display = 'none';
  dinner.style.display = 'none';
  var tab = document.getElementsByClassName('tab');
  for (var i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', showHide);
  }
};

loadPage();