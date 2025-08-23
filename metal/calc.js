// hide weight block if checked count length
function checkForActiveC() {
    var weigthCalc = document.getElementById("weigth_calc");
    var lengthCalc = document.getElementById("length_calc");
    var subtitle = document.getElementById("subtitle");

    if (weigthCalc.classList.contains("active_c")) {
        weigthCalc.classList.add("active_c");
        lengthCalc.classList.remove("active_c");
        weightTogle.classList.add("lenmain");
        lenmain.classList.remove("lenmain");
        resultBox.classList.remove("lenmain");
        resultLengthBox.classList.add("lenmain");
        subtitle.innerHTML = "веса";
    }

    if (lengthCalc.classList.contains("active_c")) {
        weigthCalc.classList.remove("active_c");
        lengthCalc.classList.add("active_c");
        weightTogle.classList.remove("lenmain");
        lenmain.classList.add("lenmain");
        resultBox.classList.add("lenmain");
        resultLengthBox.classList.remove("lenmain");
        subtitle.innerHTML = "длины";
    }
}















//others
var subtitle = document.getElementById("subtitle");
var subtitle2 = document.getElementById("subtitle2");

var steelType = document.getElementById("steelType");
var castIron = document.getElementById("castIron");
var aluminum = document.getElementById("aluminum");
var bronze = document.getElementById("bronze");
var brass = document.getElementById("brass");
var stainlessSteel = document.getElementById("stainlessSteel");
var copper = document.getElementById("copper");
var titanium = document.getElementById("titanium");

var circleid = document.getElementById("circleid");
var squre = document.getElementById("squre");
var hexahedron = document.getElementById("hexahedron");
var corner = document.getElementById("corner");
var ribbon = document.getElementById("ribbon");
var beam = document.getElementById("beam");
var pipe = document.getElementById("pipe");
var plate = document.getElementById("plate");
var channel = document.getElementById("channel");
var profile_pipe = document.getElementById("profile_pipe");

var customDiv = document.getElementById("divprokat1");
var customDiv2 = document.getElementById("divprokat2");
var customDiv3 = document.getElementById("divprokat3");
var customDiv4 = document.getElementById("divprokat4");
var customDiv5 = document.getElementById("divprokat5");
var customDiv6 = document.getElementById("divprokat6");
var customDiv7 = document.getElementById("divprokat7");
var customDiv8 = document.getElementById("divprokat8");
var customDiv9 = document.getElementById("divprokat9");
var customDiv10 = document.getElementById("divprokat10");
var InptValue = document.getElementById("checked1");
var InptValue2 = document.getElementById("checked2");
var InptValue3 = document.getElementById("checked3");
var InptValue4 = document.getElementById("checked4");
var InptValue5 = document.getElementById("checked5");
var InptValue6 = document.getElementById("checked6");
var InptValue7 = document.getElementById("checked7");
var InptValue8 = document.getElementById("checked8");
var InptValue9 = document.getElementById("checked9");
var InptValue10 = document.getElementById("checked10");

var lenmain = document.getElementById("lenmain");
var lenmainPlate = document.getElementById("lenmainPlate");

if (InptValue.checked) {
    customDiv.style.display = "flex";
    circleid.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " круга"
    lenmain.classList.remove("lenmain");
    lenmainPlate.classList.add("lenPlate");
}
if (InptValue2.checked) {
    customDiv2.style.display = "flex";
    squre.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " квадрата";
    lenmain.classList.remove("lenmain");
    lenmainPlate.classList.add("lenPlate");
}
if (InptValue3.checked) {
    customDiv3.style.display = "flex";
    hexahedron.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " шестигранника";
    lenmain.classList.remove("lenmain");
    lenmainPlate.classList.add("lenPlate");
}
if (InptValue4.checked) {
    customDiv4.style.display = "flex";
    corner.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " уголка";
    lenmain.classList.remove("lenmain");
    lenmainPlate.classList.add("lenPlate");
}
if (InptValue5.checked) {
    customDiv5.style.display = "flex";
    ribbon.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " ленты";
    lenmain.classList.remove("lenmain");
    lenmainPlate.classList.add("lenPlate");
}
if (InptValue6.checked) {
    customDiv6.style.display = "flex";
    beam.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " балки";
    lenmain.classList.remove("lenmain");
    lenmainPlate.classList.add("lenPlate");
}
if (InptValue7.checked) {
    customDiv7.style.display = "flex";
    pipe.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " трубы";
    lenmain.classList.remove("lenmain");
    lenmainPlate.classList.add("lenPlate");
}
if (InptValue8.checked) {
    customDiv8.style.display = "flex";
    plate.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " листа";
    lenmain.classList.add("lenmain");
    lenmainPlate.classList.remove("lenPlate");
}
if (InptValue9.checked) {
    customDiv9.style.display = "flex";
    channel.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " швеллера";
    lenmain.classList.remove("lenmain");
    lenmainPlate.classList.add("lenPlate");
}
if (InptValue10.checked) {
    customDiv10.style.display = "flex";
    profile_pipe.classList.add("add_cat_steel");
    subtitle.innerHTML = " веса";
    subtitle2.innerHTML = " профильной трубы";
    lenmain.classList.remove("lenmain");
    lenmainPlate.classList.add("lenPlate");
}

function showDivCircle(inputValue) {
    var div1 = document.getElementById("divprokat1");
    var div2 = document.getElementById("divprokat2");
    var div3 = document.getElementById("divprokat3");
    var div4 = document.getElementById("divprokat4");
    var div5 = document.getElementById("divprokat5");
    var div6 = document.getElementById("divprokat6");
    var div7 = document.getElementById("divprokat7");
    var div8 = document.getElementById("divprokat8");
    var div9 = document.getElementById("divprokat9");
    var div10 = document.getElementById("divprokat10");

    if (inputValue === "prokat1") {
        div1.style.display = "flex";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9.style.display = "none";
        div10.style.display = "none";
        circleid.classList.add("add_cat_steel");
        squre.classList.remove("add_cat_steel");
        hexahedron.classList.remove("add_cat_steel");
        corner.classList.remove("add_cat_steel");
        ribbon.classList.remove("add_cat_steel");
        beam.classList.remove("add_cat_steel");
        pipe.classList.remove("add_cat_steel");
        plate.classList.remove("add_cat_steel");
        channel.classList.remove("add_cat_steel");
        profile_pipe.classList.remove("add_cat_steel");
        subtitle2.innerHTML = " круга";
        lenmain.classList.remove("lenmain");
        lenmainPlate.classList.add("lenPlate");
        lenmain.classList.remove("lenmainList");
        checkForActiveC();
    } else if (inputValue === "prokat2") {
        div1.style.display = "none";
        div2.style.display = "flex";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9.style.display = "none";
        div10.style.display = "none";
        squre.classList.add("add_cat_steel");
        circleid.classList.remove("add_cat_steel");
        hexahedron.classList.remove("add_cat_steel");
        corner.classList.remove("add_cat_steel");
        ribbon.classList.remove("add_cat_steel");
        beam.classList.remove("add_cat_steel");
        pipe.classList.remove("add_cat_steel");
        plate.classList.remove("add_cat_steel");
        channel.classList.remove("add_cat_steel");
        profile_pipe.classList.remove("add_cat_steel");
        subtitle2.innerHTML = " квадрата";
        lenmain.classList.remove("lenmain");
        lenmainPlate.classList.add("lenPlate");
        lenmain.classList.remove("lenmainList");
        checkForActiveC();
    } else if (inputValue === "prokat3") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "flex";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9.style.display = "none";
        div10.style.display = "none";
        hexahedron.classList.add("add_cat_steel");
        squre.classList.remove("add_cat_steel");
        circleid.classList.remove("add_cat_steel");
        corner.classList.remove("add_cat_steel");
        ribbon.classList.remove("add_cat_steel");
        beam.classList.remove("add_cat_steel");
        pipe.classList.remove("add_cat_steel");
        plate.classList.remove("add_cat_steel");
        channel.classList.remove("add_cat_steel");
        profile_pipe.classList.remove("add_cat_steel");
        subtitle2.innerHTML = " шестигранника";
        lenmain.classList.remove("lenmain");
        lenmainPlate.classList.add("lenPlate");
        lenmain.classList.remove("lenmainList");
        checkForActiveC();
    } else if (inputValue === "prokat4") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "flex";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9.style.display = "none";
        div10.style.display = "none";
        circleid.classList.remove("add_cat_steel");
        squre.classList.remove("add_cat_steel");
        hexahedron.classList.remove("add_cat_steel");
        corner.classList.add("add_cat_steel");
        ribbon.classList.remove("add_cat_steel");
        beam.classList.remove("add_cat_steel");
        pipe.classList.remove("add_cat_steel");
        plate.classList.remove("add_cat_steel");
        channel.classList.remove("add_cat_steel");
        profile_pipe.classList.remove("add_cat_steel");
        subtitle2.innerHTML = " уголка";
        lenmain.classList.remove("lenmain");
        lenmainPlate.classList.add("lenPlate");
        lenmain.classList.remove("lenmainList");
        checkForActiveC();
    } else if (inputValue === "prokat5") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "flex";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9.style.display = "none";
        div10.style.display = "none";
        circleid.classList.remove("add_cat_steel");
        squre.classList.remove("add_cat_steel");
        hexahedron.classList.remove("add_cat_steel");
        corner.classList.remove("add_cat_steel");
        ribbon.classList.add("add_cat_steel");
        beam.classList.remove("add_cat_steel");
        pipe.classList.remove("add_cat_steel");
        plate.classList.remove("add_cat_steel");
        channel.classList.remove("add_cat_steel");
        profile_pipe.classList.remove("add_cat_steel");
        subtitle2.innerHTML = " ленты";
        lenmain.classList.remove("lenmain");
        lenmainPlate.classList.add("lenPlate");
        lenmain.classList.remove("lenmainList");
        checkForActiveC();
    } else if (inputValue === "prokat6") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "flex";
        div7.style.display = "none";
        div8.style.display = "none";
        div9.style.display = "none";
        div10.style.display = "none";
        circleid.classList.remove("add_cat_steel");
        squre.classList.remove("add_cat_steel");
        hexahedron.classList.remove("add_cat_steel");
        corner.classList.remove("add_cat_steel");
        ribbon.classList.remove("add_cat_steel");
        beam.classList.add("add_cat_steel");
        pipe.classList.remove("add_cat_steel");
        plate.classList.remove("add_cat_steel");
        channel.classList.remove("add_cat_steel");
        profile_pipe.classList.remove("add_cat_steel");
        subtitle2.innerHTML = " балки";
        lenmain.classList.remove("lenmain");
        lenmainPlate.classList.add("lenPlate");
        lenmain.classList.remove("lenmainList");
        checkForActiveC();
    } else if (inputValue === "prokat7") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "flex";
        div8.style.display = "none";
        div9.style.display = "none";
        div10.style.display = "none";
        circleid.classList.remove("add_cat_steel");
        squre.classList.remove("add_cat_steel");
        hexahedron.classList.remove("add_cat_steel");
        corner.classList.remove("add_cat_steel");
        ribbon.classList.remove("add_cat_steel");
        beam.classList.remove("add_cat_steel");
        pipe.classList.add("add_cat_steel");
        plate.classList.remove("add_cat_steel");
        channel.classList.remove("add_cat_steel");
        profile_pipe.classList.remove("add_cat_steel");
        subtitle2.innerHTML = " трубы";
        lenmain.classList.remove("lenmain");
        lenmainPlate.classList.add("lenPlate");
        lenmain.classList.remove("lenmainList");
        checkForActiveC();
    } else if (inputValue === "prokat8") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "flex";
        div9.style.display = "none";
        div10.style.display = "none";
        circleid.classList.remove("add_cat_steel");
        squre.classList.remove("add_cat_steel");
        hexahedron.classList.remove("add_cat_steel");
        corner.classList.remove("add_cat_steel");
        ribbon.classList.remove("add_cat_steel");
        beam.classList.remove("add_cat_steel");
        pipe.classList.remove("add_cat_steel");
        plate.classList.add("add_cat_steel");
        channel.classList.remove("add_cat_steel");
        profile_pipe.classList.remove("add_cat_steel");
        subtitle2.innerHTML = " листа";
        lenmainPlate.classList.remove("lenPlate");
        lenmain.classList.add("lenmainList");
        checkForActiveC();
    } else if (inputValue === "prokat9") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9.style.display = "flex";
        div10.style.display = "none";
        circleid.classList.remove("add_cat_steel");
        squre.classList.remove("add_cat_steel");
        hexahedron.classList.remove("add_cat_steel");
        corner.classList.remove("add_cat_steel");
        ribbon.classList.remove("add_cat_steel");
        beam.classList.remove("add_cat_steel");
        pipe.classList.remove("add_cat_steel");
        plate.classList.remove("add_cat_steel");
        channel.classList.add("add_cat_steel");
        profile_pipe.classList.remove("add_cat_steel");
        subtitle2.innerHTML = " швеллера";
        lenmain.classList.remove("lenmain");
        lenmainPlate.classList.add("lenPlate");
        lenmain.classList.remove("lenmainList");
        checkForActiveC();
    } else if (inputValue === "prokat10") {
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
        div6.style.display = "none";
        div7.style.display = "none";
        div8.style.display = "none";
        div9.style.display = "none";
        div10.style.display = "flex";
        circleid.classList.remove("add_cat_steel");
        squre.classList.remove("add_cat_steel");
        hexahedron.classList.remove("add_cat_steel");
        corner.classList.remove("add_cat_steel");
        ribbon.classList.remove("add_cat_steel");
        beam.classList.remove("add_cat_steel");
        pipe.classList.remove("add_cat_steel");
        plate.classList.remove("add_cat_steel");
        channel.classList.remove("add_cat_steel");
        profile_pipe.classList.add("add_cat_steel");
        subtitle2.innerHTML = " профильной трубы";
        lenmain.classList.remove("lenmain");
        lenmainPlate.classList.add("lenPlate");
        lenmain.classList.remove("lenmainList");
        checkForActiveC();
    }
}



















