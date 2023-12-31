// Create Validation
const value = ({ math, indonesian, english, science }) => {
  const checkIsMathValid = !(math >= 0);
  const checkIsIndonesianValid = !(indonesian >= 0);
  const checkIsEnglishValid = !(english >= 0);
  const checkIsScienceValid = !(science >= 0);

  if (checkIsMathValid || checkIsIndonesianValid || checkIsEnglishValid || checkIsScienceValid) {
    return console.log("Semua nilai harus di isi!");
  }

  // Calculate the average
  const average = (math + indonesian + english + science) / 4;

  // Determine the grade based on the average
  let grade;
  if (average >= 90 && average <= 100) {
    grade = "A";
  } else if (average >= 80 && average < 90) {
    grade = "B";
  } else if (average >= 70 && average < 80) {
    grade = "C";
  } else if (average >= 60 && average < 70) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Displays results
  console.log(`Average = ${average}
Grade = ${grade}`);
};

// Input value
value({
  math: 80,
  indonesian: 90,
  english: 89,
  science: 69,
});
