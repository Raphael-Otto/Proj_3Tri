<script>
import axios from "axios";
import FilmesPrinComp from "../components/FilmesPrinComp.vue";
import FilmeApi from "../api/filmes.js";

const filmeapi = new FilmeApi();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
    };
  },
  components: {
    FilmesPrinComp
},
  async created() {
    this.filmes = await filmeapi.BuscarTodosOsFilmes();
    const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR`;
    const { data } = await axios.get(url);
    this.filme = data;
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>
<template>
  <div>
    <FilmesPrinComp
      v-model="filme"
      :nome_filme="filme.title"
      :data_lancamento="filme.release_date"
      :duracao="filme.runtime"
      :sinopse_filme="filme.overview"
      :key="filme.id"
      :poster="getPosterUrl(filme.poster_path)"
    />
  </div>
</template>