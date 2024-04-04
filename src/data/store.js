
import {reactive} from 'vue';

export const store = reactive({
   apiUrlFilm: 'https://api.themoviedb.org/3/search/movie',
   apiUrlSerie: 'https://api.themoviedb.org/3/search/tv',
   apiKey: 'ad7f8d7ec98f877c41879ba586a2c138',

   filmArray: [],
   serieArray: [],

   filmUser: '',
});
