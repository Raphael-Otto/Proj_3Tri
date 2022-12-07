<template>
  <header>
    <RouterLink to="/" style="text-decoration: none;">
      <a class="Header-Tit">Prototipo Filmes</a>
      <p class="Series-Tit">Séries</p>
      <p class="Filmes-Tit">Filmes</p>
      <p class="Atores-Tit">Atores</p>
    </RouterLink>
    <div class="Header-Inp">
      <input placeholder="Buscar..." type="text" />
        <button type="submit" class="Header-Search-Btn">
          <img src="@/assets/img/lupa.png" />
        </button>

      <RouterLink class="Header-Icon" to="/perfil_usuario"> <img src="@/assets/img/Icon.png" /> </RouterLink>
    </div>
  </header>
</template>

<style>

.tudo-s {
  display: flex;
  margin-top: 20px;
}

header {
  background-color: black;
  overflow: hidden;
}

header a{
  float: left;
  display: block;
  color: white;
  text-align: center;
  margin: 8px 16px;
  text-decoration: none;
  font-size: 17px;
  font-family: 'Bebas Neue', cursive;
}

header a.Header-Tit{
  font-size: 40px;
}

header a:hover{
  color: white;
}

header p.Series-Tit{
  float: left;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 20px 64px 0px 400px;
  text-decoration: none;
  font-size: 25px;
}

header p.Filmes-Tit{
  float: left;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 20px 64px 0px 32px;
  text-decoration: none;
  font-size: 25px;
}

header p.Atores-Tit{
  float: left;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  margin: 20px 64px 0px 32px;
  text-decoration: none;
  font-size: 25px;
}

/*****************************************************************/
.Header-Inp{
  float: right;
  align-items: center;
  padding: 23px 30px;
}

.Header-Inp img{
  width: 45px;
  padding-bottom: 5px;
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
  margin-top: 15px;
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
  height: 2 0px;
  object-fit: cover;
  margin-right: 30px;
}

.Header-Inp ::placeholder{
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  padding-top: 3.5px;
  font-size: 15px;
}

.Header-Icon{
  float: right;
}

</style>
