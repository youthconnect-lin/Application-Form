const FRONTEND_CONFIG_GAS_URL =
  typeof window !== "undefined" &&
  window.__FORM_CONFIG__ &&
  typeof window.__FORM_CONFIG__.gasUrl !== "undefined"
    ? String(window.__FORM_CONFIG__.gasUrl || "").trim()
    : "";
const FALLBACK_GAS_URL = "";
    const TEMPLATE_WEB_APP_URL =
      typeof window !== "undefined" && window.__WEB_APP_URL__
        ? String(window.__WEB_APP_URL__).trim()
        : "";
    const LOCATION_WEB_APP_URL =
      typeof window !== "undefined" &&
      window.location &&
      /^https:\/\/script\.google\.com\/macros\/s\//i.test(String(window.location.href || ""))
        ? String(window.location.href).split("#")[0].split("?")[0]
        : "";
    const GAS_URL =
      FRONTEND_CONFIG_GAS_URL ||
      TEMPLATE_WEB_APP_URL ||
      LOCATION_WEB_APP_URL ||
      FALLBACK_GAS_URL;
    const AUTO_NEXT_AFTER_ELIGIBLE = true;
    // When true, eligible users automatically move to the next page.
    const ENABLE_ERROR_CHECK_MODE = false;
    const ENABLE_MOBILE_FIELD_AUTO_ADVANCE = true;

    const ELIGIBILITY_RULES = {
      minAge: 17.5,
      maxAge: 25,
      // Eligibility criteria uses month-only thresholds (days ignored).
      // 209 months = 17 years 5 months.
      minAgeMonths: 209,
      maxAgeMonths: 300
    };

    const form = document.getElementById("applicationForm");
    const pages = Array.from(document.querySelectorAll(".form-page"));
    const policyPage = document.getElementById("policyPage");
    const welcomePage = document.getElementById("welcomePage");
    const eligibilityPage = document.getElementById("eligibilityPage");
    const reviewPage = document.getElementById("reviewPage");
    const notEligiblePage = document.getElementById("notEligiblePage");
    const policyDeclinedPage = document.getElementById("policyDeclinedPage");
    const submissionClosedPage = document.getElementById("submissionClosedPage");
    const notEligibleReasons = document.getElementById("notEligibleReasons");
    const reviewSummary = document.getElementById("reviewSummary");
    const reviewConfirmInput = document.getElementById("reviewConfirm");
    const policyAgreementChoices = Array.from(document.querySelectorAll('input[name="policyAgreement"]'));
    const pageCounter = document.getElementById("pageCounter");
    const pageTitle = document.getElementById("pageTitle");
    const progressFill = document.getElementById("progressFill");
    const applicationModeInput = document.getElementById("applicationMode");
    const applicationModeCards = Array.from(document.querySelectorAll(".mode-choice-card"));
    const applicationModeError = document.getElementById("applicationModeError");
    const onlineModeNote = document.getElementById("onlineModeNote");
    const pdfCard = document.getElementById("pdfCard");
    const pdfDownloadLink = document.getElementById("pdfDownloadLink");
    const pdfUploadPanel = document.getElementById("pdfUploadPanel");
    const pdfApplicantNameInput = document.getElementById("pdfApplicantName");
    const pdfApplicantPhoneInput = document.getElementById("pdfApplicantPhone");
    const pdfFilledFileInput = document.getElementById("pdfFilledFile");
    const pdfUploadStatus = document.getElementById("pdfUploadStatus");
    const pdfUploadSubmitBtn = document.getElementById("pdfUploadSubmitBtn");
    const logoFormLink = document.getElementById("logoFormLink");

    const SUBMISSION_CUTOFF_LOCAL_ISO = "2026-03-12T00:00:00";
    const SUBMISSION_CLOSED_TRACKING_TYPE = "Cutoff Link Click";
    const SUBMISSION_CLOSED_TRACKING_STATUS = "Closed Period Link Click";
    const SUBMISSION_CLOSED_MODAL_TITLE = "Thank You / (ကျေးဇူးတင်ပါသည်)";

    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");
    const SUBMIT_BTN_DEFAULT_LABEL = submitBtn ? submitBtn.textContent : "";
    const SUBMIT_BTN_LOADING_LABEL = "Submitting... / (တင်သွင်းနေသည်...)";
    const formError = document.getElementById("formError");

    const dobInput = document.getElementById("dob");
    const ageDisplayInput = document.getElementById("ageDisplay");
    const ageInput = document.getElementById("age");
    const provinceInput = document.getElementById("eligibilityProvince");
    const districtInput = document.getElementById("eligibilityDistrict");
    const highestGradeInput = document.getElementById("highestGrade");
    const attendanceInput = document.getElementById("attendanceInPerson");
    const commitmentInput = document.getElementById("commitToComplete");
    const phoneInput = document.getElementById("phone");

    const eligibilityStatusInput = document.getElementById("eligibilityStatus");
    const eligibilityReasonsInput = document.getElementById("eligibilityReasons");
    const eligibilityCheckedAtInput = document.getElementById("eligibilityCheckedAt");

    const eligibilityResult = document.getElementById("eligibilityResult");
    const eligibilityResultTitle = document.getElementById("eligibilityResultTitle");
    const eligibilityResultCopy = document.getElementById("eligibilityResultCopy");

    const contactPage = document.getElementById("contactPage");
    const additionalPage = document.getElementById("additionalPage");
    const previousCoursesInput = document.getElementById("previousCourses");
    const additionalPageTextareas = additionalPage
      ? Array.from(additionalPage.querySelectorAll("textarea"))
      : [];
    const schoolInput = document.getElementById("school");
    const schoolOtherWrap = document.getElementById("schoolOtherWrap");
    const schoolOtherInput = document.getElementById("schoolOther");
    const qualificationInput = document.getElementById("qualification");
    const qualificationOtherWrap = document.getElementById("qualificationOtherWrap");
    const qualificationOtherInput = document.getElementById("qualificationOther");
    const workTypeInput = document.getElementById("workType");
    const incomeModeInput = document.getElementById("incomeMode");
    const incomeModeWrap = incomeModeInput ? incomeModeInput.closest("div") : null;
    const incomeAmountWrap = document.getElementById("incomeAmountWrap");
    const incomeAmountInput = document.getElementById("incomeAmount");
    const incomeCurrencyWrap = document.getElementById("incomeCurrencyWrap");
    const incomeCurrencyInput = document.getElementById("incomeCurrency");
    const incomeCurrencyOtherWrap = document.getElementById("incomeCurrencyOtherWrap");
    const incomeCurrencyOtherInput = document.getElementById("incomeCurrencyOther");
    const computerLevelInput = document.getElementById("computerLevel");
    const computerBasicWrap = document.getElementById("computerBasicWrap");
    const computerAdvancedWrap = document.getElementById("computerAdvancedWrap");
    const computerExpertWrap = document.getElementById("computerExpertWrap");
    const incompleteHistoryInput = document.getElementById("incompleteHistory");
    const incompleteReasonWrap = document.getElementById("incompleteReasonWrap");
    const incompleteReasonInput = document.getElementById("incompleteReason");
    const durationInput = document.getElementById("duration");

    const phoneCountryCodeInput = document.getElementById("phoneCountryCode");
    const emergencyCountryCode1Input = document.getElementById("emergencyCountryCode1");
    const emergencyPhone1Input = document.getElementById("emergencyPhone1");
    const emergencyCountryCode2Input = document.getElementById("emergencyCountryCode2");
    const emergencyPhone2Input = document.getElementById("emergencyPhone2");
    const emergencyOwner2Input = document.getElementById("emergencyOwner2");
    const emergencyRelation2Input = document.getElementById("emergencyRelation2");

    let currentPage = 0;
    let provinceDistrictMap = {};
    let pdfDownloadLogged = false;
    let pdfUploadInProgress = false;
    let notEligibleSubmissionLogged = false;
    let policyDeclinedSubmissionLogged = false;
    let submissionClosedLandingTracked = false;
    let submissionInProgress = false;
    let lastProvinceSelection = "";
    let suppressEligibilityAutoNext = false;
    let bilingualFormatObserver = null;
    let bilingualFormatScheduled = false;
    let bilingualFormatInProgress = false;
    let touchScrollGuardStarted = false;
    let touchGestureStartPoint = null;
    let mobileFocusAssistSuspendUntil = 0;
    let lastTouchMoveAt = 0;
    let lastScrollAt = 0;
    const POLICY_PAGE_INDEX = pages.indexOf(policyPage);
    const WELCOME_PAGE_INDEX = pages.indexOf(welcomePage);
    const NOT_ELIGIBLE_PAGE_INDEX = pages.indexOf(notEligiblePage);
    const POLICY_DECLINED_PAGE_INDEX = pages.indexOf(policyDeclinedPage);
    const SUBMISSION_CLOSED_PAGE_INDEX = pages.indexOf(submissionClosedPage);
    const ELIGIBILITY_PAGE_INDEX = pages.indexOf(eligibilityPage);
    const REVIEW_PAGE_INDEX = pages.indexOf(reviewPage);
    const CONTACT_PAGE_INDEX = pages.indexOf(contactPage);
    const RESULT_PAGE_INDEXES = [NOT_ELIGIBLE_PAGE_INDEX, POLICY_DECLINED_PAGE_INDEX, SUBMISSION_CLOSED_PAGE_INDEX].filter(function (pageIndex) {
      return pageIndex >= 0;
    });
    const TOTAL_FORM_PAGES = pages.length - RESULT_PAGE_INDEXES.length;

    const PHONE_RULES = {
      "+66": { regex: /^\d{8,10}$/ },
      "+95": { regex: /^\d{7,11}$/ },
      "+1": { regex: /^\d{10}$/ },
      "+60": { regex: /^\d{8,11}$/ },
      "+84": { regex: /^\d{8,11}$/ },
      "+91": { regex: /^\d{10}$/ },
      "+000": { regex: /^\d{6,14}$/ }
    };
    const TOUCH_SCROLL_GESTURE_THRESHOLD_PX = 10;
    const MOBILE_FOCUS_ASSIST_SUSPEND_MS = 260;
    const MOBILE_FOCUS_ASSIST_SCROLL_COOLDOWN_MS = 140;
    const PDF_UPLOAD_MAX_BYTES = 10 * 1024 * 1024;

    const THAI_PROVINCE_DATA_URL = "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api/v1/province.json";
    const THAI_AMPHURE_DATA_URL = "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api/v1/amphure.json";

    const THAI_PROVINCES = [
      "Amnat Charoen",
      "Ang Thong",
      "Bangkok",
      "Bueng Kan",
      "Buriram",
      "Chachoengsao",
      "Chai Nat",
      "Chaiyaphum",
      "Chanthaburi",
      "Chiang Mai",
      "Chiang Rai",
      "Chonburi",
      "Chumphon",
      "Kalasin",
      "Kamphaeng Phet",
      "Kanchanaburi",
      "Khon Kaen",
      "Krabi",
      "Lampang",
      "Lamphun",
      "Loei",
      "Lopburi",
      "Mae Hong Son",
      "Maha Sarakham",
      "Mukdahan",
      "Nakhon Nayok",
      "Nakhon Pathom",
      "Nakhon Phanom",
      "Nakhon Ratchasima",
      "Nakhon Sawan",
      "Nakhon Si Thammarat",
      "Nan",
      "Narathiwat",
      "Nong Bua Lamphu",
      "Nong Khai",
      "Nonthaburi",
      "Pathum Thani",
      "Pattani",
      "Phang Nga",
      "Phatthalung",
      "Phayao",
      "Phetchabun",
      "Phetchaburi",
      "Phichit",
      "Phitsanulok",
      "Phrae",
      "Phuket",
      "Prachinburi",
      "Prachuap Khiri Khan",
      "Ranong",
      "Ratchaburi",
      "Rayong",
      "Roi Et",
      "Sa Kaeo",
      "Sakon Nakhon",
      "Samut Prakan",
      "Samut Sakhon",
      "Samut Songkhram",
      "Saraburi",
      "Satun",
      "Sing Buri",
      "Sisaket",
      "Songkhla",
      "Sukhothai",
      "Suphan Buri",
      "Surat Thani",
      "Surin",
      "Tak",
      "Trang",
      "Trat",
      "Ubon Ratchathani",
      "Udon Thani",
      "Uthai Thani",
      "Uttaradit",
      "Yala",
      "Yasothon"
    ];

    const FALLBACK_PROVINCE_DISTRICTS = {
      Tak: [
        "Mueang Tak",
        "Ban Tak",
        "Sam Ngao",
        "Mae Ramat",
        "Tha Song Yang",
        "Mae Sot",
        "Phop Phra",
        "Umphang",
        "Wang Chao"
      ]
    };

    provinceDistrictMap = Object.assign({}, FALLBACK_PROVINCE_DISTRICTS);

    function toMyanmarNumber(value) {
      const digits = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];
      return String(value).replace(/\d/g, function (digit) {
        return digits[Number(digit)] || digit;
      });
    }

    function cleanLabelText(rawText) {
      return String(rawText || "")
        .replace(/\*/g, "")
        .replace(/\s+/g, " ")
        .trim();
    }

    function getSafeHttpUrl(rawUrl) {
      const urlText = String(rawUrl || "").trim();
      if (!urlText) {
        return "";
      }
      try {
        const parsed = new URL(urlText, String(window.location && window.location.href || ""));
        const protocol = String(parsed.protocol || "").toLowerCase();
        if (protocol === "http:" || protocol === "https:") {
          return parsed.href;
        }
      } catch (error) {}
      return "";
    }

    function ensureMobileLayoutClass() {
      try {
        const root = document.documentElement;
        if (!root) return;
        const ua = navigator.userAgent || "";
        const touch = "ontouchstart" in window || (navigator.maxTouchPoints || 0) > 0;
        const screenWidth = window.screen && window.screen.width ? window.screen.width : 9999;
        const width = Math.min(window.innerWidth || 9999, screenWidth);
        const mobileUa = /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile/i.test(ua);
        if (touch && (width <= 1024 || mobileUa)) {
          root.classList.add("force-mobile");
        } else {
          root.classList.remove("force-mobile");
        }
      } catch (err) {}
    }

    function enableTouchPinchZoomAssist() {
      if (!isTouchLikeDevice() || !document || typeof document.addEventListener !== "function") {
        return;
      }

      document.addEventListener("touchstart", function (event) {
        if (!event || !event.touches || event.touches.length < 2) {
          return;
        }
        const active = document.activeElement;
        const tag = active && active.tagName ? String(active.tagName).toUpperCase() : "";
        if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") {
          if (typeof active.blur === "function") {
            active.blur();
          }
        }
      }, { passive: true });
    }

    function suspendMobileFocusAssist(durationMs) {
      const duration = Math.max(0, Number(durationMs || 0));
      const nextUntil = Date.now() + duration;
      if (nextUntil > mobileFocusAssistSuspendUntil) {
        mobileFocusAssistSuspendUntil = nextUntil;
      }
    }

    function isViewportZoomedIn() {
      if (typeof window === "undefined" || !window.visualViewport) {
        return false;
      }
      const scale = Number(window.visualViewport.scale || 1);
      return Number.isFinite(scale) && scale > 1.02;
    }

    function shouldSuppressMobileFocusAssist() {
      if (!shouldUseMobileAutoAdvance()) {
        return true;
      }

      const now = Date.now();
      if (now < mobileFocusAssistSuspendUntil) {
        return true;
      }
      if (now - lastTouchMoveAt < MOBILE_FOCUS_ASSIST_SCROLL_COOLDOWN_MS) {
        return true;
      }
      if (now - lastScrollAt < MOBILE_FOCUS_ASSIST_SCROLL_COOLDOWN_MS) {
        return true;
      }
      if (isViewportZoomedIn()) {
        return true;
      }
      return false;
    }

    function startTouchScrollGuard() {
      if (
        touchScrollGuardStarted ||
        !isTouchLikeDevice() ||
        !form ||
        typeof form.addEventListener !== "function"
      ) {
        return;
      }

      touchScrollGuardStarted = true;

      form.addEventListener("touchstart", function (event) {
        const touch = event && event.touches && event.touches[0];
        if (!touch) {
          touchGestureStartPoint = null;
          return;
        }

        touchGestureStartPoint = {
          x: Number(touch.clientX || 0),
          y: Number(touch.clientY || 0),
          moved: false
        };
      }, { passive: true });

      form.addEventListener("touchmove", function (event) {
        const touch = event && event.touches && event.touches[0];
        if (!touch || !touchGestureStartPoint) {
          return;
        }

        const deltaX = Math.abs(Number(touch.clientX || 0) - touchGestureStartPoint.x);
        const deltaY = Math.abs(Number(touch.clientY || 0) - touchGestureStartPoint.y);
        if (
          deltaX < TOUCH_SCROLL_GESTURE_THRESHOLD_PX &&
          deltaY < TOUCH_SCROLL_GESTURE_THRESHOLD_PX
        ) {
          return;
        }

        touchGestureStartPoint.moved = true;
        lastTouchMoveAt = Date.now();
        suspendMobileFocusAssist(MOBILE_FOCUS_ASSIST_SUSPEND_MS);
      }, { passive: true });

      form.addEventListener("touchend", function () {
        if (touchGestureStartPoint && touchGestureStartPoint.moved) {
          suspendMobileFocusAssist(MOBILE_FOCUS_ASSIST_SCROLL_COOLDOWN_MS);
        }
        touchGestureStartPoint = null;
      }, { passive: true });

      form.addEventListener("touchcancel", function () {
        suspendMobileFocusAssist(MOBILE_FOCUS_ASSIST_SCROLL_COOLDOWN_MS);
        touchGestureStartPoint = null;
      }, { passive: true });

      window.addEventListener("scroll", function () {
        lastScrollAt = Date.now();
      }, { passive: true });
    }

    function parseInlineBilingualPair(value) {
      const text = String(value || "").replace(/\s+/g, " ").trim();
      if (!text) {
        return null;
      }
      const myanmarRegex = /[\u1000-\u109F\uA9E0-\uA9FF\uAA60-\uAA7F]/;
      function isEnglishSegment(segment) {
        const normalized = String(segment || "").trim();
        return !!normalized && !myanmarRegex.test(normalized);
      }

      const slashParenMarker = " / (";
      const slashParenIndex = text.lastIndexOf(slashParenMarker);
      if (slashParenIndex > 0 && text.charAt(text.length - 1) === ")") {
        const englishWithPotentialSlash = text.slice(0, slashParenIndex).trim();
        const burmese = text.slice(slashParenIndex + slashParenMarker.length, -1).trim();
        if (isEnglishSegment(englishWithPotentialSlash) && burmese && myanmarRegex.test(burmese)) {
          return {
            english: englishWithPotentialSlash,
            burmese: burmese
          };
        }
      }

      const parenIndex = text.lastIndexOf(" (");
      if (parenIndex > 0 && text.charAt(text.length - 1) === ")") {
        const englishWithPotentialSlash = text.slice(0, parenIndex).trim();
        const burmese = text.slice(parenIndex + 2, -1).trim();
        if (isEnglishSegment(englishWithPotentialSlash) && burmese && myanmarRegex.test(burmese)) {
          return {
            english: englishWithPotentialSlash,
            burmese: burmese
          };
        }
      }

      const slashMarker = " / ";
      const slashIndex = text.lastIndexOf(slashMarker);
      if (slashIndex > 0) {
        const englishWithPotentialSlash = text.slice(0, slashIndex).trim();
        const burmese = text.slice(slashIndex + slashMarker.length).trim();
        if (isEnglishSegment(englishWithPotentialSlash) && burmese && myanmarRegex.test(burmese)) {
          return {
            english: englishWithPotentialSlash,
            burmese: burmese
          };
        }
      }

      return null;
    }

    function unwrapStandaloneMyanmarText(value) {
      const text = String(value || "").replace(/\s+/g, " ").trim();
      if (!text) {
        return null;
      }

      const cleaned = text.replace(/^\/\s*/, "").trim();
      const wrapped = cleaned.match(/^\((.+)\)$/);
      if (!wrapped) {
        return null;
      }

      const unwrapped = String(wrapped[1] || "").trim();
      const myanmarRegex = /[\u1000-\u109F\uA9E0-\uA9FF\uAA60-\uAA7F]/;
      if (!unwrapped || !myanmarRegex.test(unwrapped)) {
        return null;
      }
      return unwrapped;
    }

    function normalizeInlineBilingualText(value, separator) {
      const parsed = parseInlineBilingualPair(value);
      if (!parsed) {
        const standaloneMyanmar = unwrapStandaloneMyanmarText(value);
        return standaloneMyanmar || String(value || "");
      }
      const joiner = typeof separator === "string" ? separator : "\n";
      return parsed.english + joiner + parsed.burmese;
    }

    function normalizeFormControlBilingualText() {
      if (!document) {
        return;
      }

      const optionElements = document.querySelectorAll("option");
      optionElements.forEach(function (optionElement) {
        const original = optionElement.textContent;
        const normalized = normalizeInlineBilingualText(original, " ");
        if (normalized !== original) {
          optionElement.textContent = normalized;
        }
      });

      const placeholderElements = document.querySelectorAll("input[placeholder], textarea[placeholder]");
      placeholderElements.forEach(function (element) {
        const original = String(element.getAttribute("placeholder") || "");
        const normalized = normalizeInlineBilingualText(original, " ");
        if (normalized !== original) {
          element.setAttribute("placeholder", normalized);
        }
      });

      const titleElements = document.querySelectorAll("[title]");
      titleElements.forEach(function (element) {
        const original = String(element.getAttribute("title") || "");
        const normalized = normalizeInlineBilingualText(original, " ");
        if (normalized !== original) {
          element.setAttribute("title", normalized);
        }
      });
    }

    function formatInlineBilingualText() {
      if (!document || !document.body || typeof document.createTreeWalker !== "function") {
        return;
      }
      const showText = typeof NodeFilter !== "undefined" ? NodeFilter.SHOW_TEXT : 4;
      const walker = document.createTreeWalker(document.body, showText, null);
      const blockedTags = new Set(["SCRIPT", "STYLE", "TEXTAREA", "OPTION", "INPUT"]);
      const replacements = [];
      let node = walker.nextNode();

      while (node) {
        const raw = String(node.nodeValue || "");
        const parent = node.parentElement;
        if (!parent || !raw) {
          node = walker.nextNode();
          continue;
        }

        const parentTag = String(parent.tagName || "").toUpperCase();
        if (blockedTags.has(parentTag) || parent.closest("script, style, textarea, option")) {
          node = walker.nextNode();
          continue;
        }

        if (parent.querySelector(".en-line, .my-line")) {
          node = walker.nextNode();
          continue;
        }

        const parsed = parseInlineBilingualPair(raw);
        if (parsed) {
          replacements.push({
            node: node,
            parent: parent,
            english: parsed.english,
            burmese: parsed.burmese
          });
          node = walker.nextNode();
          continue;
        }

        const standaloneMyanmar = unwrapStandaloneMyanmarText(raw);
        if (standaloneMyanmar) {
          replacements.push({
            node: node,
            parent: parent,
            standaloneMyanmar: standaloneMyanmar
          });
        }
        node = walker.nextNode();
      }

      replacements.forEach(function (item) {
        if (item.standaloneMyanmar) {
          item.node.nodeValue = item.standaloneMyanmar;
          item.parent.classList.add("my-auto");
          return;
        }

        if (!item.english || !item.burmese) {
          return;
        }

        const fragment = document.createDocumentFragment();
        const englishSpan = document.createElement("span");
        englishSpan.className = "en-line";
        englishSpan.textContent = item.english;

        const burmeseSpan = document.createElement("span");
        burmeseSpan.className = "my-line my";
        burmeseSpan.textContent = item.burmese;

        fragment.appendChild(englishSpan);
        fragment.appendChild(burmeseSpan);
        item.node.parentNode.replaceChild(fragment, item.node);
        item.parent.classList.add("bilingual-stack");
      });
    }

    function scheduleAutoBilingualFormatting() {
      if (bilingualFormatScheduled) {
        return;
      }
      bilingualFormatScheduled = true;

      window.setTimeout(function () {
        bilingualFormatScheduled = false;
        if (bilingualFormatInProgress) {
          return;
        }

        bilingualFormatInProgress = true;
        try {
          normalizeFormControlBilingualText();
          formatInlineBilingualText();
          markMyanmarTextElements();
        } finally {
          bilingualFormatInProgress = false;
        }
      }, 0);
    }

    function startAutoBilingualFormatting() {
      if (!document || !document.body || typeof MutationObserver === "undefined") {
        return;
      }
      if (bilingualFormatObserver) {
        return;
      }

      bilingualFormatObserver = new MutationObserver(function (mutations) {
        if (bilingualFormatInProgress) {
          return;
        }
        for (const mutation of mutations) {
          if (mutation.type === "characterData") {
            scheduleAutoBilingualFormatting();
            return;
          }
          if (mutation.type === "childList") {
            if ((mutation.addedNodes && mutation.addedNodes.length) || (mutation.removedNodes && mutation.removedNodes.length)) {
              scheduleAutoBilingualFormatting();
              return;
            }
          }
        }
      });

      bilingualFormatObserver.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    function markMyanmarTextElements() {
      if (!document || !document.body || typeof document.createTreeWalker !== "function") {
        return;
      }
      const myanmarRegex = /[\u1000-\u109F\uA9E0-\uA9FF\uAA60-\uAA7F]/;
      const showText = typeof NodeFilter !== "undefined" ? NodeFilter.SHOW_TEXT : 4;
      const walker = document.createTreeWalker(document.body, showText, null);
      const touched = new Set();
      let node = walker.nextNode();
      while (node) {
        const text = String(node.nodeValue || "");
        if (text && myanmarRegex.test(text)) {
          const parent = node.parentElement;
          if (parent) {
            const tag = String(parent.tagName || "").toUpperCase();
            if (
              tag !== "SCRIPT" &&
              tag !== "STYLE" &&
              tag !== "INPUT" &&
              tag !== "TEXTAREA" &&
              tag !== "OPTION"
            ) {
              if (!touched.has(parent)) {
                parent.classList.add("my-auto");
                touched.add(parent);
              }
            }
          }
        }
        node = walker.nextNode();
      }
    }

    function toggleConditionalField(wrapper, input, show, required) {
      if (!wrapper || !input) return;
      wrapper.style.display = show ? "block" : "none";
      input.disabled = !show;
      input.required = !!required && show;
      if (!show) {
        input.value = "";
        input.setCustomValidity("");
        input.classList.remove("is-filled");
        input.classList.remove("is-invalid");
        input.removeAttribute("aria-invalid");
        if (input.dataset.errorId) {
          const errorEl = document.getElementById(input.dataset.errorId);
          if (errorEl) {
            errorEl.textContent = "";
          }
        }
      }
    }

    function normalizePhoneDigits(value) {
      return String(value || "").replace(/[^\d]/g, "");
    }

    function validatePhoneField(codeSelect, phoneField, requiredField) {
      if (!phoneField) return true;
      const digits = normalizePhoneDigits(phoneField.value);
      const required = !!requiredField;

      if (!digits) {
        phoneField.setCustomValidity(required ? "Please enter a phone number. / (ဖုန်းနံပါတ်ဖြည့်ပါ။)" : "");
        return !required;
      }

      const code = codeSelect ? String(codeSelect.value || "") : "";
      const rule = PHONE_RULES[code] || { regex: /^\d{6,14}$/ };
      if (!rule.regex.test(digits)) {
        phoneField.setCustomValidity("Phone format does not match selected country code. / (ရွေးထားသော နိုင်ငံကုဒ်နှင့် ကိုက်ညီသော ဖုန်းနံပါတ်ဖြည့်ပါ။)");
        return false;
      }

      phoneField.setCustomValidity("");
      return true;
    }

    function toggleSchoolOther() {
      toggleConditionalField(
        schoolOtherWrap,
        schoolOtherInput,
        !!schoolInput && schoolInput.value === "other",
        true
      );
    }

    function toggleQualificationOther() {
      toggleConditionalField(
        qualificationOtherWrap,
        qualificationOtherInput,
        !!qualificationInput && qualificationInput.value === "other",
        true
      );
    }

    function toggleIncomeFields() {
      const workType = String(workTypeInput && workTypeInput.value || "");
      const incomeNotRelevant = workType === "Student" || workType === "No work experience";
      toggleConditionalField(
        incomeModeWrap,
        incomeModeInput,
        !incomeNotRelevant,
        false
      );

      const mode = String(incomeModeInput && incomeModeInput.value || "");
      const showIncomeDetails =
        !incomeNotRelevant &&
        (mode === "family_support" || mode === "daily" || mode === "monthly");
      const incomeRequired = !incomeNotRelevant && (mode === "daily" || mode === "monthly");

      toggleConditionalField(
        incomeAmountWrap,
        incomeAmountInput,
        showIncomeDetails,
        incomeRequired
      );

      toggleConditionalField(
        incomeCurrencyWrap,
        incomeCurrencyInput,
        showIncomeDetails,
        incomeRequired
      );

      const showCurrencyOther =
        showIncomeDetails &&
        !!incomeCurrencyInput &&
        incomeCurrencyInput.value === "other";

      toggleConditionalField(
        incomeCurrencyOtherWrap,
        incomeCurrencyOtherInput,
        showCurrencyOther,
        showCurrencyOther
      );
    }

    function formatIncomeAmount() {
      if (!incomeAmountInput) return;
      const raw = String(incomeAmountInput.value || "");
      const sanitized = raw.replace(/[^\d.]/g, "");
      if (!sanitized) {
        incomeAmountInput.value = "";
        return;
      }

      const parts = sanitized.split(".");
      const intPart = parts[0].replace(/^0+(?=\d)/, "");
      const decimalPart = parts.length > 1 ? parts.slice(1).join("").slice(0, 2) : "";
      const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      incomeAmountInput.value = decimalPart ? formattedInt + "." + decimalPart : formattedInt;
    }

    function autoResizeTextarea(textarea) {
      if (!textarea) return;
      textarea.style.height = "auto";
      textarea.style.height = String(textarea.scrollHeight) + "px";
    }

    function setComputerGroupVisibility(wrapper, show) {
      if (!wrapper) return;
      wrapper.style.display = show ? "block" : "none";
      const checks = wrapper.querySelectorAll('input[type="checkbox"]');
      checks.forEach(function (check) {
        check.disabled = !show;
        if (!show) {
          check.checked = false;
        }
      });
    }

    function toggleComputerSkillGroups() {
      const level = String(computerLevelInput && computerLevelInput.value || "");
      setComputerGroupVisibility(computerBasicWrap, level === "basic");
      setComputerGroupVisibility(computerAdvancedWrap, level === "advanced");
      setComputerGroupVisibility(computerExpertWrap, level === "expert");
    }

    function toggleIncompleteReason() {
      const value = String(incompleteHistoryInput && incompleteHistoryInput.value || "");
      const show = value === "Yes, once" || value === "Yes, more than once";
      toggleConditionalField(incompleteReasonWrap, incompleteReasonInput, show, show);
    }

    function syncEmergencyContactTwoRequirements() {
      if (!emergencyCountryCode2Input || !emergencyPhone2Input || !emergencyOwner2Input || !emergencyRelation2Input) {
        return;
      }

      // Contact 2 is always non-mandatory.
      emergencyCountryCode2Input.required = false;
      emergencyPhone2Input.required = false;
      emergencyOwner2Input.required = false;
      emergencyRelation2Input.required = false;
      emergencyPhone2Input.setCustomValidity("");
    }

    function validatePhoneSet() {
      syncEmergencyContactTwoRequirements();

      const personalValid = validatePhoneField(phoneCountryCodeInput, phoneInput, true);
      const emergencyOneValid = validatePhoneField(emergencyCountryCode1Input, emergencyPhone1Input, true);
      const emergencyTwoValid = validatePhoneField(emergencyCountryCode2Input, emergencyPhone2Input, false);
      return personalValid && emergencyOneValid && emergencyTwoValid;
    }

    function syncDynamicVisibilityRules() {
      toggleSchoolOther();
      toggleQualificationOther();
      toggleIncomeFields();
      toggleComputerSkillGroups();
      toggleIncompleteReason();
      syncEmergencyContactTwoRequirements();
    }

    function isUserField(field) {
      if (!field) return false;
      if (field.type === "hidden" || field.disabled) return false;
      if (field.type === "button" || field.type === "submit" || field.type === "reset") return false;
      return true;
    }

    function isFieldFilled(field) {
      if (!field) return false;
      if (field.type === "checkbox" || field.type === "radio") {
        return !!field.checked;
      }
      return String(field.value || "").trim() !== "";
    }

    function syncFilledStateForField(field) {
      if (!field) return;
      if (field.type === "hidden" || field.disabled) {
        field.classList.remove("is-filled");
        return;
      }
      if (field.type === "button" || field.type === "submit" || field.type === "reset") {
        return;
      }
      field.classList.toggle("is-filled", isFieldFilled(field));
    }

    function syncFilledStateAll() {
      const fields = form.querySelectorAll("input, select, textarea");
      fields.forEach(function (field) {
        syncFilledStateForField(field);
      });
    }

    function getFieldErrorElement(field) {
      const existingId = field.dataset.errorId;
      if (existingId) {
        const existingEl = document.getElementById(existingId);
        if (existingEl) return existingEl;
      }

      const errorEl = document.createElement("p");
      errorEl.className = "field-help field-error";
      errorEl.setAttribute("aria-live", "polite");
      const stableId = (field.id || field.name || "field") + "-error";
      errorEl.id = stableId;
      field.dataset.errorId = stableId;

      if (field.type === "checkbox" || field.type === "radio") {
        const parentLabel = field.closest("label");
        if (parentLabel && parentLabel.parentNode) {
          parentLabel.parentNode.insertBefore(errorEl, parentLabel.nextSibling);
        } else {
          field.insertAdjacentElement("afterend", errorEl);
        }
      } else {
        field.insertAdjacentElement("afterend", errorEl);
      }

      return errorEl;
    }

    function getFieldErrorMessage(field) {
      if (!field || field.checkValidity()) {
        return "";
      }

      if (field.validity && field.validity.valueMissing) {
        return "This field is required. / (ဤအကွက်ကို မဖြစ်မနေ ဖြည့်ပါ။)";
      }

      return field.validationMessage || "Please check this field. / (ဤအကွက်ကို ပြန်စစ်ပါ။)";
    }

    function setFieldErrorState(field, showError) {
      if (!isUserField(field)) {
        return true;
      }

      const valid = field.checkValidity();
      const shouldShow = !!showError && !valid;
      const errorEl = shouldShow || field.dataset.errorId
        ? getFieldErrorElement(field)
        : null;

      field.classList.toggle("is-invalid", shouldShow);
      if (shouldShow) {
        field.setAttribute("aria-invalid", "true");
        if (errorEl) {
          errorEl.textContent = getFieldErrorMessage(field);
        }
      } else {
        field.removeAttribute("aria-invalid");
        if (errorEl) {
          errorEl.textContent = "";
        }
      }

      return valid;
    }

    function clearAllFieldErrors() {
      const fields = form.querySelectorAll("input, select, textarea");
      fields.forEach(function (field) {
        if (!isUserField(field)) return;
        field.classList.remove("is-invalid");
        field.removeAttribute("aria-invalid");
        if (field.dataset.errorId) {
          const errorEl = document.getElementById(field.dataset.errorId);
          if (errorEl) {
            errorEl.textContent = "";
          }
        }
      });
    }

    function getFieldLabel(field) {
      if (field.dataset && field.dataset.reviewLabel) {
        return cleanLabelText(field.dataset.reviewLabel);
      }

      if (field.id) {
        const label = form.querySelector('label[for="' + field.id + '"]');
        if (label) {
          return cleanLabelText(label.textContent);
        }
      }

      const parentLabel = field.closest("label");
      if (parentLabel) {
        return cleanLabelText(parentLabel.textContent);
      }

      return cleanLabelText(field.name || field.id || "Field");
    }

    function getFieldValueForReview(field) {
      if (field.type === "checkbox") {
        return field.checked ? "Yes / (ဟုတ်ကဲ့)" : "No / (မဟုတ်ပါ)";
      }

      if (field.type === "radio") {
        if (!field.name) {
          return field.checked ? String(field.value || "").trim() : "Not provided / (မဖြည့်ထားပါ)";
        }
        const safeName = String(field.name).replace(/"/g, '\\"');
        const groupRadios = form.querySelectorAll('input[type="radio"][name="' + safeName + '"]');
        let checkedRadio = null;
        for (const option of groupRadios) {
          if (option && option.checked) {
            checkedRadio = option;
            break;
          }
        }
        if (!checkedRadio) {
          return "Not provided / (မဖြည့်ထားပါ)";
        }
        const reviewValue = checkedRadio.dataset && checkedRadio.dataset.reviewValue
          ? String(checkedRadio.dataset.reviewValue).trim()
          : "";
        return reviewValue || String(checkedRadio.value || "").trim() || "Not provided / (မဖြည့်ထားပါ)";
      }

      if (field.tagName === "SELECT") {
        const selectedOption = field.options[field.selectedIndex];
        if (!selectedOption || !field.value) {
          return "Not provided / (မဖြည့်ထားပါ)";
        }
        return selectedOption.textContent.trim();
      }

      const value = String(field.value || "").trim();
      return value || "Not provided / (မဖြည့်ထားပါ)";
    }

    function renderReviewSummary() {
      reviewSummary.innerHTML = "";

      for (let pageIndex = 0; pageIndex < REVIEW_PAGE_INDEX; pageIndex += 1) {
        if (pageIndex === NOT_ELIGIBLE_PAGE_INDEX) {
          continue;
        }

        const page = pages[pageIndex];
        const seenRadioGroups = new Set();
        const fields = Array.from(page.querySelectorAll("input, select, textarea")).filter(function (field) {
          if (field.disabled) return false;
          if (field.type === "hidden") return false;
          if (field.type === "button" || field.type === "submit" || field.type === "reset") return false;
          if (field.type === "radio") {
            const groupName = String(field.name || "");
            if (!groupName || seenRadioGroups.has(groupName)) {
              return false;
            }
            seenRadioGroups.add(groupName);
          }
          return true;
        });

        if (!fields.length) {
          continue;
        }

        const group = document.createElement("section");
        group.className = "review-group";

        const groupTitle = document.createElement("h4");
        groupTitle.className = "review-group-title";
        groupTitle.textContent = page.dataset.pageTitle || "Page " + String(pageIndex + 1);
        group.appendChild(groupTitle);

        fields.forEach(function (field) {
          const row = document.createElement("div");
          row.className = "review-row is-clickable";
          row.setAttribute("role", "button");
          row.setAttribute("tabindex", "0");

          const label = document.createElement("p");
          label.className = "review-label";
          label.textContent = getFieldLabel(field);

          const value = document.createElement("p");
          value.className = "review-value";
          value.textContent = getFieldValueForReview(field);

          row.appendChild(label);
          row.appendChild(value);
          row.addEventListener("click", function () {
            setPage(pageIndex);
          });
          row.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setPage(pageIndex);
            }
          });
          group.appendChild(row);
        });

        reviewSummary.appendChild(group);
      }

      formatInlineBilingualText();
      markMyanmarTextElements();
    }

    function getSelectedApplicationMode() {
      return String(applicationModeInput.value || "").trim();
    }

    function showApplicationModeError(show) {
      applicationModeError.style.display = show ? "block" : "none";
    }

    function syncApplicationModeCards() {
      const mode = getSelectedApplicationMode();
      applicationModeCards.forEach(function (card) {
        const selected = String(card.dataset.mode || "") === mode;
        card.classList.toggle("is-selected", selected);
        card.setAttribute("aria-pressed", selected ? "true" : "false");
      });
    }

    function setApplicationMode(mode) {
      const normalizedMode = mode === "online" || mode === "pdf" ? mode : "";
      applicationModeInput.value = normalizedMode;
      syncApplicationModeCards();
    }

    function renderApplicationModePanel() {
      const mode = getSelectedApplicationMode();
      syncApplicationModeCards();

      if (!mode) {
        onlineModeNote.style.display = "none";
        pdfCard.style.display = "none";
        setPdfUploadEnabled(false);
        setPdfUploadStatus("");
        return;
      }

      if (mode === "online") {
        onlineModeNote.style.display = "block";
        pdfCard.style.display = "none";
        setPdfUploadEnabled(false);
        setPdfUploadStatus("");
        return;
      }

      onlineModeNote.style.display = "none";
      pdfCard.style.display = "block";
      setPdfUploadEnabled(true);
    }

    function syncLogoFormLink() {
      if (!logoFormLink) {
        return;
      }
      const resolvedUrl = TEMPLATE_WEB_APP_URL || LOCATION_WEB_APP_URL || GAS_URL;
      if (!resolvedUrl) {
        return;
      }
      logoFormLink.setAttribute("href", resolvedUrl);
    }

    function formatBytesForUi(bytes) {
      const size = Number(bytes || 0);
      if (!Number.isFinite(size) || size <= 0) {
        return "0 B";
      }
      const units = ["B", "KB", "MB", "GB"];
      const unitIndex = Math.min(Math.floor(Math.log(size) / Math.log(1024)), units.length - 1);
      const scaled = size / Math.pow(1024, unitIndex);
      const digits = unitIndex === 0 ? 0 : 1;
      return scaled.toFixed(digits) + " " + units[unitIndex];
    }

    function setPdfUploadStatus(message, isError) {
      if (!pdfUploadStatus) {
        return;
      }
      pdfUploadStatus.textContent = String(message || "");
      pdfUploadStatus.classList.toggle("is-error", !!isError);
    }

    function setPdfUploadEnabled(enabled) {
      const active = !!enabled && !pdfUploadInProgress;
      if (pdfUploadPanel) {
        pdfUploadPanel.classList.toggle("is-disabled", !active);
      }
      if (pdfApplicantNameInput) {
        pdfApplicantNameInput.disabled = !active;
      }
      if (pdfApplicantPhoneInput) {
        pdfApplicantPhoneInput.disabled = !active;
      }
      if (pdfFilledFileInput) {
        pdfFilledFileInput.disabled = !active;
      }
      if (pdfUploadSubmitBtn) {
        pdfUploadSubmitBtn.disabled = !active;
      }
    }

    function resetPdfUploadFields() {
      if (pdfApplicantNameInput) {
        pdfApplicantNameInput.value = "";
      }
      if (pdfApplicantPhoneInput) {
        pdfApplicantPhoneInput.value = "";
      }
      if (pdfFilledFileInput) {
        pdfFilledFileInput.value = "";
      }
      setPdfUploadStatus("");
    }

    function getSelectedPdfFile() {
      if (!pdfFilledFileInput || !pdfFilledFileInput.files || !pdfFilledFileInput.files.length) {
        return null;
      }
      return pdfFilledFileInput.files[0] || null;
    }

    function isPdfLikeFile(file) {
      if (!file) return false;
      const mime = String(file.type || "").toLowerCase();
      const name = String(file.name || "").toLowerCase();
      return mime === "application/pdf" || name.endsWith(".pdf");
    }

    function validatePdfUploadInput(showError) {
      const applicantName = String(pdfApplicantNameInput && pdfApplicantNameInput.value || "").trim();
      const file = getSelectedPdfFile();

      if (!applicantName) {
        if (showError) {
          setPdfUploadStatus(
            "Please enter applicant name before uploading.\n(ဖိုင်တင်မည့်မီ လျှောက်ထားသူအမည်ကို ဖြည့်ပါ။)",
            true
          );
        }
        return null;
      }

      if (!file) {
        if (showError) {
          setPdfUploadStatus(
            "Please choose a completed PDF file to upload.\n(ဖြည့်ပြီး PDF ဖိုင်ကို ရွေးချယ်ပါ။)",
            true
          );
        }
        return null;
      }

      if (!isPdfLikeFile(file)) {
        if (showError) {
          setPdfUploadStatus(
            "Only PDF files are supported.\n(PDF ဖိုင်သာ တင်နိုင်ပါသည်။)",
            true
          );
        }
        return null;
      }

      if (Number(file.size || 0) > PDF_UPLOAD_MAX_BYTES) {
        if (showError) {
          setPdfUploadStatus(
            "PDF file is too large. Maximum allowed size is " + formatBytesForUi(PDF_UPLOAD_MAX_BYTES) + ".\n" +
            "(PDF ဖိုင်အရွယ်အစားကြီးလွန်းပါသည်။ အများဆုံး " + formatBytesForUi(PDF_UPLOAD_MAX_BYTES) + " ထိတင်နိုင်ပါသည်။)",
            true
          );
        }
        return null;
      }

      if (showError) {
        setPdfUploadStatus("");
      }
      return file;
    }

    function readFileAsBase64(file) {
      return new Promise(function (resolve, reject) {
        try {
          const reader = new FileReader();
          reader.onload = function () {
            const result = String(reader.result || "");
            const commaIndex = result.indexOf(",");
            const base64 = commaIndex >= 0 ? result.slice(commaIndex + 1) : result;
            if (!base64) {
              reject(new Error("Could not read selected PDF file."));
              return;
            }
            resolve(base64);
          };
          reader.onerror = function () {
            reject(new Error("Failed to read selected PDF file."));
          };
          reader.readAsDataURL(file);
        } catch (error) {
          reject(error);
        }
      });
    }

    function buildPdfUploadPayload(file, fileBase64) {
      const nowIso = new Date().toISOString();
      const payload = collectFormData();
      const applicantName = String(pdfApplicantNameInput && pdfApplicantNameInput.value || "").trim();
      const applicantPhone = String(pdfApplicantPhoneInput && pdfApplicantPhoneInput.value || "").trim();

      payload.applicationMode = "pdf";
      payload.submissionType = "PDF Upload Submission";
      payload.submissionStatus = "PDF Uploaded - Awaiting Review";
      payload.officeSubmissionRequired = "No";
      payload.pdfUploadRequestedAt = nowIso;
      payload.pdfApplicantName = applicantName;
      payload.pdfApplicantPhone = applicantPhone;
      payload.pdfFileName = String(file && file.name || "application.pdf").trim();
      payload.pdfMimeType = String(file && file.type || "application/pdf").trim();
      payload.pdfSizeBytes = Number(file && file.size || 0);
      payload.pdfBase64 = fileBase64;
      payload.submittedAt = nowIso;

      if (!String(payload.fullName || "").trim() && applicantName) {
        payload.fullName = applicantName;
      }
      if (!String(payload.phone || "").trim() && applicantPhone) {
        payload.phone = applicantPhone;
      }

      return payload;
    }

    async function uploadCompletedPdf() {
      if (pdfUploadInProgress) {
        return;
      }
      if (isSubmissionClosedNow()) {
        openSubmissionClosedPage({
          tracking: {
            href: String(window.location && window.location.href || ""),
            label: "PDF upload attempted after cutoff",
            context: "pdf_upload_attempt"
          }
        });
        return;
      }
      if (getSelectedApplicationMode() !== "pdf") {
        setPdfUploadStatus(
          "Please choose PDF Application mode first.\n(PDF လျှောက်ထားမှုကို အရင်ရွေးချယ်ပါ။)",
          true
        );
        return;
      }
      if (!isAppsScriptRuntime() && !GAS_URL) {
        setPdfUploadStatus(
          "Submission service is not configured. Please contact admin.\n(တင်သွင်းမှုစနစ် မချိတ်ဆက်ရသေးပါ။ Admin ကို ဆက်သွယ်ပါ။)",
          true
        );
        return;
      }

      const selectedFile = validatePdfUploadInput(true);
      if (!selectedFile) {
        return;
      }

      pdfUploadInProgress = true;
      setPdfUploadEnabled(false);
      const originalBtnText = pdfUploadSubmitBtn ? pdfUploadSubmitBtn.textContent : "";
      if (pdfUploadSubmitBtn) {
        pdfUploadSubmitBtn.textContent = "Uploading... / (တင်နေသည်...)";
      }
      setPdfUploadStatus("Uploading completed PDF file... / (ဖြည့်ပြီး PDF ဖိုင်ကို တင်နေပါသည်...)", false);

      try {
        const fileBase64 = await readFileAsBase64(selectedFile);
        const payload = buildPdfUploadPayload(selectedFile, fileBase64);
        const response = await submitPayload(payload);

        if (!response || !response.ok) {
          const detail = response && response.error ? "\nError: " + String(response.error) : "";
          setPdfUploadStatus(
            "Could not upload PDF right now. Please try again.\n(လက်ရှိအချိန်တွင် PDF တင်မရသေးပါ။ ထပ်မံကြိုးစားပါ။)" + detail,
            true
          );
          return;
        }

        if (response.result && response.result.duplicate) {
          setPdfUploadStatus(
            "A matching PDF submission was received recently, so a new row was not added.\n" +
            "(အချက်အလက်တူညီသော PDF တင်သွင်းမှုကို မကြာသေးမီက လက်ခံရရှိထားသောကြောင့် row အသစ် မထည့်သွင်းပါ။)",
            true
          );
          return;
        }

        const savedUrl = getSafeHttpUrl(response.result && response.result.pdfFileUrl);
        const successHtml =
          "Your completed PDF was uploaded successfully.<br>(ဖြည့်ပြီး PDF ကို အောင်မြင်စွာ တင်ပြီးပါပြီ။)" +
          (savedUrl
            ? '<span class="status-contact-links"><a class="status-contact-link" href="' +
              savedUrl +
              '" target="_blank" rel="noopener noreferrer">Open uploaded PDF / (တင်ပြီး PDF ဖွင့်ရန်)</a></span>'
            : "");
        showStatusModal("PDF uploaded / (PDF တင်ပြီးပါပြီ)", successHtml, {
          html: true,
          resetToFirstPage: true
        });
      } catch (error) {
        const detail = String(error && error.message ? error.message : error);
        setPdfUploadStatus(
          "Could not upload PDF right now. Please try again.\n(လက်ရှိအချိန်တွင် PDF တင်မရသေးပါ။ ထပ်မံကြိုးစားပါ။)\n" + detail,
          true
        );
      } finally {
        pdfUploadInProgress = false;
        setPdfUploadEnabled(getSelectedApplicationMode() === "pdf");
        if (pdfUploadSubmitBtn) {
          pdfUploadSubmitBtn.textContent = originalBtnText || "Upload Filled PDF / (ဖြည့်ပြီး PDF တင်ရန်)";
        }
      }
    }

    function handleApplicationModeSelection(selectedMode) {
      const mode = selectedMode === "online" || selectedMode === "pdf" ? selectedMode : "";
      if (!mode) {
        return;
      }

      formError.textContent = "";
      setApplicationMode(mode);
      showApplicationModeError(false);
      renderApplicationModePanel();

      if (currentPage === WELCOME_PAGE_INDEX && mode === "online") {
        if (ELIGIBILITY_PAGE_INDEX >= 0) {
          setPage(ELIGIBILITY_PAGE_INDEX);
        } else {
          formError.textContent =
            "Could not open the online form page. Please refresh and try again.\n" +
            "(Online form စာမျက်နှာကို ဖွင့်မရပါ။ Refresh လုပ်ပြီး ထပ်မံကြိုးစားပါ။)";
        }
        return;
      }

      if (currentPage === WELCOME_PAGE_INDEX && mode === "pdf" && pdfDownloadLink) {
        window.setTimeout(function () {
          pdfDownloadLink.focus();
        }, 0);
      }

      updateActionVisibility();
    }

    function buildPdfTrackingPayload() {
      const nowIso = new Date().toISOString();
      const payload = collectFormData();
      payload.applicationMode = "pdf";
      payload.submissionType = "PDF Application";
      payload.submissionStatus = "PDF Downloaded - Send to Office Address";
      payload.officeSubmissionRequired = "Yes";
      payload.pdfDownloadRequestedAt = nowIso;
      payload.submittedAt = nowIso;
      return payload;
    }

    function buildNotEligibleTrackingPayload(result) {
      const reasonText = (result && Array.isArray(result.reasons) ? result.reasons : [])
        .map(function (item) {
          return item.en + " / " + item.my;
        })
        .join(" | ");

      const payload = collectFormData();
      payload.applicationMode = "online";
      payload.submissionType = "Online Application";
      payload.submissionStatus = "Not Eligible - Eligibility Check";
      payload.officeSubmissionRequired = "No";
      payload.notEligibleRecordedAt = new Date().toISOString();
      payload.eligibilityStatus = "Not Eligible";
      payload.eligibilityReasons = reasonText || payload.eligibilityReasons || "";
      return payload;
    }

    function buildPolicyDeclinedTrackingPayload() {
      const nowIso = new Date().toISOString();
      const payload = collectFormData();
      payload.applicationMode = "policy_declined";
      payload.submissionType = "Policy Declined";
      payload.submissionStatus = "Policy Declined - Do Not Agree";
      payload.officeSubmissionRequired = "No";
      payload.policyDeclinedRecordedAt = nowIso;
      payload.policyAgreement = "No";
      payload.eligibilityStatus = "Rejected - Policy Declined";
      payload.eligibilityReasons = "Applicant did not agree to Program Terms and Data Processing Policy.";
      payload.submittedAt = nowIso;
      return payload;
    }

    function setSelectOptions(selectElement, placeholderLabel, items, selectedValue) {
      selectElement.innerHTML = "";
      const placeholderOption = document.createElement("option");
      placeholderOption.value = "";
      placeholderOption.textContent = placeholderLabel;
      selectElement.appendChild(placeholderOption);

      const fragment = document.createDocumentFragment();
      items.forEach(function (item) {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        fragment.appendChild(option);
      });
      selectElement.appendChild(fragment);

      if (selectedValue && items.includes(selectedValue)) {
        selectElement.value = selectedValue;
      } else {
        selectElement.value = "";
      }
      syncFilledStateForField(selectElement);
    }

    function populateProvinceOptions(provinceList, selectedProvince) {
      const provinces = (provinceList && provinceList.length ? provinceList : THAI_PROVINCES)
        .slice()
        .sort(function (a, b) {
          return a.localeCompare(b);
        });
      setSelectOptions(
        provinceInput,
        "Select Province / (ပြည်နယ်ရွေးပါ)",
        provinces,
        selectedProvince || ""
      );
    }

    function populateDistrictOptionsForProvince(provinceName, selectedDistrict) {
      const province = String(provinceName || "").trim();
      if (!province) {
        setSelectOptions(
          districtInput,
          "Select District / (မြို့နယ်ရွေးပါ)",
          [],
          ""
        );
        return;
      }

      const districts = (provinceDistrictMap[province] || []).slice().sort(function (a, b) {
        return a.localeCompare(b);
      });

      if (!districts.length) {
        setSelectOptions(
          districtInput,
          "Select District / (မြို့နယ်ရွေးပါ)",
          ["Other district in selected province / (ရွေးထားသော ပြည်နယ်အတွင်း အခြားမြို့နယ်)"],
          selectedDistrict || ""
        );
        return;
      }

      setSelectOptions(
        districtInput,
        "Select District / (မြို့နယ်ရွေးပါ)",
        districts,
        selectedDistrict || ""
      );
    }

    function openSelectPicker(selectElement) {
      if (!selectElement) return;
      if (typeof selectElement.showPicker === "function") {
        try {
          selectElement.showPicker();
          return;
        } catch (error) {
          // Ignore and fall back for browsers that block showPicker.
        }
      }
      if (typeof selectElement.focus === "function") {
        selectElement.focus();
      }
      if (typeof selectElement.click === "function") {
        selectElement.click();
      }
    }

    function isTouchLikeDevice() {
      if (typeof window === "undefined") return false;
      const coarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
      return !!coarsePointer || "ontouchstart" in window;
    }

    function shouldUseMobileAutoAdvance() {
      return ENABLE_MOBILE_FIELD_AUTO_ADVANCE && isTouchLikeDevice();
    }

    function isFieldForMobileClarity(field) {
      if (!field || !isUserField(field)) return false;
      const tag = String(field.tagName || "").toUpperCase();
      if (tag !== "INPUT" && tag !== "SELECT" && tag !== "TEXTAREA") return false;
      if (field.type === "checkbox" || field.type === "radio" || field.type === "hidden" || field.type === "file") {
        return false;
      }
      return true;
    }

    function scrollFocusedFieldIntoView(field) {
      if (!field || typeof field.scrollIntoView !== "function") return;
      if (shouldSuppressMobileFocusAssist()) return;
      window.setTimeout(function () {
        if (shouldSuppressMobileFocusAssist()) return;
        try {
          field.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
        } catch (error) {
          field.scrollIntoView();
        }
      }, 140);
    }

    function focusFieldForMobileClarity(field) {
      if (!shouldUseMobileAutoAdvance()) return;
      if (!isFieldForMobileClarity(field)) return;
      if (shouldSuppressMobileFocusAssist()) return;
      field.classList.add("is-mobile-focused");
      scrollFocusedFieldIntoView(field);
    }

    function blurFieldForMobileClarity(field) {
      if (!field || typeof field.classList === "undefined") return;
      field.classList.remove("is-mobile-focused");
    }

    function getCurrentPageInteractiveFields() {
      const page = pages[currentPage];
      if (!page) return [];
      return Array.from(page.querySelectorAll("input, select, textarea")).filter(function (field) {
        if (!isUserField(field)) return false;
        if (field.readOnly) return false;
        if (field.type === "checkbox" || field.type === "radio") return false;
        return true;
      });
    }

    function getNextInteractiveField(currentField) {
      const fields = getCurrentPageInteractiveFields();
      const index = fields.indexOf(currentField);
      if (index < 0) return null;
      for (let i = index + 1; i < fields.length; i += 1) {
        if (fields[i]) {
          return fields[i];
        }
      }
      return null;
    }

    function isPageTerminalSelect(field) {
      return field === commitmentInput || field === durationInput;
    }

    function triggerNextButtonFromTerminalSelect(field) {
      if (!isPageTerminalSelect(field)) return false;
      if (!nextBtn || nextBtn.disabled || nextBtn.style.display === "none") return false;
      const page = pages[currentPage];
      if (!page || !page.contains(field)) return false;

      window.setTimeout(function () {
        nextBtn.click();
      }, 0);
      return true;
    }

    function focusFieldForMobileAdvance(field) {
      if (!field) return;
      if (field.tagName === "SELECT") {
        openSelectPicker(field);
        return;
      }
      if (typeof field.focus === "function") {
        field.focus();
      }
      if (field.tagName === "INPUT" && typeof field.setSelectionRange === "function") {
        const value = String(field.value || "");
        field.setSelectionRange(value.length, value.length);
      }
    }

    function autoAdvanceToNextField(currentField) {
      if (!shouldUseMobileAutoAdvance()) return;
      const nextField = getNextInteractiveField(currentField);
      if (!nextField) {
        triggerNextButtonFromTerminalSelect(currentField);
        return;
      }
      window.setTimeout(function () {
        focusFieldForMobileAdvance(nextField);
      }, 0);
    }

    function isStructuredAutoAdvanceInput(field) {
      if (!field || !isUserField(field)) return false;
      if (field.tagName !== "INPUT") return false;

      const type = String(field.type || "").toLowerCase();
      if (type === "checkbox" || type === "radio" || type === "hidden" || type === "file") {
        return false;
      }
      if (field.readOnly) return false;

      const rawValue = String(field.value || "");
      const value = rawValue.trim();
      if (!value) return false;
      if (!field.checkValidity()) return false;

      // Never auto-advance phone/email while typing.
      if (type === "tel" || type === "email") {
        return false;
      }

      if (field.id === "dob") {
        return /^\d{2}\/\d{2}\/\d{4}$/.test(value);
      }

      if (field.hasAttribute("pattern")) {
        return true;
      }

      if (typeof field.maxLength === "number" && field.maxLength > 0 && value.length >= field.maxLength) {
        return true;
      }

      return false;
    }

    function maybeAutoAdvanceAfterValidInput(field) {
      if (!shouldUseMobileAutoAdvance()) return;
      if (!isStructuredAutoAdvanceInput(field)) {
        if (field && field.dataset) {
          field.dataset.autoAdvancedValue = "";
        }
        return;
      }

      const valueSnapshot = String(field.value || "").trim();
      if (field.dataset && field.dataset.autoAdvancedValue === valueSnapshot) {
        return;
      }
      if (field.dataset) {
        field.dataset.autoAdvancedValue = valueSnapshot;
      }
      autoAdvanceToNextField(field);
    }

    function handleProvinceSelection(event) {
      const selectedProvince = String(provinceInput.value || "");
      const provinceChanged = selectedProvince !== lastProvinceSelection;
      lastProvinceSelection = selectedProvince;

      populateDistrictOptionsForProvince(selectedProvince);
      updateActionVisibility();

      if (!provinceChanged || !selectedProvince || !shouldUseMobileAutoAdvance()) {
        return;
      }

      // On mobile, open district picker immediately after choosing province.
      window.setTimeout(function () {
        openSelectPicker(districtInput);
      }, 0);
    }

    async function loadThailandDistrictData() {
      try {
        const [provinceResponse, amphureResponse] = await Promise.all([
          fetch(THAI_PROVINCE_DATA_URL),
          fetch(THAI_AMPHURE_DATA_URL)
        ]);

        if (!provinceResponse.ok || !amphureResponse.ok) {
          throw new Error("Failed to load Thailand location data.");
        }

        const provinces = await provinceResponse.json();
        const amphures = await amphureResponse.json();
        const provinceIdToName = {};

        provinces.forEach(function (item) {
          if (!item || typeof item.id !== "number") return;
          provinceIdToName[item.id] = item.name_en;
        });

        const loadedMap = {};
        amphures.forEach(function (item) {
          if (!item) return;
          const provinceName = provinceIdToName[item.province_id];
          if (!provinceName || !item.name_en) return;
          if (!loadedMap[provinceName]) {
            loadedMap[provinceName] = [];
          }
          loadedMap[provinceName].push(item.name_en);
        });

        Object.keys(loadedMap).forEach(function (provinceName) {
          loadedMap[provinceName] = Array.from(new Set(loadedMap[provinceName])).sort(function (a, b) {
            return a.localeCompare(b);
          });
        });

        provinceDistrictMap = loadedMap;
        const currentProvince = provinceInput.value;
        const currentDistrict = districtInput.value;
        populateProvinceOptions(Object.keys(loadedMap), currentProvince);
        populateDistrictOptionsForProvince(provinceInput.value, currentDistrict);
      } catch (error) {
        console.warn("Using fallback province/district data:", error);
      }
    }

    function parseDobDdMmYyyy(dateValue) {
      const value = String(dateValue || "").trim();
      const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
      if (!match) return null;

      const day = Number(match[1]);
      const month = Number(match[2]);
      const year = Number(match[3]);
      const dob = new Date(year, month - 1, day);

      if (
        dob.getFullYear() !== year ||
        dob.getMonth() !== month - 1 ||
        dob.getDate() !== day
      ) {
        return null;
      }

      return dob;
    }

    function formatDobInput(rawValue) {
      const digits = String(rawValue || "").replace(/\D/g, "").slice(0, 8);
      if (digits.length <= 2) return digits;
      if (digits.length <= 4) return digits.slice(0, 2) + "/" + digits.slice(2);
      return digits.slice(0, 2) + "/" + digits.slice(2, 4) + "/" + digits.slice(4);
    }

    function calculateAgeParts(dateValue) {
      if (!dateValue) return null;
      const dob = parseDobDdMmYyyy(dateValue);
      if (!dob) return null;

      const today = new Date();

      let years = today.getFullYear() - dob.getFullYear();
      let months = today.getMonth() - dob.getMonth();
      // ignore days for eligibility logic but compute days for display if needed
      let days = today.getDate() - dob.getDate();

      if (days < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
        months -= 1;
      }

      if (months < 0) {
        months += 12;
        years -= 1;
      }

      const totalMonths = years * 12 + months;
      if (totalMonths < 0) return null;

      return {
        years: years,
        months: months,
        days: days
      };
    }

    function calculateAgeTotalMonthsForEligibility(dateValue) {
      const parts = calculateAgeParts(dateValue);
      if (!parts) return null;

      // Eligibility intentionally ignores days, but uses normalized years/months.
      const years = Number(parts.years || 0);
      const months = Number(parts.months || 0);
      const totalMonths = years * 12 + months;
      return totalMonths < 0 ? null : totalMonths;
    }

    function toAgeDecimalFromMonths(totalMonths) {
      if (!Number.isFinite(totalMonths) || totalMonths < 0) {
        return null;
      }
      return Math.round((totalMonths / 12) * 10) / 10;
    }

    function formatAgeDisplay(parts) {
      if (!parts) {
        return "";
      }
      const years = Number(parts.years || 0);
      const months = Number(parts.months || 0);
      const days = Number(parts.days || 0);
      const yearLabel = years === 1 ? "year" : "years";
      const monthLabel = months === 1 ? "month" : "months";
      const dayLabel = days === 1 ? "day" : "days";
      return String(years) + " " + yearLabel + ", " + String(months) + " " + monthLabel + ", " + String(days) + " " + dayLabel;
    }

    function syncAgeFromDob() {
      if (!dobInput.value) {
        dobInput.setCustomValidity("");
        ageInput.value = "";
        if (ageDisplayInput) {
          ageDisplayInput.value = "";
        }
        return null;
      }

      const ageParts = calculateAgeParts(dobInput.value);
      const ageTotalMonths = calculateAgeTotalMonthsForEligibility(dobInput.value);
      const ageDecimalForEligibility = toAgeDecimalFromMonths(ageTotalMonths);
      if (!ageParts || !Number.isFinite(ageDecimalForEligibility)) {
        dobInput.setCustomValidity("Use valid date format DD/MM/YYYY. / (DD/MM/YYYY ပုံစံကိုမှန်ကန်စွာ ဖြည့်ပါ။)");
        ageInput.value = "";
        if (ageDisplayInput) {
          ageDisplayInput.value = "";
        }
        return null;
      }

      dobInput.setCustomValidity("");
      ageInput.value = String(ageDecimalForEligibility);
      if (ageDisplayInput) {
        ageDisplayInput.value = formatAgeDisplay(ageParts);
      }
      return ageDecimalForEligibility;
    }

    function evaluateEligibility() {
      syncAgeFromDob();
      const ageTotalMonths = calculateAgeTotalMonthsForEligibility(dobInput.value);
      const minAgeMonths = Number.isFinite(ELIGIBILITY_RULES.minAgeMonths)
        ? Number(ELIGIBILITY_RULES.minAgeMonths)
        : Math.ceil(ELIGIBILITY_RULES.minAge * 12);
      const maxAgeMonths = Number.isFinite(ELIGIBILITY_RULES.maxAgeMonths)
        ? Number(ELIGIBILITY_RULES.maxAgeMonths)
        : Math.floor(ELIGIBILITY_RULES.maxAge * 12);
      const reasons = [];
      const attendanceValue = String(attendanceInput && attendanceInput.value || "").trim().toLowerCase();
      const commitmentValue = String(commitmentInput && commitmentInput.value || "").trim().toLowerCase();

      if (
        !Number.isFinite(ageTotalMonths) ||
        ageTotalMonths < minAgeMonths ||
        ageTotalMonths > maxAgeMonths
      ) {
        reasons.push({
          en: "Age must be between 17 years 5 months and 25 years old.",
          my: "(အသက်သည် ၁၇ နှစ် ၅ လမှ ၂၅ နှစ်အတွင်း ဖြစ်ရမည်။)"
        });
      }

      if (attendanceValue === "no") {
        reasons.push({
          en: "Applicant must be able to attend in person.",
          my: "(သင်တန်းကို လူကိုယ်တိုင် လာရောက်တက်ရောက်နိုင်ရမည်။)"
        });
      }

      if (commitmentValue === "no") {
        reasons.push({
          en: "Applicant must be able to commit until program completion.",
          my: "(သင်တန်းပြီးဆုံးချိန်အထိ တက်ရောက်နိုင်ရမည်။)"
        });
      }

      return {
        eligible: reasons.length === 0,
        reasons: reasons
      };
    }

    function setEligibilityMeta(result) {
      eligibilityStatusInput.value = result.eligible ? "Eligible" : "Not Eligible";
      eligibilityReasonsInput.value = result.reasons
        .map(function (item) {
          return item.en + " / " + item.my;
        })
        .join(" | ");
      eligibilityCheckedAtInput.value = new Date().toISOString();
    }

    function renderPendingEligibility() {
      eligibilityResult.classList.remove("ok", "bad");
      eligibilityResultTitle.textContent = "Eligibility status: Pending\n(အရည်အချင်း စစ်ဆေးမှု: စောင့်ဆိုင်းဆဲ)";
      eligibilityResultCopy.textContent = "Complete all eligibility fields to continue.\n(အချက်အလက်အားလုံးဖြည့်ပြီး နောက်စာမျက်နှာသို့ ဆက်သွားပါ။)";
      eligibilityStatusInput.value = "Pending";
      eligibilityReasonsInput.value = "";
      eligibilityCheckedAtInput.value = "";
    }

    function renderEligibility(result) {
      eligibilityResult.classList.remove("ok", "bad");

      if (result.eligible) {
        eligibilityResult.classList.add("ok");
        eligibilityResultTitle.textContent = "Eligible\n(လျှောက်ထားနိုင်သည်)";
      } else {
        eligibilityResult.classList.add("bad");
        const reasonLines = result.reasons
          .map(function (item, index) {
            return String(index + 1) + ". " + item.en + "\n   " + item.my;
          })
          .join("\n\n");

        eligibilityResultTitle.textContent = "Not Eligible\n(လက်ရှိတွင် လျှောက်ထားရန် မကိုက်ညီသေးပါ)";
        eligibilityResultCopy.textContent =
          "Thank you for your interest in our program. Based on your responses, you are currently not eligible.\n" +
          "(ကျွန်ုပ်တို့၏ သင်တန်းကို စိတ်ဝင်စားသည့်အတွက် ကျေးဇူးတင်ပါသည်။ သင်ဖြည့်သွင်းထားသော အချက်အလက်များအရ လက်ရှိအချိန်တွင် ဝင်ခွင့်မပြည့်မီပါ။)\n\n" +
          reasonLines;
      }
    }

    function renderNotEligiblePage(result) {
      if (!notEligibleReasons) {
        return;
      }
      notEligibleReasons.innerHTML = "";
      result.reasons.forEach(function (item) {
        const li = document.createElement("li");
        const en = document.createElement("span");
        en.textContent = item.en;
        const my = document.createElement("span");
        my.className = "my";
        my.textContent = item.my;
        li.appendChild(en);
        li.appendChild(my);
        notEligibleReasons.appendChild(li);
      });
    }

    function openNotEligiblePage(result) {
      renderNotEligiblePage(result);
      formError.textContent = "";
      setPage(NOT_ELIGIBLE_PAGE_INDEX);
      void trackNotEligibleSubmission(result);
    }

    function runEligibilityCheck(options) {
      const config = options || {};
      const result = evaluateEligibility();
      setEligibilityMeta(result);
      renderEligibility(result);
      if (config.redirectOnFail && !result.eligible) {
        openNotEligiblePage(result);
      }
      return result;
    }

    function isPageComplete(pageIndex) {
      const page = pages[pageIndex];
      if (!page) return false;

      syncDynamicVisibilityRules();

      if (pageIndex === ELIGIBILITY_PAGE_INDEX) {
        syncAgeFromDob();
      }

      if (pageIndex === CONTACT_PAGE_INDEX) {
        validatePhoneSet();
      }

      const fields = page.querySelectorAll("input, select, textarea");
      for (const field of fields) {
        if (field.type === "hidden" || field.disabled) {
          continue;
        }
        if (!field.checkValidity()) {
          return false;
        }
      }
      return true;
    }

    function getPolicyAgreementValue() {
      const selectedChoice = policyAgreementChoices.find(function (choice) {
        return !!choice && choice.checked;
      });
      return selectedChoice ? String(selectedChoice.value || "").trim() : "";
    }

    function isSubmissionClosedNow() {
      const cutoff = new Date(SUBMISSION_CUTOFF_LOCAL_ISO);
      if (isNaN(cutoff.getTime())) {
        return false;
      }
      return Date.now() >= cutoff.getTime();
    }

    function buildSubmissionClosedModalHtml() {
      return (
        "The application period has ended, so we are no longer accepting submissions." +
        "<br>(လျှောက်လွှာလက်ခံသည့်ကာလ ကုန်ဆုံးပြီဖြစ်သည့်အတွက် လက်ရှိတွင် တင်သွင်းမှုများကို လက်မခံတော့ပါ။)" +
        "<br><br>For questions, please contact us." +
        "<br>(မေးမြန်းလိုပါက ကျွန်ုပ်တို့အား ဆက်သွယ်နိုင်ပါသည်။)" +
        '<span class="status-contact-links">' +
          '<a class="status-contact-link" href="tel:+66882781840">Education Team Phone: 088-278-1840 / (ပညာရေးအဖွဲ့ဖုန်း 088-278-1840)</a>' +
          '<a class="status-contact-link" href="https://www.google.com/maps/dir/?api=1&destination=16.7137625,98.5912796&travelmode=driving" target="_blank" rel="noopener noreferrer">Google Map Directions / (Google Map လမ်းညွှန်)</a>' +
        "</span>"
      );
    }

    function buildSubmissionClosedTrackingPayload(meta) {
      const details = meta || {};
      const nowIso = new Date().toISOString();
      const href = String(details.href || "").trim();
      const label = String(details.label || "").trim();
      const context = String(details.context || "").trim();

      return {
        submittedAt: nowIso,
        applicationMode: "closed_link_click",
        submissionType: SUBMISSION_CLOSED_TRACKING_TYPE,
        submissionStatus: SUBMISSION_CLOSED_TRACKING_STATUS,
        officeSubmissionRequired: "No",
        cutoffLinkClickedAt: nowIso,
        cutoffLinkUrl: href,
        cutoffLinkLabel: label,
        cutoffLinkContext: context,
        cutoffAt: SUBMISSION_CUTOFF_LOCAL_ISO
      };
    }

    function postSubmissionClosedTracking(payload) {
      if (!payload) return;
      if (!isAppsScriptRuntime() && !GAS_URL) return;

      if (isAppsScriptRuntime()) {
        try {
          if (typeof google.script.run.submitApplication === "function") {
            google.script.run.submitApplication(payload);
            return;
          }
        } catch (error) {
          console.warn("Closed-period tracking failed:", error);
        }
      }

      if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function" && GAS_URL) {
        try {
          const beaconPayload = new Blob([JSON.stringify(payload)], { type: "application/json" });
          if (navigator.sendBeacon(GAS_URL, beaconPayload)) {
            return;
          }
        } catch (error) {
          console.warn("Closed-period tracking beacon failed:", error);
        }
      }

      if (GAS_URL && typeof fetch === "function") {
        fetch(GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(function (error) {
          console.warn("Closed-period tracking fetch failed:", error);
        });
      }
    }

    function trackSubmissionClosedLink(meta) {
      if (!isSubmissionClosedNow()) return;
      postSubmissionClosedTracking(buildSubmissionClosedTrackingPayload(meta));
    }

    function trackSubmissionClosedLandingOnce() {
      if (submissionClosedLandingTracked) return;
      submissionClosedLandingTracked = true;
      trackSubmissionClosedLink({
        href: String(window.location && window.location.href || ""),
        label: "Form opened after cutoff",
        context: "page_load"
      });
    }

    function setClosedUiShellState() {
      pages.forEach(function (page) {
        page.classList.remove("active");
      });
      if (backBtn) backBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
      if (submitBtn) submitBtn.style.display = "none";
      if (pageCounter) {
        pageCounter.textContent = "Application Closed / (လျှောက်လွှာပိတ်ထားသည်)";
      }
      if (pageTitle) {
        pageTitle.textContent = SUBMISSION_CLOSED_MODAL_TITLE;
      }
      if (progressFill) {
        progressFill.style.width = "100%";
      }
    }

    function openSubmissionClosedPage(options) {
      const config = options || {};
      formError.textContent = "";
      setClosedUiShellState();
      showSubmissionClosedPageAfterModalClose = false;

      if (config.tracking) {
        trackSubmissionClosedLink(config.tracking);
      }
      if (config.showModal !== false) {
        showSubmissionClosedPageAfterModalClose = true;
        showStatusModal(SUBMISSION_CLOSED_MODAL_TITLE, buildSubmissionClosedModalHtml(), {
          html: true
        });
      } else if (SUBMISSION_CLOSED_PAGE_INDEX >= 0) {
        setPage(SUBMISSION_CLOSED_PAGE_INDEX);
      }
    }

    function routeFromPolicyChoice() {
      const policyChoice = getPolicyAgreementValue();
      if (!policyChoice) {
        return;
      }
      formError.textContent = "";
      if (policyChoice === "Yes") {
        if (isSubmissionClosedNow()) {
          openSubmissionClosedPage({
            tracking: {
              href: String(window.location && window.location.href || ""),
              label: "Policy accepted after cutoff",
              context: "policy_yes"
            }
          });
          return;
        }
        setPage(WELCOME_PAGE_INDEX);
        return;
      }
      if (policyChoice === "No") {
        setPage(POLICY_DECLINED_PAGE_INDEX);
        void trackPolicyDeclinedSubmission();
      }
    }

    function setSubmissionInProgressState(isInProgress) {
      submissionInProgress = !!isInProgress;

      if (submitBtn) {
        submitBtn.disabled = submissionInProgress;
        submitBtn.textContent = submissionInProgress
          ? SUBMIT_BTN_LOADING_LABEL
          : SUBMIT_BTN_DEFAULT_LABEL;
      }

      if (nextBtn) {
        nextBtn.disabled = submissionInProgress;
      }
      if (backBtn) {
        backBtn.disabled = submissionInProgress;
      }
    }

    function updateActionVisibility() {
      syncDynamicVisibilityRules();

      if (currentPage !== ELIGIBILITY_PAGE_INDEX) {
        suppressEligibilityAutoNext = false;
      }

      if (
        currentPage === NOT_ELIGIBLE_PAGE_INDEX ||
        currentPage === POLICY_DECLINED_PAGE_INDEX ||
        currentPage === SUBMISSION_CLOSED_PAGE_INDEX
      ) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "none";
        return;
      }

      if (currentPage === POLICY_PAGE_INDEX) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "none";
        return;
      }

      if (currentPage === WELCOME_PAGE_INDEX) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "none";
        return;
      }

      if (currentPage === REVIEW_PAGE_INDEX) {
        nextBtn.style.display = "none";
        submitBtn.style.display = reviewConfirmInput.checked ? "inline-flex" : "none";
        return;
      }

      const currentPageComplete = isPageComplete(currentPage);
      nextBtn.style.display = currentPageComplete || ENABLE_ERROR_CHECK_MODE ? "inline-flex" : "none";
      submitBtn.style.display = "none";

      if (currentPage === ELIGIBILITY_PAGE_INDEX) {
        const pageReady = isPageComplete(ELIGIBILITY_PAGE_INDEX);
        if (!pageReady) {
          renderPendingEligibility();
          nextBtn.style.display = ENABLE_ERROR_CHECK_MODE ? "inline-flex" : "none";
          return;
        }

        const preview = runEligibilityCheck();
        if (preview.eligible) {
          if (AUTO_NEXT_AFTER_ELIGIBLE && !suppressEligibilityAutoNext) {
            setPage(currentPage + 1);
            return;
          }
          nextBtn.style.display = "inline-flex";
        } else {
          nextBtn.style.display = "none";
          openNotEligiblePage(preview);
        }
      }
    }

    function validatePage(pageIndex) {
      const page = pages[pageIndex];
      syncDynamicVisibilityRules();

      if (pageIndex === CONTACT_PAGE_INDEX) {
        validatePhoneSet();
      }

      const fields = page.querySelectorAll("input, select, textarea");
      let firstInvalidField = null;

      for (const field of fields) {
        if (!isUserField(field)) {
          continue;
        }
        const valid = setFieldErrorState(field, true);
        if (!valid && !firstInvalidField) {
          firstInvalidField = field;
        }
      }

      if (firstInvalidField) {
        if (typeof firstInvalidField.focus === "function") {
          firstInvalidField.focus();
        }
        return false;
      }

      return true;
    }

    function scrollToPageTop() {
      if (typeof window === "undefined" || typeof window.scrollTo !== "function") {
        return;
      }
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      } catch (_) {
        window.scrollTo(0, 0);
      }
    }

    function setPage(index) {
      const previousPage = currentPage;
      currentPage = Math.max(0, Math.min(index, pages.length - 1));

      pages.forEach(function (page, pageIndex) {
        page.classList.toggle("active", pageIndex === currentPage);
      });

      const onNotEligiblePage = currentPage === NOT_ELIGIBLE_PAGE_INDEX;
      const onPolicyDeclinedPage = currentPage === POLICY_DECLINED_PAGE_INDEX;
      const onSubmissionClosedPage = currentPage === SUBMISSION_CLOSED_PAGE_INDEX;
      const onResultPage = onNotEligiblePage || onPolicyDeclinedPage || onSubmissionClosedPage;
      const onReviewPage = currentPage === REVIEW_PAGE_INDEX;

      if (onResultPage) {
        pageCounter.textContent = "Result Page / (ရလဒ်စာမျက်နှာ)";
        progressFill.style.width = "100%";
      } else {
        const pageNumber = currentPage + 1;
        pageCounter.textContent =
          "Page " +
          String(pageNumber) +
          " of " +
          String(TOTAL_FORM_PAGES) +
          " / (စာမျက်နှာ " +
          toMyanmarNumber(pageNumber) +
          " / " +
          toMyanmarNumber(TOTAL_FORM_PAGES) +
          ")";
        progressFill.style.width = String((pageNumber / TOTAL_FORM_PAGES) * 100) + "%";
      }
      pageTitle.textContent = pages[currentPage].dataset.pageTitle || "Application Form / (လျှောက်လွှာဖောင်)";

      backBtn.style.display = currentPage === POLICY_PAGE_INDEX || onResultPage ? "none" : "inline-flex";

      if (onReviewPage) {
        reviewConfirmInput.checked = false;
        renderReviewSummary();
      }

      updateActionVisibility();
      if (previousPage !== currentPage) {
        scrollToPageTop();
      }
      // leave policy routing to the explicit policy choice handlers
    }

    function padTwoDigits(value) {
      const num = Number(value);
      if (!isFinite(num)) return "00";
      return String(Math.trunc(num)).padStart(2, "0");
    }

    function formatLocalTimestamp(dateValue) {
      const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
      if (isNaN(date.getTime())) return "";
      return (
        String(date.getFullYear()) +
        "-" +
        padTwoDigits(date.getMonth() + 1) +
        "-" +
        padTwoDigits(date.getDate()) +
        " " +
        padTwoDigits(date.getHours()) +
        ":" +
        padTwoDigits(date.getMinutes()) +
        ":" +
        padTwoDigits(date.getSeconds())
      );
    }

    function attachRealtimeDeviceContext(payload) {
      const data = payload && typeof payload === "object" ? payload : {};
      const now = new Date();
      data.clientLocalTime = formatLocalTimestamp(now);
      if (!data.submittedAt) {
        data.submittedAt = now.toISOString();
      }

      return data;
    }

    function collectFormData() {
      const data = {};
      new FormData(form).forEach(function (value, key) {
        data[key] = typeof value === "string" ? value.trim() : value;
      });
      data.submittedAt = new Date().toISOString();
      return data;
    }

    function isAppsScriptRuntime() {
      return (
        typeof google !== "undefined" &&
        !!google &&
        !!google.script &&
        !!google.script.run
      );
    }

    function postToAppsScript(payload) {
      return new Promise(function (resolve) {
        try {
          if (!isAppsScriptRuntime() || typeof google.script.run.submitApplication !== "function") {
            resolve({
              ok: false,
              error: "Apps Script runtime is not available."
            });
            return;
          }

          google.script.run
            .withSuccessHandler(function (result) {
              if (result && result.status === "closed") {
                resolve({
                  ok: false,
                  closed: true,
                  error: result.message ? String(result.message) : "Application submission is closed."
                });
                return;
              }
              const ok = !!result && (result.status === "ok" || result.ok === true);
              if (ok) {
                resolve({ ok: true, result: result });
                return;
              }
              resolve({
                ok: false,
                error: result && result.message ? String(result.message) : "Unknown server response."
              });
            })
            .withFailureHandler(function (error) {
              resolve({
                ok: false,
                error: String(error && error.message ? error.message : error)
              });
            })
            .submitApplication(payload);
        } catch (error) {
          resolve({
            ok: false,
            error: String(error && error.message ? error.message : error)
          });
        }
      });
    }

    async function postToGAS(payload) {
      try {
        const response = await fetch(GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        const responseText = await response.text();
        let parsed = null;
        if (responseText) {
          try {
            parsed = JSON.parse(responseText);
          } catch (error) {
            parsed = null;
          }
        }

        if (!response.ok) {
          const statusLabel = "HTTP " + String(response.status);
          const detail = parsed && parsed.message
            ? String(parsed.message)
            : String(response.statusText || "Submission failed.");
          return {
            ok: false,
            error: statusLabel + " - " + detail
          };
        }

        if (parsed && parsed.status === "error") {
          return {
            ok: false,
            error: parsed.message ? String(parsed.message) : "Submission failed on server."
          };
        }
        if (parsed && parsed.status === "closed") {
          return {
            ok: false,
            closed: true,
            error: parsed.message ? String(parsed.message) : "Application submission is closed."
          };
        }

        return { ok: true, result: parsed };
      } catch (error) {
        return {
          ok: false,
          error: String(error && error.message ? error.message : error)
        };
      }
    }

    async function submitPayload(payload) {
      let payloadWithContext = payload && typeof payload === "object" ? payload : {};
      try {
        payloadWithContext = await attachRealtimeDeviceContext(payloadWithContext);
      } catch (error) {
        console.warn("Realtime device context capture failed:", error);
      }

      if (isAppsScriptRuntime()) {
        return postToAppsScript(payloadWithContext);
      }
      if (!GAS_URL) {
        return {
          ok: false,
          error: "Submission service is not configured."
        };
      }
      return postToGAS(payloadWithContext);
    }

    async function trackNotEligibleSubmission(result) {
      if (notEligibleSubmissionLogged) {
        return;
      }
      if (!isAppsScriptRuntime() && !GAS_URL) {
        return;
      }

      notEligibleSubmissionLogged = true;
      const response = await submitPayload(buildNotEligibleTrackingPayload(result));
      if (!response.ok) {
        console.warn("Not eligible tracking failed:", response.error);
        notEligibleSubmissionLogged = false;
      }
    }

    async function trackPolicyDeclinedSubmission() {
      if (policyDeclinedSubmissionLogged) {
        return;
      }
      if (!isAppsScriptRuntime() && !GAS_URL) {
        return;
      }

      policyDeclinedSubmissionLogged = true;
      const response = await submitPayload(buildPolicyDeclinedTrackingPayload());
      if (!response.ok) {
        console.warn("Policy declined tracking failed:", response.error);
        policyDeclinedSubmissionLogged = false;
      }
    }

    const modal = document.createElement("div");
    modal.className = "success-modal";
    modal.innerHTML =
      '<div class="success-card"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#059669" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><h3>Application submitted / (လျှောက်လွှာ တင်သွင်းပြီးပါပြီ)</h3><p>Thank you for applying.\n(ကျေးဇူးတင်ပါသည်။ လျှောက်လွှာကို လက်ခံရရှိပါပြီ။)</p><div class="success-actions"><button class="btn btn-primary" id="modalClose">OK / (အိုကေ)</button></div></div>';
    document.body.appendChild(modal);
    const modalTitle = modal.querySelector("h3");
    const modalCopy = modal.querySelector("p");
    const SUBMIT_SUCCESS_TITLE = "Application submitted / (လျှောက်လွှာ တင်သွင်းပြီးပါပြီ)";
    const SUBMIT_SUCCESS_COPY = "Thank you for applying.\n(ကျေးဇူးတင်ပါသည်။ လျှောက်လွှာကို လက်ခံရရှိပါပြီ။)";
    let resetToFirstPageAfterModalClose = false;
    let returnToWelcomeAfterModalClose = false;
    let showSubmissionClosedPageAfterModalClose = false;

    function resetApplicationStateToStart() {
      form.reset();
      pdfDownloadLogged = false;
      notEligibleSubmissionLogged = false;
      policyDeclinedSubmissionLogged = false;
      setApplicationMode("");
      showApplicationModeError(false);
      populateDistrictOptionsForProvince("");
      renderPendingEligibility();
      renderApplicationModePanel();
      reviewSummary.innerHTML = "";
      reviewConfirmInput.checked = false;
      clearAllFieldErrors();
      syncDynamicVisibilityRules();
      syncFilledStateAll();
      resetPdfUploadFields();
      if (isSubmissionClosedNow()) {
        setClosedUiShellState();
        openSubmissionClosedPage();
      } else {
        setPage(0);
      }
    }

    function closeStatusModal() {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");

      const shouldResetToFirstPage = resetToFirstPageAfterModalClose;
      const shouldReturnToWelcome = returnToWelcomeAfterModalClose;
      const shouldShowSubmissionClosedPage = showSubmissionClosedPageAfterModalClose;
      resetToFirstPageAfterModalClose = false;
      returnToWelcomeAfterModalClose = false;
      showSubmissionClosedPageAfterModalClose = false;
      if (shouldResetToFirstPage) {
        window.setTimeout(function () {
          resetApplicationStateToStart();
        }, 0);
        return;
      }

      if (shouldReturnToWelcome) {
        window.setTimeout(function () {
          formError.textContent = "";
          setPage(WELCOME_PAGE_INDEX);
          setApplicationMode("");
          showApplicationModeError(false);
          renderApplicationModePanel();
        }, 0);
        return;
      }

      if (shouldShowSubmissionClosedPage && SUBMISSION_CLOSED_PAGE_INDEX >= 0) {
        window.setTimeout(function () {
          setPage(SUBMISSION_CLOSED_PAGE_INDEX);
        }, 0);
      }
    }

    function showStatusModal(title, copy, options) {
      const useHtml = !!(options && options.html);
      resetToFirstPageAfterModalClose = !!(options && options.resetToFirstPage);
      returnToWelcomeAfterModalClose = !!(options && options.returnToWelcome);
      if (modalTitle) {
        modalTitle.textContent = title;
      }
      if (modalCopy) {
        if (useHtml) {
          modalCopy.innerHTML = copy;
        } else {
          modalCopy.textContent = copy;
        }
      }
      formatInlineBilingualText();
      markMyanmarTextElements();
      const modalCloseButton = modal.querySelector("#modalClose");
      if (modalCloseButton) {
        // Keep button label in one line and avoid auto-splitting into stacked bilingual lines.
        modalCloseButton.textContent = "OK / (အိုကေ)";
        modalCloseButton.classList.remove("bilingual-stack");
        modalCloseButton.style.whiteSpace = "nowrap";
        modalCloseButton.style.margin = "0 auto";
      }
      const modalActionWrap = modalCloseButton ? modalCloseButton.parentElement : null;
      if (modalActionWrap) {
        modalActionWrap.style.display = "flex";
        modalActionWrap.style.justifyContent = "center";
        modalActionWrap.style.alignItems = "center";
        modalActionWrap.style.width = "100%";
      }
      document.body.classList.add("modal-open");
      modal.classList.add("show");
    }

    modal.addEventListener("click", function (event) {
      const target = event && event.target ? event.target : null;
      const closeButton = target && typeof target.closest === "function"
        ? target.closest("#modalClose")
        : null;

      if (closeButton || target === modal) {
        closeStatusModal();
      }
    });

    document.addEventListener("click", function (event) {
      if (!isSubmissionClosedNow()) {
        return;
      }
      const target = event && event.target && typeof event.target.closest === "function"
        ? event.target.closest("a[href]")
        : null;
      if (!target) {
        return;
      }
      const href = String(target.getAttribute("href") || "").trim();
      if (!href || href === "#" || /^javascript:/i.test(href)) {
        return;
      }
      const label = String(target.textContent || target.getAttribute("aria-label") || target.id || "Link").trim();
      trackSubmissionClosedLink({
        href: href,
        label: label,
        context: target.id ? "anchor:" + target.id : "anchor_click"
      });
    }, true);

    dobInput.addEventListener("input", function () {
      dobInput.value = formatDobInput(dobInput.value);
      syncAgeFromDob();
    });

    dobInput.addEventListener("change", syncAgeFromDob);
    dobInput.addEventListener("blur", syncAgeFromDob);

    provinceInput.addEventListener("input", handleProvinceSelection);
    provinceInput.addEventListener("change", handleProvinceSelection);

    if (schoolInput) {
      schoolInput.addEventListener("change", function () {
        toggleSchoolOther();
        updateActionVisibility();
      });
    }

    if (qualificationInput) {
      qualificationInput.addEventListener("change", function () {
        toggleQualificationOther();
        updateActionVisibility();
      });
    }

    if (incomeModeInput) {
      incomeModeInput.addEventListener("change", function () {
        toggleIncomeFields();
        updateActionVisibility();
      });
    }

    if (workTypeInput) {
      workTypeInput.addEventListener("change", function () {
        toggleIncomeFields();
        updateActionVisibility();
      });
    }

    if (incomeCurrencyInput) {
      incomeCurrencyInput.addEventListener("change", function () {
        toggleIncomeFields();
        updateActionVisibility();
      });
    }

    if (incomeAmountInput) {
      incomeAmountInput.addEventListener("input", function () {
        formatIncomeAmount();
        updateActionVisibility();
      });
    }

    if (previousCoursesInput) {
      previousCoursesInput.addEventListener("input", function () {
        autoResizeTextarea(previousCoursesInput);
      });
    }

    additionalPageTextareas.forEach(function (textarea) {
      textarea.addEventListener("input", function () {
        autoResizeTextarea(textarea);
      });
    });

    if (computerLevelInput) {
      computerLevelInput.addEventListener("change", function () {
        toggleComputerSkillGroups();
        updateActionVisibility();
      });
    }

    if (incompleteHistoryInput) {
      incompleteHistoryInput.addEventListener("change", function () {
        toggleIncompleteReason();
        updateActionVisibility();
      });
    }

    [
      phoneCountryCodeInput,
      phoneInput,
      emergencyCountryCode1Input,
      emergencyPhone1Input,
      emergencyCountryCode2Input,
      emergencyPhone2Input,
      emergencyOwner2Input,
      emergencyRelation2Input
    ].forEach(function (element) {
      if (!element) return;
      element.addEventListener("input", function () {
        validatePhoneSet();
        updateActionVisibility();
      });
      element.addEventListener("change", function () {
        validatePhoneSet();
        updateActionVisibility();
      });
    });

    applicationModeCards.forEach(function (card) {
      card.addEventListener("click", function () {
        handleApplicationModeSelection(String(card.dataset.mode || ""));
      });
      card.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }
        event.preventDefault();
        handleApplicationModeSelection(String(card.dataset.mode || ""));
      });
    });

    pdfDownloadLink.addEventListener("click", function (event) {
      if (isSubmissionClosedNow()) {
        event.preventDefault();
        openSubmissionClosedPage();
        return;
      }
      if (getSelectedApplicationMode() !== "pdf") {
        return;
      }

      event.preventDefault();
      const pdfUrl = pdfDownloadLink.getAttribute("href");
      if (pdfUrl) {
        window.open(pdfUrl, "_blank", "noopener,noreferrer");
      }

      if (!pdfDownloadLogged) {
        pdfDownloadLogged = true;
        const shouldTrackPdfDownload = isAppsScriptRuntime() || !!GAS_URL;
        const pdfTrackingPayload = shouldTrackPdfDownload ? buildPdfTrackingPayload() : null;
        if (pdfTrackingPayload) {
          submitPayload(pdfTrackingPayload)
            .then(function (trackingResponse) {
              if (!trackingResponse || !trackingResponse.ok) {
                console.warn("PDF tracking failed:", trackingResponse ? trackingResponse.error : "Unknown error");
                pdfDownloadLogged = false;
              }
            })
            .catch(function (error) {
              console.warn("PDF tracking failed:", error);
              pdfDownloadLogged = false;
            });
        }
      }

      const pdfDownloadThankYouHtml =
        "Thank you. The PDF form has been downloaded.<br>(ကျေးဇူးတင်ပါသည်။ PDF ဖောင်ကို ဒေါင်းလုဒ် လုပ်ခြင်း အောင်မြင်ပါသည်။)" +
        "<br><br>Please fill the PDF and submit it at the office location below.<br>(PDF ဖောင်ကို ဖြည့်စွက်ပြီး အောက်ပါ ရုံးတည်နေရာသို့ ပေးပို့ပါ။)" +
        '<span class="status-contact-links">' +
          '<a class="status-contact-link" href="https://www.google.com/maps/dir/?api=1&destination=16.7137625,98.5912796&travelmode=driving" target="_blank" rel="noopener noreferrer">Google Map Directions / (Google Map လမ်းညွှန်)</a>' +
          '<a class="status-contact-link" href="tel:+66882781840">Education Team Phone: 088-278-1840 / (ပညာရေးအဖွဲ့ဖုန်း 088-278-1840)</a>' +
        "</span>";

      showStatusModal("PDF downloaded / (PDF ဒေါင်းလုဒ်ပြီးပါပြီ)", pdfDownloadThankYouHtml, {
        html: true,
        returnToWelcome: true
      });
    });

    if (pdfApplicantNameInput) {
      pdfApplicantNameInput.addEventListener("input", function () {
        if (pdfUploadStatus && pdfUploadStatus.classList.contains("is-error")) {
          validatePdfUploadInput(false);
        }
      });
    }

    if (pdfApplicantPhoneInput) {
      pdfApplicantPhoneInput.addEventListener("input", function () {
        if (pdfUploadStatus && pdfUploadStatus.classList.contains("is-error")) {
          validatePdfUploadInput(false);
        }
      });
    }

    if (pdfFilledFileInput) {
      pdfFilledFileInput.addEventListener("change", function () {
        const file = validatePdfUploadInput(false);
        if (file) {
          setPdfUploadStatus(
            "Selected file: " + String(file.name || "application.pdf") +
              " (" + formatBytesForUi(file.size) + ")",
            false
          );
        }
      });
    }

    if (pdfUploadSubmitBtn) {
      pdfUploadSubmitBtn.addEventListener("click", function () {
        uploadCompletedPdf();
      });
    }

    [dobInput, provinceInput, districtInput, highestGradeInput, attendanceInput, commitmentInput].forEach(function (element) {
      element.addEventListener("change", function () {
        if (!dobInput.value || !provinceInput.value || !districtInput.value || !highestGradeInput.value || !attendanceInput.value || !commitmentInput.value) {
          renderPendingEligibility();
          updateActionVisibility();
          return;
        }
        updateActionVisibility();
      });
    });

    reviewConfirmInput.addEventListener("change", function () {
      reviewConfirmInput.dataset.touched = "1";
      setFieldErrorState(reviewConfirmInput, true);
      updateActionVisibility();
    });

    function handlePolicyChoiceSelect() {
      if (currentPage !== POLICY_PAGE_INDEX) {
        return;
      }
      routeFromPolicyChoice();
    }

    policyAgreementChoices.forEach(function (choice) {
      choice.addEventListener("change", handlePolicyChoiceSelect);
      choice.addEventListener("click", handlePolicyChoiceSelect);
    });

    form.addEventListener("input", function (event) {
      if (isUserField(event.target)) {
        syncFilledStateForField(event.target);
        const touched = event.target.dataset.touched === "1";
        setFieldErrorState(event.target, touched);
      }
      if (event.target !== reviewConfirmInput && reviewConfirmInput.checked) {
        reviewConfirmInput.checked = false;
      }
      updateActionVisibility();
    });

    form.addEventListener("focusin", function (event) {
      if (event.target && event.target.dataset) {
        event.target.dataset.autoAdvancedValue = "";
      }
      focusFieldForMobileClarity(event.target);
    });

    form.addEventListener("focusout", function (event) {
      blurFieldForMobileClarity(event.target);
    });

    form.addEventListener("blur", function (event) {
      if (isUserField(event.target)) {
        syncFilledStateForField(event.target);
        event.target.dataset.touched = "1";
        setFieldErrorState(event.target, true);
      }
    }, true);

    form.addEventListener("change", function (event) {
      if (isUserField(event.target)) {
        syncFilledStateForField(event.target);
        event.target.dataset.touched = "1";
        setFieldErrorState(event.target, true);
      }
      if (event.target !== reviewConfirmInput && reviewConfirmInput.checked) {
        reviewConfirmInput.checked = false;
      }
      updateActionVisibility();
    });

    form.addEventListener("change", function (event) {
      const field = event.target;
      if (!isUserField(field) || field.tagName !== "SELECT") {
        return;
      }
      if (!field.value) {
        return;
      }
      if (triggerNextButtonFromTerminalSelect(field)) {
        return;
      }
      if (!shouldUseMobileAutoAdvance()) {
        return;
      }
      if (field === provinceInput) {
        return;
      }
      autoAdvanceToNextField(field);
    });

    form.addEventListener("input", function (event) {
      maybeAutoAdvanceAfterValidInput(event.target);
    });

    form.addEventListener("reset", function () {
      window.setTimeout(function () {
        const focusedFields = form.querySelectorAll(".is-mobile-focused");
        focusedFields.forEach(function (element) {
          element.classList.remove("is-mobile-focused");
        });
        const autoAdvancedFields = form.querySelectorAll("[data-auto-advanced-value]");
        autoAdvancedFields.forEach(function (element) {
          element.dataset.autoAdvancedValue = "";
        });
        autoResizeTextarea(previousCoursesInput);
        additionalPageTextareas.forEach(function (textarea) {
          autoResizeTextarea(textarea);
        });
      }, 0);
    });

    form.addEventListener("keydown", function (event) {
      const field = event.target;
      if (event.key !== "Enter") {
        return;
      }
      if (!isUserField(field)) {
        return;
      }
      const fieldTag = String(field.tagName || "").toUpperCase();
      const fieldType = String(field.type || "").toLowerCase();

      if (fieldTag === "TEXTAREA") {
        return;
      }
      if (fieldType === "checkbox" || fieldType === "radio") {
        return;
      }
      if (fieldType === "button" || fieldType === "submit" || fieldType === "reset") {
        return;
      }

      // Prevent implicit form submit when pressing Enter inside fields.
      event.preventDefault();

      if (!shouldUseMobileAutoAdvance()) {
        return;
      }
      if (fieldTag === "SELECT") {
        return;
      }
      if (fieldType === "tel" || fieldType === "email") {
        return;
      }
      autoAdvanceToNextField(field);
    });

    backBtn.addEventListener("click", function () {
      formError.textContent = "";
      const targetPage = currentPage - 1;
      if (targetPage === ELIGIBILITY_PAGE_INDEX) {
        suppressEligibilityAutoNext = true;
      }
      setPage(targetPage);
    });

    nextBtn.addEventListener("click", function () {
      formError.textContent = "";

      if (currentPage === POLICY_PAGE_INDEX) {
        routeFromPolicyChoice();
        return;
      }

      if (currentPage === WELCOME_PAGE_INDEX) {
        return;
      }

      if (!validatePage(currentPage)) {
        formError.textContent =
          "Please check the highlighted fields before continuing.\n" +
          "(ရှေ့ဆက်ရန် အနီရောင်ဖြင့် ပြထားသော အချက်အလက်များကို ပြန်လည်စစ်ဆေးပါ။)";
        return;
      }

      if (currentPage === ELIGIBILITY_PAGE_INDEX) {
        const eligibility = runEligibilityCheck({ redirectOnFail: true });
        if (!eligibility.eligible) {
          return;
        }
        suppressEligibilityAutoNext = false;
      }

      setPage(currentPage + 1);
    });

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      if (submissionInProgress) {
        return;
      }
      if (isSubmissionClosedNow()) {
        openSubmissionClosedPage({
          tracking: {
            href: String(window.location && window.location.href || ""),
            label: "Submit attempted after cutoff",
            context: "form_submit_attempt"
          }
        });
        return;
      }
      formError.textContent = "";

      if (currentPage !== REVIEW_PAGE_INDEX) {
        setPage(REVIEW_PAGE_INDEX);
        return;
      }

      if (!reviewConfirmInput.checked) {
        reviewConfirmInput.dataset.touched = "1";
        setFieldErrorState(reviewConfirmInput, true);
        formError.textContent =
          "Please confirm the review checkbox before submitting.\n" +
          "(မတင်သွင်းမီ အတည်ပြု checkbox ကို အမှန်ခြစ်ပါ။)";
        return;
      }

      setSubmissionInProgressState(true);
      try {
        for (let i = 0; i < pages.length; i += 1) {
          if (i === NOT_ELIGIBLE_PAGE_INDEX || i === POLICY_DECLINED_PAGE_INDEX) {
            continue;
          }
          if (!validatePage(i)) {
            formError.textContent =
              "Please check the highlighted fields before submitting.\n" +
              "(မတင်သွင်းမီ အနီရောင်ဖြင့် ပြထားသော အချက်အလက်များကို ပြန်လည်စစ်ဆေးပါ။)";
            setPage(i);
            return;
          }
        }

        const eligibility = runEligibilityCheck();
        if (!eligibility.eligible) {
          openNotEligiblePage(eligibility);
          return;
        }

        if (!isAppsScriptRuntime() && !GAS_URL) {
          formError.textContent =
            "Submission service is not configured. Please contact the admin.\n" +
            "(တင်သွင်းမှုစနစ် မချိတ်ဆက်ရသေးပါ။ စီမံခန့်ခွဲသူကို ဆက်သွယ်ပါ။)";
          return;
        }

        const payload = collectFormData();
        const response = await submitPayload(payload);
        if (response && response.closed) {
          openSubmissionClosedPage({
            tracking: {
              href: String(window.location && window.location.href || ""),
              label: "Server rejected submission after cutoff",
              context: "server_closed_response"
            }
          });
          return;
        }
        if (response.ok) {
          if (response.result && response.result.duplicate) {
            showStatusModal(
              "Already submitted / (တင်သွင်းပြီးဖြစ်သည်)",
              "A matching submission was received recently, so a new row was not added.\n" +
              "(အချက်အလက်တူညီသော တင်သွင်းမှုကို မကြာသေးမီက လက်ခံရရှိထားသောကြောင့် row အသစ် မထည့်သွင်းပါ။)",
              {}
            );
            return;
          }
          showStatusModal(SUBMIT_SUCCESS_TITLE, SUBMIT_SUCCESS_COPY, {
            resetToFirstPage: true
          });
          return;
        }

        console.warn("Google Apps Script submit failed:", response.error);
        const detail = response && response.error ? "\nError: " + String(response.error) : "";
        formError.textContent =
          "We could not submit your form right now. Please try again in a few minutes.\n" +
          "(လက်ရှိအချိန်တွင် ဖောင်တင်သွင်း၍ မရသေးပါ။ မိနစ်အနည်းငယ်အကြာတွင် ထပ်မံကြိုးစားပါ။)" +
          detail;
      } finally {
        setSubmissionInProgressState(false);
      }
    });

    populateProvinceOptions(THAI_PROVINCES);
    populateDistrictOptionsForProvince("");
    loadThailandDistrictData();
    ensureMobileLayoutClass();
    enableTouchPinchZoomAssist();
    startTouchScrollGuard();
    normalizeFormControlBilingualText();
    formatInlineBilingualText();
    markMyanmarTextElements();
    startAutoBilingualFormatting();
    window.addEventListener("resize", ensureMobileLayoutClass);
    window.addEventListener("orientationchange", ensureMobileLayoutClass);
    setApplicationMode("");
    showApplicationModeError(false);
    renderPendingEligibility();
    renderApplicationModePanel();
    clearAllFieldErrors();
    syncDynamicVisibilityRules();
    syncFilledStateAll();
    syncLogoFormLink();
    autoResizeTextarea(previousCoursesInput);
    additionalPageTextareas.forEach(function (textarea) {
      autoResizeTextarea(textarea);
    });
    if (isSubmissionClosedNow()) {
      setClosedUiShellState();
      trackSubmissionClosedLandingOnce();
      openSubmissionClosedPage();
    } else {
      setPage(0);
    }