var materialType = document.getElementById("materialType");
var steelType = document.getElementById("steelType");
var castIron = document.getElementById("castIron");
var aluminum = document.getElementById("aluminum");
var bronze = document.getElementById("bronze");
var brass = document.getElementById("brass");
var stainlessSteel = document.getElementById("stainlessSteel");
var copper = document.getElementById("copper");
var titanium = document.getElementById("titanium");

steelType.style.display = 'block';
castIron.style.display = 'none';
aluminum.style.display = 'none';
bronze.style.display = 'none';
brass.style.display = 'none';
stainlessSteel.style.display = 'none';
copper.style.display = 'none';
titanium.style.display = 'none';















// select choice count weight or length
var weigthCalc = document.getElementById("weigth_calc");
var lengthCalc = document.getElementById("length_calc");
var lenmainCalc = document.getElementById("lenmain");
var weightTogle = document.getElementById("weightTogle");
var lenmain = document.getElementById("lenmain");
var resultBox = document.getElementById("resultBox");
var resultLengthBox = document.getElementById("resultLengthBox");
var lenmainPlate = document.getElementById("lenmainPlate");
var resultReset = document.getElementById("result");
var resultLengthReset = document.getElementById("resultLength");
var resultWeigth = document.getElementById("resultWeigth");
var weightCount = document.getElementById("weightCount");
var Price = document.getElementById("Price");
var length = document.getElementById("length");
var calculateDivBtn = document.getElementById("calculate");
var calculateDivBtn2 = document.getElementById("calculate2");

weigthCalc.addEventListener("click", function () {
    weigthCalc.classList.add("active_c");
    lengthCalc.classList.remove("active_c");
    weightTogle.classList.add("lenmain");
    lenmain.classList.remove("lenmain");
    resultBox.classList.remove("lenmain");
    resultLengthBox.classList.add("lenmain");
    lenmainPlate.classList.remove("lenmain");
    subtitle.innerHTML = " веса";
    resultReset.innerHTML = "0.00";
    resultLengthReset.innerHTML = "0.000";
    resultWeigth.innerHTML = "0.00";
    weightCount.value = "";
    Price.value = "";
    length.value = "";
    calculateDivBtn2.classList.add("lenmain");
    calculateDivBtn.classList.remove("lenmain");
});

lengthCalc.addEventListener("click", function () {
    weigthCalc.classList.remove("active_c");
    lengthCalc.classList.add("active_c");
    weightTogle.classList.remove("lenmain");
    lenmain.classList.add("lenmain");
    resultBox.classList.add("lenmain");
    resultLengthBox.classList.remove("lenmain");
    lenmainPlate.classList.add("lenmain");
    subtitle.innerHTML = " длины";
    resultReset.innerHTML = "0.00";
    resultLengthReset.innerHTML = "0.000";
    resultWeigth.innerHTML = "0.00";
    weightCount.value = "";
    Price.value = "";
    length.value = "";
    calculateDivBtn.classList.add("lenmain");
    calculateDivBtn2.classList.remove("lenmain");
});



















document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("calculate2").addEventListener("click", calculate2);

var weightCalc = document.getElementById("weigth_calc");
var lengthCalc = document.getElementById("length_calc");

weightCalc.addEventListener("click", function () {
    document.getElementById("calculate").addEventListener("click", calculate);
});
lengthCalc.addEventListener("click", function () {
    document.getElementById("calculate2").addEventListener("click", calculate2);
});

