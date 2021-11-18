window.onload = function () {
  addTable();
  //addFooter()

  window.scrollTo(0, 0);

  $(".checkButton").click(() => {
    $("#myModal").css("display", "block");
    checkAnswers();
  });

  $(".close").click(() => {
    $("#myModal").css("display", "none");
  });
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    $("#myModal").css("display", "none");
  }
};

let actividades = [
  "Cocinar",
  "Servir los alimentos",
  "Aportar dinero a la economía familiar (ser proveedores)",
  "Estudiar un doctorado",
  "Darse a respetar",
  "Dirigir una empresa o institución",
  "Cuidado de los niños y niñas",
  "Cuidado de personas adultas mayores",
  "Cuidado de personas discapacitadas",
  "Expresar sentimientos",
  "Depilarse las axilas",
  "Disfrutar del placer sexual",
  "Salir a divertirse",
  "Arreglar imperfectos de la casa",
  "Hacer deporte",
];
let hombres = [];
let mujeres = [];
let filas = [];

function addTable() {
  //create table
  var table = $("<table>").addClass("tab");

  table.append(
    $("<th>")
      .addClass("tabHeader")
      .addClass("actividadesHeader")
      .addClass("sticky")
      .append($("<h1>").text("Actividad"))
  );

  table.append(
    $("<th>")
      .addClass("tabHeader")
      .addClass("sticky")
      .addClass("mujerHeader")
      .append($("<h1>").text("Mujer"))
  );

  table.append(
    $("<th>")
      .addClass("tabHeader")
      .addClass("sticky")
      .addClass("hombreHeader")
      .append($("<h1>").text("Hombre"))
  );

  //add rows
  for (i = 0; i < actividades.length; i++) {
    var row = $("<tr>")
      .addClass("tabRow")
      .attr("id", "row" + i);

    //cel with text
    var cell = $("<td>").addClass("textActividad").text(actividades[i]);
    row.append(cell);

    //empty cells to color
    for (j = 0; j < 2; j++) {
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

            let index;
            if ($(this).attr("id").slice(-1) === "0") {
              index = mujeres.indexOf(
                $(this).attr("id").substr(0, $(this).attr("id").indexOf("-"))
              );
            } else {
              index = hombres.indexOf(
                $(this).attr("id").substr(0, $(this).attr("id").indexOf("-"))
              );
            }

            let index2 = filas.indexOf(
              $(this).attr("id").substr(0, $(this).attr("id").indexOf("-"))
            );
            if (index2 > -1) {
              filas.splice(index2, 1);
            }

            if ($(this).attr("id").slice(-1) === "0") {
              if (index > -1) {
                mujeres.splice(index, 1);
              }
            } else {
              if (index > -1) {
                hombres.splice(index, 1);
              }
            }
          } else {
            //color
            $(this).attr("data-click-state", 1);
            $(this).text("❎");

            filas.push(
              $(this).attr("id").substr(0, $(this).attr("id").indexOf("-"))
            );

            if ($(this).attr("id").slice(-1) === "0") {
              mujeres.push(
                $(this).attr("id").substr(0, $(this).attr("id").indexOf("-"))
              );
            } else {
              hombres.push(
                $(this).attr("id").substr(0, $(this).attr("id").indexOf("-"))
              );
            }
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

  $("#here_table").append(table);
}

/*function addFooter() {
  for (k = 1; k <= 17; k++) {
    var footer = $("<li>").addClass("footerImg");

    footer.css("background-image", "url(../content/ods-" + k + ".png)");

    $(".footer").append(footer);
  }
}*/

function checkAnswers() {
  let filasCheck = [...new Set(filas)];

  if (filasCheck.length < 15) {
    $("#modalText").html(
      "Sigue trabajando, te faltan algunas filas de responder"
    );
    console.log("faltan");
    return;
  }

  let matches = 0;
  for (let row = 0; row <= 15; row++) {
    if (hombres.includes(row.toString()) && mujeres.includes(row.toString())) {
      matches++;
    }
  }
  //display messages
  if (matches > 7) {
    $("#modalText").html(
      "Seguro llevas un poco más de tiempo cuestionando todas estas conductas y cambiando tu entorno. Recuerda que hay un paso grande entre pensamiento y acción ¡No dudes más! Piensa y actúa para construir un mundo más equitativo que el que te ha tocado vivir ¡Comparte información!, ¡la lucha es de todas y todos!"
    );
  } else {
    $("#modalText").html(
      "¡Estás en el momento perfecto para empezar a cuestionarte todos estos estereotipos con los que llevas viviendo un rato! Aún tienes varios pensamientos patriarcales y machistas rondando por tu cabeza, pero ¡no te preocupes: con reflexión de la información que posees y nuevos puntos de vista puedes reconstruir significados que te lleven a una vida más plena e igualitaria!"
    );
  }
}
