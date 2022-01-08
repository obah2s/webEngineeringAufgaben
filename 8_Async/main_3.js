let jsonText = 0;
       let menue;
        let topic = "";
        loadData().then(value => {
            jsonText = value;
        })
        async function loadData() {
            const resp = await fetch("Navigator.json");
            const respJson = await resp.json();
            console.log(respJson);
            return respJson;
        }
        function loadButtons(topic) {
            const sideDiv = document.getElementById("sideDiv");
            sideDiv.innerHTML = "";
            menue = jsonText[topic];
            for (let key in menue) {
                const button = document.createElement('button');
                button.innerHTML = key;
                button.innerHTML += `&nbsp`;
                button.onclick = () => loadArtical(key);
                sideDiv.appendChild(button);
            }
        }
        function fetchData(topic) {
            loadButtons(topic);
            const main = document.getElementsByTagName("p");
        }

        function loadArtical(underTopic) {
            const main = document.getElementById("main");
            const quelle = document.getElementById("quelle");
            main.innerHTML = menue[underTopic].content;
            quelle.innerHTML = menue[underTopic].references;
        }