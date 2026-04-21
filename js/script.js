function addMoissonHoulle() {

    const title = "Fête de la Moisson - Houlle";
    const details = "Fête de la Moisson de Houlle";
    const location = "Houlle, France";

    const icsContent =
`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
DTSTART:20260823T074500Z
DTEND:20260823T160000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "fete_moisson_houlle.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}