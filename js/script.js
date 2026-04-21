function addMoissonHoulle() {

    const title = "Fête de la Moisson - Houlle";
    const details = "Fête de la Moisson de Houlle";
    const location = "Houlle, France";

    // 📅 Dates (heure France convertie en UTC)
    const start = "20260823T074500Z"; // 09h45 FR
    const end   = "20260823T160000Z"; // 18h00 FR

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);

    // =========================
    // 📱 iOS → fichier .ics (ouvre directement Apple Calendar)
    // =========================
    if (isIOS) {

        const icsContent =
`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
DTSTART:${start}
DTEND:${end}
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

        return;
    }

    // =========================
    // 🤖 Android → app calendrier native
    // =========================
    if (isAndroid) {

        const intentUrl =
            "intent://calendar/action/compose?" +
            `title=${encodeURIComponent(title)}` +
            `&beginTime=${start}` +
            `&endTime=${end}` +
            "#Intent;scheme=content;package=com.android.calendar;end";

        window.location.href = intentUrl;
        return;
    }

    // =========================
    // 💻 PC / fallback → Google Calendar
    // =========================
    const googleUrl =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        `&text=${encodeURIComponent(title)}` +
        `&dates=${start}/${end}` +
        `&details=${encodeURIComponent(details)}` +
        `&location=${encodeURIComponent(location)}`;

    window.open(googleUrl, "_blank");
}