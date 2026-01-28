export function parse(text) {
  const ids = new Map();
  let n = 1;

  return text.replace(
    /\$([a-zA-Z0-9_]+)\(([^)]+)\)|\$\(([^)]+)\)|\$([a-zA-Z0-9_]+)/g,
    (m, id1, a1, a2, id2) => {
      if (id1) {
        if (!ids.has(id1)) ids.set(id1, [n++, a1]);
        return blank(a1, id1, ids.get(id1)[0]);
      }
      if (a2) return blank(a2, null, n++);
      if (id2 && ids.has(id2)) {
        const [num, ans] = ids.get(id2);
        return blank(ans, id2, num);
      }
      throw new Error(`未定義ID: ${id2}`);
    }
  );
}

function blank(answer, id, number) {
  return `
<span class="blank"
  data-answer="${answer}"
  ${id ? `data-id="${id}"` : ""}
>
  <span class="blank-number">${number}</span>
  <span class="blank-body">　　　</span>
</span>`;
}
