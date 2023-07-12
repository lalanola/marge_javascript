window.addEventListener("load", () => {
  document.getElementById("marge").addEventListener("click", () => {
    let str_array = [];
    Array.from(document.querySelectorAll("[data-marge]")).forEach((e) => {
      str_array.push(e.value);
    });
    let l = str_array.length - 1;
    let marge_str = str_array[0];
    for (let i = 1; i <= l; i++) {
      let add_str = "";
      for (let j = 1; j <= marge_str.length; j++) {
        let split1 = "";

        for (let k = 0; k < j; k++) {
          split1 += marge_str[marge_str.length - j + k];
        }

        let _break = 0;
        for (let l = 0; l < split1.length; l++) {
          if (split1[l] != str_array[i][l]) {
            _break = 1;
            break;
          }
        }
        if (!_break) {
          add_str = str_array[i].substring(split1.length);
        }
      }
      if (add_str) {
        marge_str += add_str;
      } else {
        marge_str += str_array[i];
      }
    }
    document.getElementById("result").innerHTML = marge_str;
  });
  document.getElementById("add").addEventListener("click", () => {
    let elements = document.querySelectorAll("[data-marge]");
    elements[elements.length - 1].insertAdjacentHTML(
      "afterend",
      '<p><input type="text" data-marge="true"></p>'
    );
  });
});
