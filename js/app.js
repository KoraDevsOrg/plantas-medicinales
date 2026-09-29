import { PLANTS_DATA } from "./data/plants.js";
import { KoraI18n, KORA_LANGUAGES } from "https://cdn.jsdelivr.net/gh/KoraDevsOrg/kora-web-sdk@main/kora-i18n.js";

class BotanyApp {
  constructor() {
    this.i18n = new KoraI18n("kora_botanica_lang", "es");
    this.searchQuery = "";
    this.activeCategory = "all";

    this.cacheDom();
    this.populateLanguageOptions();
    this.bindEvents();
    this.initKoraSync();
    this.render();
  }

  cacheDom() {
    this.sideDrawer = document.getElementById("sideDrawer");
    this.drawerBackdrop = document.getElementById("drawerBackdrop");
    this.btnOpenDrawer = document.getElementById("btnOpenDrawer");
    this.btnCloseDrawer = document.getElementById("btnCloseDrawer");
    this.drawerList = document.getElementById("drawerList");
    this.langSelect = document.getElementById("langSelect");
    this.mainContent = document.getElementById("mainContent");
    this.searchInput = document.getElementById("searchInput");
    this.appTitle = document.getElementById("appTitle");
    this.offlineBadge = document.getElementById("offlineBadge");
    this.footerText = document.getElementById("footerText");
    this.drawerTitle = document.getElementById("drawerTitle");
  }

  populateLanguageOptions() {
    this.langSelect.innerHTML = "";
    Object.values(KORA_LANGUAGES).forEach((lang) => {
      const opt = document.createElement("option");
      opt.value = lang.code;
      opt.textContent = lang.name;
      this.langSelect.appendChild(opt);
    });
    this.langSelect.value = this.i18n.getLang();
  }

