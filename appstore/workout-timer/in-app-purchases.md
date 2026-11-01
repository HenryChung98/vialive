# Workout Timer - In-App Purchases

App Store Connect setup for the app's in-app purchases (App → Monetization → In-App Purchases).
The Product ID must match `Apps/WorkoutTimer/WorkoutTimer/Store.swift` in vialive-apps, and
`Apps/WorkoutTimer/WorkoutTimer.storekit` there mirrors these settings for local testing in Xcode.

## Plus

First added in `workout-timer/1.0.0`. The first in-app purchase has to be submitted together with an app version.

| Field | Value |
|---|---|
| Type | Non-Consumable |
| Reference Name | Plus |
| Product ID | `app.vialive.WorkoutTimer.plus` |
| Price | TODO (`WorkoutTimer.storekit` uses KRW 3,300 for local testing) |
| Family Sharing | On (`familyShareable: true` in `WorkoutTimer.storekit`) |
| Tax Category | Match to parent app (App Store software) |
| Promotional image | None |

What it unlocks (from the app's Plus screen): save multiple timers in a list, control timers from the Lock Screen, vibration and sound volume settings, no ads.

### App Store Localization

Shown on the payment sheet, the App Store product page, receipts and the offer code redemption screen. The app's own Plus screen uses its own strings.

| Locale | Display Name (30) | Description (45) |
|---|---|---|
| Korean | 운동 타이머 Plus | 여러 타이머 저장, 잠금화면 조작 |
| English (U.S.) | Workout Timer Plus | Save timers, control from the Lock Screen |

### Review Information

For App Review only.

- Screenshot: the Plus screen (Settings → Upgrade to Plus).
- Review Notes: `Settings (top-left) → Upgrade to Plus. Plus removes ads, saves multiple timers in a list, enables Lock Screen controls (Live Activity), and unlocks vibration and sound volume settings.`

### Offer codes

Free offers give Plus for good: a non-consumable never expires, and the code's expiration date only limits when it can be redeemed.
Codes work once the product and its app version are approved. The app needs no change to redeem them: `PlusStore` picks up the purchase from `Transaction.updates`.

- Offer Reference Name: `Plus Free - <who it's for>` (for example `Plus Free - Friends`). Only you see it.
- Customer Eligibility: Never made a purchase within your app (default). Plus is the only purchase, so buyers don't need a code.
- Offer type: Free Offer.

| Offer Reference Name | Type | Code type | Codes | Expires |
|---|---|---|---|---|
| TODO | Free | TODO (one-time use or custom) | TODO | TODO |

## Notes

- A Product ID can't be changed or reused once created. Changing it means changing `Store.swift` and `WorkoutTimer.storekit` and shipping a new build.
- Family Sharing is on in `WorkoutTimer.storekit`. Once turned on in App Store Connect it can't be turned off; if you'd rather keep it off, set `familyShareable` to `false` there.
