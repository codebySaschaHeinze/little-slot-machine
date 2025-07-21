function winTemplate(result, tries) {
  return `
        <p>Gewonnen! Du hast ${tries} Versuche gebraucht!</p>
            <div class="slot-fields">
                <p style="background-color: ${result.color1}" class="slot-field" id="one"></p>
                <p style="background-color: ${result.color2}" class="slot-field" id="two"></p>
                <p style="background-color: ${result.color3}" class="slot-field" id="three"></p>
            </div>
        <button onclick="randomIt()" class="random-button">Viel Glück</button>
        `;
}

function loseTemplate(result, tries) {
  return `
        <p>${tries}. Versuch</p>
            <div class="slot-fields">
                <p style="background-color: ${result.color1}" class="slot-field" id="one"></p>
                <p style="background-color: ${result.color2}" class="slot-field" id="two"></p>
                <p style="background-color: ${result.color3}" class="slot-field" id="three"></p>
            </div>
            <button onclick="randomIt()" class="random-button">Viel Glück</button>
        `;
}
