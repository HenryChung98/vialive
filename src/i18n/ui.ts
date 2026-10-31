export const contactEmail = "henrychung.dev@gmail.com"

export const ui = {
  en: {
    tagline: "Privacy Policy and Support for our apps for iPhone with Live Activities",
    appsHeading: "Apps",
    otherLocale: "한국어",
    appStore: "Download on the App Store",
    // Official artwork from Apple's Marketing Tools; the guidelines forbid modifying it. Width is for a 48px height.
    appStoreBadge: {
      src: "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1790553600",
      width: 144,
    },
    // Apple requires these credit lines wherever the badge is used.
    legal:
      "Apple, the Apple logo, iPhone, and Live Activities are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries. IOS is a trademark or registered trademark of Cisco in the U.S. and other countries and is used under license.",
    privacy: "Privacy Policy",
    support: "Support",
    privacyHint: "What data is collected and how it's used",
    supportHint: "Contact us and read common questions",
    overview: "Overview",
    search: "Search",
    searchEmpty: "No results found.",
    menu: "Menu",
    contactTitle: "Contact",
    contactDescription: "Tap the button to open a pre-filled email. Please fill in each line so we can look into it.",
    emailUs: "Email us",
    emailBody: "iPhone model:\niOS version:\nApp version:\n\nWhat happened:\n",
    apps: [
      {
        slug: "currency-converter",
        name: "Currency Converter",
        description: "Convert currencies right from your iPhone Lock Screen with Live Activities.",
        appStore: "https://apps.apple.com/us/app/currency-converter-vialive/id6814764703",
      },
    ],
  },
  ko: {
    tagline: "Live Activities를 지원하는 iPhone용 앱의 개인정보 처리방침과 지원 페이지입니다.",
    appsHeading: "앱",
    otherLocale: "English",
    appStore: "App Store에서 다운로드",
    appStoreBadge: {
      src: "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/ko-kr?releaseDate=1790553600",
      width: 156,
    },
    legal:
      "Apple, Apple 로고, iPhone 및 Live Activities는 미국 및 기타 국가에 등록된 Apple Inc.의 상표입니다. App Store는 미국 및 기타 국가에 등록된 Apple Inc.의 서비스 마크입니다. IOS는 미국 및 기타 국가에서 Cisco의 상표 또는 등록 상표이며 라이선스에 따라 사용됩니다.",
    privacy: "개인정보 처리방침",
    support: "지원",
    privacyHint: "수집하는 데이터와 이용 방식 안내",
    supportHint: "문의하기와 자주 묻는 질문",
    overview: "개요",
    search: "검색",
    searchEmpty: "검색 결과가 없습니다.",
    menu: "메뉴",
    contactTitle: "문의",
    contactDescription: "버튼을 누르면 양식이 채워진 이메일이 열립니다. 문제를 확인할 수 있도록 각 항목을 적어 주세요.",
    emailUs: "이메일 보내기",
    emailBody: "iPhone 모델:\niOS 버전:\n앱 버전:\n\n어떤 일이 있었나요:\n",
    apps: [
      {
        slug: "currency-converter",
        name: "환율계산기",
        description: "Live Activities로 iPhone 잠금 화면에서 바로 환율을 계산하세요.",
        appStore: "https://apps.apple.com/kr/app/id6814764703",
      },
    ],
  },
}

export type Locale = keyof typeof ui
export const locales = Object.keys(ui) as Locale[]

// English has no URL prefix, so it maps to an empty [...locale] param.
export const localeParam = (l: Locale) => (l === "en" ? undefined : l)
