function addToCalendar() {
    const event = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        "SUMMARY:Fete De La Moisson",
        "DTSTART:20260823T094500Z",
        "DTEND:20260425T180000Z",
        "DESCRIPTION:Fête de la moisson à l'ancienne",
        "LOCATION:Houlle",
        "END:VEVENT",
        "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([event], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "event.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}