// Почему не работает return false?
// важность: 3
// Почему в коде ниже return false не работает?
// Браузер переходит по указанной ссылке, но нам этого не нужно.
// Как поправить?

<
script >
    function handler() {
        alert("...");
        return false;
    } <
    /script>

    <
    a href = "https://w3.org"
onclick = "handler()" > браузер откроет w3.org < /a> 

// необходимо в функцию передать event и прописать event.preventDefault()