# Currency Converter - In-App Purchases

App Store Connect setup for the app's in-app purchases (App → Monetization → In-App Purchases).
The Product ID must match `Apps/CurrencyConverter/ExRate/Store.swift` in vialive-apps, and
`Apps/CurrencyConverter/ExRate.storekit` there mirrors these settings for local testing in Xcode.

## Plus

First added in `currency-converter/1.1.0`. The first in-app purchase has to be submitted together with an app version.

| Field | Value |
|---|---|
| Type | Non-Consumable |
| Reference Name | Plus |
| Product ID | `com.ExRate.plus` |
| Price | USD 0.99 (base country: United States; other prices follow from it) |
| Family Sharing | Off |
| Tax Category | Match to parent app (App Store software) |
| Promotional image | None |

What it unlocks (from the app's Plus screen): save favorite currency pairs (up to 30), switch to the next favorite pair from the Lock Screen and widget, no ads.

### App Store Localization

Shown on the payment sheet, the App Store product page, receipts and the offer code redemption screen. The app's own Plus screen uses its own strings.

| Locale | Display Name (30) | Description (45) |
|---|---|---|
| Korean | 환율계산기 Plus | 자주 쓰는 통화쌍 저장, 잠금화면에서 전환 |
| English (U.S.) | Currency Converter Plus | Save favorite pairs, switch from Lock Screen |

### Review Information

For App Review only.

- Screenshot: the Plus screen (Settings → Upgrade to Plus).
- Review Notes: `Settings (top-left) → Upgrade to Plus. Plus removes ads and unlocks favorite currency pairs.`

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

- A Product ID can't be changed or reused once created. Changing it means changing `Store.swift` and `ExRate.storekit` and shipping a new build.
- Family Sharing can be turned on later, but once on it can't be turned off. If it's turned on, set `familyShareable` in `ExRate.storekit` to match.
