<template>
  <header>
    <div>
      <h1 class="Header-Tit">Prototipo Filmes</h1>
    </div>
    <div class="Header-Inp">
      <input placeholder="Buscar..." type="text" />
    </div>
    <div class="user">
      <img src="" alt="">
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
  margin-left: 400px; 
}

.Header-Inp input{
  height: 30px;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  width: 300px;
  padding-left: 15px;
  border-radius: 14px;
  border: none;
}

.Header-Inp ::placeholder{
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  padding-top: 3.5px;
  font-size: 15px;
}
</style>
