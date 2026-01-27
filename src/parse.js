export function parse(text) {
  const answers = {};
  let out = text;

  out = out.replace(
    /\$([a-zA-Z0-9_]+)\(([^)]+)\)/g,
    (_, id, ans) => {
      answers[id] = ans;
      return blank(ans, id);
    }
  );

  out = out.replace(
    /\$\(([^)]+)\)/g,
    (_, ans) => blank(ans)
  );

  out = out.replace(
    /\$([a-zA-Z0-9_]+)/g,
    (_, id) => {
      if (!answers[id]) return _;
      return blank(answers[id], id);
    }
  );

  return out;
}

function blank(answer, id) {
  return `<span class="blank"${
    id ? ` data-id="${id}"` : ""
  } data-answer="${answer}">　　　</span>`;
}
