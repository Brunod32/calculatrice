function calculer() {
  document.getElementById('btn').addEventListener('click',faireLeCalcul);
  }
function faireLeCalcul() {
  let premierNbr = parseInt(document.getElementById('premier-nombre').value);
  let deuxiemeNbr = parseInt(document.getElementById('deuxieme-nombre').value);
  let operateur = document.getElementById('operateur').value;
  
  
  switch (operateur) {
    case 'addition':
      resultat = premierNbr + deuxiemeNbr;
      break;
    case 'soustraction':
      resultat = premierNbr - deuxiemeNbr;
      break;
    case 'multiplication':
      resultat = premierNbr * deuxiemeNbr;
      break;
    case 'division':
      resultat = premierNbr / deuxiemeNbr;
      break;
    }
    document.getElementById('resultat').value = resultat;
  }


