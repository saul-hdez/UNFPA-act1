window.onload = function () {
  window.scrollTo(0, 0);

  addTableMujeres();
  addTableHombres();

  $(".persona")
    .append($("<label>").text("nombre: "))
    .append($("<input>").text("nombre"));
};

let actividades = [
  "Estudiar una licenciatura",
  "Trabajar en el lugar deseado",
  "Elegir libremente con quien casarse",
  "Elegir libremente el número y el tiempo para tener hijos/as",
  "Tener una propiedad a su nombre",
  "Ejercer liderazgo en una comunidad, institución, organización o empresa",
  "Influir en la toma decisiones de su localidad",
  "Representar a otras personas",
  "Movilizar a un grupo",
  "Lograr cambios en la comunidad",
];
let mujeres = [
  "Abuela",
  "Madre",
  "Hija",
  "Compañera de escuela",
  "Compañera de trabajo",
];
let hombres = [
  "Abuelo",
  "Padre",
  "Hijo",
  "Compañero de escuela",
  "Compañero de trabajo",
];

function addTableMujeres() {
  //create table
  var table = $("<table>").addClass("tab");

  table.append(
    $("<th>")
      .addClass("tabHeader")
      .addClass("actividadesHeader")
      .addClass("sticky")
      .append($("<h3>").text("Actividad"))
  );

  for (i = 0; i < mujeres.length; i++) {
    table.append(
      $("<th>")
        .addClass("tabHeader")
        .addClass("sticky")
        .addClass("persona")
        .append($("<h3>").text(mujeres[i]))
    );
  }

  //add rows
  for (i = 0; i < actividades.length; i++) {
    var row = $("<tr>")
      .addClass("tabRow")
      .attr("id", "row" + i);

    //cel with text
    var cell = $("<td>").addClass("textActividad").text(actividades[i]);
    row.append(cell);

    //empty cells to color
    for (j = 0; j < mujeres.length; j++) {
      var cell = $("<td>")
        .addClass("emptyCell")
        .attr("id", i + "-" + j)
        .attr("data-click-state", 0)
        .attr("data-hover-state", 0)
        .click(function () {
          if ($(this).attr("data-click-state") == 1) {
            //remove color
            $(this).attr("data-click-state", 0);
            $(this).text("");
          } else {
            //color
            $(this).attr("data-click-state", 1);
            $(this).text("❎");
          }
        })
        .hover(function () {
          if ($(this).attr("data-click-state") == 0) {
            //remove colored circle
            if ($(this).attr("data-hover-state") == 1) {
              $(this).attr("data-hover-state", 0);
              $(this).text("");
            } else {
              //add color circle
              $(this).attr("data-hover-state", 1);
              $(this).text("🔘");
            }
          }
        });
      row.append(cell);
    }
    table.append(row);
  }

  $("#here_table_mujeres").append(table);
}

function addTableHombres() {
  //create table
  var table = $("<table>").addClass("tab");

  table.append(
    $("<th>")
      .addClass("tabHeader")
      .addClass("actividadesHeader")
      .addClass("sticky")
      .append($("<h3>").text("Actividad"))
  );

  for (i = 0; i < hombres.length; i++) {
    table.append(
      $("<th>")
        .addClass("tabHeader")
        .addClass("sticky")
        .addClass("persona")
        .append($("<h3>").text(hombres[i]))
    );
  }

  //add rows
  for (i = 0; i < actividades.length; i++) {
    var row = $("<tr>")
      .addClass("tabRow")
      .attr("id", "row" + i);

    //cel with text
    var cell = $("<td>").addClass("textActividad").text(actividades[i]);
    row.append(cell);

    //empty cells to color
    for (j = 0; j < mujeres.length; j++) {
      var cell = $("<td>")
        .addClass("emptyCell")
        .attr("id", i + "-" + j)
        .attr("data-click-state", 0)
        .attr("data-hover-state", 0)
        .click(function () {
          if ($(this).attr("data-click-state") == 1) {
            //remove color
            $(this).attr("data-click-state", 0);
            $(this).text("");
          } else {
            //color
            $(this).attr("data-click-state", 1);
            $(this).text("❎");
          }
        })
        .hover(function () {
          if ($(this).attr("data-click-state") == 0) {
            //remove colored circle
            if ($(this).attr("data-hover-state") == 1) {
              $(this).attr("data-hover-state", 0);
              $(this).text("");
            } else {
              //add color circle
              $(this).attr("data-hover-state", 1);
              $(this).text("🔘");
            }
          }
        });
      row.append(cell);
    }
    table.append(row);
  }

  $("#here_table_hombres").append(table);
}
