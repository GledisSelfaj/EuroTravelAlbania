function sendContactMessage() {
    // Merri vlerat nga fushat
    const emri = document.getElementById('contact-name').value;
    const mesazhi = document.getElementById('contact-message').value;
    const numriIm = "355688574444"; // Numri yt i WhatsApp

    if (emri === "" || mesazhi === "") {
        alert("Ju lutem plotësoni emrin dhe mesazhin!");
        return;
    }

    // Krijo tekstin e mesazhit
    const tekstiperWhatsApp = "Përshëndetje Euro Travel, unë jam " + emri + ". " + mesazhi;

    // Krijo linkun e WhatsApp (encodeURI ndihmon me hapësirat dhe karakteret speciale)
    const whatsappURL = "https://wa.me/" + numriIm + "?text=" + encodeURIComponent(tekstiperWhatsApp);

    // Hap WhatsApp në një dritare të re
    window.open(whatsappURL, '_blank');
}

// Funksioni për menunë celulare (që e kishim më parë)
function toggleMenu() {
    var x = document.getElementById("mobile-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}