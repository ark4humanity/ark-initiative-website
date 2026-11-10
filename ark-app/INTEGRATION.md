# Connecting the future physical ARK

Status: November 10, 2026. Physical Poultry Palace, walkway, EDN, cartridges, trial plots and Little ARK are proposed and seeking funding. This release provides a working educational interface, shared record IDs and a read-only service adapter. Hardware, backend services, identity federation and commissioning are not delivered by this release.

## Shared identifiers

`public/systems.json` is the versioned registry. The app, later website content and field backend should refer to these identifiers rather than creating competing names. Its current statuses distinguish documentary existing features from proposed projects. The registry does not assert that a proposed node is installed. Preserve each record ID when a system is built; attach dated evidence before changing its status.

`edn-tree-01`: proposed local Tree hub. `walkway-01`: proposed corridor. `little-ark-01`: proposed sharing station. `trial-bed-01` through `trial-bed-06`: proposed 5×5 foot plot records, two per treatment. Locations require survey/assignment. Each record includes the Pillar relationship. `worlds.json` connects learning material to Pillar IDs.

## Telemetry service contract

GET HTTPS endpoint returning JSON; public aggregate environmental data only, no personal data. Browser CORS must allow the app origin. No embedded API secrets. Authentication and device ingestion belong on the server.

```json
{"schemaVersion":"1.0","readings":[{"nodeId":"edn-tree-01","sensorId":"flow-01","metric":"water-flow","value":1.2,"unit":"L/min","measuredAt":"2026-11-10T22:00:00Z","quality":"validated"}]}
```

This is a contract example, not a field reading. The adapter rejects unknown nodes, unsupported metrics/units, invalid values, timestamps over 30 seconds in the future, readings older than 15 minutes and quality other than validated. Supported metrics: soil-moisture (%), air-temperature (degC/degF), relative-humidity (%), water-flow (L/min), water-temperature (degC/degF), reservoir-level (%/L), soil-temperature (degC/degF). Percentages must be 0–100. Sensor calibration, unit conversion, site assignment and actual validation are the backend/commissioning team's responsibility. Fresh readings expire out of the interface. Requests time out after eight seconds by default. There is no polling by default.

## Inventory service contract

GET HTTPS endpoint returning JSON:

```json
{"schemaVersion":"1.0","nodeId":"little-ark-01","updatedAt":"2026-11-10T22:00:00Z","items":[{"id":"produce","name":"Seasonal produce","availableQuantity":0,"unit":"portions"}]}
```

Contract example only, not stock. All items require nonnegative integer quantities. Responses older than five minutes are rejected. This is display-only availability, not reservation, payment, entitlement or actuator authorization. Do not publish an inventory endpoint until the physical sharing station and stock reconciliation are operating. No purchase, passport or smartphone is required to receive hospitality.

## Activation sequence

1. Fund, engineer, build and independently commission physical systems, preserving manual operation and independent animal-care safeguards. Validate sanitary separation of drinking, koi, irrigation, medication and drainage paths. App state must never substitute for a physical interlock.
2. Implement ingestion and public read endpoints using the contracts above. Verify permissions, CORS, timestamps, calibration, units, failure behavior and absence of personal data.
3. Test the adapter with controlled fixtures in development. Fixtures are not deployed as live readings.
4. Only after commissioning, update `public/connections.json`: mode `commissioned`, verified `telemetryUrl` and/or `inventoryUrl`. Publish, verify actual fresh records, exercise offline/stale/invalid cases and record the release. Leaving an endpoint null keeps that service disconnected.
5. Attach dated evidence to registry records before moving them beyond proposed status. Keep hardware commissioning and digital release claims separate.

## Visitor identity and future kiosk

The optional passport is now implemented locally. `schemaVersion`, nickname (40 characters max), guardian text emblem, saved Pillar IDs and reflection IDs are exported as JSON. Storage is opt-in; import defaults to session-only; clear removes this browser's stored copy. There is no server ID, QR credential, cross-origin storage or kiosk recognition. Same-device app storage cannot silently synchronize to the website's different origin.

Future federation needs a server-issued opaque ID, explicit consent records, expiry/revocation, a bounded QR token exchange and a walk-up path requiring neither phone nor account. Do not treat nickname, passport JSON or local progress as identity proof or dispensing permission. Do not put medication, sensitive personal information or access secrets in a QR or passport. Physical devices need their own authorized backend, transaction reconciliation, fair-sharing policy, manual override and independent interlocks. No control endpoint is present here.

## Further work

Integrate original approved character art and sticker assets only after source identification and visual review. Reconcile actual planting inventory and approved drawings; attach sources and dates. Add authenticated field-entry workflows, cross-platform identity and a kiosk prototype after their service designs are established. No photographs or guardian films were replaced in this release.