function calculate() {
    var circle = document.getElementById("checked1");
    var squre = document.getElementById("checked2");
    var hexahedron = document.getElementById("checked3");
    var corner = document.getElementById("checked4");
    var ribbon = document.getElementById("checked5");
    var beam = document.getElementById("checked6");
    var pipe = document.getElementById("checked7");
    var plate = document.getElementById("checked8");
    var channel = document.getElementById("checked9");
    var profile_pipe = document.getElementById("checked10");

    var diameter = document.getElementById("diameter").value.replace(",", ".");
    var withIn = document.getElementById("withIn").value.replace(",", ".");
    var hexahedronInp = document.getElementById("hexahedronInp").value.replace(",", ".");
    var cornerWidth = document.getElementById("cornerWidth").value.replace(",", ".");
    var cornerHeigth = document.getElementById("cornerHeigth").value.replace(",", ".");
    var cornerThickness = document.getElementById("cornerThickness").value.replace(",", ".");
    var ribbonWidth = document.getElementById("ribbonWidth").value.replace(",", ".");
    var ribbonHeigth = document.getElementById("ribbonHeigth").value.replace(",", ".");
    var beamWidth = document.getElementById("beamWidth").value.replace(",", ".");
    var beamHeigth = document.getElementById("beamHeigth").value.replace(",", ".");
    var lintelLintThick = document.getElementById("lintelLintThick").value.replace(",", ".");
    var beamShelfThick = document.getElementById("beamShelfThick").value.replace(",", ".");
    var pipeDiam = document.getElementById("pipeDiam").value.replace(",", ".");
    var pipeThickness = document.getElementById("pipeThickness").value.replace(",", ".");
    var plateThickness = document.getElementById("plateThickness").value.replace(",", ".");
    var plateWidth = document.getElementById("plateWidth").value.replace(",", ".");
    var plateNumber = document.getElementById("plateNumber").value.replace(",", ".");
    var lengthPlate = document.getElementById("lengthPlate").value.replace(",", ".");
    var channelWidth = document.getElementById("channelWidth").value.replace(",", ".");
    var channelHeigth = document.getElementById("channelHeigth").value.replace(",", ".");
    var channelThickness = document.getElementById("channelThickness").value.replace(",", ".");
    var channelThicknessShelf = document.getElementById("channelThicknessShelf").value.replace(",", ".");
    var profilePipeWidth = document.getElementById("profilePipeWidth").value.replace(",", ".");
    var profilePipeHeigth = document.getElementById("profilePipeHeigth").value.replace(",", ".");
    var profilePipeThickness = document.getElementById("profilePipeThickness").value.replace(",", ".");
    var length = document.getElementById("length").value.replace(",", ".");

    var materialType = document.getElementById("materialType").value;
    var steelType = document.getElementById("steelType").value;
    var castIron = document.getElementById("castIron").value;
    var aluminum = document.getElementById("aluminum").value;
    var bronze = document.getElementById("bronze").value;
    var brass = document.getElementById("brass").value;
    var stainlessSteel = document.getElementById("stainlessSteel").value;
    var copper = document.getElementById("copper").value;
    var titanium = document.getElementById("titanium").value;

    // calculation of a circle of steel
    if (circle.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeight(7.82, diameter, length);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeight(7.85, diameter, length);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeight(7.856, diameter, length);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeight(7.859, diameter, length);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeight(7.826, diameter, length);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeight(7.85, diameter, length);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeight(7.85, diameter, length);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeight(7.85, diameter, length);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeight(7.75, diameter, length);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeight(7.85, diameter, length);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeight(7.8, diameter, length);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeight(7.812, diameter, length);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeight(8.3, diameter, length);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeight(7.83, diameter, length);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeight(7.839, diameter, length);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeight(7.839, diameter, length);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeight(7.81, diameter, length);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeight(7.81, diameter, length);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeight(7.83, diameter, length);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeight(6.8, diameter, length);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeight(7, diameter, length);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeight(7.1, diameter, length);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeight(7.2, diameter, length);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeight(7.4, diameter, length);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeight(2.7, diameter, length);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeight(2.7, diameter, length);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeight(2.71, diameter, length);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeight(2.77, diameter, length);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeight(2.75, diameter, length);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeight(2.69, diameter, length);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeight(2.73, diameter, length);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeight(2.85, diameter, length);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeight(2.8, diameter, length);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeight(2.78, diameter, length);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeight(7.5, diameter, length);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeight(7.5, diameter, length);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeight(7.5, diameter, length);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeight(7.63, diameter, length);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeight(8.2, diameter, length);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeight(8.47, diameter, length);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeight(8.6, diameter, length);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeight(8.8, diameter, length);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeight(8.44, diameter, length);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeight(8.5, diameter, length);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeight(8.5, diameter, length);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeight(8.4, diameter, length);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeight(8.4, diameter, length);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeight(8.4, diameter, length);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeight(8.5, diameter, length);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeight(8.5, diameter, length);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeight(7.67, diameter, length);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeight(7.67, diameter, length);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeight(7.42, diameter, length);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeight(7.85, diameter, length);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeight(7.92, diameter, length);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeight(7.9, diameter, length);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeight(7.96, diameter, length);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeight(7.88, diameter, length);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeight(7.74, diameter, length);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeight(8, diameter, length);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeight(7.86, diameter, length);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeight(7.79, diameter, length);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeight(7.73, diameter, length);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeight(7.7, diameter, length);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeight(8.06, diameter, length);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeight(8.94, diameter, length);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeight(8.94, diameter, length);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeight(8.94, diameter, length);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeight(4.505, diameter, length);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeight(4.505, diameter, length);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeight(4.52, diameter, length);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeight(4.45, diameter, length);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeight(4.62, diameter, length);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeight(4.5, diameter, length);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeight(4.4, diameter, length);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeight(4.5, diameter, length);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeight(4.55, diameter, length);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeight(4.49, diameter, length);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }

    } else if (squre.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeightSquare(7.82, withIn, length);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeightSquare(7.85, withIn, length);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeightSquare(7.856, withIn, length);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeightSquare(7.859, withIn, length);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeightSquare(7.826, withIn, length);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeightSquare(7.85, withIn, length);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeightSquare(7.85, withIn, length);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeightSquare(7.85, withIn, length);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeightSquare(7.75, withIn, length);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeightSquare(7.85, withIn, length);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeightSquare(7.8, withIn, length);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeightSquare(7.812, withIn, length);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeightSquare(8.3, withIn, length);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeightSquare(7.83, withIn, length);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeightSquare(7.839, withIn, length);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeightSquare(7.839, withIn, length);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeightSquare(7.81, withIn, length);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeightSquare(7.81, withIn, length);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeightSquare(7.83, withIn, length);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeightSquare(6.8, withIn, length);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeightSquare(7, withIn, length);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeightSquare(7.1, withIn, length);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeightSquare(7.2, withIn, length);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeightSquare(7.4, withIn, length);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeightSquare(2.7, withIn, length);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeightSquare(2.7, withIn, length);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeightSquare(2.71, withIn, length);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeightSquare(2.77, withIn, length);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeightSquare(2.75, withIn, length);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeightSquare(2.69, withIn, length);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeightSquare(2.73, withIn, length);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeightSquare(2.85, withIn, length);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeightSquare(2.8, withIn, length);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeightSquare(2.78, withIn, length);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeightSquare(7.5, withIn, length);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeightSquare(7.5, withIn, length);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeightSquare(7.5, withIn, length);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeightSquare(7.63, withIn, length);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeightSquare(8.2, withIn, length);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeightSquare(8.47, withIn, length);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeightSquare(8.6, withIn, length);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeightSquare(8.8, withIn, length);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeightSquare(8.44, withIn, length);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeightSquare(8.5, withIn, length);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeightSquare(8.5, withIn, length);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeightSquare(8.4, withIn, length);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeightSquare(8.4, withIn, length);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeightSquare(8.4, withIn, length);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeightSquare(8.5, withIn, length);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeightSquare(8.5, withIn, length);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeightSquare(7.67, withIn, length);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeightSquare(7.67, withIn, length);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeightSquare(7.42, withIn, length);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeightSquare(7.85, withIn, length);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeightSquare(7.92, withIn, length);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeightSquare(7.9, withIn, length);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeightSquare(7.96, withIn, length);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeightSquare(7.88, withIn, length);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeightSquare(7.74, withIn, length);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeightSquare(8, withIn, length);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeightSquare(7.86, withIn, length);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeightSquare(7.79, withIn, length);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeightSquare(7.73, withIn, length);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeightSquare(7.7, withIn, length);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeightSquare(8.06, withIn, length);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeightSquare(8.94, withIn, length);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeightSquare(8.94, withIn, length);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeightSquare(8.94, withIn, length);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeightSquare(4.505, withIn, length);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeightSquare(4.505, withIn, length);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeightSquare(4.52, withIn, length);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeightSquare(4.45, withIn, length);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeightSquare(4.62, withIn, length);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeightSquare(4.5, withIn, length);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeightSquare(4.4, withIn, length);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeightSquare(4.5, withIn, length);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeightSquare(4.55, withIn, length);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeightSquare(4.49, withIn, length);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }

    } else if (hexahedron.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeighthexahedron(7.82, hexahedronInp, length);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeighthexahedron(7.85, hexahedronInp, length);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeighthexahedron(7.856, hexahedronInp, length);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeighthexahedron(7.859, hexahedronInp, length);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeighthexahedron(7.826, hexahedronInp, length);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeighthexahedron(7.85, hexahedronInp, length);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeighthexahedron(7.85, hexahedronInp, length);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeighthexahedron(7.85, hexahedronInp, length);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeighthexahedron(7.75, hexahedronInp, length);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeighthexahedron(7.85, hexahedronInp, length);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeighthexahedron(7.8, hexahedronInp, length);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeighthexahedron(7.812, hexahedronInp, length);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeighthexahedron(8.3, hexahedronInp, length);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeighthexahedron(7.83, hexahedronInp, length);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeighthexahedron(7.839, hexahedronInp, length);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeighthexahedron(7.839, hexahedronInp, length);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeighthexahedron(7.81, hexahedronInp, length);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeighthexahedron(7.81, hexahedronInp, length);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeighthexahedron(7.83, hexahedronInp, length);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeighthexahedron(6.8, hexahedronInp, length);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeighthexahedron(7, hexahedronInp, length);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeighthexahedron(7.1, hexahedronInp, length);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeighthexahedron(7.2, hexahedronInp, length);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeighthexahedron(7.4, hexahedronInp, length);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeighthexahedron(2.7, hexahedronInp, length);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeighthexahedron(2.7, hexahedronInp, length);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeighthexahedron(2.71, hexahedronInp, length);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeighthexahedron(2.77, hexahedronInp, length);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeighthexahedron(2.75, hexahedronInp, length);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeighthexahedron(2.69, hexahedronInp, length);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeighthexahedron(2.73, hexahedronInp, length);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeighthexahedron(2.85, hexahedronInp, length);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeighthexahedron(2.8, hexahedronInp, length);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeighthexahedron(2.78, hexahedronInp, length);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeighthexahedron(7.5, hexahedronInp, length);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeighthexahedron(7.5, hexahedronInp, length);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeighthexahedron(7.5, hexahedronInp, length);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeighthexahedron(7.63, hexahedronInp, length);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeighthexahedron(8.2, hexahedronInp, length);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeighthexahedron(8.47, hexahedronInp, length);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeighthexahedron(8.6, hexahedronInp, length);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeighthexahedron(8.8, hexahedronInp, length);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeighthexahedron(8.44, hexahedronInp, length);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeighthexahedron(8.5, hexahedronInp, length);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeighthexahedron(8.5, hexahedronInp, length);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeighthexahedron(8.4, hexahedronInp, length);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeighthexahedron(8.4, hexahedronInp, length);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeighthexahedron(8.4, hexahedronInp, length);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeighthexahedron(8.5, hexahedronInp, length);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeighthexahedron(8.5, hexahedronInp, length);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeighthexahedron(7.67, hexahedronInp, length);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeighthexahedron(7.67, hexahedronInp, length);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeighthexahedron(7.42, hexahedronInp, length);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeighthexahedron(7.85, hexahedronInp, length);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeighthexahedron(7.92, hexahedronInp, length);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeighthexahedron(7.9, hexahedronInp, length);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeighthexahedron(7.96, hexahedronInp, length);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeighthexahedron(7.88, hexahedronInp, length);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeighthexahedron(7.74, hexahedronInp, length);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeighthexahedron(8, hexahedronInp, length);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeighthexahedron(7.86, hexahedronInp, length);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeighthexahedron(7.79, hexahedronInp, length);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeighthexahedron(7.73, hexahedronInp, length);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeighthexahedron(7.7, hexahedronInp, length);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeighthexahedron(8.06, hexahedronInp, length);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeighthexahedron(8.94, hexahedronInp, length);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeighthexahedron(8.94, hexahedronInp, length);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeighthexahedron(8.94, hexahedronInp, length);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeighthexahedron(4.505, hexahedronInp, length);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeighthexahedron(4.505, hexahedronInp, length);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeighthexahedron(4.52, hexahedronInp, length);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeighthexahedron(4.45, hexahedronInp, length);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeighthexahedron(4.62, hexahedronInp, length);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeighthexahedron(4.5, hexahedronInp, length);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeighthexahedron(4.4, hexahedronInp, length);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeighthexahedron(4.5, hexahedronInp, length);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeighthexahedron(4.55, hexahedronInp, length);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeighthexahedron(4.49, hexahedronInp, length);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }

    } else if (corner.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeightCorner(7.82, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeightCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeightCorner(7.856, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeightCorner(7.859, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeightCorner(7.826, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeightCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeightCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeightCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeightCorner(7.75, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeightCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeightCorner(7.8, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeightCorner(7.812, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeightCorner(8.3, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeightCorner(7.83, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeightCorner(7.839, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeightCorner(7.839, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeightCorner(7.81, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeightCorner(7.81, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeightCorner(7.83, cornerWidth, cornerHeigth, cornerThickness, length);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeightCorner(6.8, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeightCorner(7, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeightCorner(7.1, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeightCorner(7.2, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeightCorner(7.4, cornerWidth, cornerHeigth, cornerThickness, length);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeightCorner(2.7, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeightCorner(2.7, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeightCorner(2.71, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeightCorner(2.77, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeightCorner(2.75, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeightCorner(2.69, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeightCorner(2.73, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeightCorner(2.85, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeightCorner(2.8, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeightCorner(2.78, cornerWidth, cornerHeigth, cornerThickness, length);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeightCorner(7.5, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeightCorner(7.5, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeightCorner(7.5, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeightCorner(7.63, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeightCorner(8.2, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeightCorner(8.47, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeightCorner(8.6, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeightCorner(8.8, cornerWidth, cornerHeigth, cornerThickness, length);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeightCorner(8.44, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeightCorner(8.5, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeightCorner(8.5, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeightCorner(8.4, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeightCorner(8.4, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeightCorner(8.4, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeightCorner(8.5, cornerWidth, cornerHeigth, cornerThickness, length);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeightCorner(8.5, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeightCorner(7.67, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeightCorner(7.67, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeightCorner(7.42, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeightCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeightCorner(7.92, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeightCorner(7.9, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeightCorner(7.96, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeightCorner(7.88, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeightCorner(7.74, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeightCorner(8, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeightCorner(7.86, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeightCorner(7.79, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeightCorner(7.73, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeightCorner(7.7, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeightCorner(8.06, cornerWidth, cornerHeigth, cornerThickness, length);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeightCorner(8.94, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeightCorner(8.94, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeightCorner(8.94, cornerWidth, cornerHeigth, cornerThickness, length);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeightCorner(4.505, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeightCorner(4.505, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeightCorner(4.52, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeightCorner(4.45, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeightCorner(4.62, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeightCorner(4.5, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeightCorner(4.4, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeightCorner(4.5, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeightCorner(4.55, cornerWidth, cornerHeigth, cornerThickness, length);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeightCorner(4.49, cornerWidth, cornerHeigth, cornerThickness, length);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }

    } else if (ribbon.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeightRibbon(7.82, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeightRibbon(7.85, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeightRibbon(7.856, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeightRibbon(7.859, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeightRibbon(7.826, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeightRibbon(7.85, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeightRibbon(7.85, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeightRibbon(7.85, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeightRibbon(7.75, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeightRibbon(7.85, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeightRibbon(7.8, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeightRibbon(7.812, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeightRibbon(8.3, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeightRibbon(7.83, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeightRibbon(7.839, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeightRibbon(7.839, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeightRibbon(7.81, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeightRibbon(7.81, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeightRibbon(7.83, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeightRibbon(6.8, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeightRibbon(7, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeightRibbon(7.1, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeightRibbon(7.2, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeightRibbon(7.4, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeightRibbon(2.7, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeightRibbon(2.7, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeightRibbon(2.71, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeightRibbon(2.77, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeightRibbon(2.75, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeightRibbon(2.69, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeightRibbon(2.73, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeightRibbon(2.85, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeightRibbon(2.8, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeightRibbon(2.78, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeightRibbon(7.5, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeightRibbon(7.5, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeightRibbon(7.5, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeightRibbon(7.63, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeightRibbon(8.2, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeightRibbon(8.47, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeightRibbon(8.6, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeightRibbon(8.8, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeightRibbon(8.44, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeightRibbon(8.5, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeightRibbon(8.5, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeightRibbon(8.4, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeightRibbon(8.4, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeightRibbon(8.4, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeightRibbon(8.5, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeightRibbon(8.5, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeightRibbon(7.67, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeightRibbon(7.67, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeightRibbon(7.42, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeightRibbon(7.85, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeightRibbon(7.92, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeightRibbon(7.9, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeightRibbon(7.96, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeightRibbon(7.88, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeightRibbon(7.74, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeightRibbon(8, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeightRibbon(7.86, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeightRibbon(7.79, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeightRibbon(7.73, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeightRibbon(7.7, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeightRibbon(8.06, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeightRibbon(8.94, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeightRibbon(8.94, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeightRibbon(8.94, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeightRibbon(4.505, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeightRibbon(4.505, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeightRibbon(4.52, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeightRibbon(4.45, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeightRibbon(4.62, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeightRibbon(4.5, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeightRibbon(4.4, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeightRibbon(4.5, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeightRibbon(4.55, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeightRibbon(4.49, ribbonWidth, ribbonHeigth, length);
                metalArea = calculateArea(ribbonWidth, length);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }
        if (metalArea) {
            document.getElementById("area").innerText = metalArea.toFixed(2);
        }

    } else if (beam.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeightBeam(7.82, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeightBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeightBeam(7.856, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeightBeam(7.859, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeightBeam(7.826, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeightBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeightBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeightBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeightBeam(7.75, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeightBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeightBeam(7.8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeightBeam(7.812, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeightBeam(8.3, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeightBeam(7.83, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeightBeam(7.839, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeightBeam(7.839, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeightBeam(7.81, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeightBeam(7.81, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeightBeam(7.83, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeightBeam(6.8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeightBeam(7, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeightBeam(7.1, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeightBeam(7.2, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeightBeam(7.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeightBeam(2.7, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeightBeam(2.7, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeightBeam(2.71, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeightBeam(2.77, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeightBeam(2.75, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeightBeam(2.69, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeightBeam(2.73, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeightBeam(2.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeightBeam(2.8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeightBeam(2.78, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeightBeam(7.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeightBeam(7.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeightBeam(7.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeightBeam(7.63, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeightBeam(8.2, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeightBeam(8.47, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeightBeam(8.6, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeightBeam(8.8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeightBeam(8.44, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeightBeam(8.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeightBeam(8.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeightBeam(8.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeightBeam(8.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeightBeam(8.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeightBeam(8.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeightBeam(8.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeightBeam(7.67, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeightBeam(7.67, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeightBeam(7.42, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeightBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeightBeam(7.92, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeightBeam(7.9, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeightBeam(7.96, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeightBeam(7.88, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeightBeam(7.74, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeightBeam(8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeightBeam(7.86, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeightBeam(7.79, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeightBeam(7.73, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeightBeam(7.7, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeightBeam(8.06, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeightBeam(8.94, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeightBeam(8.94, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeightBeam(8.94, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeightBeam(4.505, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeightBeam(4.505, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeightBeam(4.52, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeightBeam(4.45, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeightBeam(4.62, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeightBeam(4.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeightBeam(4.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeightBeam(4.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeightBeam(4.55, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeightBeam(4.49, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }

    } else if (pipe.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeightPipe(7.82, pipeDiam, pipeThickness, length);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeightPipe(7.85, pipeDiam, pipeThickness, length);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeightPipe(7.856, pipeDiam, pipeThickness, length);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeightPipe(7.859, pipeDiam, pipeThickness, length);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeightPipe(7.826, pipeDiam, pipeThickness, length);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeightPipe(7.85, pipeDiam, pipeThickness, length);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeightPipe(7.85, pipeDiam, pipeThickness, length);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeightPipe(7.85, pipeDiam, pipeThickness, length);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeightPipe(7.75, pipeDiam, pipeThickness, length);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeightPipe(7.85, pipeDiam, pipeThickness, length);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeightPipe(7.8, pipeDiam, pipeThickness, length);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeightPipe(7.812, pipeDiam, pipeThickness, length);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeightPipe(8.3, pipeDiam, pipeThickness, length);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeightPipe(7.83, pipeDiam, pipeThickness, length);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeightPipe(7.839, pipeDiam, pipeThickness, length);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeightPipe(7.839, pipeDiam, pipeThickness, length);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeightPipe(7.81, pipeDiam, pipeThickness, length);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeightPipe(7.81, pipeDiam, pipeThickness, length);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeightPipe(7.83, pipeDiam, pipeThickness, length);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeightPipe(6.8, pipeDiam, pipeThickness, length);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeightPipe(7, pipeDiam, pipeThickness, length);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeightPipe(7.1, pipeDiam, pipeThickness, length);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeightPipe(7.2, pipeDiam, pipeThickness, length);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeightPipe(7.4, pipeDiam, pipeThickness, length);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeightPipe(2.7, pipeDiam, pipeThickness, length);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeightPipe(2.7, pipeDiam, pipeThickness, length);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeightPipe(2.71, pipeDiam, pipeThickness, length);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeightPipe(2.77, pipeDiam, pipeThickness, length);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeightPipe(2.75, pipeDiam, pipeThickness, length);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeightPipe(2.69, pipeDiam, pipeThickness, length);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeightPipe(2.73, pipeDiam, pipeThickness, length);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeightPipe(2.85, pipeDiam, pipeThickness, length);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeightPipe(2.8, pipeDiam, pipeThickness, length);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeightPipe(2.78, pipeDiam, pipeThickness, length);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeightPipe(7.5, pipeDiam, pipeThickness, length);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeightPipe(7.5, pipeDiam, pipeThickness, length);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeightPipe(7.5, pipeDiam, pipeThickness, length);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeightPipe(7.63, pipeDiam, pipeThickness, length);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeightPipe(8.2, pipeDiam, pipeThickness, length);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeightPipe(8.47, pipeDiam, pipeThickness, length);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeightPipe(8.6, pipeDiam, pipeThickness, length);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeightPipe(8.8, pipeDiam, pipeThickness, length);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeightPipe(8.44, pipeDiam, pipeThickness, length);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeightPipe(8.5, pipeDiam, pipeThickness, length);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeightPipe(8.5, pipeDiam, pipeThickness, length);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeightPipe(8.4, pipeDiam, pipeThickness, length);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeightPipe(8.4, pipeDiam, pipeThickness, length);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeightPipe(8.4, pipeDiam, pipeThickness, length);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeightPipe(8.5, pipeDiam, pipeThickness, length);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeightPipe(8.5, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeightPipe(7.67, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeightPipe(7.67, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeightPipe(7.42, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeightPipe(7.85, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeightPipe(7.92, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeightPipe(7.9, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeightPipe(7.96, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeightPipe(7.88, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeightPipe(7.74, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeightPipe(8, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeightPipe(7.86, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeightPipe(7.79, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeightPipe(7.73, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeightPipe(7.7, pipeDiam, pipeThickness, length);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeightPipe(8.06, pipeDiam, pipeThickness, length);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeightPipe(8.94, pipeDiam, pipeThickness, length);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeightPipe(8.94, pipeDiam, pipeThickness, length);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeightPipe(8.94, pipeDiam, pipeThickness, length);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeightPipe(4.505, pipeDiam, pipeThickness, length);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeightPipe(4.505, pipeDiam, pipeThickness, length);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeightPipe(4.52, pipeDiam, pipeThickness, length);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeightPipe(4.45, pipeDiam, pipeThickness, length);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeightPipe(4.62, pipeDiam, pipeThickness, length);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeightPipe(4.5, pipeDiam, pipeThickness, length);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeightPipe(4.4, pipeDiam, pipeThickness, length);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeightPipe(4.5, pipeDiam, pipeThickness, length);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeightPipe(4.55, pipeDiam, pipeThickness, length);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeightPipe(4.49, pipeDiam, pipeThickness, length);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }

    } else if (plate.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeightPlate(7.82, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeightPlate(7.85, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeightPlate(7.856, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeightPlate(7.859, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeightPlate(7.826, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeightPlate(7.85, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeightPlate(7.85, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeightPlate(7.85, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeightPlate(7.75, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeightPlate(7.85, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeightPlate(7.8, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeightPlate(7.812, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeightPlate(8.3, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeightPlate(7.83, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeightPlate(7.839, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeightPlate(7.839, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeightPlate(7.81, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeightPlate(7.81, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeightPlate(7.83, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeightPlate(6.8, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeightPlate(7, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeightPlate(7.1, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeightPlate(7.2, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeightPlate(7.4, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeightPlate(2.7, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeightPlate(2.7, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeightPlate(2.71, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeightPlate(2.77, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeightPlate(2.75, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeightPlate(2.69, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeightPlate(2.73, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeightPlate(2.85, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeightPlate(2.8, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeightPlate(2.78, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeightPlate(7.5, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeightPlate(7.5, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeightPlate(7.5, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeightPlate(7.63, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeightPlate(8.2, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeightPlate(8.47, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeightPlate(8.6, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeightPlate(8.8, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeightPlate(8.44, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeightPlate(8.5, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeightPlate(8.5, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeightPlate(8.4, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeightPlate(8.4, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeightPlate(8.4, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeightPlate(8.5, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeightPlate(8.5, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeightPlate(7.67, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeightPlate(7.67, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeightPlate(7.42, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeightPlate(7.85, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeightPlate(7.92, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeightPlate(7.9, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeightPlate(7.96, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeightPlate(7.88, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeightPlate(7.74, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeightPlate(8, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeightPlate(7.86, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeightPlate(7.79, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeightPlate(7.73, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeightPlate(7.7, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeightPlate(8.06, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeightPlate(8.94, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeightPlate(8.94, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeightPlate(8.94, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeightPlate(4.505, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeightPlate(4.505, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeightPlate(4.52, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeightPlate(4.45, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeightPlate(4.62, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeightPlate(4.5, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeightPlate(4.4, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeightPlate(4.5, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeightPlate(4.55, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeightPlate(4.49, plateThickness, plateWidth, plateNumber, lengthPlate);
                metalArea = calculateAreaМм(plateWidth, lengthPlate);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }
        if (metalArea) {
            document.getElementById("area2").innerText = metalArea.toFixed(2);
        }

    } else if (channel.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeightChannel(7.82, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeightChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeightChannel(7.856, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeightChannel(7.859, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeightChannel(7.826, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeightChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeightChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeightChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeightChannel(7.75, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeightChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeightChannel(7.8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeightChannel(7.812, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeightChannel(8.3, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeightChannel(7.83, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeightChannel(7.839, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeightChannel(7.839, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeightChannel(7.81, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeightChannel(7.81, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeightChannel(7.83, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeightChannel(6.8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeightChannel(7, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeightChannel(7.1, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeightChannel(7.2, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeightChannel(7.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeightChannel(2.7, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeightChannel(2.7, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeightChannel(2.71, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeightChannel(2.77, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeightChannel(2.75, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeightChannel(2.69, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeightChannel(2.73, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeightChannel(2.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeightChannel(2.8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeightChannel(2.78, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeightChannel(7.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeightChannel(7.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeightChannel(7.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeightChannel(7.63, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeightChannel(8.2, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeightChannel(8.47, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeightChannel(8.6, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeightChannel(8.8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeightChannel(8.44, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeightChannel(8.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeightChannel(8.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeightChannel(8.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeightChannel(8.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeightChannel(8.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeightChannel(8.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeightChannel(8.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeightChannel(7.67, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeightChannel(7.67, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeightChannel(7.42, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeightChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeightChannel(7.92, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeightChannel(7.9, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeightChannel(7.96, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeightChannel(7.88, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeightChannel(7.74, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeightChannel(8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeightChannel(7.86, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeightChannel(7.79, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeightChannel(7.73, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeightChannel(7.7, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeightChannel(8.06, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeightChannel(8.94, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeightChannel(8.94, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeightChannel(8.94, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeightChannel(4.505, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeightChannel(4.505, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeightChannel(4.52, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeightChannel(4.45, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeightChannel(4.62, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeightChannel(4.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeightChannel(4.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeightChannel(4.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeightChannel(4.55, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeightChannel(4.49, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }

    } else if (profile_pipe.checked) {
        var metalWeight;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalWeight = calculateMetalWeightprofilePipe(7.82, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "st3") {
                metalWeight = calculateMetalWeightprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "10") {
                metalWeight = calculateMetalWeightprofilePipe(7.856, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "20") {
                metalWeight = calculateMetalWeightprofilePipe(7.859, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "45") {
                metalWeight = calculateMetalWeightprofilePipe(7.826, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "65") {
                metalWeight = calculateMetalWeightprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "65Г") {
                metalWeight = calculateMetalWeightprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "09Г2С") {
                metalWeight = calculateMetalWeightprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "15Х5М") {
                metalWeight = calculateMetalWeightprofilePipe(7.75, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "10ХСНД") {
                metalWeight = calculateMetalWeightprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "12Х1МФ") {
                metalWeight = calculateMetalWeightprofilePipe(7.8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "ШХ15") {
                metalWeight = calculateMetalWeightprofilePipe(7.812, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "Р6М5") {
                metalWeight = calculateMetalWeightprofilePipe(8.3, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "У7") {
                metalWeight = calculateMetalWeightprofilePipe(7.83, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalWeightprofilePipe(7.839, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "У8А") {
                metalWeight = calculateMetalWeightprofilePipe(7.839, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "У10") {
                metalWeight = calculateMetalWeightprofilePipe(7.81, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "У10А") {
                metalWeight = calculateMetalWeightprofilePipe(7.81, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (steelType === "У12А") {
                metalWeight = calculateMetalWeightprofilePipe(7.83, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalWeight = calculateMetalWeightprofilePipe(6.8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (castIron === "sch15") {
                metalWeight = calculateMetalWeightprofilePipe(7, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (castIron === "sch20") {
                metalWeight = calculateMetalWeightprofilePipe(7.1, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (castIron === "sch25") {
                metalWeight = calculateMetalWeightprofilePipe(7.2, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (castIron === "sch35") {
                metalWeight = calculateMetalWeightprofilePipe(7.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalWeight = calculateMetalWeightprofilePipe(2.7, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (aluminum === "АД") {
                metalWeight = calculateMetalWeightprofilePipe(2.7, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (aluminum === "АД1") {
                metalWeight = calculateMetalWeightprofilePipe(2.71, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (aluminum === "АК4") {
                metalWeight = calculateMetalWeightprofilePipe(2.77, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (aluminum === "АК6") {
                metalWeight = calculateMetalWeightprofilePipe(2.75, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (aluminum === "АМг") {
                metalWeight = calculateMetalWeightprofilePipe(2.69, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (aluminum === "АМц") {
                metalWeight = calculateMetalWeightprofilePipe(2.73, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (aluminum === "В95") {
                metalWeight = calculateMetalWeightprofilePipe(2.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (aluminum === "Д1") {
                metalWeight = calculateMetalWeightprofilePipe(2.8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (aluminum === "Д16") {
                metalWeight = calculateMetalWeightprofilePipe(2.78, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalWeight = calculateMetalWeightprofilePipe(7.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalWeight = calculateMetalWeightprofilePipe(7.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalWeight = calculateMetalWeightprofilePipe(7.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (bronze === "БрАМЦ9-2") {
                metalWeight = calculateMetalWeightprofilePipe(7.63, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (bronze === "БрБ2") {
                metalWeight = calculateMetalWeightprofilePipe(8.2, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (bronze === "БрКМЦ3-1") {
                metalWeight = calculateMetalWeightprofilePipe(8.47, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (bronze === "БрОФ7-0,2") {
                metalWeight = calculateMetalWeightprofilePipe(8.6, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (bronze === "БрОЦС5-5-5") {
                metalWeight = calculateMetalWeightprofilePipe(8.8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalWeight = calculateMetalWeightprofilePipe(8.44, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (brass === "Л68") {
                metalWeight = calculateMetalWeightprofilePipe(8.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (brass === "ЛЖМц59-1-1") {
                metalWeight = calculateMetalWeightprofilePipe(8.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (brass === "ЛЖМц58-2") {
                metalWeight = calculateMetalWeightprofilePipe(8.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (brass === "ЛС58-2") {
                metalWeight = calculateMetalWeightprofilePipe(8.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (brass === "ЛС59-1") {
                metalWeight = calculateMetalWeightprofilePipe(8.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (brass === "ЛС63-3") {
                metalWeight = calculateMetalWeightprofilePipe(8.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalWeight = calculateMetalWeightprofilePipe(8.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "20Х13") {
                metalWeight = calculateMetalWeightprofilePipe(7.67, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "30Х13") {
                metalWeight = calculateMetalWeightprofilePipe(7.67, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "40Х13") {
                metalWeight = calculateMetalWeightprofilePipe(7.42, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "08Х18Н10") {
                metalWeight = calculateMetalWeightprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "12Х18Н10") {
                metalWeight = calculateMetalWeightprofilePipe(7.92, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalWeight = calculateMetalWeightprofilePipe(7.9, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalWeight = calculateMetalWeightprofilePipe(7.96, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "20Х23Н18") {
                metalWeight = calculateMetalWeightprofilePipe(7.88, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "AISI304") {
                metalWeight = calculateMetalWeightprofilePipe(7.74, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "AISI316L") {
                metalWeight = calculateMetalWeightprofilePipe(8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "AISI316Ti") {
                metalWeight = calculateMetalWeightprofilePipe(7.86, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "AISI321") {
                metalWeight = calculateMetalWeightprofilePipe(7.79, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "AISI409") {
                metalWeight = calculateMetalWeightprofilePipe(7.73, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "AISI430") {
                metalWeight = calculateMetalWeightprofilePipe(7.7, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (stainlessSteel === "AISI904L") {
                metalWeight = calculateMetalWeightprofilePipe(8.06, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalWeight = calculateMetalWeightprofilePipe(8.94, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (copper === "М2") {
                metalWeight = calculateMetalWeightprofilePipe(8.94, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (copper === "М3") {
                metalWeight = calculateMetalWeightprofilePipe(8.94, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalWeight = calculateMetalWeightprofilePipe(4.505, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (titanium === "АТ-6") {
                metalWeight = calculateMetalWeightprofilePipe(4.505, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (titanium === "ВТ14") {
                metalWeight = calculateMetalWeightprofilePipe(4.52, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (titanium === "ВТ20") {
                metalWeight = calculateMetalWeightprofilePipe(4.45, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (titanium === "ВТ22") {
                metalWeight = calculateMetalWeightprofilePipe(4.62, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (titanium === "ВТ3-1") {
                metalWeight = calculateMetalWeightprofilePipe(4.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (titanium === "ВТ5") {
                metalWeight = calculateMetalWeightprofilePipe(4.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (titanium === "ВТ6") {
                metalWeight = calculateMetalWeightprofilePipe(4.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (titanium === "ОТ4-1") {
                metalWeight = calculateMetalWeightprofilePipe(4.55, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            } else if (titanium === "ПТ7М") {
                metalWeight = calculateMetalWeightprofilePipe(4.49, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length);
            }
        }

        if (metalWeight) {
            document.getElementById("result").innerText = metalWeight.toFixed(2);
        }

    }

    // price weight calculation
    var Price = document.getElementById("Price").value.replace(",", ".");
    var result = document.getElementById("result").innerText;

    if (Price.value !== "") {
        var metalWeight = calculatePriceMetall(Price, result);
        document.getElementById("resultWeigth").innerText = metalWeight.toFixed(2);
    }

    function calculatePriceMetall(Price, result) {
        var resPrice = Price * result;
        return resPrice;
    }

    //weight calculation functions
    function calculateMetalWeight(density, diameter, length) {
        var radius = diameter / 2;
        var volume = Math.PI * radius * radius * length;
        var weight = (density * volume) / 1000;
        return weight;
    }

    function calculateMetalWeightSquare(density, withIn, length) {
        var radius = withIn * withIn;
        var weight = (radius * length * density) / 1000;
        return weight;
    }

    function calculateMetalWeighthexahedron(density, hexahedronInp, length) {
        var volume = (0.87 * Math.pow(hexahedronInp, 2) * density) / 1000;
        var weight = volume * length;
        return weight;
    }

    function calculateMetalWeightCorner(density, cornerWidth, cornerHeigth, cornerThickness, length) {
        var volume = (cornerWidth + cornerHeigth - cornerThickness) * cornerThickness * length * density;
        var weight = volume / 100000;
        return weight;
    }

    function calculateMetalWeightRibbon(density, ribbonWidth, ribbonHeigth, length) {
        var weight = (ribbonWidth * ribbonHeigth * length * density) / 1000;
        return weight;
    }

    function calculateArea(ribbonWidth, length) {
        var area = (ribbonWidth * length) / 1000;
        return area;
    }

    function calculateAreaМм(ribbonWidth, length) {
        var area = (ribbonWidth * length) / 1000000;
        return area;
    }

    function calculateMetalWeightBeam(density, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, length) {
        var weight = density * (2 * beamWidth * beamShelfThick + (beamHeigth - 2 * beamShelfThick) * lintelLintThick) * length / 1000;
        return weight;
    }

    function calculateMetalWeightPipe(density, pipeDiam, pipeThickness, length) {
        var innerDiameter = pipeDiam - 2 * pipeThickness;
        var crossSectionalArea = Math.PI / 4 * (pipeDiam ** 2 - innerDiameter ** 2);
        var weightPerUnitLength = crossSectionalArea * density;
        var weight = weightPerUnitLength * length / 1000;
        return weight;
    }

    function calculateMetalWeightPlate(density, plateThickness, plateWidth, plateNumber, lengthPlate) {
        var volume = plateThickness * plateWidth * lengthPlate;
        var total = volume * density;
        var weight = total * plateNumber / 1000000;
        return weight;
    }

    function calculateMetalWeightChannel(density, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, length) {
        var sectionArea = 2.043 * channelWidth * channelThicknessShelf + (channelHeigth - 2 * channelThicknessShelf) * channelThickness;
        var weight = sectionArea * density * length / 1000;
        return weight;
    }

    function calculateMetalWeightprofilePipe(density, profilePipeWidth, profilePipeHeigth, profilePipeThickness, length) {
        var volume = profilePipeWidth - (-profilePipeHeigth);
        var area = 2.86 * profilePipeThickness;
        var select = volume - area;
        var weight = density / 7.850 * 0.0157 * profilePipeThickness * select * length;
        return weight;
    }

}

function calculate2() {
    var circle = document.getElementById("checked1");
    var squre = document.getElementById("checked2");
    var hexahedron = document.getElementById("checked3");
    var corner = document.getElementById("checked4");
    var ribbon = document.getElementById("checked5");
    var beam = document.getElementById("checked6");
    var pipe = document.getElementById("checked7");
    var plate = document.getElementById("checked8");
    var channel = document.getElementById("checked9");
    var profile_pipe = document.getElementById("checked10");

    var diameter = document.getElementById("diameter").value.replace(",", ".");
    var withIn = document.getElementById("withIn").value.replace(",", ".");
    var hexahedronInp = document.getElementById("hexahedronInp").value.replace(",", ".");
    var cornerWidth = document.getElementById("cornerWidth").value.replace(",", ".");
    var cornerHeigth = document.getElementById("cornerHeigth").value.replace(",", ".");
    var cornerThickness = document.getElementById("cornerThickness").value.replace(",", ".");
    var ribbonWidth = document.getElementById("ribbonWidth").value.replace(",", ".");
    var ribbonHeigth = document.getElementById("ribbonHeigth").value.replace(",", ".");
    var beamWidth = document.getElementById("beamWidth").value.replace(",", ".");
    var beamHeigth = document.getElementById("beamHeigth").value.replace(",", ".");
    var lintelLintThick = document.getElementById("lintelLintThick").value.replace(",", ".");
    var beamShelfThick = document.getElementById("beamShelfThick").value.replace(",", ".");
    var pipeDiam = document.getElementById("pipeDiam").value.replace(",", ".");
    var pipeThickness = document.getElementById("pipeThickness").value.replace(",", ".");
    var plateThickness = document.getElementById("plateThickness").value.replace(",", ".");
    var plateWidth = document.getElementById("plateWidth").value.replace(",", ".");
    var plateNumber = document.getElementById("plateNumber").value.replace(",", ".");
    var lengthPlate = document.getElementById("lengthPlate").value.replace(",", ".");
    var channelWidth = document.getElementById("channelWidth").value.replace(",", ".");
    var channelHeigth = document.getElementById("channelHeigth").value.replace(",", ".");
    var channelThickness = document.getElementById("channelThickness").value.replace(",", ".");
    var channelThicknessShelf = document.getElementById("channelThicknessShelf").value.replace(",", ".");
    var profilePipeWidth = document.getElementById("profilePipeWidth").value.replace(",", ".");
    var profilePipeHeigth = document.getElementById("profilePipeHeigth").value.replace(",", ".");
    var profilePipeThickness = document.getElementById("profilePipeThickness").value.replace(",", ".");
    var weightCount = document.getElementById("weightCount").value.replace(",", ".");

    var materialType = document.getElementById("materialType").value;
    var steelType = document.getElementById("steelType").value;
    var castIron = document.getElementById("castIron").value;
    var aluminum = document.getElementById("aluminum").value;
    var bronze = document.getElementById("bronze").value;
    var brass = document.getElementById("brass").value;
    var stainlessSteel = document.getElementById("stainlessSteel").value;
    var copper = document.getElementById("copper").value;
    var titanium = document.getElementById("titanium").value;

    // calculation of a cirlce steel
    if (circle.checked) {
        var metalLength;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLength(7.82, diameter, weightCount);
            } else if (steelType === "st3") {
                metalLength = calculateMetalLength(7.85, diameter, weightCount);
            } else if (steelType === "10") {
                metalLength = calculateMetalLength(7.856, diameter, weightCount);
            } else if (steelType === "20") {
                metalLength = calculateMetalLength(7.859, diameter, weightCount);
            } else if (steelType === "45") {
                metalLength = calculateMetalLength(7.826, diameter, weightCount);
            } else if (steelType === "65") {
                metalLength = calculateMetalLength(7.85, diameter, weightCount);
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLength(7.85, diameter, weightCount);
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLength(7.85, diameter, weightCount);
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLength(7.75, diameter, weightCount);
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLength(7.85, diameter, weightCount);
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLength(7.8, diameter, weightCount);
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLength(7.812, diameter, weightCount);
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLength(8.3, diameter, weightCount);
            } else if (steelType === "У7") {
                metalLength = calculateMetalLength(7.83, diameter, weightCount);
            } else if (steelType === "У8") {
                metalWeight = calculateMetalLength(7.839, diameter, weightCount);
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLength(7.839, diameter, weightCount);
            } else if (steelType === "У10") {
                metalLength = calculateMetalLength(7.81, diameter, weightCount);
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLength(7.81, diameter, weightCount);
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLength(7.83, diameter, weightCount);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLength(6.8, diameter, weightCount);
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLength(7, diameter, weightCount);
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLength(7.1, diameter, weightCount);
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLength(7.2, diameter, weightCount);
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLength(7.4, diameter, weightCount);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLength(2.7, diameter, weightCount);
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLength(2.7, diameter, weightCount);
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLength(2.71, diameter, weightCount);
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLength(2.77, diameter, weightCount);
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLength(2.75, diameter, weightCount);
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLength(2.69, diameter, weightCount);
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLength(2.73, diameter, weightCount);
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLength(2.85, diameter, weightCount);
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLength(2.8, diameter, weightCount);
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLength(2.78, diameter, weightCount);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLength(7.5, diameter, weightCount);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLength(7.5, diameter, weightCount);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLength(7.5, diameter, weightCount);
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLength(7.63, diameter, weightCount);
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLength(8.2, diameter, weightCount);
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLength(8.47, diameter, weightCount);
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLength(8.6, diameter, weightCount);
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLength(8.8, diameter, weightCount);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLength(8.44, diameter, weightCount);
            } else if (brass === "Л68") {
                metalLength = calculateMetalLength(8.5, diameter, weightCount);
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLength(8.5, diameter, weightCount);
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLength(8.4, diameter, weightCount);
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLength(8.4, diameter, weightCount);
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLength(8.4, diameter, weightCount);
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLength(8.5, diameter, weightCount);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLength(8.5, diameter, weightCount);
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLength(7.67, diameter, weightCount);
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLength(7.67, diameter, weightCount);
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLength(7.42, diameter, weightCount);
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLength(7.85, diameter, weightCount);
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLength(7.92, diameter, weightCount);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLength(7.9, diameter, weightCount);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLength(7.96, diameter, weightCount);
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLength(7.88, diameter, weightCount);
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLength(7.74, diameter, weightCount);
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLength(8, diameter, weightCount);
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLength(7.86, diameter, weightCount);
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLength(7.79, diameter, weightCount);
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLength(7.73, diameter, weightCount);
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLength(7.7, diameter, weightCount);
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLength(8.06, diameter, weightCount);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLength(8.94, diameter, weightCount);
            } else if (copper === "М2") {
                metalLength = calculateMetalLength(8.94, diameter, weightCount);
            } else if (copper === "М3") {
                metalLength = calculateMetalLength(8.94, diameter, weightCount);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLength(4.505, diameter, weightCount);
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLength(4.505, diameter, weightCount);
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLength(4.52, diameter, weightCount);
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLength(4.45, diameter, weightCount);
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLength(4.62, diameter, weightCount);
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLength(4.5, diameter, weightCount);
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLength(4.4, diameter, weightCount);
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLength(4.5, diameter, weightCount);
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLength(4.55, diameter, weightCount);
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLength(4.49, diameter, weightCount);
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }

    } else if (squre.checked) {
        var metalLength;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLengthSquare(7.82, withIn, weightCount);
            } else if (steelType === "st3") {
                metalLength = calculateMetalLengthSquare(7.85, withIn, weightCount);
            } else if (steelType === "10") {
                metalLength = calculateMetalLengthSquare(7.856, withIn, weightCount);
            } else if (steelType === "20") {
                metalLength = calculateMetalLengthSquare(7.859, withIn, weightCount);
            } else if (steelType === "45") {
                metalLength = calculateMetalLengthSquare(7.826, withIn, weightCount);
            } else if (steelType === "65") {
                metalLength = calculateMetalLengthSquare(7.85, withIn, weightCount);
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLengthSquare(7.85, withIn, weightCount);
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLengthSquare(7.85, withIn, weightCount);
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLengthSquare(7.75, withIn, weightCount);
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLengthSquare(7.85, withIn, weightCount);
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLengthSquare(7.8, withIn, weightCount);
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLengthSquare(7.812, withIn, weightCount);
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLengthSquare(8.3, withIn, weightCount);
            } else if (steelType === "У7") {
                metalLength = calculateMetalLengthSquare(7.83, withIn, weightCount);
            } else if (steelType === "У8") {
                metalLength = calculateMetalLengthSquare(7.839, withIn, weightCount);
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLengthSquare(7.839, withIn, weightCount);
            } else if (steelType === "У10") {
                metalLength = calculateMetalLengthSquare(7.81, withIn, weightCount);
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLengthSquare(7.81, withIn, weightCount);
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLengthSquare(7.83, withIn, weightCount);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLengthSquare(6.8, withIn, weightCount);
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLengthSquare(7, withIn, weightCount);
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLengthSquare(7.1, withIn, weightCount);
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLengthSquare(7.2, withIn, weightCount);
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLengthSquare(7.4, withIn, weightCount);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLengthSquare(2.7, withIn, weightCount);
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLengthSquare(2.7, withIn, weightCount);
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLengthSquare(2.71, withIn, weightCount);
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLengthSquare(2.77, withIn, weightCount);
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLengthSquare(2.75, withIn, weightCount);
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLengthSquare(2.69, withIn, weightCount);
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLengthSquare(2.73, withIn, weightCount);
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLengthSquare(2.85, withIn, weightCount);
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLengthSquare(2.8, withIn, weightCount);
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLengthSquare(2.78, withIn, weightCount);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLengthSquare(7.5, withIn, weightCount);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLengthSquare(7.5, withIn, weightCount);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLengthSquare(7.5, withIn, weightCount);
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLengthSquare(7.63, withIn, weightCount);
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLengthSquare(8.2, withIn, weightCount);
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLengthSquare(8.47, withIn, weightCount);
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLengthSquare(8.6, withIn, weightCount);
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLengthSquare(8.8, withIn, weightCount);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLengthSquare(8.44, withIn, weightCount);
            } else if (brass === "Л68") {
                metalLength = calculateMetalLengthSquare(8.5, withIn, weightCount);
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLengthSquare(8.5, withIn, weightCount);
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLengthSquare(8.4, withIn, weightCount);
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLengthSquare(8.4, withIn, weightCount);
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLengthSquare(8.4, withIn, weightCount);
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLengthSquare(8.5, withIn, weightCount);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLengthSquare(8.5, withIn, weightCount);
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLengthSquare(7.67, withIn, weightCount);
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLengthSquare(7.67, withIn, weightCount);
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLengthSquare(7.42, withIn, weightCount);
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLengthSquare(7.85, withIn, weightCount);
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLengthSquare(7.92, withIn, weightCount);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLengthSquare(7.9, withIn, weightCount);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLengthSquare(7.96, withIn, weightCount);
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLengthSquare(7.88, withIn, weightCount);
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLengthSquare(7.74, withIn, weightCount);
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLengthSquare(8, withIn, weightCount);
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLengthSquare(7.86, withIn, weightCount);
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLengthSquare(7.79, withIn, weightCount);
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLengthSquare(7.73, withIn, weightCount);
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLengthSquare(7.7, withIn, weightCount);
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLengthSquare(8.06, withIn, weightCount);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLengthSquare(8.94, withIn, weightCount);
            } else if (copper === "М2") {
                metalLength = calculateMetalLengthSquare(8.94, withIn, weightCount);
            } else if (copper === "М3") {
                metalLength = calculateMetalLengthSquare(8.94, withIn, weightCount);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLengthSquare(4.505, withIn, weightCount);
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLengthSquare(4.505, withIn, weightCount);
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLengthSquare(4.52, withIn, weightCount);
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLengthSquare(4.45, withIn, weightCount);
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLengthSquare(4.62, withIn, weightCount);
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLengthSquare(4.5, withIn, weightCount);
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLengthSquare(4.4, withIn, weightCount);
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLengthSquare(4.5, withIn, weightCount);
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLengthSquare(4.55, withIn, weightCount);
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLengthSquare(4.49, withIn, weightCount);
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }

    } else if (hexahedron.checked) {
        var metalLength;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLenghthexahedron(7.82, hexahedronInp, weightCount);
            } else if (steelType === "st3") {
                metalLength = calculateMetalLenghthexahedron(7.85, hexahedronInp, weightCount);
            } else if (steelType === "10") {
                metalLength = calculateMetalLenghthexahedron(7.856, hexahedronInp, weightCount);
            } else if (steelType === "20") {
                metalLength = calculateMetalLenghthexahedron(7.859, hexahedronInp, weightCount);
            } else if (steelType === "45") {
                metalLength = calculateMetalLenghthexahedron(7.826, hexahedronInp, weightCount);
            } else if (steelType === "65") {
                metalLength = calculateMetalLenghthexahedron(7.85, hexahedronInp, weightCount);
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLenghthexahedron(7.85, hexahedronInp, weightCount);
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLenghthexahedron(7.85, hexahedronInp, weightCount);
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLenghthexahedron(7.75, hexahedronInp, weightCount);
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLenghthexahedron(7.85, hexahedronInp, weightCount);
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLenghthexahedron(7.8, hexahedronInp, weightCount);
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLenghthexahedron(7.812, hexahedronInp, weightCount);
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLenghthexahedron(8.3, hexahedronInp, weightCount);
            } else if (steelType === "У7") {
                metalLength = calculateMetalLenghthexahedron(7.83, hexahedronInp, weightCount);
            } else if (steelType === "У8") {
                metalLength = calculateMetalLenghthexahedron(7.839, hexahedronInp, weightCount);
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLenghthexahedron(7.839, hexahedronInp, weightCount);
            } else if (steelType === "У10") {
                metalLength = calculateMetalLenghthexahedron(7.81, hexahedronInp, weightCount);
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLenghthexahedron(7.81, hexahedronInp, weightCount);
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLenghthexahedron(7.83, hexahedronInp, weightCount);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLenghthexahedron(6.8, hexahedronInp, weightCount);
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLenghthexahedron(7, hexahedronInp, weightCount);
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLenghthexahedron(7.1, hexahedronInp, weightCount);
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLenghthexahedron(7.2, hexahedronInp, weightCount);
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLenghthexahedron(7.4, hexahedronInp, weightCount);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLenghthexahedron(2.7, hexahedronInp, weightCount);
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLenghthexahedron(2.7, hexahedronInp, weightCount);
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLenghthexahedron(2.71, hexahedronInp, weightCount);
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLenghthexahedron(2.77, hexahedronInp, weightCount);
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLenghthexahedron(2.75, hexahedronInp, weightCount);
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLenghthexahedron(2.69, hexahedronInp, weightCount);
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLenghthexahedron(2.73, hexahedronInp, weightCount);
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLenghthexahedron(2.85, hexahedronInp, weightCount);
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLenghthexahedron(2.8, hexahedronInp, weightCount);
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLenghthexahedron(2.78, hexahedronInp, weightCount);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLenghthexahedron(7.5, hexahedronInp, weightCount);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLenghthexahedron(7.5, hexahedronInp, weightCount);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLenghthexahedron(7.5, hexahedronInp, weightCount);
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLenghthexahedron(7.63, hexahedronInp, weightCount);
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLenghthexahedron(8.2, hexahedronInp, weightCount);
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLenghthexahedron(8.47, hexahedronInp, weightCount);
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLenghthexahedron(8.6, hexahedronInp, weightCount);
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLenghthexahedron(8.8, hexahedronInp, weightCount);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLenghthexahedron(8.44, hexahedronInp, weightCount);
            } else if (brass === "Л68") {
                metalLength = calculateMetalLenghthexahedron(8.5, hexahedronInp, weightCount);
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLenghthexahedron(8.5, hexahedronInp, weightCount);
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLenghthexahedron(8.4, hexahedronInp, weightCount);
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLenghthexahedron(8.4, hexahedronInp, weightCount);
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLenghthexahedron(8.4, hexahedronInp, weightCount);
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLenghthexahedron(8.5, hexahedronInp, weightCount);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLenghthexahedron(8.5, hexahedronInp, weightCount);
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLenghthexahedron(7.67, hexahedronInp, weightCount);
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLenghthexahedron(7.67, hexahedronInp, weightCount);
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLenghthexahedron(7.42, hexahedronInp, weightCount);
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLenghthexahedron(7.85, hexahedronInp, weightCount);
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLenghthexahedron(7.92, hexahedronInp, weightCount);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLenghthexahedron(7.9, hexahedronInp, weightCount);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLenghthexahedron(7.96, hexahedronInp, weightCount);
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLenghthexahedron(7.88, hexahedronInp, weightCount);
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLenghthexahedron(7.74, hexahedronInp, weightCount);
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLenghthexahedron(8, hexahedronInp, weightCount);
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLenghthexahedron(7.86, hexahedronInp, weightCount);
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLenghthexahedron(7.79, hexahedronInp, weightCount);
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLenghthexahedron(7.73, hexahedronInp, weightCount);
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLenghthexahedron(7.7, hexahedronInp, weightCount);
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLenghthexahedron(8.06, hexahedronInp, weightCount);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLenghthexahedron(8.94, hexahedronInp, weightCount);
            } else if (copper === "М2") {
                metalLength = calculateMetalLenghthexahedron(8.94, hexahedronInp, weightCount);
            } else if (copper === "М3") {
                metalLength = calculateMetalLenghthexahedron(8.94, hexahedronInp, weightCount);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLenghthexahedron(4.505, hexahedronInp, weightCount);
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLenghthexahedron(4.505, hexahedronInp, weightCount);
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLenghthexahedron(4.52, hexahedronInp, weightCount);
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLenghthexahedron(4.45, hexahedronInp, weightCount);
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLenghthexahedron(4.62, hexahedronInp, weightCount);
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLenghthexahedron(4.5, hexahedronInp, weightCount);
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLenghthexahedron(4.4, hexahedronInp, weightCount);
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLenghthexahedron(4.5, hexahedronInp, weightCount);
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLenghthexahedron(4.55, hexahedronInp, weightCount);
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLenghthexahedron(4.49, hexahedronInp, weightCount);
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }

    } else if (corner.checked) {
        var metalLength;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLenghtCorner(7.82, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "st3") {
                metalLength = calculateMetalLenghtCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "10") {
                metalLength = calculateMetalLenghtCorner(7.856, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "20") {
                metalLength = calculateMetalLenghtCorner(7.859, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "45") {
                metalLength = calculateMetalLenghtCorner(7.826, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "65") {
                metalLength = calculateMetalLenghtCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLenghtCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLenghtCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLenghtCorner(7.75, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLenghtCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLenghtCorner(7.8, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLenghtCorner(7.812, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLenghtCorner(8.3, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "У7") {
                metalLength = calculateMetalLenghtCorner(7.83, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "У8") {
                metalLength = calculateMetalLenghtCorner(7.839, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLenghtCorner(7.839, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "У10") {
                metalLength = calculateMetalLenghtCorner(7.81, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLenghtCorner(7.81, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLenghtCorner(7.83, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLenghtCorner(6.8, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLenghtCorner(7, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLenghtCorner(7.1, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLenghtCorner(7.2, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLenghtCorner(7.4, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLenghtCorner(2.7, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLenghtCorner(2.7, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLenghtCorner(2.71, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLenghtCorner(2.77, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLenghtCorner(2.75, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLenghtCorner(2.69, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLenghtCorner(2.73, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLenghtCorner(2.85, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLenghtCorner(2.8, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLenghtCorner(2.78, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLenghtCorner(7.5, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLenghtCorner(7.5, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLenghtCorner(7.5, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLenghtCorner(7.63, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLenghtCorner(8.2, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLenghtCorner(8.47, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLenghtCorner(8.6, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLenghtCorner(8.8, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLenghtCorner(8.44, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (brass === "Л68") {
                metalLength = calculateMetalLenghtCorner(8.5, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLenghtCorner(8.5, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLenghtCorner(8.4, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLenghtCorner(8.4, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLenghtCorner(8.4, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLenghtCorner(8.5, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLenghtCorner(8.5, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLenghtCorner(7.67, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLenghtCorner(7.67, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLenghtCorner(7.42, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLenghtCorner(7.85, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLenghtCorner(7.92, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLenghtCorner(7.9, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLenghtCorner(7.96, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLenghtCorner(7.88, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLenghtCorner(7.74, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLenghtCorner(8, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLenghtCorner(7.86, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLenghtCorner(7.79, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLenghtCorner(7.73, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLenghtCorner(7.7, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLenghtCorner(8.06, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLenghtCorner(8.94, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (copper === "М2") {
                metalLength = calculateMetalLenghtCorner(8.94, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (copper === "М3") {
                metalLength = calculateMetalLenghtCorner(8.94, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLenghtCorner(4.505, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLenghtCorner(4.505, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLenghtCorner(4.52, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLenghtCorner(4.45, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLenghtCorner(4.62, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLenghtCorner(4.5, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLenghtCorner(4.4, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLenghtCorner(4.5, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLenghtCorner(4.55, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLenghtCorner(4.49, cornerWidth, cornerHeigth, cornerThickness, weightCount);
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }

    } else if (ribbon.checked) {
        var metalLength;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLenghtRibbon(7.82, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "st3") {
                metalLength = calculateMetalLenghtRibbon(7.85, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "10") {
                metalLength = calculateMetalLenghtRibbon(7.856, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "20") {
                metalLength = calculateMetalLenghtRibbon(7.859, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "45") {
                metalLength = calculateMetalLenghtRibbon(7.826, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "65") {
                metalLength = calculateMetalLenghtRibbon(7.85, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLenghtRibbon(7.85, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLenghtRibbon(7.85, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLenghtRibbon(7.75, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLenghtRibbon(7.85, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLenghtRibbon(7.8, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLenghtRibbon(7.812, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLenghtRibbon(8.3, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "У7") {
                metalLength = calculateMetalLenghtRibbon(7.83, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "У8") {
                metalLength = calculateMetalLenghtRibbon(7.839, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLenghtRibbon(7.839, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "У10") {
                metalLength = calculateMetalLenghtRibbon(7.81, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLenghtRibbon(7.81, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLenghtRibbon(7.83, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLenghtRibbon(6.8, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLenghtRibbon(7, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLenghtRibbon(7.1, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLenghtRibbon(7.2, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLenghtRibbon(7.4, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLenghtRibbon(2.7, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLenghtRibbon(2.7, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLenghtRibbon(2.71, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLenghtRibbon(2.77, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLenghtRibbon(2.75, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLenghtRibbon(2.69, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLenghtRibbon(2.73, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLenghtRibbon(2.85, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLenghtRibbon(2.8, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLenghtRibbon(2.78, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLenghtRibbon(7.5, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLenghtRibbon(7.5, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLenghtRibbon(7.5, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLenghtRibbon(7.63, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLenghtRibbon(8.2, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLenghtRibbon(8.47, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLenghtRibbon(8.6, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLenghtRibbon(8.8, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLenghtRibbon(8.44, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (brass === "Л68") {
                metalLength = calculateMetalLenghtRibbon(8.5, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLenghtRibbon(8.5, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLenghtRibbon(8.4, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLenghtRibbon(8.4, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLenghtRibbon(8.4, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLenghtRibbon(8.5, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLenghtRibbon(8.5, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLenghtRibbon(7.67, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLenghtRibbon(7.67, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLenghtRibbon(7.42, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLenghtRibbon(7.85, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLenghtRibbon(7.92, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLenghtRibbon(7.9, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLenghtRibbon(7.96, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLenghtRibbon(7.88, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLenghtRibbon(7.74, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLenghtRibbon(8, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLenghtRibbon(7.86, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLenghtRibbon(7.79, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLenghtRibbon(7.73, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLenghtRibbon(7.7, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLenghtRibbon(8.06, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLenghtRibbon(8.94, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (copper === "М2") {
                metalLength = calculateMetalLenghtRibbon(8.94, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (copper === "М3") {
                metalLength = calculateMetalLenghtRibbon(8.94, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLenghtRibbon(4.505, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLenghtRibbon(4.505, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLenghtRibbon(4.52, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLenghtRibbon(4.45, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLenghtRibbon(4.62, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLenghtRibbon(4.5, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLenghtRibbon(4.4, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLenghtRibbon(4.5, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLenghtRibbon(4.55, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLenghtRibbon(4.49, ribbonWidth, ribbonHeigth, weightCount);
                metalArea = calculateArea(ribbonWidth, metalLength.toFixed(3));
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }
        if (metalArea) {
            document.getElementById("area").innerText = metalArea.toFixed(2);
        }

    } else if (beam.checked) {
        var metalLength;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLengthBeam(7.82, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "st3") {
                metalLength = calculateMetalLengthBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "10") {
                metalLength = calculateMetalLengthBeam(7.856, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "20") {
                metalLength = calculateMetalLengthBeam(7.859, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "45") {
                metalLength = calculateMetalLengthBeam(7.826, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "65") {
                metalLength = calculateMetalLengthBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLengthBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLengthBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLengthBeam(7.75, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLengthBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLengthBeam(7.8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLengthBeam(7.812, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLengthBeam(8.3, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "У7") {
                metalLength = calculateMetalLengthBeam(7.83, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "У8") {
                metalLength = calculateMetalLengthBeam(7.839, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLengthBeam(7.839, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "У10") {
                metalLength = calculateMetalLengthBeam(7.81, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLengthBeam(7.81, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLengthBeam(7.83, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLengthBeam(6.8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLengthBeam(7, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLengthBeam(7.1, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLengthBeam(7.2, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLengthBeam(7.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLengthBeam(2.7, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLengthBeam(2.7, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLengthBeam(2.71, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLengthBeam(2.77, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLengthBeam(2.75, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLengthBeam(2.69, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLengthBeam(2.73, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLengthBeam(2.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLengthBeam(2.8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLengthBeam(2.78, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLengthBeam(7.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLengthBeam(7.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLengthBeam(7.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLengthBeam(7.63, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLengthBeam(8.2, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLengthBeam(8.47, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLengthBeam(8.6, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLengthBeam(8.8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLengthBeam(8.44, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (brass === "Л68") {
                metalLength = calculateMetalLengthBeam(8.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLengthBeam(8.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLengthBeam(8.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLengthBeam(8.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLengthBeam(8.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLengthBeam(8.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLengthBeam(8.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLengthBeam(7.67, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLengthBeam(7.67, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLengthBeam(7.42, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLengthBeam(7.85, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLengthBeam(7.92, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLengthBeam(7.9, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLengthBeam(7.96, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLengthBeam(7.88, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLengthBeam(7.74, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLengthBeam(8, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLengthBeam(7.86, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLengthBeam(7.79, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLengthBeam(7.73, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLengthBeam(7.7, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLengthBeam(8.06, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLengthBeam(8.94, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (copper === "М2") {
                metalLength = calculateMetalLengthBeam(8.94, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (copper === "М3") {
                metalLength = calculateMetalLengthBeam(8.94, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLengthBeam(4.505, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLengthBeam(4.505, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLengthBeam(4.52, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLengthBeam(4.45, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLengthBeam(4.62, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLengthBeam(4.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLengthBeam(4.4, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLengthBeam(4.5, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLengthBeam(4.55, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLengthBeam(4.49, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount);
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }

    } else if (pipe.checked) {
        var metalLength;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLengthPipe(7.82, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "st3") {
                metalLength = calculateMetalLengthPipe(7.85, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "10") {
                metalLength = calculateMetalLengthPipe(7.856, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "20") {
                metalLength = calculateMetalLengthPipe(7.859, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "45") {
                metalLength = calculateMetalLengthPipe(7.826, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "65") {
                metalLength = calculateMetalLengthPipe(7.85, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLengthPipe(7.85, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLengthPipe(7.85, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLengthPipe(7.75, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLengthPipe(7.85, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLengthPipe(7.8, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLengthPipe(7.812, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLengthPipe(8.3, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "У7") {
                metalLength = calculateMetalLengthPipe(7.83, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "У8") {
                metalLength = calculateMetalLengthPipe(7.839, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLengthPipe(7.839, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "У10") {
                metalLength = calculateMetalLengthPipe(7.81, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLengthPipe(7.81, pipeDiam, pipeThickness, weightCount);
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLengthPipe(7.83, pipeDiam, pipeThickness, weightCount);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLengthPipe(6.8, pipeDiam, pipeThickness, weightCount);
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLengthPipe(7, pipeDiam, pipeThickness, weightCount);
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLengthPipe(7.1, pipeDiam, pipeThickness, weightCount);
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLengthPipe(7.2, pipeDiam, pipeThickness, weightCount);
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLengthPipe(7.4, pipeDiam, pipeThickness, weightCount);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLengthPipe(2.7, pipeDiam, pipeThickness, weightCount);
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLengthPipe(2.7, pipeDiam, pipeThickness, weightCount);
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLengthPipe(2.71, pipeDiam, pipeThickness, weightCount);
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLengthPipe(2.77, pipeDiam, pipeThickness, weightCount);
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLengthPipe(2.75, pipeDiam, pipeThickness, weightCount);
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLengthPipe(2.69, pipeDiam, pipeThickness, weightCount);
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLengthPipe(2.73, pipeDiam, pipeThickness, weightCount);
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLengthPipe(2.85, pipeDiam, pipeThickness, weightCount);
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLengthPipe(2.8, pipeDiam, pipeThickness, weightCount);
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLengthPipe(2.78, pipeDiam, pipeThickness, weightCount);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLengthPipe(7.5, pipeDiam, pipeThickness, weightCount);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLengthPipe(7.5, pipeDiam, pipeThickness, weightCount);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLengthPipe(7.5, pipeDiam, pipeThickness, weightCount);
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLengthPipe(7.63, pipeDiam, pipeThickness, weightCount);
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLengthPipe(8.2, pipeDiam, pipeThickness, weightCount);
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLengthPipe(8.47, pipeDiam, pipeThickness, weightCount);
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLengthPipe(8.6, pipeDiam, pipeThickness, weightCount);
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLengthPipe(8.8, pipeDiam, pipeThickness, weightCount);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLengthPipe(8.44, pipeDiam, pipeThickness, weightCount);
            } else if (brass === "Л68") {
                metalLength = calculateMetalLengthPipe(8.5, pipeDiam, pipeThickness, weightCount);
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLengthPipe(8.5, pipeDiam, pipeThickness, weightCount);
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLengthPipe(8.4, pipeDiam, pipeThickness, weightCount);
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLengthPipe(8.4, pipeDiam, pipeThickness, weightCount);
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLengthPipe(8.4, pipeDiam, pipeThickness, weightCount);
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLengthPipe(8.5, pipeDiam, pipeThickness, weightCount);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLengthPipe(8.5, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLengthPipe(7.67, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLengthPipe(7.67, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLengthPipe(7.42, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLengthPipe(7.85, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLengthPipe(7.92, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLengthPipe(7.9, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLengthPipe(7.96, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLengthPipe(7.88, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLengthPipe(7.74, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLengthPipe(8, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLengthPipe(7.86, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLengthPipe(7.79, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLengthPipe(7.73, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLengthPipe(7.7, pipeDiam, pipeThickness, weightCount);
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLengthPipe(8.06, pipeDiam, pipeThickness, weightCount);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLengthPipe(8.94, pipeDiam, pipeThickness, weightCount);
            } else if (copper === "М2") {
                metalLength = calculateMetalLengthPipe(8.94, pipeDiam, pipeThickness, weightCount);
            } else if (copper === "М3") {
                metalLength = calculateMetalLengthPipe(8.94, pipeDiam, pipeThickness, weightCount);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLengthPipe(4.505, pipeDiam, pipeThickness, weightCount);
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLengthPipe(4.505, pipeDiam, pipeThickness, weightCount);
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLengthPipe(4.52, pipeDiam, pipeThickness, weightCount);
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLengthPipe(4.45, pipeDiam, pipeThickness, weightCount);
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLengthPipe(4.62, pipeDiam, pipeThickness, weightCount);
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLengthPipe(4.5, pipeDiam, pipeThickness, weightCount);
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLengthPipe(4.4, pipeDiam, pipeThickness, weightCount);
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLengthPipe(4.5, pipeDiam, pipeThickness, weightCount);
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLengthPipe(4.55, pipeDiam, pipeThickness, weightCount);
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLengthPipe(4.49, pipeDiam, pipeThickness, weightCount);
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }

    } else if (plate.checked) {
        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLengthPlate(7.82, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "st3") {
                metalLength = calculateMetalLengthPlate(7.85, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "10") {
                metalLength = calculateMetalLengthPlate(7.856, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "20") {
                metalLength = calculateMetalLengthPlate(7.859, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "45") {
                metalLength = calculateMetalLengthPlate(7.826, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "65") {
                metalLength = calculateMetalLengthPlate(7.85, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLengthPlate(7.85, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLengthPlate(7.85, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLengthPlate(7.75, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLengthPlate(7.85, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLengthPlate(7.8, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLengthPlate(7.812, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLengthPlate(8.3, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "У7") {
                metalLength = calculateMetalLengthPlate(7.83, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "У8") {
                metalLength = calculateMetalLengthPlate(7.839, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLengthPlate(7.839, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "У10") {
                metalLength = calculateMetalLengthPlate(7.81, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLengthPlate(7.81, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLengthPlate(7.83, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLengthPlate(6.8, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLengthPlate(7, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLengthPlate(7.1, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLengthPlate(7.2, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLengthPlate(7.4, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLengthPlate(2.7, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLengthPlate(2.7, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLengthPlate(2.71, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLengthPlate(2.77, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLengthPlate(2.75, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLengthPlate(2.69, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLengthPlate(2.73, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLengthPlate(2.85, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLengthPlate(2.8, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLengthPlate(2.78, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLengthPlate(7.5, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLengthPlate(7.5, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLengthPlate(7.5, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLengthPlate(7.63, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLengthPlate(8.2, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLengthPlate(8.47, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLengthPlate(8.6, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLengthPlate(8.8, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLengthPlate(8.44, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (brass === "Л68") {
                metalLength = calculateMetalLengthPlate(8.5, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLengthPlate(8.5, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLengthPlate(8.4, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLengthPlate(8.4, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLengthPlate(8.4, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLengthPlate(8.5, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLengthPlate(8.5, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLengthPlate(7.67, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLengthPlate(7.67, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLengthPlate(7.42, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLengthPlate(7.85, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLengthPlate(7.92, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLengthPlate(7.9, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLengthPlate(7.96, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLengthPlate(7.88, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLengthPlate(7.74, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLengthPlate(8, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLengthPlate(7.86, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLengthPlate(7.79, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLengthPlate(7.73, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLengthPlate(7.7, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLengthPlate(8.06, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLengthPlate(8.94, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (copper === "М2") {
                metalLength = calculateMetalLengthPlate(8.94, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (copper === "М3") {
                metalLength = calculateMetalLengthPlate(8.94, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLengthPlate(4.505, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLengthPlate(4.505, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLengthPlate(4.52, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLengthPlate(4.45, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLengthPlate(4.62, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLengthPlate(4.5, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLengthPlate(4.4, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLengthPlate(4.5, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLengthPlate(4.55, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLengthPlate(4.49, plateThickness, plateWidth, plateNumber, weightCount);
                metalArea = calculateArea2(plateWidth, metalLength.toFixed(3));
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }
        if (metalArea) {
            document.getElementById("area2").innerText = metalArea.toFixed(2);
        }

    } else if (channel.checked) {
        var metalLength;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLengthChannel(7.82, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "st3") {
                metalLength = calculateMetalLengthChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "10") {
                metalLength = calculateMetalLengthChannel(7.856, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "20") {
                metalLength = calculateMetalLengthChannel(7.859, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "45") {
                metalLength = calculateMetalLengthChannel(7.826, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "65") {
                metalLength = calculateMetalLengthChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLengthChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLengthChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLengthChannel(7.75, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLengthChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLengthChannel(7.8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLengthChannel(7.812, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLengthChannel(8.3, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "У7") {
                metalLength = calculateMetalLengthChannel(7.83, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "У8") {
                metalLength = calculateMetalLengthChannel(7.839, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLengthChannel(7.839, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "У10") {
                metalLength = calculateMetalLengthChannel(7.81, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLengthChannel(7.81, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLengthChannel(7.83, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLengthChannel(6.8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLengthChannel(7, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLengthChannel(7.1, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLengthChannel(7.2, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLengthChannel(7.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLengthChannel(2.7, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLengthChannel(2.7, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLengthChannel(2.71, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLengthChannel(2.77, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLengthChannel(2.75, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLengthChannel(2.69, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLengthChannel(2.73, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLengthChannel(2.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLengthChannel(2.8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLengthChannel(2.78, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLengthChannel(7.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLengthChannel(7.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLengthChannel(7.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLengthChannel(7.63, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLengthChannel(8.2, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLengthChannel(8.47, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLengthChannel(8.6, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLengthChannel(8.8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLengthChannel(8.44, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (brass === "Л68") {
                metalLength = calculateMetalLengthChannel(8.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLengthChannel(8.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLengthChannel(8.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLengthChannel(8.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLengthChannel(8.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLengthChannel(8.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLengthChannel(8.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLengthChannel(7.67, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLengthChannel(7.67, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLengthChannel(7.42, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLengthChannel(7.85, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLengthChannel(7.92, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLengthChannel(7.9, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLengthChannel(7.96, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLengthChannel(7.88, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLengthChannel(7.74, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLengthChannel(8, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLengthChannel(7.86, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLengthChannel(7.79, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLengthChannel(7.73, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLengthChannel(7.7, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLengthChannel(8.06, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLengthChannel(8.94, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (copper === "М2") {
                metalLength = calculateMetalLengthChannel(8.94, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (copper === "М3") {
                metalLength = calculateMetalLengthChannel(8.94, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLengthChannel(4.505, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLengthChannel(4.505, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLengthChannel(4.52, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLengthChannel(4.45, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLengthChannel(4.62, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLengthChannel(4.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLengthChannel(4.4, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLengthChannel(4.5, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLengthChannel(4.55, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLengthChannel(4.49, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount);
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }

    } else if (profile_pipe.checked) {
        var metalLength;

        if (materialType === "1") {
            if (steelType === "40x") {
                metalLength = calculateMetalLengthprofilePipe(7.82, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "st3") {
                metalLength = calculateMetalLengthprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "10") {
                metalLength = calculateMetalLengthprofilePipe(7.856, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "20") {
                metalLength = calculateMetalLengthprofilePipe(7.859, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "45") {
                metalLength = calculateMetalLengthprofilePipe(7.826, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "65") {
                metalLength = calculateMetalLengthprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "65Г") {
                metalLength = calculateMetalLengthprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "09Г2С") {
                metalLength = calculateMetalLengthprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "15Х5М") {
                metalLength = calculateMetalLengthprofilePipe(7.75, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "10ХСНД") {
                metalLength = calculateMetalLengthprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "12Х1МФ") {
                metalLength = calculateMetalLengthprofilePipe(7.8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "ШХ15") {
                metalLength = calculateMetalLengthprofilePipe(7.812, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "Р6М5") {
                metalLength = calculateMetalLengthprofilePipe(8.3, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "У7") {
                metalLength = calculateMetalLengthprofilePipe(7.83, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "У8") {
                metalLength = calculateMetalLengthprofilePipe(7.839, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "У8А") {
                metalLength = calculateMetalLengthprofilePipe(7.839, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "У10") {
                metalLength = calculateMetalLengthprofilePipe(7.81, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "У10А") {
                metalLength = calculateMetalLengthprofilePipe(7.81, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (steelType === "У12А") {
                metalLength = calculateMetalLengthprofilePipe(7.83, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            }
        } else if (materialType === "2") {
            if (castIron === "sch10") {
                metalLength = calculateMetalLengthprofilePipe(6.8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (castIron === "sch15") {
                metalLength = calculateMetalLengthprofilePipe(7, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (castIron === "sch20") {
                metalLength = calculateMetalLengthprofilePipe(7.1, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (castIron === "sch25") {
                metalLength = calculateMetalLengthprofilePipe(7.2, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (castIron === "sch35") {
                metalLength = calculateMetalLengthprofilePipe(7.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            }
        } else if (materialType === "3") {
            if (aluminum === "А5") {
                metalLength = calculateMetalLengthprofilePipe(2.7, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (aluminum === "АД") {
                metalLength = calculateMetalLengthprofilePipe(2.7, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (aluminum === "АД1") {
                metalLength = calculateMetalLengthprofilePipe(2.71, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (aluminum === "АК4") {
                metalLength = calculateMetalLengthprofilePipe(2.77, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (aluminum === "АК6") {
                metalLength = calculateMetalLengthprofilePipe(2.75, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (aluminum === "АМг") {
                metalLength = calculateMetalLengthprofilePipe(2.69, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (aluminum === "АМц") {
                metalLength = calculateMetalLengthprofilePipe(2.73, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (aluminum === "В95") {
                metalLength = calculateMetalLengthprofilePipe(2.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (aluminum === "Д1") {
                metalLength = calculateMetalLengthprofilePipe(2.8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (aluminum === "Д16") {
                metalLength = calculateMetalLengthprofilePipe(2.78, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            }
        } else if (materialType === "4") {
            if (bronze === "БрАЖ9-4") {
                metalLength = calculateMetalLengthprofilePipe(7.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (bronze === "БрАЖМЦ10-3-1,5") {
                metalLength = calculateMetalLengthprofilePipe(7.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (bronze === "БрАЖМЦ10-4-4") {
                metalLength = calculateMetalLengthprofilePipe(7.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (bronze === "БрАМЦ9-2") {
                metalLength = calculateMetalLengthprofilePipe(7.63, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (bronze === "БрБ2") {
                metalLength = calculateMetalLengthprofilePipe(8.2, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (bronze === "БрКМЦ3-1") {
                metalLength = calculateMetalLengthprofilePipe(8.47, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (bronze === "БрОФ7-0,2") {
                metalLength = calculateMetalLengthprofilePipe(8.6, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (bronze === "БрОЦС5-5-5") {
                metalLength = calculateMetalLengthprofilePipe(8.8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            }
        } else if (materialType === "5") {
            if (brass === "Л63") {
                metalLength = calculateMetalLengthprofilePipe(8.44, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (brass === "Л68") {
                metalLength = calculateMetalLengthprofilePipe(8.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (brass === "ЛЖМц59-1-1") {
                metalLength = calculateMetalLengthprofilePipe(8.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (brass === "ЛЖМц58-2") {
                metalLength = calculateMetalLengthprofilePipe(8.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (brass === "ЛС58-2") {
                metalLength = calculateMetalLengthprofilePipe(8.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (brass === "ЛС59-1") {
                metalLength = calculateMetalLengthprofilePipe(8.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (brass === "ЛС63-3") {
                metalLength = calculateMetalLengthprofilePipe(8.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            }
        } else if (materialType === "6") {
            if (stainlessSteel === "08Х17Т") {
                metalLength = calculateMetalLengthprofilePipe(8.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "20Х13") {
                metalLength = calculateMetalLengthprofilePipe(7.67, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "30Х13") {
                metalLength = calculateMetalLengthprofilePipe(7.67, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "40Х13") {
                metalLength = calculateMetalLengthprofilePipe(7.42, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "08Х18Н10") {
                metalLength = calculateMetalLengthprofilePipe(7.85, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "12Х18Н10") {
                metalLength = calculateMetalLengthprofilePipe(7.92, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "10Х17Н13М2Т") {
                metalLength = calculateMetalLengthprofilePipe(7.9, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "06ХН28МДТ") {
                metalLength = calculateMetalLengthprofilePipe(7.96, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "20Х23Н18") {
                metalLength = calculateMetalLengthprofilePipe(7.88, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "AISI304") {
                metalLength = calculateMetalLengthprofilePipe(7.74, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "AISI316L") {
                metalLength = calculateMetalLengthprofilePipe(8, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "AISI316Ti") {
                metalLength = calculateMetalLengthprofilePipe(7.86, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "AISI321") {
                metalLength = calculateMetalLengthprofilePipe(7.79, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "AISI409") {
                metalLength = calculateMetalLengthprofilePipe(7.73, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "AISI430") {
                metalLength = calculateMetalLengthprofilePipe(7.7, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (stainlessSteel === "AISI904L") {
                metalLength = calculateMetalLengthprofilePipe(8.06, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            }
        } else if (materialType === "7") {
            if (copper === "М1") {
                metalLength = calculateMetalLengthprofilePipe(8.94, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (copper === "М2") {
                metalLength = calculateMetalLengthprofilePipe(8.94, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (copper === "М3") {
                metalLength = calculateMetalLengthprofilePipe(8.94, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            }
        } else if (materialType === "8") {
            if (titanium === "ВТ1-00") {
                metalLength = calculateMetalLengthprofilePipe(4.505, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (titanium === "АТ-6") {
                metalLength = calculateMetalLengthprofilePipe(4.505, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (titanium === "ВТ14") {
                metalLength = calculateMetalLengthprofilePipe(4.52, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (titanium === "ВТ20") {
                metalLength = calculateMetalLengthprofilePipe(4.45, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (titanium === "ВТ22") {
                metalLength = calculateMetalLengthprofilePipe(4.62, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (titanium === "ВТ3-1") {
                metalLength = calculateMetalLengthprofilePipe(4.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (titanium === "ВТ5") {
                metalLength = calculateMetalLengthprofilePipe(4.4, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (titanium === "ВТ6") {
                metalLength = calculateMetalLengthprofilePipe(4.5, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (titanium === "ОТ4-1") {
                metalLength = calculateMetalLengthprofilePipe(4.55, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            } else if (titanium === "ПТ7М") {
                metalLength = calculateMetalLengthprofilePipe(4.49, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount);
            }
        }

        if (metalLength) {
            document.getElementById("resultLength").innerText = metalLength.toFixed(3);
        }

    }

    // price calculation
    var Price = document.getElementById("Price").value.replace(",", ".");
    var resultLength = document.getElementById("weightCount").value;

    if (Price.value !== "") {
        var metalLength = calculatePriceMetall(Price, resultLength);
        document.getElementById("resultWeigth").innerText = metalLength.toFixed(2);
    }

    function calculatePriceMetall(Price, resultLength) {
        var resPrice = Price * resultLength;
        return resPrice;
    }

    //length calculation functions
    function calculateMetalLength(density, diameter, weightCount) {
        var radius = diameter / 2;
        var volume = (weightCount * 1000) / density;
        var length = volume / (Math.PI * radius * radius);
        return length;
    }

    function calculateMetalLengthSquare(density, withIn, weightCount) {
        var radius = withIn * withIn;
        var length = (weightCount * 1000) / (radius * density);
        return length;
    }

    function calculateMetalLenghthexahedron(density, hexahedronInp, weightCount) {
        var volume = (0.87 * Math.pow(hexahedronInp, 2) * density) / 1000;
        var length = weightCount / volume;
        return length;
    }

    function calculateMetalLenghtCorner(density, cornerWidth, cornerHeigth, cornerThickness, weightCount) {
        var length = (weightCount * 100000) / (density * (cornerWidth + cornerHeigth - cornerThickness) * cornerThickness);
        return length;
    }

    function calculateMetalLenghtRibbon(density, ribbonWidth, ribbonHeigth, weightCount) {
        var length = (weightCount * 1000) / (ribbonWidth * ribbonHeigth * density);
        return length;
    }

    function calculateArea(ribbonWidth, length) {
        var area = (ribbonWidth * length) / 1000;
        return area;
    }

    function calculateMetalLengthBeam(density, beamWidth, beamHeigth, lintelLintThick, beamShelfThick, weightCount) {
        var volume = weightCount * 1000 / density;
        var crossSectionalArea = (2 * beamWidth * beamShelfThick + (beamHeigth - 2 * beamShelfThick) * lintelLintThick);
        var length = volume / crossSectionalArea;
        return length;
    }

    function calculateMetalLengthPipe(density, pipeDiam, pipeThickness, weightCount) {
        var innerDiameter = pipeDiam - 2 * pipeThickness;
        var crossSectionalArea = Math.PI / 4 * (pipeDiam ** 2 - innerDiameter ** 2);
        var weightPerUnitLength = crossSectionalArea * density;
        var length = weightCount / (weightPerUnitLength / 1000);
        return length;
    }

    function calculateMetalLengthPlate(density, plateThickness, plateWidth, plateNumber, weightCount) {
        var volume = (weightCount * 1000) / (density * plateNumber);
        var length = volume / (plateThickness * plateWidth);
        return length;
    }

    function calculateArea2(ribbonWidth, length) {
        var area = (ribbonWidth * length) / 1000;
        return area;
    }

    function calculateMetalLengthChannel(density, channelWidth, channelHeigth, channelThicknessShelf, channelThickness, weightCount) {
        var sectionArea = 2.043 * channelWidth * channelThicknessShelf + (channelHeigth - 2 * channelThicknessShelf) * channelThickness;
        var length = (weightCount * 1000) / (sectionArea * density);
        return length;
    }

    function calculateMetalLengthprofilePipe(density, profilePipeWidth, profilePipeHeigth, profilePipeThickness, weightCount) {
        var volume = profilePipeWidth - (-profilePipeHeigth);
        var area = 2.86 * profilePipeThickness;
        var select = volume - area;
        var length = weightCount / (density / 7.850 * 0.0157 * profilePipeThickness * select);
        return length;
    }

}

//choise type rolled metall
var checkboxes = document.querySelectorAll('input[type="radio"]');
var checkedCheckbox;

for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        checkedCheckbox = checkboxes[i];
        break;
    }
}

// function choise material type and type steel metall
var materialType = document.getElementById("materialType");
var steelType = document.getElementById("steelType");
var castIron = document.getElementById("castIron");
var aluminum = document.getElementById("aluminum");
var bronze = document.getElementById("bronze");
var brass = document.getElementById("brass");
var stainlessSteel = document.getElementById("stainlessSteel");
var copper = document.getElementById("copper");
var titanium = document.getElementById("titanium");

materialType.addEventListener("change", function () {
    const selectedType = materialType.value;

    if (selectedType === "1") {
        steelType.style.display = "block";
        castIron.style.display = "none";
        aluminum.style.display = "none";
        bronze.style.display = "none";
        brass.style.display = "none";
        stainlessSteel.style.display = "none";
        copper.style.display = "none";
        titanium.style.display = "none";
    } else if (selectedType === "2") {
        steelType.style.display = "none";
        castIron.style.display = "block";
        aluminum.style.display = "none";
        bronze.style.display = "none";
        brass.style.display = "none";
        stainlessSteel.style.display = "none";
        copper.style.display = "none";
        titanium.style.display = "none";
    } else if (selectedType === "3") {
        steelType.style.display = "none";
        castIron.style.display = "none";
        aluminum.style.display = "block";
        bronze.style.display = "none";
        brass.style.display = "none";
        stainlessSteel.style.display = "none";
        copper.style.display = "none";
        titanium.style.display = "none";
    } else if (selectedType === "4") {
        steelType.style.display = "none";
        castIron.style.display = "none";
        aluminum.style.display = "none";
        bronze.style.display = "block";
        brass.style.display = "none";
        stainlessSteel.style.display = "none";
        copper.style.display = "none";
        titanium.style.display = "none";
    } else if (selectedType === "5") {
        steelType.style.display = "none";
        castIron.style.display = "none";
        aluminum.style.display = "none";
        bronze.style.display = "none";
        brass.style.display = "block";
        stainlessSteel.style.display = "none";
        copper.style.display = "none";
        titanium.style.display = "none";
    } else if (selectedType === "6") {
        steelType.style.display = "none";
        castIron.style.display = "none";
        aluminum.style.display = "none";
        bronze.style.display = "none";
        brass.style.display = "none";
        stainlessSteel.style.display = "block";
        copper.style.display = "none";
        titanium.style.display = "none";
    } else if (selectedType === "7") {
        steelType.style.display = "none";
        castIron.style.display = "none";
        aluminum.style.display = "none";
        bronze.style.display = "none";
        brass.style.display = "none";
        stainlessSteel.style.display = "none";
        copper.style.display = "block";
        titanium.style.display = "none";
    } else if (selectedType === "8") {
        steelType.style.display = "none";
        castIron.style.display = "none";
        aluminum.style.display = "none";
        bronze.style.display = "none";
        brass.style.display = "none";
        stainlessSteel.style.display = "none";
        copper.style.display = "none";
        titanium.style.display = "block";
    }
});

// switch tabs
function handleTabClicked(event) {
    const tabCategory = event.target.id;
    const tabs_box = document.querySelector(`.tabs_box.${tabCategory}`);
    const tabs_boxes = document.querySelectorAll(`.tabs_box`);

    for (let current of tabs_boxes) {
        if (current === tabs_box) {
            current.classList.add("active_tab");
        } else {
            current.classList.remove("active_tab");
        }
    }

    const header_box = document.querySelector(`.header_box.${tabCategory}`);
    const header_boxes = document.querySelectorAll(`.header_box`);

    for (let current of header_boxes) {
        if (current === header_box) {
            current.classList.add("active_link");
        } else {
            current.classList.remove("active_link");
        }
    }
}


// metal stamper
var steelLinks = document.querySelector('.steel_links');
if (steelLinks !== null) {
    steelLinks.onclick = function (event) {
        closeAllSubmenu(event.target.nextElementSibling);
        event.target.nextElementSibling.classList.toggle('sub-menu-active');
    }
}

function closeAllSubmenu(current = null) {
    let parents = [];
    if (current) {
        let currentParent = current.parentNode;
        while (currentParent) {
            if (currentParent.classList.contains('steel_links')) break;
            if (currentParent.nodeName === 'UL') parents.push(currentParent);
            currentParent = currentParent.parentNode;
        }
    }
    const subMenu = document.querySelectorAll('.steel_links ul');
    Array.from(subMenu).forEach(item => {
        if (item != current && !parents.includes(item)) item.classList.remove('sub-menu-active');
    });
}

//metal gosts
var markLink = document.querySelector('mark_link');
if (markLink !== null) {
    markLink.onclick = function (event) {
        closeAllSubmenuGosts(event.target.nextElementSibling);
        event.target.nextElementSibling.classList.toggle('sub-menu-active');
    }
}

function closeAllSubmenuGosts(current = null) {
    let parents = [];
    if (current) {
        let currentParent = current.parentNode;
        while (currentParent) {
            if (currentParent.classList.contains('mark_link')) break;
            if (currentParent.nodeName === 'UL') parents.push(currentParent);
            currentParent = currentParent.parentNode;
        }
    }
    const subMenu = document.querySelectorAll('.mark_link ul');
    Array.from(subMenu).forEach(item => {
        if (item != current && !parents.includes(item)) item.classList.remove('sub-menu-active');
    });
}

$('#gdi').hide();