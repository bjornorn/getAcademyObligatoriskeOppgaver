function velgBar(barNo) {
  if (barNo == chosenBar) {
    chosenBar = undefined;
    inputValue = 0;
    outputMessage = undefined;
  } else {
    chosenBar = barNo;
    inputValue = numbers[chosenBar - 1];
    outputMessage = undefined;
    // endre.disabled = false;
  }
  // console.log(barNo);

  show();
}

function endreStolpe() {
  if (inputValue <= 10 && inputValue >= 1) {
    numbers[chosenBar - 1] = inputValue;
    show();
    return true;
  } else {
    outputMessage = 'Ugyldig verdi. Velg en verdi fra 1 til 10';
    show();
    return false;
  }
}

function fjernStolpe() {
  numbers.splice(chosenBar - 1, 1);
  chosenBar = undefined;
  show();
}

function leggTilStolpe() {
  inputValue <= 10 && inputValue >= 1
    ? numbers.push(parseInt(inputValue)) && (outputMessage = undefined)
    : (outputMessage = 'Ugyldig verdi. Velg en verdi fra 1 til 10');

  show();
}
