function formatDateToDayMonth(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options); // → "12 July"
}

function createGoogleCalendarLink(event) {
    const { title, date, time, location, description } = event;

    // Combine date and time and parse them
    const startTimeStr = `${date} ${time}`;
    const startTime = new Date(startTimeStr);

    // Assume a default duration of 1 hour if not specified
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

    // Format dates to YYYYMMDDTHHMMSSZ format for Google Calendar
    const formatToGC_DateTime = (dateObj) => {
        // The regex replaces hyphens, colons, and the milliseconds part (e.g., .000Z)
        return dateObj.toISOString().replace(/-|:|\.\d{3}/g, '');
    };

    const startTimeFormatted = formatToGC_DateTime(startTime);
    const endTimeFormatted = formatToGC_DateTime(endTime);

    // Construct the Google Calendar URL
    const calendarUrl = new URL("https://www.google.com/calendar/render");
    calendarUrl.searchParams.append("action", "TEMPLATE");
    calendarUrl.searchParams.append("text", title);
    calendarUrl.searchParams.append("dates", `${startTimeFormatted}/${endTimeFormatted}`);
    calendarUrl.searchParams.append("details", description);
    calendarUrl.searchParams.append("location", location);

    return calendarUrl.toString();
}

export { formatDateToDayMonth, createGoogleCalendarLink }