  bindEvents() {
    this.btnOpenDrawer.addEventListener("click", () => this.toggleDrawer(true));
    this.btnCloseDrawer.addEventListener("click", () => this.toggleDrawer(false));
    this.drawerBackdrop.addEventListener("click", () => this.toggleDrawer(false));

    this.langSelect.addEventListener("change", (e) => {
      this.i18n.setLang(e.target.value);
      this.render();
    });

    this.searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.toLowerCase().trim();
      this.renderList();
    });
  }

  toggleDrawer(open) {
    this.sideDrawer.classList.toggle("open", open);
    this.drawerBackdrop.classList.toggle("active", open);
  }

  getI18nLabels() {
    const lang = this.i18n.getLang();
    const labels = {
      es: {
        appTitle: "Kora Plantas Medicinales",
        menuTitle: "Categorías",
        offlineTag: "100% Offline",
        searchPlaceholder: "Buscar por nombre, dolencia o síntoma...",
        cultivationTitle: "Cultivo y Cosecha Casera:",
        preparationTitle: "Preparación y Dosificación Segura:",
        warningTitle: "Contraindicaciones:",
        allCategories: "Todas las Plantas",
        footer: "Kora Botanica • Software Libre MIT • Conocimiento Comunitario"
      },
      guc: {
        appTitle: "Kora Wunu'u Mülianüin",
        menuTitle: "Süchikuwaya",
        offlineTag: "Ayatüsü namaa internet",
        searchPlaceholder: "Achechawaa wunu'u süpüla wanülüü...",
        cultivationTitle: "Apünajaa sulu'u piichi:",
        preparationTitle: "A'lakajawaa sümaa asawaa:",
        warningTitle: "Annoojolü cho'ujaain:",
        allCategories: "Supushuwa'a Wunu'u",
        footer: "Kora Botanica • Karalo'uta Anaasü MIT"
      },
      pbb: {
        appTitle: "Kora Yu'tse Thegni",
        menuTitle: "Ksxawte'saty",
        offlineTag: "Internet fxi'ze'yã'",
        searchPlaceholder: "Thegni kse'te yu'tse jxukwe...",
        cultivationTitle: "Ki'te thegni yaacxte:",
        preparationTitle: "Pi'sx yu'te ksa'j:",
        warningTitle: "Mee jxupxte thegme:",
        allCategories: "Tjuhnx Yu'tse",
        footer: "Kora Botanica • Fxize'we'sx MIT"
      }
    };
    return labels[lang] || labels.es;
  }

  render() {
    const l = this.getI18nLabels();
    this.appTitle.textContent = l.appTitle;
    this.offlineBadge.textContent = l.offlineTag;
    this.footerText.textContent = l.footer;
    this.drawerTitle.textContent = l.menuTitle;
    this.searchInput.placeholder = l.searchPlaceholder;

    // Renderizar categorías en el Drawer
    this.drawerList.innerHTML = "";
    const categories = [
      { id: "all", label: l.allCategories },
      { id: "digestivo", label: "Digestivo / Alapüna" },
      { id: "cicatrizante", label: "Cicatrizante / Piel" },
      { id: "respiratorio", label: "Respiratorio / Oono" }
    ];

    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = `drawer-item ${cat.id === this.activeCategory ? "active" : ""}`;
      btn.textContent = cat.label;
      btn.addEventListener("click", () => {
        this.activeCategory = cat.id;
        this.toggleDrawer(false);
        this.render();
      });
      this.drawerList.appendChild(btn);
    });

    this.renderList();
  }

  renderList() {
    const l = this.getI18nLabels();
    this.mainContent.innerHTML = "";

    const filtered = PLANTS_DATA.filter((p) => {
      const matchCat = this.activeCategory === "all" || p.category === this.activeCategory;
      const plantName = this.i18n.getText(p.names).toLowerCase();
      const sciName = p.scientificName.toLowerCase();
      const prep = this.i18n.getText(p.preparation).toLowerCase();
      const matchSearch = !this.searchQuery || plantName.includes(this.searchQuery) || sciName.includes(this.searchQuery) || prep.includes(this.searchQuery);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      this.mainContent.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-sub);">
          <p style="font-size: 1.1rem;">🌱 No se encontraron plantas para esta búsqueda.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((p) => {
      const card = document.createElement("div");
      card.className = "plant-card";
      card.innerHTML = `
        <div class="plant-header">
          <div>
            <div class="plant-name">${this.i18n.getText(p.names)}</div>
            <div class="plant-sci">${p.scientificName}</div>
          </div>
          <span class="plant-tag">${p.category}</span>
        </div>

        <div class="svg-container">${p.svg}</div>

        <div class="section-block">
          <h3>${l.cultivationTitle}</h3>
          <p>${this.i18n.getText(p.cultivation)}</p>
        </div>

        <div class="section-block">
          <h3>${l.preparationTitle}</h3>
          <p>${this.i18n.getText(p.preparation)}</p>
        </div>

        <div class="warning-box">
          <strong>${l.warningTitle}</strong> ${this.i18n.getText(p.warning)}
        </div>
      `;
      this.mainContent.appendChild(card);
    });
  }

  // Integración Kora Admin DB (Persistencia relacional SQLite)
  async initKoraSync() {
    if (typeof window.KoraSyncEngine !== "undefined") {
      const engine = new window.KoraSyncEngine({
        pkgName: "org.koradevs.botanica.plantas",
        appName: "Kora Plantas Medicinales",
        tableName: "mod_botanica_plantas",
        currentHtmlVersion: "1.0.0",
        tableDdl: `
          CREATE TABLE IF NOT EXISTS mod_botanica_plantas (
            id TEXT PRIMARY KEY,
            nombre_cientifico TEXT NOT NULL,
            categoria TEXT NOT NULL,
            svg_content TEXT NOT NULL
          );
        `,
        insertHandler: (db, item) => {
          const sql = `
            INSERT OR REPLACE INTO mod_botanica_plantas (id, nombre_cientifico, categoria, svg_content)
            VALUES (?, ?, ?, ?);
          `;
          db.execute(sql, JSON.stringify([item.id, item.nombre_cientifico, item.categoria, item.svg_content]));
        }
      });

      const syncItems = PLANTS_DATA.map((p) => ({
        id: p.id,
        nombre_cientifico: p.scientificName,
        categoria: p.category,
        svg_content: p.svg
      }));

      await engine.sync(syncItems);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new BotanyApp();
});
