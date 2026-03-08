# HTTPS / SSL fix voor landgoedeigenaar.nl

De browser toont "Not secure" omdat de server nog geen geldig SSL-certificaat gebruikt. Onderstaande stappen lossen dat op.

## Wat je nodig hebt

- SSH-toegang tot de server (bijv. je rentmeester-server op 178.104.5.199)
- Het domein **landgoedeigenaar.nl** moet in DNS naar die server wijzen (A-record klopt al)

---

## Optie 1: Let's Encrypt + Certbot (gratis, aanbevolen)

### Op de server (via SSH)

1. **Certbot installeren** (Linux, bijv. Ubuntu/Debian):
   ```bash
   sudo apt update
   sudo apt install certbot
   ```
   Voor Nginx:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```
   Voor Apache:
   ```bash
   sudo apt install certbot python3-certbot-apache
   ```

2. **Certificaat aanvragen**
   - **Met Nginx:** Certbot past de config vaak zelf aan:
     ```bash
     sudo certbot --nginx -d landgoedeigenaar.nl -d www.landgoedeigenaar.nl
     ```
   - **Alleen certificaat (geen webserver-plugin):**
     ```bash
     sudo certbot certonly --standalone -d landgoedeigenaar.nl -d www.landgoedeigenaar.nl
     ```
     Zorg dat poort 80 tijdelijk vrij is (stop eventueel de webserver).

3. **Automatische verlenging** (meestal al geconfigureerd):
   ```bash
   sudo certbot renew --dry-run
   ```

4. **Webserver configureren voor HTTPS**
   - Certificaten staan o.a. in: `/etc/letsencrypt/live/landgoedeigenaar.nl/`
   - In je Nginx/Apache config: luisteren op poort 443, `ssl_certificate` en `ssl_certificate_key` naar die paden zetten, en bij voorkeur HTTP → HTTPS redirect.

---

## Optie 2: Caddy (automatisch SSL)

Caddy regelt SSL zelf (Let's Encrypt) als je het domein opgeeft:

```text
landgoedeigenaar.nl {
    root * /var/www/landgoedeigenaar
    file_server
}
```

Na herstart haalt Caddy een certificaat op en serveert HTTPS.

---

## Controle na afloop

- Bezoek **https://landgoedeigenaar.nl**
- In de adresbalk zou een slot-icoon en "Secure" moeten staan (geen rode "Not secure" meer).

---

## Veelvoorkomende oorzaken van "Not secure"

| Oorzaak | Oplossing |
|--------|-----------|
| Geen SSL-certificaat | Certbot of Caddy zoals hierboven |
| Certificaat voor ander domein | Certificaat opnieuw aanvragen met juiste domein |
| Alleen HTTP actief | Webserver ook op 443 (HTTPS) laten luisteren |
| Mixed content (HTTP op HTTPS-pagina) | Alle links/scripts op de site naar `https://` of relatief maken |

Als je vertelt welke software op de server draait (Nginx, Apache, Caddy, iets anders), kan de config concreet worden uitgeschreven.
