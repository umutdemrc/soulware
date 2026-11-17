/* Soulware audience test page (3 steps + early access).
   Each page sets window.WAITLIST (see w/_template/index.html), then loads this file.
   Answers are POSTed to a Google Apps Script web app that appends a row to a Google Sheet. */
(function () {
  var C = window.WAITLIST || {};
  var lang = C.lang === "tr" ? "tr" : "en";

  var T = {
    en: {
      by: "with Soulware",
      step: "Step {n} of 3",
      next: "Next",
      back: "Back",
      pick: "Pick one to continue.",
      ideasQ: "Which of these would you use?",
      noPay: "Nothing to pay now. No card needed.",
      priceQ: "After launch, would this be worth it to you?",
      priceLine: "Planned price: {amount}.",
      priceYes: "Yes, I'd try it",
      priceCheaper: "Only if it were cheaper",
      priceFree: "I'd only use a free version",
      doneTitle: "You're helping build this app.",
      doneText: "Leave your email for early access. {partner} will share the results.",
      email: "Email",
      emailPh: "you@email.com",
      badEmail: "Enter a valid email address.",
      consent: 'I agree that Soulware stores my email and answers to tell me when the app launches, as described in the <a href="../privacy/" target="_blank">privacy notice</a>, including storage on Google servers outside my country.',
      needConsent: "Tick the box to continue.",
      submit: "Get early access",
      sending: "Saving…",
      error: "Something went wrong. Try again.",
      thanksTitle: "Thank you, you're on the early list.",
      thanksText: "We'll email you once, when the app is ready. No spam.",
      privacy: "Privacy notice"
    },
    tr: {
      by: "Soulware ile",
      step: "Adım {n} / 3",
      next: "Devam",
      back: "Geri",
      pick: "Devam etmek için birini seçin.",
      ideasQ: "Bunlardan hangisini kullanırdınız?",
      noPay: "Şu an hiçbir ödeme yok. Kart gerekmez.",
      priceQ: "Yayınlandığında bu size değer mi?",
      priceLine: "Planlanan fiyat: {amount}.",
      priceYes: "Evet, denerdim",
      priceCheaper: "Ancak daha ucuz olursa",
      priceFree: "Yalnızca ücretsiz sürümü kullanırdım",
      doneTitle: "Bu uygulamayı birlikte geliştiriyoruz.",
      doneText: "Erken erişim için e-postanızı bırakın. Sonuçları {partner} paylaşacak.",
      email: "E-posta",
      emailPh: "ornek@eposta.com",
      badEmail: "Geçerli bir e-posta adresi girin.",
      consent: 'Uygulama yayınlandığında haber verilmesi amacıyla e-posta adresimin ve yanıtlarımın, <a href="../privacy/#tr" target="_blank">aydınlatma metninde</a> açıklandığı şekilde ve yurt dışındaki Google sunucularında saklanması dahil işlenmesine açık rıza veriyorum.',
      needConsent: "Devam etmek için kutuyu işaretleyin.",
      submit: "Erken erişim al",
      sending: "Kaydediliyor…",
      error: "Bir sorun oluştu. Tekrar deneyin.",
      thanksTitle: "Teşekkürler, erken erişim listesindesiniz.",
      thanksText: "Uygulama hazır olduğunda size bir kez e-posta göndereceğiz. Spam yok.",
      privacy: "Aydınlatma metni"
    }
  }[lang];

  function $(id) { return document.getElementById(id); }
  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : String(s); return d.innerHTML; }
  function fill(s, v) { return String(s).replace(/\{(\w+)\}/g, function (_, k) { return v[k] != null ? v[k] : ""; }); }

  var params = new URLSearchParams(location.search);
  var src = (params.get("src") || "direct").slice(0, 40);
  var answers = { problem: "", idea: "", price: "" };
  var step = 1;

  document.documentElement.lang = lang;
  document.title = (C.partner || "Soulware") + " · " + (lang === "tr" ? "Uygulama" : "App");
  $("wlBy").textContent = T.by;
  $("wlPrivacyLink").textContent = T.privacy;
  $("wlPrivacyLink").href = lang === "tr" ? "../privacy/#tr" : "../privacy/";

  function problem() {
    var list = C.problems || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === answers.problem) return list[i];
    return null;
  }

  function options(name, list, selected) {
    return list.map(function (o) {
      var on = o.id === selected ? " is-on" : "";
      var img = o.image ? '<img class="wl__opt-img" src="' + esc(o.image) + '" alt="" />' : "";
      var desc = o.desc ? '<span class="wl__opt-desc">' + esc(o.desc) + "</span>" : "";
      return '<button type="button" class="wl__opt' + on + '" data-name="' + name + '" data-id="' + esc(o.id) + '">' +
        img + '<span class="wl__opt-text"><span class="wl__opt-title">' + esc(o.label || o.title) + "</span>" + desc + "</span></button>";
    }).join("");
  }

  function progress() {
    var pct = step >= 4 ? 100 : Math.round((step - 1) / 3 * 100);
    return '<div class="wl__bar"><span style="width:' + pct + '%"></span></div>';
  }

  function nav(showBack) {
    return '<p class="wl__status" id="wlStatus" role="status" aria-live="polite"></p>' +
      '<div class="wl__nav">' + (showBack ? '<button type="button" class="btn btn--ghost" id="wlBack">' + esc(T.back) + "</button>" : "<span></span>") +
      '<button type="button" class="btn btn--primary" id="wlNext">' + esc(T.next) + "</button></div>";
  }

  function render() {
    var html = progress();
    if (step === 1) {
      html += '<span class="wl__step">' + esc(fill(T.step, { n: 1 })) + "</span>" +
        '<p class="wl__intro">' + esc(C.intro || "") + "</p>" +
        '<h1 class="wl__q">' + esc(C.problemQuestion || "") + "</h1>" +
        '<div class="wl__opts">' + options("problem", C.problems || [], answers.problem) + "</div>" + nav(false);
    } else if (step === 2) {
      var p = problem() || {};
      var ideas = p.ideas || C.ideas || [];
      html += '<span class="wl__step">' + esc(fill(T.step, { n: 2 })) + "</span>" +
        '<h1 class="wl__q">' + esc(p.ideasQuestion || T.ideasQ) + "</h1>" +
        '<div class="wl__opts">' + options("idea", ideas, answers.idea) + "</div>" + nav(true);
    } else if (step === 3) {
      var price = C.price || {};
      html += '<span class="wl__step">' + esc(fill(T.step, { n: 3 })) + "</span>" +
        '<div class="wl__nopay">' + esc(T.noPay) + "</div>" +
        '<h1 class="wl__q">' + esc(T.priceQ) + "</h1>" +
        '<p class="wl__sub">' + esc(fill(T.priceLine, { amount: price.amount || "" })) + (price.offer ? " " + esc(price.offer) : "") + "</p>" +
        '<div class="wl__opts">' + options("price", [
          { id: "yes", label: T.priceYes }, { id: "cheaper", label: T.priceCheaper }, { id: "free_only", label: T.priceFree }
        ], answers.price) + "</div>" + nav(true);
    } else if (step === 4) {
      html += '<h1 class="wl__q">' + esc(T.doneTitle) + "</h1>" +
        '<p class="wl__sub">' + esc(fill(T.doneText, { partner: C.partner || "" })) + "</p>" +
        '<div class="field"><label for="wlEmail">' + esc(T.email) + '</label><input id="wlEmail" type="email" autocomplete="email" placeholder="' + esc(T.emailPh) + '" /></div>' +
        '<input id="wlHp" type="text" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px" aria-hidden="true" />' +
        '<label class="wl__consent"><input id="wlConsent" type="checkbox" /><span>' + T.consent + "</span></label>" +
        '<p class="wl__status" id="wlStatus" role="status" aria-live="polite"></p>' +
        '<div class="wl__nav"><button type="button" class="btn btn--ghost" id="wlBack">' + esc(T.back) + "</button>" +
        '<button type="button" class="btn btn--primary" id="wlSubmit">' + esc(T.submit) + "</button></div>";
    } else {
      html += '<div class="wl__done"><h1 class="wl__q">' + esc(T.thanksTitle) + '</h1><p class="wl__sub">' + esc(T.thanksText) + "</p></div>";
    }
    $("wlCard").innerHTML = html;
    window.scrollTo(0, 0);
  }

  function setStatus(msg) { var s = $("wlStatus"); if (s) { s.textContent = msg; s.className = "wl__status wl__status--err"; } }

  $("wlCard").addEventListener("click", function (e) {
    var opt = e.target.closest(".wl__opt");
    if (opt) {
      var name = opt.getAttribute("data-name");
      if (name === "problem" && answers.problem !== opt.getAttribute("data-id")) answers.idea = "";
      answers[name] = opt.getAttribute("data-id");
      render();
      return;
    }
    if (e.target.id === "wlBack") { step = Math.max(1, step - 1); render(); return; }
    if (e.target.id === "wlNext") {
      var need = step === 1 ? "problem" : step === 2 ? "idea" : "price";
      if (!answers[need]) { setStatus(T.pick); return; }
      step += 1; render(); return;
    }
    if (e.target.id === "wlSubmit") submit();
  });

  function submit() {
    var email = $("wlEmail").value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus(T.badEmail); return; }
    if (!$("wlConsent").checked) { setStatus(T.needConsent); return; }
    if ($("wlHp").value) return;
    if (!C.endpoint || C.endpoint.indexOf("script.google.com") === -1) { setStatus("Endpoint not configured (WAITLIST.endpoint)."); return; }

    var body = new URLSearchParams({
      slug: C.slug || "", lang: lang, problem: answers.problem, idea: answers.idea, price: answers.price,
      email: email, src: src, consent: "yes", page: location.pathname
    });
    var btn = $("wlSubmit");
    btn.disabled = true; btn.textContent = T.sending;
    fetch(C.endpoint, { method: "POST", mode: "no-cors", body: body })
      .then(function () { step = 5; render(); })
      .catch(function () { btn.disabled = false; btn.textContent = T.submit; setStatus(T.error); });
  }

  render();
})();
