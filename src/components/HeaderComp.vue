<template>
  <header>
    <div>
      <h1 class="Header-Tit">Prototipo Filmes</h1>
    </div>
    <div class="Header-Inp">
      <input placeholder="Buscar..." type="text" />
      <button type="submit" class="Header-Search-Btn">
        <img src="@/assets/img/lupa.png" />
      </button>
    </div>
    <div class="Header-Icon">
      <img src="@/assets/img/Icon.png" />
    </div>
  </header>
</template>

<style>
header {
  background-color: black;
  height: 12%;
  font-size: 1.3rem;
  display: flex;
  color:white;
  align-items: center;
  font-family: "EB Garamond";
}

.Header-Tit{
  font-family: 'Bebas Neue', cursive;
  margin-left: 30px;
  margin-top: 5px;
  margin-bottom: 0px;
}

.Header-Inp {
  margin-left: 29%; 
}

.Header-Inp input{
  height: 30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  width: 300px;
  padding-left: 15px;
  border-radius: 14px;
  border-style: none;
  outline: none;
  border: none;
}

.Header-Search-Btn {
  background: transparent;
  border: none;
  outline: none;
  margin-left: -35px;
}

.Header-Search-Btn:focus {
  outline: 0;
}

.Header-Search-Btn img {
  width: 20px;
  height: 20px;
  object-fit: cover;
}

.Header-Inp ::placeholder{
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  padding-top: 3.5px;
  font-size: 15px;
}

.Header-Icon {
  text-align: right;
  padding: 30px;
  align-items: end;
  margin: 0px 0px 0px auto;
}

.Header-Icon img {
  width: 60px;
}
</style>
