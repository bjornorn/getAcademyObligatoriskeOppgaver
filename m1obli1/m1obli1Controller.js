function isDateValid(dato) {
  return isDigitsTen(dato) &&
    someDotsMissing(dato) &&
    YearDigits(dato) &&
    MonthDigits(dato) &&
    MonthValue(dato) &&
    DayValue(dato) &&
    ShortMonths(dato) &&
    FebMonth(dato) &&
    notLeapYear(dato) &&
    LeapYear(dato);
}



function isDigitsTen(dato) {
  // dato = dato.length;
  if (dato == undefined) return false;
  // console.log('lende på string ' + datoDigits);

  if (dato.length != 10) {
    return false;
  } else {
    return true;
  }
}

function someDotsMissing(dato) {
  // console.log(dato[2] + dato[5]);
  // (String.includes('.', 3 && '.', 6))

  if (dato[2] + dato[5] != '..') {
    return false;
  } else {
    return true;
  }
}

function YearDigits(dato) {
  year = dato[6] + dato[7] + dato[8] + dato[9];
  // console.log(year.length);

  if (year.length != 4) {
    return false;
  } else {
    return true;
  }
}

function MonthDigits(dato) {
  month0 = dato[3];
  month1 = dato[4];
  monthSum = dato[3] + dato[4];

  // console.log(month);
  // console.log('parseFloat0 ' + monthSum);
  // console.log('parseFloat1 ' + month1);

  if (
    month0 >= 0 &&
    month0 <= 1 &&
    month1 >= 0 &&
    month1 <= 9 &&
    monthSum >= 1 &&
    monthSum <= 12
  ) {
    return true;
  } else {
    return false;
  }
}

function MonthValue(dato) {
  month0 = dato[3];
  month1 = dato[4];

  if (month0 != 0 && month0 != 1 && month1 != 0 && month1 != 1 && month1 != 2) {
    return false;
  } else {
    return true;
  }
}

function DayValue(dato) {
  day0 = dato[0];
  day1 = dato[1];

  month = dato[3] + dato[4];
  let daySum = day0 + day1;

  // console.log('day0 ' + day0);
  // console.log('day1 ' + day1);
  // console.log('daySum ' + daySum);

  if (day0 >= 0 && day0 <= 3 && day1 >= 0 && day1 <= 9 && daySum <= 31) {
    return true;
  } else {
    return false;
  }
}

function ShortMonths(dato) {
  const shortMonthsGang = [2, 4, 6, 9, 11];
  day0 = dato[0];
  day1 = dato[1];
  month0 = dato[3];
  month1 = dato[4];
  let sumMonths = month0 + month1;
  let sumDays = day0 + day1;

  // console.log('shortMonths ' + shortMonthsGang);
  // console.log('days ' + sumDays);
  // console.log('Months ' + sumMonths);

  if (
    (sumMonths == 2 ||
      sumMonths == 4 ||
      sumMonths == 6 ||
      sumMonths == 9 ||
      sumMonths == 11) &&
    sumDays > 30
  ) {
    return false;
  } else {
    return true;
  }
}

function FebMonth(dato) {
  day0 = dato[0];
  day1 = dato[1];
  month0 = dato[3];
  month1 = dato[4];
  let sumMonths = month0 + month1;
  let sumDays = day0 + day1;

  // console.log('shortMonths ' + sumDays);
  // console.log('sumMonths ' + sumMonths);

  if (sumMonths == 2 && sumDays > 29) {
    return false;
  } else {
    return true;
  }
}

function notLeapYear(dato) {
  Qyear = dato[6] + dato[7] + dato[8] + dato[9];
  Qmonth = dato[3] + dato[4];
  Qday = dato[0] + dato[1];

  // console.log(Qyear);
  // console.log(Qmonth);

  if (
    (Qday >= 29 && Qmonth == 2 && !(Qyear % 4 == 0 && Qyear % 100 != 0)) ||
    Qyear % 400 == 0
  ) {
    return false;
  }
  return true;
}

function LeapYear(dato) {
  Qyear = dato[6] + dato[7] + dato[8] + dato[9];
  Qmonth = dato[3] + dato[4];
  Qday = dato[0] + dato[1];
  QleapDay = Qday + Qmonth;

  // console.log(QleapDay);
  // console.log(Qmonth);

  if (QleapDay == 2902) {
    if (Qyear % 4 == 0 && Qyear % 100 != 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }

}
