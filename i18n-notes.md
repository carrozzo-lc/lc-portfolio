# i18n JSON structure – promemoria

## Struttura base (stabile)

- `Meta`: metadati pagina (title/description).
- `Nav`: voci di navigazione.
- `Hero`: contenuti hero (eyebrow, title, subtitle, CTA).
- `WorkPrinciples`: sezione “Come lavoro”.
- `ImpactAreas`: sezione “Aree di impatto”.
- `Experience`: sezione “Esperienze”.
- `CallToAction`: CTA finale.
- `Footer`: footer e social.
- `LanguageSwitcher`: label per switch lingua.

## Regole

1. Non usare più di 2 livelli di nesting.
2. Le chiavi devono essere semantiche (es. `ctaPrimary`, non `button1`).
3. Se una stringa è riusata in più punti, spostala in una sezione condivisa (es. `Footer`, `Nav`, oppure aggiungi un blocco `Common`).
4. Evita “chiavi generiche” (`text1`, `subtitle2`).
5. Mantieni la stessa struttura in `messages/it.json` e `messages/en.json`.
6. Per liste ripetute usa array (`items`, `points`, `highlights`, `tags`).
7. Se aggiungi una nuova sezione UI, crea un namespace dedicato con nome chiaro.

## Nota per future migrazioni CMS

Questa struttura è pensata per diventare facilmente “content models” separati per sezione. Non mescolare contenuti di sezioni diverse nello stesso namespace.
