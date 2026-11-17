/* Soulware partnership terms renderer, used by the partner space (space/space.js).
   SoulwareTerms.render(element, {lang, partner, plan, updated, final})
   SOURCE OF TRUTH for the wording: the "Partnership Terms" doc (English + Türkçe tabs).
   When the doc changes, update TEXT below in the same change. */
window.SoulwareTerms = { render: function (target, C) {
  C = C || {};
  var lang = C.lang === "tr" ? "tr" : "en";
  var P = C.partner || (lang === "tr" ? "[Ortak]" : "[Partner]");

  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : String(s); return d.innerHTML; }

  var TEXT = {
    en: {
      title: "Soulware × " + esc(P) + " — App Partnership Terms",
      draft: "Draft for discussion. Not yet reviewed by a lawyer, and not binding until both sides sign.",
      intro: "Soulware Ltd builds and runs an app with " + esc(P) + ". " + esc(P) + " promotes it to their audience. Net profit is split 50/50. The details that differ for each partner (the app, dates, how they promote) go in the Partnership Plan at the end.",
      sections: [
        ["1. What Soulware does", [
          "Designs, builds and publishes the app on the App Store (and Google Play if agreed) under Soulware's developer account.",
          "Pays all design and development costs. The Partner pays nothing to build the app.",
          "Runs the app: hosting, updates, bug fixes, subscriptions and user support.",
          "Delivers the first version by the date in the Partnership Plan.",
          "Gives the Partner read-only access to the app's revenue dashboard."
        ]],
        ["2. What the Partner does", [
          "<b>Promotion (the Partner's main commitment):</b> the Partner promotes the app as set out in the Partnership Plan. The Partner chooses the formats and how often to post. Both sides agree them before launch and review them every 3 months.",
          "Labels every promotional post as the platform and local law require. In Turkey, that means \"Reklam\" or \"Tanıtım\".",
          "Shapes the app idea with Soulware and approves the Partnership Plan.",
          "<b>Content, if the app needs it:</b> when the plan calls for the Partner's own material (for example lessons, programs or voice recordings), the Partner supplies it by the dates in the plan."
        ]],
        ["3. Money", [
          "<b>Which users are shared:</b> all of the app's users, except users Soulware brings in through its own tracked channels (Soulware's own paid ads, and other partners' links or codes). Soulware pays for those channels and keeps that revenue.",
          "<b>Tracking:</b> each channel gets its own App Store campaign link and offer code. The monthly statement shows revenue by channel.",
          "<b>Net profit</b> = what Apple and Google pay Soulware for the shared users (after their commission, taxes and refunds), minus the app's direct running costs for those users.",
          "<b>Direct running costs</b> = only costs this app causes: AI and API usage, servers and storage, third-party tools used only by this app, and paid ads both sides approved in writing. They are divided between shared and Soulware-channel users in proportion to revenue. Soulware's salaries, development time and general company costs are never deducted.",
          "If running costs are higher than the payout in a month, the difference is deducted from later months' net profit. The Partner never pays Soulware out of pocket.",
          "<b>Split:</b> 50% Soulware Ltd, 50% Partner.",
          "<b>Payment:</b> Soulware Ltd sends a monthly statement and pays the Partner within 15 days of receiving the store payout. Amounts under USD 50 roll over to the next month.",
          "Each side pays its own taxes. The Partner sends an invoice where the law requires one."
        ]],
        ["4. Ownership", [
          "Soulware Ltd owns the app: code, design, store listing, developer account and user data (handled under Soulware's privacy policy).",
          "The Partner owns their name, image, voice, content and method. The Partner licenses them to Soulware for use in the app and its marketing while the partnership runs.",
          "If the app's name includes the Partner's name, it is used only while the partnership runs."
        ]],
        ["5. Duration and ending", [
          "The partnership has no fixed end date. It runs for as long as the Partner keeps to the promotion plan.",
          "If the Partner stops promoting for 2 months in a row and doesn't resume within 30 days of written notice, the partnership ends.",
          "Either side may also end it with 60 days' written notice.",
          "After it ends, the Partner keeps their 50% share on every shared subscription active on the end date, for as long as that subscriber keeps renewing without a break. Users who join after the end are not shared.",
          "Within 30 days of the end, Soulware removes the Partner's name, image and voice from the app, or removes the app.",
          "Either side may offer to buy the other's share. The price is agreed at that time."
        ]],
        ["6. Ground rules", [
          "<b>Exclusivity:</b> while the partnership runs, the Partner does not promote a competing app in the same category. Soulware does not build an app in the same niche with another creator who works in the same language.",
          "<b>Claims:</b> no health, medical, financial or income promises in the app or its promotion.",
          "<b>Confidentiality:</b> revenue figures and unreleased plans stay between the two sides.",
          "<b>Conduct:</b> either side may end the partnership immediately if the other's public conduct seriously harms the app.",
          "<b>Law:</b> to be set once Soulware Ltd is registered."
        ]]
      ],
      planTitle: "Partnership Plan",
      planIntro: "Filled in together before signing.",
      planEmpty: "To be agreed after our call",
      plan: [
        ["idea", "App idea and main features"],
        ["delivery", "First version delivery date"],
        ["content", "Content the Partner provides (if any), with dates"],
        ["launch", "Launch-week promotion"],
        ["ongoing", "Ongoing promotion (formats, how often, link in bio)"],
        ["link", "Partner's tracked link and offer code"],
        ["review", "First review date"]
      ],
      contact: "Questions? Write to Umut at <a href=\"mailto:umut@soulware.app\">umut@soulware.app</a>.",
      lang: "Türkçe"
    },
    tr: {
      title: "Soulware × " + esc(P) + " — Uygulama Ortaklığı Şartları",
      draft: "Görüşme için taslaktır. Henüz avukat tarafından incelenmemiştir ve iki taraf imzalayana kadar bağlayıcı değildir.",
      intro: "Soulware Ltd, " + esc(P) + " ile birlikte bir uygulama geliştirir ve işletir. " + esc(P) + " uygulamayı kendi kitlesine tanıtır. Net kâr yarı yarıya paylaşılır. Her ortaklığa özel ayrıntılar (uygulama, tarihler, tanıtım biçimi) sondaki Ortaklık Planı'nda yer alır.",
      sections: [
        ["1. Soulware'in yükümlülükleri", [
          "Uygulamayı Soulware'in geliştirici hesabı altında tasarlar, geliştirir ve App Store'da (anlaşılırsa Google Play'de de) yayınlar.",
          "Tüm tasarım ve geliştirme maliyetlerini üstlenir. Ortak, uygulamanın geliştirilmesi için hiçbir ödeme yapmaz.",
          "Uygulamayı işletir: sunucu, güncellemeler, hata düzeltmeleri, abonelikler ve kullanıcı desteği.",
          "İlk sürümü Ortaklık Planı'nda belirtilen tarihe kadar teslim eder.",
          "Ortağa uygulamanın gelir paneline salt okunur erişim verir."
        ]],
        ["2. Ortağın yükümlülükleri", [
          "<b>Tanıtım (Ortağın temel yükümlülüğü):</b> Ortak, uygulamayı Ortaklık Planı'nda belirtildiği şekilde tanıtır. Paylaşım biçimlerini ve sıklığını Ortak seçer. Taraflar bunları yayından önce kararlaştırır ve üç ayda bir gözden geçirir.",
          "Her tanıtım paylaşımını platformun ve yerel mevzuatın gerektirdiği şekilde etiketler. Türkiye'de bu, \"Reklam\" veya \"Tanıtım\" ibaresi anlamına gelir.",
          "Uygulama fikrini Soulware ile birlikte şekillendirir ve Ortaklık Planı'nı onaylar.",
          "<b>İçerik (uygulama gerektirirse):</b> Plan, Ortağın kendi materyalini (örneğin ders, program veya ses kaydı) gerektiriyorsa, Ortak bunu plandaki tarihlere kadar sağlar."
        ]],
        ["3. Gelir", [
          "<b>Paylaşılan kullanıcılar:</b> Soulware'in kendi takip edilen kanallarıyla (Soulware'in kendi ücretli reklamları ve diğer ortakların bağlantı veya kodları) getirdiği kullanıcılar dışındaki tüm kullanıcılar. Bu kanalların maliyetini Soulware öder ve bu kanallardan gelen geliri Soulware alır.",
          "<b>Takip:</b> Her kanal kendi App Store kampanya bağlantısını ve teklif kodunu kullanır. Aylık döküm, geliri kanallara göre gösterir.",
          "<b>Net kâr</b> = Apple ve Google'ın paylaşılan kullanıcılar için Soulware'e ödediği tutar (komisyon, vergi ve iadeler düşüldükten sonra) eksi bu kullanıcılara ait doğrudan işletme giderleri.",
          "<b>Doğrudan işletme giderleri</b> = yalnızca bu uygulamanın yol açtığı giderler: yapay zekâ ve API kullanımı, sunucu ve depolama, yalnızca bu uygulamada kullanılan üçüncü taraf araçlar ve tarafların yazılı olarak onayladığı ücretli reklamlar. Bu giderler, paylaşılan kullanıcılar ile Soulware kanalı kullanıcıları arasında gelir oranında bölünür. Soulware'in maaşları, geliştirme emeği ve genel şirket giderleri asla düşülmez.",
          "Bir ayda işletme giderleri ödemeden yüksek olursa, fark sonraki ayların net kârından düşülür. Ortak, Soulware'e cebinden hiçbir ödeme yapmaz.",
          "<b>Paylaşım:</b> %50 Soulware Ltd, %50 Ortak.",
          "<b>Ödeme:</b> Soulware Ltd her ay bir döküm gönderir ve mağaza ödemesini aldığı tarihten itibaren 15 gün içinde Ortağa ödeme yapar. 50 USD altındaki tutarlar bir sonraki aya devreder.",
          "Her taraf kendi vergisini öder. Ortak, mevzuat gerektiriyorsa fatura düzenler."
        ]],
        ["4. Sahiplik", [
          "Uygulama Soulware Ltd'nindir: kod, tasarım, mağaza sayfası, geliştirici hesabı ve kullanıcı verileri (Soulware'in gizlilik politikasına tabidir).",
          "Ortağın adı, görüntüsü, sesi, içeriği ve yöntemi Ortağa aittir. Ortak, ortaklık süresince bunların uygulamada ve uygulamanın tanıtımında kullanılması için Soulware'e lisans verir.",
          "Uygulamanın adı Ortağın adını içeriyorsa, bu ad yalnızca ortaklık süresince kullanılır."
        ]],
        ["5. Süre ve sona erme", [
          "Ortaklığın sabit bir bitiş tarihi yoktur. Ortak tanıtım planına uyduğu sürece devam eder.",
          "Ortak art arda 2 ay tanıtım yapmaz ve yazılı bildirimden sonraki 30 gün içinde yeniden başlamazsa ortaklık sona erer.",
          "Taraflardan her biri 60 gün önceden yazılı bildirimde bulunarak da ortaklığı sona erdirebilir.",
          "Ortaklık sona erdikten sonra Ortak, bitiş tarihinde aktif olan her paylaşılan abonelikten, abone kesintisiz yenilemeye devam ettiği sürece %50 payını almaya devam eder. Bitişten sonra katılan kullanıcılar paylaşılmaz.",
          "Soulware, sona ermeden itibaren 30 gün içinde Ortağın adını, görüntüsünü ve sesini uygulamadan kaldırır veya uygulamayı yayından kaldırır.",
          "Taraflardan her biri diğerinin payını satın almayı teklif edebilir. Fiyat o tarihte kararlaştırılır."
        ]],
        ["6. Temel kurallar", [
          "<b>Münhasırlık:</b> Ortaklık süresince Ortak aynı kategoride rakip bir uygulamayı tanıtmaz. Soulware aynı alanda, aynı dilde içerik üreten başka bir üreticiyle uygulama geliştirmez.",
          "<b>İddialar:</b> Uygulamada ve tanıtımında sağlık, tedavi, finans veya kazanç vaadi yer almaz.",
          "<b>Gizlilik:</b> Gelir rakamları ve yayınlanmamış planlar taraflar arasında kalır.",
          "<b>Davranış:</b> Taraflardan birinin kamuya açık davranışı uygulamaya ciddi zarar verirse, diğer taraf ortaklığı derhal sona erdirebilir.",
          "<b>Uygulanacak hukuk:</b> Soulware Ltd tescil edildikten sonra belirlenecek."
        ]]
      ],
      planTitle: "Ortaklık Planı",
      planIntro: "İmzadan önce birlikte doldurulur.",
      planEmpty: "Görüşmemizden sonra birlikte belirlenecek",
      plan: [
        ["idea", "Uygulama fikri ve temel özellikler"],
        ["delivery", "İlk sürüm teslim tarihi"],
        ["content", "Ortağın sağlayacağı içerik (varsa) ve tarihleri"],
        ["launch", "Yayın haftası tanıtımı"],
        ["ongoing", "Düzenli tanıtım (biçim, sıklık, biyografi bağlantısı)"],
        ["link", "Ortağa özel takip bağlantısı ve teklif kodu"],
        ["review", "İlk gözden geçirme tarihi"]
      ],
      contact: "Sorularınız için Umut'a yazabilirsiniz: <a href=\"mailto:umut@soulware.app\">umut@soulware.app</a>.",
      lang: "English"
    }
  }[lang];

  var plan = C.plan || {};
  var html = '<h1>' + TEXT.title + '</h1>' +
    '<p class="legal__updated">' + esc(C.updated || "") + '</p>' +
    (C.final ? "" : '<p class="legal__note">' + TEXT.draft + '</p>') +
    '<p>' + TEXT.intro + '</p>';

  TEXT.sections.forEach(function (s) {
    html += '<h2>' + s[0] + '</h2><ul>' + s[1].map(function (li) { return '<li>' + li + '</li>'; }).join("") + '</ul>';
  });

  html += '<h2>' + TEXT.planTitle + '</h2><p>' + TEXT.planIntro + '</p><table class="terms-plan"><tbody>' +
    TEXT.plan.map(function (r) {
      var v = plan[r[0]];
      return '<tr><th>' + r[1] + '</th><td>' + (v ? esc(v) : '<span class="terms-plan__empty">' + TEXT.planEmpty + '</span>') + '</td></tr>';
    }).join("") + '</tbody></table>';

  html += '<p class="terms-contact">' + TEXT.contact + '</p>';

  target.innerHTML = html;
} };
