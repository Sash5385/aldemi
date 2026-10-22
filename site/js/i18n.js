(function () {
  var D = {
    uk: {
      "brand": "Aldemi",
      "nav.apps": "Застосунки", "nav.contacts": "Контакти",
      "hero.eyebrow": "Розробник",
      "hero.title": "Роблю застосунки, що <em>працюють.</em>",
      "hero.lead": "TODO: коротке представлення розробника (2–3 речення).",
      "hero.cta": "Мої застосунки",
      "apps.title": "Застосунки",
      "app.more": "Докладніше →",
      "app.juno.desc": "Онлайн-запис і розклад для майстрів і салонів.",
      "app.drivepad.desc": "Онлайн-запис для інструкторів з водіння.",
      "app.finddrive.desc": "TODO: опис FindDrive.",
      "app.magentic.desc": "TODO: опис Magentic.",
      "contacts.title": "Контакти",
      "contacts.name": "Ім'я", "contacts.email": "Email", "contacts.telegram": "Telegram", "contacts.github": "GitHub",
      "footer": "© 2026 Aldemi · aldemi.com.ua",
      "page.back": "← На головну",
      "page.client": "Для клієнтів", "page.admin": "Для адмінки",
      "drivepad.desc": "DrivePad — онлайн-запис і розклад для інструкторів з водіння: учні записуються самі, інструктор бачить усе в календарі.",
      "drivepad.f1": "Онлайн-запис учнів 24/7", "drivepad.f2": "Календар і нагадування", "drivepad.f3": "Черга на заняття та облік учнів",
      "finddrive.desc": "TODO: опис FindDrive (1–2 речення).",
      "magentic.desc": "TODO: опис Magentic (1–2 речення).",
      "tbd.f1": "TODO: можливість 1", "tbd.f2": "TODO: можливість 2", "tbd.f3": "TODO: можливість 3"
    },
    en: {
      "brand": "Aldemi",
      "nav.apps": "Apps", "nav.contacts": "Contacts",
      "hero.eyebrow": "Developer",
      "hero.title": "I build apps that <em>work.</em>",
      "hero.lead": "TODO: short developer intro (2–3 sentences).",
      "hero.cta": "My apps",
      "apps.title": "Apps",
      "app.more": "Learn more →",
      "app.juno.desc": "Online booking and scheduling for beauty pros and salons.",
      "app.drivepad.desc": "Online booking for driving instructors.",
      "app.finddrive.desc": "TODO: FindDrive description.",
      "app.magentic.desc": "TODO: Magentic description.",
      "contacts.title": "Contacts",
      "contacts.name": "Name", "contacts.email": "Email", "contacts.telegram": "Telegram", "contacts.github": "GitHub",
      "footer": "© 2026 Aldemi · aldemi.com.ua",
      "page.back": "← Back to home",
      "page.client": "For clients", "page.admin": "For admin",
      "drivepad.desc": "DrivePad is online booking and scheduling for driving instructors: students book on their own, the instructor sees everything in one calendar.",
      "drivepad.f1": "24/7 online student booking", "drivepad.f2": "Calendar and reminders", "drivepad.f3": "Lesson waitlist and student records",
      "finddrive.desc": "TODO: FindDrive description (1–2 sentences).",
      "magentic.desc": "TODO: Magentic description (1–2 sentences).",
      "tbd.f1": "TODO: feature 1", "tbd.f2": "TODO: feature 2", "tbd.f3": "TODO: feature 3"
    }
  };
  function detect() {
    try { var q = new URLSearchParams(location.search).get("lang"); if (q === "uk" || q === "en") { try { localStorage.setItem("aldemi_lang", q); } catch (e) {} return q; } } catch (e) {}
    try { var s = localStorage.getItem("aldemi_lang"); if (s === "uk" || s === "en") return s; } catch (e) {}
    var n = (navigator.language || "uk").slice(0, 2).toLowerCase();
    return n === "uk" || n === "ru" ? "uk" : "en";
  }
  function apply(l) {
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = D[l][el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    var b = document.getElementById("lang-btn");
    if (b) { b.textContent = l === "uk" ? "EN" : "UK"; b.setAttribute("aria-label", l === "uk" ? "Switch to English" : "Перемкнути на українську"); }
  }
  function links() {
    var C = window.ALDEMI || { apps: {}, contacts: {} };
    document.querySelectorAll("[data-app-link]").forEach(function (a) {
      var p = a.getAttribute("data-app-link").split(":"), v = ((C.apps[p[0]] || {})[p[1]]) || "TODO";
      a.setAttribute("href", v === "TODO" ? "#" : v);
      if (v === "TODO") a.classList.add("todo");
    });
    document.querySelectorAll("[data-contact]").forEach(function (a) {
      var k = a.getAttribute("data-contact"), v = C.contacts[k] || "TODO";
      a.textContent = v;
      if (v === "TODO") { a.classList.add("todo"); return; }
      if (k === "email") a.href = "mailto:" + v;
      else if (k === "telegram") a.href = "https://t.me/" + v.replace(/^@/, "");
      else if (k === "github") a.href = "https://github.com/" + v;
    });
  }
  var lang = detect();
  document.addEventListener("DOMContentLoaded", function () {
    apply(lang); links();
    var b = document.getElementById("lang-btn");
    if (b) b.addEventListener("click", function () {
      lang = lang === "uk" ? "en" : "uk";
      try { localStorage.setItem("aldemi_lang", lang); } catch (e) {}
      apply(lang);
    });
  });
})();
