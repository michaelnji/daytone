export function getOrSetItem(key: string, value = "") {
  const db = localStorage;
  if (db.getItem(key) == null) {
    db.setItem(key, JSON.stringify(value));
  } else {
    const item = db.getItem(key);
    return item == null ? item : JSON.parse(item);
  }
  return value;
}
export function getItemValue(key: string) {
  const db = localStorage;
  if (db.getItem(key) !== null) {
    const item = db.getItem(key);
    return item == null ? item : JSON.parse(item);
  }
  return null;
}

export function setItemValue(key: string, value = "") {
  const db = localStorage;
  if (key !== null) {
    db.setItem(key, JSON.stringify(value));
    return value;
  } else return null;
}
export function clearDB() {
  const db = localStorage;
  db.clear();
}
