
import {reactive} from 'vue';

export const store = reactive({
   apiUrl: 'https://api.themoviedb.org/3/search/movie',
   apiKey: 'ad7f8d7ec98f877c41879ba586a2c138',
   filmArray: [],
   filmUser: '',
});