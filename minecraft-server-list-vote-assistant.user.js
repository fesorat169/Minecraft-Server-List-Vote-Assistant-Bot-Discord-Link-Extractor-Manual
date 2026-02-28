// ==UserScript==
// @name         Minecraft Server List Vote Assistant Bot + Link Extractor (Manual)
// @namespace    https://greasyfork.org/
// @version      1.0.1
// @description  Manual vote helper: highlights likely vote buttons, adds quick actions (scroll/open), and extracts Website/Discord/Shop links from server pages across many server lists.
// @author       you
// @license      MIT
// @run-at       document-end
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
//
// ---------------------------
// IMPORTANT
// This script does NOT auto-vote. It only helps you find buttons/links faster.
// ---------------------------
//
// @match        *://topcraft.club/*
// @match        *://*.topcraft.club/*
// @match        *://mctop.su/*
// @match        *://*.mctop.su/*
// @match        *://mcrate.su/*
// @match        *://*.mcrate.su/*
// @match        *://minecraftrating.ru/*
// @match        *://*.minecraftrating.ru/*
// @match        *://monitoringminecraft.ru/*
// @match        *://*.monitoringminecraft.ru/*
// @match        *://ionmc.top/*
// @match        *://*.ionmc.top/*
// @match        *://minecraftservers.org/*
// @match        *://*.minecraftservers.org/*
// @match        *://serveur-prive.net/*
// @match        *://*.serveur-prive.net/*
// @match        *://planetminecraft.com/*
// @match        *://*.planetminecraft.com/*
// @match        *://topg.org/*
// @match        *://*.topg.org/*
// @match        *://minecraft-mp.com/*
// @match        *://*.minecraft-mp.com/*
// @match        *://minecraft-server-list.com/*
// @match        *://*.minecraft-server-list.com/*
// @match        *://serverpact.com/*
// @match        *://*.serverpact.com/*
// @match        *://minecraftiplist.com/*
// @match        *://*.minecraftiplist.com/*
// @match        *://topminecraftservers.org/*
// @match        *://*.topminecraftservers.org/*
// @match        *://minecraftservers.biz/*
// @match        *://*.minecraftservers.biz/*
// @match        *://hotmc.ru/*
// @match        *://*.hotmc.ru/*
// @match        *://minecraft-server.net/*
// @match        *://*.minecraft-server.net/*
// @match        *://top-games.net/*
// @match        *://*.top-games.net/*
// @match        *://top-serveurs.net/*
// @match        *://*.top-serveurs.net/*
// @match        *://tmonitoring.com/*
// @match        *://*.tmonitoring.com/*
// @match        *://top.gg/*
// @match        *://*.top.gg/*
// @match        *://discordbotlist.com/*
// @match        *://*.discordbotlist.com/*
// @match        *://discords.com/*
// @match        *://*.discords.com/*
// @match        *://mmotop.ru/*
// @match        *://*.mmotop.ru/*
// @match        *://mc-servers.com/*
// @match        *://*.mc-servers.com/*
// @match        *://minecraftlist.org/*
// @match        *://*.minecraftlist.org/*
// @match        *://minecraft-index.com/*
// @match        *://*.minecraft-index.com/*
// @match        *://serverlist101.com/*
// @match        *://*.serverlist101.com/*
// @match        *://mcserver-list.eu/*
// @match        *://*.mcserver-list.eu/*
// @match        *://craftlist.org/*
// @match        *://*.craftlist.org/*
// @match        *://czech-craft.eu/*
// @match        *://*.czech-craft.eu/*
// @match        *://minecraft.buzz/*
// @match        *://*.minecraft.buzz/*
// @match        *://minecraftservery.eu/*
// @match        *://*.minecraftservery.eu/*
// @match        *://rpg-paradize.com/*
// @match        *://*.rpg-paradize.com/*
// @match        *://minecraft-serverlist.net/*
// @match        *://*.minecraft-serverlist.net/*
// @match        *://minecraft-server.eu/*
// @match        *://*.minecraft-server.eu/*
// @match        *://minecraftkrant.nl/*
// @match        *://*.minecraftkrant.nl/*
// @match        *://trackyserver.com/*
// @match        *://*.trackyserver.com/*
// @match        *://mc-lists.org/*
// @match        *://*.mc-lists.org/*
// @match        *://topmcservers.com/*
// @match        *://*.topmcservers.com/*
// @match        *://bestservers.com/*
// @match        *://*.bestservers.com/*
// @match        *://craft-list.net/*
// @match        *://*.craft-list.net/*
// @match        *://minecraft-servers-list.org/*
// @match        *://*.minecraft-servers-list.org/*
// @match        *://serverliste.net/*
// @match        *://*.serverliste.net/*
// @match        *://gtop100.com/*
// @match        *://*.gtop100.com/*
// @match        *://wargm.ru/*
// @match        *://*.wargm.ru/*
// @match        *://minestatus.net/*
// @match        *://*.minestatus.net/*
// @match        *://misterlauncher.org/*
// @match        *://*.misterlauncher.org/*
// @match        *://minecraft-servers.de/*
// @match        *://*.minecraft-servers.de/*
// @match        *://discord.boats/*
// @match        *://*.discord.boats/*
// @match        *://serverlist.games/*
// @match        *://*.serverlist.games/*
// @match        *://best-minecraft-servers.co/*
// @match        *://*.best-minecraft-servers.co/*
// @match        *://minecraftservers100.com/*
// @match        *://*.minecraftservers100.com/*
// @match        *://mc-serverlist.cz/*
// @match        *://*.mc-serverlist.cz/*
// @match        *://mineservers.com/*
// @match        *://*.mineservers.com/*
// @match        *://atlauncher.com/*
// @match        *://*.atlauncher.com/*
// @match        *://servers-minecraft.net/*
// @match        *://*.servers-minecraft.net/*
// @match        *://minecraft-list.cz/*
// @match        *://*.minecraft-list.cz/*
// @match        *://liste-serveurs-minecraft.org/*
// @match        *://*.liste-serveurs-minecraft.org/*
// @match        *://mcservidores.com/*
// @match        *://*.mcservidores.com/*
// @match        *://xtremetop100.com/*
// @match        *://*.xtremetop100.com/*
// @match        *://minecraft-server.sk/*
// @match        *://*.minecraft-server.sk/*
// @match        *://serveursminecraft.org/*
// @match        *://*.serveursminecraft.org/*
// @match        *://serveurs-mc.net/*
// @match        *://*.serveurs-mc.net/*
// @match        *://serveur-minecraft.com/*
// @match        *://*.serveur-minecraft.com/*
// @match        *://serveur-minecraft-vote.fr/*
// @match        *://*.serveur-minecraft-vote.fr/*
// @match        *://minebrowse.com/*
// @match        *://*.minebrowse.com/*
// @match        *://mc-server-list.com/*
// @match        *://*.mc-server-list.com/*
// @match        *://serverlocator.com/*
// @match        *://*.serverlocator.com/*
// @match        *://top-mmogames.ru/*
// @match        *://*.top-mmogames.ru/*
// @match        *://mmorpg.top/*
// @match        *://*.mmorpg.top/*
// @match        *://mmovote.ru/*
// @match        *://*.mmovote.ru/*
// @match        *://mc-monitoring.info/*
// @match        *://*.mc-monitoring.info/*
// @match        *://mcservertime.com/*
// @match        *://*.mcservertime.com/*
// @match        *://liste-serveurs.fr/*
// @match        *://*.liste-serveurs.fr/*
// @match        *://serveur-minecraft.fr/*
// @match        *://*.serveur-minecraft.fr/*
//
// @match        *://7daystodie-servers.com/*
// @match        *://*.7daystodie-servers.com/*
// @match        *://ark-servers.net/*
// @match        *://*.ark-servers.net/*
// @match        *://arma3-servers.net/*
// @match        *://*.arma3-servers.net/*
// @match        *://atlas-servers.io/*
// @match        *://*.atlas-servers.io/*
// @match        *://conan-exiles.com/*
// @match        *://*.conan-exiles.com/*
// @match        *://counter-strike-servers.net/*
// @match        *://*.counter-strike-servers.net/*
// @match        *://cubeworld-servers.com/*
// @match        *://*.cubeworld-servers.com/*
// @match        *://dayz-servers.org/*
// @match        *://*.dayz-servers.org/*
// @match        *://ecoservers.io/*
// @match        *://*.ecoservers.io/*
// @match        *://empyrion-servers.com/*
// @match        *://*.empyrion-servers.com/*
// @match        *://gmod-servers.com/*
// @match        *://*.gmod-servers.com/*
// @match        *://hurtworld-servers.net/*
// @match        *://*.hurtworld-servers.net/*
// @match        *://hytale-servers.io/*
// @match        *://*.hytale-servers.io/*
// @match        *://life-is-feudal.org/*
// @match        *://*.life-is-feudal.org/*
// @match        *://minecraftpocket-servers.com/*
// @match        *://*.minecraftpocket-servers.com/*
// @match        *://minecraft-tracker.com/*
// @match        *://*.minecraft-tracker.com/*
// @match        *://miscreated-servers.com/*
// @match        *://*.miscreated-servers.com/*
// @match        *://reign-of-kings.net/*
// @match        *://*.reign-of-kings.net/*
// @match        *://rust-servers.net/*
// @match        *://*.rust-servers.net/*
// @match        *://space-engineers.com/*
// @match        *://*.space-engineers.com/*
// @match        *://squad-servers.com/*
// @match        *://*.squad-servers.com/*
// @match        *://starbound-servers.net/*
// @match        *://*.starbound-servers.net/*
// @match        *://tf2-servers.com/*
// @match        *://*.tf2-servers.com/*
// @match        *://teamspeak-servers.org/*
// @match        *://*.teamspeak-servers.org/*
// @match        *://terraria-servers.com/*
// @match        *://*.terraria-servers.com/*
// @match        *://unturned-servers.net/*
// @match        *://*.unturned-servers.net/*
// @match        *://wurm-unlimited.com/*
// @match        *://*.wurm-unlimited.com/*
//
// @match        *://pixelmonservers.com/*
// @match        *://*.pixelmonservers.com/*
// @match        *://tekkitserverlist.com/*
// @match        *://*.tekkitserverlist.com/*
// @match        *://technicservers.com/*
// @match        *://*.technicservers.com/*
// @match        *://ftbservers.com/*
// @match        *://*.ftbservers.com/*
// @match        *://mineserv.top/*
// @match        *://*.mineserv.top/*
// @match        *://top100arena.com/*
// @match        *://*.top100arena.com/*
// @match        *://minecraftbestservers.com/*
// @match        *://*.minecraftbestservers.com/*
// @match        *://mclike.com/*
// @match        *://*.mclike.com/*
// @match        *://pixelmon-server-list.com/*
// @match        *://*.pixelmon-server-list.com/*
// @match        *://servidoresdeminecraft.es/*
// @match        *://*.servidoresdeminecraft.es/*
// @match        *://minecraftsurvivalservers.com/*
// @match        *://*.minecraftsurvivalservers.com/*
// @match        *://minecraft.global/*
// @match        *://*.minecraft.global/*
// @match        *://warface.com/*
// @match        *://*.warface.com/*
// @match        *://curseforge.com/*
// @match        *://*.curseforge.com/*
// @match        *://hoyolab.com/*
// @match        *://*.hoyolab.com/*
// @match        *://trackingservers.cloud/*
// @match        *://*.trackingservers.cloud/*
// @match        *://mclist.io/*
// @match        *://*.mclist.io/*
// @match        *://loliland.ru/*
// @match        *://*.loliland.ru/*
// @match        *://mcservers.top/*
// @match        *://*.mcservers.top/*
// @match        *://discadia.com/*
// @match        *://*.discadia.com/*
// @match        *://minecraftsurvivalservers.net/*
// @match        *://*.minecraftsurvivalservers.net/*
// @match        *://topservers.com/*
// @match        *://*.topservers.com/*
// @match        *://genshindrop.com/*
// @match        *://*.genshindrop.com/*
// @match        *://emeraldservers.com/*
// @match        *://*.emeraldservers.com/*
// @match        *://minecraftserver.buzz/*
// @match        *://*.minecraftserver.buzz/*
// @match        *://40servidoresmc.es/*
// @match        *://*.40servidoresmc.es/*
// @match        *://top-mc-servers.net/*
// @match        *://*.top-mc-servers.net/*
// @match        *://findmcserver.com/*
// @match        *://*.findmcserver.com/*
// @match        *://serveurliste.com/*
// @match        *://*.serveurliste.com/*
// @match        *://craftbook.cz/*
// @match        *://*.craftbook.cz/*
// @match        *://rovelstars.com/*
// @match        *://*.rovelstars.com/*
// @match        *://infinitybots.gg/*
// @match        *://*.infinitybots.gg/*
// @match        *://botlist.me/*
// @match        *://*.botlist.me/*
// @match        *://topminecraft.io/*
// @match        *://*.topminecraft.io/*
// @match        *://minelist.net/*
// @match        *://*.minelist.net/*
// @match        *://liste-serv-minecraft.fr/*
// @match        *://*.liste-serv-minecraft.fr/*
// @match        *://play-minecraft-servers.com/*
// @match        *://*.play-minecraft-servers.com/*
// @match        *://minecraft.menu/*
// @match        *://*.minecraft.menu/*
//
// ==/UserScript==
 
