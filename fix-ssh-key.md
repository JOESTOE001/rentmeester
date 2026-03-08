# SSH-sleutel repareren

Je hebt al een SSH-sleutel: `id_ed25519` in `%USERPROFILE%\.ssh\`.

## Probleem
De **OpenSSH Authentication Agent** draait niet. Daardoor kan `ssh-add` de sleutel niet laden en kan Git/SSH je key niet gebruiken.

## Oplossing

### Stap 1: SSH-agent inschakelen (eenmalig, als Administrator)

1. **PowerShell als Administrator openen**
   - Rechtsklik op Start → "Windows PowerShell (Admin)" of "Terminal (Admin)"

2. **Service starten en automatisch maken:**
   ```powershell
   Set-Service -Name ssh-agent -StartupType Automatic
   Start-Service ssh-agent
   ```

3. Controle:
   ```powershell
   Get-Service ssh-agent
   ```
   Status moet **Running** zijn.

### Stap 2: Sleutel toevoegen aan de agent

In een **normale** PowerShell (niet per se admin):

```powershell
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

Als de sleutel een wachtwoord heeft, wordt die nu gevraagd.

### Stap 3: Testen

```powershell
ssh -T git@github.com
```

Verwacht: `Hi <username>! You've successfully authenticated...`

---

## Als je geen admin-rechten hebt

Git gebruikt op Windows soms ook de sleutel **zonder** agent. Dan moet het pad kloppen en de key bij je Git-host (GitHub/GitLab) staan.

- Controleer of je **publieke key** is toegevoegd:
  - GitHub: Settings → SSH and GPG keys
  - GitLab: Preferences → SSH Keys
- Kopieer de inhoud van:
  ```
  %USERPROFILE%\.ssh\id_ed25519.pub
  ```
  en plak die bij "New SSH key".

## Nieuwe sleutel maken (optioneel)

Als je een nieuwe key wilt:

```powershell
ssh-keygen -t ed25519 -C "jouw@email.nl" -f $env:USERPROFILE\.ssh\id_ed25519
```

Daarna opnieuw toevoegen aan GitHub/GitLab en (als de agent draait) `ssh-add` uitvoeren.
