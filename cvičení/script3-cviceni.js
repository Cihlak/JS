let totalprice=90;
if (totalprice>=100) {
    let discount =totalprice*0.7
    console.log ("cena se slevou je " + discount)
} else {
    let rest=100-totalprice
    console.log ("pokud utratíte ještě " + rest + "€" + " a dostanete slevu 30%")
}