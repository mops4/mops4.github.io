# PS4 WebKit Exploit (11.00 – 13.00)

A static WebKit exploit chain for the PlayStation 4.

This is a customized distribution maintained by **Mohamed Ramadan**,
featuring custom branding, interface design, and web delivery.

Based on SLOPKIT by Jordy, originally developed for the PS5, together with
publicly available PS4 security research and the original project components.

## Official Website

https://mops4.github.io/

## Firmware Support

The chain is selected automatically from the PlayStation 4 browser's
User-Agent.

| Firmware | Chain | Tested on hardware |
| -------- | ----- | ------------------ |
| 11.00 | lapse | Yes |
| 11.50 | lapse | Yes |
| 12.00 | lapse | Yes |
| 12.02 | lapse | Yes |
| 12.50 | poops | Yes |
| 12.52 | poops | Yes |
| 13.00 | poops | Yes |

## Usage

1. Open the PS4 browser.
2. Visit:

   https://mops4.github.io/

3. Wait for the page to finish its initial cache process.
4. Press X when prompted to start.

The exploit may not succeed on every attempt. A failed attempt can cause the
browser to crash or the console to restart. If an attempt fails, reload the
page and try again.

## Options

| Parameter | Effect |
| --------- | ------ |
| `?bug=lapse` / `?bug=poops` | Force a specific chain |
| `?verbose=1` | Enable detailed logging |
| `?slots=N` | Override the carrier array size |
| `?payload=1` | Enable payload execution when supported |

## How It Works

The project combines a WebKit exploitation layer with firmware-specific
components and a static web delivery system.

The browser automatically determines the firmware and selects the appropriate
chain.

The project also uses firmware-specific offset data, kernel patch components,
and the bundled payload where applicable.

## Hosting

The project is designed to work as a static website.

The offline delivery system uses `cache.appcache`. When modifying files,
the corresponding cache manifest information must also be updated so the PS4
does not continue using an older cached version.

GitHub Pages can be used to host the project.

## Credits

- **Mohamed Ramadan** — custom branding, interface design, website
  customization, and distribution modifications.
- **Jordy** — SLOPKIT and the original JavaScriptCore research.
- **GoldHEN Team** — GoldHEN payload and related project.
- **PS4/PS5 security research community** — publicly available vulnerability
  research and technical research used by the project.

Third-party components remain the property of their respective authors and
retain their original licenses and attribution.

## License

The original third-party components included in this project retain their
respective licenses.

Any original modifications made by **Mohamed Ramadan**, including custom
branding, interface changes, documentation, and distribution-specific work,
are provided under the terms specified in `LICENSE`.

Third-party components are not relicensed by this notice.

## Disclaimer

This project is intended for security research, education, and homebrew on
hardware you own.

Security research software can cause browser crashes, system restarts, data
loss, or other unexpected behavior. Use it at your own risk.

No game content is included with this project.
