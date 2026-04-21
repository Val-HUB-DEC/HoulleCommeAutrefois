function openCalendar() {
    const title = "Fête de la moisson Houlle";
    const start = "20260823T100000Z";
    const end = "20260823T180000Z";
    const details = "Fête de la moisson à l'ancienne";
    const location = "Houlle";

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);

    // 📱 iOS → lien Google Calendar (le plus fiable)
    if (isIOS) {
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
        window.open(url, "_blank");
        return;
    }

    // 🤖 Android → tentative ouverture app calendrier native
    if (isAndroid) {
        const intentUrl =
            `intent://calendar/action/compose?` +
            `title=${encodeURIComponent(title)}` +
            `&beginTime=${start}` +
            `&endTime=${end}` +
            `#Intent;scheme=content;package=com.android.calendar;end`;

        window.location.href = intentUrl;
        return;
    }

    // 💻 fallback PC
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}`;
    window.open(url, "_blank");
}