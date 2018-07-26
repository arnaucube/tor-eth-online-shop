var products = [
  {
    id: 'id1',
    title: 'beer1',
    price: '0.1'
  },
  {
    id: 'id2',
    title: 'beer2',
    price: '0.1'
  },
  {
    id: 'id3',
    title: 'beer3',
    price: '0.1'
  }
];
var list = {};
function getProduct(id) {
  for(var i=0; i<products.length; i++) {
    if(products[i].id == id) {
      return(products[i]);
    }
  }
  return("not found");
}
function addProduct(id) {
  if (!list[id]) {
    list[id] = 1;
  } else {
    list[id]++;
  }
  // update html
  var total = 0;
  var html = "";
  html += "<ul class='list-group'>";
  for (var property in list) {
    if (list.hasOwnProperty(property)) {
      html += "<li class='list-group-item'>";
      html += property + " x" + list[property];
      html += "<div class='float-right'>";
      html += (getProduct(property).price * list[property]).toFixed(4) + " eth";
      html += "</div>";
      html += "</li>";
      total = (+(total) + +(getProduct(property).price * list[property])).toFixed(4);
    }
  }
  html += "</ul>";
  html += "<br>";
  html += "<div class='float-right'>";
  html += "<b>Total: " + total + "</b>";
  html += "</div>";
  html += "<br>";
  document.getElementById("list").innerHTML = html;
}

function purchase() {
  var total = 0;
  for (var property in list) {
    if (list.hasOwnProperty(property)) {
      total = (+(total) + +(getProduct(property).price * list[property])).toFixed(4);
    }
  }
  var answ = confirm("total to pay: " + total + " eth");
  if (!answ) {
    return;
  }
  axios.post('/api/purchase', {
    list: list
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
