 // All your JS code for Home Page goes here
    // const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`;
    let cartInfo = JSON.parse(localStorage.getItem("buy")) || [];

    async function getdata() {
      let res = await fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
      );
      let data = await res.json();
      append(data.data);
    }

    getdata();

    function append(data) {
      let conti = document.getElementById("menu-container");
      conti.innerHTML = null;
      data.forEach((elem) => {
        let daba = document.createElement("div");

        let pic = document.createElement("img");
        pic.src = elem.image;

        let title = document.createElement("h1");
        title.innerText = elem.title;

        let p = document.createElement("p");
        p.innerText = elem.ingredients;

        let desc = document.createElement("p");
        desc.innerText = elem.description;

        let rate = document.createElement("p");
        rate.innerText = `Rs:${elem.price}`;

        let btn = document.createElement("button");
        btn.innerText = "Buy";
        btn.addEventListener("click", function () {
          if (cartInfo.indexOf(elem) !== -1) {
            alert("Already Placed Order");
          } else {
            elem.quantity = 1;
            elem.totalPrice = elem.price * elem.quantity;
            cartInfo.push(elem);
            localStorage.setItem("buy", JSON.stringify(cartInfo));
            alert("Successfully Placed Order");
          }
        });

        daba.append(pic, title, p, desc, rate, btn);
        conti.append(daba);
      });
    }

    async function handleCahnge() {
      var handle = document.getElementById("sort").value;
      if (handle == "asc") {
        let res = await fetch(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=asc"
        );
        let data = await res.json();
        append(data.data);
      }
      if (handle == "desc") {
        let res = await fetch(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=desc"
        );
        let data = await res.json();
        append(data.data);
      }
    }