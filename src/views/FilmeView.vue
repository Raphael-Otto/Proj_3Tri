<template>
    <div class="lds">
        <div class="l-esq">
            <img class="img-esq" src="@/assets/img_filme/DCS.jpg" alt="">
            <h2>Nome Filme</h2>
            <p>alguma coisa sobre o filme</p>
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
        </div>
    </div>
</template>

<style>

.lds{
    display: flex;
}
/*--------------------------------------------------*/
.img-esq {
  margin-top: 20px;
  background-color: rgb(148, 71, 71);
  height: 700px;
  width: 1300px;
  margin-left: 30px;
}

p{
    margin-left: 30px;
}
/*-----------------------------------------------------*/
.img-dir {
  margin-top: 20px;
  background-color: rgb(148, 71, 71);
  height: 145px;
  width: 490px;
  margin-left: 50px;
  border-radius: 10px;
}

/*-----------------------------------------------------*/

.dentro-img{
  background-color: rgb(56, 24, 24);
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
}

</style>