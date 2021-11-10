window.onload = function () {
  addTable();
  addFooter();

  window.scrollTo(0, 0);
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

            const index = answers.indexOf($(this).attr("id"));
            if (index > -1) {
              answers.splice(index, 1);
            }
          } else {
            //color
            $(this).attr("data-click-state", 1);
            $(this).text("❎");

            answers.push($(this).attr("id"));
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

function addFooter() {
  for (k = 1; k <= 17; k++) {
    var footer = $("<li>").addClass("footerImg");

    footer.css("background-image", "url(../content/ods-" + k + ".png)");

    $(".footer").append(footer);
  }
}

function checkAnswers() {
  $(".emptyCell").html("&nbsp;");

  //answered correctly
  rightAnswered = answers.map((answer) => {
    if (correct.includes(answer)) {
      return answer;
    }
  });
  rightAnswered = rightAnswered.filter((x) => x !== undefined);

  //answered wrong
  wrongAnswered = answers.map((answer) => {
    if (!correct.includes(answer)) {
      return answer;
    }
  });
  wrongAnswered = wrongAnswered.filter((x) => x !== undefined);

  //missing to answer
  missingAnswers = correct.map((answer) => {
    if (!answers.includes(answer)) {
      return answer;
    }
  });
  missingAnswers = missingAnswers.filter((x) => x !== undefined);

  console.log(correct);
  console.log(answers);
  console.log(rightAnswered);
  console.log(wrongAnswered);
  console.log(missingAnswers);

  // Returns a Promise that resolves after "ms" Milliseconds
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));

  rightAnswered.map((cell) => {
    $("#" + cell).text("✔️");
  });
  wrongAnswered.map((cell) => {
    $("#" + cell).text("❌");
  });
  missingAnswers.map((cell) => {
    $("#" + cell).text("⚠️");
  });
}