/*
MIT License
 
Copyright (c) 2026 you
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
 
(() => {
  "use strict";
 
  const SETTINGS = {
    panelDefaultOpen: true,
    highlightCandidates: true,
    maxVoteCandidatesToShow: 8,
    openLinksInNewTab: true,
    shopKeywords: [
      "shop","store","donate","donation","buy","purchase","premium","rank","ranks","webshop",
      "boutique","tienda","loja","магазин","донат","покуп","don","付款","购买","商城"
    ],
    voteKeywords: [
      "vote","voting","voter","vota","votar","voute","voter",
      "голос","голосовать","проголос",
      "stimme","abstimmen","stem","głos","hlasuj"
    ],
    discordHosts: ["discord.gg","discord.com/invite","discord.me","discord.io","discordapp.com/invite"],
    excludeHosts: ["facebook.com","twitter.com","x.com","instagram.com","tiktok.com","youtube.com","vk.com","t.me","telegram.me","reddit.com"],
  };
 
  GM_addStyle(`
    #va_panel{position:fixed;right:14px;bottom:14px;width:360px;max-height:70vh;overflow:auto;z-index:2147483647;
      font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,"Apple Color Emoji","Segoe UI Emoji";
      color:#eaeaea;background:rgba(20,20,20,.92);border:1px solid rgba(255,255,255,.12);border-radius:14px;
      box-shadow:0 10px 30px rgba(0,0,0,.45);backdrop-filter:blur(8px)}
    #va_panel header{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;position:sticky;top:0;
      background:rgba(20,20,20,.92);border-bottom:1px solid rgba(255,255,255,.08);border-top-left-radius:14px;border-top-right-radius:14px}
    #va_panel header .va_title{font-size:13px;font-weight:700;letter-spacing:.2px;display:flex;gap:8px;align-items:center;user-select:none}
    #va_panel header .va_title .badge{font-size:11px;font-weight:700;padding:2px 7px;border-radius:999px;
      background:rgba(255,255,255,.10);border:1px solid rgba(255,255,255,.08)}
    #va_panel header .va_btn{font-size:12px;padding:6px 8px;border-radius:10px;border:1px solid rgba(255,255,255,.14);
      background:rgba(255,255,255,.08);color:#fff;cursor:pointer}
    #va_panel .va_body{padding:10px 12px 12px}
    #va_panel .row{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}
    #va_panel .pill{font-size:12px;padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.14);
      background:rgba(255,255,255,.06);color:#fff;cursor:pointer}
    #va_panel .pill:hover{background:rgba(255,255,255,.10)}
    #va_panel .sectionTitle{font-size:12px;font-weight:800;margin-top:10px;margin-bottom:6px;opacity:.95;letter-spacing:.2px}
    #va_panel a.va_link{display:flex;justify-content:space-between;gap:10px;align-items:center;text-decoration:none;color:#eaeaea;
      padding:8px 10px;border-radius:12px;border:1px solid rgba(255,255,255,.10);background:rgba(255,255,255,.04);margin:6px 0;word-break:break-word}
    #va_panel a.va_link:hover{background:rgba(255,255,255,.08)}
    #va_panel a.va_link small{opacity:.8;font-size:11px;white-space:nowrap}
    #va_panel .muted{opacity:.75;font-size:12px;line-height:1.35}
    #va_panel .kv{display:flex;justify-content:space-between;gap:10px;margin:6px 0}
    #va_panel .kv code{font-size:11px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.10);
      padding:2px 6px;border-radius:8px;word-break:break-all}
    #va_panel .candidate{border-left:3px solid rgba(160,255,120,.75);padding-left:8px;margin:6px 0}
    .va_highlight_vote{outline:3px solid rgba(160,255,120,.85)!important;box-shadow:0 0 0 6px rgba(160,255,120,.25)!important;
      border-radius:10px!important;scroll-margin-top:90px!important}
  `);
 
  const norm = (s) => (s || "").toString().trim().toLowerCase().replace(/\s+/g, " ");
  const uniq = (arr) => Array.from(new Set(arr.filter(Boolean)));
 
  function hostOf(url) {
    try { return new URL(url, location.href).host.toLowerCase(); }
    catch { return ""; }
  }
 
  function isExcluded(url) {
    const h = hostOf(url);
    return SETTINGS.excludeHosts.some(ex => h.includes(ex));
  }
 
  function isDiscord(url) {
    const u = (url || "").toLowerCase();
    return SETTINGS.discordHosts.some(p => u.includes(p));
  }
 
  function looksLikeVoteText(text) {
    const t = norm(text);
    return SETTINGS.voteKeywords.some(k => t.includes(k));
  }
 
  function looksLikeShopText(text) {
    const t = norm(text);
    return SETTINGS.shopKeywords.some(k => t.includes(k));
  }
 
  function safeOpen(url) {
    if (!url) return;
    if (SETTINGS.openLinksInNewTab) GM_openInTab(url, { active: false, insert: true, setParent: true });
    else location.href = url;
  }
 
  function copy(text) {
    if (!text) return;
    GM_setClipboard(text, "text");
  }
 
  function getClickableCandidates() {
    const nodes = Array.from(document.querySelectorAll("a, button, input[type='button'], input[type='submit'], [role='button']"))
      .filter(el => {
        const style = window.getComputedStyle(el);
        if (style.visibility === "hidden" || style.display === "none") return false;
        const rect = el.getBoundingClientRect();
        if (rect.width < 30 || rect.height < 18) return false;
        return true;
      });
 
    const scored = nodes.map(el => {
      const tag = el.tagName.toLowerCase();
      const text = norm(el.innerText || el.value || el.getAttribute("aria-label") || "");
      const href = (tag === "a") ? (el.getAttribute("href") || "") : "";
      const idc = norm(`${el.id || ""} ${el.className || ""} ${el.getAttribute("name") || ""}`);
      const blob = `${text} ${href} ${idc}`.toLowerCase();
 
      let score = 0;
      if (looksLikeVoteText(blob)) score += 10;
      if (blob.includes("captcha")) score -= 2;
      if (blob.includes("login") || blob.includes("sign in") || blob.includes("register")) score -= 1;
      if (href && /\/vote\b|vote\=|action\=vote|\/voter\b/i.test(href)) score += 6;
      if (/btn|button|vote/i.test(idc)) score += 2;
 
      return { el, score, text, href };
    });
 
    return scored
      .filter(x => x.score >= 8)
      .sort((a, b) => b.score - a.score)
      .slice(0, SETTINGS.maxVoteCandidatesToShow);
  }
 
  function extractLinks() {
    const anchors = Array.from(document.querySelectorAll("a[href]"))
      .map(a => {
        const href = a.getAttribute("href");
        const text = norm(a.innerText || a.getAttribute("aria-label") || "");
        const abs = (() => { try { return new URL(href, location.href).toString(); } catch { return ""; } })();
        return { a, href, abs, text };
      })
      .filter(x => x.abs && !x.abs.startsWith("javascript:") && !x.abs.startsWith("mailto:") && !x.abs.startsWith("tel:"));
 
    const discord = anchors
      .filter(x => isDiscord(x.abs) || x.text.includes("discord"))
      .filter(x => !isExcluded(x.abs))
      .map(x => x.abs);
 
    const shop = anchors
      .filter(x => looksLikeShopText(`${x.text} ${x.abs}`))
      .filter(x => !isExcluded(x.abs))
      .map(x => x.abs);
 
    const currentHost = location.host.toLowerCase();
    const website = anchors
      .filter(x => {
        const h = hostOf(x.abs);
        if (!h) return false;
        if (h === currentHost) return false;
        if (isDiscord(x.abs)) return false;
        if (isExcluded(x.abs)) return false;
        if (looksLikeShopText(`${x.text} ${x.abs}`)) return false;
 
        const t = x.text;
        if (t.includes("website") || t.includes("site") || t.includes("homepage") || t.includes("web")) return true;
 
        const url = new URL(x.abs);
        if (url.pathname.length <= 2) return true;
        if (/\/(home|index|forum|rules)\b/i.test(url.pathname)) return true;
        return url.pathname.split("/").filter(Boolean).length <= 2;
      })
      .map(x => x.abs);
 
    return { discord: uniq(discord).slice(0, 5), shop: uniq(shop).slice(0, 5), website: uniq(website).slice(0, 5) };
  }
 
  function highlightCandidates(candidates) {
    document.querySelectorAll(".va_highlight_vote").forEach(el => el.classList.remove("va_highlight_vote"));
    candidates.forEach(c => c.el.classList.add("va_highlight_vote"));
  }
 
  function createPanel() {
    const panel = document.createElement("div");
    panel.id = "va_panel";
 
    const header = document.createElement("header");
    const title = document.createElement("div");
    title.className = "va_title";
    title.innerHTML = `🗳️ Vote Assistant <span class="badge">${location.host}</span>`;
 
    const toggle = document.createElement("button");
    toggle.className = "va_btn";
    toggle.textContent = SETTINGS.panelDefaultOpen ? "Hide" : "Show";
 
    header.appendChild(title);
    header.appendChild(toggle);
    panel.appendChild(header);
 
    const body = document.createElement("div");
    body.className = "va_body";
    panel.appendChild(body);
 
    document.body.appendChild(panel);
 
    const setVisible = (visible) => {
      body.style.display = visible ? "block" : "none";
      toggle.textContent = visible ? "Hide" : "Show";
    };
    setVisible(SETTINGS.panelDefaultOpen);
 
    toggle.addEventListener("click", () => {
      const visible = body.style.display === "none";
      setVisible(visible);
    });
 
    return { body };
  }
 
  function pill(text, onClick) {
    const b = document.createElement("button");
    b.className = "pill";
    b.textContent = text;
    b.addEventListener("click", onClick);
    return b;
  }
 
  function toast(msg) {
    const t = document.createElement("div");
    t.textContent = msg;
    t.style.position = "fixed";
    t.style.left = "14px";
    t.style.bottom = "14px";
    t.style.zIndex = "2147483647";
    t.style.padding = "10px 12px";
    t.style.borderRadius = "12px";
    t.style.background = "rgba(20,20,20,.92)";
    t.style.border = "1px solid rgba(255,255,255,.14)";
    t.style.color = "#fff";
    t.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1300);
  }
 
  function addLinksSection(root, title, links) {
    const t = document.createElement("div");
    t.className = "sectionTitle";
    t.textContent = title;
    root.appendChild(t);
 
    if (!links.length) {
      const p = document.createElement("div");
      p.className = "muted";
      p.textContent = "(none found)";
      root.appendChild(p);
      return;
    }
 
    links.forEach((url) => {
      const a = document.createElement("a");
      a.className = "va_link";
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
 
      const left = document.createElement("div");
      left.textContent = url;
 
      const right = document.createElement("small");
      right.textContent = "Copy";
      right.style.cursor = "pointer";
      right.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        copy(url);
        toast("Copied link");
      });
 
      a.appendChild(left);
      a.appendChild(right);
 
      root.appendChild(a);
    });
  }
 
  function render(root, state) {
    root.innerHTML = "";
 
    const row = document.createElement("div");
    row.className = "row";
    row.appendChild(pill("Refresh scan", () => state.refresh(true)));
    row.appendChild(pill("Copy all links", () => {
      const payload = [
        `Page: ${location.href}`,
        state.links.website.length ? `Website: ${state.links.website.join(" | ")}` : "Website: (none found)",
        state.links.discord.length ? `Discord: ${state.links.discord.join(" | ")}` : "Discord: (none found)",
        state.links.shop.length ? `Shop: ${state.links.shop.join(" | ")}` : "Shop: (none found)",
      ].join("\n");
      copy(payload);
      toast("Copied links payload to clipboard");
    }));
    root.appendChild(row);
 
    const candTitle = document.createElement("div");
    candTitle.className = "sectionTitle";
    candTitle.textContent = "Vote button candidates";
    root.appendChild(candTitle);
 
    if (!state.candidates.length) {
      const p = document.createElement("div");
      p.className = "muted";
      p.textContent = "No strong vote candidates found on this page. Try opening a server’s vote page, then hit Refresh scan.";
      root.appendChild(p);
    } else {
      state.candidates.forEach((c, idx) => {
        const wrap = document.createElement("div");
        wrap.className = "candidate";
 
        const meta = document.createElement("div");
        meta.className = "kv";
        meta.innerHTML = `<span>#${idx + 1} score</span><code>${c.score}</code>`;
        wrap.appendChild(meta);
 
        const text = document.createElement("div");
        text.className = "muted";
        text.textContent = (c.text || "(no text)").slice(0, 140);
        wrap.appendChild(text);
 
        const actions = document.createElement("div");
        actions.className = "row";
        actions.appendChild(pill("Scroll", () => c.el.scrollIntoView({ behavior: "smooth", block: "center" })));
        actions.appendChild(pill("Click", () => c.el.click()));
        if (c.href) {
          const abs = new URL(c.href, location.href).toString();
          actions.appendChild(pill("Open link", () => safeOpen(abs)));
          actions.appendChild(pill("Copy link", () => { copy(abs); toast("Copied candidate link"); }));
        }
        wrap.appendChild(actions);
 
        root.appendChild(wrap);
      });
    }
 
    addLinksSection(root, "Website links", state.links.website);
    addLinksSection(root, "Discord links", state.links.discord);
    addLinksSection(root, "Shop / Donate links", state.links.shop);
 
    const foot = document.createElement("div");
    foot.className = "muted";
    foot.style.marginTop = "10px";
    foot.textContent = "Tip: Works best on server detail pages where outgoing links are visible.";
    root.appendChild(foot);
  }
 
  const ui = createPanel();
 
  const state = {
    candidates: [],
    links: { website: [], discord: [], shop: [] },
    refresh: (rehighlight) => {
      state.candidates = getClickableCandidates();
      state.links = extractLinks();
      if (SETTINGS.highlightCandidates && rehighlight) highlightCandidates(state.candidates);
      render(ui.body, state);
    }
  };
 
  state.refresh(true);
 
  GM_registerMenuCommand("Vote Assistant: Refresh scan", () => state.refresh(true));
  GM_registerMenuCommand("Vote Assistant: Copy all links", () => {
    const payload = [
      `Page: ${location.href}`,
      state.links.website.length ? `Website: ${state.links.website.join(" | ")}` : "Website: (none found)",
      state.links.discord.length ? `Discord: ${state.links.discord.join(" | ")}` : "Discord: (none found)",
      state.links.shop.length ? `Shop: ${state.links.shop.join(" | ")}` : "Shop: (none found)",
    ].join("\n");
    copy(payload);
    toast("Copied links payload to clipboard");
  });
 
  // SPA route change detector
  let lastHref = location.href;
  setInterval(() => {
    if (location.href !== lastHref) {
      lastHref = location.href;
      setTimeout(() => state.refresh(true), 600);
    }
  }, 900);
})();
