let a = 1
function dodaj(){
    let inx = a.toString();
    let element = document.createElement("tr");
    let text = document.getElementById("d1").value;
    element.id = inx;
    let nr = " [nr "+ inx+ "]";
    element.textContent = text + nr;
    element.className = "ad";
    document.getElementById("t1").append(element);
    a = a + 1
}
function zmien(){
    let idn = document.getElementById("d3").value;
    let text2 = document.getElementById("d2").value;
    let iden = " [nr " + idn +"]";
    let text = text2 + iden;
    console.log(text);
    document.getElementById(idn).textContent = text;
}
function usun(){
    let parent = document.getElementById("t1");
    let idd = document.getElementById("d4").value;
    let child = document.getElementById(idd);
    parent.removeChild(child);
    a = a - 1
}