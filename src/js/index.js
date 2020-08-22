import Vue from 'vue';
import Vuex from 'vuex';
import Main from '../components/Main.vue';

import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		msg: 'This comes from vuex',
		todos: [],
		urlAPI: 'http://localhost:3000/api',
		editing: false,
		editingTodo: null,
		todo: {
			title: '',
			body: ''
		}
	},
	mutations: {
		showMsg(state) {
			console.log(state.msg);
		},
		async getAllTodos(state) {
			let response = await fetch(state.urlAPI);
			let data = await response.json();
			state.todos = data;

		},
		postNewTodo(state) {
			let config = {
				headers: {
					"Accept": 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(state.todo)

			}


				fetch(state.urlAPI, config)
				.then(res => res.json())
				.then(json => state.todos.push(json))
				.catch(e => console.error(e))

			// Clear Form Fields
			state.todo.title = '';
			state.todo.body = '';
		},
		async deleteTodo(state, id) {
			
			let config = {
				headers: {
					"Accept": 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'DELETE'
			}

			let url = `${state.urlAPI}/${id}`;

			let response = await fetch(url, config);
			let data = await response.json();

			if (data.status == 'success') {
				state.todos = state.todos.filter(todo => todo._id != id);
			}else {
				console.log('Something happed');
			}	
		},
		async startEditingTodo(state, id) {

			// Get todo info to be updated
			let url = `${state.urlAPI}/${id}`;

			let response = await fetch(url);
			let data = await response.json();

			state.todo = data;
			state.editing = true;
//			console.log(state.todo);
		},
		async saveEditingTodo(state) {
			
			
			// Check if editing 
			if (state.editing) {

				let config = {
					headers: {
						"Accept": 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'PUT',
					body: JSON.stringify(state.todo)

				}


				let url = `${state.urlAPI}/${state.todo._id}`;

				let response = await fetch(url, config);
				let data = await response.json();

//				console.log(data);


			}

		},
		cancelEditing(state) {
			state.todo = {
				title: '',
				body: ''
			}
			state.editing = false;
		}
	},
	actions: {
		cancelAndDelete(store, id) {
			store.commit('cancelEditing');
			store.commit('startEditingTodo', id);
		}
	}
});

new Vue({
	render: h => h(Main),
	store
}).$mount('#app');
