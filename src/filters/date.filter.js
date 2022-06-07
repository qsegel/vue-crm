export default function dateFilter(value, format = "date") {
  const options = {};

  if (format.includes("date")) {
    options.year = "numeric";
    options.month = "long";
    options.day = "2-digit";
  }

  if (format.includes("time")) {
    options.hour = "numeric";
    options.minute = "2-digit";
    options.second = "numeric";
  }

  return new Intl.DateTimeFormat("ru-Ru", options).format(value);
}
