/* Soulware partner space: one private page per influencer.
   Built around ONE card: what the influencer should do now. Nothing else competes for attention.
   Stages: 1 Call · 2 Test · 3 Sign · 4 Launch (set window.SPACE.stage in the page).
   Once a test exists, the page also loads ../../w/<slug>/config.js so results show real labels. */
(function () {
  var S = window.SPACE || {};
  var W = window.WAITLIST || null;
  var lang = S.lang === "tr" ? "tr" : "en";
  var P = S.partner || "";

  var T = {
    en: {
      privateFor: "Private space for {p}",
      contact: "Questions? umut@soulware.app",
      steps: ["Call", "Test", "Sign", "Launch"],
      hello: "Hi {p}, let's build your app together.",
      deal: ["50/50 net profit", "No cost to you", "Your name stays yours"],
      tabNow: "Next step", tabResults: "Results", tabAgreement: "Agreement",
      callTitle: "Book our 30-minute call",
      callSub: "Pick any time that suits you. You'll get a Google Meet link by email.",
      callOpen: "Open the calendar in a new tab",
      qTitle: "Have a minute? Three quick questions (optional)",
      qSub: "Answer what you like. It helps us bring ideas made for your audience.",
      qs: ["What do you teach?", "What do your followers ask you most?", "How do you usually share things? (stories, reels, YouTube...)"],
      qSend: "Send",
      qNeed: "Answer at least one, or skip it. We'll ask on the call.",
      qDone: "Thanks, got it.",
      testTitle: "Post this link in your story",
      testSub: "Your followers answer three quick questions. Their answers decide what we build.",
      storyText: "\"I'm building an app for you. Help me decide what it does!\"",
      copy: "Copy link", copied: "Copied",
      resultsTitle: "Live results",
      resultsTotal: "{n} people answered",
      resultsNone: "No answers yet. They show up here as soon as people take part.",
      resultsErr: "Results couldn't load right now.",
      rProblem: "Biggest problem", rIdea: "Favourite app idea", rPrice: "Price answer",
      priceLabels: { yes: "Would try it", cheaper: "Only if cheaper", free_only: "Free version only" },
      signTitle: "Review our plan and sign",
      signSub: "This is what we agreed. Signing records your name, email and the time.",
      termsLink: "Read the full terms",
      signName: "Full name", signEmail: "Email",
      signAgree: "I've read the plan and the terms, and I agree.",
      signBtn: "Sign",
      signNeed: "Enter your name and email, and tick the box.",
      signDone: "Signed. Umut will countersign and email you a copy.",
      signErr: "Something went wrong. Try again or email Umut.",
      launchTitle: "Nothing to do right now",
      launchSub: "We're building your app. Umut will email you previews before launch.",
      signedOn: "Signed on {d}.",
      footer: "Private link. Please don't share it."
    },
    tr: {
      privateFor: "{p} için özel alan",
      contact: "Sorularınız için: umut@soulware.app",
      steps: ["Görüşme", "Test", "İmza", "Yayın"],
      hello: "Merhaba {p}, uygulamanızı birlikte geliştirelim.",
      deal: ["Net kârın %50'si", "Size hiçbir maliyeti yok", "Adınız sizde kalır"],
      tabNow: "Sıradaki adım", tabResults: "Sonuçlar", tabAgreement: "Sözleşme",
      callTitle: "30 dakikalık görüşmemizi planlayın",
      callSub: "Size uygun herhangi bir saati seçin. Google Meet bağlantısı e-postanıza gelir.",
      callOpen: "Takvimi yeni sekmede aç",
      qTitle: "Bir dakikanız var mı? Üç kısa soru (isteğe bağlı)",
      qSub: "İstediğinizi yanıtlayın. Kitlenize özel fikirlerle gelmemize yardımcı olur.",
      qs: ["Ne öğretiyorsunuz?", "Takipçileriniz size en çok ne soruyor?", "Genelde nasıl paylaşım yaparsınız? (hikâye, reels, YouTube...)"],
      qSend: "Gönder",
      qNeed: "En az birini yanıtlayın ya da atlayın; görüşmede sorarız.",
      qDone: "Teşekkürler, aldık.",
      testTitle: "Bu bağlantıyı hikâyenizde paylaşın",
      testSub: "Takipçileriniz üç kısa soruyu yanıtlıyor. Ne geliştireceğimize onların cevapları karar veriyor.",
      storyText: "\"Sizin için bir uygulama geliştiriyorum. Ne yapacağına birlikte karar verelim!\"",
      copy: "Bağlantıyı kopyala", copied: "Kopyalandı",
      resultsTitle: "Canlı sonuçlar",
      resultsTotal: "{n} kişi yanıtladı",
      resultsNone: "Henüz yanıt yok. Katılanlar oldukça burada görünür.",
      resultsErr: "Sonuçlar şu an yüklenemedi.",
      rProblem: "En büyük sorun", rIdea: "En sevilen uygulama fikri", rPrice: "Fiyat yanıtı",
      priceLabels: { yes: "Denerdim", cheaper: "Daha ucuz olursa", free_only: "Yalnızca ücretsiz sürüm" },
      signTitle: "Planımızı gözden geçirin ve imzalayın",
      signSub: "Birlikte kararlaştırdığımız plan bu. İmza adınızı, e-postanızı ve zamanı kaydeder.",
      termsLink: "Şartların tamamını okuyun",
      signName: "Ad Soyad", signEmail: "E-posta",
      signAgree: "Planı ve şartları okudum, kabul ediyorum.",
      signBtn: "İmzala",
      signNeed: "Adınızı ve e-postanızı girin, kutuyu işaretleyin.",
      signDone: "İmzalandı. Umut karşı imzayı atıp size bir kopyasını e-postayla gönderecek.",
      signErr: "Bir sorun oluştu. Tekrar deneyin veya Umut'a e-posta gönderin.",
      launchTitle: "Şu an yapmanız gereken bir şey yok",
      launchSub: "Uygulamanızı geliştiriyoruz. Umut yayından önce size ön izlemeler gönderecek.",
      signedOn: "{d} tarihinde imzalandı.",
      footer: "Özel bağlantı. Lütfen paylaşmayın."
    }
  }[lang];

  function $(id) { return document.getElementById(id); }
  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : String(s); return d.innerHTML; }
  function fill(s, v) { return String(s).replace(/\{(\w+)\}/g, function (_, k) { return v[k] != null ? v[k] : ""; }); }
  function post(body) { return fetch(S.endpoint, { method: "POST", mode: "no-cors", body: new URLSearchParams(body) }); }
  var store = { get: function (k) { try { return localStorage.getItem("sw:" + (S.id || "") + ":" + k); } catch (e) { return null; } },
                set: function (k, v) { try { localStorage.setItem("sw:" + (S.id || "") + ":" + k, v); } catch (e) {} } };

  var stage = Math.min(Math.max(parseInt(S.stage, 10) || 1, 1), 4);
  if (S.signed && stage < 4) stage = 4;
  document.documentElement.lang = lang;
  document.title = P + " × Soulware";

  // ---------- header, tracker, greeting ----------
  $("spFor").textContent = fill(T.privateFor, { p: P });
  $("spContact").textContent = T.contact;
  $("spFooter").textContent = T.footer;
  $("spTracker").innerHTML = T.steps.map(function (name, i) {
    var n = i + 1, cls = n < stage ? "is-done" : n === stage ? "is-now" : "";
    return '<li class="sp-step ' + cls + '"><span class="sp-step__dot">' + (n < stage ? "✓" : n) + '</span><span class="sp-step__name">' + esc(name) + "</span></li>";
  }).join("");
  $("spHello").innerHTML = "<h1>" + esc(fill(T.hello, { p: P })) + '</h1><ul class="sp-deal">' +
    T.deal.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>";

  // ---------- tabs: only what's relevant ----------
  var tabs = [{ k: "now", label: T.tabNow, view: viewNow }];
  if (stage >= 3 && S.testSlug) tabs.push({ k: "results", label: T.tabResults, view: function () { return resultsBlock(); } });
  if (stage >= 4) tabs.push({ k: "agreement", label: T.tabAgreement, view: viewAgreement });
  $("spTabs").innerHTML = tabs.length > 1 ? tabs.map(function (t) {
    return '<a class="sp-tab" href="#' + t.k + '" data-tab="' + t.k + '">' + esc(t.label) + "</a>";
  }).join("") : "";
  if (tabs.length < 2) $("spTabs").style.display = "none";

  function card(title, sub, body) {
    return '<section class="sp-now"><h2>' + esc(title) + "</h2>" + (sub ? '<p class="sp-muted">' + esc(sub) + "</p>" : "") + body + "</section>";
  }

  // ---------- the one card ----------
  function viewNow() {
    if (stage === 1) return viewCall();
    if (stage === 2) return viewTest();
    if (stage === 3) return viewSign();
    return card(T.launchTitle, T.launchSub, "");
  }

  function viewCall() {
    var booking = S.bookingUrl
      ? '<div class="sp-booking"><iframe src="' + esc(S.bookingUrl) + '" title="' + esc(T.callTitle) + '" loading="lazy"></iframe></div>' +
        '<p class="sp-small"><a href="' + esc(S.bookingUrl.replace("?gv=true", "")) + '" target="_blank" rel="noopener">' + esc(T.callOpen) + "</a></p>"
      : "";
    var qs = store.get("intake")
      ? '<p class="sp-ok">' + esc(T.qDone) + "</p>"
      : '<div class="sp-form" id="spQForm">' + T.qs.map(function (q, i) {
          return '<div class="field"><label for="spQ' + i + '">' + esc(q) + '</label><input id="spQ' + i + '" type="text" /></div>';
        }).join("") +
        '<button type="button" class="btn btn--primary" id="spQSend">' + esc(T.qSend) + "</button>" +
        '<p class="sp-status" id="spQStatus" role="status" aria-live="polite"></p></div>';
    return card(T.callTitle, T.callSub, booking) +
      '<details class="sp-extra sp-fold"' + (store.get("intake") ? "" : "") + '><summary>' + esc(T.qTitle) + '</summary><p class="sp-muted">' + esc(T.qSub) + "</p>" + qs + "</details>";
  }

  function viewTest() {
    var url = "https://soulware.app/w/" + S.testSlug + "/?src=story";
    return card(T.testTitle, T.testSub,
      '<div class="sp-link"><code id="spLink">' + esc(url) + '</code><button type="button" class="btn btn--primary" id="spCopy">' + esc(T.copy) + "</button></div>" +
      '<p class="sp-quote">' + esc(T.storyText) + "</p>") + resultsBlock();
  }

  function planTable() {
    var box = document.createElement("div");
    window.SoulwareTerms.render(box, { lang: lang, partner: P, plan: S.plan || {} });
    var tbl = box.querySelector(".terms-plan");
    if (!tbl) return "";
    [].forEach.call(tbl.querySelectorAll("tr"), function (tr) { if (tr.querySelector(".terms-plan__empty")) tr.remove(); });
    return tbl.querySelector("tr") ? tbl.outerHTML : "";
  }

  function termsDetails() {
    return '<details class="sp-terms-box"><summary>' + esc(T.termsLink) + '</summary><div class="legal__doc" id="spTerms"></div></details>';
  }

  function viewSign() {
    var form = '<div class="sp-form" id="spSignForm">' +
      '<div class="field"><label for="spName">' + esc(T.signName) + '</label><input id="spName" type="text" autocomplete="name" /></div>' +
      '<div class="field"><label for="spEmail">' + esc(T.signEmail) + '</label><input id="spEmail" type="email" autocomplete="email" /></div>' +
      '<label class="sp-agree"><input id="spAgree" type="checkbox" /><span>' + esc(T.signAgree) + "</span></label>" +
      '<button type="button" class="btn btn--primary btn--lg" id="spSign">' + esc(T.signBtn) + "</button>" +
      '<p class="sp-status" id="spSignStatus" role="status" aria-live="polite"></p></div>';
    if (store.get("signed")) form = '<p class="sp-ok">' + esc(T.signDone) + "</p>";
    return card(T.signTitle, T.signSub, planTable() + termsDetails() + form);
  }

  function viewAgreement() {
    return card(T.tabAgreement, S.signed ? fill(T.signedOn, { d: S.signed }) : "", planTable() + termsDetails());
  }

  // ---------- results ----------
  function resultsBlock() {
    return '<section class="sp-extra"><h3>' + esc(T.resultsTitle) + '</h3><div id="spResults" class="sp-muted">…</div></section>';
  }

  function labelMap() {
    var m = { problem: {}, idea: {} };
    if (!W) return m;
    (W.problems || []).forEach(function (p) { m.problem[p.id] = p.label; (p.ideas || []).forEach(function (o) { m.idea[o.id] = o.title; }); });
    (W.ideas || []).forEach(function (o) { m.idea[o.id] = o.title; });
    return m;
  }

  function bars(title, counts, labels, total) {
    var keys = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
    return "<div><h4>" + esc(title) + "</h4>" + keys.map(function (k) {
      var pct = total ? Math.round(counts[k] / total * 100) : 0;
      return '<div class="sp-bar"><div class="sp-bar__top"><span>' + esc(labels[k] || k) + "</span><span>" + pct + "%</span></div>" +
        '<div class="sp-bar__track"><i style="width:' + pct + '%"></i></div></div>';
    }).join("") + "</div>";
  }

  function loadResults() {
    var box = $("spResults"); if (!box || !S.testSlug) return;
    fetch(S.endpoint + "?action=stats&slug=" + encodeURIComponent(S.testSlug))
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d || !d.total) { box.textContent = T.resultsNone; return; }
        var L = labelMap();
        box.className = "";
        box.innerHTML = '<p class="sp-total">' + esc(fill(T.resultsTotal, { n: d.total })) + '</p><div class="sp-results">' +
          bars(T.rProblem, d.problem || {}, L.problem, d.total) + bars(T.rIdea, d.idea || {}, L.idea, d.total) +
          bars(T.rPrice, d.price || {}, T.priceLabels, d.total) + "</div>";
      })
      .catch(function () { box.textContent = T.resultsErr; });
  }

  // ---------- wiring ----------
  function show() {
    var key = (location.hash || "#now").slice(1);
    var tab = tabs.filter(function (t) { return t.k === key; })[0] || tabs[0];
    [].forEach.call(document.querySelectorAll(".sp-tab"), function (a) { a.classList.toggle("is-on", a.getAttribute("data-tab") === tab.k); });
    $("spView").innerHTML = tab.view();
    if ($("spTerms")) window.SoulwareTerms.render($("spTerms"), { lang: lang, partner: P, plan: S.plan, updated: S.termsUpdated, final: S.termsFinal });
    loadResults(); bindCopy(); bindQuestions(); bindSign();
  }
  window.addEventListener("hashchange", show);

  function bindCopy() {
    var b = $("spCopy"); if (!b) return;
    b.addEventListener("click", function () {
      var text = $("spLink").textContent;
      (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () {
        b.textContent = T.copied; setTimeout(function () { b.textContent = T.copy; }, 1500);
      }).catch(function () {
        var r = document.createRange(); r.selectNodeContents($("spLink"));
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      });
    });
  }

  function bindQuestions() {
    var b = $("spQSend"); if (!b) return;
    b.addEventListener("click", function () {
      var a = T.qs.map(function (_, i) { return $("spQ" + i).value.trim(); });
      var st = $("spQStatus");
      if (!a[0] && !a[1] && !a[2]) { st.textContent = T.qNeed; st.className = "sp-status sp-status--err"; return; }
      b.disabled = true;
      post({ action: "intake", space: S.id || "", partner: P, lang: lang, teach: a[0] || "(skipped)", asks: a[1], sharing: a[2] })
        .then(function () { store.set("intake", "1"); $("spQForm").outerHTML = '<p class="sp-ok">' + esc(T.qDone) + "</p>"; })
        .catch(function () { b.disabled = false; st.textContent = T.signErr; st.className = "sp-status sp-status--err"; });
    });
  }

  function bindSign() {
    var b = $("spSign"); if (!b) return;
    b.addEventListener("click", function () {
      var name = $("spName").value.trim(), email = $("spEmail").value.trim(), st = $("spSignStatus");
      if (name.length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !$("spAgree").checked) {
        st.textContent = T.signNeed; st.className = "sp-status sp-status--err"; return;
      }
      b.disabled = true;
      post({ action: "sign", space: S.id || "", partner: P, name: name, email: email, lang: lang,
             terms: S.termsUpdated || "", plan: JSON.stringify(S.plan || {}) })
        .then(function () { store.set("signed", "1"); $("spSignForm").outerHTML = '<p class="sp-ok">' + esc(T.signDone) + "</p>"; })
        .catch(function () { b.disabled = false; st.textContent = T.signErr; st.className = "sp-status sp-status--err"; });
    });
  }

  show();
})();
