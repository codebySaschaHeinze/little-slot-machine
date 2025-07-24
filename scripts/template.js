function winTemplate(result, tries) {
  return `
            <div class="slot_fields">
                <p style="background-color: ${result.color1}" class="slot_field" id="one"></p>
                <p style="background-color: ${result.color2}" class="slot_field" id="two"></p>
                <p style="background-color: ${result.color3}" class="slot_field" id="three"></p>
            </div>
        <button onclick="randomIt()" class="slot_btn">Viel Glück</button>
        <div id="win-container" class="win_container d_none">
            <div class="win_content">    
                <p>Gewonnen! <br> <br> Du hast ${tries} Versuche gebraucht!</p>
                <button id="back-btn" class="back_btn">Zurück</button>
            </div>
        </div>
        `;
}

function loseTemplate(result) {
  return `
            <div class="slot_fields">
                <p style="background-color: ${result.color1}" class="slot_field" id="one"></p>
                <p style="background-color: ${result.color2}" class="slot_field" id="two"></p>
                <p style="background-color: ${result.color3}" class="slot_field" id="three"></p>
            </div>
            <button onclick="randomIt()" class="slot_btn">Viel Glück</button>
            <div id="win-container" class="win_container d_none">
        `;
}
