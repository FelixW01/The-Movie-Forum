module.exports = {
  formatDate: (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Pad the day with leading zero if it's a single-digit number
    const formattedDay = (day < 10 ? "0" : "") + day;

    return `${month} ${formattedDay} ${year}`;
  },
};
