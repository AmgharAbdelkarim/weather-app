

export const getHours = (date) => {
  const hours = new Date(date * 1000).getHours();
  if (hours > 9) return hours;
  return '0' + hours;
};

export const getDays = (date) => new Date(date * 1000).getDate();

export const getMonths = (date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[new Date(date * 1000).getMonth()];
};

export const getMinutes = (date) => {
  const minutes = new Date(date * 1000).getMinutes();
  if (minutes > 9) return minutes;
  return '0' + minutes;
};

export const getDay = (date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[new Date(date * 1000).getDay()];
};

export const linkedInUrl = 'https://www.linkedin.com/in/amgharabdelkarim/';
export const githubUrl = 'https://github.com/AmgharAbdelkarim/weather-app';