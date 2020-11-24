var script, inputs, ids, ul;
init();
function init() {
  inputs = document.querySelector(".search_input");
  inputs.addEventListener(".search_input", inputHandler);
}

function inputHandler(e) {
  if (ids) return;
  ids = setTimeout(() => {
    clearTimeout(ids);
    ids = 0;
    if (script) {
      script.remove();
      script = null;
    }
    script = document.createElement("script");
    script.src =
      "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" +
      inputs.value +
      "&json=1&p=3&sid=22084_1436_13548_21120_22036_22073&req=2&csor=0&cb=callback";
    document.body.appendChild(script);
  }, 500);
}

function callback(data) {
  if (ul) {
    ul.remove();
    ul = null;
  }
  ul = document.createElement("ul");
  for (var i = 0; i < data.s.length; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href =
      "https://www.baidu.com/s?wd=" +
      data.s[i] +
      "&rsv_spt=1&rsv_iqid=0xb9333a9a0012f9b5&issp=1&f=3&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=is_0&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&rsv_sug2=1&rsv_btype=i&prefixsug=%25E4%25BD%25A0%25E5%25A5%25BD&rsp=0&inputT=2584&rsv_sug4=3448";
    a.textContent = data.s[i];
    li.appendChild(a);
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
