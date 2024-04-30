const key = "lng";

export function setLang(e: string) {
  return localStorage.setItem(key, e);
}

export function getLang() {
  return localStorage.getItem(key);
}
