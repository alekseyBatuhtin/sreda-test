export const genMonthAgoDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = `${date.getUTCMonth() + 1 - 1}`.padStart(2, 0);
  const day = `${date.getUTCDate()}`.padStart(2, 0);

  return `${year}-${month}-${day}`;
};

export const genSearchQuery = (query, licenseType) => `${query} ${licenseType ? `license:${licenseType}` : ''} created:>${genMonthAgoDate()} language:JavaScript sort:stars `;
