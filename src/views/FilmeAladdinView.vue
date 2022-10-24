<template>
    <div class="lds">
        <div class="Esq">
            <div>
              <img class="Img_Filme" src="@/assets/img_filme/AladdinFilme.jpg" alt="">
                <h2 class="Tit_Filme">Aladdin</h2>
                <a class="Desc_Filme">Um jovem humilde descobre uma lâmpada mágica com 
                                      um gênio que pode conceder desejos. Agora, o 
                                      rapaz quer conquistar a moça por quem se 
                                      apaixonou, mas o que ele não sabe é que a jovem 
                                      é uma princesa que já está comprometida. Com a 
                                      ajuda do gênio, ele tenta se passar por um 
                                      príncipe para fisgar o amor da moça e a 
                                      confiança de seu pai.
                </a>
            </div>
        </div>
        <div class="l-dir">
            <div class="img-dir">
                <div class="dentro-img"></div>
                <div class="texto">Alguma coisa muito Fofa</div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
            <div class="img-dir">
                <div class="dentro-img"></div>
            </div>
        </div>
    </div>
</template>

<style>

.lds{
  margin-left: 2%;
  display: flex;
}
/*--------------------------------------------------*/
.Img_Filme {
  background-color: rgb(219, 170, 170);
  height: auto;
  width: auto;
}

.Tit_Filme{
  font-size: 40px;
  color: white;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
}

.Desc_Filme{
  font-family: 'Open Sans', sans-serif;
  max-width: 100px;
  height: 100px;
}

/*----------------------------------------------------*/

.img-dir {
  margin-top: 20px;
  background-color: #111111;
  height: 145px;
  width: 490px;
  margin-left: 7%;
  border-radius: 10px;
  float: left;
}

.dentro-img{
  background-color: #171C28;
  height: 125px;
  width: 210px;
  justify-content: center;
  margin-top: 10px;
  position: absolute;
  margin-left: 10px;
}

.texto{
  margin-left: 230px;
  position: absolute;
  margin-top: 15px;
  font-family: 'Open Sans', sans-serif;
}

/*-----------------------------------------------------*/


</style>