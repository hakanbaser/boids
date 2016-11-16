
function applyControls (){
 controls= {
   alignment:1 - document.getElementById("alignment").value, 
   teamspirit:document.getElementById('teamspirit').value,
   vision : 1 - document.getElementById('vision').value,
   transparency : Math.pow(100 * document.getElementById('transparency').value,2),
   focus : Math.pow(100 * (1 - document.getElementById('focus').value ),2)
 } // Control end
}
