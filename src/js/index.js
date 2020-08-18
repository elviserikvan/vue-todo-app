import Vue from 'vue';
import Vuex from 'vuex';
import Main from '../components/Main.vue';

import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		msg: 'This comes from vuex',
		todos: ['Nojoda'],
		urlAPI: 'http://localhost:3000/api'
	},
	mutations: {
		showMsg(state) {
			console.log(state.msg);
		},
		async getAllTodos(state) {
			let response = await fetch(state.urlAPI);
			let data = await response.json();
			console.log(data);

//				.then(json => { 
//					state.todos = json;
//					console.log('GOt here');
//				})
//				.catch(e => console.error(e));

			state.todos = ['Coño nojoda'];
		},
		postNewTodo(state, data) {
			let config = {
				headers: {
					"Accept": 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(data)

			}

			fetch(state.urlAPI, config)
				.then(res => res.json())
				.then(json => console.log(json))
				.catch(e => console.error(e))
		
		}
	}
});

new Vue({
	render: h => h(Main),
	store
}).$mount('#app');
